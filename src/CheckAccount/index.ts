// Project-Imports

import { API } from "../types/common.classes.js";
import { RequestOptions } from "../types/common.types.js";
import { ApiResponse } from "../types/Response.js";
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
  constructor(private apiKey: string) {}
  /**
   * Retrieve all check accounts
   * @link https://api.sevdesk.de/#tag/CheckAccount/operation/getCheckAccounts
   * @returns Array of objects (CheckAccount model)
   */
  async getMany() {
    return await new API(this.apiKey).request<getCheckAccountsResponse>(
      "/CheckAccount",
      undefined,
      { method: "GET" }
    );
  }

  /**
   * Creates a new banking account for file imports (CSV, MT940).
   * @link https://api.sevdesk.de/#tag/CheckAccount/operation/createFileImportAccount
   * @param body Data to create a file import account
   * @returns CheckAccount model. Showing the properties relevant to file import accounts.
   */
  async createFileImportAccount(body: createFileImportAccountBody) {
    return await new API(this.apiKey).request<createFileImportAccountResponse>(
      "/CheckAccount/Factory/fileImportAccount",
      undefined,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * Creates a new clearing account.
   * @link https://api.sevdesk.de/#tag/CheckAccount/operation/createClearingAccount
   * @param body Data to create a clearing account
   * @returns CheckAccount model. Showing the properties relevant to clearing accounts.
   */
  async createNewClearingAccount(body: createClearingAccountBody) {
    return await new API(this.apiKey).request<createClearingAccountResponse>(
      "/CheckAccount/Factory/clearingAccount",
      undefined,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * Retrieve an existing check account
   * @link https://api.sevdesk.de/#tag/CheckAccount/operation/getCheckAccountById
   * @param checkAccountId ID of check account
   * @returns Array of objects (CheckAccount model)
   */
  async getOne(checkAccountId: number) {
    return await new API(this.apiKey).request<getCheckAccountByIdResponse>(
      `/CheckAccount/${checkAccountId}`,
      undefined,
      { method: "GET" }
    );
  }

  /**
   * Update a check account
   * @link https://api.sevdesk.de/#tag/CheckAccount/operation/updateCheckAccount
   * @param checkAccountId ID of check account to update
   * @param body Update data
   * @returns Returns changed check account resource
   */
  async updateOne(checkAccountId: number, body: updateCheckAccountBody) {
    return await new API(this.apiKey).request<updateCheckAccountResponse>(
      `/CheckAccount/${checkAccountId}`,
      undefined,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * @link https://api.sevdesk.de/#tag/CheckAccount/operation/deleteCheckAccount
   * @param checkAccountId Id of check account to delete
   * @returns Array of any
   */
  async deleteOne(checkAccountId: number) {
    return await new API(this.apiKey).request<deleteCheckAccountResponse>(
      `/CheckAccount/${checkAccountId}`,
      undefined,
      { method: "DELETE" }
    );
  }

  /**
   * Get the balance, calculated as the sum of all transactions sevdesk knows, up to and including the given date. Note that this balance does not have to be the actual bank account balance, e.g. if sevdesk did not import old transactions.
   * @link https://api.sevdesk.de/#tag/CheckAccount/operation/getBalanceAtDate
   * @param checkAccountId ID of check account
   * @param date Only consider transactions up to this date at 23:59:59
   */
  async getOnesBalanceAtDate(checkAccountId: number, date: Date) {
    return await new API(this.apiKey).request<getBalanceAtDateResponse>(
      `/CheckAccount/${checkAccountId}/getBalanceAtDate`,
      { date: date.toISOString() },
      { method: "GET" }
    );
  }
}
