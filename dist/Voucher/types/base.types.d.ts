export type ReceiptGuideDataTransfer = {
    /**
     * The ID of the matching account datev
     */
    accountDatevId: number;
    /**
     * The account number of the account datev (dependent on the active accounting system of the client)
     */
    accountNumber: string;
    /**
     * The name of the account
     */
    accountName: string;
    /**
     * The description of the account and/or what the account is used for
     */
    description: string;
    /**
     * An array that holds all possible tax rules for this account
     */
    allowedTaxRules: {
        /**
         * The name of the tax rule
         */
        name: string;
        /**
         * A readable description of the tax rule
         */
        description: string;
        /**
         * The id of the tax rule to use in different scenarios
         */
        id: number;
        /**
         * An array of tax rates which are combinable with this tax rule
         */
        taxRates: string[];
    }[];
    /**
     * An array that holds the viable receipt types for this account
     */
    allowedReceiptTypes: string[];
};
