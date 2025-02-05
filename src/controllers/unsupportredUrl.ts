import { RequestHandler } from 'express';
import { UNSUPPORTED_URL } from '../helpers/MIcroAuthHelper/ErrorCodes';
import { log_warn } from '../utils/log';
import { NotFoundResp } from '../types/ApiResponses';

export const unsupportedUrl: RequestHandler = (_, res) => {
  log_warn('Unsupported Url');
  new NotFoundResp(res, UNSUPPORTED_URL);
};
