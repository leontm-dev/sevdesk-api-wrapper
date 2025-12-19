import { TypeSafeRequestInit } from "./common.types";
import { IApiResponse } from "./Response";
export declare class API {
    private readonly apiKey;
    constructor(apiKey: string);
    request<T>(url: string, query: Record<string, string> | undefined, options: TypeSafeRequestInit): Promise<IApiResponse<T>>;
}
