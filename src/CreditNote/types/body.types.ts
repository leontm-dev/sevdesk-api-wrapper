// Project-Imports

import { CreditNotePos } from "../../CreditNotePos";
import { CreditNoteV1 } from "./base.v1.types";
import { CreditNoteV2 } from "./base.v2.types";

// Code

export type CreateANewCreditNoteBody = {
  /**
   * creditNote model
   */
  creditNote: CreditNoteV1 & CreditNoteV2;
  creditNotePosSave: CreditNotePos;
  creditNotePosDelete: {
    /**
     * Id of credit note position
     */
    id: number;
    /**
     * Object name of credit note position
     */
    objectName: string;
  } | null;
  discountSave: {
    /**
     * Defines if this is a discount or a surcharge
     */
    discount: boolean;
    /**
     * A text for your discount
     */
    text: string;
    /**
     * Defines if this is a percentage or an absolute discount
     */
    percentage: boolean;
    /**
     * Value of the discount
     */
    value: number;
    /**
     * Object name of the discount
     */
    objectName: "Discount";
    /**
     * Internal param
     */
    mapAll: boolean;
  } | null;
  discountDelete: {
    /**
     * ID of discount to delete
     */
    id: number;
    /**
     * Object name of discount
     */
    objectName: "Discount";
  } | null;
};
export type CreatesANewCreditNoteFromAnInvoiceBody = {
  invoice: {
    /**
     * The id of the existing invoice
     */
    id: number;
    /**
     * The objectName must be 'Invoice'
     */
    objectName: "Invoice";
  };
};
export type CreatesANewCreditNoteFromAVoucherBody = {
  voucher: {
    /**
     * The id of the existing Voucher
     */
    id: number;
    /**
     * The objectName must be 'Voucher'
     */
    objectName: "Voucher";
  };
};
export type UpdateAnExistingCreditNoteBody = {};
