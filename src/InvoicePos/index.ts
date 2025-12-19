// Project-Imports

import { API } from "../types/common.classes";
import { InvoicePosModule_Response_GetMany } from "./types/response.types";

// Code

/**
 * @link https://api.sevdesk.de/#tag/InvoicePos
 */
export class InvoicePos {
  constructor(private apiKey: string) {}

  /**
   * There are a multitude of parameter which can be used to filter.
   * @link https://api.sevdesk.de/#tag/InvoicePos/operation/getInvoicePos
   * @param invoiceId Retrieve all invoices positions with this invoice. Must be provided with invoice[objectName]
   * @param id Retrieve all InvoicePos with this InvoicePos id
   * @param partId Retrieve all invoices positions with this part. Must be provided with part[objectName]
   * @returns
   */
  async getMany(invoiceId?: number, id?: number, partId?: number) {
    const queryObj: Record<string, string> = {};
    if (invoiceId) {
      queryObj["invoice[id]"] = invoiceId.toString();
      queryObj["invoice[objectName]"] = "Invoice";
    }
    if (id) queryObj["id"] = id.toString();
    if (partId) {
      queryObj["part[id]"] = partId.toString();
      queryObj["part[objectName]"] = "Part";
    }

    return await new API(
      this.apiKey
    ).request<InvoicePosModule_Response_GetMany>("/InvoicePos", queryObj, {
      method: "GET",
    });
  }
}
