"use strict";
// Project-Imports
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountingContact = void 0;
var common_classes_js_1 = require("../types/common.classes.js");
// Code
/**
 * A accounting contact object belongs to one specific contact object and holds the accounting information for this contact, which is mainly the vendor / receivable accounts number.
This information is very important to guarantee valid bookkeeping reports.
As this endpoint is also pretty easy to understand, we won't cover it here, but we really recommend you having a look at the POST to create accounting contacts and at the request which checks if a number is still available.
  * @link https://api.sevdesk.de/#tag/AccountingContact
 */
var AccountingContact = /** @class */ (function () {
    function AccountingContact(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * Returns all accounting contact which have been added up until now. Filters can be added.
     * @link https://api.sevdesk.de/#tag/AccountingContact/operation/getAccountingContact
     * @param contactId ID of contact for which you want the accounting contact.
     * @returns
     */
    AccountingContact.prototype.getMany = function (contactId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryObj = {};
                        if (contactId) {
                            queryObj["contact[id]"] = contactId;
                            queryObj["contact[objectName]"] = "Contact";
                        }
                        return [4 /*yield*/, new common_classes_js_1.API(this.apiKey).request("/AccountContact", queryObj, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Creates a new accounting contact.
     * @link https://api.sevdesk.de/#tag/AccountingContact/operation/createAccountingContact
     * @param body Creation data
     * @returns Returns created accounting contact
     */
    AccountingContact.prototype.createOne = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_js_1.API(this.apiKey).request("/AccountingContact", undefined, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(body),
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns a single accounting contact
     * @link https://api.sevdesk.de/#tag/AccountingContact/operation/getAccountingContactById
     * @param accountingContactId ID of accounting contact to return
     * @returns
     */
    AccountingContact.prototype.getOne = function (accountingContactId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_js_1.API(this.apiKey).request("/AccountingContact/".concat(accountingContactId.toString()), undefined, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Attention, updating an existing AccountingContact can lead to booking errors, especially in the DATEV export. Compatibility of sevdesk with DATEV is no longer guaranteed.
     * @link https://api.sevdesk.de/#tag/AccountingContact/operation/updateAccountingContact
     * @param accountingContactId ID of accounting contact to update
     * @param body Update data
     * @returns Returns changed accounting contact resource
     */
    AccountingContact.prototype.updateOne = function (accountingContactId, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_js_1.API(this.apiKey).request("/AccountingContact/".concat(accountingContactId), undefined, {
                            method: "PUT",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(body),
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Attention, deleting an existing AccountingContact can lead to booking errors, especially in the DATEV export. Compatibility of sevdesk with DATEV is no longer guaranteed.
     * @link https://api.sevdesk.de/#tag/AccountingContact/operation/deleteAccountingContact
     * @param accountingContactId Id of accounting contact resource to delete
     * @returns
     */
    AccountingContact.prototype.deleteOne = function (accountingContactId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_js_1.API(this.apiKey).request("/AccountingContact/".concat(accountingContactId), undefined, { method: "DELETE" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return AccountingContact;
}());
exports.AccountingContact = AccountingContact;
