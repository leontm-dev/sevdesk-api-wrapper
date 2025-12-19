// Project-Imports

import type { OrderPos } from "./base.types";

// Code

export type OrderPosModule_Response_GetMany = {
  objects: OrderPos[];
};
export type OrderPosModule_Response_GetOne = {
  objects: OrderPos[];
};
export type OrderPosModule_Response_UpdateOne = OrderPos;
export type OrderPosModule_Response_DeleteOne = { objects: [null] };
