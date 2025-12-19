// Project-Imports

import { VoucherV1 } from "./base.v1.types";

// Code

type V1_VoucherModule_Body_CreateOne_Voucher = {
  /**
   * The voucher object name
   */
  objectName: string;
  mapAll: boolean;
  /**
   * Needs to be provided as timestamp or dd.mm.yyyy
   */
  voucherDate?: string | null;
  /**
   * The contact used in the voucher as a supplier.
If you don't have a contact as a supplier, you can set this object to null.
   */
  supplier?: {
    /**
     * Unique identifier of the contact
     */
    id: number;
    /**
     * Model name, which is 'Contact'
     */
    objectName: "Contact";
  } | null;
  /**
   * The supplier name.
The value you provide here will determine what supplier name is shown for the voucher in case you did not provide a supplier.
   */
  supplierName?: string | null;
  /**
   * The description of the voucher. Essentially the voucher number.
   */
  description?: string | null;
  /**
   * Needs to be timestamp or dd.mm.yyyy
   */
  payDate?: string | null;
  /**
   * Please have a look in status of vouchers to see what the different status codes mean
   */
  status: VoucherV1["status"];
  /**
   * Use this in sevdesk-Update 1.0 (instead of taxRule).

Tax type of the voucher. There are four tax types:

1. default - Umsatzsteuer ausweisen
2. eu - Steuerfreie innergemeinschaftliche Lieferung (Europäische Union)
3. noteu - Steuerschuldnerschaft des Leistungsempfängers (außerhalb EU, z. B. Schweiz)
4. custom - Using custom tax set
5. ss - Not subject to VAT according to §19 1 UStG Tax rates are heavily connected to the tax type used.
   */
  taxType: string;
  /**
   * Defines if your voucher is a credit (C) or debit (D)
   */
  creditDebit: "C" | "D";
  /**
   * Type of the voucher. For more information on the different types, check this
   */
  voucherType: "VOU" | "RV";
  /**
   * specifies which currency the voucher should have. Attention: If the currency differs from the default currency stored in the account, then either the "propertyForeignCurrencyDeadline" or "propertyExchangeRate" parameter must be specified. If both parameters are specified, then the "propertyForeignCurrencyDeadline" parameter is preferred
   */
  currency?: string | null;
  /**
   * Defines the exchange rate day and and then the exchange rate is set from sevdesk. Needs to be provided as timestamp or dd.mm.yyyy
   */
  propertyForeignCurrencyDeadline?: string | null;
  /**
   * Defines the exchange rate
   */
  propertyExchangeRate?: number | null;
  /**
   * Payment deadline of the voucher.
   */
  paymentDeadline?: string | null;
  /**
   * Needs to be provided as timestamp or dd.mm.yyyy
   */
  deliveryDate?: string;
  /**
   * Needs to be provided as timestamp or dd.mm.yyyy
   */
  deliveryDateUntil?: string | null;
  /**
   * The document of the voucher.
   */
  document?: {
    /**
     * Unique identifier of the document
     */
    id: number;
    /**
     * Model name, which is 'Document'
     */
    objectName: "Document";
  } | null;
  /**
   * Cost centre for the voucher
   */
  costCentre?: {
    /**
     * Unique identifier of the cost centre
     */
    id: number;
    /**
     * Model name, which is 'CostCentre'
     */
    objectName: "CostCentre";
  };
};
type V2_VoucherModule_Body_CreateOne_Voucher = {
  /**
   * The voucher object name
   */
  objectName: string;
  mapAll: boolean;
  /**
   * Needs to be provided as timestamp or dd.mm.yyyy
   */
  voucherDate?: string | null;
  /**
   * The contact used in the voucher as a supplier.
If you don't have a contact as a supplier, you can set this object to null.
   */
  supplier?: {
    /**
     * Unique identifier of the contact
     */
    id: number;
    /**
     * Model name, which is 'Contact'
     */
    objectName: "Contact";
  } | null;
  /**
   * The supplier name.
The value you provide here will determine what supplier name is shown for the voucher in case you did not provide a supplier.
   */
  supplierName?: string | null;
  /**
   * The description of the voucher. Essentially the voucher number.
   */
  description?: string | null;
  /**
   * Needs to be timestamp or dd.mm.yyyy
   */
  payDate?: string | null;
  /**
   * Please have a look in status of vouchers to see what the different status codes mean
   */
  status: VoucherV1["status"];
  /**
   * Use this in sevdesk-Update 2.0 (replaces taxType / taxSet).
   */
  taxRule: {
    /**
   * Use this in sevdesk-Update 2.0 (replaces taxType / taxSet).

Defines the vat-regulation. For "Regelbesteuerung" it can be one of:

- 1 - Umsatzsteuerpflichtige Umsätze (tax rates: 0.0, 7.0, 19.0) - replaces "taxType": "default"
- 2 - Ausfuhren (tax rates: 0.0)
- 3 - Innergemeinschaftliche Lieferungen (tax rates: 0.0, 7.0, 19.0) - replaces "taxType": "eu"
- 4 - Steuerfreie Umsätze §4 UStG (tax rates: 0.0)
- 5 - Reverse Charge gem. §13b UStG (tax rates: 0.0)
For small business owner ("Kleinunternehmer") it can be:

- 11 - Steuer nicht erhoben nach §19UStG (tax rates: 0.0) - replaces "taxType": "ss"
   */
    id: "1" | "2" | "3" | "4" | "5" | "11";
    /**
     * Name of the object. Must always be TaxRule
     */
    objectName: "TaxRule";
  };
  /**
   * Defines if your voucher is a credit (C) or debit (D)
   */
  creditDebit: "C" | "D";
  /**
   * Type of the voucher. For more information on the different types, check this
   */
  voucherType: "VOU" | "RV";
  /**
   * specifies which currency the voucher should have. Attention: If the currency differs from the default currency stored in the account, then either the "propertyForeignCurrencyDeadline" or "propertyExchangeRate" parameter must be specified. If both parameters are specified, then the "propertyForeignCurrencyDeadline" parameter is preferred
   */
  currency?: string | null;
  /**
   * Defines the exchange rate day and and then the exchange rate is set from sevdesk. Needs to be provided as timestamp or dd.mm.yyyy
   */
  propertyForeignCurrencyDeadline?: string | null;
  /**
   * Defines the exchange rate
   */
  propertyExchangeRate?: number | null;
  /**
   * ** Use this in sevdesk-Update 2.0 (replaces taxType / taxSet).**

Tax set of the voucher. Needs to be added if you chose the taxType=custom.
   */
  taxSet?: {
    /**
     * Unique identifier of the object
     */
    id: number;
    /**
     * Model name, which is 'TaxSet'
     */
    objectName: "TaxSet";
  } | null;
  /**
   * Payment deadline of the voucher.
   */
  paymentDeadline?: string | null;
  /**
   * Needs to be provided as timestamp or dd.mm.yyyy
   */
  deliveryDate?: string;
  /**
   * Needs to be provided as timestamp or dd.mm.yyyy
   */
  deliveryDateUntil?: string | null;
  /**
   * The document of the voucher.
   */
  document?: {
    /**
     * Unique identifier of the document
     */
    id: number;
    /**
     * Model name, which is 'Document'
     */
    objectName: "Document";
  } | null;
  /**
   * Cost centre for the voucher
   */
  costCentre?: {
    /**
     * Unique identifier of the cost centre
     */
    id: number;
    /**
     * Model name, which is 'CostCentre'
     */
    objectName: "CostCentre";
  };
};
type V1_VoucherModule_Body_CreateOne_VoucherPos = {
  /**
   * The voucher position object name
   */
  objectName: string;
  mapAll: boolean;
  /**
   * The accounting type to which the position belongs.
An accounting type is the booking account to which the position belongs.
For more information, please refer to this section.
   */
  accountingType: {
    /**
     * Unique identifier of the accounting type
     */
    id: number;
    /**
     * Model name, which is 'AccountingType'
     */
    objectName: "AccountingType";
  };
  /**
   * Tax rate of the voucher position.
   */
  taxRate: number;
  /**
   * Determines whether 'sumNet' or 'sumGross' is regarded.
If both are not given, 'sum' is regarded and treated as net or gross depending on 'net'. All positions must be either net or gross, a mixture of the two is not possible.
   */
  net: boolean;
  /**
   * Determines whether position is regarded as an asset which can be depreciated.
   */
  isAsset?: boolean;
  /**
   * Net sum of the voucher position.
Only regarded if 'net' is 'true', otherwise its readOnly.
   */
  sumNet: number;
  /**
   * Gross sum of the voucher position.
Only regarded if 'net' is 'false', otherwise its readOnly.
   */
  sumGross: number;
  /**
   * Comment for the voucher position.
   */
  comment?: string | null;
};
type V2_VoucherModule_Body_CreateOne_VoucherPos = {
  /**
   * The voucher position object name
   */
  objectName: string;
  mapAll: boolean;
  /**
   * Use this in sevdesk-Update 2.0 (replaces accountingType). The account datev to which the position belongs.
An account datev is the booking account to which the position belongs.
For more information, please refer to this section.
   */
  accountDatev: {
    /**
     * Unique identifier of the account datev
     */
    id: number;
    /**
     * Model name, which is 'AccountDatev'
     */
    objectName: "AccountDatev";
  };
  /**
   * Tax rate of the voucher position.
   */
  taxRate: number;
  /**
   * Determines whether 'sumNet' or 'sumGross' is regarded.
If both are not given, 'sum' is regarded and treated as net or gross depending on 'net'. All positions must be either net or gross, a mixture of the two is not possible.
   */
  net: boolean;
  /**
   * Determines whether position is regarded as an asset which can be depreciated.
   */
  isAsset?: boolean;
  /**
   * Net sum of the voucher position.
Only regarded if 'net' is 'true', otherwise its readOnly.
   */
  sumNet: number;
  /**
   * Gross sum of the voucher position.
Only regarded if 'net' is 'false', otherwise its readOnly.
   */
  sumGross: number;
  /**
   * Comment for the voucher position.
   */
  comment?: string | null;
};
export type VoucherModule_Body_CreateOne = {
  /**
   * Voucher model
   */
  voucher: V1_VoucherModule_Body_CreateOne_Voucher &
    V2_VoucherModule_Body_CreateOne_Voucher;
  voucherPosSave: V1_VoucherModule_Body_CreateOne_VoucherPos &
    V2_VoucherModule_Body_CreateOne_VoucherPos;
  voucherPosDelete: {
    /**
     * Id of voucher position
     */
    id: number;
    /**
     * Object name of voucher position
     */
    objectName: string;
  } | null;
  /**
   * Filename of a previously upload file which should be attached.
   */
  fileName: string;
};
type V1_VoucherModule_Body_UpdateOne = {
  /**
   * Needs to be provided as timestamp or dd.mm.yyyy
   */
  voucherDate?: string | null;
  /**
   * The contact used in the voucher as a supplier.
If you don't have a contact as a supplier, you can set this object to null.
   */
  supplier?: {
    /**
     * Unique identifier of the contact
     */
    id: number;
    /**
     * Model name, which is 'Contact'
     */
    objectName: "Contact";
  } | null;
  /**
   * The supplier name.
The value you provide here will determine what supplier name is shown for the voucher in case you did not provide a supplier.
   */
  supplierName?: string | null;
  /**
   * The description of the voucher. Essentially the voucher number.
   */
  description?: string | null;
  /**
   * Needs to be timestamp or dd.mm.yyyy
   */
  payDate?: string | null;
  /**
   * Not supported in sevdesk-Update 2.0.

Please have a look in status of vouchers to see what the different status codes mean
   */
  status?: 50 | 100 | 1000;
  /**
   * Use this in sevdesk-Update 1.0 (instead of taxRule).

Tax type of the voucher. There are four tax types:

1. default - Umsatzsteuer ausweisen
2. eu - Steuerfreie innergemeinschaftliche Lieferung (Europäische Union)
3. noteu - Steuerschuldnerschaft des Leistungsempfängers (außerhalb EU, z. B. Schweiz)
4. custom - Using custom tax set
5. ss - Not subject to VAT according to §19 1 UStG Tax rates are heavily connected to the tax type used.
   */
  taxType?: string;
  /**
   * Defines if your voucher is a credit (C) or debit (D)
   */
  creditDebit?: "C" | "D";
  /**
   * Type of the voucher. For more information on the different types, check this
   */
  voucherType?: "VOU" | "RV";
  /**
   * specifies which currency the voucher should have. Attention: If the currency differs from the default currency stored in the account, then either the "propertyForeignCurrencyDeadline" or "propertyExchangeRate" parameter must be specified. If both parameters are specified, then the "propertyForeignCurrencyDeadline" parameter is preferred
   */
  currency?: string | null;
  /**
   * Defines the exchange rate day and and then the exchange rate is set from sevdesk. Needs to be provided as timestamp or dd.mm.yyyy
   */
  propertyForeignCurrencyDeadline?: string | null;
  /**
   * Defines the exchange rate
   */
  propertyExchangeRate?: number | null;
  /**
   * Payment deadline of the voucher
   */
  paymentDeadline?: string | null;
  /**
   * Needs to be provided as timestamp or dd.mm.yyyy
   */
  deliveryDate?: string | null;
  /**
   * Needs to be provided as timestamp or dd.mm.yyyy
   */
  deliveryDateUntil?: string | null;
  /**
   * The document of the voucher.
   */
  document?: {
    /**
     * Unique identifier of the document
     */
    id: number;
    /**
     * Model name, which is 'Document'
     */
    objectName: "Document";
  } | null;
  /**
   * Cost centre for the voucher
   */
  costCentre?: {
    /**
     * Unique identifier of the cost centre
     */
    id: number;
    /**
     * Model name, which is 'CostCentre'
     */
    objectName: "CostCentre";
  };
};
type V2_VoucherModule_Body_UpdateOne = {
  /**
   * Needs to be provided as timestamp or dd.mm.yyyy
   */
  voucherDate?: string | null;
  /**
   * The contact used in the voucher as a supplier.
If you don't have a contact as a supplier, you can set this object to null.
   */
  supplier?: {
    /**
     * Unique identifier of the contact
     */
    id: number;
    /**
     * Model name, which is 'Contact'
     */
    objectName: "Contact";
  } | null;
  /**
   * The supplier name.
The value you provide here will determine what supplier name is shown for the voucher in case you did not provide a supplier.
   */
  supplierName?: string | null;
  /**
   * The description of the voucher. Essentially the voucher number.
   */
  description?: string | null;
  /**
   * Needs to be timestamp or dd.mm.yyyy
   */
  payDate?: string | null;
  /**
   * Use this in sevdesk-Update 2.0 (replaces taxType / taxSet).
   */
  taxRule?: {
    /**
     * /**
   * Use this in sevdesk-Update 2.0 (replaces taxType / taxSet).

Defines the vat-regulation. For "Regelbesteuerung" it can be one of:

- 1 - Umsatzsteuerpflichtige Umsätze (tax rates: 0.0, 7.0, 19.0) - replaces "taxType": "default"
- 2 - Ausfuhren (tax rates: 0.0)
- 3 - Innergemeinschaftliche Lieferungen (tax rates: 0.0, 7.0, 19.0) - replaces "taxType": "eu"
- 4 - Steuerfreie Umsätze §4 UStG (tax rates: 0.0)
- 5 - Reverse Charge gem. §13b UStG (tax rates: 0.0)
For small business owner ("Kleinunternehmer") it can be:

- 11 - Steuer nicht erhoben nach §19UStG (tax rates: 0.0) - replaces "taxType": "ss"
   */
    id: "1" | "2" | "3" | "4" | "5" | "11";
    /**
     * Name of the object. Must always be TaxRule
     */
    objectName: "TaxRule";
  };
  /**
   * Defines if your voucher is a credit (C) or debit (D)
   */
  creditDebit?: "C" | "D";
  /**
   * Type of the voucher. For more information on the different types, check this
   */
  voucherType?: "VOU" | "RV";
  /**
   * specifies which currency the voucher should have. Attention: If the currency differs from the default currency stored in the account, then either the "propertyForeignCurrencyDeadline" or "propertyExchangeRate" parameter must be specified. If both parameters are specified, then the "propertyForeignCurrencyDeadline" parameter is preferred
   */
  currency?: string | null;
  /**
   * Defines the exchange rate day and and then the exchange rate is set from sevdesk. Needs to be provided as timestamp or dd.mm.yyyy
   */
  propertyForeignCurrencyDeadline?: string | null;
  /**
   * Defines the exchange rate
   */
  propertyExchangeRate?: number | null;
  /**
   * Use this in sevdesk-Update 2.0 (replaces taxType / taxSet).

Tax set of the voucher. Needs to be added if you chose the taxType=custom.
   */
  taxSet?: {
    /**
     * Unique identifier of the object
     */
    id: number;
    /**
     * Model name, which is 'TaxSet'
     */
    objectName: "TaxSet";
  } | null;
  /**
   * Payment deadline of the voucher
   */
  paymentDeadline?: string | null;
  /**
   * Needs to be provided as timestamp or dd.mm.yyyy
   */
  deliveryDate?: string | null;
  /**
   * Needs to be provided as timestamp or dd.mm.yyyy
   */
  deliveryDateUntil?: string | null;
  /**
   * The document of the voucher.
   */
  document?: {
    /**
     * Unique identifier of the document
     */
    id: number;
    /**
     * Model name, which is 'Document'
     */
    objectName: "Document";
  } | null;
  /**
   * Cost centre for the voucher
   */
  costCentre?: {
    /**
     * Unique identifier of the cost centre
     */
    id: number;
    /**
     * Model name, which is 'CostCentre'
     */
    objectName: "CostCentre";
  };
};
export type VoucherModule_Body_UpdateOne = V1_VoucherModule_Body_UpdateOne &
  V2_VoucherModule_Body_UpdateOne;
export type VoucherModule_Body_BookOne = {
  /**
   * Amount which should be booked. Can also be a partial amount.
   */
  amount: number;
  /**
   * The booking date. Most likely the current date.
   */
  date: string;
  /**
   * Define a type for the booking.
The following type abbreviations are available (abbreviation <-> meaning).

- FULL_PAYMENT <-> Normal booking
- N <-> Partial booking (historically used for normal booking)
- CB <-> Reduced amount due to discount (skonto)
- CF <-> Reduced/Higher amount due to currency fluctuations (deprecated)
- O <-> Reduced/Higher amount due to other reasons
- OF <-> Higher amount due to reminder charges
- MTC <-> Reduced amount due to the monetary traffic costs
   */
  type: "FULL_PAYMENT" | "N" | "CB" | "CF" | "O" | "OF" | "MTC";
  /**
   * The check account on which should be booked.
   */
  checkAccount: {
    /**
     * The id of the check account on which should be booked.
     */
    id: number;
    /**
     * Internal object name which is 'CheckAccount'.
     */
    objectName: "CheckAccount";
  };
  /**
   * The check account transaction on which should be booked.
The transaction will be linked to the voucher.
Providing a transaction is required for online checkaccounts (like you would select an existing transaction in the UI).
   */
  checkAccountTransaction?: {
    /**
     * The id of the check account transaction on which should be booked.
     */
    id: number;
    /**
     * Internal object name which is 'CheckAccountTransaction'.
     */
    objectName: "CheckAccountTransaction";
  };
  /**
   * Determines if a feed is created for the booking process.
   */
  createFeed?: boolean;
};
