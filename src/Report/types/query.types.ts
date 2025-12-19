// Code

export type ReportModule_Query_ExportInvoiceListSevQuery = {
  /**
   * Limit export
   */
  limit: number;
  /**
   * Model name which is exported
   */
  modelName: any;
  /**
   * SevQuery object name
   */
  objectName: any;
  filter: {
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
    invoiceType: any[];
    /**
     * Start date of the invoice
     */
    startDate: string;
    /**
     * End date of the invoice
     */
    endDate: string;
    /**
     * filters the invoices by contact
     */
    contact: {
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
    startAmount: number;
    /**
     * filters the invoices by amount
     */
    endAmount: number;
  };
};
export type ReportModule_Query_ExportOrderListSevQuery = {
  /**
   * Limit export
   */
  limit: number;
  /**
   * Model name which is exported
   */
  modelName: any;
  /**
   * SevQuery object name
   */
  objectName: any;
  filter: {
    /**
     * Type of orders you want to export

1. AN - Angebote
2. AB - Aufträge
3. LI - Lieferscheine
     */
    orderType: "AN" | "AB" | "LI";
    /**
     * Start date of the order
     */
    startDate: string;
    /**
     * End date of the order
     */
    endDate: string;
    /**
     * filters the orders by contact
     */
    contact: {
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
     * filters the orders by amount
     */
    startAmount: number;
    /**
     * filters the orders by amount
     */
    endAmount: number;
  };
};
export type ReportModule_Query_ExportContactListSevQuery = {
  /**
   * Limit export
   */
  limit: number;
  /**
   * Model name which is exported
   */
  modelName: any;
  /**
   * SevQuery object name
   */
  objectName: any;
  filter: {
    /**
     * filters the contacts by zip code
     */
    zip: number;
    /**
     * filters the contacts by city
     */
    city: string;
    country: {
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
    depth: boolean;
    /**
     * export only people
     */
    onlyPeople: boolean;
  };
};
export type ReportModule_Query_ExportVoucherListSevQuery = {
  /**
   * Limit export
   */
  limit: number;
  /**
   * Model name which is exported
   */
  modelName: any;
  /**
   * SevQuery object name
   */
  objectName: any;
  filter: {
    /**
     * Start date of the voucher
     */
    startDate: string;
    /**
     * End date of the voucher
     */
    endDate: string;
    /**
     * Start pay date of the voucher
     */
    startPayDate: string;
    /**
     * End pay date of the voucher
     */
    endPayDate: string;
    /**
     * filters the vouchers by contact
     */
    contact: {
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
    startAmount: number;
    /**
     * filters the vouchers by amount
     */
    endAmount: number;
  };
};
