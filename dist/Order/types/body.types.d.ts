import { SevUser } from "../../types/models.types";
export type OrderModule_Body_CreateOne = {
    /**
     * Order model
     */
    order: {
        /**
         * The order object name
         */
        objectName?: string;
        mapAll: boolean;
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
            id: number;
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
        status: 100 | 200 | 300 | 500 | 750 | 1000;
        /**
         * Normally consist of prefix plus the order number
         */
        header: string;
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
         * Delivery terms of the order
         */
        deliveryTerms?: string | null;
        /**
         * Payment terms of the order
         */
        paymentTerms?: string | null;
        /**
         * Version of the order.
    Can be used if you have multiple drafts for the same order.
    Should start with 0
         */
        version: number;
        /**
         * Defines if the client uses the small settlement scheme. If yes, the order must not contain any vat
         */
        smallSettlement?: boolean;
        /**
         * The user who acts as a contact person for the order
         */
        contactPerson: {
            /**
             * Unique identifier of the user
             */
            id: number;
            /**
             * Model name, which is 'SevUser'
             */
            objectName: "SevUser";
        };
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
         * Use this in sevdesk-Update 1.0 (instead of taxRule).
    
    Tax set of the order. Needs to be added if you chose the tax type custom
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
        orderType?: "AN" | "AB" | "LI";
        /**
         * The date the order was sent to the customer
         */
        sendDate?: string | null;
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
         * Internal note of the customer. Contains data entered into field 'Referenz/Bestellnummer'
         */
        customerInternalNote?: string | null;
        /**
         * If true, the net amount of each position will be shown on the order. Otherwise gross amount
         */
        showNet?: boolean;
        /**
         * Type which was used to send the order. IMPORTANT: Please refer to the order section of the * API-Overview to understand how this attribute can be used before using it!
         */
        sendType?: "VPR" | "VPDF" | "VM" | "VP" | null;
        /**
         * Object from which the order was created. For example an offer.
         */
        origin?: {
            /**
             * Unique identifier of the object
             */
            id: number;
            /**
             * Model name of the object. Could be 'Order'.
             */
            objectName: string;
        } | null;
    };
    orderPosSave?: {
        /**
         * The order to which the position belongs.
         */
        order?: {
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
        quantity: number;
        /**
         * Price of the article/part. Is either gross or net, depending on the sevdesk account setting.
         */
        price?: number | null;
        /**
         * Tax on the price of the part
         */
        priceTax?: number | null;
        /**
         * Gross price of the part
         */
        priceGross?: number | null;
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
        positionNumber: number | null;
        /**
         * A text describing your position.
         */
        text?: string | null;
        /**
         * An optional discount of the position.
         */
        discount?: number | null;
        /**
         * Defines if the position is optional.
         */
        optional?: boolean | null;
        /**
         * Tax rate of the position.
         */
        taxRate: number;
    }[];
    orderPosDelete?: {
        /**
         * Id of order position
         */
        id: number;
        /**
         * Object name of order position
         */
        objectName: string;
    } | null;
};
export type OrderModule_Body_UpdateOne = {
    /**
     * The order number
     */
    orderNumber?: string;
    /**
     * The contact used in the order
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
    orderDate?: string | null;
    /**
     * Please have a look in status of orders to see what the different status codes mean
     */
    status?: 100 | 200 | 300 | 500 | 750 | 1000 | null;
    /**
     * Normally consist of prefix plus the order number
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
     * Delivery terms of the order
     */
    deliveryTerms?: string | null;
    /**
     * Payment terms of the order
     */
    paymentTerms?: string | null;
    /**
     * Object from which the order was created. For example an offer.
     */
    origin?: {
        /**
         * Unique identifier of the object
         */
        id: number;
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
    version?: number | null;
    /**
     * Defines if the client uses the small settlement scheme. If yes, the order must not contain any vat
     */
    smallSettlement?: boolean | null;
    /**
     * The user who acts as a contact person for the order
     */
    contactPerson?: SevUser;
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
  
  Tax set of the order. Needs to be added if you chose the tax type custom
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
     * A common tax text would be 'Umsatzsteuer 19%'
     */
    taxText?: string | null;
    /**
     * Use this in sevdesk-Update 1.0 (instead of taxRule).
  
  Tax type of the order. There are four tax types:
  
  1. default - Umsatzsteuer ausweisen
  2. eu - Steuerfreie innergemeinschaftliche Lieferung (Europäische Union)
  3. noteu - Steuerschuldnerschaft des Leistungsempfängers (außerhalb EU, z. B. Schweiz)
  4. custom - Using custom tax set
  5. ss - Not subject to VAT according to §19 1 UStG Tax rates are heavily connected to the tax type used.
     */
    taxType?: string | null;
    /**
     * Type of the order. For more information on the different types, check this
     */
    orderType?: "AN" | "AB" | "LI" | null;
    /**
     * The date the order was sent to the customer
     */
    sendDate?: string | null;
    /**
     * Complete address of the recipient including name, street, city, zip and country.
  Line breaks can be used and will be displayed on the invoice pdf.
     */
    address?: string | null;
    /**
     * Currency used in the order. Needs to be currency code according to ISO-4217
     */
    currency?: string | null;
    /**
     * Internal note of the customer. Contains data entered into field 'Referenz/Bestellnummer'
     */
    customerInternalNote?: string | null;
    /**
     * If true, the net amount of each position will be shown on the order. Otherwise gross amount
     */
    showNet?: boolean | null;
    /**
     * Type which was used to send the order. IMPORTANT: Please refer to the order section of the * API-Overview to understand how this attribute can be used before using it!
     */
    sendType?: "VPR" | "VPDF" | "VM" | "VP" | null;
};
export type OrderModule_Body_SendOneViaEmail = {
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
    ccEmail: string;
    /**
     * String of mail addresses to be put as bcc separated by ','
     */
    bccEmail: string;
};
export type OrderModule_Body_CreatePackagingListFromOrder = {
    /**
     * Unique identifier of the order
     */
    id: number;
    /**
     * Model name, which is 'Order'
     */
    objectName: "Order";
};
export type OrderModule_Body_CreateContractNoteFromOrder = {
    /**
     * Unique identifier of the order
     */
    id: number;
    /**
     * Model name, which is 'Order'
     */
    objectName: "Order";
};
export type OrderModule_Body_MarkOneAsSent = {
    /**
     * Specifies the way in which the order was sent to the customer.
  Accepts 'VPR' (print), 'VP' (postal), 'VM' (mail) and 'VPDF' (downloaded pfd).
     */
    sendType: "VPR" | "VP" | "VM" | "VPDF";
    /**
     * To create a draft of an order for internal use. This operation will not alter the status of the order.
     */
    sendDraft: boolean;
};
