// Project-Imports

import { API } from "../types/common.classes";
import { VoucherPosModule_Response_GetMany } from "./types/response.types";

// Code

export class VoucherPos {
  constructor(private apiKey: string) {}

  /**
   * Retrieve all voucher positions depending on the filters defined in the query.
   * @link https://api.sevdesk.de/#tag/VoucherPos/operation/getVoucherPositions
   * @param voucherId Retrieve all vouchers positions belonging to this voucher. Must be provided with voucher[objectName]
   * @returns
   */
  async getMany(voucherId?: number) {
    const queryObj: Record<string, string> = {};
    if (voucherId) {
      (queryObj["voucher[id]"] = voucherId.toString()),
        (queryObj["voucher[objectName]"] = "Voucher");
    }

    return await new API(
      this.apiKey
    ).request<VoucherPosModule_Response_GetMany>("/VoucherPos", queryObj, {
      method: "GET",
    });
  }
}
