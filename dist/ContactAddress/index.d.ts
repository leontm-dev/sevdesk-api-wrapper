import { createContactAddressBody, updateContactAddressBody } from "./types/body.types.js";
import { deleteContactAddressResponse, getContactAddressByIdResponse, getContactAddressesResponse } from "./types/response.types.js";
/**
 * As one contact can have multiple addresses, they can not be part of the contact attributes.
Instead, they have their own endpoint which makes it possible to create as many addresses for one contact as needed.
For creating contact addresses have a look at our Swagger specification. Everything should be pretty straight forward.
  * @link https://api.sevdesk.de/#tag/ContactAddress
 */
export declare class ContactAddress {
    private apiKey;
    constructor(apiKey: string);
    /**
     * Creates a new contact address.
     * @link https://api.sevdesk.de/#tag/ContactAddress/operation/createContactAddress
     * @param body Creation data
     * @returns Returns created contact address
     */
    createOne(body: createContactAddressBody): Promise<import("../types/Response.js").IApiResponse<import("./types/base.types.js").ContactAddress>>;
    /**
     * Retrieve all contact addresses
     * @link https://api.sevdesk.de/#tag/ContactAddress/operation/getContactAddresses
     * @returns Array of objects (Contact address)
     */
    getMany(): Promise<import("../types/Response.js").IApiResponse<getContactAddressesResponse>>;
    /**
     * Returns a single contact address
     * @link https://api.sevdesk.de/#tag/ContactAddress/operation/contactAddressId
     * @param contactAddressId ID of contact address to return
     * @returns
     */
    getOne(contactAddressId: number): Promise<import("../types/Response.js").IApiResponse<getContactAddressByIdResponse>>;
    /**
     * update a existing contact address.
     * @link https://api.sevdesk.de/#tag/ContactAddress/operation/updateContactAddress
     * @param contactAddressId ID of contact address to return
     * @param body Creation data
     * @returns Returns created contact address
     */
    updateOne(contactAddressId: number, body: updateContactAddressBody): Promise<import("../types/Response.js").IApiResponse<import("./types/base.types.js").ContactAddress>>;
    /**
     * @link https://api.sevdesk.de/#tag/ContactAddress/operation/deleteContactAddress
     * @param contactAddressId Id of contact address resource to delete
     * @returns contact address deleted
     */
    deleteOne(contactAddressId: number): Promise<import("../types/Response.js").IApiResponse<deleteContactAddressResponse>>;
}
