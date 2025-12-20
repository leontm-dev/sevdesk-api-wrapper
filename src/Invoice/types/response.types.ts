// Project-Imports

import { InvoicePos } from "../../InvoicePos/types/base.types";
import { Email, SevClient } from "../../types/models.types";
import { Invoice } from "./base.types";

// Code

export type InvoiceModule_Response_GetMany = {
  objects: Invoice[];
};
export type InvoiceModule_Response_CreateOne = {
  invoice: Invoice;
  invoicePos: InvoicePos[];
  filename: string;
};
export type InvoiceModule_Response_GetOne = {
  objects: Invoice[];
};
export type InvoiceModule_Response_GetOnesPositions = {
  objects: InvoicePos[];
};
export type InvoiceModule_Response_CreateOneFromOrder = Invoice;
export type InvoiceModule_Response_CreateReminderForOne = Invoice;
export type InvoiceModule_Response_CheckifOneIsPartiallyPaid = {
  objects: boolean;
};
export type InvoiceModule_Response_CancelOne = Invoice;
export type InvoiceModule_Response_RenderOne = {
  thumbs: any[];
  pages: number;
  docId: string;
  parameters: {
    key: string;
    name: string;
    values: {
      name: string;
      translationCode: string;
      value: string;
    }[];
    visible: boolean;
    value: string;
  }[];
};
export type InvoiceModule_Response_SendOneViaEmail = Email;
export type InvoiceModule_Response_GetOnesPdf = {
  filename: string;
  mimeType: string;
  base64encoded: boolean;
  content: string;
};
export type InvoiceModule_Response_GetOnesXML = {
  objects: string;
};
export type InvoiceModule_Response_MarkOneAsSent = Invoice;
export type InvoiceModule_Response_EnshrineOne = {
  objects: any | null;
};
export type InvoiceModule_Response_BookOne = {
  id: string;
  objectName: string;
  additionalInformation: string | null;
  /**
   * Date of email creation
   */
  create: string;
  creditNote: {
    /**
     * The id of the invoice
     */
    id: number;
    /**
     * Internal object name which is 'Invoice'.
     */
    objectName: "Invoice";
  };
  fromStatus: string;
  toStatus: string;
  ammountPayed: string;
  bookingDate: string;
  /**
   * Client to which invoice belongs. Will be filled automatically
   */
  sevClient: SevClient;
};
export type InvoiceModule_Response_ResetOnesStatusToOpen = {
  objects: Invoice;
};
export type InvoiceModule_Response_ResetOnesStatusToDraft = {
  objects: Invoice;
};
