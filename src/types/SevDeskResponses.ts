export type RetrieveBookkeepingSystemVersionResponse = {
  objects: {
    version: "1.0" | "2.0";
  };
};
export type CheckAccount = {
  id: string;
  objectName: "CheckAccount";
  create: Date;
  update: Date;
  sevClient: {
    id: string;
    objectName: "SevClient";
  };
  name: string;
  iban: string;
  type: "online" | "offline";
  importType: "CSV" | "MT940" | null;
  defaultAccount: string;
  status: "0" | "100";
  bankServer: string | null;
  autoMapTransactions: string | null;
  accountingNumber: string;
};
export type RetrieveCheckAccountsResponse = {
  objects: CheckAccount[];
};
export type CreateANewFileImportAccountResponse = {
  objects: CheckAccount;
};
export type CreateANewFileImportAccountBody = {
  name: string;
  importType: "CSV" | "MT940";
  accountingNumber: number | null;
  iban: string | null;
};
export type CreateANewClearingAccountResponse = {
  objects: CheckAccount;
};
export type CreateANewClearingAccountBody = {
  name: string;
  accountingNumber: number | null;
};
export type FindCheckAccountByIdResponse = {
  objects: CheckAccount[];
};
export type updateAnExistingCheckAccountBody = {
  name: string;
  type: "online" | "offline";
  importType: "CSV" | "MT940" | null;
  currency: string;
  defaultAccount: 1 | 2;
  status: 0 | 100;
  autoMapTransactions: number | null;
  accountingNumber: string;
};
export type updateAnExistingCheckAccountResponse = {
  id: string;
  objectName: "CheckAccount";
  create: Date;
  update: Date;
  sevClient: {
    id: string;
    objectName: "SevClient";
  };
  name: string;
  iban: string | null;
  type: "online" | "offline";
  importType: "CSV" | "MT940" | null;
  currency: string;
  defaultAccount: string;
  status: 0 | 100;
  bankServer: string | null;
  autoMapTransactions: string | null;
  accountingNumber: string;
};
