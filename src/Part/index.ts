// Project-Imports

import { API } from "../types/common.classes";

// Code

export class Part {
  constructor(private apiKey: string) {}

  async getMany(partNumber?: string, name?: string) {
    const queryObj: Record<string, string> = {};
    if (partNumber) queryObj["partNumber"] = partNumber;
    if (name) queryObj["name"] = name;

    return await new API(this.apiKey).request("/Part", queryObj, {
      method: "GET",
    });
  }

  async createOne(body: any) {
    return await new API(this.apiKey).request("/Part", undefined, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  }

  async getOne(partId: number) {
    return await new API(this.apiKey).request(`/Part/${partId}`, undefined, {
      method: "GET",
    });
  }

  async updateOne(partId: number, body: any) {
    return await new API(this.apiKey).request(`/Part/${partId}`, undefined, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  }

  async getOnesStock(partId: number) {
    return await new API(this.apiKey).request(
      `/Part/${partId}/getStock`,
      undefined,
      { method: "GET" }
    );
  }
}
