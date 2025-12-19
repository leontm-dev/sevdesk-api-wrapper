import { Contact } from "./base.types";
export type getNextCustomerNumberResponse = {
    objects: string;
};
export type findContactsByCustomFieldValueResponse = {
    objects: Contact[];
};
export type checkIfACustomerNumberIsAvailableResponse = {
    objects: boolean;
};
export type getContactsResponse = {
    objects: Contact[];
};
export type createContactResponse = Contact;
export type getContactByIdResponse = {
    objects: Contact[];
};
export type updateContactResponse = Contact;
export type deleteContactResponse = {
    objects: [null];
};
export type getContactTabsItemCountByIdResponse = {
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
