import { IncomingHttpHeaders } from 'http';
import { Request } from 'express';
import { ParsedUrlQuery } from 'querystring';


export type HeaderBase = { [key: string]: string };
export type HeaderApiKey = { 'app-api-key': string };
export type HeaderAuthorization = { authorization: string };

export interface RequestWithCustomHeader<
  TParams,
  Tbody,
  Tbody2,
  THeader extends IncomingHttpHeaders
> extends Request<TParams, Tbody, Tbody2> {
  headers: THeader;
}

export interface RequestWithCustomQuery<TParams, Tbody, Tbody2, TQuery extends ParsedUrlQuery>
  extends Request<TParams, Tbody, Tbody2> {
  query: TQuery;
}

export type ReqWithCustHeaderAndQuery<
  TParams,
  Tbody,
  Tbody2,
  THeader extends IncomingHttpHeaders,
  TQuery extends ParsedUrlQuery
> = RequestWithCustomHeader<TParams, Tbody, Tbody2, THeader> &
  RequestWithCustomQuery<TParams, Tbody, Tbody2, TQuery>;

export interface ProtectedRequest<TParams, Tbody, Tbody2>
  extends Request<TParams, Tbody, Tbody2> {
  headers: HeaderApiKey & HeaderAuthorization;
}

export interface ProtectedRequestWithCustomQuery<TParams, Tbody, Tbody2, Tquery extends ParsedUrlQuery>
  extends ProtectedRequest<TParams, Tbody, Tbody2> {
  query: Tquery;
}

export interface ProtectedRequestWithCustomHeaders<
  TParams,
  Tbody,
  Tbody2,
  TCustomHeaders extends HeaderBase
> extends ProtectedRequest<TParams, Tbody, Tbody2> {
  headers: HeaderApiKey & HeaderAuthorization & TCustomHeaders;
}