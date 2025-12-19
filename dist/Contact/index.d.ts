import { checkIfACustomerNumberIsAvailableResponse, deleteContactResponse, findContactsByCustomFieldValueResponse, getContactByIdResponse, getContactsResponse, getContactTabsItemCountByIdResponse } from "./types/response.types.js";
import { createContactBody, updateContactBody } from "./types/body.types.js";
/**
 * @link https://api.sevdesk.de/#tag/Contact
 */
export declare class Contact {
    private apiKey;
    constructor(apiKey: string);
    /**
     * Retrieves the next available customer number. Avoids duplicates.
     * @link https://api.sevdesk.de/#tag/Contact/operation/getNextCustomerNumber
     * @returns Next available customer number
     */
    getNextCustomerNumber(): Promise<import("../types/Response.js").IApiResponse<{
        objects: string;
    }>>;
    /**
     * Returns an array of contacts having a certain custom field value set.
     * @link https://api.sevdesk.de/#tag/Contact/operation/findContactsByCustomFieldValue
     * @param value The value to be checked.
     * @param customFieldName The ContactCustomFieldSetting name, if no ContactCustomFieldSetting is provided.
     * @param customFieldSettingId ID of ContactCustomFieldSetting for which the value has to be checked.
     * @returns Array of objects (Contact model)
     */
    findContactsByCustomFieldValue(value: string, customFieldName: string, customFieldSettingId?: string): Promise<import("../types/Response.js").IApiResponse<findContactsByCustomFieldValueResponse>>;
    /**
     * Checks if a given customer number is available or already used.
     * @link https://api.sevdesk.de/#tag/Contact/operation/contactCustomerNumberAvailabilityCheck
     * @param customerNumber The customer number to be checked.
     * @returns Returns whether given customer number is available.
     */
    checkCustomerNumberAvailability(customerNumber: string): Promise<import("../types/Response.js").IApiResponse<checkIfACustomerNumberIsAvailableResponse>>;
    /**
     * There are a multitude of parameter which can be used to filter.
     * @link https://api.sevdesk.de/#tag/Contact/operation/getContacts
     * @param depth
     * @param customerNumber Only retrieve all contacts with number as a customer number
     * @param categoryId Only retrieve all contacts with id as a category
     * @param city Only retrieve all contacts with cityName as a city
     * @param parentId  Only retrieve all contacts with id as a parent organisation
     * @param name Only retrieve all contacts with name as a name, surename or familyname
     * @param zip Only retrieve all contacts with zipCode as a zip
     * @param countryId Only retrieve all contacts with id as a country
     * @param createBefore Only retrieve all contacts created before timestamp
     * @param createAfter Only retrieve all contacts created after timestamp
     * @param updateBefore Only retrieve all contacts updated last before timestamp
     * @param updateAfter	Only retrieve all contacts updated last after timestamp
     * @param orderByCustomerNumber Order all contacts after customer number in ASC/DESC order
     * @returns Array of objects (Contact model)
     */
    getMany(depth?: "0" | "1", customerNumber?: string): Promise<import("../types/Response.js").IApiResponse<getContactsResponse>>;
    /**
     * Creates a new contact.
     * @link https://api.sevdesk.de/#tag/Contact/operation/createContact
     * @param body Creation data
     * @returns Returns created contact
     */
    createOne(body: createContactBody): Promise<import("../types/Response.js").IApiResponse<import("./types/base.types.js").Contact>>;
    /**
     * Returns a single contact
     * @link https://api.sevdesk.de/#tag/Contact/operation/getContactById
     * @param contactId ID of contact to return
     * @returns Returns a single contact
     */
    getOne(contactId: number): Promise<import("../types/Response.js").IApiResponse<getContactByIdResponse>>;
    /**
     * Update a contact
     * @link https://api.sevdesk.de/#tag/Contact/operation/updateContact
     * @param contactId ID of contact to update
     * @param body Update data
     * @returns Returns changed contact resource
     */
    updateOne(contactId: number, body: updateContactBody): Promise<import("../types/Response.js").IApiResponse<import("./types/base.types.js").Contact>>;
    /**
     *
     * @link https://api.sevdesk.de/#tag/Contact/operation/deleteContact
     * @param contactId Id of contact resource to delete
     * @returns contact deleted
     */
    deleteOne(contactId: number): Promise<import("../types/Response.js").IApiResponse<deleteContactResponse>>;
    /**
     * Get number of all invoices, orders, etc. of a specified contact
     * @link https://api.sevdesk.de/#tag/Contact/operation/getContactTabsItemCountById
     * @param contactId ID of contact to return
     * @returns
     */
    getOnesTabsItemCount(contactId: number): Promise<import("../types/Response.js").IApiResponse<getContactTabsItemCountByIdResponse>>;
}
