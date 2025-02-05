export const GENERIC = 'MNA_1';
export const UNSUPPORTED_URL = 'MNA_2';
export const VALIDATION = 'MNA_3';
export const INTERNAL_SERVER = 'MNA_4';
export const NON_EXISTENT = 'MNA_5';
export const UNAUTHORIZED = 'MNA_6';
export const NO_RESPONSE = 'MNA_7';
export const MISSING_PARAM = 'MNA_8';
export const BAD_DECRYPT = 'MNA_9';
export const FILE_EXISTS = 'MNA_10';
export const UPLOAD_ERROR = 'MNA_11';



export type ErrorCodes =
  | typeof GENERIC
  | typeof UNSUPPORTED_URL
  | typeof VALIDATION
  | typeof INTERNAL_SERVER
  | typeof UNAUTHORIZED
  | typeof NO_RESPONSE
  | typeof NON_EXISTENT
  | typeof MISSING_PARAM
  | typeof BAD_DECRYPT
  | typeof FILE_EXISTS
  | typeof UPLOAD_ERROR;
