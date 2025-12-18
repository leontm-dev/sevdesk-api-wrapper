// Project-Imports

import {
  createCommunicationWayResponse,
  deleteCommunicationWayResponse,
  getCommunicationWayByIdResponse,
  getCommunicationWayKeysResponse,
  getCommunicationWaysResponse,
  updateCommunicationWayResponse,
} from "./types/response.types.js";
import {
  createCommunicationWayBody,
  updateCommunicationWayBody,
} from "./types/body.types.js";
import { API } from "../types/common.classes.js";

// Code

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
  async getMany(
    contactId?: string,
    type?: "PHONE" | "EMAIL" | "WEB" | "MOBILE",
    main?: "0" | "1"
  ) {
    const queryObj: Record<string, string> = {};
    if (contactId) {
      queryObj["contact[id]"] = contactId;
      queryObj["contact[objectName]"] = "Contact";
    }
    if (type) queryObj["type"] = type;
    if (main) queryObj["main"] = main;

    return await new API(this.apiKey).request<getCommunicationWaysResponse>(
      "/CommunicationWay",
      queryObj,
      { method: "GET" }
    );
  }

  /**
   * Creates a new contact communication way.
   * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/createCommunicationWay
   * @param body Creation data
   * @returns Returns created contact communication way
   */
  async createOne(body: createCommunicationWayBody) {
    return await new API(this.apiKey).request<createCommunicationWayResponse>(
      "/CommunicationWay",
      undefined,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * Returns a single communication way
   * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/getCommunicationWayById
   * @param communicationWayId ID of communication way to return
   * @returns Array of objects (CommunicationWay model)
   */
  async getOne(communicationWayId: number) {
    return await new API(this.apiKey).request<getCommunicationWayByIdResponse>(
      `/CommunicationWay/${communicationWayId}`,
      undefined,
      { method: "GET" }
    );
  }

  /**
   * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/deleteCommunicationWay
   * @param communicationWayId Id of communication way resource to delete
   * @returns Communication way deleted
   */
  async deleteOne(communicationWayId: number) {
    return await new API(this.apiKey).request(
      `/CommunicationWay/${communicationWayId}`,
      undefined,
      { method: "DELETE" }
    );
  }

  /**
   * Update a communication way
   * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/UpdateCommunicationWay
   * @param communicationWayId ID of CommunicationWay to update
   * @param body Update data
   * @returns Returns changed CommunicationWay resource
   */
  async updateOne(
    communicationWayId: number,
    body: updateCommunicationWayBody
  ) {
    return await new API(this.apiKey).request<updateCommunicationWayResponse>(
      `/CommunicationWay/${communicationWayId}`,
      undefined,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * Returns all communication way keys.
   * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/getCommunicationWayKeys
   * @returns Array of objects
   */
  async getManyKeys() {
    return await new API(this.apiKey).request<getCommunicationWayKeysResponse>(
      "/CommunicationWayKey",
      undefined,
      { method: "GET" }
    );
  }
}
