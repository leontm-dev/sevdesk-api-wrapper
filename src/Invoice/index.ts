// Project-Imports

import { API } from "../types/common.classes";

// Code

export class Invoice {
  constructor(private apiKey: string) {}

  async getMany(
    status?: 100 | 200 | 1000,
    invoiceNumber?: string,
    startDate?: Date,
    endDate?: Date,
    contactId?: number
  ) {
    const queryObj: Record<string, string> = {};
    if (status) queryObj["status"] = status.toString();
    if (invoiceNumber) queryObj["invoiceNumber"] = invoiceNumber;
    if (startDate) queryObj["startDate"] = new Date(startDate).toISOString();
    if (endDate) queryObj["endDate"] = new Date(endDate).toISOString();
    if (contactId) {
      queryObj["contact[id]"] = contactId.toString();
      queryObj["contact[objectName]"] = "Contact";
    }

    return await new API(this.apiKey).request("/Invoice", queryObj, {
      method: "GET",
    });
  }

  async createOne(body: any) {
    return await new API(this.apiKey).request(
      "/Invoice/Factory/saveInvoice",
      undefined,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  async getOne(invoiceId: number) {
    return await new API(this.apiKey).request(
      `/Invoice/${invoiceId}`,
      undefined,
      { method: "GET" }
    );
  }

  async getOnesPositions(
    invoiceId: number,
    limit?: number,
    offset?: number,
    embed?: string[]
  ) {
    const queryObj: Record<string, string> = {};
    if (limit) queryObj["limit"] = limit.toString();
    if (offset) queryObj["offset"] = offset.toString();
    if (embed) queryObj["embed"] = embed.join(",");

    return await new API(this.apiKey).request(
      `/Invoice/${invoiceId}/getPositions`,
      queryObj,
      { method: "GET" }
    );
  }

  async createOneFromOrder(body: any) {
    return await new API(this.apiKey).request(
      "/Invoice/Factory/createInvoiceFromOrder",
      undefined,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  async createReminder(body: any) {
    return await new API(this.apiKey).request(
      "/Invoice/Factory/createInvoiceReminder",
      undefined,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  async checkIfOneIsPartiallyPaid(invoiceId: number) {
    return await new API(this.apiKey).request(
      `/Invoice/${invoiceId}/getIsPartiallyPaid`,
      undefined,
      { method: "GET" }
    );
  }

  async cancelOne(invoiceId: number) {
    return await new API(this.apiKey).request(
      `/Invoice/${invoiceId}/cancelInvoice`,
      undefined,
      { method: "POST" }
    );
  }

  async renderOne(invoiceId: number, body: any) {
    return await new API(this.apiKey).request(
      `/Invoice/${invoiceId}/render`,
      undefined,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  async sendOneViaEmail(invoiceId: number, body: any) {
    return await new API(this.apiKey).request(
      `/Invoice/${invoiceId}/sendViaEmail`,
      undefined,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  async getOnesPdf(invoiceId: number) {
    return await new API(this.apiKey).request(
      `/Invoice/${invoiceId}/getPdf`,
      undefined,
      { method: "GET" }
    );
  }

  async getOnesXML(invoiceId: number) {
    return await new API(this.apiKey).request(
      `/Invoice/${invoiceId}/getXml`,
      undefined,
      { method: "GET" }
    );
  }

  async markOneAsSent(invoiceId: number, body: any) {
    return await new API(this.apiKey).request(
      `/Invoice/${invoiceId}/sendBy`,
      undefined,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  async enshrineOne(invoiceId: number) {
    return await new API(this.apiKey).request(
      `/Invoice/${invoiceId}/enshrine`,
      undefined,
      { method: "PUT" }
    );
  }

  async bookOne(invoiceId: number, body: any) {
    return await new API(this.apiKey).request(
      `/Invoice/${invoiceId}/bookAmount`,
      undefined,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  async resetOnesStatusToOpen(invoiceId: number) {
    return await new API(this.apiKey).request(
      `/Invoice/${invoiceId}/resetToOpen`,
      undefined,
      { method: "PUT" }
    );
  }

  async resetOnesStatusToDraft(invoiceId: number) {
    return await new API(this.apiKey).request(
      `/Invoice/${invoiceId}/resetToDraft`,
      undefined,
      { method: "PUT" }
    );
  }
}
