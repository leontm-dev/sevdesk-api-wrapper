// Project-Imports

import { SevClient } from "../../types/models.types";

// Code

export type CheckAccount = {
  /**
   * The check account id
   */
  id: string;
  /**
   * The check account object name, always 'CheckAccount'
   */
  objectName: "CheckAccount";
  additionalInformation: string | null;
  /**
   * Date of check account creation
   */
  create: Date;
  /**
   * Date of last check account update
   */
  update: Date;
  /**
   * Client to which check account belongs. Will be filled automatically
   */
  sevClient: SevClient;
  /**
   * Name of the check account
   */
  name: string;
  /**
   * The IBAN of the account
   */
  iban: string | null;
  checkAccId: string | null;
  pin: string | null;
  translationCode: string | null;
  bankServer: string;
  balance: string;
  baseAccount: string;
  priority: string;
  countryCode: string | null;
  autoSyncTransactions: string;
  lastSync: Date;
  connection: CheckAccountConnection | undefined;
  bic: string | null;
  /**
   * The type of the check account. Account with a CSV or MT940 import are regarded as online.
   */
  type: "online" | "offline";
  /**
   * Import type, for accounts that are type "online" but not connected to a data provider. Transactions can be imported by this method on the check account.
   */
  importType: "CSV" | "MT940" | null;
  /**
   * The currency of the check account, e.g. EUR, USD, GBP, etc.
   */
  currency: string;
  /**
   * Defines if this check account is the default account.
   */
  defaultAccount: string;
  /**
   * Status of the check account. 0 <-> Archived - 100 <-> Active
   */
  status: "0" | "100";
  /**
   * Defines if transactions on this account are automatically mapped to invoice and vouchers when imported if possible.
   */
  autoMapTransactions: string | null;
  /**
   * The booking account used for this bank account, e.g. 1800 in SKR04 and 1200 in SKR03. Must be unique among all your CheckAccounts. Ignore to use a sensible default.
   */
  accountingNumber: string;
};
export type CheckAccountConnection = {
  id: string;
  objectName: "CheckAccountConnection";
};
