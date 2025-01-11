import { IResponse } from "../types/Response.js";
import { CreateANewAccountingContactBody, UpdateAnExistingAccountingContactBody } from "./types/body.types.js";
import { FindAccountingContactByIDResponse, CreateANewAccountingContactResponse, UpdateAnExistingAccountingContactResponse, DeletesAnAccountingContactResponse, RetrieveAccountingContactResponse } from "./types/response.types.js";
export declare class AccountingContact {
    private apiKey;
    constructor(apiKey: string);
    /**
     * Returns all accounting contact which have been added up until now. Filters can be added.
     * @param contactId ID of contact for which you want the accounting contact.
     * @returns
     */
    retrieveAccountingContact(contactId: string): Promise<IResponse<RetrieveAccountingContactResponse>>;
    /**
     * Creates a new accounting contact.
     * @param body Creation data
     * @returns Returns created accounting contact
     */
    createANewAccountingContact(body: CreateANewAccountingContactBody): Promise<IResponse<CreateANewAccountingContactResponse>>;
    /**
     * Returns a single accounting contact
     * @param accountingContactId ID of accounting contact to return
     * @returns
     */
    findAccountingContactByID(accountingContactId: number): Promise<IResponse<FindAccountingContactByIDResponse>>;
    /**
     * Attention, updating an existing AccountingContact can lead to booking errors, especially in the DATEV export. Compatibility of sevdesk with DATEV is no longer guaranteed.
     * @param accountingContactId ID of accounting contact to update
     * @param body Update data
     * @returns Returns changed accounting contact resource
     */
    updateAnExistingAccountingContact(accountingContactId: number, body: UpdateAnExistingAccountingContactBody): Promise<IResponse<UpdateAnExistingAccountingContactResponse>>;
    deletesAnAccountingContact(accountingContactId: number): Promise<IResponse<DeletesAnAccountingContactResponse>>;
}
