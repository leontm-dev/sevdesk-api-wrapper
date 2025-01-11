import { Contact } from "../../types/sevdeskModels.js";
export type GetNextFreeCustomerNumberResponse = {
    objects: string;
};
export type FindContactsByCustomFieldValueResponse = {
    objects: Contact[];
};
export type CheckIfACustomerNUmberIsAvailableResponse = {
    objects: boolean;
};
export type RetrieveContactsResponse = {
    objects: Contact[];
};
export type CreateANewContactResponse = Contact;
export type FindContactByIdResponse = {
    objects: Contact[];
};
export type UpdateAExistingContactResponse = Contact;
export type DeletesAContactResponse = {
    objects: [null];
};
export type GetNumberOfAllItemsResponse = {
    orders: number;
    invoices: number;
    creditNotes: number;
    documents: number;
    persons: number;
    vouchers: number;
    letters: number;
    parts: number;
    invoicePos: number;
};
