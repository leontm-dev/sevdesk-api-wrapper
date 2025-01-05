// Project-Imports

import { AccountingContact } from "../../types/sevdeskModels.js";

// Code

export type RetrieveAccountingContactResponse = {
  objects: AccountingContact[];
};
export type CreateANewAccountingContactResponse = {
  id: string;
  objectName: string;
  create: Date;
  update: Date;
  contact: {
    id: string;
    objectName: "Contact";
  };
  sevClient: {
    id: string;
    objectName: "SevClient";
  };
  debitorNumber: string;
  creditorNumber: string;
};
export type FindAccountingContactByIDResponse = {
  objects: AccountingContact[];
};
export type UpdateAnExistingAccountingContactResponse = {
  id: string;
  objectName: string;
  create: Date;
  update: Date;
  contact: {
    id: string;
    objectName: "Contact";
  };
  sevClient: {
    id: string;
    objectName: "SevClient";
  };
  debitorNumber: string;
  creditorNumber: string;
};
export type DeletesAnAccountingContactResponse = {
  objects: [null];
};
