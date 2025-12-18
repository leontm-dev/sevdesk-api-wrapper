// Project-Imports

import { API } from "../types/common.classes";

// Code

export class InvoicePos {
  constructor(private apiKey: string) {}

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

    return await new API(this.apiKey).request("/InvoicePos", queryObj, {
      method: "GET",
    });
  }
}
