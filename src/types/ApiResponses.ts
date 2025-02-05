import { Response } from 'express';
import { BAD_DECRYPT, ErrorCodes, INTERNAL_SERVER, UNAUTHORIZED, VALIDATION } from './ErrorCodes';

const sender = (res: Response, status, json: any) => res.status(status).json(json);

export class SuccessResponse {
  constructor(res: Response, payload?: any) {
    if (!!payload && typeof payload === 'string') {
        payload = {message: payload};
    }
    sender(res, 200, {success: true, ...payload && {payload}});
  }
}

export abstract class ErrorResponse {
    constructor(res: Response, status: number, errCode: ErrorCodes, errors: string[] = null) {
        sender(res, status, {success: false, errCode, ...errors && {errors}});
    }
}

export class ServerErrorResp extends ErrorResponse {
  constructor(res: Response, errCode: ErrorCodes = INTERNAL_SERVER, errors: string[] = null) {
    super(res, 500, errCode, errors);
  }
}

export class ServerErrorRespWithMessage extends ServerErrorResp {
  constructor(res: Response, message: string) {
    super(res, INTERNAL_SERVER, [message]);
  }
}

export class SeviceUnavailable extends ErrorResponse {
    constructor(res: Response, errCode: ErrorCodes) {
        super(res, 503, errCode);
    }
}

export class NotFoundResp extends ErrorResponse {
    constructor(res: Response, errCode: ErrorCodes, errors: string[] | string = null) {
        super(res, 404, errCode, Array.isArray(errors) ? errors : [errors]);
    }
}

export class ValidationErrResp extends ErrorResponse {
    constructor(res: Response, errors: string[] = null) {
        super(res, 422, VALIDATION, errors);
    }
}


export class UnauthorizedResp extends ErrorResponse {
    constructor(res: Response, customMessage = "Password doesn't match") {
        super(res, 401, UNAUTHORIZED, [customMessage]);
    }
}

export class BadDecrypt extends ErrorResponse {
  constructor(res: Response, errors: string[] = null) {
    super(res, 422, BAD_DECRYPT, errors);
  }
}
