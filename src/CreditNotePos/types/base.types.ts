// Project-Imports

import { SevClient } from "../../types/models.types";

// Code

export type CreditNotePosition = {
  /**
   * The creditNote position id
   */
  id: string;
  /**
   * The creditNote position object name
   */
  objectName: "CreditNotePos";
  /**
   * Date of creditNote position creation
   */
  create: string;
  /**
   * Date of last creditNote position update
   */
  update: string;
  /**
   * The creditNote to which the position belongs.
   */
  creditNote: {
    /**
     * Unique identifier of the creditNote
     */
    id: string;
    /**
     * Model name, which is 'creditNote'
     */
    objectName: "creditNote";
  };
  /**
   * Part from your inventory which is used in the position.
   */
  part: {
    /**
     * Unique identifier of the part
     */
    id: string;
    /**
     * Model name, which is 'Part'
     */
    objectName: "Part";
  };
  /**
   * Quantity of the article/part
   */
  quantity: string;
  /**
   * Price of the article/part. Is either gross or net, depending on the sevdesk account setting.
   */
  price: string | null;
  /**
   * Net price of the part
   */
  priceNet: string | null;
  /**
   * Tax on the price of the part
   */
  priceTax: string | null;
  /**
   * Gross price of the part
   */
  priceGross: string | null;
  /**
   * Name of the article/part.
   */
  name: string | null;
  /**
   * The unit in which the positions part is measured
   */
  unity: {
    /**
     * Unique identifier of the unit
     */
    id: string;
    /**
     * Model name, which is 'Unity'
     */
    objectName: "Unity";
  };
  /**
   * Client to which creditNote position belongs. Will be filled automatically
   */
  sevClient: SevClient;
  /**
   * Position number of your position. Can be used to creditNote multiple positions.
   */
  positionNumber: string | null;
  /**
   * A text describing your position.
   */
  text: string | null;
  /**
   * An optional discount of the position.
   */
  discount: string | null;
  /**
   * Defines if the position is optional.
   */
  optional: boolean | null;
  /**
   * Tax rate of the position.
   */
  taxRate: string;
  /**
   * Discount sum of the position
   */
  sumDiscount: string | null;
};
