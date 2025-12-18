// Project-Imports

import { API } from "../types/common.classes.js";
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
  constructor(private apiKey: string) {}
  /**
   * Creates a new contact address.
   * @link https://api.sevdesk.de/#tag/ContactAddress/operation/createContactAddress
   * @param body Creation data
   * @returns Returns created contact address
   */
  async createOne(body: createContactAddressBody) {
    return await new API(this.apiKey).request<createContactAddressResponse>(
      "/ContactAddress",
      undefined,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * Retrieve all contact addresses
   * @link https://api.sevdesk.de/#tag/ContactAddress/operation/getContactAddresses
   * @returns Array of objects (Contact address)
   */
  async getMany() {
    return await new API(this.apiKey).request<getContactAddressesResponse>(
      "/ContactAddress",
      undefined,
      { method: "GET" }
    );
  }

  /**
   * Returns a single contact address
   * @link https://api.sevdesk.de/#tag/ContactAddress/operation/contactAddressId
   * @param contactAddressId ID of contact address to return
   * @returns
   */
  async getOne(contactAddressId: number) {
    return await new API(this.apiKey).request<getContactAddressByIdResponse>(
      `/ContactAddress/${contactAddressId}`,
      undefined,
      { method: "GET" }
    );
  }

  /**
   * update a existing contact address.
   * @link https://api.sevdesk.de/#tag/ContactAddress/operation/updateContactAddress
   * @param contactAddressId ID of contact address to return
   * @param body Creation data
   * @returns Returns created contact address
   */
  async updateOne(contactAddressId: number, body: updateContactAddressBody) {
    return await new API(this.apiKey).request<updateContactAddressResponse>(
      `/ContactAddress/${contactAddressId}`,
      undefined,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * @link https://api.sevdesk.de/#tag/ContactAddress/operation/deleteContactAddress
   * @param contactAddressId Id of contact address resource to delete
   * @returns contact address deleted
   */
  async deleteOne(contactAddressId: number) {
    return await new API(this.apiKey).request<deleteContactAddressResponse>(
      `/ContactAddress/${contactAddressId}`,
      undefined,
      { method: "DELETE" }
    );
  }
}
