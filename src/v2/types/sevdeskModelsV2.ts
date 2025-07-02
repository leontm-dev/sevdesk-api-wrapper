// Project-Imports

import { sevClient } from "../../types/sevdeskModels";

// Code

export type VoucherPosV2 = {
  id: string;
  objectName: "VoucherPos";
  create: Date;
  update: Date;
  sevClient: sevClient;
  voucher: {
    id: string;
    objectName: "Voucher";
  };
  accountDatev: {
    id: string;
    objectName: "AccountDatev";
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
