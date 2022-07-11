export enum HttpStatusCode {
  OK = 200,
  unathorized = 401,
  noContent = 204,
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}
