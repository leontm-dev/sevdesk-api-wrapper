"use strict";
// Project-Imports
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiUrl = void 0;
var index_js_1 = require("./AccountingContact/index.js");
var index_js_2 = require("./Basics/index.js");
var index_js_3 = require("./CheckAccount/index.js");
var index_js_4 = require("./CheckAccountTransaction/index.js");
var index_js_5 = require("./CommunicationWay/index.js");
var index_js_6 = require("./Contact/index.js");
var index_js_7 = require("./ContactAddress/index.js");
var index_js_8 = require("./ContactField/index.js");
var index_js_9 = require("./CreditNote/index.js");
var index_js_10 = require("./CreditNotePos/index.js");
var index_js_11 = require("./Export/index.js");
var index_js_12 = require("./Invoice/index.js");
var index_js_13 = require("./InvoicePos/index.js");
var index_js_14 = require("./Layout/index.js");
var index_js_15 = require("./Order/index.js");
var index_js_16 = require("./OrderPos/index.js");
var index_js_17 = require("./Part/index.js");
var index_js_18 = require("./Report/index.js");
var index_js_19 = require("./Tag/index.js");
var index_js_20 = require("./Voucher/index.js");
var index_js_21 = require("./VoucherPos/index.js");
// Code
exports.apiUrl = "https://my.sevdesk.de/api/v1";
var SevdeskAPIWrapper = /** @class */ (function () {
    function SevdeskAPIWrapper(apiKey) {
        this.apiKey = apiKey;
        this.apiUrl = exports.apiUrl;
        this.AccountingContact = new index_js_1.AccountingContact(this.apiKey);
        this.Basics = new index_js_2.Basics(this.apiKey);
        this.CheckAccount = new index_js_3.CheckAccount(this.apiKey);
        this.CheckAccountTransaction = new index_js_4.CheckAccountTransaction(this.apiKey);
        this.CommunicationWay = new index_js_5.CommunicationWay(this.apiKey);
        this.Contact = new index_js_6.Contact(this.apiKey);
        this.ContactAddress = new index_js_7.ContactAddress(this.apiKey);
        this.ContactField = new index_js_8.ContactField(this.apiKey);
        this.CreditNote = new index_js_9.CreditNote(this.apiKey);
        this.CreditNotePos = new index_js_10.CreditNotePos(this.apiKey);
        this.Export = new index_js_11.Export(this.apiKey);
        this.Invoice = new index_js_12.Invoice(this.apiKey);
        this.InvoicePos = new index_js_13.InvoicePos(this.apiKey);
        this.Layout = new index_js_14.Layout(this.apiKey);
        this.Order = new index_js_15.Order(this.apiKey);
        this.OrderPos = new index_js_16.OrderPos(this.apiKey);
        this.Part = new index_js_17.Part(this.apiKey);
        this.Report = new index_js_18.Report(this.apiKey);
        this.Tag = new index_js_19.Tag(this.apiKey);
        this.Voucher = new index_js_20.Voucher(this.apiKey);
        this.VoucherPos = new index_js_21.VoucherPos(this.apiKey);
    }
    return SevdeskAPIWrapper;
}());
exports.default = SevdeskAPIWrapper;
