// Project-Imports

import { CheckAccount } from "./base.types";

// Code

export type getCheckAccountsResponse = {
  objects: CheckAccount[];
};
export type createFileImportAccountResponse = {
  objects: CheckAccount;
};
export type createClearingAccountResponse = {
  objects: CheckAccount;
};
export type getCheckAccountByIdResponse = {
  objects: CheckAccount[];
};
export type updateCheckAccountResponse = CheckAccount;
export type deleteCheckAccountResponse = {
  objects: [null];
};
export type getBalanceAtDateResponse = {
  objects: string;
};
