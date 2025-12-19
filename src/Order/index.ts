// Project-Imports

import { API } from "../types/common.classes";

// Code

export class Order {
  constructor(private apiKey: string) {}

  async getMany(
    status?: 100 | 200 | 300 | 500 | 750 | 1000,
    orderNumber?: string,
    startDate?: Date,
    endDate?: Date,
    contactId?: number
  ) {
    const queryObj: Record<string, string> = {};
    if (status) queryObj["status"] = status.toString();
    if (orderNumber) queryObj["orderNumber"] = orderNumber;
    if (startDate) queryObj["startDate"] = new Date(startDate).toISOString();
    if (endDate) queryObj["endDate"] = new Date(endDate).toISOString();
    if (contactId) {
      queryObj["contact[id]"] = contactId.toString();
      queryObj["contact[objectName]"] = "Contact";
    }

    return await new API(this.apiKey).request("/Order", queryObj, {
      method: "GET",
    });
  }

  async createOne(body: any) {
    return await new API(this.apiKey).request(
      "/Order/Factory/saveOrder",
      undefined,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  async getOne(orderId: number) {
    return await new API(this.apiKey).request(`/Order/${orderId}`, undefined, {
      method: "GET",
    });
  }

  async updateOne(orderId: number, body: any) {
    return await new API(this.apiKey).request(`/Order/${orderId}`, undefined, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  }

  async deleteOne(orderId: number) {
    return await new API(this.apiKey).request(`/Order/${orderId}`, undefined, {
      method: "DELETE",
    });
  }

  async getManyOrderPositions(orderId: number) {
    return await new API(this.apiKey).request(
      `/Order/${orderId}/getPositions`,
      undefined,
      { method: "GET" }
    );
  }

  async getManyOrderDiscounts(orderId: number) {
    return await new API(this.apiKey).request(
      `/Order/${orderId}/getDiscounts`,
      undefined,
      { method: "GET" }
    );
  }

  async getManyRelatedObjects(orderId: number) {
    return await new API(this.apiKey).request(
      `/Order/${orderId}/getRelatedObjects`,
      undefined,
      { method: "GET" }
    );
  }

  async sendOneViaEmail(orderId: number, body: any) {
    return await new API(this.apiKey).request(
      `/Order/${orderId}/sendViaEmail`,
      undefined,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  async createPackagingListFromOrder(orderId: number, body: any) {
    return await new API(this.apiKey).request(
      "/Order/Factory/createPackagingList",
      { "order[id]": orderId.toString(), "order[objectName]": "Order" },
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  async createContractNoteFromOrder(orderId: number, body: any) {
    return await new API(this.apiKey).request(
      "/Order/Factory/createContractNoteFromOrder",
      { "order[id]": orderId.toString(), "order[objectName]": "Order" },
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  async getOnesPdf(orderId: number, download: boolean, preventSendBy: boolean) {
    return await new API(this.apiKey).request(
      `/Order/${orderId}/getPdf`,
      {
        downlaod: String(download),
        preventSendBy: String(preventSendBy),
      },
      { method: "GET" }
    );
  }

  async markOneAsSent(orderId: number, body: any) {
    return await new API(this.apiKey).request(
      `/Order/${orderId}/sendBy`,
      undefined,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          body: JSON.stringify(body),
        },
      }
    );
  }
}
