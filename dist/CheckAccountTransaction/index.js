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
exports.CheckAccountTransaction = void 0;
var node_fetch_1 = __importDefault(require("node-fetch"));
var index_js_1 = require("../index.js");
// Code
var CheckAccountTransaction = /** @class */ (function () {
    function CheckAccountTransaction(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * Retrieve all transactions depending on the filters defined in the query.
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
    CheckAccountTransaction.prototype.retrieveTransactions = function (checkAccountId, isBooked, paymtPurpose, startDate, endDate, payeePayerName, onlyCredit, onlyDebit) {
        return __awaiter(this, void 0, void 0, function () {
            var query, response, data;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        query = [];
                        if (checkAccountId)
                            query.push("checkAccount[id]=".concat(checkAccountId, "&=checkAccount[objectName]=CheckAccount"));
                        if (isBooked)
                            query.push("isBooked=".concat(isBooked));
                        if (paymtPurpose)
                            query.push("paymtPurpose=".concat(paymtPurpose));
                        if (startDate)
                            query.push("startDate=".concat(startDate));
                        if (endDate)
                            query.push("endDate=".concat(endDate));
                        if (payeePayerName)
                            query.push("payeePayerName=".concat(payeePayerName));
                        if (onlyCredit)
                            query.push("onlyCredit=".concat(onlyCredit));
                        if (onlyDebit)
                            query.push("onlyDebit=".concat(onlyDebit));
                        return [4 /*yield*/, (0, node_fetch_1.default)("".concat(index_js_1.apiUrl, "/CheckAccountTransaction?").concat(query.join("&")), {
                                method: "GET",
                                headers: {
                                    Authorization: this.apiKey,
                                },
                            })];
                    case 1:
                        response = _c.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _c.sent();
                        _a = {
                            status: response.status
                        };
                        _b = {};
                        return [4 /*yield*/, response.text()];
                    case 3: return [2 /*return*/, (_a.response = (_b.body = _c.sent(),
                            _b.bodyUsed = response.bodyUsed,
                            _b.data = data ? data : null,
                            _b.headers = response.headers,
                            _b.ok = response.ok,
                            _b.redirected = response.redirected,
                            _b.status = response.status,
                            _b.statusText = response.statusText,
                            _b.type = response.type,
                            _b.url = response.url,
                            _b.size = response.size,
                            _b),
                            _a)];
                }
            });
        });
    };
    /**
     * Creates a new transaction on a check account.
     * @param body Creation data. Please be aware, that you need to provide at least all required parameter of the CheckAccountTransaction model!
     */
    CheckAccountTransaction.prototype.createANewTransaction = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, (0, node_fetch_1.default)("".concat(index_js_1.apiUrl, "/CheckAccountTransaction"), {
                            method: "POST",
                            headers: {
                                Authorization: this.apiKey,
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(body),
                        })];
                    case 1:
                        response = _c.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _c.sent();
                        _a = {
                            status: response.status
                        };
                        _b = {};
                        return [4 /*yield*/, response.text()];
                    case 3: return [2 /*return*/, (_a.response = (_b.body = _c.sent(),
                            _b.bodyUsed = response.bodyUsed,
                            _b.data = data ? data : null,
                            _b.headers = response.headers,
                            _b.ok = response.ok,
                            _b.redirected = response.redirected,
                            _b.status = response.status,
                            _b.statusText = response.statusText,
                            _b.type = response.type,
                            _b.url = response.url,
                            _b.size = response.size,
                            _b),
                            _a)];
                }
            });
        });
    };
    /**
     * Retrieve an existing check account transaction
     * @param checkAccountTransactionId ID of check account transaction
     * @returns Array of objects (CheckAccountTransaction model)
     */
    CheckAccountTransaction.prototype.findCheckAccountTransactionByID = function (checkAccountTransactionId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, (0, node_fetch_1.default)("".concat(index_js_1.apiUrl, "/CheckAccountTransaction/").concat(checkAccountTransactionId), {
                            method: "GET",
                            headers: {
                                Authorization: this.apiKey,
                            },
                        })];
                    case 1:
                        response = _c.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _c.sent();
                        _a = {
                            status: response.status
                        };
                        _b = {};
                        return [4 /*yield*/, response.text()];
                    case 3: return [2 /*return*/, (_a.response = (_b.body = _c.sent(),
                            _b.bodyUsed = response.bodyUsed,
                            _b.data = data ? data : null,
                            _b.headers = response.headers,
                            _b.ok = response.ok,
                            _b.redirected = response.redirected,
                            _b.status = response.status,
                            _b.statusText = response.statusText,
                            _b.type = response.type,
                            _b.url = response.url,
                            _b.size = response.size,
                            _b),
                            _a)];
                }
            });
        });
    };
    /**
     * Update a check account transaction
     * @param checkAccountTransactionId ID of check account to update transaction
     * @param body Update data
     * @returns Return changed check account resource
     */
    CheckAccountTransaction.prototype.updateAnExistingCheckAccountTransaction = function (checkAccountTransactionId, body) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, (0, node_fetch_1.default)("".concat(index_js_1.apiUrl, "/CheckAccountTransaction/").concat(checkAccountTransactionId), {
                            method: "PUT",
                            headers: {
                                Authorization: this.apiKey,
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(body),
                        })];
                    case 1:
                        response = _c.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _c.sent();
                        _a = {
                            status: response.status
                        };
                        _b = {};
                        return [4 /*yield*/, response.text()];
                    case 3: return [2 /*return*/, (_a.response = (_b.body = _c.sent(),
                            _b.bodyUsed = response.bodyUsed,
                            _b.data = data ? data : null,
                            _b.headers = response.headers,
                            _b.ok = response.ok,
                            _b.redirected = response.redirected,
                            _b.status = response.status,
                            _b.statusText = response.statusText,
                            _b.type = response.type,
                            _b.url = response.url,
                            _b.size = response.size,
                            _b),
                            _a)];
                }
            });
        });
    };
    /**
     *
     * @param checkAccountTransactionId Id of check account transaction to delete
     * @returns check account transaction deleted
     */
    CheckAccountTransaction.prototype.deletesACheckAccountTransaction = function (checkAccountTransactionId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, (0, node_fetch_1.default)("".concat(index_js_1.apiUrl, "/CheckAccountTransaction/").concat(checkAccountTransactionId), {
                            method: "DELETE",
                            headers: {
                                Authorization: this.apiKey,
                            },
                        })];
                    case 1:
                        response = _c.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _c.sent();
                        _a = {
                            status: response.status
                        };
                        _b = {};
                        return [4 /*yield*/, response.text()];
                    case 3: return [2 /*return*/, (_a.response = (_b.body = _c.sent(),
                            _b.bodyUsed = response.bodyUsed,
                            _b.data = data ? data : null,
                            _b.headers = response.headers,
                            _b.ok = response.ok,
                            _b.redirected = response.redirected,
                            _b.status = response.status,
                            _b.statusText = response.statusText,
                            _b.type = response.type,
                            _b.url = response.url,
                            _b.size = response.size,
                            _b),
                            _a)];
                }
            });
        });
    };
    /**
     * Sets the current date and time as a value for the property enshrined.
  This operation is only possible if the status is "Linked" ("status": "200") or higher.
  
  Linked invoices, credit notes or vouchers cannot be changed when the transaction is enshrined.
     * @param checkAccountTransactionId
     * @returns ID of the transaction to enshrine
     */
    CheckAccountTransaction.prototype.enshrine = function (checkAccountTransactionId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, (0, node_fetch_1.default)("".concat(index_js_1.apiUrl, "/CheckAccountTransaction/").concat(checkAccountTransactionId, "/enshrine"), {
                            method: "POST",
                            headers: {
                                Authorization: this.apiKey,
                            },
                        })];
                    case 1:
                        response = _c.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _c.sent();
                        _a = {
                            status: response.status
                        };
                        _b = {};
                        return [4 /*yield*/, response.text()];
                    case 3: return [2 /*return*/, (_a.response = (_b.body = _c.sent(),
                            _b.bodyUsed = response.bodyUsed,
                            _b.data = data ? data : null,
                            _b.headers = response.headers,
                            _b.ok = response.ok,
                            _b.redirected = response.redirected,
                            _b.status = response.status,
                            _b.statusText = response.statusText,
                            _b.type = response.type,
                            _b.url = response.url,
                            _b.size = response.size,
                            _b),
                            _a)];
                }
            });
        });
    };
    return CheckAccountTransaction;
}());
exports.CheckAccountTransaction = CheckAccountTransaction;
