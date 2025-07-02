// Project-Imports

import { IResponse, Responder } from "../types/Response.js";
import {
  createContactAddressBody,
  updateContactAddressBody,
} from "./types/body.types.js";
import {
  createContactAddressResponse,
  deleteContactAddressResponse,
  getContactAddressByIdResponse,
  getContactAddressesResponse,
  updateContactAddressResponse,
} from "./types/response.types.js";

// Code

/**
 * As one contact can have multiple addresses, they can not be part of the contact attributes.
Instead, they have their own endpoint which makes it possible to create as many addresses for one contact as needed.
For creating contact addresses have a look at our Swagger specification. Everything should be pretty straight forward.
  * @link https://api.sevdesk.de/#tag/ContactAddress
 */
export class ContactAddress {
  private Responder: Responder;
  constructor(apiKey: string) {
    this.Responder = new Responder(apiKey, "1");
  }
  /**
   * Creates a new contact address.
   * @link https://api.sevdesk.de/#tag/ContactAddress/operation/createContactAddress
   * @param body Creation data
   * @returns Returns created contact address
   */
  async createContactAddress(
    body: createContactAddressBody
  ): Promise<IResponse<createContactAddressResponse>> {
    return this.Responder.process("/ContactAddress", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    });
  }

  /**
   * Retrieve all contact addresses
   * @link https://api.sevdesk.de/#tag/ContactAddress/operation/getContactAddresses
   * @returns Array of objects (Contact address)
   */
  async getContactAddresses(): Promise<IResponse<getContactAddressesResponse>> {
    return this.Responder.process("/ContactAddress", {
      method: "GET",
    });
  }

  /**
   * Returns a single contact address
   * @link https://api.sevdesk.de/#tag/ContactAddress/operation/contactAddressId
   * @param contactAddressId ID of contact address to return
   * @returns
   */
  async getContactAddressById(
    contactAddressId: number
  ): Promise<IResponse<getContactAddressByIdResponse>> {
    return this.Responder.process(`/ContactAddress/${contactAddressId}`, {
      method: "GET",
    });
  }

  /**
   * update a existing contact address.
   * @link https://api.sevdesk.de/#tag/ContactAddress/operation/updateContactAddress
   * @param contactAddressId ID of contact address to return
   * @param body Creation data
   * @returns Returns created contact address
   */
  async updateContactAddress(
    contactAddressId: number,
    body: updateContactAddressBody
  ): Promise<IResponse<updateContactAddressResponse>> {
    return this.Responder.process(`/ContactAddress/${contactAddressId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(body),
    });
  }

  /**
   * @link https://api.sevdesk.de/#tag/ContactAddress/operation/deleteContactAddress
   * @param contactAddressId Id of contact address resource to delete
   * @returns contact address deleted
   */
  async deleteContactAddress(
    contactAddressId: number
  ): Promise<IResponse<deleteContactAddressResponse>> {
    return this.Responder.process(`/ContactAddress/${contactAddressId}`, {
      method: "DELETE",
    });
  }
}
