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
exports.ContactField = void 0;
var common_classes_js_1 = require("../types/common.classes.js");
// Code
/**
 * The contact fields are placeholders that can be titled and filled per contact. The contact fields can then be used in invoices, credit notes and emails.
 * @link https://api.sevdesk.de/#tag/ContactField
 */
var ContactField = /** @class */ (function () {
    function ContactField(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * Retrieve all Placeholders
     * @link https://api.sevdesk.de/#tag/ContactField/operation/getPlaceholder
     * @param objectName Model name
     * @param subObjectName Sub model name, required if you have "Email" at objectName
     * @returns Array of objects (Textparser fetchDictionaryEntriesByType model)
     */
    ContactField.prototype.getManyPlaceholders = function (objectName, subObjectName) {
        return __awaiter(this, void 0, void 0, function () {
            var queryObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryObj = {
                            objectName: objectName,
                        };
                        if (subObjectName)
                            queryObj["subObjectName"] = subObjectName;
                        return [4 /*yield*/, new common_classes_js_1.API(this.apiKey).request("/Textparser/fetchDictionaryEntriesByType", queryObj, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Retrieve all contact fields
     * @link https://api.sevdesk.de/#tag/ContactField/operation/getContactFields
     * @returns Array of objects (contact fields model)
     */
    ContactField.prototype.getMany = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_js_1.API(this.apiKey).request("/ContactCustomField", undefined, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Create contact field
     * @link https://api.sevdesk.de/#tag/ContactField/operation/createContactField
     * @param body
     * @returns
     */
    ContactField.prototype.createOne = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_js_1.API(this.apiKey).request("/ContactCustomField", undefined, {
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
     * Update a contact field
     * @link https://api.sevdesk.de/#tag/ContactField/operation/updateContactfield
     * @param contactCustomFieldId id of the contact field
     * @param body Update data
     * @returns
     */
    ContactField.prototype.updateOne = function (contactCustomFieldId, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_js_1.API(this.apiKey).request("/ContactCustomField/".concat(contactCustomFieldId), undefined, {
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
     * @link https://api.sevdesk.de/#tag/ContactField/operation/deleteContactCustomFieldId
     * @param contactCustomFieldId Id of contact field
     * @returns
     */
    ContactField.prototype.deleteOne = function (contactCustomFieldId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_js_1.API(this.apiKey).request("/ContactCustomField/".concat(contactCustomFieldId), undefined, { method: "DELETE" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Retrieve all contact field settings
     * @link https://api.sevdesk.de/#tag/ContactField/operation/getContactFieldSettings
     * @returns Array of objects (contact fields model)
     */
    ContactField.prototype.getManySettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_js_1.API(this.apiKey).request("/ContactCustomFieldSetting", undefined, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Create contact field setting
     * @link https://api.sevdesk.de/#tag/ContactField/operation/createContactFieldSetting
     * @param body
     * @returns
     */
    ContactField.prototype.createOneSetting = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_js_1.API(this.apiKey).request("/ContactCustomFieldSetting", undefined, {
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
     * Returns a single contact field setting
     * @link https://api.sevdesk.de/#tag/ContactField/operation/getContactFieldSettingById
     * @param contactCustomFieldSettingId ID of contact field to return
     * @returns Array of objects (contact fields model)
     */
    ContactField.prototype.getOneSetting = function (contactCustomFieldSettingId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_js_1.API(this.apiKey).request("/ContactCustomFieldSetting/".concat(contactCustomFieldSettingId), undefined, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Update an existing contact field setting
     * @link https://api.sevdesk.de/#tag/ContactField/operation/updateContactFieldSetting
     * @param contactCustomFieldSettingId ID of contact field setting you want to update
     * @param body
     * @returns
     */
    ContactField.prototype.updateOneSetting = function (contactCustomFieldSettingId, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_js_1.API(this.apiKey).request("/ContactCustomFieldSetting/".concat(contactCustomFieldSettingId), undefined, {
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
     * @link https://api.sevdesk.de/#tag/ContactField/operation/deleteContactFieldSetting
     * @param contactCustomFieldSettingId Id of contact field to delete
     * @returns Array of any
     */
    ContactField.prototype.deleteOneSetting = function (contactCustomFieldSettingId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_js_1.API(this.apiKey).request("/ContactCustomFieldSetting/".concat(contactCustomFieldSettingId), undefined, { method: "DELETE" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Receive count reference
     * @link https://api.sevdesk.de/#tag/ContactField/operation/getReferenceCount
     * @param contactCustomFieldSettingId ID of contact field you want to get the reference count
     * @returns
     */
    ContactField.prototype.getOnesSettingReferenceCount = function (contactCustomFieldSettingId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_js_1.API(this.apiKey).request("/ContactCustomFieldSetting/".concat(contactCustomFieldSettingId, "/getReferenceCount"), undefined, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ContactField;
}());
exports.ContactField = ContactField;
