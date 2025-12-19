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
exports.CheckAccountTransaction = void 0;
var common_classes_js_1 = require("../types/common.classes.js");
// Code
/**
 * A check account transaction is a payment on a check account from or to the customer.
They are essential for booking invoices, vouchers (receipts) and credit notes with them to mark them as paid.
For a correct bookkeeping, there is always one or multiple transactions linked to an invoice, a voucher or a credit note, until the relevant object is completely paid.
  * @link https://api.sevdesk.de/#tag/CheckAccountTransaction
 */
var CheckAccountTransaction = /** @class */ (function () {
    function CheckAccountTransaction(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * Retrieve all transactions depending on the filters defined in the query.
     * @link https://api.sevdesk.de/#tag/CheckAccountTransaction/operation/getTransactions
     * @param checkAccountId Retrieve all transactions on this check account. Must be provided with checkAccount[objectName]
     * @param isBooked Only retrieve booked transactions
     * @param paymtPurpose Only retrieve transactions with this payment purpose
     * @param startDate Only retrieve transactions from this date on
     * @param endDate Only retrieve transactions up to this date
     * @param payeePayerName Only retrieve transactions with this payee / payer
     * @param onlyCredit Only retrieve credit transactions
     * @param onlyDebit Only retrieve debit transactions
     * @returns Array of objects (CheckAccountTransaction model)
     */
    CheckAccountTransaction.prototype.getMany = function (checkAccountId, isBooked, paymtPurpose, startDate, endDate, payeePayerName, onlyCredit, onlyDebit) {
        return __awaiter(this, void 0, void 0, function () {
            var queryObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryObj = {};
                        if (checkAccountId) {
                            queryObj["checkAccount[id]"] = checkAccountId.toString();
                            queryObj["checkAccount[objectName]"] = "CheckAccount";
                        }
                        if (isBooked)
                            queryObj["isBooked"] = String(isBooked);
                        if (paymtPurpose)
                            queryObj["paymtPurpose"] = paymtPurpose;
                        if (startDate)
                            queryObj["startDate"] = new Date(startDate).toISOString();
                        if (endDate)
                            queryObj["endDate"] = new Date(endDate).toISOString();
                        if (payeePayerName)
                            queryObj["payeePayerName"] = payeePayerName;
                        if (onlyCredit)
                            queryObj["onlyCredit"] = String(onlyCredit);
                        if (onlyDebit)
                            queryObj["onlyDebit"] = String(onlyDebit);
                        return [4 /*yield*/, new common_classes_js_1.API(this.apiKey).request("/CheckAccountTransaction", queryObj, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Creates a new transaction on a check account.
     * @link https://api.sevdesk.de/#tag/CheckAccountTransaction/operation/createTransaction
     * @param body Creation data. Please be aware, that you need to provide at least all required parameter of the CheckAccountTransaction model!
     */
    CheckAccountTransaction.prototype.createOne = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_js_1.API(this.apiKey).request("/CheckAccountTransaction", undefined, {
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
     * Retrieve an existing check account transaction
     * @link https://api.sevdesk.de/#tag/CheckAccountTransaction/operation/getCheckAccountTransactionById
     * @param checkAccountTransactionId ID of check account transaction
     * @returns Array of objects (CheckAccountTransaction model)
     */
    CheckAccountTransaction.prototype.getOne = function (checkAccountTransactionId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_js_1.API(this.apiKey).request("/CheckAccountTransaction/".concat(checkAccountTransactionId), undefined, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Update a check account transaction
     * @link https://api.sevdesk.de/#tag/CheckAccountTransaction/operation/updateCheckAccountTransaction
     * @param checkAccountTransactionId ID of check account to update transaction
     * @param body Update data
     * @returns Return changed check account resource
     */
    CheckAccountTransaction.prototype.updateOne = function (checkAccountTransactionId, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_js_1.API(this.apiKey).request("/CheckAccountTransaction/".concat(checkAccountTransactionId), undefined, {
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
     * @link https://api.sevdesk.de/#tag/CheckAccountTransaction/operation/deleteCheckAccountTransaction
     * @param checkAccountTransactionId Id of check account transaction to delete
     * @returns check account transaction deleted
     */
    CheckAccountTransaction.prototype.deleteOne = function (checkAccountTransactionId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_js_1.API(this.apiKey).request("/CheckAccountTransaction/".concat(checkAccountTransactionId), undefined, { method: "DELETE" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Sets the current date and time as a value for the property enshrined.
  This operation is only possible if the status is "Linked" ("status": "200") or higher.
  
  Linked invoices, credit notes or vouchers cannot be changed when the transaction is enshrined.
    * @link https://api.sevdesk.de/#tag/CheckAccountTransaction/operation/checkAccountTransactionEnshrine
     * @param checkAccountTransactionId ID of the transaction to enshrine
     * @returns ID of the transaction to enshrine
     */
    CheckAccountTransaction.prototype.enshrineOne = function (checkAccountTransactionId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_js_1.API(this.apiKey).request("/CheckAccountTransaction/".concat(checkAccountTransactionId, "/enshrine"), undefined, { method: "PUT" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return CheckAccountTransaction;
}());
exports.CheckAccountTransaction = CheckAccountTransaction;
