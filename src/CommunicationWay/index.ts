// Project-Imports

import { IResponse, Responder } from "../types/Response.js";
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
  private Responder: Responder;
  constructor(apiKey: string) {
    this.Responder = new Responder(apiKey, "1");
  }
  /**
   * Returns all communication ways which have been added up until now. Filters can be added.
   * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/getCommunicationWays
   * @param contactId ID of contact for which you want the communication ways.
   * @param type Type of the communication ways you want to get.
   * @param main Define if you only want the main communication way.
   * @returns Array of objects (CommunicationWay model)
   */
  async getCommunicationWays(
    contactId?: string,
    type?: "PHONE" | "EMAIL" | "WEB" | "MOBILE",
    main?: "0" | "1"
  ): Promise<IResponse<getCommunicationWaysResponse>> {
    return this.Responder.process(
      "/CommunicationWay",
      {
        method: "GET",
      },
      [
        {
          key: "contact[id]",
          value: contactId,
        },
        {
          key: "contact[objectName]",
          value: "Contact",
        },
        {
          key: "type",
          value: type,
        },
        {
          key: "main",
          value: main,
        },
      ]
    );
  }

  /**
   * Creates a new contact communication way.
   * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/createCommunicationWay
   * @param body Creation data
   * @returns Returns created contact communication way
   */
  async createCommunicationWay(
    body: createCommunicationWayBody
  ): Promise<IResponse<createCommunicationWayResponse>> {
    return this.Responder.process("/CommunicationWay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  /**
   * Returns a single communication way
   * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/getCommunicationWayById
   * @param communicationWayId ID of communication way to return
   * @returns Array of objects (CommunicationWay model)
   */
  async getCommunicationWayById(
    communicationWayId: number
  ): Promise<IResponse<getCommunicationWayByIdResponse>> {
    return this.Responder.process(`/CommunicationWay/${communicationWayId}`, {
      method: "GET",
    });
  }

  /**
   * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/deleteCommunicationWay
   * @param communicationWayId Id of communication way resource to delete
   * @returns Communication way deleted
   */
  async deleteCommunicationWay(
    communicationWayId: number
  ): Promise<IResponse<deleteCommunicationWayResponse>> {
    return this.Responder.process(`/CommunicationWay/${communicationWayId}`, {
      method: "DELETE",
    });
  }

  /**
   * Update a communication way
   * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/UpdateCommunicationWay
   * @param communicationWayId ID of CommunicationWay to update
   * @param body Update data
   * @returns Returns changed CommunicationWay resource
   */
  async updateCommunicationWay(
    communicationWayId: number,
    body: updateCommunicationWayBody
  ): Promise<IResponse<updateCommunicationWayResponse>> {
    return this.Responder.process(`/CommunicationWay/${communicationWayId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  /**
   * Returns all communication way keys.
   * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/getCommunicationWayKeys
   * @returns Array of objects
   */
  async getCommunicationWayKeys(): Promise<
    IResponse<getCommunicationWayKeysResponse>
  > {
    return this.Responder.process("/CommunicationWayKey", {
      method: "GET",
    });
  }
}
