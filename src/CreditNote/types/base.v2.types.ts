// Project-Imports

import { SevClient } from "../../types/models.types";

// Code

export type CreditNoteV2 = {
  /**
   * The creditNote id
   */
  id: string;
  /**
   * The creditNote object name
   */
  objectName: string;
  /**
   * Date of creditNote creation
   */
  create: string;
  /**
   * Date of last creditNote update
   */
  update: string;
  /**
   * The creditNote number
   */
  creditNoteNumber: string | null;
  /**
   * The contact used in the creditNote
   */
  contact: {
    /**
     * Unique identifier of the contact
     */
    id: string;
    /**
     * Model name, which is 'Contact'
     */
    objectName: "Contact";
  } | null;
  /**
   * The credit note date
   */
  creditNoteDate: string;
  /**
   * Please have a look in status of credit note to see what the different status codes mean
   * @link https://api.sevdesk.de/#tag/CreditNote/Status-of-credit-notes
   */
  status: "100" | "200" | "750" | "1000";
  /**
   * Normally consist of prefix plus the creditNote number
   */
  header: string | null;
  /**
   * Certain html tags can be used here to format your text
   */
  headText: string | null;
  /**
   * Certain html tags can be used here to format your text
   */
  footText: string | null;
  /**
   * Can be omitted as complete address is defined in address attribute
   */
  addressCountry: {
    /**
     * Unique identifier of the country
     */
    id: string;
    /**
     * Model name, which is 'StaticCountry'
     */
    objectName: "StaticCountry";
  } | null;
  /**
   * Will be filled automatically by our system and can't be changed
   */
  createUser: {
    /**
     * Unique identifier of the user
     */
    id: string;
    /**
     * Model name, which is 'SevUser'
     */
    objectName: "SevUser";
  };
  /**
   * Client to which creditNote belongs. Will be filled automatically
   */
  sevClient: SevClient;
  /**
   * Timestamp. This can also be a date range if you also use the attribute deliveryDateUntil
   */
  deliveryDate: string;
  /**
   * Defines if the client uses the small settlement scheme. If yes, the creditNote must not contain any vat
   */
  smallSettlement: boolean | null;
  /**
   * The user who acts as a contact person for the creditNote
   */
  contactPerson: {
    /**
     * Unique identifier of the user
     */
    id: string;
    /**
     * Model name, which is 'SevUser'
     */
    objectName: "SevUser";
  } | null;
  /**
   * This is not used anymore. Use the taxRate of the individual positions instead.
   */
  taxRate: string | null;
  /**
   * See list of available VAT rules.
   */
  taxRule: {
    id: "1" | "2" | "3" | "4" | "5" | "11" | "17" | "18" | "19" | "20" | "21";
    /**
     * Name of the object. Must always be TaxRule
     */
    objectName: "TaxRule";
  };
  /**
   * A common tax text would be 'Umsatzsteuer 19%'
   */
  taxText: string | null;
  /**
   * The date the creditNote was sent to the customer
   */
  sendDate: string | null;
  /**
   * Complete address of the recipient including name, street, city, zip and country.
Line breaks can be used and will be displayed on the invoice pdf.
   */
  address: string | null;
  /**
   * Currency used in the creditNote. Needs to be currency code according to ISO-4217
   */
  currency: string | null;
  /**
   * Net sum of the creditNote
   */
  sumNext: string;
  /**
   * Tax sum of the creditNote
   */
  sumTax: string;
  /**
   * Gross sum of the creditNote
   */
  sumGross: string;
  /**
   * Sum of all discounts in the creditNote
   */
  sumDiscounts: string;
  /**
   * Net sum of the creditNote in the foreign currency
   */
  sumNetForeignCurrency: string;
  /**
   * Tax sum of the creditNote in the foreign currency
   */
  sumTaxForeignCurrency: string;
  /**
   * Gross sum of the creditNote in the foreign currency
   */
  sumGrossForeignCurrency: string;
  /**
   * Discounts sum of the creditNote in the foreign currency
   */
  sumDiscountsForeignCurrency: string;
  /**
   * Internal note of the customer. Contains data entered into field 'Referenz/Bestellnummer'
   */
  customerInternalNote: string | null;
  /**
   * If true, the net amount of each position will be shown on the creditNote. Otherwise gross amount
   */
  showNet: boolean;
  /**
   * Type which was used to send the creditNote. IMPORTANT: Please refer to the creditNote section of the * API-Overview to understand how this attribute can be used before using it!
   */
  sendType: "VPR" | "VPDF" | "VM" | "VP";
};
