// Imports

import fetch from "node-fetch";

// Project-Imports

import { IResponse } from "./types/Response.js";
import {
  CreateANewAccountingContactBody,
  CreateANewAccountingContactResponse,
  CreateANewClearingAccountBody,
  CreateANewFileImportAccountBody,
  CreateANewFileImportAccountResponse,
  CreateANewTransactionBody,
  CreateANewTransactionResponse,
  DeleteACheckAccountResponse,
  EnshrineResponse,
  FindAccountingContactByIDResponse,
  FindCheckAccountByIdResponse,
  FindCheckAccountTransactionByIDResponse,
  GetTheBalanceAtAGivenDateResponse,
  RetrieveAccountingContactResponse,
  RetrieveBookkeepingSystemVersionResponse,
  RetrieveCheckAccountsResponse,
  RetrieveTransactionsResponse,
  UpdateAnExistingCheckAccountBody,
  UpdateAnExistingCheckAccountResponse,
} from "./types/SevDeskResponses.js";

// Code

export default class SevDeskAPIWrapper {
  constructor(private apiKey: string) {}
  apiUrl = "https://my.sevdesk.de/api/v1";
  /**
   * To check if you already received the update to version 2.0 you can use this endpoint.
   * @returns object
   */
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
  /**
   * Retrieve all check accounts
   * @returns Array of objects (CheckAccount model)
   */
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
  /**
   * Creates a new banking account for file imports (CSV, MT940).
   * @param body Data to create a file import account
   * @returns CheckAccount model. Showing the properties relevant to file import accounts.
   */
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
  /**
   * Creates a new clearing account.
   * @param body Data to create a clearning account
   * @returns CheckAccount model. Showing the properties relevant to clearing accounts.
   */
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
  /**
   * Retrieve an existing check account
   * @param checkAccountId ID of check account
   * @returns Array of objects (CheckAccount model)
   */
  async findCheckAccountByID(
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
    const response = await fetch(
      `${this.apiUrl}/CheckAccount/${checkAccountId}`,
      {
        method: "PUT",
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
    const response = await fetch(
      `${this.apiUrl}/CheckAccount/${checkAccountId}`,
      {
        method: "DELETE",
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
      `${this.apiUrl}/CheckAccount/${checkAccountId}/getBalanceAtDate?=date=${date}`,
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
  /**
   * Retrieve all transactions depending on the filters defined in the query.
   * @param checkAccountId Retrieve all transactions on this check account. Must be provided with checkAccount[objectName]
   * @param isBooked Only retrieve booked transactions
   * @param paymtPurpose Only retrieve transactions with this payment purpose
   * @param startDate Only retrieve transactions from this date on
   * @param endDate Only retrieve transactions up to this date
   * @param payeePayerName Only retrieve transactions with this payee / payer
   * @param onlyCredit Only retrieve credit transactions
   * @param onlyDebit Only retrieve debit transactions
   * @returns Array of objects (CheckAccountTransaction model)
   */
  async retrieveTransactions(
    checkAccountId?: number,
    isBooked?: boolean,
    paymtPurpose?: string,
    startDate?: Date,
    endDate?: Date,
    payeePayerName?: string,
    onlyCredit?: boolean,
    onlyDebit?: boolean
  ): Promise<IResponse<RetrieveTransactionsResponse>> {
    const query = [];
    if (checkAccountId)
      query.push(
        `checkAccount[id]=${checkAccountId}&=checkAccount[objectName]=CheckAccount`
      );
    if (isBooked) query.push(`isBooked=${isBooked}`);
    if (paymtPurpose) query.push(`paymtPurpose=${paymtPurpose}`);
    if (startDate) query.push(`startDate=${startDate}`);
    if (endDate) query.push(`endDate=${endDate}`);
    if (payeePayerName) query.push(`payeePayerName=${payeePayerName}`);
    if (onlyCredit) query.push(`onlyCredit=${onlyCredit}`);
    if (onlyDebit) query.push(`onlyDebit=${onlyDebit}`);

    const response = await fetch(
      `${this.apiUrl}/CheckAccountTransaction?${query.join("&")}`,
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
        data: data ? (data as RetrieveTransactionsResponse) : null,
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
   * Creates a new transaction on a check account.
   * @param body Creation data. Please be aware, that you need to provide at least all required parameter of the CheckAccountTransaction model!
   */
  async createANewTransaction(
    body: CreateANewTransactionBody
  ): Promise<IResponse<CreateANewTransactionResponse>> {
    const response = await fetch(`${this.apiUrl}/CheckAccountTransaction`, {
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
        body: await response.text(),
        bodyUsed: response.bodyUsed,
        data: data ? (data as CreateANewTransactionResponse) : null,
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
   * Retrieve an existing check account transaction
   * @param checkAccountTransactionId ID of check account transaction
   * @returns Array of objects (CheckAccountTransaction model)
   */
  async findCheckAccountTransactionByID(
    checkAccountTransactionId: number
  ): Promise<IResponse<FindCheckAccountTransactionByIDResponse>> {
    const response = await fetch(
      `${this.apiUrl}/CheckAccountTransaction/${checkAccountTransactionId}`,
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
        data: data ? (data as FindCheckAccountTransactionByIDResponse) : null,
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
   * Update a check account transaction
   * @param checkAccountTransactionId ID of check account to update transaction
   * @param body Update data
   * @returns Return changed check account resource
   */
  async updateAnExistingCheckAccountTransaction(
    checkAccountTransactionId: number,
    body: UpdateAnExistingCheckAccountBody
  ): Promise<IResponse<UpdateAnExistingCheckAccountResponse>> {
    const response = await fetch(
      `${this.apiUrl}/CheckAccountTransaction/${checkAccountTransactionId}`,
      {
        method: "PUT",
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
   * @param checkAccountTransactionId Id of check account transaction to delete
   * @returns check account transaction deleted
   */
  async deletesACheckAccountTransaction(
    checkAccountTransactionId: number
  ): Promise<IResponse<DeleteACheckAccountResponse>> {
    const response = await fetch(
      `${this.apiUrl}/CheckAccountTransaction/${checkAccountTransactionId}`,
      {
        method: "DELETE",
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
   * Sets the current date and time as a value for the property enshrined.
This operation is only possible if the status is "Linked" ("status": "200") or higher.

Linked invoices, credit notes or vouchers cannot be changed when the transaction is enshrined.
   * @param checkAccountTransactionId 
   * @returns ID of the transaction to enshrine
   */
  async enshrine(
    checkAccountTransactionId: number
  ): Promise<IResponse<EnshrineResponse>> {
    const response = await fetch(
      `${this.apiUrl}/CheckAccountTransaction/${checkAccountTransactionId}/enshrine`,
      {
        method: "POST",
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
        data: data ? (data as EnshrineResponse) : null,
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
   * Returns all accounting contact which have been added up until now. Filters can be added.
   * @param contactId ID of contact for which you want the accounting contact.
   * @returns
   */
  async retrieveAccountingContact(
    contactId: string
  ): Promise<IResponse<RetrieveAccountingContactResponse>> {
    const response = await fetch(
      `${this.apiUrl}/AccountingContact?contact[id]=${contactId}&contact[objectName]=Contact`,
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
        data: data ? (data as RetrieveAccountingContactResponse) : null,
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
   * Creates a new accounting contact.
   * @param body Creation data
   * @returns Returns created accounting contact
   */
  async createANewAccountingContact(
    body: CreateANewAccountingContactBody
  ): Promise<IResponse<CreateANewAccountingContactResponse>> {
    const response = await fetch(`${this.apiUrl}/AccountingContact`, {
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
        body: await response.text(),
        bodyUsed: response.bodyUsed,
        data: data ? (data as CreateANewAccountingContactResponse) : null,
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
   * Returns a single accounting contact
   * @param accountingContactId ID of accounting contact to return
   * @returns
   */
  async findAccountingContactByID(
    accountingContactId: number
  ): Promise<IResponse<FindAccountingContactByIDResponse>> {
    const response = await fetch(
      `${this.apiUrl}/AccountingContact/${accountingContactId}`,
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
        data: data ? (data as FindAccountingContactByIDResponse) : null,
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
