export type updateCheckAccountBody = {
    /**
     * Name of the check account
     */
    name: string;
    /**
     * The type of the check account. Account with a CSV or MT940 import are regarded as online.
     */
    type: "online" | "offline";
    /**
     * Import type. Transactions can be imported by this method on the check account.
     */
    importType: "CSV" | "MT940" | null;
    /**
     * The currency of the check account, e.g. EUR, USD, GBP, etc.
     */
    currency: string;
    /**
     * Defines if this check account is the default account.
     */
    defaultAccount: 1 | 2;
    /**
     * Status of the check account. 0 <-> Archived - 100 <-> Active
     */
    status: 0 | 100;
    /**
     * Defines if transactions on this account are automatically mapped to invoices and vouchers when imported if possible.
     */
    autoMapTransactions: number | null;
    /**
     * The booking account used for this bank account, e.g. 1800 in SKR04 and 1200 in SKR03. Must be unique among all your CheckAccounts. Ignore to use a sensible default.
     */
    accountingNumber: string;
};
export type createFileImportAccountBody = {
    /**
     * Name of the check account
     */
    name: string;
    /**
     * Import type. Transactions can be imported by this method on the check account.
     */
    importType: "CSV" | "MT940";
    /**
     * The booking account used for this bank account, e.g. 1800 in SKR04 and 1200 in SKR03. Must be unique among all your CheckAccounts. Ignore to use a sensible default.
     */
    accountingNumber: number | null;
    /**
     * IBAN of the bank account, without spaces
     */
    iban: string | null;
};
export type createClearingAccountBody = {
    /**
     * Name of the check account
     */
    name: string;
    /**
     * The booking account used for this clearing account, e.g. 3320 in SKR04 and 1723 in SKR03. Must be unique among all your CheckAccounts. Ask your tax consultant what to choose.
     */
    accountingNumber: number | null;
};
