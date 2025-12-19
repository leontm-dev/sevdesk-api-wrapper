// Code

export type TagModule_Body_UpdateOne = {
  /**
   * The name of the tag u want to update
   */
  name: string;
};
export type TagModule_Body_CreateOne = {
  /**
   * Name of the tag
   */
  name: string;
  object: {
    /**
     * Id of the invoice/order/voucher/creditNote
     */
    id: number;
    /**
     * Model name
     */
    objectName: "Invoice" | "Voucher" | "Order" | "CreditNote";
  };
};
