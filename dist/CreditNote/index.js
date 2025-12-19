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
exports.CreditNote = void 0;
var common_classes_1 = require("../types/common.classes");
// Code
var CreditNote = /** @class */ (function () {
    function CreditNote(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * There are a multitude of parameter which can be used to filter.
     * @link https://api.sevdesk.de/#tag/CreditNote/operation/getCreditNotes
     * @param status Status of the CreditNote
     * @param creditNoteNumber Retrieve all CreditNotes with this creditNote number
     * @param startDate Retrieve all CreditNotes with a date equal or higher
     * @param endDate Retrieve all CreditNotes with a date equal or lower
     * @param contactId Retrieve all CreditNotes with this contact. Must be provided with contact[objectName]
     * @returns Array of objects (creditNote model)
     */
    CreditNote.prototype.getMany = function (status, creditNoteNumber, startDate, endDate, contactId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryObj = {};
                        if (status)
                            queryObj["status"] = status;
                        if (creditNoteNumber)
                            queryObj["creditNoteNumber"] = creditNoteNumber;
                        if (startDate)
                            queryObj["startDate"] = startDate.toISOString();
                        if (endDate)
                            queryObj["endDate"] = endDate.toISOString();
                        if (contactId) {
                            queryObj["contact[id]"] = contactId.toString();
                            queryObj["contact[objectName]"] = "Contact";
                        }
                        return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/CreditNote", queryObj, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * The list of parameters starts with the credit note array.
  This array contains all required attributes for a complete credit note.
  Most of the attributes are covered in the credit note attribute list, there are only two parameters standing out, namely mapAll and objectName.
  These are just needed for our system and you always need to provide them.
  The list of parameters then continues with the credit note position array.
  With this array you have the possibility to add multiple positions at once.
  In the example it only contains one position, again together with the parameters mapAll and objectName, however, you can add more credit note positions by extending the array.
  So if you wanted to add another position, you would add the same list of parameters with an incremented array index of "1" instead of "0".
  
  The list ends with the five parameters creditNotePosDelete, discountSave, discountDelete, takeDefaultAddress and forCashRegister.
  They only play a minor role if you only want to create a credit note but we will shortly explain what they can do.
  With creditNotePosDelete you have to option to delete credit note positions as this request can also be used to update credit notes.
  Both discount parameters are deprecated and have no use for credit notes, however they need to be provided in case you want to use the following two parameters.
  With takeDefaultAddress you can specify that the first address of the contact you are using for the credit note is taken for the credit note address attribute automatically, so you don't need to provide the address yourself.
  Finally, the forCashRegister parameter needs to be set to true if your credit note is to be booked on the cash register.
  If you want to know more about these parameters, for example if you want to use this request to update credit notes, feel free to contact our support.
  Finally, after covering all parameters, they only important information left, is that the order of the last five attributes always needs to be kept.
  You will also always need to provide all of them, as otherwise the request won't work properly.
      * @link https://api.sevdesk.de/#tag/CreditNote/operation/createcreditNote
     * @param body Creation data. Please be aware, that you need to provide at least all required parameter of the credit note model!
     * @returns Returns created credit note
     */
    CreditNote.prototype.createOne = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/CreditNote/Factory/saveCreditNote", undefined, {
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
     * Use this endpoint to create a new creditNote from a voucher.
     * @link https://api.sevdesk.de/#tag/CreditNote/operation/createCreditNoteFromInvoice
     * @param body
     */
    CreditNote.prototype.createOneFromInvoice = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/CreditNote/Factory/createFromInvoice", undefined, {
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
     * Use this endpoint to create a new creditNote from a voucher.
     * @link https://api.sevdesk.de/#tag/CreditNote/operation/createCreditNoteFromVoucher
     * @deprecated
     * @param body
     * @returns
     */
    CreditNote.prototype.createOneFromVoucher = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/CreditNote/Factory/createFromVoucher", undefined, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(body),
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // TODO: Documentation
    CreditNote.prototype.getOne = function (creditNoteId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/CreditNote/".concat(creditNoteId), undefined, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // TODO: Documentation
    CreditNote.prototype.updateOne = function (creditNoteId, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/CreditNote/".concat(creditNoteId), undefined, {
                            method: "PUT",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(body),
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CreditNote.prototype.deleteOne = function (creditNoteId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/CreditNote/".concat(creditNoteId), undefined, { method: "DELETE" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CreditNote.prototype.sendOneByPrinting = function (creditNoteId, sendType) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/CreditNote/".concat(creditNoteId, "/sendByWithRender"), { sendType: sendType }, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CreditNote.prototype.markOneAsSent = function (creditNoteId, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/CreditNote/".concat(creditNoteId, "/sendBy"), undefined, {
                            method: "PUT",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(body),
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CreditNote.prototype.enshrineOne = function (creditNoteId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/CreditNote/".concat(creditNoteId, "/enshrine"), undefined, { method: "PUT" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CreditNote.prototype.getOnesPdf = function (creditNoteId, download, preventSendBy) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/CreditNote/".concat(creditNoteId, "/getPdf"), { download: String(download), preventSendBy: String(preventSendBy) }, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CreditNote.prototype.sendOneViaEmail = function (creditNoteId, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/CreditNote/".concat(creditNoteId, "/sendViaEmail"), undefined, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(body),
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CreditNote.prototype.bookOne = function (creditNoteId, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/CreditNote/".concat(creditNoteId, "/bookAmount"), undefined, {
                            method: "PUT",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(body),
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CreditNote.prototype.resetOnesStatusToOpen = function (creditNoteId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/CreditNote/".concat(creditNoteId, "/resetToOpen"), undefined, { method: "PUT" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CreditNote.prototype.resetOnesStatusToDraft = function (creditNoteId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/CreditNote/".concat(creditNoteId, "/resetToDraft"), undefined, { method: "PUT" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return CreditNote;
}());
exports.CreditNote = CreditNote;
