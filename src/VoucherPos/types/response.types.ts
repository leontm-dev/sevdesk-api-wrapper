// Project-Imports

import { VoucherPosV1 } from "./base.v1.types";
import { VoucherPosV2 } from "./base.v2.types";

// Code

export type RetrieveVoucherPosResponse = {
  objects: (VoucherPosV1 & VoucherPosV2)[];
};
