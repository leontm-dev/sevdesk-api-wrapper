// Project-Imports

import { sevClient } from "../../types/sevdeskModels";

// Code

export type ContactField = {
  /**
   * id of the contact field
   */
  id: string;
  /**
   * Internal object name which is 'ContactCustomField'.
   */
  objectName: "ContactCustomField";
  /**
   * Date of contact field creation
   */
  create: Date;
  /**
   * Date of contact field update
   */
  update: Date;
  /**
   * Client to which contact field belongs. Will be filled automatically
   */
  sevClient: sevClient;
  /**
   * name of the contact
   */
  contact: {
    /**
     * Unique identifier of contact
     */
    id: string;
    /**
     * Model name, which is 'Contact'
     */
    objectName: "Contact";
  };
  /**
   * the contact custom field setting
   */
  contactCustomFieldSetting: ContactCustomFieldSetting;
  /**
   * The value of the contact field
   */
  value: string;
};
export type ContactCustomFieldSetting = {
  /**
   * Id of the contact field
   */
  id: string;
  /**
   * Internal object name which is 'ContactCustomFieldSetting'.
   */
  objectName: "ContactCustomFieldSetting";
  /**
   * Date of contact field creation
   */
  create: Date;
  /**
   * Date of contact field updated
   */
  update: Date;
  /**
   * Client to which invoice belongs. Will be filled automatically
   */
  sevClient: sevClient;
  /**
   * name of the contact fields
   */
  name: string;
  /**
   * Unique identifier for the contact field
   */
  identifier: string;
  /**
   * The description of the contact field
   */
  description: string;
};
