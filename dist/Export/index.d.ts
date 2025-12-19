export declare class Export {
    private apiKey;
    constructor(apiKey: string);
    updateExportConfig(sevClientId: number, body: any): Promise<import("../types/Response").IApiResponse<unknown>>;
    startDatevCsvZipExport(startDate: Date, endDate: Date, scope: string, exportByPaydate?: boolean, includeEnshrined?: boolean, enshrineDocuments?: boolean, incluceDocumentImages?: boolean): Promise<import("../types/Response").IApiResponse<unknown>>;
    startDatevXmlZipExport(startDate: Date, endDate: Date, scope: string, exportByPaydate?: boolean, includeEnshrined?: boolean, enshrineDocuments?: boolean, incluceDocumentImages?: boolean): Promise<import("../types/Response").IApiResponse<unknown>>;
    generateDownloadHash(jobId: string): Promise<import("../types/Response").IApiResponse<unknown>>;
    getProgress(hash: string): Promise<import("../types/Response").IApiResponse<unknown>>;
    getJobDownloadInfo(jobId: string): Promise<import("../types/Response").IApiResponse<unknown>>;
    exportInvoice(download: boolean, sevQuery: {}): Promise<import("../types/Response").IApiResponse<unknown>>;
    exportInvoiceAsZip(download: boolean, sevQuery: {}): Promise<import("../types/Response").IApiResponse<unknown>>;
    exportCreditNote(download: boolean, sevQuery: {}): Promise<import("../types/Response").IApiResponse<unknown>>;
    exportVoucher(download: boolean, sevQuery: {}): Promise<import("../types/Response").IApiResponse<unknown>>;
    exportTransaction(download: boolean, sevQuery: {}): Promise<import("../types/Response").IApiResponse<unknown>>;
    exportVoucherAsZip(download: boolean, sevQuery: {}): Promise<import("../types/Response").IApiResponse<unknown>>;
    exportContactList(download: boolean, sevQuery: {}): Promise<import("../types/Response").IApiResponse<unknown>>;
}
