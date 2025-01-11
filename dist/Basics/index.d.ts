import { IResponse } from "../types/Response.js";
import { RetrieveBookkeepingSystemVersionResponse } from "./types/response.types.js";
export declare class Basics {
    private apiKey;
    constructor(apiKey: string);
    /**
     * To check if you already received the update to version 2.0 you can use this endpoint.
     * @returns object
     */
    retrieveBookkeepingSystemVersion(): Promise<IResponse<RetrieveBookkeepingSystemVersionResponse>>;
}
