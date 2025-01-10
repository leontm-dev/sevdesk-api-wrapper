// Imports
import fetch from "node-fetch";
// Project-Imports
import { apiUrl } from "../index.js";
// Code
export class AccountingContact {
    apiKey;
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * Returns all accounting contact which have been added up until now. Filters can be added.
     * @param contactId ID of contact for which you want the accounting contact.
     * @returns
     */
    async retrieveAccountingContact(contactId) {
        const response = await fetch(`${apiUrl}/AccountingContact?contact[id]=${contactId}&contact[objectName]=Contact`, {
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
     * Creates a new accounting contact.
     * @param body Creation data
     * @returns Returns created accounting contact
     */
    async createANewAccountingContact(body) {
        const response = await fetch(`${apiUrl}/AccountingContact`, {
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
     * Returns a single accounting contact
     * @param accountingContactId ID of accounting contact to return
     * @returns
     */
    async findAccountingContactByID(accountingContactId) {
        const response = await fetch(`${apiUrl}/AccountingContact/${accountingContactId}`, {
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
     * Attention, updating an existing AccountingContact can lead to booking errors, especially in the DATEV export. Compatibility of sevdesk with DATEV is no longer guaranteed.
     * @param accountingContactId ID of accounting contact to update
     * @param body Update data
     * @returns Returns changed accounting contact resource
     */
    async updateAnExistingAccountingContact(accountingContactId, body) {
        const response = await fetch(`${apiUrl}/AccountingContact/${accountingContactId}`, {
            method: "PUT",
            headers: {
                Authorization: this.apiKey,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        const data = await response.json();
        const responseObj = {
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
        return responseObj;
    }
    async deletesAnAccountingContact(accountingContactId) {
        const response = await fetch(`${apiUrl}/AccountingContact/${accountingContactId}`, {
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
}
