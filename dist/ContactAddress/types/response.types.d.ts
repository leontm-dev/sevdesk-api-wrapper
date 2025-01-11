import { ContactAddress } from "../../types/sevdeskModels.js";
export type CreateANewContactAddressResponse = ContactAddress;
export type RetrieveContactAddressesResponse = {
    objects: ContactAddress[];
};
export type FindContactAddressByIDResponse = {
    objects: ContactAddress[];
};
export type UpdateAExistingContactAddressResponse = ContactAddress;
export type DeletesAContactAddressResponse = {
    objects: [null];
};
