// Project-Imports

import { API } from "../types/common.classes";
import { RetrieveCreditNotePositionsResponse } from "./types/response.types";

// Code

export class CreditNotePos {
  constructor(private apiKey: string) {}

  /**
   * Retrieve all creditNote positions depending on the filters defined in the query.
   * @link https://api.sevdesk.de/#tag/CreditNotePos/operation/getcreditNotePositions
   * @param creditNoteId Retrieve all creditNote positions belonging to this creditNote. Must be provided with creditNote[objectName]
   * @returns 	
Array of objects (creditNote position model)
   */
  async getMany(creditNoteId?: number) {
    const queryObj: Record<string, string> = {};
    if (creditNoteId) {
      queryObj["creditNote[id]"] = creditNoteId.toString();
      queryObj["creditNote[objectName]"] = "creditNote";
    }

    return await new API(
      this.apiKey
    ).request<RetrieveCreditNotePositionsResponse>("/CreditNotePos", queryObj, {
      method: "GET",
    });
  }
}
