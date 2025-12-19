import { RetrieveCreditNotePositionsResponse } from "./types/response.types";
export declare class CreditNotePos {
    private apiKey;
    constructor(apiKey: string);
    /**
     * Retrieve all creditNote positions depending on the filters defined in the query.
     * @link https://api.sevdesk.de/#tag/CreditNotePos/operation/getcreditNotePositions
     * @param creditNoteId Retrieve all creditNote positions belonging to this creditNote. Must be provided with creditNote[objectName]
     * @returns
  Array of objects (creditNote position model)
     */
    getMany(creditNoteId?: number): Promise<import("../types/Response").IApiResponse<RetrieveCreditNotePositionsResponse>>;
}
