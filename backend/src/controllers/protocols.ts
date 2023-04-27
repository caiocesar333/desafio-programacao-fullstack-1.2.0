/* eslint-disable @typescript-eslint/no-explicit-any */

export interface HttpResponse<T> {
    statusCode: number,
    body: T | string,
}

export interface HttpRequest<B> {
    params?: any,
    header?: any
    body?: B,
}