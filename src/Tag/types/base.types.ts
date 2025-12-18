// Project-Imports

import { SevClient } from "../../types/models.types";

// Code

export type Tag = {
  /**
   * Id of the tag
   */
  id: string;

  /**
   * Internal object name which is 'TagRelation'.
   */
  objectName: "TagRelation";
  additionalInformation: string | null;

  /**
   * Date of tag creation
   */
  create: Date;
  /**
   * The tag information
   */
  tag: {
    /**
     * Unique identifier of the tag
     */
    id: string;
    /**
     * Model name, which is 'Tag'
     */
    objectName: "Tag";
  };
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
  /**
   * Client to which invoice belongs. Will be filled automatically
   */
  sevClient: SevClient;
};
