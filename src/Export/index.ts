// Project-Imports

import { API } from "../types/common.classes";

// Code

export class Export {
  constructor(private apiKey: string) {}

  async updateExportConfig(sevClientId: number, body: any) {
    return await new API(this.apiKey).request(
      `/SevClient/${sevClientId}/updateExportConfig`,
      undefined,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

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

    return await new API(this.apiKey).request(
      "/Export/createDatevCsvZipExportJob",
      queryObj,
      { method: "GET" }
    );
  }

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

    return await new API(this.apiKey).request(
      "/Export/createDatevXmlZipExportJob",
      queryObj,
      { method: "GET" }
    );
  }

  async generateDownloadHash(jobId: string) {
    return await new API(this.apiKey).request(
      "/Progress/generateDownloadHash",
      { jobId },
      { method: "GET" }
    );
  }

  async getProgress(hash: string) {
    return await new API(this.apiKey).request(
      "/Progress/getProgress",
      { hash },
      { method: "GET" }
    );
  }

  async getJobDownloadInfo(jobId: string) {
    return await new API(this.apiKey).request(
      "/Progress/getJobDownloadInfo",
      { jobId },
      { method: "GET" }
    );
  }
  async exportInvoice(download: boolean, sevQuery: {}) {
    return await new API(this.apiKey).request(
      "/Export/invoiceCsv",
      { download: String(download), sevQuery: JSON.stringify(sevQuery) },
      { method: "GET" }
    );
  }

  async exportInvoiceAsZip(download: boolean, sevQuery: {}) {
    return await new API(this.apiKey).request(
      "/Export/invoiceZip",
      { download: String(download), sevQuery: JSON.stringify(sevQuery) },
      { method: "GET" }
    );
  }

  async exportCreditNote(download: boolean, sevQuery: {}) {
    return await new API(this.apiKey).request(
      "/Export/creditNoteCsv",
      { download: String(download), sevQuery: JSON.stringify(sevQuery) },
      { method: "GET" }
    );
  }

  async exportVoucher(download: boolean, sevQuery: {}) {
    return await new API(this.apiKey).request(
      "/Export/voucherListCsv",
      { download: String(download), sevQuery: JSON.stringify(sevQuery) },
      { method: "GET" }
    );
  }

  async exportTransaction(download: boolean, sevQuery: {}) {
    return await new API(this.apiKey).request(
      "/Export/transactionsCsv",
      { download: String(download), sevQuery: JSON.stringify(sevQuery) },
      { method: "GET" }
    );
  }

  async exportVoucherAsZip(download: boolean, sevQuery: {}) {
    return await new API(this.apiKey).request(
      "/Export/voucherZip",
      { download: String(download), sevQuery: JSON.stringify(sevQuery) },
      { method: "GET" }
    );
  }

  async exportContactList(download: boolean, sevQuery: {}) {
    return await new API(this.apiKey).request(
      "/Export/contactListCsv",
      { download: String(download), sevQuery: JSON.stringify(sevQuery) },
      { method: "GET" }
    );
  }
}
