// Imports
import fetch from "node-fetch";
import { apiUrl } from "../index.js";
// Code
export class CheckAccountTransaction {
    apiKey;
    constructor(apiKey) {
        this.apiKey = apiKey;
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
    async retrieveTransactions(checkAccountId, isBooked, paymtPurpose, startDate, endDate, payeePayerName, onlyCredit, onlyDebit) {
        const query = [];
        if (checkAccountId)
            query.push(`checkAccount[id]=${checkAccountId}&=checkAccount[objectName]=CheckAccount`);
        if (isBooked)
            query.push(`isBooked=${isBooked}`);
        if (paymtPurpose)
            query.push(`paymtPurpose=${paymtPurpose}`);
        if (startDate)
            query.push(`startDate=${startDate}`);
        if (endDate)
            query.push(`endDate=${endDate}`);
        if (payeePayerName)
            query.push(`payeePayerName=${payeePayerName}`);
        if (onlyCredit)
            query.push(`onlyCredit=${onlyCredit}`);
        if (onlyDebit)
            query.push(`onlyDebit=${onlyDebit}`);
        const response = await fetch(`${apiUrl}/CheckAccountTransaction?${query.join("&")}`, {
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
                data: data ? data : null,
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
    async createANewTransaction(body) {
        const response = await fetch(`${apiUrl}/CheckAccountTransaction`, {
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
                data: data ? data : null,
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
    async findCheckAccountTransactionByID(checkAccountTransactionId) {
        const response = await fetch(`${apiUrl}/CheckAccountTransaction/${checkAccountTransactionId}`, {
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
                data: data ? data : null,
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
    async updateAnExistingCheckAccountTransaction(checkAccountTransactionId, body) {
        const response = await fetch(`${apiUrl}/CheckAccountTransaction/${checkAccountTransactionId}`, {
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
                data: data ? data : null,
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
    async deletesACheckAccountTransaction(checkAccountTransactionId) {
        const response = await fetch(`${apiUrl}/CheckAccountTransaction/${checkAccountTransactionId}`, {
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
                data: data ? data : null,
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
    async enshrine(checkAccountTransactionId) {
        const response = await fetch(`${apiUrl}/CheckAccountTransaction/${checkAccountTransactionId}/enshrine`, {
            method: "POST",
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
                data: data ? data : null,
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
