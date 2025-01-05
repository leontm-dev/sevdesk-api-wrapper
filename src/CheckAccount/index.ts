// Imports

import fetch from "node-fetch";

// Project-Imports

import { apiUrl } from "../index.js";
import { IResponse } from "../types/Response.js";
import {
  CreateANewClearingAccountBody,
  CreateANewFileImportAccountBody,
  UpdateAnExistingCheckAccountBody,
} from "./types/body.types.js";
import {
  RetrieveCheckAccountsResponse,
  CreateANewClearingAccountResponse,
  CreateANewFileImportAccountResponse,
  FindCheckAccountByIdResponse,
  UpdateAnExistingCheckAccountResponse,
  DeleteACheckAccountResponse,
  GetTheBalanceAtAGivenDateResponse,
} from "./types/response.types.js";

// Code

export class CheckAccount {
  constructor(private apiKey: string) {}
  /**
   * Retrieve all check accounts
   * @returns Array of objects (CheckAccount model)
   */
  async retrieveCheckAccounts(): Promise<
    IResponse<RetrieveCheckAccountsResponse>
  > {
    const response = await fetch(`${apiUrl}/CheckAccount`, {
      method: "GET",
      headers: {
        Authorization: this.apiKey,
      },
    });
    const data = await response.json();
    return {
      status: response.status,
      response: {
        body: await response.text(),
        bodyUsed: response.bodyUsed,
        data: data ? (data as RetrieveCheckAccountsResponse) : null,
        headers: response.headers,
        ok: response.ok,
        redirected: response.redirected,
        status: response.status,
        statusText: response.statusText,
        type: response.type,
        url: response.url,
        size: response.size,
      },
    };
  }
  /**
   * Creates a new banking account for file imports (CSV, MT940).
   * @param body Data to create a file import account
   * @returns CheckAccount model. Showing the properties relevant to file import accounts.
   */
  async createANewFileImportAccount(
    body: CreateANewFileImportAccountBody
  ): Promise<IResponse<CreateANewFileImportAccountResponse>> {
    const response = await fetch(
      `${apiUrl}/CheckAccount/Factory/fileImportAccount`,
      {
        method: "POST",
        headers: {
          Authorization: this.apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const data = await response.json();
    return {
      status: response.status,
      response: {
        body: await response.text(),
        bodyUsed: response.bodyUsed,
        data: data ? (data as CreateANewFileImportAccountResponse) : null,
        headers: response.headers,
        ok: response.ok,
        redirected: response.redirected,
        status: response.status,
        statusText: response.statusText,
        type: response.type,
        url: response.url,
        size: response.size,
      },
    };
  }
  /**
   * Creates a new clearing account.
   * @param body Data to create a clearing account
   * @returns CheckAccount model. Showing the properties relevant to clearing accounts.
   */
  async createANewClearingAccount(
    body: CreateANewClearingAccountBody
  ): Promise<IResponse<CreateANewFileImportAccountResponse>> {
    const response = await fetch(
      `${apiUrl}/CheckAccount/Factory/clearingAccount`,
      {
        method: "POST",
        headers: {
          Authorization: this.apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const data = await response.json();
    return {
      status: response.status,
      response: {
        body: await response.text(),
        bodyUsed: response.bodyUsed,
        data: data ? (data as CreateANewFileImportAccountResponse) : null,
        headers: response.headers,
        ok: response.ok,
        redirected: response.redirected,
        status: response.status,
        statusText: response.statusText,
        type: response.type,
        url: response.url,
        size: response.size,
      },
    };
  }
  /**
   * Retrieve an existing check account
   * @param checkAccountId ID of check account
   * @returns Array of objects (CheckAccount model)
   */
  async findCheckAccountByID(
    checkAccountId: number
  ): Promise<IResponse<FindCheckAccountByIdResponse>> {
    const response = await fetch(`${apiUrl}/CheckAccount/${checkAccountId}`, {
      method: "GET",
      headers: {
        Authorization: this.apiKey,
      },
    });
    const data = await response.json();
    return {
      status: response.status,
      response: {
        body: await response.text(),
        bodyUsed: response.bodyUsed,
        data: data ? (data as FindCheckAccountByIdResponse) : null,
        headers: response.headers,
        ok: response.ok,
        redirected: response.redirected,
        status: response.status,
        statusText: response.statusText,
        type: response.type,
        url: response.url,
        size: response.size,
      },
    };
  }
  /**
   * Update a check account
   * @param checkAccountId ID of check account to update
   * @param body Update data
   * @returns Returns changed check account resource
   */
  async updateAnExistingCheckAccount(
    checkAccountId: number,
    body: UpdateAnExistingCheckAccountBody
  ): Promise<IResponse<UpdateAnExistingCheckAccountResponse>> {
    const response = await fetch(`${apiUrl}/CheckAccount/${checkAccountId}`, {
      method: "PUT",
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
        body: await response.text(),
        bodyUsed: response.bodyUsed,
        data: data ? (data as UpdateAnExistingCheckAccountResponse) : null,
        headers: response.headers,
        ok: response.ok,
        redirected: response.redirected,
        status: response.status,
        statusText: response.statusText,
        type: response.type,
        url: response.url,
        size: response.size,
      },
    };
  }
  /**
   *
   * @param checkAccountId Id of check account to delete
   * @returns Array of any
   */
  async deleteACheckAccount(
    checkAccountId: number
  ): Promise<IResponse<DeleteACheckAccountResponse>> {
    const response = await fetch(`${apiUrl}/CheckAccount/${checkAccountId}`, {
      method: "DELETE",
      headers: {
        Authorization: this.apiKey,
      },
    });
    const data = await response.json();
    return {
      status: response.status,
      response: {
        body: await response.text(),
        bodyUsed: response.bodyUsed,
        data: data ? (data as DeleteACheckAccountResponse) : null,
        headers: response.headers,
        ok: response.ok,
        redirected: response.redirected,
        status: response.status,
        statusText: response.statusText,
        type: response.type,
        url: response.url,
        size: response.size,
      },
    };
  }
  /**
   * Get the balance, calculated as the sum of all transactions sevdesk knows, up to and including the given date. Note that this balance does not have to be the actual bank account balance, e.g. if sevdesk did not import old transactions.
   * @param checkAccountId ID of check account
   * @param date Only consider transactions up to this date at 23:59:59
   */
  async getTheBalanceAtAGivenDate(
    checkAccountId: number,
    date: Date
  ): Promise<IResponse<GetTheBalanceAtAGivenDateResponse>> {
    const response = await fetch(
      `${apiUrl}/CheckAccount/${checkAccountId}/getBalanceAtDate?=date=${date}`,
      { method: "GET", headers: { Authorization: this.apiKey } }
    );
    const data = await response.json();
    return {
      status: response.status,
      response: {
        body: await response.text(),
        bodyUsed: response.bodyUsed,
        data: data ? (data as GetTheBalanceAtAGivenDateResponse) : null,
        headers: response.headers,
        ok: response.ok,
        redirected: response.redirected,
        status: response.status,
        statusText: response.statusText,
        type: response.type,
        url: response.url,
        size: response.size,
      },
    };
  }
}
