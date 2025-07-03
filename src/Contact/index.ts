// Project-Imports

import { IResponse, Responder } from "../types/Response.js";
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

// Code

/**
 * @link https://api.sevdesk.de/#tag/Contact
 */
export class Contact {
  private Responder: Responder;
  constructor(apiKey: string) {
    this.Responder = new Responder(apiKey, "1");
  }
  /**
   * Retrieves the next available customer number. Avoids duplicates.
   * @link https://api.sevdesk.de/#tag/Contact/operation/getNextCustomerNumber
   * @returns Next available customer number
   */
  async getNextCustomerNumber(): Promise<
    IResponse<getNextCustomerNumberResponse>
  > {
    return this.Responder.process(
      `/Contact/Factory/getNextFreeCustomerNumber`,
      {
        method: "GET",
      }
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
  ): Promise<IResponse<findContactsByCustomFieldValueResponse>> {
    return this.Responder.process(
      `/Contact/Factory/findContactsByCustomFieldValue`,
      {
        method: "GET",
      },
      [
        { key: "value", value: value },
        { key: "customFieldName", value: customFieldName },
        { key: "customFieldSetting[id]", value: customFieldSettingId },
        {
          key: "customFieldSetting[objectName]",
          value: "ContactCustomFieldSetting",
        },
      ]
    );
  }

  /**
   * Checks if a given customer number is available or already used.
   * @link https://api.sevdesk.de/#tag/Contact/operation/contactCustomerNumberAvailabilityCheck
   * @param customerNumber The customer number to be checked.
   * @returns Returns whether given customer number is available.
   */
  async checkIfACustomerNumberIsAvailable(
    customerNumber: string
  ): Promise<IResponse<checkIfACustomerNumberIsAvailableResponse>> {
    return this.Responder.process(
      `/Contact/Factory/contactCustomerNumberAvailabilityCheck`,
      {
        method: "GET",
      },
      [{ key: "customerNumber", value: customerNumber }]
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
  async getContacts(
    depth?: "0" | "1",
    customerNumber?: string
  ): Promise<IResponse<getContactsResponse>> {
    return this.Responder.process(
      `/Contact`,
      {
        method: "GET",
      },
      [
        { key: "depth", value: depth },
        { key: "customerNumber", value: customerNumber },
      ]
    );
  }

  /**
   * Creates a new contact.
   * @link https://api.sevdesk.de/#tag/Contact/operation/createContact
   * @param body Creation data
   * @returns Returns created contact
   */
  async createContact(
    body: createContactBody
  ): Promise<IResponse<createContactResponse>> {
    return this.Responder.process(`/Contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  /**
   * Returns a single contact
   * @link https://api.sevdesk.de/#tag/Contact/operation/getContactById
   * @param contactId ID of contact to return
   * @returns Returns a single contact
   */
  async getContactById(
    contactId: number
  ): Promise<IResponse<getContactByIdResponse>> {
    return this.Responder.process(`/Contact/${contactId}`, {
      method: "GET",
    });
  }

  /**
   * Update a contact
   * @link https://api.sevdesk.de/#tag/Contact/operation/updateContact
   * @param contactId ID of contact to update
   * @param body Update data
   * @returns Returns changed contact resource
   */
  async updateContact(
    contactId: number,
    body: updateContactBody
  ): Promise<IResponse<updateContactResponse>> {
    return this.Responder.process(`/Contact/${contactId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  /**
   *
   * @link https://api.sevdesk.de/#tag/Contact/operation/deleteContact
   * @param contactId Id of contact resource to delete
   * @returns contact deleted
   */
  async deleteContact(
    contactId: number
  ): Promise<IResponse<deleteContactResponse>> {
    return this.Responder.process(`/Contact/${contactId}`, {
      method: "DELETE",
    });
  }

  /**
   * Get number of all invoices, orders, etc. of a specified contact
   * @link https://api.sevdesk.de/#tag/Contact/operation/getContactTabsItemCountById
   * @param contactId ID of contact to return
   * @returns
   */
  async getContactTabsItemCountById(
    contactId: number
  ): Promise<IResponse<getContactTabsItemCountByIdResponse>> {
    return this.Responder.process(`/Contact/${contactId}/getTabsItemCount`, {
      method: "GET",
    });
  }
}
