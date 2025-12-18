// Project-Imports

import {
  checkIfACustomerNumberIsAvailableResponse,
  createContactResponse,
  deleteContactResponse,
  findContactsByCustomFieldValueResponse,
  getContactByIdResponse,
  getContactsResponse,
  getContactTabsItemCountByIdResponse,
  getNextCustomerNumberResponse,
  updateContactResponse,
} from "./types/response.types.js";
import { createContactBody, updateContactBody } from "./types/body.types.js";
import { API } from "../types/common.classes.js";

// Code

/**
 * @link https://api.sevdesk.de/#tag/Contact
 */
export class Contact {
  constructor(private apiKey: string) {}
  /**
   * Retrieves the next available customer number. Avoids duplicates.
   * @link https://api.sevdesk.de/#tag/Contact/operation/getNextCustomerNumber
   * @returns Next available customer number
   */
  async getNextCustomerNumber() {
    return await new API(this.apiKey).request<{ objects: string }>(
      "/Contact/Factory/getNextCustomerNumber",
      {},
      { method: "GET" }
    );
  }

  /**
   * Returns an array of contacts having a certain custom field value set.
   * @link https://api.sevdesk.de/#tag/Contact/operation/findContactsByCustomFieldValue
   * @param value The value to be checked.
   * @param customFieldName The ContactCustomFieldSetting name, if no ContactCustomFieldSetting is provided.
   * @param customFieldSettingId ID of ContactCustomFieldSetting for which the value has to be checked.
   * @returns Array of objects (Contact model)
   */
  async findContactsByCustomFieldValue(
    value: string,
    customFieldName: string,
    customFieldSettingId?: string
  ) {
    const queryObj: Record<string, string> = {
      value,
      customFieldName,
    };
    if (customFieldSettingId) {
      queryObj["customFieldSetting[id]"] = customFieldSettingId;
      queryObj["customFieldSetting[objectName]"] = "ContactCustomFielSetting";
    }
    return await new API(
      this.apiKey
    ).request<findContactsByCustomFieldValueResponse>(
      "/Contact/Factory/findContactsByCustomFieldValue",
      queryObj,
      {
        method: "GET",
      }
    );
  }

  /**
   * Checks if a given customer number is available or already used.
   * @link https://api.sevdesk.de/#tag/Contact/operation/contactCustomerNumberAvailabilityCheck
   * @param customerNumber The customer number to be checked.
   * @returns Returns whether given customer number is available.
   */
  async checkCustomerNumberAvailability(customerNumber: string) {
    return new API(
      this.apiKey
    ).request<checkIfACustomerNumberIsAvailableResponse>(
      `/Contact/Mapper/checkCustomerNumberAvailability`,
      { customerNumber: customerNumber },
      { method: "GET" }
    );
  }

  /**
   * There are a multitude of parameter which can be used to filter.
   * @link https://api.sevdesk.de/#tag/Contact/operation/getContacts
   * @param depth
   * @param customerNumber Only retrieve all contacts with number as a customer number
   * @param categoryId Only retrieve all contacts with id as a category
   * @param city Only retrieve all contacts with cityName as a city
   * @param parentId  Only retrieve all contacts with id as a parent organisation
   * @param name Only retrieve all contacts with name as a name, surename or familyname
   * @param zip Only retrieve all contacts with zipCode as a zip
   * @param countryId Only retrieve all contacts with id as a country
   * @param createBefore Only retrieve all contacts created before timestamp
   * @param createAfter Only retrieve all contacts created after timestamp
   * @param updateBefore Only retrieve all contacts updated last before timestamp
   * @param updateAfter	Only retrieve all contacts updated last after timestamp
   * @param orderByCustomerNumber Order all contacts after customer number in ASC/DESC order
   * @returns Array of objects (Contact model)
   */
  async getMany(depth?: "0" | "1", customerNumber?: string) {
    const queryObj: Record<string, string> = {};
    if (depth) queryObj["depth"] = depth;
    if (customerNumber) queryObj["customerNumber"] = customerNumber;

    return new API(this.apiKey).request<getContactsResponse>(
      "/Contact",
      queryObj,
      { method: "GET" }
    );
  }

  /**
   * Creates a new contact.
   * @link https://api.sevdesk.de/#tag/Contact/operation/createContact
   * @param body Creation data
   * @returns Returns created contact
   */
  async createOne(body: createContactBody) {
    return new API(this.apiKey).request<createContactResponse>(
      "/Contact",
      undefined,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * Returns a single contact
   * @link https://api.sevdesk.de/#tag/Contact/operation/getContactById
   * @param contactId ID of contact to return
   * @returns Returns a single contact
   */
  async getOne(contactId: number) {
    return new API(this.apiKey).request<getContactByIdResponse>(
      `/Contact/${contactId}`,
      undefined,
      { method: "GET" }
    );
  }

  /**
   * Update a contact
   * @link https://api.sevdesk.de/#tag/Contact/operation/updateContact
   * @param contactId ID of contact to update
   * @param body Update data
   * @returns Returns changed contact resource
   */
  async updateOne(contactId: number, body: updateContactBody) {
    return new API(this.apiKey).request<updateContactResponse>(
      `/Contact/${contactId}`,
      undefined,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   *
   * @link https://api.sevdesk.de/#tag/Contact/operation/deleteContact
   * @param contactId Id of contact resource to delete
   * @returns contact deleted
   */
  async deleteOne(contactId: number) {
    return new API(this.apiKey).request<deleteContactResponse>(
      `/Contact/${contactId}`,
      undefined,
      { method: "DELETE" }
    );
  }

  /**
   * Get number of all invoices, orders, etc. of a specified contact
   * @link https://api.sevdesk.de/#tag/Contact/operation/getContactTabsItemCountById
   * @param contactId ID of contact to return
   * @returns
   */
  async getOnesTabsItemCount(contactId: number) {
    return new API(this.apiKey).request<getContactTabsItemCountByIdResponse>(
      `/Contact/${contactId}/getTabsItemCount`,
      undefined,
      { method: "GET" }
    );
  }
}
