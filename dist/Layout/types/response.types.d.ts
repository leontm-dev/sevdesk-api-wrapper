export type LayoutModule_Response_GetManyLetterpapers = {
    result: string;
    letterpapers: {
        id: string;
        pdf: string;
        sevClient: string;
        name: string;
        default: number;
        img: string;
    }[];
};
export type LayoutModule_Response_GetManyTemplates = {
    result: string;
    templates: {
        id: string;
        name: string;
        translationCode: string;
        sevClient: string;
        type: string;
        html: string;
        default: number;
        premium: boolean;
    }[];
};
export type LayoutModule_Response_UpdateOneOrderTemplate = {
    result: string;
    metadaten: {
        /**
         * the number of pages in the document
         */
        pages: number;
        /**
         * the id of the document
         */
        docId: string;
        /**
         * the pdf file
         */
        thumbs: {
            key: string;
            name: string;
            values: {
                name: string;
                vlaue: string;
                translationCode: string;
            }[];
        }[];
    };
};
export type LayoutModule_Response_UpdateOneCreditNoteTemplate = {
    result: string;
    metadaten: {
        /**
         * the number of pages in the document
         */
        pages: number;
        /**
         * the id of the document
         */
        docId: string;
        /**
         * the pdf file
         */
        thumbs: {
            key: string;
            name: string;
            values: {
                name: string;
                vlaue: string;
                translationCode: string;
            }[];
        }[];
    };
};
export type LayoutModule_Response_UpdateOneInvoiceTemplate = {
    result: string;
    metadaten: {
        /**
         * the number of pages in the document
         */
        pages: number;
        /**
         * the id of the document
         */
        docId: string;
        /**
         * the pdf file
         */
        thumbs: {
            key: string;
            name: string;
            values: {
                name: string;
                vlaue: string;
                translationCode: string;
            }[];
        }[];
    };
};
