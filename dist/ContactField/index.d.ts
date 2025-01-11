import { IResponse } from "../types/Response.js";
import { CreateContactFieldResponse, CreateContactFieldSettingResponse, DeleteAContactFieldResponse, DeletesAContactFieldSettingResponse, FindContactFieldSettingByIDResponse, ReceiveCountReferenceResponse, RetrieveContactFieldSettingsResponse, RetrieveContactFieldsResponse, RetrievePlaceholdersResponse, UpdateAContactFieldResponse, UpdateContactFieldSettingResponse } from "./types/response.types.js";
import { CreateContactFieldBody, CreateContactFieldSettingBody, UpdateAContactFieldBody, UpdateContactFieldSettingBody } from "./types/body.types.js";
export declare class ContactField {
    private apiKey;
    constructor(apiKey: string);
    /**
     * Retrieve all Placeholders
     * @link https://api.sevdesk.de/#tag/ContactField/operation/getPlaceholder
     * @param objectName Model name
     * @param subObjectName Sub model name, required if you have "Email" at objectName
     * @returns Array of objects (Textparser fetchDictionaryEntriesByType model)
     */
    retrievePlaceholders(objectName: "Invoice" | "CreditNote" | "Order" | "Contact" | "Letter" | "Email", subObjectName?: "Invoice" | "CreditNote" | "Order" | "Contact" | "Letter"): Promise<IResponse<RetrievePlaceholdersResponse>>;
    /**
     * Retrieve all contact fields
     * @link https://api.sevdesk.de/#tag/ContactField/operation/getContactFields
     * @returns Array of objects (contact fields model)
     */
    retrieveContactFields(): Promise<IResponse<RetrieveContactFieldsResponse>>;
    /**
     * Create contact field
     * @link https://api.sevdesk.de/#tag/ContactField/operation/createContactField
     * @param body
     * @returns
     */
    createContactField(body: CreateContactFieldBody): Promise<IResponse<CreateContactFieldResponse>>;
    /**
     * Update a contact field
     * @link https://api.sevdesk.de/#tag/ContactField/operation/updateContactfield
     * @param contactCustomFieldId id of the contact field
     * @param body Update data
     * @returns
     */
    updateAContactField(contactCustomFieldId: number, body: UpdateAContactFieldBody): Promise<IResponse<UpdateAContactFieldResponse>>;
    /**
     * @link https://api.sevdesk.de/#tag/ContactField/operation/deleteContactCustomFieldId
     * @param contactCustomFieldId Id of contact field
     * @returns
     */
    deleteAContactField(contactCustomFieldId: number): Promise<IResponse<DeleteAContactFieldResponse>>;
    /**
     * Retrieve all contact field settings
     * @link https://api.sevdesk.de/#tag/ContactField/operation/getContactFieldSettings
     * @returns Array of objects (contact fields model)
     */
    retrieveContactFieldSettings(): Promise<IResponse<RetrieveContactFieldSettingsResponse>>;
    /**
     * Create contact field setting
     * @link https://api.sevdesk.de/#tag/ContactField/operation/createContactFieldSetting
     * @param body
     * @returns
     */
    createContactFieldSetting(body: CreateContactFieldSettingBody): Promise<IResponse<CreateContactFieldSettingResponse>>;
    /**
     * Returns a single contact field setting
     * @link https://api.sevdesk.de/#tag/ContactField/operation/getContactFieldSettingById
     * @param contactCustomFieldSettingId ID of contact field to return
     * @returns Array of objects (contact fields model)
     */
    findContactFieldSettingByID(contactCustomFieldSettingId: number): Promise<IResponse<FindContactFieldSettingByIDResponse>>;
    /**
     * Update an existing contact field setting
     * @link https://api.sevdesk.de/#tag/ContactField/operation/updateContactFieldSetting
     * @param contactCustomFieldSettingId ID of contact field setting you want to update
     * @param body
     * @returns
     */
    updateContactFieldSetting(contactCustomFieldSettingId: number, body: UpdateContactFieldSettingBody): Promise<IResponse<UpdateContactFieldSettingResponse>>;
    /**
     * @link https://api.sevdesk.de/#tag/ContactField/operation/deleteContactFieldSetting
     * @param contactCustomFieldSettingId Id of contact field to delete
     * @returns Array of any
     */
    deletesAContactFieldSetting(contactCustomFieldSettingId: number): Promise<IResponse<DeletesAContactFieldSettingResponse>>;
    /**
     * Receive count reference
     * @link https://api.sevdesk.de/#tag/ContactField/operation/getReferenceCount
     * @param contactCustomFieldSettingId ID of contact field you want to get the reference count
     * @returns
     */
    receiveCountReference(contactCustomFieldSettingId: number): Promise<IResponse<ReceiveCountReferenceResponse>>;
}
