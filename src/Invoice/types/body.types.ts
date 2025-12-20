// Project-Imports

import { SevUser } from "../../types/models.types";

// Code

export type InvoiceModule_Body_CreateOne = {
  /**
   * Invoice model
   */
  invoice: {
    /**
     * The invoice id. Required if you want to create or update an invoice position for an existing invoice
     */
    id?: number | null;
    /**
     * The invoice object name.
     */
    objectName?: string;
    /**
     * The invoice number
     */
    invoiceNumber?: string | null;
    /**
     * The contact used in the invoice
     */
    contact: {
      /**
       * Unique identifier of the contact
       */
      id: number;
      /**
       * Model name, which is 'Contact'
       */
      objectName: "Contact";
    };
    /**
     * The user who acts as a contact person for the invoice
     */
    contactPerson: SevUser;
    /**
     * Needs to be provided as timestamp or dd.mm.yyyy

Requirements:

- For final invoices (invoiceType = 'ER'), the invoiceDate must be later than or equal to the invoiceDate of related advance (invoiceType = 'AR') / partial (invoiceType = 'TR') invoices.
     */
    invoiceDate: string;
    /**
     * Normally consist of prefix plus the invoice number
     */
    header?: string | null;
    /**
     * Certain html tags can be used here to format your text
     */
    headText?: string | null;
    /**
     * Certain html tags can be used here to format your text
     */
    footText?: string | null;
    /**
     * The time the customer has to pay the invoice in days
     */
    timeToPay?: number | null;
    /**
     * If you want to give a discount, define the percentage here. Otherwise provide zero as value
     */
    discount: number;
    /**
     * Complete address of the recipient including name, street, city, zip and country. * Line breaks can be used and will be displayed on the invoice pdf.
     */
    address?: string | null;
    /**
     * Can be omitted as complete address is defined in address attribute
     */
    addressCountry: {
      /**
       * Unique identifier of the country
       */
      id: number;
      /**
       * Model name, which is 'StaticCountry'
       */
      objectName: "StaticCountry";
    };
    /**
     * Needs to be timestamp or dd.mm.yyyy
     */
    payDate?: string | null;
    /**
     * Timestamp. This can also be a date range if you also use the attribute deliveryDateUntil
     */
    delvieryDate?: string | null;
    /**
     * If the delivery date should be a time range, another timestamp can be provided in this attribute * to define a range from timestamp used in deliveryDate attribute to the timestamp used here.
     */
    deliveryDateUntil?: number | null;
    /**
     * Please have a look in our Types and status of invoices to see what the different status codes mean
     */
    status: "50" | "100" | "200" | "750" | "1000";
    /**
     * Defines if the client uses the small settlement scheme. If yes, the invoice must not contain any vat
     */
    smallSettlement?: boolean | null;
    /**
     * This is not used anymore. Use the taxRate of the individual positions instead.
     */
    taxRate: number;
    /**
     * Use this in sevdesk-Update 2.0 (replaces taxType / taxSet).

See list of available VAT rules.
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
    taxText: string;
    /**
     * Use this in sevdesk-Update 1.0 (instead of taxRule).

Tax type of the invoice. There are four tax types:

1. default - Umsatzsteuer ausweisen
2. eu - Steuerfreie innergemeinschaftliche Lieferung (Europäische Union)
3. noteu - Steuerschuldnerschaft des Leistungsempfängers (außerhalb EU, z. B. Schweiz)
4. custom - Using custom tax set
5. ss - Not subject to VAT according to §19 1 UStG Tax rates are heavily connected to the tax type used.
     */
    taxType: "default" | "eu" | "noteu" | "custom";
    /**
     * Use this in sevdesk-Update 1.0 (instead of taxRule).

Tax set of the invoice. Needs to be added if you chose the tax type custom
     */
    taxSet?: {
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
     * Payment method used for the invoice
     */
    paymentMethod?: {
      /**
       * Unique identifier of the payment method
       */
      id: number;
      /**
       * Model name, which is 'PaymentMethod'
       */
      objectName?: "PaymentMethod";
    };
    /**
     * The date the invoice was sent to the customer
     */
    sendDate?: string | null;
    /**
     * Type of the invoice. For more information on the different types, check this section
     */
    invoiceType: "RE" | "WKR" | "SR" | "MA" | "TR" | "AR" | "ER";
    /**
     * Currency used in the invoice. Needs to be currency code according to ISO-4217
     */
    currency: string;
    /**
     * If true, the net amount of each position will be shown on the invoice. Otherwise gross amount
     */
    showNet?: boolean;
    /**
     * Type which was used to send the invoice.
     */
    sendType?: "VPR" | "VPDF" | "VM" | "VP" | null;
    /**
     * Origin of the invoice. Could f.e. be an order
     */
    origin?: {
      /**
       * Unique identifier of the object
       */
      id: string;
      /**
       * Model name, which could be 'Order'
       */
      objectName: string;
    } | null;
    /**
     * Internal note of the customer. Contains data entered into field 'Referenz/Bestellnummer'
     */
    customerInternalNote?: string | null;
    /**
     * If true, the invoice will be created as e-invoice.

To create a valid e-invoice some extra data are required

- sevClient.addressStreet
- sevClient.addressZip
- sevClient.addressCity
- sevClient.bankIban
- sevClient.bankBic
- sevClient.contactEmail
- sevClient.contactPhone
- sevClient.taxNumber
- sevClient.vatNumber
- contact.buyerReference
- contact.email
- invoice.paymentMethod
- invoice.addressStreet
- invoice.addressZip
- invoice.addressCity
- invoice.addressCountry
- invoice.contact
     */
    propertyIsEInvoice?: boolean | null;
    mapAll: boolean;
  };
  invoicePosSave?: {
    /**
     * The invoice position id. Required if you want to update an invoice position for an existing invoice
     */
    id?: number;
    /**
     * The invoice position object name
     */
    objectName: string;
    mapAll: boolean;
    /**
     * Part from your inventory which is used in the position.
     */
    part?: {
      /**
       * Unique identifier of the part
       */
      id: number;
      /**
       * Model name, which is 'Part'
       */
      objectName: "Part";
    };
    /**
     * Quantity of the article/part
     */
    quantiyty: number;
    /**
     * Price of the article/part. Is either gross or net, depending on the sevdesk account setting.
     */
    price?: number | null;
    /**
     * Name of the article/part.
     */
    name?: string | null;
    /**
     * The unit in which the positions part is measured
     */
    unity: {
      /**
       * Unique identifier of the unit
       */
      id: number;
      /**
       * Model name, which is 'Unity'
       */
      objectName: "Unity";
    };
    /**
     * Position number of your position. Can be used to order multiple positions.
     */
    positionNumber?: number | null;
    /**
     * A text describing your position.
     */
    text?: string | null;
    /**
     * An optional discount of the position.
     */
    discount?: number | null;
    /**
     * Tax rate of the position.
     */
    taxRate: number;
    /**
     * Gross price of the part
     */
    priceGross?: number | null;
    /**
     * Tax on the price of the part
     */
    priceTax?: number | null;
  }[];
  invoicePosDelete?: {
    /**
     * Id of invoice position
     */
    id: number;
    /**
     * Object name of invoice position
     */
    objectName: string;
  } | null;
  /**
   * Filename of a previously upload file which should be attached.
   */
  filename?: string;
  discountSave?: {
    /**
     * Defines if this is a discount or a surcharge
     */
    discount?: boolean;
    /**
     * A text for your discount
     */
    text?: string;
    /**
     * Defines if this is a percentage or an absolute discount
     */
    percentage?: boolean;
    /**
     * Value of the discount
     */
    value?: number;
    /**
     * Object name of the discount
     */
    objectName?: string;
    /**
     * Internal param
     */
    mapAll?: boolean;
  }[];
  discountDelete?: {
    /**
     * ID of discount to delete
     */
    id?: number;
    /**
     * Object name of discount
     */
    objectName?: string;
  };
};
export type InvoiceModule_Body_CreateOneFromOrder = {
  /**
   * select the order for which you want to create the invoice
   */
  order: {
    /**
     * Unique identifier of the order
     */
    id: number;
    /**
     * Model name, which is 'Order'
     */
    objectName: "Order";
  };
  /**
   * defines the type of amount
   */
  type?: "percentage" | "net" | "gross" | null;
  /**
   * Amount which has already been paid for this Invoice
   */
  amount?: number | null;
  /**
   * defines the type of the invoice

1. RE - Schlussrechnung
2. TR - Teilrechnung
3. AR - Abschlagsrechnung
   */
  partialType?: "RE" | "TR" | "AR" | null;
};
export type InvoiceModule_Body_CreateReminderForOne = {
  /**
   * Invoice for the reminder
   */
  invoice: {
    /**
     * Id of the invoice
     */
    id: number;
    /**
     * Model name, which is 'Invoice'
     */
    objectName: "Invoice";
  };
};
export type InvoiceModule_Body_RenderOne = {
  /**
   * Define if a forceful re-render should occur.
   */
  forceReload?: boolean;
};
export type InvoiceModule_Body_SendOneViaEmail = {
  /**
   * The recipient of the email.
   */
  toEmail: string;
  /**
   * The subject of the email.
   */
  subject: string;
  /**
   * The text of the email. Can contain html.
   */
  text: string;
  /**
   * Should a copy of this email be sent to you?
   */
  copy?: boolean;
  /**
   * Additional attachments to the mail. String of IDs of existing documents in your * sevdesk account separated by ','
   */
  additionalAttachments?: string;
  /**
   * String of mail addresses to be put as cc separated by ','
   */
  ccEmail?: string;
  /**
   * String of mail addresses to be put as bcc separated by ','
   */
  bccEmail?: string;
  /**
   * If true, the XML of the e-invoice is attached to the email instead of the PDF
   */
  sendXml?: boolean;
};
export type InvoiceModule_Body_MarkOneAsSent = {
  /**
     * Specifies the way in which the invoice was sent to the customer.
Accepts 'VPR' (print), 'VP' (postal), 'VM' (mail) and 'VPDF' (downloaded pfd).
     */
  sendType: "VPR" | "VP" | "VM" | "VPDF";
  /**
   * To create a draft of an invoice for internal use. This operation will not alter the status of the invoice or create bookings for reports.
   */
  sendDraft: boolean;
};
export type InvoiceModule_Body_BookOne = {
  /**
   * Amount which should be booked. Can also be a partial amount.
   */
  amount: number;
  /**
   * The booking date. Most likely the current date.
   */
  date: number;
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
The transaction will be linked to the invoice.
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
