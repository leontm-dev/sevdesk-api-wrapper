import { SevClient } from "../../types/models.types";
export type AccountingContact = {
    /**
     * The accounting contact id
     */
    id: string;
    /**
     * The accounting contact object name
     */
    objectName: string;
    /**
     * Date of accounting contact creation
     */
    create: Date;
    /**
     * Date of last accounting contact update
     */
    update: Date;
    /**
     * The contact to which this accounting contact belongs.
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
     * Client to which accounting contact belongs. Will be filled automatically
     */
    sevClient: SevClient;
    /**
     * Debitor number of the accounting contact.
     */
    debitorNumber: string;
    /**
     * Creditor number of the accounting contact.
     */
    creditorNumber: string;
};
