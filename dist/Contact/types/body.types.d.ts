export type createContactBody = {
    /**
     * The organization name.
  Be aware that the type of contact will depend on this attribute.
  If it holds a value, the contact will be regarded as an organization.
     */
    name?: string | null;
    /**
     * Defines the status of the contact. 100 <-> Lead - 500 <-> Pending - 1000 <-> Active.
     */
    status?: number | null;
    /**
     * The customer number
     */
    customerNumber?: string | null;
    /**
     * The parent contact to which this contact belongs. Must be an organization.
     */
    parent?: {
        /**
         * Unique identifier of the parent contact
         */
        id: number;
        /**
         * Model name, which is 'Contact'
         */
        objectName: "Contact";
    } | null;
    /**
     * The first name of the contact.
  Yeah... not quite right in literally every way. We know.
  Not to be used for organizations.
     */
    surename?: string | null;
    /**
     * The last name of the contact.
  Not to be used for organizations.
     */
    familyname?: string | null;
    /**
     * A non-academic title for the contact. Not to be used for organizations.
     */
    titel?: string | null;
    /**
     * Category of the contact.
  For more information, see here.
    * @link https://my.sevdesk.de/apiOverview/index.html#/doc-contacts#types
     */
    category: {
        /**
         * Unique identifier of the category
         */
        id: number;
        /**
         * Model name, which is 'Category'
         */
        objectName: "Category";
    };
    /**
     * A description for the contact.
     */
    description?: string | null;
    /**
     * A academic title for the contact. Not to be used for organizations.
     */
    academicTitle?: string | null;
    /**
     * Gender of the contact.
  Not to be used for organizations.
     */
    gender?: string | null;
    /**
     * Second name of the contact.
  Not to be used for organizations.
     */
    name2?: string | null;
    /**
     * Birthday of the contact.
  Not to be used for organizations.
     */
    birthday?: Date | null;
    /**
     * Vat number of the contact.
     */
    vatNumber?: string | null;
    /**
     * Bank account number (IBAN) of the contact.
     */
    bankAccount?: string | null;
    /**
     * Bank number of the bank used by the contact.
     */
    bankNumber?: string | null;
    /**
     * Absolute time in days which the contact has to pay his invoices and subsequently get a cashback.
     */
    defaultCashbackTime?: number | null;
    /**
     * Percentage of the invoice sum the contact gets back if he paid invoices in time.
     */
    defaultCashbackPercent?: number | null;
    /**
     * The payment goal in days which is set for every invoice of the contact.
     */
    defaultTimeToPay?: number | null;
    /**
     * The tax number of the contact.
     */
    taxNumber?: string | null;
    /**
     * The tax office of the contact (only for greek customers).
     */
    taxOffice?: string | null;
    /**
     * Defines if the contact is freed from paying vat.
     */
    exemptVat?: boolean | null;
    /**
     * The default discount the contact gets for every invoice.
  Depending on defaultDiscountPercentage attribute, in percent or absolute value.
     */
    defaultDiscountAmount?: number | null;
    /**
     * Defines if the discount is a percentage (true) or an absolute value (false).
     */
    defaultDiscountPercentage?: boolean | null;
    /**
     * Buyer reference of the contact.
     */
    buyerReference?: string | null;
    /**
     * Defines whether the contact is a government agency (true) or not (false).
     */
    governmentAgency?: boolean | null;
};
export type updateContactBody = createContactBody;
