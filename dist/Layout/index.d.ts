import { LayoutModule_Body_UpdateOneCreditNoteTemplate, LayoutModule_Body_UpdateOneInvoiceTemplate, LayoutModule_Body_UpdateOneOrderTemplate } from "./types/body.types";
import { LayoutModule_Response_GetManyLetterpapers, LayoutModule_Response_GetManyTemplates, LayoutModule_Response_UpdateOneCreditNoteTemplate, LayoutModule_Response_UpdateOneInvoiceTemplate, LayoutModule_Response_UpdateOneOrderTemplate } from "./types/response.types";
/**
 * @link https://api.sevdesk.de/#tag/Layout
 */
export declare class Layout {
    private apiKey;
    constructor(apiKey: string);
    /**
     * Retrieve all letterpapers with Thumb
     * @link https://api.sevdesk.de/#tag/Layout/operation/getLetterpapersWithThumb
     * @returns
     */
    getManyLetterpapers(): Promise<import("../types/Response").IApiResponse<LayoutModule_Response_GetManyLetterpapers>>;
    /**
     * Retrieve all templates
     * @link https://api.sevdesk.de/#tag/Layout/operation/getTemplates
     * @returns
     */
    getManyTemplates(): Promise<import("../types/Response").IApiResponse<LayoutModule_Response_GetManyTemplates>>;
    /**
     * Update an existing invoice template
     * @link https://api.sevdesk.de/#tag/Layout/operation/updateInvoiceTemplate
     * @param invoiceId ID of invoice to update
     * @param body Change Layout
     * @returns
     */
    updateOneInvoiceTemplate(invoiceId: number, body: LayoutModule_Body_UpdateOneInvoiceTemplate): Promise<import("../types/Response").IApiResponse<LayoutModule_Response_UpdateOneInvoiceTemplate>>;
    /**
     * Update an existing order template
     * @link https://api.sevdesk.de/#tag/Layout/operation/updateOrderTemplate
     * @param orderId ID of order to update
     * @param body Change Layout
     * @returns
     */
    updateOneOrderTemplate(orderId: number, body: LayoutModule_Body_UpdateOneOrderTemplate): Promise<import("../types/Response").IApiResponse<LayoutModule_Response_UpdateOneOrderTemplate>>;
    /**
     * Update an existing of credit note template
     * @link https://api.sevdesk.de/#tag/Layout/operation/updateCreditNoteTemplate
     * @param creditNoteId ID of credit note to update
     * @param body Change Layout
     * @returns
     */
    updateOneCreditNoteTemplate(creditNoteId: number, body: LayoutModule_Body_UpdateOneCreditNoteTemplate): Promise<import("../types/Response").IApiResponse<LayoutModule_Response_UpdateOneCreditNoteTemplate>>;
}
