import { RetrieveVoucherPosResponse } from "./types/response.types";
export declare class VoucherPos {
    private apiKey;
    constructor(apiKey: string);
    getMany(voucherId?: number): Promise<import("../types/Response").IApiResponse<RetrieveVoucherPosResponse>>;
}
