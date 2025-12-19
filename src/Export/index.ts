// Project-Imports

import { API } from "../types/common.classes";
import { ExportModule_Body_UpdateExportConfig } from "./types/body.types";
import {
  ExportModule_Query_ExportContactList,
  ExportModule_Query_ExportCreditNote,
  ExportModule_Query_ExportInvoice,
  ExportModule_Query_ExportInvoiceAsZip,
  ExportModule_Query_ExportTransaction,
  ExportModule_Query_ExportVoucher,
  ExportModule_Query_ExportVoucherAsZip,
} from "./types/query.types";
import {
  ExportModule_Response_ExportContactList,
  ExportModule_Response_ExportCreditNote,
  ExportModule_Response_ExportInvoice,
  ExportModule_Response_ExportInvoiceAsZip,
  ExportModule_Response_ExportTransaction,
  ExportModule_Response_ExportVoucher,
  ExportModule_Response_ExportVoucherAsZip,
  ExportModule_Response_GetDownloadHash,
  ExportModule_Response_GetJobDownloadInfo,
  ExportModule_Response_GetProgress,
  ExportModule_Response_StartDatevCsvZipExport,
  ExportModule_Response_StartDatevXmlZipExport,
  ExportModule_Response_UpdateExportConfig,
} from "./types/response.types";

// Code

/**
 * A set of operations to export data.
 * @link https://api.sevdesk.de/#tag/Export
 */
export class Export {
  constructor(private apiKey: string) {}

  /**
   * Update export config to export DATEV
   * @link https://api.sevdesk.de/#tag/Export/operation/updateExportConfig
   * @param sevClientId id of sevClient
   * @param body Specify the update
   * @returns
   */
  async updateExportConfig(
    sevClientId: number,
    body: ExportModule_Body_UpdateExportConfig
  ) {
    return await new API(
      this.apiKey
    ).request<ExportModule_Response_UpdateExportConfig>(
      `/SevClient/${sevClientId}/updateExportConfig`,
      undefined,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

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
  async startDatevCsvZipExport(
    startDate: Date,
    endDate: Date,
    scope: string,
    exportByPaydate?: boolean,
    includeEnshrined?: boolean,
    enshrineDocuments?: boolean,
    incluceDocumentImages?: boolean
  ) {
    const queryObj: Record<string, string> = {
      startDate: new Date(startDate).toISOString(),
      endDate: new Date(endDate).toISOString(),
      score: scope,
    };
    if (exportByPaydate) queryObj["exportByPayDate"] = String(exportByPaydate);
    if (incluceDocumentImages)
      queryObj["includeDocumentImages"] = String(incluceDocumentImages);
    if (enshrineDocuments)
      queryObj["enshrineDocuments"] = String(enshrineDocuments);
    if (includeEnshrined)
      queryObj["includeEnshrined"] = String(includeEnshrined);

    return await new API(
      this.apiKey
    ).request<ExportModule_Response_StartDatevCsvZipExport>(
      "/Export/createDatevCsvZipExportJob",
      queryObj,
      { method: "GET" }
    );
  }

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
  async startDatevXmlZipExport(
    startDate: Date,
    endDate: Date,
    scope: string,
    exportByPaydate?: boolean,
    includeEnshrined?: boolean,
    enshrineDocuments?: boolean,
    incluceDocumentImages?: boolean
  ) {
    const queryObj: Record<string, string> = {
      startDate: new Date(startDate).toISOString(),
      endDate: new Date(endDate).toISOString(),
      score: scope,
    };
    if (exportByPaydate) queryObj["exportByPayDate"] = String(exportByPaydate);
    if (incluceDocumentImages)
      queryObj["includeDocumentImages"] = String(incluceDocumentImages);
    if (enshrineDocuments)
      queryObj["enshrineDocuments"] = String(enshrineDocuments);
    if (includeEnshrined)
      queryObj["includeEnshrined"] = String(includeEnshrined);

    return await new API(
      this.apiKey
    ).request<ExportModule_Response_StartDatevXmlZipExport>(
      "/Export/createDatevXmlZipExportJob",
      queryObj,
      { method: "GET" }
    );
  }

  /**
   * Generates an identifier to request the current export progress.
   * @link https://api.sevdesk.de/#tag/Export/operation/generateDownloadHash
   * @param jobId The export job ID
   * @returns progress hash
   */
  async generateDownloadHash(jobId: string) {
    return await new API(
      this.apiKey
    ).request<ExportModule_Response_GetDownloadHash>(
      "/Progress/generateDownloadHash",
      { jobId },
      { method: "GET" }
    );
  }

  /**
   * Get the progress state of the export. You can use polling (request every few seconds) to get the current state.
   * @link https://api.sevdesk.de/#tag/Export/operation/getProgress
   * @param hash The hash string of an export
   * @returns
   */
  async getProgress(hash: string) {
    return await new API(
      this.apiKey
    ).request<ExportModule_Response_GetProgress>(
      "/Progress/getProgress",
      { hash },
      { method: "GET" }
    );
  }

  /**
   * When the export job has finished you can call this endpoint to get the download url.
   * @link https://api.sevdesk.de/#tag/Export/operation/jobDownloadInfo
   * @param jobId The export job ID
   * @returns
   */
  async getJobDownloadInfo(jobId: string) {
    return await new API(
      this.apiKey
    ).request<ExportModule_Response_GetJobDownloadInfo>(
      "/Progress/getJobDownloadInfo",
      { jobId },
      { method: "GET" }
    );
  }

  /**
   * Export all invoices as csv
   * @link https://api.sevdesk.de/#tag/Export/operation/exportInvoice
   * @param download
   * @param sevQuery
   * @returns
   */
  async exportInvoice(
    download: boolean,
    sevQuery: ExportModule_Query_ExportInvoice
  ) {
    return await new API(
      this.apiKey
    ).request<ExportModule_Response_ExportInvoice>(
      "/Export/invoiceCsv",
      { download: String(download), sevQuery: JSON.stringify(sevQuery) },
      { method: "GET" }
    );
  }

  /**
   * Export all invoices as zip
   * @link https://api.sevdesk.de/#tag/Export/operation/exportInvoiceZip
   * @param download
   * @param sevQuery
   * @returns
   */
  async exportInvoiceAsZip(
    download: boolean,
    sevQuery: ExportModule_Query_ExportInvoiceAsZip
  ) {
    return await new API(
      this.apiKey
    ).request<ExportModule_Response_ExportInvoiceAsZip>(
      "/Export/invoiceZip",
      { download: String(download), sevQuery: JSON.stringify(sevQuery) },
      { method: "GET" }
    );
  }

  /**
   * Export all credit notes as csv
   * @link https://api.sevdesk.de/#tag/Export/operation/exportCreditNote
   * @param download
   * @param sevQuery
   * @returns
   */
  async exportCreditNote(
    download: boolean,
    sevQuery: ExportModule_Query_ExportCreditNote
  ) {
    return await new API(
      this.apiKey
    ).request<ExportModule_Response_ExportCreditNote>(
      "/Export/creditNoteCsv",
      { download: String(download), sevQuery: JSON.stringify(sevQuery) },
      { method: "GET" }
    );
  }

  /**
   * Export all vouchers as zip
   * @link http://api.sevdesk.de/#tag/Export/operation/exportVoucher
   * @param download
   * @param sevQuery
   * @returns
   */
  async exportVoucher(
    download: boolean,
    sevQuery: ExportModule_Query_ExportVoucher
  ) {
    return await new API(
      this.apiKey
    ).request<ExportModule_Response_ExportVoucher>(
      "/Export/voucherListCsv",
      { download: String(download), sevQuery: JSON.stringify(sevQuery) },
      { method: "GET" }
    );
  }

  /**
   * Export all transactions as csv
   * @link https://api.sevdesk.de/#tag/Export/operation/exportTransactions
   * @param download
   * @param sevQuery
   * @returns
   */
  async exportTransaction(
    download: boolean,
    sevQuery: ExportModule_Query_ExportTransaction
  ) {
    return await new API(
      this.apiKey
    ).request<ExportModule_Response_ExportTransaction>(
      "/Export/transactionsCsv",
      { download: String(download), sevQuery: JSON.stringify(sevQuery) },
      { method: "GET" }
    );
  }

  /**
   * export all vouchers as zip
   * @link https://api.sevdesk.de/#tag/Export/operation/exportVoucherZip
   * @param download
   * @param sevQuery
   * @returns
   */
  async exportVoucherAsZip(
    download: boolean,
    sevQuery: ExportModule_Query_ExportVoucherAsZip
  ) {
    return await new API(
      this.apiKey
    ).request<ExportModule_Response_ExportVoucherAsZip>(
      "/Export/voucherZip",
      { download: String(download), sevQuery: JSON.stringify(sevQuery) },
      { method: "GET" }
    );
  }

  /**
   * Contact export as csv
   * @link https://api.sevdesk.de/#tag/Export/operation/exportContact
   * @param download
   * @param sevQuery
   * @returns
   */
  async exportContactList(
    download: boolean,
    sevQuery: ExportModule_Query_ExportContactList
  ) {
    return await new API(
      this.apiKey
    ).request<ExportModule_Response_ExportContactList>(
      "/Export/contactListCsv",
      { download: String(download), sevQuery: JSON.stringify(sevQuery) },
      { method: "GET" }
    );
  }
}
