import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
import { NextServer } from 'next/dist/server/next';

export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private nextServer: NextServer) {}

  public catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();

    if (status === 404) {
      this.nextServer.getRequestHandler()(request, response);
    } else {
      response.status(status).json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    }
  }
}
