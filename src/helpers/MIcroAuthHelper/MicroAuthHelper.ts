import fetch from 'node-fetch';
import { AuthErrorResponse, AuthSuccessResp } from './models';

export class MicroAuthHelper {
  constructor(private baseUrl: string) {}

  async checkToken(apiKey: string, authorization: string): Promise<AuthSuccessResp | AuthErrorResponse> {
    return await(
      await fetch(this.baseUrl + '/auth', { headers: { "app-api-key": apiKey, authorization } })
    ).json();
  }

  async ping() {
    const { ok } = await fetch(this.baseUrl + '/ping');
    return ok;
  }
}
