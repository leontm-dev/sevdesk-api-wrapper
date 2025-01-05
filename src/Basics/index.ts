// Imports

import fetch from "node-fetch";

// Project-Imports

import { IResponse } from "../types/Response.js";
import { apiUrl } from "../index.js";
import { RetrieveBookkeepingSystemVersionResponse } from "./types/response.types.js";

// Code

export class Basics {
  constructor(private apiKey: string) {}
  /**
   * To check if you already received the update to version 2.0 you can use this endpoint.
   * @returns object
   */
  async retrieveBookkeepingSystemVersion(): Promise<
    IResponse<RetrieveBookkeepingSystemVersionResponse>
  > {
    const response = await fetch(`${apiUrl}/Tools/bookkeepingSystemVersion`, {
      method: "GET",
      headers: {
        Authorization: this.apiKey,
      },
    });
    const data = await response.json();
    return {
      status: response.status,
      response: {
        body: await response.text(),
        bodyUsed: response.bodyUsed,
        data: data ? (data as RetrieveBookkeepingSystemVersionResponse) : null,
        headers: response.headers,
        ok: response.ok,
        redirected: response.redirected,
        status: response.status,
        statusText: response.statusText,
        type: response.type,
        url: response.url,
        size: response.size,
      },
    };
  }
}
