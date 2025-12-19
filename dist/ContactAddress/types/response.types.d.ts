import { ContactAddress } from "./base.types";
export type createContactAddressResponse = ContactAddress;
export type getContactAddressesResponse = {
    objects: ContactAddress[];
};
export type getContactAddressByIdResponse = {
    objects: ContactAddress[];
};
export type updateContactAddressResponse = ContactAddress;
export type deleteContactAddressResponse = {
    objects: [null];
};
