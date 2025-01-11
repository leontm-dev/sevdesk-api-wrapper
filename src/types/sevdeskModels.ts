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
export type CommunicationWay = {
  id: string;
  objectName: string;
  create: Date;
  update: Date;
  contact: {
    id: string;
    objectName: "Contact";
  };
  type: "EMAIL" | "PHONE" | "WEB" | "MOBILE";
  value: string;
  key: {
    id: string;
    objectName: "CommunicationWayKey";
  };
  main: string;
  sevClient: {
    id: string;
    objectName: "SevClient";
  };
};
export type Contact = {
  id: string;
  objectName: string;
  create: Date;
  update: Date;
  name: string;
  status: string;
  customerNumber: string;
  parent: {
    id: string;
    objectName: "Contact";
  };
  surename: string;
  familyname: string;
  titel: string;
  category: {
    id: string;
    objectName: "Category";
  };
  description: string;
  academicTitle: string;
  gender: string;
  sevClient: {
    id: string;
    objectName: "SevClient";
  };
  name2: string;
  birthday: Date;
  vatNumber: string;
  bankAccount: string;
  bankNumber: string;
  defaultCashbackTime: string;
  defaultCashbackPercent: string;
  defaultTimeToPay: string;
  taxNumber: string;
  taxOffice: string;
  exemptVat: string;
  defaultDiscountAmount: string;
  defaultDiscountPercent: string;
  buyerReference: string;
  governmentAgency: string;
};
export type ContactAddress = {
  id: number;
  objectName: string;
  create: Date;
  update: Date;
  contact: {
    id: number;
    objectName: "Contact";
  };
  street: string | null;
  zip: string | null;
  city: string | null;
  country: {
    id: number;
    objectName: "StaticCountry";
  };
  category: {
    id: number;
    objectName: "Category";
  } | null;
  name: string | null;
  sevClient: {
    id: number;
    objectName: "SevClient";
  };
  name2: string | null;
  name3: string | null;
  name4: string | null;
};
