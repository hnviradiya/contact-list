// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export class apiService {
  static async post(url: string, params: any) {
    const { data, status } = await axios.post(url, params);
    if (status === 302) {
      window.location.href = '/registration-login';
      return;
    }
    return data;
  }

  static async get(url: string, params: any) {
    const { data, status } = await axios.get(url, params);
    if (status === 302) {
      window.location.href = '/registration-login';
      return;
    }
    return data;
  }
}
