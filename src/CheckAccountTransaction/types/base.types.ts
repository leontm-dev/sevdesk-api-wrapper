// Project-Imports

import { SevClient } from "../../types/models.types";

// Code

export type CheckAccountTransaction = {
  /**
   * The check account transaction id
   */
  id: string;
  /**
   * The check account transaction object name
   */
  objectName: string;
  /**
   * Date of check account transaction creation
   */
  create: Date;
  /**
   * Date of last check account transaction update
   */
  update: Date;
  /**
   * Client to which check account transaction belongs. Will be filled automatically
   */
  sevClient: SevClient;
  /**
   * Date the check account transaction was imported
   */
  valueDate: Date;
  /**
   * Date the check account transaction was booked
   */
  entryDate: Date | null;
  /**
   * The purpose of the transaction
   */
  paymtPurpose: string | null;
  /**
   * Amount of the transaction
   */
  amount: string;
  /**
   * Name of the other party
   */
  payeePayerName: string | null;
  /**
   * IBAN or account number of the other party
   */
  payeePayerAcctNo: string | null;
  /**
   * BIC or bank code of the other party
   */
  payeePayerBankCode: string | null;
  /**
   * ZKA business transaction code. This can be given for finAPI accounts.
   */
  gvCode: string | null;
  /**
   * Transaction type, according to the bank. This can be given for finAPI accounts.
   */
  entryText: string | null;
  /**
   * Transaction primanota. This can be given for finAPI accounts.
   */
  primaNotaNo: string | null;
  /**
   *The check account to which the transaction belongs
   */
  checkAccount: {
    /**
     * Unique identifier of the check account
     */
    id: string;
    /**
     * Model name, which is 'CheckAccount'
     */
    objectName: "CheckAccount";
  };
  /**
   * Status of the check account transaction.
100 <-> Created | 
200 <-> Linked |
300 <-> Private | 
350 <-> Auto-booked without user confirmation |
400 <-> Booked
   */
  status: "100" | "200" | "300" | "400";
  /**
   * The check account transaction serving as the source of a money transit
   */
  sourceTransaction: {
    /**
     * Unique identifier of the check account transaction
     */
    id: string;
    /**
     * Model name, which is 'CheckAccountTransaction'
     */
    objectName: "CheckAccountTransaction";
  };
  /**
   * The check account transaction serving as the target of a money transit
   */
  targetTransaction: {
    /**
     * Unique identifier of the check account transaction
     */
    id: string;
    /**
     * Model name, which is 'CheckAccountTransaction'
     */
    objectName: "CheckAccountTransaction";
  };
  /**
   * Timepoint when the transaction was enshrined.
   */
  enshrined: Date;
};
