// Project-Imports

import { API } from "../types/common.classes";
import { RetrieveVoucherPosResponse } from "./types/response.types";

// Code

export class VoucherPos {
  constructor(private apiKey: string) {}

  async getMany(voucherId?: number) {
    const queryObj: Record<string, string> = {};
    if (voucherId) {
      (queryObj["voucher[id]"] = voucherId.toString()),
        (queryObj["voucher[objectName]"] = "Voucher");
    }

    return await new API(this.apiKey).request<RetrieveVoucherPosResponse>(
      "/VoucherPos",
      queryObj,
      { method: "GET" }
    );
  }
}
