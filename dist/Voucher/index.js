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
var Voucher = /** @class */ (function () {
    function Voucher(apiKey) {
        this.apiKey = apiKey;
    }
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
    Voucher.prototype.getGuidanceForRevenueAccounts = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/ReceiptGuidance/forRevenue", undefined, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
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
