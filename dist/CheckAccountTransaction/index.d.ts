import { getTransactionResponse, deleteCheckAccountTransactionResponse, enshrineResponse, getCheckAccountTransactionByIdResponse } from "./types/response.types.js";
import { createTransactionBody, updateCheckAccountTransactionBody } from "./types/body.types.js";
/**
 * A check account transaction is a payment on a check account from or to the customer.
They are essential for booking invoices, vouchers (receipts) and credit notes with them to mark them as paid.
For a correct bookkeeping, there is always one or multiple transactions linked to an invoice, a voucher or a credit note, until the relevant object is completely paid.
  * @link https://api.sevdesk.de/#tag/CheckAccountTransaction
 */
export declare class CheckAccountTransaction {
    private apiKey;
    constructor(apiKey: string);
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
    getMany(checkAccountId?: number, isBooked?: boolean, paymtPurpose?: string, startDate?: Date, endDate?: Date, payeePayerName?: string, onlyCredit?: boolean, onlyDebit?: boolean): Promise<import("../types/Response.js").IApiResponse<getTransactionResponse>>;
    /**
     * Creates a new transaction on a check account.
     * @link https://api.sevdesk.de/#tag/CheckAccountTransaction/operation/createTransaction
     * @param body Creation data. Please be aware, that you need to provide at least all required parameter of the CheckAccountTransaction model!
     */
    createOne(body: createTransactionBody): Promise<import("../types/Response.js").IApiResponse<import("./types/base.types.js").CheckAccountTransaction>>;
    /**
     * Retrieve an existing check account transaction
     * @link https://api.sevdesk.de/#tag/CheckAccountTransaction/operation/getCheckAccountTransactionById
     * @param checkAccountTransactionId ID of check account transaction
     * @returns Array of objects (CheckAccountTransaction model)
     */
    getOne(checkAccountTransactionId: number): Promise<import("../types/Response.js").IApiResponse<getCheckAccountTransactionByIdResponse>>;
    /**
     * Update a check account transaction
     * @link https://api.sevdesk.de/#tag/CheckAccountTransaction/operation/updateCheckAccountTransaction
     * @param checkAccountTransactionId ID of check account to update transaction
     * @param body Update data
     * @returns Return changed check account resource
     */
    updateOne(checkAccountTransactionId: number, body: updateCheckAccountTransactionBody): Promise<import("../types/Response.js").IApiResponse<import("./types/base.types.js").CheckAccountTransaction>>;
    /**
     * @link https://api.sevdesk.de/#tag/CheckAccountTransaction/operation/deleteCheckAccountTransaction
     * @param checkAccountTransactionId Id of check account transaction to delete
     * @returns check account transaction deleted
     */
    deleteOne(checkAccountTransactionId: number): Promise<import("../types/Response.js").IApiResponse<deleteCheckAccountTransactionResponse>>;
    /**
     * Sets the current date and time as a value for the property enshrined.
  This operation is only possible if the status is "Linked" ("status": "200") or higher.
  
  Linked invoices, credit notes or vouchers cannot be changed when the transaction is enshrined.
    * @link https://api.sevdesk.de/#tag/CheckAccountTransaction/operation/checkAccountTransactionEnshrine
     * @param checkAccountTransactionId ID of the transaction to enshrine
     * @returns ID of the transaction to enshrine
     */
    enshrineOne(checkAccountTransactionId: number): Promise<import("../types/Response.js").IApiResponse<enshrineResponse>>;
}
