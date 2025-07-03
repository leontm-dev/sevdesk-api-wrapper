// Project-Imports

import { IResponse, Responder } from "../types/Response.js";
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

// Code

/**
 * The contact fields are placeholders that can be titled and filled per contact. The contact fields can then be used in invoices, credit notes and emails.
 * @link https://api.sevdesk.de/#tag/ContactField
 */
export class ContactField {
  private Responder: Responder;
  constructor(apiKey: string) {
    this.Responder = new Responder(apiKey, "1");
  }
  /**
   * Retrieve all Placeholders
   * @link https://api.sevdesk.de/#tag/ContactField/operation/getPlaceholder
   * @param objectName Model name
   * @param subObjectName Sub model name, required if you have "Email" at objectName
   * @returns Array of objects (Textparser fetchDictionaryEntriesByType model)
   */
  async getPlaceholder(
    objectName:
      | "Invoice"
      | "CreditNote"
      | "Order"
      | "Contact"
      | "Letter"
      | "Email",
    subObjectName?: "Invoice" | "CreditNote" | "Order" | "Contact" | "Letter"
  ): Promise<IResponse<getPlaceholderResponse>> {
    return this.Responder.process(
      `/Textparser/fetchDictionaryEntriesByType`,
      {
        method: "GET",
      },
      [
        {
          key: "objectName",
          value: objectName,
        },
        {
          key: "subObjectName",
          value: subObjectName,
        },
      ]
    );
  }

  /**
   * Retrieve all contact fields
   * @link https://api.sevdesk.de/#tag/ContactField/operation/getContactFields
   * @returns Array of objects (contact fields model)
   */
  async getContactFields(): Promise<IResponse<getContactFieldsResponse>> {
    return this.Responder.process(`/ContactCustomField`, {
      method: "GET",
    });
  }

  /**
   * Create contact field
   * @link https://api.sevdesk.de/#tag/ContactField/operation/createContactField
   * @param body
   * @returns
   */
  async createContactField(
    body: createContactFieldBody
  ): Promise<IResponse<createContactFieldResponse>> {
    return this.Responder.process(`/ContactCustomField`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  /**
   * Update a contact field
   * @link https://api.sevdesk.de/#tag/ContactField/operation/updateContactfield
   * @param contactCustomFieldId id of the contact field
   * @param body Update data
   * @returns
   */
  async updateContactField(
    contactCustomFieldId: number,
    body: updateContactFieldBody
  ): Promise<IResponse<updateContactFieldResponse>> {
    return this.Responder.process(
      `/ContactCustomField/${contactCustomFieldId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * @link https://api.sevdesk.de/#tag/ContactField/operation/deleteContactCustomFieldId
   * @param contactCustomFieldId Id of contact field
   * @returns
   */
  async deleteContactField(
    contactCustomFieldId: number
  ): Promise<IResponse<deleteContactFieldResponse>> {
    return this.Responder.process(
      `/ContactCustomField/${contactCustomFieldId}`,
      {
        method: "DELETE",
      }
    );
  }

  /**
   * Retrieve all contact field settings
   * @link https://api.sevdesk.de/#tag/ContactField/operation/getContactFieldSettings
   * @returns Array of objects (contact fields model)
   */
  async getContactFieldSettings(): Promise<
    IResponse<getContactFieldSettingsResponse>
  > {
    return this.Responder.process(`/ContactCustomFieldSetting`, {
      method: "GET",
    });
  }

  /**
   * Create contact field setting
   * @link https://api.sevdesk.de/#tag/ContactField/operation/createContactFieldSetting
   * @param body
   * @returns
   */
  async createContactFieldSetting(
    body: createContactFieldSettingBody
  ): Promise<IResponse<createContactFieldSettingResponse>> {
    return this.Responder.process(`/ContactCustomFieldSetting`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  /**
   * Returns a single contact field setting
   * @link https://api.sevdesk.de/#tag/ContactField/operation/getContactFieldSettingById
   * @param contactCustomFieldSettingId ID of contact field to return
   * @returns Array of objects (contact fields model)
   */
  async getContactFieldSettingById(
    contactCustomFieldSettingId: number
  ): Promise<IResponse<getContactFieldSettingByIdResponse>> {
    return this.Responder.process(
      `/ContactCustomFieldSetting/${contactCustomFieldSettingId}`,
      {
        method: "GET",
      }
    );
  }

  /**
   * Update an existing contact field setting
   * @link https://api.sevdesk.de/#tag/ContactField/operation/updateContactFieldSetting
   * @param contactCustomFieldSettingId ID of contact field setting you want to update
   * @param body
   * @returns
   */
  async updateContactFieldSetting(
    contactCustomFieldSettingId: number,
    body: updateContactFieldSettingBody
  ): Promise<IResponse<updateContactFieldSettingResponse>> {
    return this.Responder.process(
      `/ContactCustomFieldSetting/${contactCustomFieldSettingId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * @link https://api.sevdesk.de/#tag/ContactField/operation/deleteContactFieldSetting
   * @param contactCustomFieldSettingId Id of contact field to delete
   * @returns Array of any
   */
  async deleteContactFieldSetting(
    contactCustomFieldSettingId: number
  ): Promise<IResponse<deleteContactFieldSettingResponse>> {
    return this.Responder.process(
      `/ContactCustomFieldSetting/${contactCustomFieldSettingId}`,
      {
        method: "DELETE",
      }
    );
  }

  /**
   * Receive count reference
   * @link https://api.sevdesk.de/#tag/ContactField/operation/getReferenceCount
   * @param contactCustomFieldSettingId ID of contact field you want to get the reference count
   * @returns
   */
  async getReferenceCount(
    contactCustomFieldSettingId: number
  ): Promise<IResponse<getReferenceCountResponse>> {
    return this.Responder.process(
      `/ContactCustomFieldSetting/${contactCustomFieldSettingId}/getReferenceCount`,
      {
        method: "GET",
      }
    );
  }
}
