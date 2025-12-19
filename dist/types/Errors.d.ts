export interface IApiError {
    httpStatus: number;
    message: string;
    at: Date;
}
export declare class APIError implements IApiError {
    httpStatus: number;
    message: string;
    at: Date;
    constructor(httpStatus: number, message: string);
    toJSON(): {
        at: Date;
        httpStatus: number;
        message: string;
    };
    toString(): string;
}
