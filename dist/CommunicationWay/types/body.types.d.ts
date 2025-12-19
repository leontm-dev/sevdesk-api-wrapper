export type createCommunicationWayBody = {
    /**
     * The contact to which this communication way belongs.
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
    };
    /**
     * Type of the communication way
     */
    type: "PHONE" | "EMAIL" | "WEB" | "MOBILE";
    /**
     * The value of the communication way.
  For example the phone number, e-mail address or website.
     */
    value: string;
    /**
     * The key of the communication way.
  Similar to the category of addresses.
  For all communication way keys please send a GET to /CommunicationWayKey.
     */
    key: {
        /**
         * Unique identifier of the key
         */
        id: number;
        /**
         * Model name, which is 'CommunicationWayKey'
         */
        objectName: "CommunicationWayKey";
    };
    /**
     * Defines whether the communication way is the main communication way for the contact.
     */
    main?: boolean | null;
};
export type updateCommunicationWayBody = {
    contact?: {
        id: number;
        objectName: "Contact";
    } | null;
    type?: "PHONE" | "EMAIL" | "WEB" | "MOBILE";
    value?: string;
    key?: {
        id: number;
        objectName: "CommunicationWayKey";
    } | null;
    main?: boolean | null;
};
