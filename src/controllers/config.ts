import { RequestHandler } from 'express';
import { getClientIp } from 'request-ip';
import { log_info } from '../utils/log';
import { GetSetRequestPropsBase } from '../utils/GetSetAppInRequest';

export const configRequest: RequestHandler = async (req, _, next) => {
  const ipAddress = getClientIp(req);
  log_info(ipAddress, 'GOT REQUEST FROM: ');
  GetSetRequestPropsBase.setClientIp(req, ipAddress);
  next();
};
