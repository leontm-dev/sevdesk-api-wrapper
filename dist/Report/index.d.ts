import { ReportModule_Query_ExportContactListSevQuery, ReportModule_Query_ExportInvoiceListSevQuery, ReportModule_Query_ExportOrderListSevQuery, ReportModule_Query_ExportVoucherListSevQuery } from "./types/query.types";
import { ReportModule_Response_ExportContactListResponse, ReportModule_Response_ExportInvoiceListResponse, ReportModule_Response_ExportOrderListResponse, ReportModule_Response_ExportVoucherListResponse } from "./types/response.types";
/**
 * A set of operations to export data.
 * @link https://api.sevdesk.de/#tag/Report
 */
export declare class Report {
    private apiKey;
    constructor(apiKey: string);
    /**
     * Export invoice list
     * @link https://api.sevdesk.de/#tag/Report/operation/reportInvoice
     * @param download
     * @param view
     * @param sevQuery
     * @returns
     */
    exportInvoiceList(download: boolean, view: string, sevQuery: ReportModule_Query_ExportInvoiceListSevQuery): Promise<import("../types/Response").IApiResponse<ReportModule_Response_ExportInvoiceListResponse>>;
    /**
     * Export order list
     * @link https://api.sevdesk.de/#tag/Report/operation/reportOrder
     * @param download
     * @param view
     * @param sevQuery
     * @returns
     */
    exportOrderList(download: boolean, view: string, sevQuery: ReportModule_Query_ExportOrderListSevQuery): Promise<import("../types/Response").IApiResponse<ReportModule_Response_ExportOrderListResponse>>;
    /**
     * Export contact list
     * @link https://api.sevdesk.de/#tag/Report/operation/reportContact
     * @param download
     * @param sevQuery
     * @returns
     */
    exportContactList(download: boolean, sevQuery: ReportModule_Query_ExportContactListSevQuery): Promise<import("../types/Response").IApiResponse<ReportModule_Response_ExportContactListResponse>>;
    /**
     * Export voucher list
     * @link https://api.sevdesk.de/#tag/Report/operation/reportVoucher
     * @param download
     * @param sevQuery
     * @returns
     */
    exportVoucherList(download: boolean, sevQuery: ReportModule_Query_ExportVoucherListSevQuery): Promise<import("../types/Response").IApiResponse<ReportModule_Response_ExportVoucherListResponse>>;
}
