export declare class Part {
    private apiKey;
    constructor(apiKey: string);
    getMany(partNumber?: string, name?: string): Promise<import("../types/Response").IApiResponse<unknown>>;
    createOne(body: any): Promise<import("../types/Response").IApiResponse<unknown>>;
    getOne(partId: number): Promise<import("../types/Response").IApiResponse<unknown>>;
    updateOne(partId: number, body: any): Promise<import("../types/Response").IApiResponse<unknown>>;
    getOnesStock(partId: number): Promise<import("../types/Response").IApiResponse<unknown>>;
}
