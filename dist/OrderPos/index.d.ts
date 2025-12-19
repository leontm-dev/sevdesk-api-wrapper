export declare class OrderPos {
    private apiKey;
    constructor(apiKey: string);
    getMany(orderId?: number): Promise<import("../types/Response").IApiResponse<unknown>>;
    getOne(orderPosId: number): Promise<import("../types/Response").IApiResponse<unknown>>;
    updateOne(orderPosId: number, body: any): Promise<import("../types/Response").IApiResponse<unknown>>;
    deelteOne(orderPosId: number): Promise<import("../types/Response").IApiResponse<unknown>>;
}
