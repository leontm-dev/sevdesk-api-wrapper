import { VoucherPosModule_Response_GetMany } from "./types/response.types";
export declare class VoucherPos {
    private apiKey;
    constructor(apiKey: string);
    /**
     * Retrieve all voucher positions depending on the filters defined in the query.
     * @link https://api.sevdesk.de/#tag/VoucherPos/operation/getVoucherPositions
     * @param voucherId Retrieve all vouchers positions belonging to this voucher. Must be provided with voucher[objectName]
     * @returns
     */
    getMany(voucherId?: number): Promise<import("../types/Response").IApiResponse<VoucherPosModule_Response_GetMany>>;
}
