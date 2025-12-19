export declare class Layout {
    private apiKey;
    constructor(apiKey: string);
    getManyLetterpapers(): Promise<import("../types/Response").IApiResponse<unknown>>;
    getManyTemplates(): Promise<import("../types/Response").IApiResponse<unknown>>;
    updateOneInvoiceTemplate(invoiceId: number, body: any): Promise<import("../types/Response").IApiResponse<unknown>>;
    updateOneOrderTemplate(orderId: number, body: any): Promise<import("../types/Response").IApiResponse<unknown>>;
    updateOneCreditNoteTemplate(creditNoteId: number, body: any): Promise<import("../types/Response").IApiResponse<unknown>>;
}
