// Project-Imports

import { CreditNoteV1 } from "./base.v1.types";
import { CreditNotePosition } from "../../CreditNotePos/types/base.types";
import { CreditNoteV2 } from "./base.v2.types";
import { Discounts, SevClient } from "../../types/models.types";
import { CreditNoteMailResponse } from "./base.types";

// Code

export type CreditNoteModule_Response_GetMany = {
  objects: (CreditNoteV1 & CreditNoteV2)[];
};
export type CreditNoteModule_Response_CreateOne = {
  creditNote: CreditNoteV1 & CreditNoteV2;
  creditNotePos: CreditNotePosition[];
};
export type CreditNoteModule_Response_CreateOneFromInvoice = {
  objects: {
    creditNote: CreditNoteV1 & CreditNoteV2;
    creditNotePos: CreditNotePosition[];
    dicount: Discounts[];
  };
};
export type CreditNoteModule_Response_CreateOneFromVoucher = {
  objects: {
    creditNote: CreditNoteV1 & CreditNoteV2;
    creditNotePos: CreditNotePosition[];
    dicount: Discounts[];
  };
};
export type CreditNoteModule_Response_GetOne = {
  objects: (CreditNoteV1 & CreditNoteV2)[];
};
export type CreditNoteModule_Response_UpdateOne = CreditNoteV1 & CreditNoteV2;
export type CreditNoteModule_Response_DeleteOne = {
  objects: any[];
};
export type CreditNoteModule_Response_SendOneByPrinting = {
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
export type CreditNoteModule_Response_MarkOneAsSent = CreditNoteV1 &
  CreditNoteV2;
export type CreditNoteModule_Response_EnshrineOne = {
  objects: null;
};
export type CreditNoteModule_Response_GetOnesPdf = {
  filename: string;
  mimeType: string;
  base64encoded: boolean;
  content: string;
};
export type CreditNoteModule_Response_SendOneViaEmail = {
  objects: CreditNoteMailResponse[];
};
export type CreditNoteModule_Response_BookOne = {
  id: string;
  objectName: string;
  additionalInformation: string | null;
  /**
   * Date of email creation
   */
  create: string;
  creditNote: {
    /**
     * The id of the credit note
     */
    id: number;
    /**
     * Internal object name which is 'CreditNote'.
     */
    objectName: "CreditNote";
  };
  fromStatus: string;
  toStatus: string;
  ammountPayed: string;
  bookingDate: string;
  /**
   * Client to which creditNote belongs. Will be filled automatically
   */
  sevClient: SevClient;
};
export type CreditNoteModule_Response_ResetOnesStatusToOpen = {
  objects: CreditNoteV1 & CreditNoteV2;
};
export type CreditNoteModule_Response_ResetOnesStatusToDraft = {
  objects: CreditNoteV1 & CreditNoteV2;
};
