import { CreditNoteV1 } from "./base.v1.types";
import { CreditNotePosition } from "../../CreditNotePos/types/base.types";
import { CreditNoteV2 } from "./base.v2.types";
import { Discounts } from "../../types/models.types";
export type RetrieveCreditNoteResponse = {
    objects: (CreditNoteV1 & CreditNoteV2)[];
};
export type CreateANewCreditNoteResponse = {
    creditNote: CreditNoteV1 & CreditNoteV2;
    creditNotePos: CreditNotePosition[];
};
export type CreatesANewCreditNoteFromAnInvoiceResponse = {
    objects: {
        creditNote: CreditNoteV1 & CreditNoteV2;
        creditNotePos: CreditNotePosition[];
        dicount: Discounts[];
    };
};
export type CreatesANewCreditNoteFromAVoucherResponse = {
    objects: {
        creditNote: CreditNoteV1 & CreditNoteV2;
        creditNotePos: CreditNotePosition[];
        dicount: Discounts[];
    };
};
export type FindCreditNoteByIdResponse = {
    objects: (CreditNoteV1 & CreditNoteV2)[];
};
export type UpdateAnExistingCreditNoteResponse = CreditNoteV1 & CreditNoteV2;
export type DeletesAnCreditNoteResponse = {
    objects: any[];
};
