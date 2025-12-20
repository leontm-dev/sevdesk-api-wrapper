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
exports.Order = void 0;
var common_classes_1 = require("../types/common.classes");
// Code
var Order = /** @class */ (function () {
    function Order(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * There are a multitude of parameter which can be used to filter. A few of them are attached but for a complete list please check out this list
     * @link https://api.sevdesk.de/#tag/Order/operation/getOrders
     * @param status Status of the order
     * @param orderNumber Retrieve all orders with this order number
     * @param startDate Retrieve all orders with a date equal or higher
     * @param endDate Retrieve all orders with a date equal or lower
     * @param contactId Retrieve all orders with this contact. Must be provided with contact[objectName]
     * @returns
     */
    Order.prototype.getMany = function (status, orderNumber, startDate, endDate, contactId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryObj = {};
                        if (status)
                            queryObj["status"] = status.toString();
                        if (orderNumber)
                            queryObj["orderNumber"] = orderNumber;
                        if (startDate)
                            queryObj["startDate"] = new Date(startDate).toISOString();
                        if (endDate)
                            queryObj["endDate"] = new Date(endDate).toISOString();
                        if (contactId) {
                            queryObj["contact[id]"] = contactId.toString();
                            queryObj["contact[objectName]"] = "Contact";
                        }
                        return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Order", queryObj, {
                                method: "GET",
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Creates an order to which positions can be added later.
     * @link https://api.sevdesk.de/#tag/Order/operation/createOrder
     * @param body Creation data. Please be aware, that you need to provide at least all required parameter of the order model!
     * @returns created voucher
     */
    Order.prototype.createOne = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Order/Factory/saveOrder", undefined, {
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
     * Returns a single order
     * @link https://api.sevdesk.de/#tag/Order/operation/getOrderById
     * @param orderId ID of order to return
     * @returns
     */
    Order.prototype.getOne = function (orderId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Order/".concat(orderId), undefined, {
                            method: "GET",
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Update an order
     * @link https://api.sevdesk.de/#tag/Order/operation/updateOrder
     * @param orderId ID of order to update
     * @param body Update data
     * @returns changed order resource
     */
    Order.prototype.updateOne = function (orderId, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Order/".concat(orderId), undefined, {
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
     * @link https://api.sevdesk.de/#tag/Order/operation/deleteOrder
     * @param orderId Id of order resource to delete
     * @returns
     */
    Order.prototype.deleteOne = function (orderId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Order/".concat(orderId), undefined, {
                            method: "DELETE",
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns all positions of an order
     * @link https://api.sevdesk.de/#tag/Order/operation/getOrderPositionsById
     * @param orderId ID of order to return the positions
     * @param limit limits the number of entries returned
     * @param offset set the index where the returned entries start
     * @param embed Get some additional information. Embed can handle multiple values, they must be separated by comma.
     * @returns
     */
    Order.prototype.getOnesPositions = function (orderId, limit, offset, embed) {
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
                        return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Order/".concat(orderId, "/getPositions"), queryObj, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns all discounts of an order
     * @link https://api.sevdesk.de/#tag/Order/operation/getDiscounts
     * @param orderId ID of order to return the positions
     * @param limit limits the number of entries returned
     * @param offset set the index where the returned entries start
     * @param embed Get some additional information. Embed can handle multiple values, they must be separated by comma.
     * @returns
     */
    Order.prototype.getOnesDiscounts = function (orderId, limit, offset, embed) {
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
                        return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Order/".concat(orderId, "/getDiscounts"), queryObj, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get related objects of a specified order
     * @link https://api.sevdesk.de/#tag/Order/operation/getRelatedObjects
     * @param orderId ID of order to return the positions
     * @param limit limits the number of entries returned
     * @param offset set the index where the returned entries start
     * @param embed Get some additional information. Embed can handle multiple values, they must be separated by comma.
     * @returns
     */
    Order.prototype.getOnesRelatedObjects = function (orderId, limit, offset, embed) {
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
                        return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Order/".concat(orderId, "/getRelatedObjects"), queryObj, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This endpoint sends the specified order to a customer via email.
  This will automatically mark the order as sent.
  Please note, that in production an order is not allowed to be changed after this happened!
     * @link https://api.sevdesk.de/#tag/Order/operation/sendorderViaEMail
     * @param orderId ID of order to be sent via email
     * @param body Mail data
     * @returns
     */
    Order.prototype.sendOneViaEmail = function (orderId, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Order/".concat(orderId, "/sendViaEmail"), undefined, {
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
     * Create packing list from order
     * @link https://api.sevdesk.de/#tag/Order/operation/createPackingListFromOrder
     * @param orderId the id of the order
     * @param body Create packing list
     * @returns
     */
    Order.prototype.createPackagingListFromOrder = function (orderId, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Order/Factory/createPackagingList", { "order[id]": orderId.toString(), "order[objectName]": "Order" }, {
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
     * Create contract note from order
     * @link https://api.sevdesk.de/#tag/Order/operation/createContractNoteFromOrder
     * @param orderId the id of the order
     * @param body Create contract note
     * @returns
     */
    Order.prototype.createContractNoteFromOrder = function (orderId, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Order/Factory/createContractNoteFromOrder", { "order[id]": orderId.toString(), "order[objectName]": "Order" }, {
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
     * Retrieves the pdf document of an order with additional metadata and commit the order.
     * @link https://api.sevdesk.de/#tag/Order/operation/orderGetPdf
     * @param orderId ID of order from which you want the pdf
     * @param download If u want to download the pdf of the order.
     * @param preventSendBy Defines if u want to send the order.
     * @returns A pdf file
     */
    Order.prototype.getOnesPdf = function (orderId, download, preventSendBy) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Order/".concat(orderId, "/getPdf"), {
                            downlaod: String(download),
                            preventSendBy: String(preventSendBy),
                        }, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Marks an order as sent by a chosen send type.
     * @link https://api.sevdesk.de/#tag/Order/operation/orderSendBy
     * @param orderId ID of order to mark as sent
     * @param body Specify the send type
     * @returns changed order log entry
     */
    Order.prototype.markOneAsSent = function (orderId, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Order/".concat(orderId, "/sendBy"), undefined, {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json",
                                body: JSON.stringify(body),
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Order;
}());
exports.Order = Order;
