// Project-Imports

import { sevClient } from "../../types/sevdeskModels";

// Code

export type CommunicationWay = {
  /**
   * The communication way id
   */
  id: string;
  /**
   * The communication way object name
   */
  objectName: string;
  /**
   * Date of communication way creation
   */
  create: Date;
  /**
   * Date of last communication way update
   */
  update: Date;
  /**
   * The contact to which this communication way belongs.
   */
  contact: {
    /**
     * Unique identifier of the contact
     */
    id: string;
    /**
     * Model name, which is 'Contact'
     */
    objectName: "Contact";
  };
  /**
   * Type of the communication way
   */
  type: "EMAIL" | "PHONE" | "WEB" | "MOBILE";
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
    id: string;
    /**
     * Model name, which is 'CommunicationWayKey'
     */
    objectName: "CommunicationWayKey";
  };
  /**
   * Defines whether the communication way is the main communication way for the contact.
   */
  main: string;
  /**
   * Client to which communication way key belongs. Will be filled automatically
   */
  sevClient: sevClient;
};
