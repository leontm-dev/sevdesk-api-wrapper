import { VoucherPosV1 } from "./base.v1.types";
import { VoucherPosV2 } from "./base.v2.types";
export type VoucherPosModule_Response_GetMany = {
    objects: (VoucherPosV1 & VoucherPosV2)[];
};
