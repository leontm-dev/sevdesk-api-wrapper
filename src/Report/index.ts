// Project-Imports

import { API } from "../types/common.classes";
import {
  ReportModule_Query_ExportContactListSevQuery,
  ReportModule_Query_ExportInvoiceListSevQuery,
  ReportModule_Query_ExportOrderListSevQuery,
  ReportModule_Query_ExportVoucherListSevQuery,
} from "./types/query.types";
import {
  ReportModule_Response_ExportContactListResponse,
  ReportModule_Response_ExportInvoiceListResponse,
  ReportModule_Response_ExportOrderListResponse,
  ReportModule_Response_ExportVoucherListResponse,
} from "./types/response.types";

// Code

/**
 * A set of operations to export data.
 * @link https://api.sevdesk.de/#tag/Report
 */
export class Report {
  constructor(private apiKey: string) {}

  /**
   * Export invoice list
   * @link https://api.sevdesk.de/#tag/Report/operation/reportInvoice
   * @param download
   * @param view
   * @param sevQuery
   * @returns
   */
  async exportInvoiceList(
    download: boolean,
    view: string,
    sevQuery: ReportModule_Query_ExportInvoiceListSevQuery
  ) {
    return new API(
      this.apiKey
    ).request<ReportModule_Response_ExportInvoiceListResponse>(
      "/Report/invoiceList",
      {
        download: String(download),
        view,
        sevQuery: JSON.stringify(sevQuery),
      },
      { method: "GET" }
    );
  }

  /**
   * Export order list
   * @link https://api.sevdesk.de/#tag/Report/operation/reportOrder
   * @param download
   * @param view
   * @param sevQuery
   * @returns
   */
  async exportOrderList(
    download: boolean,
    view: string,
    sevQuery: ReportModule_Query_ExportOrderListSevQuery
  ) {
    return new API(
      this.apiKey
    ).request<ReportModule_Response_ExportOrderListResponse>(
      "/Report/orderList",
      {
        download: String(download),
        view,
        sevQuery: JSON.stringify(sevQuery),
      },
      { method: "GET" }
    );
  }

  /**
   * Export contact list
   * @link https://api.sevdesk.de/#tag/Report/operation/reportContact
   * @param download
   * @param sevQuery
   * @returns
   */
  async exportContactList(
    download: boolean,
    sevQuery: ReportModule_Query_ExportContactListSevQuery
  ) {
    return new API(
      this.apiKey
    ).request<ReportModule_Response_ExportContactListResponse>(
      "/Report/contactList",
      {
        download: String(download),
        sevQuery: JSON.stringify(sevQuery),
      },
      { method: "GET" }
    );
  }

  /**
   * Export voucher list
   * @link https://api.sevdesk.de/#tag/Report/operation/reportVoucher
   * @param download
   * @param sevQuery
   * @returns
   */
  async exportVoucherList(
    download: boolean,
    sevQuery: ReportModule_Query_ExportVoucherListSevQuery
  ) {
    return new API(
      this.apiKey
    ).request<ReportModule_Response_ExportVoucherListResponse>(
      "/Report/voucherList",
      {
        download: String(download),
        sevQuery: JSON.stringify(sevQuery),
      },
      { method: "GET" }
    );
  }
}
