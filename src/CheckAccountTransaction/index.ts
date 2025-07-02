// Project-Imports

import { IResponse, Responder } from "../types/Response.js";
import {
  getTransactionResponse,
  createTransactionResponse,
  updateCheckAccountTransactionResponse,
  deleteCheckAccountTransactionResponse,
  enshrineResponse,
  getCheckAccountTransactionByIdResponse,
} from "./types/response.types.js";
import {
  createTransactionBody,
  updateCheckAccountTransactionBody,
} from "./types/body.types.js";

// Code

/**
 * A check account transaction is a payment on a check account from or to the customer.
They are essential for booking invoices, vouchers (receipts) and credit notes with them to mark them as paid.
For a correct bookkeeping, there is always one or multiple transactions linked to an invoice, a voucher or a credit note, until the relevant object is completely paid.
  * @link https://api.sevdesk.de/#tag/CheckAccountTransaction
 */
export class CheckAccountTransaction {
  private Responder: Responder;
  constructor(apiKey: string) {
    this.Responder = new Responder(apiKey, "1");
  }
  /**
   * Retrieve all transactions depending on the filters defined in the query.
   * @link https://api.sevdesk.de/#tag/CheckAccountTransaction/operation/getTransactions
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
  async getTransactions(
    checkAccountId?: number,
    isBooked?: boolean,
    paymtPurpose?: string,
    startDate?: Date,
    endDate?: Date,
    payeePayerName?: string,
    onlyCredit?: boolean,
    onlyDebit?: boolean
  ): Promise<IResponse<getTransactionResponse>> {
    return this.Responder.process(
      "/CheckAccountTransaction",
      {
        method: "GET",
      },
      [
        {
          key: "checkAccount[id]",
          value: checkAccountId,
        },
        {
          key: "checkAccount[objectName]",
          value: "CheckAccount",
        },
        {
          key: "isBooked",
          value: isBooked,
        },
        {
          key: "paymtPurpose",
          value: paymtPurpose,
        },
        {
          key: "startDate",
          value: startDate ? startDate.toISOString() : undefined,
        },
        {
          key: "endDate",
          value: endDate ? endDate.toISOString() : undefined,
        },
        {
          key: "payeePayerName",
          value: payeePayerName,
        },
        {
          key: "onlyCredit",
          value: onlyCredit,
        },
        {
          key: "onlyDebit",
          value: onlyDebit,
        },
      ]
    );
  }

  /**
   * Creates a new transaction on a check account.
   * @link https://api.sevdesk.de/#tag/CheckAccountTransaction/operation/createTransaction
   * @param body Creation data. Please be aware, that you need to provide at least all required parameter of the CheckAccountTransaction model!
   */
  async createTransaction(
    body: createTransactionBody
  ): Promise<IResponse<createTransactionResponse>> {
    return this.Responder.process("/CheckAccountTransaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  /**
   * Retrieve an existing check account transaction
   * @link https://api.sevdesk.de/#tag/CheckAccountTransaction/operation/getCheckAccountTransactionById
   * @param checkAccountTransactionId ID of check account transaction
   * @returns Array of objects (CheckAccountTransaction model)
   */
  async getCheckAccountTransactionById(
    checkAccountTransactionId: number
  ): Promise<IResponse<getCheckAccountTransactionByIdResponse>> {
    return this.Responder.process(
      `/CheckAccountTransaction/${checkAccountTransactionId}`,
      {
        method: "GET",
      }
    );
  }

  /**
   * Update a check account transaction
   * @link https://api.sevdesk.de/#tag/CheckAccountTransaction/operation/updateCheckAccountTransaction
   * @param checkAccountTransactionId ID of check account to update transaction
   * @param body Update data
   * @returns Return changed check account resource
   */
  async updateCheckAccountTransaction(
    checkAccountTransactionId: number,
    body: updateCheckAccountTransactionBody
  ): Promise<IResponse<updateCheckAccountTransactionResponse>> {
    return this.Responder.process(
      `/CheckAccountTransaction/${checkAccountTransactionId}`,
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
   * @link https://api.sevdesk.de/#tag/CheckAccountTransaction/operation/deleteCheckAccountTransaction
   * @param checkAccountTransactionId Id of check account transaction to delete
   * @returns check account transaction deleted
   */
  async deleteCheckAccountTransaction(
    checkAccountTransactionId: number
  ): Promise<IResponse<deleteCheckAccountTransactionResponse>> {
    return this.Responder.process(
      `/CheckAccountTransaction/${checkAccountTransactionId}`,
      {
        method: "DELETE",
      }
    );
  }
  /**
   * Sets the current date and time as a value for the property enshrined.
This operation is only possible if the status is "Linked" ("status": "200") or higher.

Linked invoices, credit notes or vouchers cannot be changed when the transaction is enshrined.
  * @link https://api.sevdesk.de/#tag/CheckAccountTransaction/operation/checkAccountTransactionEnshrine
   * @param checkAccountTransactionId ID of the transaction to enshrine
   * @returns ID of the transaction to enshrine
   */
  async enshrine(
    checkAccountTransactionId: number
  ): Promise<IResponse<enshrineResponse>> {
    return this.Responder.process(
      `/CheckAccountTransaction/${checkAccountTransactionId}/enshrine`,
      {
        method: "POST",
      }
    );
  }
}
