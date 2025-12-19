export declare class Invoice {
    private apiKey;
    constructor(apiKey: string);
    getMany(status?: 100 | 200 | 1000, invoiceNumber?: string, startDate?: Date, endDate?: Date, contactId?: number): Promise<import("../types/Response").IApiResponse<unknown>>;
    createOne(body: any): Promise<import("../types/Response").IApiResponse<unknown>>;
    getOne(invoiceId: number): Promise<import("../types/Response").IApiResponse<unknown>>;
    getOnesPositions(invoiceId: number, limit?: number, offset?: number, embed?: string[]): Promise<import("../types/Response").IApiResponse<unknown>>;
    createOneFromOrder(body: any): Promise<import("../types/Response").IApiResponse<unknown>>;
    createReminder(body: any): Promise<import("../types/Response").IApiResponse<unknown>>;
    checkIfOneIsPartiallyPaid(invoiceId: number): Promise<import("../types/Response").IApiResponse<unknown>>;
    cancelOne(invoiceId: number): Promise<import("../types/Response").IApiResponse<unknown>>;
    renderOne(invoiceId: number, body: any): Promise<import("../types/Response").IApiResponse<unknown>>;
    sendOneViaEmail(invoiceId: number, body: any): Promise<import("../types/Response").IApiResponse<unknown>>;
    getOnesPdf(invoiceId: number): Promise<import("../types/Response").IApiResponse<unknown>>;
    getOnesXML(invoiceId: number): Promise<import("../types/Response").IApiResponse<unknown>>;
    markOneAsSent(invoiceId: number, body: any): Promise<import("../types/Response").IApiResponse<unknown>>;
    enshrineOne(invoiceId: number): Promise<import("../types/Response").IApiResponse<unknown>>;
    bookOne(invoiceId: number, body: any): Promise<import("../types/Response").IApiResponse<unknown>>;
    resetOnesStatusToOpen(invoiceId: number): Promise<import("../types/Response").IApiResponse<unknown>>;
    resetOnesStatusToDraft(invoiceId: number): Promise<import("../types/Response").IApiResponse<unknown>>;
}
