import { InvoicePosModule_Response_GetMany } from "./types/response.types";
/**
 * @link https://api.sevdesk.de/#tag/InvoicePos
 */
export declare class InvoicePos {
    private apiKey;
    constructor(apiKey: string);
    /**
     * There are a multitude of parameter which can be used to filter.
     * @link https://api.sevdesk.de/#tag/InvoicePos/operation/getInvoicePos
     * @param invoiceId Retrieve all invoices positions with this invoice. Must be provided with invoice[objectName]
     * @param id Retrieve all InvoicePos with this InvoicePos id
     * @param partId Retrieve all invoices positions with this part. Must be provided with part[objectName]
     * @returns
     */
    getMany(invoiceId?: number, id?: number, partId?: number): Promise<import("../types/Response").IApiResponse<InvoicePosModule_Response_GetMany>>;
}
