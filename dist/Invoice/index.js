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
exports.Invoice = void 0;
var common_classes_1 = require("../types/common.classes");
// Code
var Invoice = /** @class */ (function () {
    function Invoice(apiKey) {
        this.apiKey = apiKey;
    }
    Invoice.prototype.getMany = function (status, invoiceNumber, startDate, endDate, contactId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryObj = {};
                        if (status)
                            queryObj["status"] = status.toString();
                        if (invoiceNumber)
                            queryObj["invoiceNumber"] = invoiceNumber;
                        if (startDate)
                            queryObj["startDate"] = new Date(startDate).toISOString();
                        if (endDate)
                            queryObj["endDate"] = new Date(endDate).toISOString();
                        if (contactId) {
                            queryObj["contact[id]"] = contactId.toString();
                            queryObj["contact[objectName]"] = "Contact";
                        }
                        return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Invoice", queryObj, {
                                method: "GET",
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Invoice.prototype.createOne = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Invoice/Factory/saveInvoice", undefined, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(body),
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Invoice.prototype.getOne = function (invoiceId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Invoice/".concat(invoiceId), undefined, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Invoice.prototype.getOnesPositions = function (invoiceId, limit, offset, embed) {
        return __awaiter(this, void 0, void 0, function () {
            var queryObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryObj = {};
                        if (limit)
                            queryObj["limit"] = limit.toString();
                        if (offset)
                            queryObj["offset"] = offset.toString();
                        if (embed)
                            queryObj["embed"] = embed.join(",");
                        return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Invoice/".concat(invoiceId, "/getPositions"), queryObj, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Invoice.prototype.createOneFromOrder = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Invoice/Factory/createInvoiceFromOrder", undefined, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(body),
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Invoice.prototype.createReminder = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Invoice/Factory/createInvoiceReminder", undefined, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(body),
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Invoice.prototype.checkIfOneIsPartiallyPaid = function (invoiceId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Invoice/".concat(invoiceId, "/getIsPartiallyPaid"), undefined, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Invoice.prototype.cancelOne = function (invoiceId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Invoice/".concat(invoiceId, "/cancelInvoice"), undefined, { method: "POST" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Invoice.prototype.renderOne = function (invoiceId, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Invoice/".concat(invoiceId, "/render"), undefined, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(body),
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Invoice.prototype.sendOneViaEmail = function (invoiceId, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Invoice/".concat(invoiceId, "/sendViaEmail"), undefined, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(body),
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Invoice.prototype.getOnesPdf = function (invoiceId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Invoice/".concat(invoiceId, "/getPdf"), undefined, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Invoice.prototype.getOnesXML = function (invoiceId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Invoice/".concat(invoiceId, "/getXml"), undefined, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Invoice.prototype.markOneAsSent = function (invoiceId, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Invoice/".concat(invoiceId, "/sendBy"), undefined, {
                            method: "PUT",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(body),
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Invoice.prototype.enshrineOne = function (invoiceId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Invoice/".concat(invoiceId, "/enshrine"), undefined, { method: "PUT" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Invoice.prototype.bookOne = function (invoiceId, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Invoice/".concat(invoiceId, "/bookAmount"), undefined, {
                            method: "PUT",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(body),
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Invoice.prototype.resetOnesStatusToOpen = function (invoiceId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Invoice/".concat(invoiceId, "/resetToOpen"), undefined, { method: "PUT" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Invoice.prototype.resetOnesStatusToDraft = function (invoiceId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Invoice/".concat(invoiceId, "/resetToDraft"), undefined, { method: "PUT" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Invoice;
}());
exports.Invoice = Invoice;
