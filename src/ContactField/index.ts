// Project-Imports

import {
  createContactFieldResponse,
  createContactFieldSettingResponse,
  deleteContactFieldResponse,
  deleteContactFieldSettingResponse,
  getContactFieldSettingByIdResponse,
  getContactFieldSettingsResponse,
  getContactFieldsResponse,
  getPlaceholderResponse,
  getReferenceCountResponse,
  updateContactFieldResponse,
  updateContactFieldSettingResponse,
} from "./types/response.types.js";
import {
  createContactFieldBody,
  createContactFieldSettingBody,
  updateContactFieldBody,
  updateContactFieldSettingBody,
} from "./types/body.types.js";
import { API } from "../types/common.classes.js";

// Code

/**
 * The contact fields are placeholders that can be titled and filled per contact. The contact fields can then be used in invoices, credit notes and emails.
 * @link https://api.sevdesk.de/#tag/ContactField
 */
export class ContactField {
  constructor(private apiKey: string) {}
  /**
   * Retrieve all Placeholders
   * @link https://api.sevdesk.de/#tag/ContactField/operation/getPlaceholder
   * @param objectName Model name
   * @param subObjectName Sub model name, required if you have "Email" at objectName
   * @returns Array of objects (Textparser fetchDictionaryEntriesByType model)
   */
  async getManyPlaceholders(
    objectName:
      | "Invoice"
      | "CreditNote"
      | "Order"
      | "Contact"
      | "Letter"
      | "Email",
    subObjectName?: "Invoice" | "CreditNote" | "Order" | "Contact" | "Letter"
  ) {
    const queryObj: Record<string, string> = {
      objectName,
    };
    if (subObjectName) queryObj["subObjectName"] = subObjectName;

    return await new API(this.apiKey).request<getPlaceholderResponse>(
      "/Textparser/fetchDictionaryEntriesByType",
      queryObj,
      { method: "GET" }
    );
  }

  /**
   * Retrieve all contact fields
   * @link https://api.sevdesk.de/#tag/ContactField/operation/getContactFields
   * @returns Array of objects (contact fields model)
   */
  async getMany() {
    return await new API(this.apiKey).request<getContactFieldsResponse>(
      "/ContactCustomField",
      undefined,
      { method: "GET" }
    );
  }

  /**
   * Create contact field
   * @link https://api.sevdesk.de/#tag/ContactField/operation/createContactField
   * @param body
   * @returns
   */
  async createOne(body: createContactFieldBody) {
    return await new API(this.apiKey).request<createContactFieldResponse>(
      "/ContactCustomField",
      undefined,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * Update a contact field
   * @link https://api.sevdesk.de/#tag/ContactField/operation/updateContactfield
   * @param contactCustomFieldId id of the contact field
   * @param body Update data
   * @returns
   */
  async updateOne(contactCustomFieldId: number, body: updateContactFieldBody) {
    return await new API(this.apiKey).request<updateContactFieldResponse>(
      `/ContactCustomField/${contactCustomFieldId}`,
      undefined,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * @link https://api.sevdesk.de/#tag/ContactField/operation/deleteContactCustomFieldId
   * @param contactCustomFieldId Id of contact field
   * @returns
   */
  async deleteOne(contactCustomFieldId: number) {
    return await new API(this.apiKey).request<deleteContactFieldResponse>(
      `/ContactCustomField/${contactCustomFieldId}`,
      undefined,
      { method: "DELETE" }
    );
  }

  /**
   * Retrieve all contact field settings
   * @link https://api.sevdesk.de/#tag/ContactField/operation/getContactFieldSettings
   * @returns Array of objects (contact fields model)
   */
  async getManySettings() {
    return await new API(this.apiKey).request<getContactFieldSettingsResponse>(
      "/ContactCustomFieldSetting",
      undefined,
      { method: "GET" }
    );
  }

  /**
   * Create contact field setting
   * @link https://api.sevdesk.de/#tag/ContactField/operation/createContactFieldSetting
   * @param body
   * @returns
   */
  async createOneSetting(body: createContactFieldSettingBody) {
    return await new API(
      this.apiKey
    ).request<createContactFieldSettingResponse>(
      "/ContactCustomFieldSetting",
      undefined,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * Returns a single contact field setting
   * @link https://api.sevdesk.de/#tag/ContactField/operation/getContactFieldSettingById
   * @param contactCustomFieldSettingId ID of contact field to return
   * @returns Array of objects (contact fields model)
   */
  async getOneSetting(contactCustomFieldSettingId: number) {
    return await new API(
      this.apiKey
    ).request<getContactFieldSettingByIdResponse>(
      `/ContactCustomFieldSetting/${contactCustomFieldSettingId}`,
      undefined,
      { method: "GET" }
    );
  }

  /**
   * Update an existing contact field setting
   * @link https://api.sevdesk.de/#tag/ContactField/operation/updateContactFieldSetting
   * @param contactCustomFieldSettingId ID of contact field setting you want to update
   * @param body
   * @returns
   */
  async updateOneSetting(
    contactCustomFieldSettingId: number,
    body: updateContactFieldSettingBody
  ) {
    return await new API(
      this.apiKey
    ).request<updateContactFieldSettingResponse>(
      `/ContactCustomFieldSetting/${contactCustomFieldSettingId}`,
      undefined,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * @link https://api.sevdesk.de/#tag/ContactField/operation/deleteContactFieldSetting
   * @param contactCustomFieldSettingId Id of contact field to delete
   * @returns Array of any
   */
  async deleteOneSetting(contactCustomFieldSettingId: number) {
    return await new API(
      this.apiKey
    ).request<deleteContactFieldSettingResponse>(
      `/ContactCustomFieldSetting/${contactCustomFieldSettingId}`,
      undefined,
      { method: "DELETE" }
    );
  }

  /**
   * Receive count reference
   * @link https://api.sevdesk.de/#tag/ContactField/operation/getReferenceCount
   * @param contactCustomFieldSettingId ID of contact field you want to get the reference count
   * @returns
   */
  async getOnesSettingReferenceCount(contactCustomFieldSettingId: number) {
    return await new API(this.apiKey).request<getReferenceCountResponse>(
      `/ContactCustomFieldSetting/${contactCustomFieldSettingId}/getReferenceCount`,
      undefined,
      { method: "GET" }
    );
  }
}
