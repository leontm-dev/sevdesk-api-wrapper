import { getCommunicationWayByIdResponse, getCommunicationWayKeysResponse, getCommunicationWaysResponse } from "./types/response.types.js";
import { createCommunicationWayBody, updateCommunicationWayBody } from "./types/body.types.js";
/**
 * A communication way is a medium with which a contact can be reached out to.
This can be:

A phone number (landline or mobile),
An email,
A website.
They can not be a part of the contact attributes for the same reason as addresses.
Each communication way also is of one of the following types, called communication way keys, which are also their own resource:
Private (ID: 1),
Work (ID: 2),
Fax (ID: 3),
Mobile (ID: 4),
Empty (ID: 5),
Autobox (ID: 6),
Newsletter (ID: 7),
Invoicing (ID: 8)
  * @link https://api.sevdesk.de/#tag/CommunicationWay
 */
export declare class CommunicationWay {
    private apiKey;
    constructor(apiKey: string);
    /**
     * Returns all communication ways which have been added up until now. Filters can be added.
     * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/getCommunicationWays
     * @param contactId ID of contact for which you want the communication ways.
     * @param type Type of the communication ways you want to get.
     * @param main Define if you only want the main communication way.
     * @returns Array of objects (CommunicationWay model)
     */
    getMany(contactId?: string, type?: "PHONE" | "EMAIL" | "WEB" | "MOBILE", main?: "0" | "1"): Promise<import("../types/Response.js").IApiResponse<getCommunicationWaysResponse>>;
    /**
     * Creates a new contact communication way.
     * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/createCommunicationWay
     * @param body Creation data
     * @returns Returns created contact communication way
     */
    createOne(body: createCommunicationWayBody): Promise<import("../types/Response.js").IApiResponse<import("./types/base.types.js").CommunicationWay>>;
    /**
     * Returns a single communication way
     * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/getCommunicationWayById
     * @param communicationWayId ID of communication way to return
     * @returns Array of objects (CommunicationWay model)
     */
    getOne(communicationWayId: number): Promise<import("../types/Response.js").IApiResponse<getCommunicationWayByIdResponse>>;
    /**
     * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/deleteCommunicationWay
     * @param communicationWayId Id of communication way resource to delete
     * @returns Communication way deleted
     */
    deleteOne(communicationWayId: number): Promise<import("../types/Response.js").IApiResponse<unknown>>;
    /**
     * Update a communication way
     * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/UpdateCommunicationWay
     * @param communicationWayId ID of CommunicationWay to update
     * @param body Update data
     * @returns Returns changed CommunicationWay resource
     */
    updateOne(communicationWayId: number, body: updateCommunicationWayBody): Promise<import("../types/Response.js").IApiResponse<import("./types/base.types.js").CommunicationWay>>;
    /**
     * Returns all communication way keys.
     * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/getCommunicationWayKeys
     * @returns Array of objects
     */
    getManyKeys(): Promise<import("../types/Response.js").IApiResponse<getCommunicationWayKeysResponse>>;
}
