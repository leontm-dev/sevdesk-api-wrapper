import { AccountingContact } from "./base.types";
export type getAccountingContactResponse = {
    objects: AccountingContact[];
};
export type createAccountingContactResponse = AccountingContact;
export type getAccountingContactByIdResponse = {
    objects: AccountingContact[];
};
export type updateAccountingContactResponse = AccountingContact;
export type deleteAccountingContactResponse = {
    objects: [null];
};
