// Project-Imports

import { IResponse, Responder } from "../types/Response.js";
import { RetrieveBookkeepingSystemVersionResponse } from "./types/response.types.js";

// Code

/**
 * This is a collection of basic sevdesk functions that don't really belong into any other category.
 * @link https://api.sevdesk.de/#tag/Basics
 */
export class Basics {
  private Responder: Responder;
  constructor(apiKey: string) {
    this.Responder = new Responder(apiKey, "1");
  }
  /**
   * To check if you already received the update to version 2.0 you can use this endpoint.
   * @link https://api.sevdesk.de/#tag/Basics/operation/bookkeepingSystemVersion
   * @returns The current version of your bookkeeping system. Possible values are "1.0" and "2.0"
   */
  async retrieveBookkeepingSystemVersion(): Promise<
    IResponse<RetrieveBookkeepingSystemVersionResponse>
  > {
    return this.Responder.process("/Tools/bookkeepingSystemVersion", {
      method: "GET",
    });
  }
}
