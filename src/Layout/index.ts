// Project-Imports

import { API } from "../types/common.classes";
import {
  LayoutModule_Body_UpdateOneCreditNoteTemplate,
  LayoutModule_Body_UpdateOneInvoiceTemplate,
  LayoutModule_Body_UpdateOneOrderTemplate,
} from "./types/body.types";
import {
  LayoutModule_Response_GetManyLetterpapers,
  LayoutModule_Response_GetManyTemplates,
  LayoutModule_Response_UpdateOneCreditNoteTemplate,
  LayoutModule_Response_UpdateOneInvoiceTemplate,
  LayoutModule_Response_UpdateOneOrderTemplate,
} from "./types/response.types";

// Code

export class Layout {
  constructor(private apiKey: string) {}

  /**
   * Retrieve all letterpapers with Thumb
   * @link https://api.sevdesk.de/#tag/Layout/operation/getLetterpapersWithThumb
   * @returns
   */
  async getManyLetterpapers() {
    return await new API(
      this.apiKey
    ).request<LayoutModule_Response_GetManyLetterpapers>(
      "/DocServer/getLetterpapersWithThumb",
      undefined,
      { method: "GET" }
    );
  }

  /**
   * Retrieve all templates
   * @link https://api.sevdesk.de/#tag/Layout/operation/getTemplates
   * @returns
   */
  async getManyTemplates() {
    return await new API(
      this.apiKey
    ).request<LayoutModule_Response_GetManyTemplates>(
      "/DocServer/getTemplatesWithThumb",
      undefined,
      { method: "GET" }
    );
  }

  /**
   * Update an existing invoice template
   * @link https://api.sevdesk.de/#tag/Layout/operation/updateInvoiceTemplate
   * @param invoiceId ID of invoice to update
   * @param body Change Layout
   * @returns
   */
  async updateOneInvoiceTemplate(
    invoiceId: number,
    body: LayoutModule_Body_UpdateOneInvoiceTemplate
  ) {
    return await new API(
      this.apiKey
    ).request<LayoutModule_Response_UpdateOneInvoiceTemplate>(
      `/Invoice/${invoiceId}/changeParameter`,
      undefined,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * Update an existing order template
   * @link https://api.sevdesk.de/#tag/Layout/operation/updateOrderTemplate
   * @param orderId ID of order to update
   * @param body Change Layout
   * @returns
   */
  async updateOneOrderTemplate(
    orderId: number,
    body: LayoutModule_Body_UpdateOneOrderTemplate
  ) {
    return await new API(
      this.apiKey
    ).request<LayoutModule_Response_UpdateOneOrderTemplate>(
      `/Order/${orderId}/changeParameter`,
      undefined,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * Update an existing of credit note template
   * @link https://api.sevdesk.de/#tag/Layout/operation/updateCreditNoteTemplate
   * @param creditNoteId ID of credit note to update
   * @param body Change Layout
   * @returns
   */
  async updateOneCreditNoteTemplate(
    creditNoteId: number,
    body: LayoutModule_Body_UpdateOneCreditNoteTemplate
  ) {
    return await new API(
      this.apiKey
    ).request<LayoutModule_Response_UpdateOneCreditNoteTemplate>(
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
