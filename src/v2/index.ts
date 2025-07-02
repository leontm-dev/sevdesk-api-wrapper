// Project-Imports

import { VoucherPos } from "./VoucherPos";

export default class sevdeskClientV2 {
  VoucherPos: VoucherPos;
  constructor(private apiKey: string) {
    this.VoucherPos = new VoucherPos(this.apiKey);
  }
}
