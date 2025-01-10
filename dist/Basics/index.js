// Imports
import fetch from "node-fetch";
import { apiUrl } from "../index.js";
// Code
export class Basics {
    apiKey;
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * To check if you already received the update to version 2.0 you can use this endpoint.
     * @returns object
     */
    async retrieveBookkeepingSystemVersion() {
        const response = await fetch(`${apiUrl}/Tools/bookkeepingSystemVersion`, {
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
}
