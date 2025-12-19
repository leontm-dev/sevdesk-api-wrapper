export declare class Order {
    private apiKey;
    constructor(apiKey: string);
    getMany(status?: 100 | 200 | 300 | 500 | 750 | 1000, orderNumber?: string, startDate?: Date, endDate?: Date, contactId?: number): Promise<import("../types/Response").IApiResponse<unknown>>;
    createOne(body: any): Promise<import("../types/Response").IApiResponse<unknown>>;
    getOne(orderId: number): Promise<import("../types/Response").IApiResponse<unknown>>;
    updateOne(orderId: number, body: any): Promise<import("../types/Response").IApiResponse<unknown>>;
    deleteOne(orderId: number): Promise<import("../types/Response").IApiResponse<unknown>>;
    getManyOrderPositions(orderId: number): Promise<import("../types/Response").IApiResponse<unknown>>;
    getManyOrderDiscounts(orderId: number): Promise<import("../types/Response").IApiResponse<unknown>>;
    getManyRelatedObjects(orderId: number): Promise<import("../types/Response").IApiResponse<unknown>>;
    sendOneViaEmail(orderId: number, body: any): Promise<import("../types/Response").IApiResponse<unknown>>;
    createPackagingListFromOrder(orderId: number, body: any): Promise<import("../types/Response").IApiResponse<unknown>>;
    createContractNoteFromOrder(orderId: number, body: any): Promise<import("../types/Response").IApiResponse<unknown>>;
    getOnesPdf(orderId: number, download: boolean, preventSendBy: boolean): Promise<import("../types/Response").IApiResponse<unknown>>;
    markOneAsSent(orderId: number, body: any): Promise<import("../types/Response").IApiResponse<unknown>>;
}
