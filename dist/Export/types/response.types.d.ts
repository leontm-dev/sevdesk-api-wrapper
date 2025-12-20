export type ExportModule_Response_UpdateExportConfig = {
    objects: null;
};
export type ExportModule_Response_StartDatevCsvZipExport = {
    objects: string;
};
export type ExportModule_Response_StartDatevXmlZipExport = {
    objects: string;
};
export type ExportModule_Response_GetDownloadHash = {
    objects: {
        /**
         * Current progress of the export. Export is finished when "current" reaches "total" (usually 100)
         */
        current: number;
        /**
         * Total value of the export
         */
        total: number;
    }[];
};
export type ExportModule_Response_GetProgress = {
    objects: {
        /**
         * Current progress of the export. Export is finished when "current" reaches "total" (usually 100)
         */
        current: number;
        /**
         * Total value of the export
         */
        total: number;
    }[];
};
export type ExportModule_Response_GetJobDownloadInfo = {
    objects: {
        /**
         * Current progress of the export. Export is finished when "current" reaches "total" (usually 100)
         */
        filename: string;
        /**
         * Download url of the export file
         */
        link: string;
        /**
         * Expire date of the download url
         */
        linkExpireDate: string;
    }[];
};
export type ExportModule_Response_ExportInvoice = {
    objects: {
        filename: string;
        mimetype: string;
        base64encoded: boolean;
        content: string;
    };
};
export type ExportModule_Response_ExportInvoiceAsZip = {
    objects: {
        filename: string;
        mimetype: string;
        base64encoded: boolean;
        content: string | null;
    };
};
export type ExportModule_Response_ExportCreditNote = {
    objects: {
        filename: string;
        mimetype: string;
        base64encoded: boolean;
        content: string;
    };
};
export type ExportModule_Response_ExportVoucher = {
    objects: {
        filename: string;
        mimetype: string;
        base64encoded: boolean;
        content: string | null;
    };
};
export type ExportModule_Response_ExportTransaction = {
    objects: {
        filename: string;
        mimetype: string;
        base64encoded: boolean;
        content: string;
    };
};
export type ExportModule_Response_ExportVoucherAsZip = {
    objects: {
        filename: string;
        mimetype: string;
        base64encoded: boolean;
        content: string | null;
    };
};
export type ExportModule_Response_ExportContactList = {
    objects: {
        filename: string;
        mimetype: string;
        base64encoded: boolean;
        content: string;
    };
};
