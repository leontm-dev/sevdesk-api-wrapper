// Project-Imports

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
import { Responder, IResponse } from "../types/Response.js";

// Code

/**
 * A accounting contact object belongs to one specific contact object and holds the accounting information for this contact, which is mainly the vendor / receivable accounts number.
This information is very important to guarantee valid bookkeeping reports.
As this endpoint is also pretty easy to understand, we won't cover it here, but we really recommend you having a look at the POST to create accounting contacts and at the request which checks if a number is still available.
  * @link https://api.sevdesk.de/#tag/AccountingContact
 */
export class AccountingContact {
  private Responder: Responder;
  constructor(apiKey: string) {
    this.Responder = new Responder(apiKey, "1");
  }
  /**
   * Returns all accounting contact which have been added up until now. Filters can be added.
   * @link https://api.sevdesk.de/#tag/AccountingContact/operation/getAccountingContact
   * @param contactId ID of contact for which you want the accounting contact.
   * @returns
   */
  async getAccountingContact(
    contactId: string
  ): Promise<IResponse<getAccountingContactResponse>> {
    return this.Responder.process(
      "/AccountingContact",
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
      ]
    );
  }

  /**
   * Creates a new accounting contact.
   * @link https://api.sevdesk.de/#tag/AccountingContact/operation/createAccountingContact
   * @param body Creation data
   * @returns Returns created accounting contact
   */
  async createAccountingContact(
    body: createAccountingContactBody
  ): Promise<IResponse<createAccountingContactResponse>> {
    return this.Responder.process("/AccountingContact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  /**
   * Returns a single accounting contact
   * @link https://api.sevdesk.de/#tag/AccountingContact/operation/getAccountingContactById
   * @param accountingContactId ID of accounting contact to return
   * @returns
   */
  async getAccountingContactById(
    accountingContactId: number
  ): Promise<IResponse<getAccountingContactByIdResponse>> {
    return this.Responder.process(`/AccountingContact/${accountingContactId}`, {
      method: "GET",
    });
  }

  /**
   * Attention, updating an existing AccountingContact can lead to booking errors, especially in the DATEV export. Compatibility of sevdesk with DATEV is no longer guaranteed.
   * @link https://api.sevdesk.de/#tag/AccountingContact/operation/updateAccountingContact
   * @param accountingContactId ID of accounting contact to update
   * @param body Update data
   * @returns Returns changed accounting contact resource
   */
  async updateAccountingContact(
    accountingContactId: number,
    body: updateAccountingContactBody
  ): Promise<IResponse<updateAccountingContactResponse>> {
    return this.Responder.process(`/AccountingContact/${accountingContactId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  /**
   * Attention, deleting an existing AccountingContact can lead to booking errors, especially in the DATEV export. Compatibility of sevdesk with DATEV is no longer guaranteed.
   * @link https://api.sevdesk.de/#tag/AccountingContact/operation/deleteAccountingContact
   * @param accountingContactId Id of accounting contact resource to delete
   * @returns
   */
  async deleteAccountingContact(
    accountingContactId: number
  ): Promise<IResponse<deleteAccountingContactResponse>> {
    return this.Responder.process(`/AccountingContact/${accountingContactId}`, {
      method: "DELETE",
    });
  }
}
