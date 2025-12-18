// Project-Imports

import { API } from "../types/common.classes";

// Code

export class Layout {
  constructor(private apiKey: string) {}

  async getManyLetterpapers() {
    return await new API(this.apiKey).request(
      "/DocServer/getLetterpapersWithThumb",
      undefined,
      { method: "GET" }
    );
  }

  async getManyTemplates() {
    return await new API(this.apiKey).request(
      "/DocServer/getTemplatesWithThumb",
      undefined,
      { method: "GET" }
    );
  }

  async updateOneInvoiceTemplate(invoiceId: number, body: any) {
    return await new API(this.apiKey).request(
      `/Invoice/${invoiceId}/changeParameter`,
      undefined,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  async updateOneOrderTemplate(orderId: number, body: any) {
    return await new API(this.apiKey).request(
      `/Order/${orderId}/changeParameter`,
      undefined,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  async updateOneCreditNoteTemplate(creditNoteId: number, body: any) {
    return await new API(this.apiKey).request(
      `/CreditNote/${creditNoteId}/changeParameter`,
      undefined,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }
}
