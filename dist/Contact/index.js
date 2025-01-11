"use strict";
// Imports
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
var node_fetch_1 = __importDefault(require("node-fetch"));
// Project-Imports
var index_js_1 = require("../index.js");
// Code
var Contact = /** @class */ (function () {
    function Contact(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * Retrieves the next available customer number. Avoids duplicates.
     * @link https://api.sevdesk.de/#tag/Contact/operation/getNextCustomerNumber
     * @returns Next available customer number
     */
    Contact.prototype.getNextFreeCustomerNumber = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, node_fetch_1.default)("".concat(index_js_1.apiUrl, "/Contact/Factory/getNextCustomerNumber"), {
                            headers: {
                                Authorization: "Bearer ".concat(this.apiKey),
                            },
                            method: "GET",
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, {
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
                            }];
                }
            });
        });
    };
    /**
     * Returns an array of contacts having a certain custom field value set.
     * @link https://api.sevdesk.de/#tag/Contact/operation/findContactsByCustomFieldValue
     * @param value The value to be checked.
     * @param customFieldName The ContactCustomFieldSetting name, if no ContactCustomFieldSetting is provided.
     * @param customFieldSettingId ID of ContactCustomFieldSetting for which the value has to be checked.
     * @returns Array of objects (Contact model)
     */
    Contact.prototype.findContactsByCustomFieldValue = function (value, customFieldName, customFieldSettingId) {
        return __awaiter(this, void 0, void 0, function () {
            var query, response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = [];
                        if (customFieldSettingId) {
                            query.push("customFieldSetting[id]=".concat(customFieldSettingId, "&customFieldSetting[objectName]=ContactCustomFieldSetting"));
                        }
                        if (value) {
                            query.push("value=".concat(value));
                        }
                        if (customFieldName) {
                            query.push("customFieldName=".concat(customFieldName));
                        }
                        return [4 /*yield*/, (0, node_fetch_1.default)("".concat(index_js_1.apiUrl, "/Contact/Factory/findContactsByCustomFieldValue?").concat(query.join("&")), {
                                headers: {
                                    Authorization: "Bearer ".concat(this.apiKey),
                                },
                                method: "GET",
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, {
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
                            }];
                }
            });
        });
    };
    /**
     * Checks if a given customer number is available or already used.
     * @link https://api.sevdesk.de/#tag/Contact/operation/contactCustomerNumberAvailabilityCheck
     * @param customerNumber The customer number to be checked.
     * @returns Returns whether given customer number is available.
     */
    Contact.prototype.checkIfACustomerNumberIsAvailable = function (customerNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, node_fetch_1.default)("".concat(index_js_1.apiUrl, "/Contact/Factory/checkIfACustomerNumberIsAvailable?customerNumber=").concat(customerNumber), {
                            headers: {
                                Authorization: "Bearer ".concat(this.apiKey),
                            },
                            method: "GET",
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, {
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
                            }];
                }
            });
        });
    };
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
    Contact.prototype.retrieveContacts = function (depth, customerNumber, categoryId, city, parentId, name, zip, countryId, createBefore, createAfter, updateBefore, updateAfter, orderByCustomerNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var query, response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = [];
                        if (customerNumber) {
                            query.push("customerNumber=".concat(customerNumber));
                        }
                        if (categoryId) {
                            query.push("category[Id]=".concat(categoryId, "&category[objectName]=ContactCategory"));
                        }
                        if (city) {
                            query.push("city=".concat(city));
                        }
                        if (parentId) {
                            query.push("parent[id]=".concat(parentId, "&parent[objectName]=Contact"));
                        }
                        if (depth) {
                            query.push("depth=".concat(depth));
                        }
                        if (name) {
                            query.push("name=".concat(name));
                        }
                        if (zip) {
                            query.push("zip=".concat(zip));
                        }
                        if (countryId) {
                            query.push("country[id]=".concat(countryId, "&country[objectName]=Country"));
                        }
                        if (createBefore) {
                            query.push("createBefore=".concat(createBefore.toISOString()));
                        }
                        if (createAfter) {
                            query.push("createAfter=".concat(createAfter.toISOString()));
                        }
                        if (updateBefore) {
                            query.push("updateBefore=".concat(updateBefore.toISOString()));
                        }
                        if (updateAfter) {
                            query.push("updateAfter=".concat(updateAfter.toISOString()));
                        }
                        if (orderByCustomerNumber) {
                            query.push("orderByCustomerNumber=".concat(orderByCustomerNumber));
                        }
                        return [4 /*yield*/, (0, node_fetch_1.default)("".concat(index_js_1.apiUrl, "/Contact?").concat(query.join("&")), {
                                headers: {
                                    Authorization: "Bearer ".concat(this.apiKey),
                                },
                                method: "GET",
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, {
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
                            }];
                }
            });
        });
    };
    /**
     * Creates a new contact.
     * @link https://api.sevdesk.de/#tag/Contact/operation/createContact
     * @param body Creation data
     * @returns Returns created contact
     */
    Contact.prototype.createANewContact = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, node_fetch_1.default)("".concat(index_js_1.apiUrl, "/Contact"), {
                            method: "POST",
                            headers: {
                                Authorization: "".concat(this.apiKey),
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(body),
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, {
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
                            }];
                }
            });
        });
    };
    /**
     * Returns a single contact
     * @link https://api.sevdesk.de/#tag/Contact/operation/getContactById
     * @param contactId ID of contact to return
     * @returns Returns a single contact
     */
    Contact.prototype.findContactByID = function (contactId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, node_fetch_1.default)("".concat(index_js_1.apiUrl, "/Contact/").concat(contactId), {
                            method: "GET",
                            headers: { Authorization: this.apiKey },
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, {
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
                            }];
                }
            });
        });
    };
    /**
     * Update a contact
     * @link https://api.sevdesk.de/#tag/Contact/operation/updateContact
     * @param contactId ID of contact to update
     * @param body Update data
     * @returns Returns changed contact resource
     */
    Contact.prototype.updateAExistingContact = function (contactId, body) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, node_fetch_1.default)("".concat(index_js_1.apiUrl, "/Contact/").concat(contactId), {
                            method: "PUT",
                            headers: {
                                Authorization: this.apiKey,
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(body),
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, {
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
                            }];
                }
            });
        });
    };
    /**
     *
     * @link https://api.sevdesk.de/#tag/Contact/operation/deleteContact
     * @param contactId Id of contact resource to delete
     * @returns contact deleted
     */
    Contact.prototype.deletesAContact = function (contactId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, node_fetch_1.default)("".concat(index_js_1.apiUrl, "/Contact/").concat(contactId), {
                            method: "DELETE",
                            headers: {
                                Authorization: this.apiKey,
                            },
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, {
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
                            }];
                }
            });
        });
    };
    /**
     * Get number of all invoices, orders, etc. of a specified contact
     * @link https://api.sevdesk.de/#tag/Contact/operation/getContactTabsItemCountById
     * @param contactId ID of contact to return
     * @returns
     */
    Contact.prototype.getNumberOfAllItems = function (contactId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, node_fetch_1.default)("".concat(index_js_1.apiUrl, "/Contact/").concat(contactId, "/getTabsItemCount"), {
                            method: "GET",
                            headers: {
                                Authorization: this.apiKey,
                            },
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, {
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
                            }];
                }
            });
        });
    };
    return Contact;
}());
exports.Contact = Contact;
