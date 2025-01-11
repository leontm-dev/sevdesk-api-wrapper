import { IResponse } from "../types/Response.js";
import { CreateANewContactAddressBody, UpdateAExistingContactAddressBody } from "./types/body.types.js";
import { CreateANewContactAddressResponse, DeletesAContactAddressResponse, FindContactAddressByIDResponse, RetrieveContactAddressesResponse, UpdateAExistingContactAddressResponse } from "./types/response.types.js";
export declare class ContactAddress {
    private apiKey;
    constructor(apiKey: string);
    /**
     * Creates a new contact address.
     * @link https://api.sevdesk.de/#tag/ContactAddress/operation/createContactAddress
     * @param body Creation data
     * @returns Returns created contact address
     */
    createANewContactAddress(body: CreateANewContactAddressBody): Promise<IResponse<CreateANewContactAddressResponse>>;
    /**
     * Retrieve all contact addresses
     * @link https://api.sevdesk.de/#tag/ContactAddress/operation/getContactAddresses
     * @returns Array of objects (Contact address)
     */
    retrieveContactAddresses(): Promise<IResponse<RetrieveContactAddressesResponse>>;
    /**
     * Returns a single contact address
     * @link https://api.sevdesk.de/#tag/ContactAddress/operation/contactAddressId
     * @param contactAddressId ID of contact address to return
     * @returns
     */
    findContactAddressByID(contactAddressId: number): Promise<IResponse<FindContactAddressByIDResponse>>;
    /**
     * update a existing contact address.
     * @link https://api.sevdesk.de/#tag/ContactAddress/operation/updateContactAddress
     * @param contactAddressId ID of contact address to return
     * @param body Creation data
     * @returns Returns created contact address
     */
    updateAExistingContactAddress(contactAddressId: number, body: UpdateAExistingContactAddressBody): Promise<IResponse<UpdateAExistingContactAddressResponse>>;
    /**
     * @link https://api.sevdesk.de/#tag/ContactAddress/operation/deleteContactAddress
     * @param contactAddressId Id of contact address resource to delete
     * @returns contact address deleted
     */
    deletesAContactAddress(contactAddressId: number): Promise<IResponse<DeletesAContactAddressResponse>>;
}
