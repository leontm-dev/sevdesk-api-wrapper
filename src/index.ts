// Imports

import fetch from "node-fetch";

// Project-Imports

import { IResponse } from "./types/Response.js";
import {
  CreateANewClearingAccountBody,
  CreateANewFileImportAccountBody,
  CreateANewFileImportAccountResponse,
  FindCheckAccountByIdResponse,
  RetrieveBookkeepingSystemVersionResponse,
  RetrieveCheckAccountsResponse,
} from "./types/SevDeskResponses.js";

// Code

export default class SevDeskAPIWrapper {
  constructor(private apiKey: string) {}
  apiUrl = "https://my.sevdesk.de/api/v1";
  async retrieveBookkeepingSystemVersion(): Promise<
    IResponse<RetrieveBookkeepingSystemVersionResponse>
  > {
    const response = await fetch(
      `${this.apiUrl}/Tools/bookkeepingSystemVersion`,
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
        body: await response.text(),
        bodyUsed: response.bodyUsed,
        data: data ? (data as RetrieveBookkeepingSystemVersionResponse) : null,
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
  async retrieveCheckAccounts(): Promise<
    IResponse<RetrieveCheckAccountsResponse>
  > {
    const response = await fetch(`${this.apiUrl}/CheckAccount`, {
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
  async createANewFileImportAccount(
    body: CreateANewFileImportAccountBody
  ): Promise<IResponse<CreateANewFileImportAccountResponse>> {
    const response = await fetch(
      `${this.apiUrl}/CheckAccount/Factory/fileImportAccount`,
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
  async createANewClearingAccount(
    body: CreateANewClearingAccountBody
  ): Promise<IResponse<CreateANewFileImportAccountResponse>> {
    const response = await fetch(
      `${this.apiUrl}/CheckAccount/Factory/clearingAccount`,
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
  async findCheckAccountById(
    checkAccountId: number
  ): Promise<IResponse<FindCheckAccountByIdResponse>> {
    const response = await fetch(
      `${this.apiUrl}/CheckAccount/${checkAccountId}`,
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
  async updateAnExistingCheckAccount(checkAccountId: number) {}; 
}
