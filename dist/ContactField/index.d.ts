import { createContactFieldSettingResponse, deleteContactFieldResponse, deleteContactFieldSettingResponse, getContactFieldSettingByIdResponse, getContactFieldSettingsResponse, getContactFieldsResponse, getPlaceholderResponse, getReferenceCountResponse } from "./types/response.types.js";
import { createContactFieldBody, createContactFieldSettingBody, updateContactFieldBody, updateContactFieldSettingBody } from "./types/body.types.js";
/**
 * The contact fields are placeholders that can be titled and filled per contact. The contact fields can then be used in invoices, credit notes and emails.
 * @link https://api.sevdesk.de/#tag/ContactField
 */
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
    getManyPlaceholders(objectName: "Invoice" | "CreditNote" | "Order" | "Contact" | "Letter" | "Email", subObjectName?: "Invoice" | "CreditNote" | "Order" | "Contact" | "Letter"): Promise<import("../types/Response.js").IApiResponse<getPlaceholderResponse>>;
    /**
     * Retrieve all contact fields
     * @link https://api.sevdesk.de/#tag/ContactField/operation/getContactFields
     * @returns Array of objects (contact fields model)
     */
    getMany(): Promise<import("../types/Response.js").IApiResponse<getContactFieldsResponse>>;
    /**
     * Create contact field
     * @link https://api.sevdesk.de/#tag/ContactField/operation/createContactField
     * @param body
     * @returns
     */
    createOne(body: createContactFieldBody): Promise<import("../types/Response.js").IApiResponse<import("./types/base.types.js").ContactField>>;
    /**
     * Update a contact field
     * @link https://api.sevdesk.de/#tag/ContactField/operation/updateContactfield
     * @param contactCustomFieldId id of the contact field
     * @param body Update data
     * @returns
     */
    updateOne(contactCustomFieldId: number, body: updateContactFieldBody): Promise<import("../types/Response.js").IApiResponse<import("./types/base.types.js").ContactField>>;
    /**
     * @link https://api.sevdesk.de/#tag/ContactField/operation/deleteContactCustomFieldId
     * @param contactCustomFieldId Id of contact field
     * @returns
     */
    deleteOne(contactCustomFieldId: number): Promise<import("../types/Response.js").IApiResponse<deleteContactFieldResponse>>;
    /**
     * Retrieve all contact field settings
     * @link https://api.sevdesk.de/#tag/ContactField/operation/getContactFieldSettings
     * @returns Array of objects (contact fields model)
     */
    getManySettings(): Promise<import("../types/Response.js").IApiResponse<getContactFieldSettingsResponse>>;
    /**
     * Create contact field setting
     * @link https://api.sevdesk.de/#tag/ContactField/operation/createContactFieldSetting
     * @param body
     * @returns
     */
    createOneSetting(body: createContactFieldSettingBody): Promise<import("../types/Response.js").IApiResponse<createContactFieldSettingResponse>>;
    /**
     * Returns a single contact field setting
     * @link https://api.sevdesk.de/#tag/ContactField/operation/getContactFieldSettingById
     * @param contactCustomFieldSettingId ID of contact field to return
     * @returns Array of objects (contact fields model)
     */
    getOneSetting(contactCustomFieldSettingId: number): Promise<import("../types/Response.js").IApiResponse<getContactFieldSettingByIdResponse>>;
    /**
     * Update an existing contact field setting
     * @link https://api.sevdesk.de/#tag/ContactField/operation/updateContactFieldSetting
     * @param contactCustomFieldSettingId ID of contact field setting you want to update
     * @param body
     * @returns
     */
    updateOneSetting(contactCustomFieldSettingId: number, body: updateContactFieldSettingBody): Promise<import("../types/Response.js").IApiResponse<import("./types/base.types.js").ContactCustomFieldSetting>>;
    /**
     * @link https://api.sevdesk.de/#tag/ContactField/operation/deleteContactFieldSetting
     * @param contactCustomFieldSettingId Id of contact field to delete
     * @returns Array of any
     */
    deleteOneSetting(contactCustomFieldSettingId: number): Promise<import("../types/Response.js").IApiResponse<deleteContactFieldSettingResponse>>;
    /**
     * Receive count reference
     * @link https://api.sevdesk.de/#tag/ContactField/operation/getReferenceCount
     * @param contactCustomFieldSettingId ID of contact field you want to get the reference count
     * @returns
     */
    getOnesSettingReferenceCount(contactCustomFieldSettingId: number): Promise<import("../types/Response.js").IApiResponse<getReferenceCountResponse>>;
}
