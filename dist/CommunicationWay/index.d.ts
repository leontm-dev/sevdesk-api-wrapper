import { IResponse } from "../types/Response.js";
import { CreateANewContactCommunicationWayResponse, DeletesACommunicationWayResponse, FindCommunicationWayByIDResponse, RetrieveCommunicationWayKeysResponse, RetrieveCommunicationWaysResponse, UpdateAExistingCommunicationWayResponse } from "./types/response.types.js";
import { CreateANewContactCommunicationWayBody, UpdateAExistingCommunicationWayBody } from "./types/body.types.js";
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
    retrieveCommunicationWays(contactId?: string, type?: "PHONE" | "EMAIL" | "WEB" | "MOBILE", main?: "0" | "1"): Promise<IResponse<RetrieveCommunicationWaysResponse>>;
    /**
     * Creates a new contact communication way.
     * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/createCommunicationWay
     * @param body Creation data
     * @returns Returns created contact communication way
     */
    createANewContactCommunicationWay(body: CreateANewContactCommunicationWayBody): Promise<IResponse<CreateANewContactCommunicationWayResponse>>;
    /**
     * Returns a single communication way
     * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/getCommunicationWayById
     * @param communicationWayId ID of communication way to return
     * @returns Array of objects (CommunicationWay model)
     */
    findCommunicationWayByID(communicationWayId: number): Promise<IResponse<FindCommunicationWayByIDResponse>>;
    /**
     * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/deleteCommunicationWay
     * @param communicationWayId Id of communication way resource to delete
     * @returns Communication way deleted
     */
    deletesACommunicationWay(communicationWayId: number): Promise<IResponse<DeletesACommunicationWayResponse>>;
    /**
     * Update a communication way
     * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/UpdateCommunicationWay
     * @param communicationWayId ID of CommunicationWay to update
     * @param body Update data
     * @returns Returns changed CommunicationWay resource
     */
    updateAExistingCommunicationWay(communicationWayId: number, body: UpdateAExistingCommunicationWayBody): Promise<IResponse<UpdateAExistingCommunicationWayResponse>>;
    /**
     * Returns all communication way keys.
     * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/getCommunicationWayKeys
     * @returns Array of objects
     */
    retrieveCommunicationWayKeys(): Promise<IResponse<RetrieveCommunicationWayKeysResponse>>;
}
