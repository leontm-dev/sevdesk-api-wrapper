import { RetrieveBookkeepingSystemVersionResponse } from "./types/response.types.js";
/**
 * This is a collection of basic sevdesk functions that don't really belong into any other category.
 * @link https://api.sevdesk.de/#tag/Basics
 */
export declare class Basics {
    private apiKey;
    constructor(apiKey: string);
    /**
     * To check if you already received the update to version 2.0 you can use this endpoint.
     * @link https://api.sevdesk.de/#tag/Basics/operation/bookkeepingSystemVersion
     * @returns The current version of your bookkeeping system. Possible values are "1.0" and "2.0"
     */
    retrieveBookkeepingSystemVersion(): Promise<import("../types/Response.js").IApiResponse<RetrieveBookkeepingSystemVersionResponse>>;
}
