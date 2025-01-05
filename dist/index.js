// Imports
import fetch from "node-fetch";
// Code
export default class SevDeskAPIWrapper {
    apiKey;
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    apiUrl = "https://my.sevdesk.de/api/v1";
    async retrieveBookkeepingSystemVersion() {
        const response = await fetch(`${this.apiUrl}/Tools/bookkeepingSystemVersion`, {
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
    async retrieveCheckAccounts() {
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
    async createANewFileImportAccount(body) {
        const response = await fetch(`${this.apiUrl}/CheckAccount/Factory/fileImportAccount`, {
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
    async createANewClearingAccount(body) {
        const response = await fetch(`${this.apiUrl}/CheckAccount/Factory/clearingAccount`, {
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
    async findCheckAccountById(checkAccountId) {
        const response = await fetch(`${this.apiUrl}/CheckAccount/${checkAccountId}`, {
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
    async updateAnExistingCheckAccount(checkAccountId) { }
    ;
}
