import { ExportContactListSevQuery, ExportInvoiceListSevQuery, ExportOrderListSevQuery, ExportVoucherListSevQuery } from "./types/query.types";
/**
 * A set of operations to export data.
 * @link https://api.sevdesk.de/#tag/Report
 */
export declare class Report {
    private apiKey;
    constructor(apiKey: string);
    exportInvoiceList(download: boolean, view: string, sevQuery: ExportInvoiceListSevQuery): Promise<import("../types/Response").IApiResponse<unknown>>;
    exportOrderList(download: boolean, view: string, sevQuery: ExportOrderListSevQuery): Promise<import("../types/Response").IApiResponse<unknown>>;
    exportContactList(download: boolean, sevQuery: ExportContactListSevQuery): Promise<import("../types/Response").IApiResponse<unknown>>;
    exportVoucherList(download: boolean, sevQuery: ExportVoucherListSevQuery): Promise<import("../types/Response").IApiResponse<unknown>>;
}
