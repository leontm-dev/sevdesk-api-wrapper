export interface IApiResponse<T = null> {
    httpStatus: number;
    message: string;
    data: T;
    at: Date;
    ok: boolean;
}
export declare class ApiResponse<T = null> implements IApiResponse<T> {
    httpStatus: number;
    message: string;
    data: T;
    at: Date;
    ok: boolean;
    constructor(httpStatus: number, message: string, data: T);
    toJSON(): {
        httpStatus: number;
        message: string;
        data: T;
        at: T;
        ok: boolean;
    };
    toString(): string;
}
