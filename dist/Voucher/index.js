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
exports.Voucher = void 0;
var common_classes_1 = require("../types/common.classes");
// Code
/**
 * Vouchers (receipts) is a generic term for various documents that serve as proof of business transactions for the bookkeeping.
Incoming and outgoing invoices, coupons and receipts are among the most common types of documents.
Every time one of our sevdesk customers makes a monetary input or output, the transaction needs to be documented with a receipt.
In sevdesk our customers can create a digital version of this receipt, the voucher, to which the actual offline receipt can be attached.
These vouchers can then be paid by the end-customers or by the customer, depending if it is an input or output, so that the transaction process is completely documented.
The vouchers are directly connected to the transactions of the customer, so every time a voucher is created and marked as paid, there must be a transaction on some bank account.
The voucher must then be linked to this transaction, otherwise false reports for tax offices and other institutions can be the case.
 * @link https://api.sevdesk.de/#tag/Voucher
 */
var Voucher = /** @class */ (function () {
    function Voucher(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * Bundles the creation or updating of voucher and voucher position.
  The list of parameters starts with the voucher model.
  This contains all required attributes for a complete voucher.
  Most of the attributes are covered in the voucher attribute list, there are only two parameters standing out, namely mapAll and objectName.
  These are just needed for our system and you always need to provide them.
  
  The list of parameters then continues with the voucher position array.
  With this array you have the possibility to add multiple positions at once.
  In the example it only contains one position, again together with the parameters mapAll and objectName, however, you can add more voucher positions by extending the array.
  So if you wanted to add another position, you would add the same list of parameters with an incremented array index of "1" instead of "0".
  
  The list ends with the two parameters voucherPosDelete and filename.
  We will shortly explain what they can do.
  With voucherPosDelete you can delete voucher positions as this request can also be used to update draft vouchers.
  With filename you can attach a file to the voucher.
  For most of our customers this is a really important step, as they need to digitize their receipts.
  Finally, after covering all parameters, the only important information left, is that the order of the last two attributes always needs to be kept.
  
  The only valid status values for this endpoint are 50 (draft) and 100 (open). You can only update draft vouchers. If you have to, you can downgrade the status by calling resetToOpen (from paid) and resetToDraft (from open).
     * @link https://api.sevdesk.de/#tag/Voucher/operation/voucherFactorySaveVoucher
     * @param body Creation data. Please be aware, that you need to provide at least all required parameters of the voucher and voucher position model!
     * @returns created voucher
     */
    Voucher.prototype.createOne = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Voucher/Factory/saveVoucher", undefined, {
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
     * To attach a document to a voucher, you will need to upload it first for later use.
  To do this, you can use this request.
  When you successfully uploaded the file, you will get a sevdesk internal filename in the response.
  The filename will be a hash generated from your uploaded file. You will need it in the next request!
  After you got the just mentioned filename, you can enter it as a value for the filename parameter of the saveVoucher request.
  If you provided all necessary parameters and kept all of them in the right order, the file will be attached to your voucher.
     * @link https://api.sevdesk.de/#tag/Voucher/operation/voucherUploadFile
     * @param file File to upload
     * @returns A pdf file
     */
    Voucher.prototype.upload = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Voucher/Factory/uploadTempFile", undefined, { method: "POST", body: file })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * There are a multitude of parameter which can be used to filter. A few of them are attached but for a complete list please check out this list
     * @link https://api.sevdesk.de/#tag/Voucher/operation/getVouchers
     * @param status Status of the vouchers to retrieve.
     * @param creditDebit Define if you only want credit or debit vouchers.
     * @param descriptionLike Retrieve all vouchers with a description like this.
     * @param startDate Retrieve all vouchers with a date equal or higher
     * @param endDate Retrieve all vouchers with a date equal or lower
     * @param contactId Retrieve all vouchers with this contact. Must be provided with contact[objectName]
     * @returns
     */
    Voucher.prototype.getMany = function (status, creditDebit, descriptionLike, startDate, endDate, contactId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryObj = {};
                        if (status)
                            queryObj["status"] = status.toString();
                        if (creditDebit)
                            queryObj["creditDebit"] = creditDebit;
                        if (descriptionLike)
                            queryObj["descriptionLike"] = descriptionLike;
                        if (startDate)
                            queryObj["startDate"] = new Date(startDate).toISOString();
                        if (endDate)
                            queryObj["endDate"] = new Date(endDate).toISOString();
                        if (contactId) {
                            queryObj["contact[id]"] = contactId.toString();
                            queryObj["contact[objectName]"] = "Contact";
                        }
                        return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Voucher", queryObj, {
                                method: "GET",
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns a single voucher
     * @link https://api.sevdesk.de/#tag/Voucher/operation/getVoucherById
     * @param voucherId ID of voucher to return
     * @returns
     */
    Voucher.prototype.getOne = function (voucherId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Voucher/".concat(voucherId), undefined, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Update a draft voucher using this method if you want to change simple values like the description. Complex changes like adding a position should use /Voucher/Factory/saveVoucher.
  You can not change the status using this endpoint.
     * @link https://api.sevdesk.de/#tag/Voucher/operation/updateVoucher
     * @param voucherId ID of voucher to update
     * @param body Update data
     * @returns changed voucher resource
     */
    Voucher.prototype.updateOne = function (voucherId, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Voucher/".concat(voucherId), undefined, {
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
     * Sets the current date and time as a value for the property enshrined.
  This operation is only possible if the status is "Open" ("status": "100") or higher.
  
  Enshrined vouchers cannot be changed. This operation cannot be undone.
     * @link https://api.sevdesk.de/#tag/Voucher/operation/voucherEnshrine
     * @param voucherId ID of the voucher to enshrine
     * @returns
     */
    Voucher.prototype.enshrineOne = function (voucherId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Voucher/".concat(voucherId, "/enshrine"), undefined, { method: "PUT" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Booking the voucher with a transaction is probably the most important part in the bookkeeping process.
  There are several ways on correctly booking a voucher, all by using the same endpoint.
  Conveniently, the booking process is exactly the same as the process for invoices.
  For this reason, you can have a look at it here and all you need to do is to change "Invoice" into "Voucher" in the URL.
     * @link https://api.sevdesk.de/#tag/Voucher/operation/bookVoucher
     * @param voucherId ID of voucher to book
     * @param body Booking data
     * @returns voucher log entry
     */
    Voucher.prototype.bookOne = function (voucherId, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Voucher/".concat(voucherId, "/bookAmount"), undefined, {
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
     * Resets the status to "Open" ("status": "100"). Linked payments will be unlinked. Created asset depreciation will be reset.
  This is not possible if the voucher is already enshrined!
  
  This endpoint can not be used to increase the status from "Draft" to "Open".
  You can only change the status from higher to lower ("Open" to "Draft").
  To change to higher status use Voucher/{voucherId}/bookAmount. To change to lower status use Voucher/{voucherId}/resetToDraft.
     * @link https://api.sevdesk.de/#tag/Voucher/operation/voucherResetToOpen
     * @param voucherId ID of the voucher to reset
     * @returns changed voucher
     */
    Voucher.prototype.resetOnesStatusToOpen = function (voucherId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Voucher/".concat(voucherId, "/resetToOpen"), undefined, { method: "PUT" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Resets the status "Draft" ("status": "50"). Linked payments will be unlinked. Created asset depreciation will be reset.
  This is not possible if the voucher is already enshrined!
  
  You can only change the status from higher to lower ("Open" to "Draft").
  To change to higher status use /Voucher/Factory/saveVoucher.
     * @link https://api.sevdesk.de/#tag/Voucher/operation/voucherResetToDraft
     * @param voucherId ID of the voucher to reset
     * @returns changed voucher
     */
    Voucher.prototype.resetOnesStatusToDraft = function (voucherId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Voucher/".concat(voucherId, "/resetToDraft"), undefined, { method: "PUT" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * You can use this endpoint to help you decide which accounts you can use when creating a voucher
     * @link https://api.sevdesk.de/#tag/Voucher/operation/forAllAccounts
     * @returns
     */
    Voucher.prototype.getManyAccountGuides = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/ReceiptGuidance/forAllAccounts", undefined, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * You can use this endpoint to get additional information about the account that you may want to use.
     * @link https://api.sevdesk.de/#tag/Voucher/operation/forAccountNumber
     * @param accountNumber The datev account number you want to get additional information of
     * @returns
     */
    Voucher.prototype.getGuidanceByAmountNumber = function (accountNumber) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/ReceiptGuidance/forAccountNumber", { accountNumber: accountNumber.toString() }, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * You can use this endpoint to get additional information about the tax rule (for example, USTPFL_UMS_EINN) that you may want to use.
     * @link https://api.sevdesk.de/#tag/Voucher/operation/forTaxRule
     * @param taxRule The code of the tax rule you want to get guidance for.
     * @returns
     */
    Voucher.prototype.getGuidanceByTaxRule = function (taxRule) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/ReceiptGuidance/forTaxRule", { taxRule: taxRule }, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Provides all possible combinations for revenue accounts to be used with revenue receipts/vouchers.
     * @link https://api.sevdesk.de/#tag/Voucher/operation/forRevenue
     * @returns
     */
    Voucher.prototype.getGuidanceForRevenueAccounts = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request];
                    case 1: return [2 /*return*/, (_a.sent())("/ReceiptGuidance/forRevenue", undefined, { method: "GET" })];
                }
            });
        });
    };
    /**
     * Provides all possible combinations for expense accounts to be used with expense receipts/vouchers.
     * @link https://api.sevdesk.de/#tag/Voucher/operation/forExpense
     * @returns
     */
    Voucher.prototype.getGuidanceForExpenseAccounts = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/ReceiptGuidance/forExpense", undefined, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Voucher;
}());
exports.Voucher = Voucher;
