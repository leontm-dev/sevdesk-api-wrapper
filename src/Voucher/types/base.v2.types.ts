// Project-Imports

import { SevClient, SevUser } from "../../types/models.types";

// Code

export type VoucherV2 = {
  /**
   * The voucher id
   */
  id: string;
  /**
   * The voucher object name
   */
  objectName: string;
  mapAll: boolean;
  /**
   * Date of voucher creation
   */
  create: string;
  /**
   * Date of last voucher update
   */
  update: string;
  /**
   * Client to which voucher belongs. Will be filled automatically
   */
  sevClient: SevClient;
  /**
   * User who created the voucher. Will be filled automatically.
   */
  createUser: SevUser;
  /**
   * Needs to be provided as timestamp or dd.mm.yyyy
   */
  voucherDate: string | null;
  /**
   * The contact used in the voucher as a supplier.
If you don't have a contact as a supplier, you can set this object to null.
   */
  supplier: {
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
  supplierName: string | null;
  /**
   * The description of the voucher. Essentially the voucher number.
   */
  description: string | null;
  /**
   * The document of the voucher.
   */
  document: {
    /**
     * Unique identifier of the document
     */
    id: string;
    /**
     * Model name, which is 'Document'
     */
    objectName: "Document";
  } | null;
  /**
   * Needs to be timestamp or dd.mm.yyyy
   */
  payDate: string | null;
  /**
   * Please have a look in status of vouchers to see what the different status codes mean
   */
  status: 50 | 100 | 1000;
  /**
   * Net sum of the voucher
   */
  sumNet: string;
  /**
   * Tax sum of the voucher
   */
  sumTax: string;
  /**
   * Gross sum of the voucher
   */
  sumGross: string;
  /**
   * Net accounting sum of the voucher. Is usually the same as sumNet
   */
  sumNetAccounting: string;
  /**
   * Tax accounting sum of the voucher. Is usually the same as sumTax
   */
  sumTaxAccounting: string;
  /**
   * Gross accounting sum of the voucher. Is usually the same as sumGross
   */
  sumGrossAccounting: string;
  /**
   * Sum of all discounts in the voucher
   */
  sumDiscounts: string;
  /**
   * Discounts sum of the voucher in the foreign currency
   */
  sumDiscountsForeignCountry: string;
  /**
   * Amount which has already been paid for this voucher by the customer
   */
  paidAmount: number | null;
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
   * Cost centre for the voucher
   */
  costCentre: {
    /**
     * Unique identifier of the cost centre
     */
    id: string;
    /**
     * Model name, which is 'CostCentre'
     */
    objectName: "CostCentre";
  };
  /**
   * Type of the voucher. For more information on the different types, check this
   */
  voucherType: "VOU" | "RV" | null;
  /**
   * specifies which currency the voucher should have. Attention: If the currency differs from the default currency stored in the account, then either the "propertyForeignCurrencyDeadline" or "propertyExchangeRate" parameter must be specified. If both parameters are specified, then the "propertyForeignCurrencyDeadline" parameter is preferred
   */
  currency: string | null;
  /**
   * Defines the exchange rate day and and then the exchange rate is set from sevdesk. Needs to be provided as timestamp or dd.mm.yyyy
   */
  propertyForeignCurrencyDeadline: string | null;
  /**
   * Defines the exchange rate
   */
  propertyExchangeRate: string | null;
  /**
   * The DateInterval in which recurring vouchers are generated.
Necessary attribute for all recurring vouchers.
   */
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
  /**
     * The date when the recurring vouchers start being generated.
Necessary attribute for all recurring vouchers.
     */
  recurringStartDate: string | null;
  /**
   * The date when the next voucher should be generated.
Necessary attribute for all recurring vouchers.
   */
  recurringNextVoucher: string | null;
  /**
   * The date when the last voucher was generated.
   */
  recurringLastVoucher: string | null;
  /**
   * The date when the recurring vouchers end being generated.
Necessary attribute for all recurring vouchers.
   */
  recurringEndDate: string | null;
  /**
   * Enshrined vouchers cannot be changed. Can only be set via Voucher/{voucherId}/enshrine. This operation cannot be undone.
   */
  enshrined: string;
  /**
   * Use this in sevdesk-Update 2.0 (replaces taxType / taxSet).

Tax set of the voucher. Needs to be added if you chose the taxType=custom.
   */
  taxSet: {
    /**
     * Unique identifier of the object
     */
    id: string;
    /**
     * Model name, which is 'TaxSet'
     */
    objectName: "TaxSet";
  } | null;
  /**
   * Payment deadline of the voucher.
   */
  paymentDeadline: string | null;
  /**
   * Needs to be provided as timestamp or dd.mm.yyyy
   */
  deliveryDate: string;
  /**
   * Needs to be provided as timestamp or dd.mm.yyyy
   */
  deliveryDateUntil: string | null;
};
