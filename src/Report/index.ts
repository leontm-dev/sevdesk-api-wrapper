// Project-Imports

import { API } from "../types/common.classes";
import {
  ExportContactListSevQuery,
  ExportInvoiceListSevQuery,
  ExportOrderListSevQuery,
  ExportVoucherListSevQuery,
} from "./types/query.types";

// Code

/**
 * A set of operations to export data.
 * @link https://api.sevdesk.de/#tag/Report
 */
export class Report {
  constructor(private apiKey: string) {}

  async exportInvoiceList(
    download: boolean,
    view: string,
    sevQuery: ExportInvoiceListSevQuery
  ) {
    return new API(this.apiKey).request(
      "/Report/invoiceList",
      {
        download: String(download),
        view,
        sevQuery: JSON.stringify(sevQuery),
      },
      { method: "GET" }
    );
  }
  async exportOrderList(
    download: boolean,
    view: string,
    sevQuery: ExportOrderListSevQuery
  ) {
    return new API(this.apiKey).request(
      "/Report/orderList",
      {
        download: String(download),
        view,
        sevQuery: JSON.stringify(sevQuery),
      },
      { method: "GET" }
    );
  }
  async exportContactList(
    download: boolean,
    sevQuery: ExportContactListSevQuery
  ) {
    return new API(this.apiKey).request(
      "/Report/contactList",
      {
        download: String(download),
        sevQuery: JSON.stringify(sevQuery),
      },
      { method: "GET" }
    );
  }
  async exportVoucherList(
    download: boolean,
    sevQuery: ExportVoucherListSevQuery
  ) {
    return new API(this.apiKey).request(
      "/Report/voucherList",
      {
        download: String(download),
        sevQuery: JSON.stringify(sevQuery),
      },
      { method: "GET" }
    );
  }
}
