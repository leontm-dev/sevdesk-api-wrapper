// Imports

import fetch from "node-fetch";

// Project-Imports

import { IResponse } from "../types/Response.js";
import { apiUrl } from "../index.js";
import {
  CreateContactFieldResponse,
  CreateContactFieldSettingResponse,
  DeleteAContactFieldResponse,
  DeletesAContactFieldSettingResponse,
  FindContactFieldSettingByIDResponse,
  ReceiveCountReferenceResponse,
  RetrieveContactFieldSettingsResponse,
  RetrieveContactFieldsResponse,
  RetrievePlaceholdersResponse,
  UpdateAContactFieldResponse,
  UpdateContactFieldSettingResponse,
} from "./types/response.types.js";
import {
  CreateContactFieldBody,
  CreateContactFieldSettingBody,
  UpdateAContactFieldBody,
  UpdateContactFieldSettingBody,
} from "./types/body.types.js";

// Code

export class ContactField {
  constructor(private apiKey: string) {}
  /**
   * Retrieve all Placeholders
   * @link https://api.sevdesk.de/#tag/ContactField/operation/getPlaceholder
   * @param objectName Model name
   * @param subObjectName Sub model name, required if you have "Email" at objectName
   * @returns Array of objects (Textparser fetchDictionaryEntriesByType model)
   */
  async retrievePlaceholders(
    objectName:
      | "Invoice"
      | "CreditNote"
      | "Order"
      | "Contact"
      | "Letter"
      | "Email",
    subObjectName?: "Invoice" | "CreditNote" | "Order" | "Contact" | "Letter"
  ): Promise<IResponse<RetrievePlaceholdersResponse>> {
    const query = [];
    query.push(`objectName=${objectName}`);
    if (subObjectName) query.push(`subObjectName=${subObjectName}`);
    const response = await fetch(
      `${apiUrl}/Textparser/fetchDictionaryEntriesByType?${query.join("&")}`,
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
        ok: response.ok,
        status: response.status,
        statusText: response.statusText,
        url: response.url,
        data: data ? (data as RetrievePlaceholdersResponse) : null,
        body: response.body,
        bodyUsed: response.bodyUsed,
        headers: response.headers,
        redirected: response.redirected,
        type: response.type,
        size: response.size,
      },
    };
  }
  /**
   * Retrieve all contact fields
   * @link https://api.sevdesk.de/#tag/ContactField/operation/getContactFields
   * @returns Array of objects (contact fields model)
   */
  async retrieveContactFields(): Promise<
    IResponse<RetrieveContactFieldsResponse>
  > {
    const response = await fetch(`${apiUrl}/ContactCustomField`, {
      method: "GET",
      headers: {
        Authorization: this.apiKey,
      },
    });
    const data = await response.json();
    return {
      status: response.status,
      response: {
        ok: response.ok,
        status: response.status,
        statusText: response.statusText,
        url: response.url,
        data: data ? (data as RetrieveContactFieldsResponse) : null,
        body: response.body,
        bodyUsed: response.bodyUsed,
        headers: response.headers,
        redirected: response.redirected,
        type: response.type,
        size: response.size,
      },
    };
  }
  /**
   * Create contact field
   * @link https://api.sevdesk.de/#tag/ContactField/operation/createContactField
   * @param body
   * @returns
   */
  async createContactField(
    body: CreateContactFieldBody
  ): Promise<IResponse<CreateContactFieldResponse>> {
    const response = await fetch(`${apiUrl}/ContactCustomField`, {
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
        ok: response.ok,
        status: response.status,
        statusText: response.statusText,
        url: response.url,
        data: data ? (data as CreateContactFieldResponse) : null,
        body: response.body,
        bodyUsed: response.bodyUsed,
        headers: response.headers,
        redirected: response.redirected,
        type: response.type,
        size: response.size,
      },
    };
  }
  /**
   * Update a contact field
   * @link https://api.sevdesk.de/#tag/ContactField/operation/updateContactfield
   * @param contactCustomFieldId id of the contact field
   * @param body Update data
   * @returns
   */
  async updateAContactField(
    contactCustomFieldId: number,
    body: UpdateAContactFieldBody
  ): Promise<IResponse<UpdateAContactFieldResponse>> {
    const response = await fetch(
      `${apiUrl}/ContactCustomField/${contactCustomFieldId}`,
      {
        headers: {
          Authorization: this.apiKey,
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(body),
      }
    );
    const data = await response.json();
    return {
      status: response.status,
      response: {
        ok: response.ok,
        status: response.status,
        statusText: response.statusText,
        url: response.url,
        data: data ? (data as UpdateAContactFieldResponse) : null,
        body: response.body,
        bodyUsed: response.bodyUsed,
        headers: response.headers,
        redirected: response.redirected,
        type: response.type,
        size: response.size,
      },
    };
  }
  /**
   * @link https://api.sevdesk.de/#tag/ContactField/operation/deleteContactCustomFieldId
   * @param contactCustomFieldId Id of contact field
   * @returns
   */
  async deleteAContactField(
    contactCustomFieldId: number
  ): Promise<IResponse<DeleteAContactFieldResponse>> {
    const response = await fetch(
      `${apiUrl}/ContactCustomField/${contactCustomFieldId}`,
      {
        headers: {
          Authorization: this.apiKey,
        },
        method: "DELETE",
      }
    );
    const data = await response.json();
    return {
      status: response.status,
      response: {
        ok: response.ok,
        status: response.status,
        statusText: response.statusText,
        url: response.url,
        data: data ? (data as DeleteAContactFieldResponse) : null,
        body: response.body,
        bodyUsed: response.bodyUsed,
        headers: response.headers,
        redirected: response.redirected,
        type: response.type,
        size: response.size,
      },
    };
  }
  /**
   * Retrieve all contact field settings
   * @link https://api.sevdesk.de/#tag/ContactField/operation/getContactFieldSettings
   * @returns Array of objects (contact fields model)
   */
  async retrieveContactFieldSettings(): Promise<
    IResponse<RetrieveContactFieldSettingsResponse>
  > {
    const response = await fetch(`${apiUrl}/ContactCustomFieldSetting`, {
      headers: {
        Authorization: this.apiKey,
      },
      method: "GET",
    });
    const data = await response.json();
    return {
      status: response.status,
      response: {
        ok: response.ok,
        status: response.status,
        statusText: response.statusText,
        url: response.url,
        data: data ? (data as RetrieveContactFieldSettingsResponse) : null,
        body: response.body,
        bodyUsed: response.bodyUsed,
        headers: response.headers,
        redirected: response.redirected,
        type: response.type,
        size: response.size,
      },
    };
  }
  /**
   * Create contact field setting
   * @link https://api.sevdesk.de/#tag/ContactField/operation/createContactFieldSetting
   * @param body
   * @returns
   */
  async createContactFieldSetting(
    body: CreateContactFieldSettingBody
  ): Promise<IResponse<CreateContactFieldSettingResponse>> {
    const response = await fetch(`${apiUrl}/ContactCustomFieldSetting`, {
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
        ok: response.ok,
        status: response.status,
        statusText: response.statusText,
        url: response.url,
        data: data ? (data as CreateContactFieldSettingResponse) : null,
        body: response.body,
        bodyUsed: response.bodyUsed,
        headers: response.headers,
        redirected: response.redirected,
        type: response.type,
        size: response.size,
      },
    };
  }
  /**
   * Returns a single contact field setting
   * @link https://api.sevdesk.de/#tag/ContactField/operation/getContactFieldSettingById
   * @param contactCustomFieldSettingId ID of contact field to return
   * @returns Array of objects (contact fields model)
   */
  async findContactFieldSettingByID(
    contactCustomFieldSettingId: number
  ): Promise<IResponse<FindContactFieldSettingByIDResponse>> {
    const response = await fetch(
      `${apiUrl}/ContactCustomFieldSetting/${contactCustomFieldSettingId}`,
      {
        headers: {
          Authorization: this.apiKey,
        },
        method: "GET",
      }
    );
    const data = await response.json();
    return {
      status: response.status,
      response: {
        ok: response.ok,
        status: response.status,
        statusText: response.statusText,
        url: response.url,
        data: data ? (data as FindContactFieldSettingByIDResponse) : null,
        body: response.body,
        bodyUsed: response.bodyUsed,
        headers: response.headers,
        redirected: response.redirected,
        type: response.type,
        size: response.size,
      },
    };
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
    body: UpdateContactFieldSettingBody
  ): Promise<IResponse<UpdateContactFieldSettingResponse>> {
    const response = await fetch(
      `${apiUrl}/ContactCustomFieldSetting/${contactCustomFieldSettingId}`,
      {
        headers: {
          Authorization: this.apiKey,
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(body),
      }
    );
    const data = await response.json();
    return {
      status: response.status,
      response: {
        ok: response.ok,
        status: response.status,
        statusText: response.statusText,
        url: response.url,
        data: data ? (data as UpdateContactFieldSettingResponse) : null,
        body: response.body,
        bodyUsed: response.bodyUsed,
        headers: response.headers,
        redirected: response.redirected,
        type: response.type,
        size: response.size,
      },
    };
  }
  /**
   * @link https://api.sevdesk.de/#tag/ContactField/operation/deleteContactFieldSetting
   * @param contactCustomFieldSettingId Id of contact field to delete
   * @returns Array of any
   */
  async deletesAContactFieldSetting(
    contactCustomFieldSettingId: number
  ): Promise<IResponse<DeletesAContactFieldSettingResponse>> {
    const response = await fetch(
      `${apiUrl}/ContactCustomFieldSetting/${contactCustomFieldSettingId}`,
      {
        headers: {
          Authorization: this.apiKey,
        },
        method: "DELETE",
      }
    );
    const data = await response.json();
    return {
      status: response.status,
      response: {
        ok: response.ok,
        status: response.status,
        statusText: response.statusText,
        url: response.url,
        data: data ? (data as DeletesAContactFieldSettingResponse) : null,
        body: response.body,
        bodyUsed: response.bodyUsed,
        headers: response.headers,
        redirected: response.redirected,
        type: response.type,
        size: response.size,
      },
    };
  }
  /**
   * Receive count reference
   * @link https://api.sevdesk.de/#tag/ContactField/operation/getReferenceCount
   * @param contactCustomFieldSettingId ID of contact field you want to get the reference count
   * @returns
   */
  async receiveCountReference(
    contactCustomFieldSettingId: number
  ): Promise<IResponse<ReceiveCountReferenceResponse>> {
    const response = await fetch(
      `${apiUrl}/ContactCustomFieldSetting/${contactCustomFieldSettingId}/getReferenceCount`,
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
        ok: response.ok,
        status: response.status,
        statusText: response.statusText,
        url: response.url,
        data: data ? (data as ReceiveCountReferenceResponse) : null,
        body: response.body,
        bodyUsed: response.bodyUsed,
        headers: response.headers,
        redirected: response.redirected,
        type: response.type,
        size: response.size,
      },
    };
  }
}
