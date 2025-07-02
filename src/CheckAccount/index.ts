// Project-Imports

import { IResponse, Responder } from "../types/Response.js";
import {
  createClearingAccountBody,
  createFileImportAccountBody,
  updateCheckAccountBody,
} from "./types/body.types.js";
import {
  getCheckAccountsResponse,
  createFileImportAccountResponse,
  createClearingAccountResponse,
  getCheckAccountByIdResponse,
  updateCheckAccountResponse,
  deleteCheckAccountResponse,
  getBalanceAtDateResponse,
} from "./types/response.types.js";

// Code

/**
 * A check account is a payment account on which payments to or from the customer are stored.
There are three general types of check accounts:

Clearing Account (type=offline)
Bank Accounts including PayPal and CSV import accounts (type=online)
Cash Register (type=register)
Bank accounts can be linked to PayPal or Banks, these must be created through the UI. File import accounts can be created through an endpoint.
Clearing accounts can be created through an endpoint.
If you want to create payment entries via API, use a file import account.
Register accounts represent the cash register for sevdesk account holders needing one and they behave the same way as offline accounts.

Regarding the check accounts, you will most certainly only need to request existing check accounts for using their ID in further requests.
Therefore, you only need to send normal GET requests to the CheckAccount endpoint.
  * @link https://api.sevdesk.de/#tag/CheckAccount
 */
export class CheckAccount {
  private Responder: Responder;
  constructor(apiKey: string) {
    this.Responder = new Responder(apiKey, "1");
  }
  /**
   * Retrieve all check accounts
   * @link https://api.sevdesk.de/#tag/CheckAccount/operation/getCheckAccounts
   * @returns Array of objects (CheckAccount model)
   */
  async getCheckAccounts(): Promise<IResponse<getCheckAccountsResponse>> {
    return this.Responder.process("/CheckAccount", {
      method: "GET",
    });
  }

  /**
   * Creates a new banking account for file imports (CSV, MT940).
   * @link https://api.sevdesk.de/#tag/CheckAccount/operation/createFileImportAccount
   * @param body Data to create a file import account
   * @returns CheckAccount model. Showing the properties relevant to file import accounts.
   */
  async createFileImportAccount(
    body: createFileImportAccountBody
  ): Promise<IResponse<createFileImportAccountResponse>> {
    return this.Responder.process("/CheckAccount/Factory/fileImportAccount", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  /**
   * Creates a new clearing account.
   * @link https://api.sevdesk.de/#tag/CheckAccount/operation/createClearingAccount
   * @param body Data to create a clearing account
   * @returns CheckAccount model. Showing the properties relevant to clearing accounts.
   */
  async createNewClearingAccount(
    body: createClearingAccountBody
  ): Promise<IResponse<createClearingAccountResponse>> {
    return this.Responder.process("/CheckAccount/Factory/clearingAccount", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  /**
   * Retrieve an existing check account
   * @link https://api.sevdesk.de/#tag/CheckAccount/operation/getCheckAccountById
   * @param checkAccountId ID of check account
   * @returns Array of objects (CheckAccount model)
   */
  async getCheckAccountById(
    checkAccountId: number
  ): Promise<IResponse<getCheckAccountByIdResponse>> {
    return this.Responder.process(`/CheckAccount/${checkAccountId}`, {
      method: "GET",
    });
  }

  /**
   * Update a check account
   * @link https://api.sevdesk.de/#tag/CheckAccount/operation/updateCheckAccount
   * @param checkAccountId ID of check account to update
   * @param body Update data
   * @returns Returns changed check account resource
   */
  async updateCheckAccount(
    checkAccountId: number,
    body: updateCheckAccountBody
  ): Promise<IResponse<updateCheckAccountResponse>> {
    return this.Responder.process(`/CheckAccount/${checkAccountId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  /**
   * @link https://api.sevdesk.de/#tag/CheckAccount/operation/deleteCheckAccount
   * @param checkAccountId Id of check account to delete
   * @returns Array of any
   */
  async deleteCheckAccount(
    checkAccountId: number
  ): Promise<IResponse<deleteCheckAccountResponse>> {
    return this.Responder.process(`/CheckAccount/${checkAccountId}`, {
      method: "DELETE",
    });
  }

  /**
   * Get the balance, calculated as the sum of all transactions sevdesk knows, up to and including the given date. Note that this balance does not have to be the actual bank account balance, e.g. if sevdesk did not import old transactions.
   * @link https://api.sevdesk.de/#tag/CheckAccount/operation/getBalanceAtDate
   * @param checkAccountId ID of check account
   * @param date Only consider transactions up to this date at 23:59:59
   */
  async getBalanceAtDate(
    checkAccountId: number,
    date: Date
  ): Promise<IResponse<getBalanceAtDateResponse>> {
    return this.Responder.process(
      `/CheckAccount/${checkAccountId}/balanceAtDate`,
      {
        method: "GET",
      },
      [
        {
          key: "date",
          value: date.toISOString().split("T")[0], // Format date to YYYY-MM-DD
        },
      ]
    );
  }
}
