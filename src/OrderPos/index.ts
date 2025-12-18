// Project-Imports

import { API } from "../types/common.classes";

// Code

export class OrderPos {
  constructor(private apiKey: string) {}

  async getMany(orderId?: number) {
    const queryObj: Record<string, string> = {};
    if (orderId) {
      queryObj["order[id]"] = orderId.toString();
      queryObj["order[objectName]"] = "Order";
    }

    return await new API(this.apiKey).request("/OrderPos", queryObj, {
      method: "GET",
    });
  }

  async getOne(orderPosId: number) {
    return await new API(this.apiKey).request(
      `/OrderPos/${orderPosId}`,
      undefined,
      { method: "GET" }
    );
  }

  async updateOne(orderPosId: number, body: any) {
    return await new API(this.apiKey).request(
      `/OrderPos/${orderPosId}`,
      undefined,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  async deelteOne(orderPosId: number) {
    return await new API(this.apiKey).request(
      `/OrderPos/${orderPosId}`,
      undefined,
      { method: "DELETE" }
    );
  }
}
