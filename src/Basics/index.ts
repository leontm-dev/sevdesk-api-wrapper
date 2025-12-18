// Project-Imports

import { API } from "../types/common.classes.js";
import { RetrieveBookkeepingSystemVersionResponse } from "./types/response.types.js";

// Code

/**
 * This is a collection of basic sevdesk functions that don't really belong into any other category.
 * @link https://api.sevdesk.de/#tag/Basics
 */
export class Basics {
  constructor(private apiKey: string) {}
  /**
   * To check if you already received the update to version 2.0 you can use this endpoint.
   * @link https://api.sevdesk.de/#tag/Basics/operation/bookkeepingSystemVersion
   * @returns The current version of your bookkeeping system. Possible values are "1.0" and "2.0"
   */
  async retrieveBookkeepingSystemVersion() {
    return await new API(
      this.apiKey
    ).request<RetrieveBookkeepingSystemVersionResponse>(
      "/Tools/bookkeepingSystemVersion",
      undefined,
      { method: "GET" }
    );
  }
}
