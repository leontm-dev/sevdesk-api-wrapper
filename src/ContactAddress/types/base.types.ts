// Project-Imports

import { SevClient } from "../../types/models.types";

// Code

export type ContactAddress = {
  /**
   * The contact address id
   */
  id: number;
  /**
   * The contact address object name
   */
  objectName: string;
  /**
   * Date of contact address creation
   */
  create: Date;
  /**
   * Date of last contact address update
   */
  update: Date;
  /**
   * The contact to which this contact address belongs.
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
   * Street name
   */
  street: string | null;
  /**
   * Zip code
   */
  zip: string | null;
  /**
   * City name
   */
  city: string | null;
  /**
   * Country of the contact address.
For all countries, send a GET to /StaticCountry
   */
  country: {
    /**
     * Unique identifier of the country
     */
    id: number;
    /**
     * Model name, which is 'StaticCountry'
     */
    objectName: "StaticCountry";
  };
  /**
   * Category of the contact address.
For all categories, send a GET to /Category?objectType=ContactAddress. */
  category: {
    /**
     * Unique identifier of the category
     */
    id: number;
    /**
     * Model name, which is 'Category'
     */
    objectName: "Category";
  } | null;
  /**
   * Name in address
   */
  name: string | null;
  /**
   * Client to which contact address belongs. Will be filled automatically
   */
  sevClient: SevClient;
  /**
   * Second name in address
   */
  name2: string | null;
  /**
   * Third name in address
   */
  name3: string | null;
  /**
   * Fourth name in address
   */
  name4: string | null;
};
