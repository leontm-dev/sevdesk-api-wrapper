import { SevClient, SevUser } from "../../types/models.types";
export type Order = {
    /**
     * The order id
     */
    id: string;
    /**
     * The order object name
     */
    objectName: string;
    /**
     * Date of order creation
     */
    create: string;
    /**
     * Date of last order update
     */
    update: string;
    /**
     * The order number
     */
    orderNumber: string;
    /**
     * The contact used in the order
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
    };
    /**
     * Needs to be provided as timestamp or dd.mm.yyyy
     */
    orderDate: string;
    /**
     * Please have a look in status of orders to see what the different status codes mean
     */
    status: "100" | "200" | "300" | "500" | "750" | "1000";
    /**
     * Normally consist of prefix plus the order number
     */
    header: string;
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
    createUser: SevUser;
    /**
     * Client to which order belongs. Will be filled automatically
     */
    sevClient: SevClient;
    /**
     * Delivery terms of the order
     */
    deliveryTerms: string | null;
    /**
     * Payment terms of the order
     */
    paymentTerms: string | null;
    /**
     * Object from which the order was created. For example an offer.
     */
    origin: {
        /**
         * Unique identifier of the object
         */
        id: string;
        /**
         * Model name of the object. Could be 'Order'.
         */
        objectName: string;
    } | null;
    /**
     * Version of the order.
  Can be used if you have multiple drafts for the same order.
  Should start with 0
     */
    version: string;
    /**
     * Defines if the client uses the small settlement scheme. If yes, the order must not contain any vat
     */
    smallSettlement: boolean;
    /**
     * The user who acts as a contact person for the order
     */
    contactPerson: SevUser;
    /**
     * This is not used anymore. Use the taxRate of the individual positions instead.
     */
    taxRate: string;
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
     * Use this in sevdesk-Update 1.0 (instead of taxRule).
  
  Tax set of the order. Needs to be added if you chose the tax type custom
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
    };
    /**
     * A common tax text would be 'Umsatzsteuer 19%'
     */
    taxText: string;
    /**
     * Use this in sevdesk-Update 1.0 (instead of taxRule).
  
  Tax type of the order. There are four tax types:
  
  1. default - Umsatzsteuer ausweisen
  2. eu - Steuerfreie innergemeinschaftliche Lieferung (Europäische Union)
  3. noteu - Steuerschuldnerschaft des Leistungsempfängers (außerhalb EU, z. B. Schweiz)
  4. custom - Using custom tax set
  5. ss - Not subject to VAT according to §19 1 UStG Tax rates are heavily connected to the tax type used.
     */
    taxType: string;
    /**
     * Type of the order. For more information on the different types, check this
     */
    orderType: "AN" | "AB" | "LI";
    /**
     * The date the order was sent to the customer
     */
    sendDate: string | null;
    /**
     * Complete address of the recipient including name, street, city, zip and country.
  Line breaks can be used and will be displayed on the invoice pdf.
     */
    address: string | null;
    /**
     * Currency used in the order. Needs to be currency code according to ISO-4217
     */
    currency: string;
    /**
     * Net sum of the order
     */
    sumNet: string;
    /**
     * Tax sum of the order
     */
    sumTax: string;
    /**
     * Gross sum of the order
     */
    sumGross: string;
    /**
     * Sum of all discounts in the order
     */
    sumDiscounts: String;
    /**
     * Net sum of the order in the foreign currency
     */
    sumNetForeignCurrency: string;
    /**
     * Tax sum of the order in the foreign currency
     */
    sumTaxForeignCurrency: string;
    /**
     * Gross sum of the order in the foreign currency
     */
    sumGrossForeignCurrency: string;
    /**
     * Discounts sum of the order in the foreign currency
     */
    sumDiscountsForeignCurrency: string;
    /**
     * Internal note of the customer. Contains data entered into field 'Referenz/Bestellnummer'
     */
    customerInternalNote: string | null;
    /**
     * If true, the net amount of each position will be shown on the order. Otherwise gross amount
     */
    showNet: boolean;
    /**
     * Type which was used to send the order. IMPORTANT: Please refer to the order section of the * API-Overview to understand how this attribute can be used before using it!
     */
    sendType: "VPR" | "VPDF" | "VM" | "VP" | null;
};
