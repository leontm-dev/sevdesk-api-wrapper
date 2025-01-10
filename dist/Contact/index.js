// Imports
import fetch from "node-fetch";
// Project-Imports
import { apiUrl } from "../index.js";
// Code
export class Contact {
    apiKey;
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * Retrieves the next available customer number. Avoids duplicates.
     * @link https://api.sevdesk.de/#tag/Contact/operation/getNextCustomerNumber
     * @returns Next available customer number
     */
    async getNextFreeCustomerNumber() {
        const response = await fetch(`${apiUrl}/Contact/Factory/getNextCustomerNumber`, {
            headers: {
                Authorization: `Bearer ${this.apiKey}`,
            },
            method: "GET",
        });
        const data = await response.json();
        return {
            status: response.status,
            response: {
                body: response.body,
                ok: response.ok,
                status: response.status,
                statusText: response.statusText,
                url: response.url,
                data: data ? data : null,
                headers: response.headers,
                redirected: response.redirected,
                size: response.size,
                type: response.type,
                bodyUsed: response.bodyUsed,
            },
        };
    }
    /**
     * Returns an array of contacts having a certain custom field value set.
     * @link https://api.sevdesk.de/#tag/Contact/operation/findContactsByCustomFieldValue
     * @param value The value to be checked.
     * @param customFieldName The ContactCustomFieldSetting name, if no ContactCustomFieldSetting is provided.
     * @param customFieldSettingId ID of ContactCustomFieldSetting for which the value has to be checked.
     * @returns Array of objects (Contact model)
     */
    async findContactsByCustomFieldValue(value, customFieldName, customFieldSettingId) {
        const query = [];
        if (customFieldSettingId) {
            query.push(`customFieldSetting[id]=${customFieldSettingId}&customFieldSetting[objectName]=ContactCustomFieldSetting`);
        }
        if (value) {
            query.push(`value=${value}`);
        }
        if (customFieldName) {
            query.push(`customFieldName=${customFieldName}`);
        }
        const response = await fetch(`${apiUrl}/Contact/Factory/findContactsByCustomFieldValue?${query.join("&")}`, {
            headers: {
                Authorization: `Bearer ${this.apiKey}`,
            },
            method: "GET",
        });
        const data = await response.json();
        return {
            status: response.status,
            response: {
                body: response.body,
                ok: response.ok,
                status: response.status,
                statusText: response.statusText,
                url: response.url,
                data: data ? data : null,
                headers: response.headers,
                redirected: response.redirected,
                size: response.size,
                type: response.type,
                bodyUsed: response.bodyUsed,
            },
        };
    }
    /**
     * Checks if a given customer number is available or already used.
     * @link https://api.sevdesk.de/#tag/Contact/operation/contactCustomerNumberAvailabilityCheck
     * @param customerNumber The customer number to be checked.
     * @returns Returns whether given customer number is available.
     */
    async checkIfACustomerNumberIsAvailable(customerNumber) {
        const response = await fetch(`${apiUrl}/Contact/Factory/checkIfACustomerNumberIsAvailable?customerNumber=${customerNumber}`, {
            headers: {
                Authorization: `Bearer ${this.apiKey}`,
            },
            method: "GET",
        });
        const data = await response.json();
        return {
            status: response.status,
            response: {
                body: response.body,
                ok: response.ok,
                status: response.status,
                statusText: response.statusText,
                url: response.url,
                data: data ? data : null,
                headers: response.headers,
                redirected: response.redirected,
                size: response.size,
                type: response.type,
                bodyUsed: response.bodyUsed,
            },
        };
    }
    /**
     * There are a multitude of parameter which can be used to filter.
     * @link https://api.sevdesk.de/#tag/Contact/operation/getContacts
     * @param depth
     * @param customerNumber Only retrieve all contacts with number as a customer number
     * @param categoryId Only retrieve all contacts with id as a category
     * @param city Only retrieve all contacts with cityName as a city
     * @param parentId  Only retrieve all contacts with id as a parent organisation
     * @param name Only retrieve all contacts with name as a name, surename or familyname
     * @param zip Only retrieve all contacts with zipCode as a zip
     * @param countryId Only retrieve all contacts with id as a country
     * @param createBefore Only retrieve all contacts created before timestamp
     * @param createAfter Only retrieve all contacts created after timestamp
     * @param updateBefore Only retrieve all contacts updated last before timestamp
     * @param updateAfter	Only retrieve all contacts updated last after timestamp
     * @param orderByCustomerNumber Order all contacts after customer number in ASC/DESC order
     * @returns Array of objects (Contact model)
     */
    async retrieveContacts(depth, customerNumber, categoryId, city, parentId, name, zip, countryId, createBefore, createAfter, updateBefore, updateAfter, orderByCustomerNumber) {
        const query = [];
        if (customerNumber) {
            query.push(`customerNumber=${customerNumber}`);
        }
        if (categoryId) {
            query.push(`category[Id]=${categoryId}&category[objectName]=ContactCategory`);
        }
        if (city) {
            query.push(`city=${city}`);
        }
        if (parentId) {
            query.push(`parent[id]=${parentId}&parent[objectName]=Contact`);
        }
        if (depth) {
            query.push(`depth=${depth}`);
        }
        if (name) {
            query.push(`name=${name}`);
        }
        if (zip) {
            query.push(`zip=${zip}`);
        }
        if (countryId) {
            query.push(`country[id]=${countryId}&country[objectName]=Country`);
        }
        if (createBefore) {
            query.push(`createBefore=${createBefore.toISOString()}`);
        }
        if (createAfter) {
            query.push(`createAfter=${createAfter.toISOString()}`);
        }
        if (updateBefore) {
            query.push(`updateBefore=${updateBefore.toISOString()}`);
        }
        if (updateAfter) {
            query.push(`updateAfter=${updateAfter.toISOString()}`);
        }
        if (orderByCustomerNumber) {
            query.push(`orderByCustomerNumber=${orderByCustomerNumber}`);
        }
        const response = await fetch(`${apiUrl}/Contact?${query.join("&")}`, {
            headers: {
                Authorization: `Bearer ${this.apiKey}`,
            },
            method: "GET",
        });
        const data = await response.json();
        return {
            status: response.status,
            response: {
                body: response.body,
                ok: response.ok,
                status: response.status,
                statusText: response.statusText,
                url: response.url,
                data: data,
                headers: response.headers,
                redirected: response.redirected,
                size: response.size,
                type: response.type,
                bodyUsed: response.bodyUsed,
            },
        };
    }
    /**
     * Creates a new contact.
     * @link https://api.sevdesk.de/#tag/Contact/operation/createContact
     * @param body Creation data
     * @returns Returns created contact
     */
    async createANewContact(body) {
        const response = await fetch(`${apiUrl}/Contact`, {
            method: "POST",
            headers: {
                Authorization: `${this.apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        const data = await response.json();
        return {
            status: response.status,
            response: {
                body: response.body,
                ok: response.ok,
                status: response.status,
                statusText: response.statusText,
                url: response.url,
                data: data ? data : null,
                headers: response.headers,
                redirected: response.redirected,
                size: response.size,
                type: response.type,
                bodyUsed: response.bodyUsed,
            },
        };
    }
    /**
     * Returns a single contact
     * @link https://api.sevdesk.de/#tag/Contact/operation/getContactById
     * @param contactId ID of contact to return
     * @returns Returns a single contact
     */
    async findContactByID(contactId) {
        const response = await fetch(`${apiUrl}/Contact/${contactId}`, {
            method: "GET",
            headers: { Authorization: this.apiKey },
        });
        const data = await response.json();
        return {
            status: response.status,
            response: {
                body: response.body,
                ok: response.ok,
                status: response.status,
                statusText: response.statusText,
                url: response.url,
                data: data ? data : null,
                headers: response.headers,
                redirected: response.redirected,
                size: response.size,
                type: response.type,
                bodyUsed: response.bodyUsed,
            },
        };
    }
    /**
     * Update a contact
     * @link https://api.sevdesk.de/#tag/Contact/operation/updateContact
     * @param contactId ID of contact to update
     * @param body Update data
     * @returns Returns changed contact resource
     */
    async updateAExistingContact(contactId, body) {
        const response = await fetch(`${apiUrl}/Contact/${contactId}`, {
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
                body: response.body,
                ok: response.ok,
                status: response.status,
                statusText: response.statusText,
                url: response.url,
                data: data ? data : null,
                headers: response.headers,
                redirected: response.redirected,
                size: response.size,
                type: response.type,
                bodyUsed: response.bodyUsed,
            },
        };
    }
    /**
     *
     * @link https://api.sevdesk.de/#tag/Contact/operation/deleteContact
     * @param contactId Id of contact resource to delete
     * @returns contact deleted
     */
    async deletesAContact(contactId) {
        const response = await fetch(`${apiUrl}/Contact/${contactId}`, {
            method: "DELETE",
            headers: {
                Authorization: this.apiKey,
            },
        });
        const data = await response.json();
        return {
            status: response.status,
            response: {
                body: response.body,
                ok: response.ok,
                status: response.status,
                statusText: response.statusText,
                url: response.url,
                data: data ? data : null,
                headers: response.headers,
                redirected: response.redirected,
                size: response.size,
                type: response.type,
                bodyUsed: response.bodyUsed,
            },
        };
    }
    /**
     * Get number of all invoices, orders, etc. of a specified contact
     * @link https://api.sevdesk.de/#tag/Contact/operation/getContactTabsItemCountById
     * @param contactId ID of contact to return
     * @returns
     */
    async getNumberOfAllItems(contactId) {
        const response = await fetch(`${apiUrl}/Contact/${contactId}/getTabsItemCount`, {
            method: "GET",
            headers: {
                Authorization: this.apiKey,
            },
        });
        const data = await response.json();
        return {
            status: response.status,
            response: {
                body: response.body,
                ok: response.ok,
                status: response.status,
                statusText: response.statusText,
                url: response.url,
                data: data ? data : null,
                headers: response.headers,
                redirected: response.redirected,
                size: response.size,
                type: response.type,
                bodyUsed: response.bodyUsed,
            },
        };
    }
}
