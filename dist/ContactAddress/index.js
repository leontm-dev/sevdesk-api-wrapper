// Imports
import fetch from "node-fetch";
// Project-Imports
import { apiUrl } from "../index.js";
// Code
export class ContactAddress {
    apiKey;
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * Creates a new contact address.
     * @link https://api.sevdesk.de/#tag/ContactAddress/operation/createContactAddress
     * @param body Creation data
     * @returns Returns created contact address
     */
    async createANewContactAddress(body) {
        const response = await fetch(`${apiUrl}/ContactAddress`, {
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
                ok: response.ok,
                status: response.status,
                statusText: response.statusText,
                url: response.url,
                data: data ? data : null,
                body: response.body,
                bodyUsed: response.bodyUsed,
                headers: response.headers,
                redirected: response.redirected,
                type: response.type,
                size: response.size,
            },
        };
    }
    /**
     * Retrieve all contact addresses
     * @link https://api.sevdesk.de/#tag/ContactAddress/operation/getContactAddresses
     * @returns Array of objects (Contact address)
     */
    async retrieveContactAddresses() {
        const response = await fetch(`${apiUrl}/ContactAddress`, {
            headers: {
                Authorization: this.apiKey,
            },
            method: "GET",
        });
        const data = await response.json();
        return {
            status: response.status,
            response: {
                ok: response.ok,
                status: response.status,
                statusText: response.statusText,
                url: response.url,
                data: data ? data : null,
                body: response.body,
                bodyUsed: response.bodyUsed,
                headers: response.headers,
                redirected: response.redirected,
                type: response.type,
                size: response.size,
            },
        };
    }
    /**
     * Returns a single contact address
     * @link https://api.sevdesk.de/#tag/ContactAddress/operation/contactAddressId
     * @param contactAddressId ID of contact address to return
     * @returns
     */
    async findContactAddressByID(contactAddressId) {
        const response = await fetch(`${apiUrl}/ContactAddress/${contactAddressId}`, {
            headers: {
                Authorization: this.apiKey,
            },
            method: "GET",
        });
        const data = await response.json();
        return {
            status: response.status,
            response: {
                ok: response.ok,
                status: response.status,
                statusText: response.statusText,
                url: response.url,
                data: data ? data : null,
                body: response.body,
                bodyUsed: response.bodyUsed,
                headers: response.headers,
                redirected: response.redirected,
                type: response.type,
                size: response.size,
            },
        };
    }
    /**
     * update a existing contact address.
     * @link https://api.sevdesk.de/#tag/ContactAddress/operation/updateContactAddress
     * @param contactAddressId ID of contact address to return
     * @param body Creation data
     * @returns Returns created contact address
     */
    async updateAExistingContactAddress(contactAddressId, body) {
        const response = await fetch(`${apiUrl}/ContactAddress/${contactAddressId}`, {
            headers: {
                Authorization: this.apiKey,
                "Content-Type": "application/json",
            },
            method: "PUT",
            body: JSON.stringify(body),
        });
        const data = await response.json();
        return {
            status: response.status,
            response: {
                ok: response.ok,
                status: response.status,
                statusText: response.statusText,
                url: response.url,
                data: data ? data : null,
                body: response.body,
                bodyUsed: response.bodyUsed,
                headers: response.headers,
                redirected: response.redirected,
                type: response.type,
                size: response.size,
            },
        };
    }
    /**
     * @link https://api.sevdesk.de/#tag/ContactAddress/operation/deleteContactAddress
     * @param contactAddressId Id of contact address resource to delete
     * @returns contact address deleted
     */
    async deletesAContactAddress(contactAddressId) {
        const response = await fetch(`${apiUrl}/ContactAddress/${contactAddressId}`, {
            headers: {
                Authorization: this.apiKey,
            },
            method: "DELETE",
        });
        const data = await response.json();
        return {
            status: response.status,
            response: {
                ok: response.ok,
                status: response.status,
                statusText: response.statusText,
                url: response.url,
                data: data ? data : null,
                body: response.body,
                bodyUsed: response.bodyUsed,
                headers: response.headers,
                redirected: response.redirected,
                type: response.type,
                size: response.size,
            },
        };
    }
}
