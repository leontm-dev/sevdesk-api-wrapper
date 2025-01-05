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
export type UpdateAnExistingCheckAccountResponse = {
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
export type DeleteACheckAccountResponse = {
  objects: [null];
};
export type GetTheBalanceAtAGivenDateResponse = {
  objects: string;
};
export type CheckAccountTransaction = {
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
export type RetrieveTransactionsResponse = {
  objects: CheckAccountTransaction[];
};
export type CreateANewTransactionBody = {
  valueDate: Date;
  entryDate?: Date | null;
  paymtPurpose?: string | null;
  amount: number;
  payeePayerName: string | null;
  payeePayerAcctNo?: string | null;
  payeePayerBankCode?: string | null;
  checkAccount: {
    id: number;
    objectName: "CheckAccount";
  };
  status: "100" | "200" | "300" | "400";
  sourceTransaction?: {
    id: number;
    objectName: "CheckAccountTransaction";
  };
  targetTransaction?: {
    id: number;
    objectName: "CheckAccountTransaction";
  };
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
export type UpdateAnExistingTransactionBody = {
  valueDate: Date;
  entryDate: Date | null;
  paymtPurpose: string;
  amount: number | null;
  payeePayerName: string | null;
  checkAccount: {
    id: number;
    objectName: "CheckAccount";
  };
  status: 100 | 200 | 300 | 400;
  sourceTransaction: {
    id: number;
    objectName: "CheckAccountTransaction";
  } | null;
  targetTransaction: {
    id: number;
    objectName: "CheckAccountTransaction";
  } | null;
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
export type AccountingContact = {
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
export type RetrieveAccountingContactResponse = {
  objects: AccountingContact[];
};
export type CreateANewAccountingContactBody = {
  contact: {
    id: number;
    objectName: "Contact";
  };
  debitorNumber: number | null;
  creditorNumber: number | null;
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
export type UpdateAnExistingAccountingContactBody = {
  contact: {
    id: number;
    objectName: "Contact";
  };
  debitorNumber: number | null;
  creditorNumber: number | null;
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
