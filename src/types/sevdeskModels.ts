export type CheckAccount = {
  id: string;
  objectName: "CheckAccount";
  create: string;
  update: string;
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
export type ContactField = {
  id: string;
  objectName: "ContactCustomField";
  create: Date;
  update: Date;
  sevClient: {
    id: string;
    objectName: "SevClient";
  };
  contact: {
    id: string;
    objectName: "Contact";
  };
  contactCustomFieldSetting: ContactCustomFieldSetting;
  value: string;
};
export type ContactCustomFieldSetting = {
  id: string;
  objectName: "ContactCustomFieldSetting";
  create: Date;
  update: Date;
  sevClient: {
    id: string;
    objectName: "SevClient";
  };
  name: string;
  identifier: string;
  description: string;
};

export type CreditNote = {
  id: string;
  objectName: string;
  create: Date;
  update: Date;
  creditNoteNumber: string | null;
  contact: {
    id: string;
    objectName: "Contact";
  } | null;
  creditNoteDate: Date;
  status: "100" | "200" | "750" | "1000";
  header: string | null;
  headText: string | null;
  footText: string | null;
  addressCountry: {
    id: string;
    objectName: "StaticCountry";
  } | null;
  createUser: {
    id: string;
    objectName: "SevUser";
  };
  sevClient: {
    id: string;
    objectName: "SevClient";
  };
  deliveryDate: Date;
  smallSettlement: boolean | null;
  contactPerson: {
    id: string;
    objectName: "SevUser";
  } | null;
  taxRate: string | null;
  taxRule: {
    id: "1" | "2" | "3" | "4" | "5" | "11" | "17" | "18" | "19" | "20" | "21";
    objectName: "TaxRule";
  };
  taxText: string | null;
  sendDate: Date | null;
  address: string | null;
  currency: string | null;
  sumNext: string;
  sumTax: string;
  sumGross: string;
  sumDiscounts: string;
  sumNetForeignCurrency: string;
  sumTaxForeignCurrency: string;
  sumGrossForeignCurrency: string;
  sumDiscountsForeignCurrency: string;
  customerInternalNote: string | null;
  showNet: boolean;
  sendType: "VPR" | "VPDF" | "VM" | "VP";
};
export type CreditNotePos = {
  id: string;
  objectName: "CreditNotePos";
  create: Date;
  update: Date;
  creditNote: {
    id: string;
    objectName: "creditNote";
  };
  part: {
    id: string;
    objectName: "Part";
  };
  quantity: string;
  price: string | null;
  priceNet: string | null;
  priceTax: string | null;
  priceGross: string | null;
  name: string | null;
  unity: {
    id: string;
    objectName: "Unity";
  };
  sevClient: {
    id: string;
    objectName: "SevClient";
  };
  positionNumber: string | null;
  text: string | null;
  discount: string | null;
  optional: boolean | null;
  taxRate: string;
  sumDiscount: string | null;
};
export type Discounts = {
  id: number;
  objectName: "Discounts";
  create: Date;
  update: Date;
  sevClient: string;
  discount: string;
  text: string;
  percentage: string;
  value: string;
  isNet: string;
};
export type Tag = {
  id: string;
  objectName: "Tag";
  additionalInformation: string | null;
  create: Date;
  name: string;
  sevClient: sevClient;
};
export type sevClient = {
  id: string;
  objectName: "SevClient";
};
export type VoucherPosV1 = {
  id: string;
  objectName: "VoucherPos";
  create: Date;
  update: Date;
  sevClient: sevClient;
  voucher: {
    id: string;
    objectName: "Voucher";
  };
  accountingType: {
    id: string;
    objectName: "AccountingType";
  };
  estimatedAccountingType: {
    id: string;
    objectName: "AccountingType";
  };
  taxRate: string;
  net: boolean;
  isAsset: boolean;
  sumNet: string;
  sumTax: string;
  sumGross: string;
  sumNetAccounting: string;
  sumTaxAccounting: string;
  sumGrossAccounting: string;
  comment: string | null;
};
export type VoucherV1 = {
  id: string;
  objectName: "Voucher";
  mapAll: boolean;
  create: Date;
  update: Date;
  sevClient: sevClient;
  createUser: {
    id: string;
    objectName: "SevUser";
  };
  voucherDate: Date | null;
  supplier: {
    id: string;
    objectName: "Contact";
  } | null;
  supplierName: string | null;
  description: string | null;
  document: {
    id: string;
    objectName: "Document";
  } | null;
  payDate: Date | null;
  status: "50" | "100" | "1000";
  sumNet: string;
  sumTax: string;
  sumGross: string;
  sumNetAccounting: string;
  sumTaxAccounting: string;
  sumGrossAccounting: string;
  sumDiscounts: string;
  sumDiscountsForeignCurrency: string;
  paidAmount: number | null;
  taxType: string | null;
  creditDebit: "C" | "D" | null;
  costCentre: {
    id: string;
    objectName: "CostCentre";
  };
  voucherType: "VOU" | "RV" | null;
  currency: string | null;
  propertyForeignCurrenyDeadline: Date | null;
  propertyExchangeRate: string | null;
  recurringInterval:
    | "P0Y0M1W"
    | "P0Y0M2W"
    | "P0Y1M0W"
    | "P0Y3M0W"
    | "P0Y6M0W"
    | "P1Y0M0W"
    | "P2Y0M0W"
    | "P3Y0M0W"
    | "P4Y0M0W"
    | "P5Y0M0W"
    | null;
  recurringStartDate: Date | null;
  recurringNextVoucher: Date | null;
  recurringLastVoucher: Date | null;
  recurringEndDate: Date | null;
  enshrined: Date;
  paymentDeadline: Date | null;
  deliveryDate: Date;
  deliveryDateUntil: Date | null;
};
