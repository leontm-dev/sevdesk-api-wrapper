// Project-Imports

import { ContactAddress } from "../../types/sevdeskModels.js";

// Code

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
