// Project-Imports

import { CheckAccountTransaction } from "../../types/sevdeskModels.js";

// Code

export type RetrieveTransactionsResponse = {
  objects: CheckAccountTransaction[];
};
export type CreateANewTransactionResponse = {
  id: string;
  objectName: string;
  create: Date;
  update: Date;
  sevClient: {
    id: string;
    objectName: "SevClient";
  };
  valueDate: Date;
  entryDate: Date | null;
  paymtPurpose: string | null;
  amount: string;
  payeePayerName: string | null;
  payeePayerAcctNo: string | null;
  payeePayerBankCode: string | null;
  checkAccount: {
    id: string;
    objectName: "CheckAccount";
  };
  status: "100" | "200" | "300" | "400";
  sourceTransaction: {
    id: string;
    objectName: "CheckAccountTransaction";
  };
  targetTransaction: {
    id: string;
    objectName: "CheckAccountTransaction";
  };
  enshrined: Date;
};
export type FindCheckAccountTransactionByIDResponse = {
  objects: CheckAccountTransaction[];
};
export type UpdateAnExistingTransactionResponse = {
  id: string;
  objectName: string;
  create: Date;
  update: Date;
  sevClient: {
    id: string;
    objectName: "SevClient";
  };
  valueDate: Date;
  entryDate: Date | null;
  paymtPurpose: string | null;
  amount: string;
  payeePayerName: string | null;
  payeePayerAcctNo: string | null;
  payeePayerBankCode: string | null;
  checkAccount: {
    id: string;
    objectName: "CheckAccount";
  };
  status: "100" | "200" | "300" | "400";
  sourceTransaction: {
    id: string;
    objectName: "CheckAccountTransaction";
  };
  targetTransaction: {
    id: string;
    objectName: "CheckAccountTransaction";
  };
  enshrined: Date;
};
export type DeleteATransactionResponse = {
  objects: [null];
};
export type EnshrineResponse = {
  objects: null;
};
