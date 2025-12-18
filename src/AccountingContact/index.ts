// Project-Imports

import { API } from "../types/common.classes.js";
import {
  createAccountingContactBody,
  updateAccountingContactBody,
} from "./types/body.types.js";
import {
  getAccountingContactResponse,
  createAccountingContactResponse,
  getAccountingContactByIdResponse,
  updateAccountingContactResponse,
  deleteAccountingContactResponse,
} from "./types/response.types.js";

// Code

/**
 * A accounting contact object belongs to one specific contact object and holds the accounting information for this contact, which is mainly the vendor / receivable accounts number.
This information is very important to guarantee valid bookkeeping reports.
As this endpoint is also pretty easy to understand, we won't cover it here, but we really recommend you having a look at the POST to create accounting contacts and at the request which checks if a number is still available.
  * @link https://api.sevdesk.de/#tag/AccountingContact
 */
export class AccountingContact {
  constructor(private apiKey: string) {}
  /**
   * Returns all accounting contact which have been added up until now. Filters can be added.
   * @link https://api.sevdesk.de/#tag/AccountingContact/operation/getAccountingContact
   * @param contactId ID of contact for which you want the accounting contact.
   * @returns
   */
  async getMany(contactId?: string) {
    const queryObj: Record<string, string> = {};
    if (contactId) {
      queryObj["contact[id]"] = contactId;
      queryObj["contact[objectName]"] = "Contact";
    }
    return await new API(this.apiKey).request<getAccountingContactResponse>(
      "/AccountContact",
      queryObj,
      { method: "GET" }
    );
  }

  /**
   * Creates a new accounting contact.
   * @link https://api.sevdesk.de/#tag/AccountingContact/operation/createAccountingContact
   * @param body Creation data
   * @returns Returns created accounting contact
   */
  async createOne(body: createAccountingContactBody) {
    return await new API(this.apiKey).request<createAccountingContactResponse>(
      "/AccountingContact",
      undefined,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * Returns a single accounting contact
   * @link https://api.sevdesk.de/#tag/AccountingContact/operation/getAccountingContactById
   * @param accountingContactId ID of accounting contact to return
   * @returns
   */
  async getOne(accountingContactId: number) {
    return await new API(this.apiKey).request<getAccountingContactByIdResponse>(
      `/AccountingContact/${accountingContactId.toString()}`,
      undefined,
      { method: "GET" }
    );
  }

  /**
   * Attention, updating an existing AccountingContact can lead to booking errors, especially in the DATEV export. Compatibility of sevdesk with DATEV is no longer guaranteed.
   * @link https://api.sevdesk.de/#tag/AccountingContact/operation/updateAccountingContact
   * @param accountingContactId ID of accounting contact to update
   * @param body Update data
   * @returns Returns changed accounting contact resource
   */
  async updateOne(
    accountingContactId: number,
    body: updateAccountingContactBody
  ) {
    return await new API(this.apiKey).request<updateAccountingContactResponse>(
      `/AccountingContact/${accountingContactId}`,
      undefined,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * Attention, deleting an existing AccountingContact can lead to booking errors, especially in the DATEV export. Compatibility of sevdesk with DATEV is no longer guaranteed.
   * @link https://api.sevdesk.de/#tag/AccountingContact/operation/deleteAccountingContact
   * @param accountingContactId Id of accounting contact resource to delete
   * @returns
   */
  async deleteOne(accountingContactId: number) {
    return await new API(this.apiKey).request<deleteAccountingContactResponse>(
      `/AccountingContact/${accountingContactId}`,
      undefined,
      { method: "DELETE" }
    );
  }
}
