// Imports

import fetch from "node-fetch";

// Project-Imports

import { apiUrl } from "../index.js";
import { IResponse } from "../types/Response.js";
import {
  CreateANewContactCommunicationWayResponse,
  DeletesACommunicationWayResponse,
  FindCommunicationWayByIDResponse,
  RetrieveCommunicationWayKeysResponse,
  RetrieveCommunicationWaysResponse,
  UpdateAExistingCommunicationWayResponse,
} from "./types/response.types.js";
import {
  CreateANewContactCommunicationWayBody,
  UpdateAExistingCommunicationWayBody,
} from "./types/body.types.js";

// Code

export class CommunicationWay {
  constructor(private apiKey: string) {}
  /**
   * Returns all communication ways which have been added up until now. Filters can be added.
   * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/getCommunicationWays
   * @param contactId ID of contact for which you want the communication ways.
   * @param type Type of the communication ways you want to get.
   * @param main Define if you only want the main communication way.
   * @returns Array of objects (CommunicationWay model)
   */
  async retrieveCommunicationWays(
    contactId?: string,
    type?: "PHONE" | "EMAIL" | "WEB" | "MOBILE",
    main?: "0" | "1"
  ): Promise<IResponse<RetrieveCommunicationWaysResponse>> {
    const query = [];
    if (contactId) {
      query.push(`contact[id]=${contactId}&contact[objectName]=Contact`);
    }
    if (type) {
      query.push(`type=${type}`);
    }
    if (main) {
      query.push(`main=${main}`);
    }
    const response = await fetch(
      `${apiUrl}/CommunicationWay?{${query.join("&")}}`,
      {
        method: "GET",
        headers: {
          Authorization: this.apiKey,
        },
      }
    );
    const data = await response.json();
    return {
      status: response.status,
      response: {
        body: response.body,
        headers: response.headers,
        data: data ? (data as RetrieveCommunicationWaysResponse) : null,
        ok: response.ok,
        redirected: response.redirected,
        status: response.status,
        statusText: response.statusText,
        type: response.type,
        url: response.url,
        bodyUsed: response.bodyUsed,
        size: response.size,
      },
    };
  }
  /**
   * Creates a new contact communication way.
   * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/createCommunicationWay
   * @param body Creation data
   * @returns Returns created contact communication way
   */
  async createANewContactCommunicationWay(
    body: CreateANewContactCommunicationWayBody
  ): Promise<IResponse<CreateANewContactCommunicationWayResponse>> {
    const response = await fetch(`${apiUrl}/CommunicationWay`, {
      method: "POST",
      headers: {
        Authorization: this.apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return {
      status: response.status,
      response: {
        body: response.body,
        headers: response.headers,
        data: data ? (data as CreateANewContactCommunicationWayResponse) : null,
        ok: response.ok,
        redirected: response.redirected,
        status: response.status,
        statusText: response.statusText,
        type: response.type,
        url: response.url,
        bodyUsed: response.bodyUsed,
        size: response.size,
      },
    };
  }
  /**
   * Returns a single communication way
   * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/getCommunicationWayById
   * @param communicationWayId ID of communication way to return
   * @returns Array of objects (CommunicationWay model)
   */
  async findCommunicationWayByID(
    communicationWayId: number
  ): Promise<IResponse<FindCommunicationWayByIDResponse>> {
    const response = await fetch(
      `${apiUrl}/CommunicationWay/${communicationWayId}`,
      {
        method: "GET",
        headers: {
          Authorization: this.apiKey,
        },
      }
    );
    const data = await response.json();
    return {
      status: response.status,
      response: {
        body: response.body,
        headers: response.headers,
        data: data ? (data as FindCommunicationWayByIDResponse) : null,
        ok: response.ok,
        redirected: response.redirected,
        status: response.status,
        statusText: response.statusText,
        type: response.type,
        url: response.url,
        bodyUsed: response.bodyUsed,
        size: response.size,
      },
    };
  }
  /**
   * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/deleteCommunicationWay
   * @param communicationWayId Id of communication way resource to delete
   * @returns Communication way deleted
   */
  async deletesACommunicationWay(
    communicationWayId: number
  ): Promise<IResponse<DeletesACommunicationWayResponse>> {
    const response = await fetch(
      `${apiUrl}/CommunicationWay/${communicationWayId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: this.apiKey,
        },
      }
    );
    const data = await response.json();
    return {
      status: response.status,
      response: {
        body: response.body,
        headers: response.headers,
        data: data ? (data as DeletesACommunicationWayResponse) : null,
        ok: response.ok,
        redirected: response.redirected,
        status: response.status,
        statusText: response.statusText,
        type: response.type,
        url: response.url,
        bodyUsed: response.bodyUsed,
        size: response.size,
      },
    };
  }
  /**
   * Update a communication way
   * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/UpdateCommunicationWay
   * @param communicationWayId ID of CommunicationWay to update
   * @param body Update data
   * @returns Returns changed CommunicationWay resource
   */
  async updateAExistingCommunicationWay(
    communicationWayId: number,
    body: UpdateAExistingCommunicationWayBody
  ): Promise<IResponse<UpdateAExistingCommunicationWayResponse>> {
    const response = await fetch(
      `${apiUrl}/CommunicationWay/${communicationWayId}`,
      {
        method: "PUT",
        headers: {
          Authorization: this.apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const data = await response.json();
    return {
      status: response.status,
      response: {
        body: response.body,
        headers: response.headers,
        data: data ? (data as UpdateAExistingCommunicationWayResponse) : null,
        ok: response.ok,
        redirected: response.redirected,
        status: response.status,
        statusText: response.statusText,
        type: response.type,
        url: response.url,
        bodyUsed: response.bodyUsed,
        size: response.size,
      },
    };
  }
  /**
   * Returns all communication way keys.
   * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/getCommunicationWayKeys
   * @returns Array of objects
   */
  async retrieveCommunicationWayKeys(): Promise<
    IResponse<RetrieveCommunicationWayKeysResponse>
  > {
    const response = await fetch(`${apiUrl}/CommunicationWayKey`, {
      method: "GET",
      headers: {
        Authorization: this.apiKey,
      },
    });
    const data = await response.json();
    return {
      status: response.status,
      response: {
        body: response.body,
        headers: response.headers,
        data: data ? (data as RetrieveCommunicationWayKeysResponse) : null,
        ok: response.ok,
        redirected: response.redirected,
        status: response.status,
        statusText: response.statusText,
        type: response.type,
        url: response.url,
        bodyUsed: response.bodyUsed,
        size: response.size,
      },
    };
  }
}
