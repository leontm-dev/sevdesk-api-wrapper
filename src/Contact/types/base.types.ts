// Project-Imports

import type { SevClient } from "../../types/models.classes";

// Code

export type Contact = {
  /**
   * The contact id
   */
  id: string;
  /**
   * The contact object name
   */
  objectName: string;
  /**
   * Date of contact creation
   */
  create: Date;
  /**
   * Date of last contact update
   */
  update: Date;
  /**
   * The organization name.
Be aware that the type of contact will depend on this attribute.
If it holds a value, the contact will be regarded as an organization.
   */
  name: string;
  /**
   * Defines the status of the contact. 100 <-> Lead - 500 <-> Pending - 1000 <-> Active.
   */
  status: string;
  /**
   * The customer number
   */
  customerNumber: string;
  /**
   * The parent contact to which this contact belongs. Must be an organization.
   */
  parent: {
    /**
     * Unique identifier of the parent contact
     */
    id: string;
    /**
     * Model name, which is 'Contact'
     */
    objectName: "Contact";
  };
  /**
   * The first name of the contact.
Yeah... not quite right in literally every way. We know.
Not to be used for organizations.
   */
  surename: string;
  /**
   * The last name of the contact.
Not to be used for organizations.
   */
  familyname: string;
  /**
   * A non-academic title for the contact. Not to be used for organizations.
   */
  titel: string;
  /**
   * Category of the contact.
For more information, see here.
    * @link https://my.sevdesk.de/apiOverview/index.html#/doc-contacts#types
   */
  category: {
    /**
     * Unique identifier of the category
     */
    id: string;
    /**
     * Model name, which is 'Category'
     */
    objectName: "Category";
  };
  /**
   * A description for the contact.
   */
  description: string;
  /**
   * A academic title for the contact. Not to be used for organizations.
   */
  academicTitle: string;
  /**
   * Gender of the contact.
Not to be used for organizations.
   */
  gender: string;
  /**
   * Client to which contact belongs. Will be filled automatically
   */
  sevClient: SevClient;
  /**
   * Second name of the contact.
Not to be used for organizations.
   */
  name2: string;
  /**
   * Not to be used for organizations.
   */
  birthday: Date;
  /**
   * Vat number of the contact.
   */
  vatNumber: string;
  /**
   * Bank account number (IBAN) of the contact.
   */
  bankAccount: string;
  /**
   * Bank number of the bank used by the contact.
   */
  bankNumber: string;
  /**
   * Absolute time in days which the contact has to pay his invoices and subsequently get a cashback.
   */
  defaultCashbackTime: string;
  /**
   * Percentage of the invoice sum the contact gets back if he paid invoices in time.
   */
  defaultCashbackPercent: string;
  /**
   * The payment goal in days which is set for every invoice of the contact.
   */
  defaultTimeToPay: string;
  /**
   * The tax number of the contact.
   */
  taxNumber: string;
  /**
   * The tax office of the contact (only for greek customers).
   */
  taxOffice: string;
  /**
   * Defines if the contact is freed from paying vat.
   */
  exemptVat: string;
  /**
   * The default discount the contact gets for every invoice.
Depending on defaultDiscountPercentage attribute, in percent or absolute value.
   */
  defaultDiscountAmount: string;
  /**
   * Defines if the discount is a percentage (true) or an absolute value (false).
   */
  defaultDiscountPercent: string;
  /**
   * Buyer reference of the contact.
   */
  buyerReference: string;
  /**
   * Defines whether the contact is a government agency (true) or not (false).
   */
  governmentAgency: string;
  /**
   * Additional information stored for the contact.
   * @deprecated
   */
  additionalInformation: string;
};
