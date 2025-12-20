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
    /**
     * There are a multitude of parameter which can be used to filter. A few of them are attached but for a complete list please check out this list
     * @link https://api.sevdesk.de/#tag/Invoice/operation/getInvoices
     * @param status Status of the invoices
     * @param invoiceNumber Retrieve all invoices with this invoice number
     * @param startDate Retrieve all invoices with a date equal or higher
     * @param endDate Retrieve all invoices with a date equal or lower
     * @param contactId Retrieve all invoices with this contact. Must be provided with contact[objectName]
     * @returns
     */
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
    /**
     * This endpoint offers you the following functionality.
  
  Create invoices together with positions and discounts
  Delete positions while adding new ones
  Delete or add discounts, or both at the same time
  Automatically fill the address of the supplied contact into the invoice address
  To make your own request sample slimmer, you can omit all parameters which are not required and nullable. However, for a valid and logical bookkeeping document, you will also need some of them to ensure that all the necessary data is in the invoice.
  
  The list of parameters starts with the invoice array.
  This array contains all required attributes for a complete invoice.
  Most of the attributes are covered in the invoice attribute list, there are only two parameters standing out, namely mapAll and objectName.
  These are just needed for our system and you always need to provide them.
  
  The list of parameters then continues with the invoice position array.
  With this array you have the possibility to add multiple positions at once.
  In the example it only contains one position, again together with the parameters mapAll and objectName, however, you can add more invoice positions by extending the array.
  So if you wanted to add another position, you would add the same list of parameters with an incremented array index of "1" instead of "0".
  
  The list ends with the four parameters invoicePosDelete, discountSave, discountDelete and takeDefaultAddress.
  They only play a minor role if you only want to create an invoice but we will shortly explain what they can do.
  With invoicePosDelete you have to option to delete invoice positions as this request can also be used to update invoices.
  With discountSave you can add discounts to your invoice.
  With discountDelete you can delete discounts from your invoice.
  With takeDefaultAddress you can specify that the first address of the contact you are using for the invoice is taken for the invoice address attribute automatically, so you don't need to provide the address yourself.
  If you want to know more about these parameters, for example if you want to use this request to update invoices, feel free to contact our support.
  
  Finally, after covering all parameters, they only important information left, is that the order of the last four attributes always needs to be kept.
  You will also always need to provide all of them, as otherwise the request won't work properly.
  
  Warning: You can not create a regular invoice with the deliveryDate being later than the invoiceDate.
  To do that you will need to create a so called Abschlagsrechnung by setting the invoiceType parameter to AR.
     * @link https://api.sevdesk.de/#tag/Invoice/operation/createInvoiceByFactory
     * @param body Creation data. Please be aware, that you need to provide at least all required parameter of the invoice model!
     * @returns created invoice
     */
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
    /**
     * Returns a single invoice
     * @link https://api.sevdesk.de/#tag/Invoice/operation/getInvoiceById
     * @param invoiceId ID of invoice to return
     * @returns
     */
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
    /**
     * Returns all positions of an invoice
     * @link https://api.sevdesk.de/#tag/Invoice/operation/getInvoicePositionsById
     * @param invoiceId ID of invoice to return the positions
     * @param limit limits the number of entries returned
     * @param offset set the index where the returned entries start
     * @param embed Get some additional information. Embed can handle multiple values, they must be separated by comma.
     * @returns
     */
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
    /**
     * Create an invoice from an order
     * @link https://api.sevdesk.de/#tag/Invoice/operation/createInvoiceFromOrder
     * @param body Create invoice
     * @returns
     */
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
    /**
     * Create an reminder from an invoice
     * @link https://api.sevdesk.de/#tag/Invoice/operation/createInvoiceReminder
     * @param invoiceId the id of the invoice
     * @param body Create invoice
     * @returns
     */
    Invoice.prototype.createReminderForOne = function (invoiceId, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Invoice/Factory/createInvoiceReminder", { "invoice[id]": invoiceId.toString(), "invoice[objectName]": "Invoice" }, {
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
     * Returns 'true' if the given invoice is partially paid - 'false' if it is not. Invoices which are completely paid are regarded as not partially paid.
     * @link https://api.sevdesk.de/#tag/Invoice/operation/getIsInvoicePartiallyPaid
     * @param invoiceId ID of invoice to return
     * @returns
     */
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
    /**
     * This endpoint will cancel the specified invoice therefor creating a cancellation invoice.
  The cancellation invoice will be automatically paid and the source invoices status will change to 'cancelled'.
     * @link https://api.sevdesk.de/#tag/Invoice/operation/cancelInvoice
     * @param invoiceId ID of invoice to be cancelled
     * @returns cancellation invoice
     */
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
    /**
     * Using this endpoint you can render the pdf document of an invoice.
  Use cases for this are the retrieval of the pdf location or the forceful re-render of a already sent invoice.
  Please be aware that changing an invoice after it has been sent to a customer is not an allowed bookkeeping process.
     * @link https://api.sevdesk.de/#tag/Invoice/operation/invoiceRender
     * @param invoiceId ID of invoice to render
     * @param body Define if the document should be forcefully re-rendered.
     * @returns meta-data about pdf
     */
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
    /**
     * This endpoint sends the specified invoice to a customer via email.
  This will automatically mark the invoice as sent.
  Please note, that in production an invoice is not allowed to be changed after this happened!
     * @link https://api.sevdesk.de/#tag/Invoice/operation/sendInvoiceViaEMail
     * @param invoiceId ID of invoice to be sent via email
     * @param body Mail data
     * @returns created mail object
     */
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
    /**
     * Retrieves the pdf document of an invoice with additional metadata.
     * @link https://api.sevdesk.de/#tag/Invoice/operation/invoiceGetPdf
     * @param invoiceId ID of invoice from which you want the pdf
     * @param download If u want to download the pdf of the invoice.
     * @param preventSendBy Defines if u want to send the invoice.
     * @returns
     */
    Invoice.prototype.getOnesPdf = function (invoiceId, download, preventSendBy) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Invoice/".concat(invoiceId, "/getPdf"), {
                            download: String(download),
                            preventSendBy: String(preventSendBy),
                        }, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Retrieves the XML of an e-invoice
     * @link https://api.sevdesk.de/#tag/Invoice/operation/invoiceGetXml
     * @param invoiceId ID of invoice from which you want the XML
     * @returns A xml file
     */
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
    /**
     * Marks an invoice as sent by a chosen send type.
     * @link https://api.sevdesk.de/#tag/Invoice/operation/invoiceSendBy
     * @param invoiceId ID of invoice to mark as sent
     * @param body Specify the send type
     * @returns
     */
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
    /**
     * Sets the current date and time as a value for the property enshrined.
  This operation is only possible if the status is "Open" ("status": "200") or higher.
  
  Enshrined invoices cannot be changed. This operation cannot be undone.
     * @link https://api.sevdesk.de/#tag/Invoice/operation/invoiceEnshrine
     * @param invoiceId ID of the invoice to enshrine
     * @returns
     */
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
    /**
     * Booking the invoice with a transaction is probably the most important part in the bookkeeping process.
  There are several ways on correctly booking an invoice, all by using the same endpoint.
  for more information look here.
     * @link https://api.sevdesk.de/#tag/Invoice/operation/bookInvoice
     * @param invoiceId ID of invoice to book
     * @param body Booking data
     * @returns changed invoice log entry
     */
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
    /**
     * Resets the status "Open" ("status": "200"). Linked transactions will be unlinked.
  This is not possible if the invoice itself or one of its transactions (CheckAccountTransaction) is already enshrined.
  
  This endpoint cannot be used to increase the status to "Open" ("status": "200").
  Use Invoice/{invoiceId}/sendBy / Invoice/{invoiceId}/sendViaEmail instead.
  
  This endpoint cannot be used for recurring invoices ("invoiceType": "WKR"). Use Invoice/Factory/saveInvoice instead.
     * @link https://api.sevdesk.de/#tag/Invoice/operation/invoiceResetToOpen
     * @param invoiceId ID of the invoice to reset
     * @returns changed invoice
     */
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
    /**
     * Resets the status to "Draft" ("status": "100").
  This is only possible if the invoice has the status "Open" ("status": "200").
  If it has a higher status use Invoice/{invoiceId}/resetToOpen first.
  
  This endpoint cannot be used for recurring invoices ("invoiceType": "WKR").
  Use Invoice/Factory/saveInvoice instead.
     * @link https://api.sevdesk.de/#tag/Invoice/operation/invoiceResetToDraft
     * @param invoiceId ID of the invoice to reset
     * @returns changed invoice
     */
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
