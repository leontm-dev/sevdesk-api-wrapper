import { IResponse } from "../types/Response.js";
import { RetrieveTransactionsResponse, CreateANewTransactionResponse, DeleteATransactionResponse, FindCheckAccountTransactionByIDResponse, UpdateAnExistingTransactionResponse, EnshrineResponse } from "./types/response.types.js";
import { CreateANewTransactionBody, UpdateAnExistingTransactionBody } from "./types/body.types.js";
export declare class CheckAccountTransaction {
    private apiKey;
    constructor(apiKey: string);
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
    retrieveTransactions(checkAccountId?: number, isBooked?: boolean, paymtPurpose?: string, startDate?: Date, endDate?: Date, payeePayerName?: string, onlyCredit?: boolean, onlyDebit?: boolean): Promise<IResponse<RetrieveTransactionsResponse>>;
    /**
     * Creates a new transaction on a check account.
     * @param body Creation data. Please be aware, that you need to provide at least all required parameter of the CheckAccountTransaction model!
     */
    createANewTransaction(body: CreateANewTransactionBody): Promise<IResponse<CreateANewTransactionResponse>>;
    /**
     * Retrieve an existing check account transaction
     * @param checkAccountTransactionId ID of check account transaction
     * @returns Array of objects (CheckAccountTransaction model)
     */
    findCheckAccountTransactionByID(checkAccountTransactionId: number): Promise<IResponse<FindCheckAccountTransactionByIDResponse>>;
    /**
     * Update a check account transaction
     * @param checkAccountTransactionId ID of check account to update transaction
     * @param body Update data
     * @returns Return changed check account resource
     */
    updateAnExistingCheckAccountTransaction(checkAccountTransactionId: number, body: UpdateAnExistingTransactionBody): Promise<IResponse<UpdateAnExistingTransactionResponse>>;
    /**
     *
     * @param checkAccountTransactionId Id of check account transaction to delete
     * @returns check account transaction deleted
     */
    deletesACheckAccountTransaction(checkAccountTransactionId: number): Promise<IResponse<DeleteATransactionResponse>>;
    /**
     * Sets the current date and time as a value for the property enshrined.
  This operation is only possible if the status is "Linked" ("status": "200") or higher.
  
  Linked invoices, credit notes or vouchers cannot be changed when the transaction is enshrined.
     * @param checkAccountTransactionId
     * @returns ID of the transaction to enshrine
     */
    enshrine(checkAccountTransactionId: number): Promise<IResponse<EnshrineResponse>>;
}
