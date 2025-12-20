import { SevClient } from "../../types/models.types";
import { ReceiptGuideDataTransfer } from "./base.types";
import { VoucherPosV1 } from "../../VoucherPos/types/base.v1.types";
import { VoucherPosV2 } from "../../VoucherPos/types/base.v2.types";
import { VoucherV1 } from "./base.v1.types";
import { VoucherV2 } from "./base.v2.types";
export type VoucherModule_Response_CreateOne = {
    /**
     * Voucher model
     */
    voucher: VoucherV1 & VoucherV2;
    voucherPos: VoucherPosV1 & VoucherPosV2;
    /**
     * Filename of a previously upload file which should be attached.
     */
    filename: string;
};
export type VoucherModule_Response_Upload = {
    objects: {
        pages: number;
        mimeType: string;
        originMimeType: string;
        filename: string;
        contentHash: string;
        content: any[];
    };
};
export type VoucherModule_Response_GetMany = {
    objects: (VoucherV1 & VoucherV2)[];
};
export type VoucherModule_Response_GetOne = {
    objects: (VoucherV1 & VoucherV2)[];
};
export type VoucherModule_Response_UpdateOne = VoucherV1 & VoucherV2;
export type VoucherModule_Response_EnshrineOne = {
    objects: null;
};
export type VoucherModule_Response_BookOne = {
    id: string;
    objectName: string;
    /**
     * Date of email creation
     */
    create: string;
    voucher: {
        /**
         * The id of the voucher
         */
        id: number;
        /**
         * Internal object name which is 'Voucher'.
         */
        objectName: "Voucher";
    };
    fromStatus: string;
    toStatus: string;
    amountPayed: string;
    bookingDate: string;
    /**
     * Client to which the voucher belongs.
     */
    sevClient: SevClient;
};
export type VoucherModule_Response_ResetOnesStatusToOpen = {
    objects: (VoucherV1 & VoucherV2)[];
};
export type VoucherModule_Response_ResetOnesStatusToDraft = {
    objects: (VoucherV1 & VoucherV2)[];
};
export type VoucherModule_Response_GetManyAccountGuides = {
    objects: ReceiptGuideDataTransfer[];
};
export type VoucherModule_Response_GetGuidanceByAmountNumber = {
    objects: ReceiptGuideDataTransfer[];
};
export type VoucherModule_Response_GetGuidanceByTaxRule = {
    objects: ReceiptGuideDataTransfer[];
};
export type VoucherModule_Response_GetGuidanceForRevenueAccounts = {
    objects: ReceiptGuideDataTransfer[];
};
export type VoucherModule_Response_GetGuidanceForExpenseAccounts = {
    objects: ReceiptGuideDataTransfer[];
};
