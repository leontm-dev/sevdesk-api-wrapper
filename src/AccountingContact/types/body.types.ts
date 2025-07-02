// Code

export type createAccountingContactBody = {
  /**
   * The contact to which this accounting contact belongs
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
   * Debitor number of the accounting contact.
   */
  debitorNumber?: number | null;
  /**
   * Creditor number of the accounting contact.
   */
  creditorNumber?: number | null;
};
export type updateAccountingContactBody = {
  /**
   * The contact to which this accounting contact belongs.
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
   * Debitor number of the accounting contact.
   */
  debitorNumber?: number | null;
  /**
   * Creditor number of the accounting contact.
   */
  creditorNumber?: number | null;
};
