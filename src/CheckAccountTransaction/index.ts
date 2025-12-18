// Project-Imports

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
import { API } from "../types/common.classes.js";

// Code

/**
 * A check account transaction is a payment on a check account from or to the customer.
They are essential for booking invoices, vouchers (receipts) and credit notes with them to mark them as paid.
For a correct bookkeeping, there is always one or multiple transactions linked to an invoice, a voucher or a credit note, until the relevant object is completely paid.
  * @link https://api.sevdesk.de/#tag/CheckAccountTransaction
 */
export class CheckAccountTransaction {
  constructor(private apiKey: string) {}
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
  async getMany(
    checkAccountId?: number,
    isBooked?: boolean,
    paymtPurpose?: string,
    startDate?: Date,
    endDate?: Date,
    payeePayerName?: string,
    onlyCredit?: boolean,
    onlyDebit?: boolean
  ) {
    const queryObj: Record<string, string> = {};
    if (checkAccountId) {
      queryObj["checkAccount[id]"] = checkAccountId.toString();
      queryObj["checkAccount[objectName]"] = "CheckAccount";
    }
    if (isBooked) queryObj["isBooked"] = String(isBooked);
    if (paymtPurpose) queryObj["paymtPurpose"] = paymtPurpose;
    if (startDate) queryObj["startDate"] = new Date(startDate).toISOString();
    if (endDate) queryObj["endDate"] = new Date(endDate).toISOString();
    if (payeePayerName) queryObj["payeePayerName"] = payeePayerName;
    if (onlyCredit) queryObj["onlyCredit"] = String(onlyCredit);
    if (onlyDebit) queryObj["onlyDebit"] = String(onlyDebit);

    return await new API(this.apiKey).request<getTransactionResponse>(
      "/CheckAccountTransaction",
      queryObj,
      { method: "GET" }
    );
  }

  /**
   * Creates a new transaction on a check account.
   * @link https://api.sevdesk.de/#tag/CheckAccountTransaction/operation/createTransaction
   * @param body Creation data. Please be aware, that you need to provide at least all required parameter of the CheckAccountTransaction model!
   */
  async createOne(body: createTransactionBody) {
    return await new API(this.apiKey).request<createTransactionResponse>(
      "/CheckAccountTransaction",
      undefined,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * Retrieve an existing check account transaction
   * @link https://api.sevdesk.de/#tag/CheckAccountTransaction/operation/getCheckAccountTransactionById
   * @param checkAccountTransactionId ID of check account transaction
   * @returns Array of objects (CheckAccountTransaction model)
   */
  async getOne(checkAccountTransactionId: number) {
    return await new API(
      this.apiKey
    ).request<getCheckAccountTransactionByIdResponse>(
      `/CheckAccountTransaction/${checkAccountTransactionId}`,
      undefined,
      { method: "GET" }
    );
  }

  /**
   * Update a check account transaction
   * @link https://api.sevdesk.de/#tag/CheckAccountTransaction/operation/updateCheckAccountTransaction
   * @param checkAccountTransactionId ID of check account to update transaction
   * @param body Update data
   * @returns Return changed check account resource
   */
  async updateOne(
    checkAccountTransactionId: number,
    body: updateCheckAccountTransactionBody
  ) {
    return await new API(
      this.apiKey
    ).request<updateCheckAccountTransactionResponse>(
      `/CheckAccountTransaction/${checkAccountTransactionId}`,
      undefined,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }
  /**
   * @link https://api.sevdesk.de/#tag/CheckAccountTransaction/operation/deleteCheckAccountTransaction
   * @param checkAccountTransactionId Id of check account transaction to delete
   * @returns check account transaction deleted
   */
  async deleteOne(checkAccountTransactionId: number) {
    return await new API(
      this.apiKey
    ).request<deleteCheckAccountTransactionResponse>(
      `/CheckAccountTransaction/${checkAccountTransactionId}`,
      undefined,
      { method: "DELETE" }
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
  async enshrineOne(checkAccountTransactionId: number) {
    return await new API(this.apiKey).request<enshrineResponse>(
      `/CheckAccountTransaction/${checkAccountTransactionId}/enshrine`,
      undefined,
      { method: "PUT" }
    );
  }
}
