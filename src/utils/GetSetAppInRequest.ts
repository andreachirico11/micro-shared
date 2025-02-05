import { Request } from 'express';

const CLIENT_IP = 'client_ip';

export abstract class GetSetRequestPropsBase {
  static getClientIp(req: Request) {
    return req[CLIENT_IP] as string;
  }

  static setClientIp(req: Request, ip: string) {
    req[CLIENT_IP] = ip;
  }
}
