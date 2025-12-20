import { CreditNotePos } from "../../CreditNotePos";
import { CreditNoteV1 } from "./base.v1.types";
import { CreditNoteV2 } from "./base.v2.types";
export type CreditNoteModule_Body_CreateOne = {
    /**
     * creditNote model
     */
    creditNote: CreditNoteV1 & CreditNoteV2;
    creditNotePosSave: CreditNotePos;
    creditNotePosDelete: {
        /**
         * Id of credit note position
         */
        id: number;
        /**
         * Object name of credit note position
         */
        objectName: string;
    } | null;
    discountSave: {
        /**
         * Defines if this is a discount or a surcharge
         */
        discount: boolean;
        /**
         * A text for your discount
         */
        text: string;
        /**
         * Defines if this is a percentage or an absolute discount
         */
        percentage: boolean;
        /**
         * Value of the discount
         */
        value: number;
        /**
         * Object name of the discount
         */
        objectName: "Discount";
        /**
         * Internal param
         */
        mapAll: boolean;
    } | null;
    discountDelete: {
        /**
         * ID of discount to delete
         */
        id: number;
        /**
         * Object name of discount
         */
        objectName: "Discount";
    } | null;
};
export type CreditNoteModule_Body_CreateOneFromInvoice = {
    invoice: {
        /**
         * The id of the existing invoice
         */
        id: number;
        /**
         * The objectName must be 'Invoice'
         */
        objectName: "Invoice";
    };
};
export type CreditNoteModule_Body_CreateOneFromVoucher = {
    voucher: {
        /**
         * The id of the existing Voucher
         */
        id: number;
        /**
         * The objectName must be 'Voucher'
         */
        objectName: "Voucher";
    };
};
export type CreditNoteModule_Body_UpdateOne = {
    /**
     * The creditNote number
     */
    creditNoteNumber?: string | null;
    /**
     * The contact used in the creditNote
     */
    contact?: {
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
     * Needs to be provided as timestamp or dd.mm.yyyy
     */
    creditNoteDate?: string;
    /**
     * Please have a look in status of credit note to see what the different status codes mean
     */
    status?: "100" | "200" | "750" | "1000";
    /**
     * Normally consist of prefix plus the creditNote number
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
     * Can be omitted as complete address is defined in address attribute
     */
    addressCountry?: {
        /**
         * Unique identifier of the country
         */
        id: number;
        /**
         * Model name, which is 'StaticCountry'
         */
        objectName: "StaticCountry";
    } | null;
    /**
     * Timestamp. This can also be a date range if you also use the attribute deliveryDateUntil
     */
    deliveryDate?: string;
    /**
     * Defines if the client uses the small settlement scheme. If yes, the creditNote must not contain any vat
     */
    smallSettlement?: boolean | null;
    /**
     * The user who acts as a contact person for the creditNote
     */
    contactPerson?: {
        /**
         * Unique identifier of the user
         */
        id: number;
        /**
         * Model name, which is 'SevUser'
         */
        objectName: "SevUser";
    } | null;
    /**
     * This is not used anymore. Use the taxRate of the individual positions instead.
     */
    taxRate?: number | null;
    /**
     * Use this in sevdesk-Update 2.0 (replaces taxType / taxSet).
  
  See list of available VAT rules.
     */
    taxRule?: {
        id: "1" | "2" | "3" | "4" | "5" | "11" | "17" | "18" | "19" | "20" | "21";
        /**
         * Name of the object. Must always be TaxRule
         */
        objectName: "TaxRule";
    };
    /**
     * Use this in sevdesk-Update 1.0 (instead of taxRule).
  
  Tax set of the creditNote. Needs to be added if you chose the tax type custom
     */
    taxSet: {
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
     * A common tax text would be 'Umsatzsteuer 19%'
     */
    taxText?: string | null;
    /**
     * Use this in sevdesk-Update 1.0 (instead of taxRule).
  
  Tax type of the creditNote. There are four tax types:
  
  1. default - Umsatzsteuer ausweisen
  2. eu - Steuerfreie innergemeinschaftliche Lieferung (Europäische Union)
  3. noteu - Steuerschuldnerschaft des Leistungsempfängers (außerhalb EU, z. B. Schweiz)
  4. custom - Using custom tax set
  5. ss - Not subject to VAT according to §19 1 UStG Tax rates are heavily connected to the tax type used.
     */
    taxType?: string | null;
    /**
     * The date the creditNote was sent to the customer
     */
    sendDate?: string | null;
    /**
     * Complete address of the recipient including name, street, city, zip and country.
  Line breaks can be used and will be displayed on the invoice pdf.
     */
    address?: string | null;
    /**
     * Currency used in the creditNote. Needs to be currency code according to ISO-4217
     */
    currency?: string | null;
    /**
     * Internal note of the customer. Contains data entered into field 'Referenz/Bestellnummer'
     */
    customerInternalNote?: string | null;
    /**
     * If true, the net amount of each position will be shown on the creditNote. Otherwise gross amount
     */
    showNet?: boolean;
    /**
     * Type which was used to send the creditNote. IMPORTANT: Please refer to the creditNote section of the * API-Overview to understand how this attribute can be used before using it!
     */
    sendType?: "VPR" | "VPDF" | "VM" | "VP" | null;
};
export type CreditNoteModule_Body_MarkOneAsSent = {
    /**
     * Specifies the way in which the credit note was sent to the customer.
  Accepts 'VPR' (print), 'VP' (postal), 'VM' (mail) and 'VPDF' (downloaded pfd).
     */
    sendType: "VPR" | "VP" | "VM" | "VPDF";
    /**
     * To create a draft of a credit note for internal use. This operation will not alter the status of the credit note or create bookings for reports.
     */
    sendDraft: boolean;
};
export type CreditNoteModule_Body_SendOneViaEmail = {
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
    coEmail?: string;
    /**
     * String of mail addresses to be put as bcc separated by ','
     */
    bccEmail?: string;
};
export type CreditNoteModule_Body_BookOne = {
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
  The transaction will be linked to the credit note.
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
