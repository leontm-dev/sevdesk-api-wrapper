// Project-Imports

import { API } from "../types/common.classes";
import { OrderPosModule_Body_UpdateOne } from "./types/body.types";
import {
  OrderPosModule_Response_DeleteOne,
  OrderPosModule_Response_GetMany,
  OrderPosModule_Response_GetOne,
  OrderPosModule_Response_UpdateOne,
} from "./types/response.types";

// Code

/**
 * @link https://api.sevdesk.de/#tag/OrderPos
 */
export class OrderPos {
  constructor(private apiKey: string) {}

  /**
   * Retrieve all order positions depending on the filters defined in the query.
   * @link https://api.sevdesk.de/#tag/OrderPos/operation/getOrderPositions
   * @param orderId Retrieve all order positions belonging to this order. Must be provided with voucher[objectName]
   * @returns
   */
  async getMany(orderId?: number) {
    const queryObj: Record<string, string> = {};
    if (orderId) {
      queryObj["order[id]"] = orderId.toString();
      queryObj["order[objectName]"] = "Order";
    }

    return await new API(this.apiKey).request<OrderPosModule_Response_GetMany>(
      "/OrderPos",
      queryObj,
      {
        method: "GET",
      }
    );
  }

  /**
   * Returns a single order position
   * @link https://api.sevdesk.de/#tag/OrderPos/operation/getOrderPositionById
   * @param orderPosId ID of order position to return
   * @returns
   */
  async getOne(orderPosId: number) {
    return await new API(this.apiKey).request<OrderPosModule_Response_GetOne>(
      `/OrderPos/${orderPosId}`,
      undefined,
      { method: "GET" }
    );
  }

  /**
   * Update an order position
   * @link https://api.sevdesk.de/#tag/OrderPos/operation/updateOrderPosition
   * @param orderPosId ID of order position to update
   * @param body Update data
   * @returns
   */
  async updateOne(orderPosId: number, body: OrderPosModule_Body_UpdateOne) {
    return await new API(
      this.apiKey
    ).request<OrderPosModule_Response_UpdateOne>(
      `/OrderPos/${orderPosId}`,
      undefined,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * @link https://api.sevdesk.de/#tag/OrderPos/operation/deleteOrderPos
   * @param orderPosId Id of order position resource to delete
   * @returns
   */
  async deleteOne(orderPosId: number) {
    return await new API(
      this.apiKey
    ).request<OrderPosModule_Response_DeleteOne>(
      `/OrderPos/${orderPosId}`,
      undefined,
      { method: "DELETE" }
    );
  }
}
