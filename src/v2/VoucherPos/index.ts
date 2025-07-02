// Project-Imports

import { Responder, IResponse } from "../../types/Response";
import { RetrieveVoucherPosResponse } from "./types/response.types";

// Code

export class VoucherPos {
  private Responder: Responder;
  constructor(private apiKey: string) {
    this.Responder = new Responder(apiKey, "1");
  }

  async retrieveVoucherPositions(
    voucherId: number
  ): Promise<IResponse<RetrieveVoucherPosResponse>> {
    return this.Responder.process(
      `/VoucherPos`,
      {
        method: "GET",
      },
      [
        { key: "voucher[id]", value: voucherId.toString() },
        { key: "voucher[objectName]", value: "Voucher" },
      ]
    );
  }
}
