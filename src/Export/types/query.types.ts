// Code

export type ExportModule_Query_ExportInvoice = {
  /**
   * Limit export
   */
  limit?: number;
  /**
   * Model name, which is 'Invoice'
   */
  modelName: "Invoice";
  /**
   * Model name, which is 'SevQuery'
   */
  objectName: "SevQuery";
  filter?: {
    /**
     * Type of invoices you want to export

1. RE - Rechnung
2. SR - Stornorechnung
3. TR - Teilrechnung
4. AR - Abschlagsrechnung
5. ER - Endrechnung
6. WKR - Wiederkehrende Rechnung
7. MA - Mahnung
     */
    invoiceType?: "Re" | "SR" | "TR" | "AR" | "ER" | "WKR" | "MA";
    /**
     * Start date of the invoice
     */
    startDate?: string;
    /**
     * End date of the invoice
     */
    endDate?: string;
    /**
     * filters the invoices by contact
     */
    contact?: {
      /**
       * ID of the contact
       */
      id: number;
      /**
       * Model name, which is 'Contact'
       */
      objectName: "Contact";
    };
    /**
     * filters the invoices by amount
     */
    startAmount?: number;
    /**
     * filters the invoices by amount
     */
    endAmount?: number;
  };
};
export type ExportModule_Query_ExportInvoiceAsZip = {
  /**
   * Limit export
   */
  limit?: number;
  /**
   * Model name, which is 'Invoice'
   */
  modelName: "Invoice";
  /**
   * Model name, which is 'SevQuery'
   */
  objectName: "SevQuery";
  filter?: {
    /**
     * Type of invoices you want to export

1. RE - Rechnung
2. SR - Stornorechnung
3. TR - Teilrechnung
4. AR - Abschlagsrechnung
5. ER - Endrechnung
6. WKR - Wiederkehrende Rechnung
7. MA - Mahnung
     */
    invoiceType?: "Re" | "SR" | "TR" | "AR" | "ER" | "WKR" | "MA";
    /**
     * Start date of the invoice
     */
    startDate?: string;
    /**
     * End date of the invoice
     */
    endDate?: string;
    /**
     * filters the invoices by contact
     */
    contact?: {
      /**
       * ID of the contact
       */
      id: number;
      /**
       * Model name, which is 'Contact'
       */
      objectName: "Contact";
    };
    /**
     * filters the invoices by amount
     */
    startAmount?: number;
    /**
     * filters the invoices by amount
     */
    endAmount?: number;
  };
};
export type ExportModule_Query_ExportCreditNote = {
  /**
   * Limit export
   */
  limit?: number;
  /**
   * Model name, which is 'CreditNote'
   */
  modelName?: "CreditNote";
  /**
   * Model name, which is 'SevQuery'
   */
  objectName?: "SevQuery";
  filter?: {
    /**
     * Start date of the credit note
     */
    startDate?: string;
    /**
     * End date of the credit note
     */
    endDate?: string;
    /**
     * filters the credit notes by contact
     */
    contact?: {
      /**
       * ID of the contact
       */
      id: number;
      /**
       * Model name, which is 'Contact'
       */
      objectName: "Contact";
    };
    /**
     * filters the credit notes by amount
     */
    startAmount?: number;
    /**
     * filters the credit notes by amount
     */
    endAmount?: number;
  };
};
export type ExportModule_Query_ExportVoucher = {
  /**
   * Limit export
   */
  limit?: number;
  /**
   * Model name, which is 'Voucher'
   */
  modelName: "Voucher";
  /**
   * Model name, which is 'SevQuery'
   */
  objectName: "SevQuery";
  filter?: {
    /**
     * Start date of the voucher
     */
    startDate?: string;
    /**
     * End date of the voucher
     */
    endDate?: string;
    /**
     * Start pay date of the voucher
     */
    startPayDate?: string;
    /**
     * End pay date of the voucher
     */
    endPayDate?: string;
    /**
     * filters the vouchers by contact
     */
    contact?: {
      /**
       * ID of the contact
       */
      id: number;
      /**
       * Model name, which is 'Contact'
       */
      objectName: "Contact";
    };
    /**
     * filters the vouchers by amount
     */
    startAmount?: number;
    /**
     * filters the vouchers by amount
     */
    endAmount?: number;
  };
};
export type ExportModule_Query_ExportVoucherAsZip = {
  /**
   * Limit export
   */
  limit?: number;
  /**
   * Model name, which is 'Voucher'
   */
  modelName: "Voucher";
  /**
   * Model name, which is 'SevQuery'
   */
  objectName: "SevQuery";
  filter?: {
    /**
     * Start date of the voucher
     */
    startDate?: string;
    /**
     * End date of the voucher
     */
    endDate?: string;
    /**
     * Start pay date of the voucher
     */
    startPayDate?: string;
    /**
     * End pay date of the voucher
     */
    endPayDate?: string;
    /**
     * filters the vouchers by contact
     */
    contact?: {
      /**
       * ID of the contact
       */
      id: number;
      /**
       * Model name, which is 'Contact'
       */
      objectName: "Contact";
    };
    /**
     * filters the vouchers by amount
     */
    startAmount?: number;
    /**
     * filters the vouchers by amount
     */
    endAmount?: number;
  };
};
export type ExportModule_Query_ExportTransaction = {
  /**
   * Limit export
   */
  limit?: number;
  /**
   * Model name, which is 'CheckAccountTransaction'
   */
  modelName: "CheckAccountTransaction";
  /**
   * Model name, which is 'SevQuery'
   */
  objectName: "SevQuery";
  filter?: {
    /**
     * the payment purpose
     */
    paymtPurpose?: string;
    /**
     * the name of the payee/payer
     */
    name?: string;
    /**
     * Start date of the transactions
     */
    startDate?: string;
    /**
     * End date of the transactions
     */
    endDate?: string;
    /**
     * filters the transactions by amount
     */
    startAmount?: number;
    /**
     * filters the transactions by amount
     */
    endAmount?: number;
    checkAccount?: {
      /**
       * Id of the checkAccount
       */
      id: number;
      /**
       * Model name, which is 'CheckAccount'
       */
      objectName: "CheckAccount";
    };
  };
};
export type ExportModule_Query_ExportContactList = {
  /**
   * Limit export
   */
  limit?: number;
  /**
   * Model name, which is 'Contact'
   */
  modelName: "Contact";
  /**
   * Model name, which is 'SevQuery'
   */
  objectName: "SevQuery";
  filter?: {
    /**
     * filters the contacts by zip code
     */
    zip?: number;
    /**
     * filters the contacts by city
     */
    city?: string;
    country?: {
      /**
       * id of the country
       */
      id: number;
      /**
       * Model name, which is 'StaticCountry'
       */
      objectName: "StaticCountry";
    };
    /**
     * export only organisations
     */
    depth?: boolean;
    /**
     * export only people
     */
    onlyPeople?: boolean;
  };
};
