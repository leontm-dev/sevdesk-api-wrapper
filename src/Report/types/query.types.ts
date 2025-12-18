// Code

export type ExportInvoiceListSevQuery = {
  limit: number;
  modelName: any;
  objectName: any;
  filter: {
    invoiceType: any[];
    startDate: string;
    endDate: string;
    contact: {
      id: number;
      objectName: "Contact";
    };
    startAmount: number;
    endAmount: number;
  };
};
export type ExportOrderListSevQuery = {
  limit: number;
  modelName: any;
  objectName: any;
  filter: {
    orderType: "AN" | "AB" | "LI";
    startDate: string;
    endDate: string;
    contact: {
      id: number;
      objectName: "Contact";
    };
    startAmount: number;
    endAmount: number;
  };
};
export type ExportContactListSevQuery = {
  limit: number;
  modelName: any;
  objectName: any;
  filter: {
    zip: number;
    city: string;
    country: {
      id: number;
      objectName: "StaticCountry";
    };
    depth: boolean;
    onlyPeople: boolean;
  };
};
export type ExportVoucherListSevQuery = {
  limit: number;
  modelName: any;
  objectName: any;
  filter: {
    startDate: string;
    endDate: string;
    endPayDate: string;
    contact: {
      id: number;
      objectName: "Contact";
    };
    startAmount: number;
    endAmount: number;
  };
};
