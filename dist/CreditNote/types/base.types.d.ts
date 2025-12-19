import { SevClient } from "../../types/models.types";
export type CreditNote = {
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
    create: Date;
    /**
     * Date of last creditNote update
     */
    update: Date;
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
    creditNoteDate: Date;
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
    deliveryDate: Date;
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
