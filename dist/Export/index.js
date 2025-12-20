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
exports.Export = void 0;
var common_classes_1 = require("../types/common.classes");
// Code
/**
 * A set of operations to export data.
 * @link https://api.sevdesk.de/#tag/Export
 */
var Export = /** @class */ (function () {
    function Export(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * Update export config to export DATEV
     * @link https://api.sevdesk.de/#tag/Export/operation/updateExportConfig
     * @param sevClientId id of sevClient
     * @param body Specify the update
     * @returns
     */
    Export.prototype.updateExportConfig = function (sevClientId, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/SevClient/".concat(sevClientId, "/updateExportConfig"), undefined, {
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
     * Start an export that generates booking data in the DATEV format (CSV) Before you can perform the DATEV export, you first have to set the "accountingYearBegin". To do this, use the endpoint updateExportConfig. After that you can use the createDatevCsvZipExportJob endpoint to start the DATEV export which returns the export ID. You have to use the jobDownloadInfo endpoint to receive the download url when the export is ready.
  
  Export workflow
  To get the DATEV CSV zip file, please implement the following workflow.
  1. Set the accountingYearBegin (if not already set) via updateExportConfig
  2. Start the export by using the createDatevCsvZipExportJob endpoint
  3. Request a progressHash with endpoint generateDownloadHash (optional)
  4. Use the progressHash to receive export progress information with endpoint getProgress (optional)
  5. Use the jobDownloadInfo endpoint to get the download url to the zip file.
     * @link https://api.sevdesk.de/#tag/Export/operation/exportDatevCSV
     * @param startDate The start date of the export as timestamp
     * @param endDate The end date of the export as timestamp
     * @param scope Define what you want to include in the DATEV export. This parameter takes a string of 5 letters. Each stands for a model that should be included. Possible letters are: ‘E’ (Earnings), ‘X’ (Expenditure), ‘T’ (Transactions), ‘C’ (Cashregister), ‘D’ (Assets). By providing one of those letter you specify that it should be included in the DATEV export. Some combinations are: ‘EXTCD’, ‘EXTD’ …
     * @param exportByPaydate When this parameter is true, the export contains only paid documents where pay date is in the time range of startDate and endDate
     * @param includeEnshrined If set to false, the export excludes enshrined documents
     * @param enshrineDocuments Specify if you want to enshrine all models which were included in the export
     * @param incluceDocumentImages Specify if you want to include the document images in the export
     * @returns the ID of the export job
     */
    Export.prototype.startDatevCsvZipExport = function (startDate, endDate, scope, exportByPaydate, includeEnshrined, enshrineDocuments, incluceDocumentImages) {
        return __awaiter(this, void 0, void 0, function () {
            var queryObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryObj = {
                            startDate: new Date(startDate).toISOString(),
                            endDate: new Date(endDate).toISOString(),
                            score: scope,
                        };
                        if (exportByPaydate)
                            queryObj["exportByPayDate"] = String(exportByPaydate);
                        if (incluceDocumentImages)
                            queryObj["includeDocumentImages"] = String(incluceDocumentImages);
                        if (enshrineDocuments)
                            queryObj["enshrineDocuments"] = String(enshrineDocuments);
                        if (includeEnshrined)
                            queryObj["includeEnshrined"] = String(includeEnshrined);
                        return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Export/createDatevCsvZipExportJob", queryObj, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Start an export that generates invoice data in the DATEV format (XML) Before you can perform the DATEV export, you first have to set the "accountingYearBegin". To do this, use the endpoint updateExportConfig. After that you can use the createDatevXmlZipExportJob endpoint to start the DATEV export which returns the export ID. You have to use the jobDownloadInfo endpoint to receive the download url when the export is ready.
  
  Export workflow
  To get the DATEV XML zip file, please implement the following workflow.
  1. Set the accountingYearBegin (if not already set) via updateExportConfig
  2. Start the export by using the createDatevXmlZipExportJob endpoint
  3. Request a progressHash with endpoint generateDownloadHash (optional)
  4. Use the progressHash to receive export progress information with endpoint getProgress (optional)
  5. Use the jobDownloadInfo endpoint to get the download url to the zip file.
     * @link https://api.sevdesk.de/#tag/Export/operation/exportDatevXML
     * @param startDate The start date of the export as ISO timestamp
     * @param endDate The end date of the export as ISO timestamp
     * @param scope Define what you want to include in the DATEV export. This parameter takes a string of letters. Each letter stands for a document type that should be included. Possible letters are: ‘E’ (Receipts, outgoing invoices & credit notes) and ‘X’ (Expenditure documents).
     * @param exportByPaydate When this parameter is true, the export contains only paid documents where pay date is in the time range of startDate and endDate
     * @param includeEnshrined If set to false, the export excludes enshrined documents
     * @param enshrineDocuments If set to false, the export excludes already exported documents
     * @param incluceDocumentImages If set to false, the export excludes XML files containing the data for each document
     * @returns the ID of export job.
     */
    Export.prototype.startDatevXmlZipExport = function (startDate, endDate, scope, exportByPaydate, includeEnshrined, enshrineDocuments, incluceDocumentImages) {
        return __awaiter(this, void 0, void 0, function () {
            var queryObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryObj = {
                            startDate: new Date(startDate).toISOString(),
                            endDate: new Date(endDate).toISOString(),
                            score: scope,
                        };
                        if (exportByPaydate)
                            queryObj["exportByPayDate"] = String(exportByPaydate);
                        if (incluceDocumentImages)
                            queryObj["includeDocumentImages"] = String(incluceDocumentImages);
                        if (enshrineDocuments)
                            queryObj["enshrineDocuments"] = String(enshrineDocuments);
                        if (includeEnshrined)
                            queryObj["includeEnshrined"] = String(includeEnshrined);
                        return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Export/createDatevXmlZipExportJob", queryObj, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Generates an identifier to request the current export progress.
     * @link https://api.sevdesk.de/#tag/Export/operation/generateDownloadHash
     * @param jobId The export job ID
     * @returns progress hash
     */
    Export.prototype.generateDownloadHash = function (jobId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Progress/generateDownloadHash", { jobId: jobId }, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get the progress state of the export. You can use polling (request every few seconds) to get the current state.
     * @link https://api.sevdesk.de/#tag/Export/operation/getProgress
     * @param hash The hash string of an export
     * @returns
     */
    Export.prototype.getProgress = function (hash) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Progress/getProgress", { hash: hash }, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * When the export job has finished you can call this endpoint to get the download url.
     * @link https://api.sevdesk.de/#tag/Export/operation/jobDownloadInfo
     * @param jobId The export job ID
     * @returns
     */
    Export.prototype.getJobDownloadInfo = function (jobId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Progress/getJobDownloadInfo", { jobId: jobId }, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Export all invoices as csv
     * @link https://api.sevdesk.de/#tag/Export/operation/exportInvoice
     * @param download
     * @param sevQuery
     * @returns
     */
    Export.prototype.exportInvoice = function (download, sevQuery) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Export/invoiceCsv", { download: String(download), sevQuery: JSON.stringify(sevQuery) }, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Export all invoices as zip
     * @link https://api.sevdesk.de/#tag/Export/operation/exportInvoiceZip
     * @param download
     * @param sevQuery
     * @returns
     */
    Export.prototype.exportInvoiceAsZip = function (download, sevQuery) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Export/invoiceZip", { download: String(download), sevQuery: JSON.stringify(sevQuery) }, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Export all credit notes as csv
     * @link https://api.sevdesk.de/#tag/Export/operation/exportCreditNote
     * @param download
     * @param sevQuery
     * @returns
     */
    Export.prototype.exportCreditNote = function (download, sevQuery) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Export/creditNoteCsv", { download: String(download), sevQuery: JSON.stringify(sevQuery) }, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Export all vouchers as zip
     * @link http://api.sevdesk.de/#tag/Export/operation/exportVoucher
     * @param download
     * @param sevQuery
     * @returns
     */
    Export.prototype.exportVoucher = function (download, sevQuery) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Export/voucherListCsv", { download: String(download), sevQuery: JSON.stringify(sevQuery) }, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Export all transactions as csv
     * @link https://api.sevdesk.de/#tag/Export/operation/exportTransactions
     * @param download
     * @param sevQuery
     * @returns
     */
    Export.prototype.exportTransaction = function (download, sevQuery) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Export/transactionsCsv", { download: String(download), sevQuery: JSON.stringify(sevQuery) }, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * export all vouchers as zip
     * @link https://api.sevdesk.de/#tag/Export/operation/exportVoucherZip
     * @param download
     * @param sevQuery
     * @returns
     */
    Export.prototype.exportVoucherAsZip = function (download, sevQuery) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Export/voucherZip", { download: String(download), sevQuery: JSON.stringify(sevQuery) }, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Contact export as csv
     * @link https://api.sevdesk.de/#tag/Export/operation/exportContact
     * @param download
     * @param sevQuery
     * @returns
     */
    Export.prototype.exportContactList = function (download, sevQuery) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Export/contactListCsv", { download: String(download), sevQuery: JSON.stringify(sevQuery) }, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Export;
}());
exports.Export = Export;
