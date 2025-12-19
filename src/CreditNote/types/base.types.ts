// Project-Imports

import { SevClient } from "../../types/models.types";
import { CreditNoteV1 } from "./base.v1.types";
import { CreditNoteV2 } from "./base.v2.types";

// Code

export type CreditNoteMailResponse = {
  id: number;
  objectName: string;
  additionalInformationm: string | null;
  /**
   * Date of email creation
   */
  create: string;
  /**
   * Date of last email update
   */
  update: string;
  /**
   * creditNote model
   */
  object: CreditNoteV1 & CreditNoteV2;
  from: string;
  to: string;
  subject: string;
  text: string;
  /**
   * Client to which creditNote belongs. Will be filled automatically
   */
  sevClient: SevClient;
};
