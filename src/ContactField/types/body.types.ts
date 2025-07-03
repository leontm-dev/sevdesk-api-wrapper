export type createContactFieldBody = {
  /**
   * name of the contact
   */
  contact: {
    /**
     * Unique identifier of contact
     */
    id: number;
    /**
     * Model name, which is 'Contact'
     */
    objectName: "Contact";
  };
  /**
   * name of the contact custom field setting
   */
  contactCustomFieldSetting: {
    /**
     * Unique identifier of contact custom field setting
     */
    id: number;
    /**
     * Model name, which is 'ContactCustomFieldSetting'
     */
    objectName: "ContactCustomFieldSetting";
  };
  /**
   * The value of the contact field
   */
  value: string;
  /**
   * Internal object name which is 'ContactCustomField'.
   */
  objectName: "ContactCustomField";
};
export type updateContactFieldBody = {
  /**
   * name of the contact
   */
  contact?: {
    /**
     * Unique identifier of contact
     */
    id: number;
    /**
     * Model name, which is 'Contact'
     */
    objectName: "Contact";
  };
  /**
   * name of the contact custom field setting
   */
  contactCustomFieldSetting?: {
    /**
     * Unique identifier of contact custom field setting
     */
    id: number;
    /**
     * Model name, which is 'contactCustomFieldSetting'
     */
    objectName: "ContactCustomFieldSetting";
  };
  /**
   * The value of the contact field
   */
  value?: string;
  /**
   * Internal object name which is 'ContactCustomField'.
   */
  objectName?: "ContactCustomField";
};
export type createContactFieldSettingBody = {
  /**
   * name of the contact fields
   */
  name: string;
  /**
   * The description of the contact field
   */
  description?: string;
  /**
   * Internal object name which is 'ContactCustomFieldSetting'.
   */
  objectName?: "ContactCustomFieldSetting";
};
export type updateContactFieldSettingBody = {
  /**
   * name of the contact fields
   */
  name?: string;
  /**
   * The description of the contact field
   */
  description?: string;
  /**
   * Internal object name which is 'ContactCustomFieldSetting'.
   */
  objectName?: "ContactCustomFieldSetting";
};
