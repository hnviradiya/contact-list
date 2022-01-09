// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export class apiService {
  static async post(url: string, data: any) {
    const response = await axios.post(url, data);
    if (response.status === 302) {
      window.location.href = '/registration-login';
      return;
    }
    return response;
  }
}
