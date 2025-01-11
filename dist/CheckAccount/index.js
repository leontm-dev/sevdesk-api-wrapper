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
exports.CheckAccount = void 0;
var node_fetch_1 = __importDefault(require("node-fetch"));
// Project-Imports
var index_js_1 = require("../index.js");
// Code
var CheckAccount = /** @class */ (function () {
    function CheckAccount(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * Retrieve all check accounts
     * @returns Array of objects (CheckAccount model)
     */
    CheckAccount.prototype.retrieveCheckAccounts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, (0, node_fetch_1.default)("".concat(index_js_1.apiUrl, "/CheckAccount"), {
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
     * Creates a new banking account for file imports (CSV, MT940).
     * @param body Data to create a file import account
     * @returns CheckAccount model. Showing the properties relevant to file import accounts.
     */
    CheckAccount.prototype.createANewFileImportAccount = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, (0, node_fetch_1.default)("".concat(index_js_1.apiUrl, "/CheckAccount/Factory/fileImportAccount"), {
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
     * Creates a new clearing account.
     * @param body Data to create a clearing account
     * @returns CheckAccount model. Showing the properties relevant to clearing accounts.
     */
    CheckAccount.prototype.createANewClearingAccount = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, (0, node_fetch_1.default)("".concat(index_js_1.apiUrl, "/CheckAccount/Factory/clearingAccount"), {
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
     * Retrieve an existing check account
     * @param checkAccountId ID of check account
     * @returns Array of objects (CheckAccount model)
     */
    CheckAccount.prototype.findCheckAccountByID = function (checkAccountId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, (0, node_fetch_1.default)("".concat(index_js_1.apiUrl, "/CheckAccount/").concat(checkAccountId), {
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
     * Update a check account
     * @param checkAccountId ID of check account to update
     * @param body Update data
     * @returns Returns changed check account resource
     */
    CheckAccount.prototype.updateAnExistingCheckAccount = function (checkAccountId, body) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, (0, node_fetch_1.default)("".concat(index_js_1.apiUrl, "/CheckAccount/").concat(checkAccountId), {
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
     * @param checkAccountId Id of check account to delete
     * @returns Array of any
     */
    CheckAccount.prototype.deleteACheckAccount = function (checkAccountId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, (0, node_fetch_1.default)("".concat(index_js_1.apiUrl, "/CheckAccount/").concat(checkAccountId), {
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
     * Get the balance, calculated as the sum of all transactions sevdesk knows, up to and including the given date. Note that this balance does not have to be the actual bank account balance, e.g. if sevdesk did not import old transactions.
     * @param checkAccountId ID of check account
     * @param date Only consider transactions up to this date at 23:59:59
     */
    CheckAccount.prototype.getTheBalanceAtAGivenDate = function (checkAccountId, date) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, (0, node_fetch_1.default)("".concat(index_js_1.apiUrl, "/CheckAccount/").concat(checkAccountId, "/getBalanceAtDate?=date=").concat(date), { method: "GET", headers: { Authorization: this.apiKey } })];
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
    return CheckAccount;
}());
exports.CheckAccount = CheckAccount;
