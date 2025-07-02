// Code

export type updateCheckAccountTransactionBody = {
  /**
   * Date the check account transaction was booked
   */
  valueDate?: Date;
  /**
   * Date the check account transaction was imported
   */
  entryDate?: Date | null;
  /**
   * the purpose of the transaction
   */
  paymtPurpose?: string;
  /**
   * Amount of the transaction
   */
  amount?: number;
  /**
   * Name of the payee/payer
   */
  payeePayerName?: string | null;
  /**
   * The check account to which the transaction belongs
   */
  checkAccount?: {
    /**
     * Unique identifier of the check account
     */
    id: number;
    /**
     * Model name, which is 'CheckAccount'
     */
  };
  /**
   * Status of the check account transaction.
100 <-> Created |
200 <-> Linked |
300 <-> Private |
400 <-> Booked  
   */
  status: 100 | 200 | 300 | 400;
  /**
   * The check account transaction serving as the source of the rebooking
   */
  sourceTransaction?: {
    /**
     * Unique identifier of the check account transaction
     */
    id: number;
    /**
     * Model name, which is 'CheckAccountTransaction'
     */
    objectName: "CheckAccountTransaction";
  } | null;
  /**
   * The check account transaction serving as the target of the rebooking
   */
  targetTransaction?: {
    /**
     * Unique identifier of the check account transaction
     */
    id: number;
    /**
     * Model name, which is 'CheckAccountTransaction'
     */
    objectName: "CheckAccountTransaction";
  } | null;
};
export type createTransactionBody = {
  /**
   * Date the check account transaction was booked
   */
  valueDate: Date;
  /**
   * Date the check account transaction was imported
   */
  entryDate?: Date | null;
  /**
   * The purpose of the transaction
   */
  paymtPurpose?: string;
  /**
   * Amount of the transaction
   */
  amount: number;
  /**
   * Name of the other party
   */
  payeePayerName: string | null;
  /**
   * IBAN or account number of the other party
   */
  payeePayerAcctNo?: string | null;
  /**
   * BIC or bank code of the other party
   */
  payeePayerBankCode?: string | null;
  /**
   * The check account to which the transaction belongs
   */
  checkAccount: {
    /**
     * Unique identifier of the check account
     */
    id: number;
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
400 <-> Booked
   */
  status: 100 | 200 | 300 | 400;
  /**
   * The check account transaction serving as the source of the rebooking
   */
  sourceTransaction: {
    /**
     * Unique identifier of the check account transaction
     */
    id: number;
    /**
     * Model name, which is 'CheckAccountTransaction'
     */
    objectName: "CheckAccountTransaction";
  } | null;
  /**
   * The check account transaction serving as the target of the rebooking
   */
  targetTransaction: {
    /**
     * Unique identifier of the check account transaction
     */
    id: number;
    /**
     * Model name, which is 'CheckAccountTransaction'
     */
    objectName: "CheckAccountTransaction";
  } | null;
};
