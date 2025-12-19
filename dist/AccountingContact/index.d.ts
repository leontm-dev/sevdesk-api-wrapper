import { createAccountingContactBody, updateAccountingContactBody } from "./types/body.types.js";
import { getAccountingContactResponse, getAccountingContactByIdResponse, deleteAccountingContactResponse } from "./types/response.types.js";
/**
 * A accounting contact object belongs to one specific contact object and holds the accounting information for this contact, which is mainly the vendor / receivable accounts number.
This information is very important to guarantee valid bookkeeping reports.
As this endpoint is also pretty easy to understand, we won't cover it here, but we really recommend you having a look at the POST to create accounting contacts and at the request which checks if a number is still available.
  * @link https://api.sevdesk.de/#tag/AccountingContact
 */
export declare class AccountingContact {
    private apiKey;
    constructor(apiKey: string);
    /**
     * Returns all accounting contact which have been added up until now. Filters can be added.
     * @link https://api.sevdesk.de/#tag/AccountingContact/operation/getAccountingContact
     * @param contactId ID of contact for which you want the accounting contact.
     * @returns
     */
    getMany(contactId?: string): Promise<import("../types/Response.js").IApiResponse<getAccountingContactResponse>>;
    /**
     * Creates a new accounting contact.
     * @link https://api.sevdesk.de/#tag/AccountingContact/operation/createAccountingContact
     * @param body Creation data
     * @returns Returns created accounting contact
     */
    createOne(body: createAccountingContactBody): Promise<import("../types/Response.js").IApiResponse<import("./types/base.types.js").AccountingContact>>;
    /**
     * Returns a single accounting contact
     * @link https://api.sevdesk.de/#tag/AccountingContact/operation/getAccountingContactById
     * @param accountingContactId ID of accounting contact to return
     * @returns
     */
    getOne(accountingContactId: number): Promise<import("../types/Response.js").IApiResponse<getAccountingContactByIdResponse>>;
    /**
     * Attention, updating an existing AccountingContact can lead to booking errors, especially in the DATEV export. Compatibility of sevdesk with DATEV is no longer guaranteed.
     * @link https://api.sevdesk.de/#tag/AccountingContact/operation/updateAccountingContact
     * @param accountingContactId ID of accounting contact to update
     * @param body Update data
     * @returns Returns changed accounting contact resource
     */
    updateOne(accountingContactId: number, body: updateAccountingContactBody): Promise<import("../types/Response.js").IApiResponse<import("./types/base.types.js").AccountingContact>>;
    /**
     * Attention, deleting an existing AccountingContact can lead to booking errors, especially in the DATEV export. Compatibility of sevdesk with DATEV is no longer guaranteed.
     * @link https://api.sevdesk.de/#tag/AccountingContact/operation/deleteAccountingContact
     * @param accountingContactId Id of accounting contact resource to delete
     * @returns
     */
    deleteOne(accountingContactId: number): Promise<import("../types/Response.js").IApiResponse<deleteAccountingContactResponse>>;
}
