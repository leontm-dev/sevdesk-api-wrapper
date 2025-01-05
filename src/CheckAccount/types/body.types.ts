// Code

export type UpdateAnExistingCheckAccountBody = {
  name: string;
  type: "online" | "offline";
  importType: "CSV" | "MT940" | null;
  currency: string;
  defaultAccount: 1 | 2;
  status: 0 | 100;
  autoMapTransactions: number | null;
  accountingNumber: string;
};
export type CreateANewFileImportAccountBody = {
  name: string;
  importType: "CSV" | "MT940";
  accountingNumber: number | null;
  iban: string | null;
};
export type CreateANewClearingAccountBody = {
  name: string;
  accountingNumber: number | null;
};
