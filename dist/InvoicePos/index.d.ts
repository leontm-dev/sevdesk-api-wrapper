export declare class InvoicePos {
    private apiKey;
    constructor(apiKey: string);
    getMany(invoiceId?: number, id?: number, partId?: number): Promise<import("../types/Response").IApiResponse<unknown>>;
}
