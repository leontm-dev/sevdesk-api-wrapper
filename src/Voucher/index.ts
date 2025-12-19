// Project-Imports

import { API } from "../types/common.classes";

// Code

export class Voucher {
  constructor(private apiKey: string) {}

  async createOne(body: any) {
    return await new API(this.apiKey).request(
      "/Voucher/Factory/saveVoucher",
      undefined,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  async upload(file: FormData) {
    return await new API(this.apiKey).request(
      "/Voucher/Factory/uploadTempFile",
      undefined,
      { method: "POST", body: file }
    );
  }

  /**
   * There are a multitude of parameter which can be used to filter. A few of them are attached but for a complete list please check out this list
   * @link https://api.sevdesk.de/#tag/Voucher/operation/getVouchers
   * @param status Status of the vouchers to retrieve.
   * @param creditDebit Define if you only want credit or debit vouchers.
   * @param descriptionLike Retrieve all vouchers with a description like this.
   * @param startDate Retrieve all vouchers with a date equal or higher
   * @param endDate Retrieve all vouchers with a date equal or lower
   * @param contactId Retrieve all vouchers with this contact. Must be provided with contact[objectName]
   * @returns
   */
  async getMany(
    status?: 50 | 100 | 1000,
    creditDebit?: "C" | "D",
    descriptionLike?: string,
    startDate?: Date,
    endDate?: Date,
    contactId?: number
  ) {
    const queryObj: Record<string, string> = {};
    if (status) queryObj["status"] = status.toString();
    if (creditDebit) queryObj["creditDebit"] = creditDebit;
    if (descriptionLike) queryObj["descriptionLike"] = descriptionLike;
    if (startDate) queryObj["startDate"] = new Date(startDate).toISOString();
    if (endDate) queryObj["endDate"] = new Date(endDate).toISOString();
    if (contactId) {
      queryObj["contact[id]"] = contactId.toString();
      queryObj["contact[objectName]"] = "Contact";
    }

    return await new API(this.apiKey).request("/Voucher", queryObj, {
      method: "GET",
    });
  }

  async getOne(voucherId: number) {
    return await new API(this.apiKey).request(
      `/Voucher/${voucherId}`,
      undefined,
      { method: "GET" }
    );
  }

  async updateOne(voucherId: number, body: any) {
    return await new API(this.apiKey).request(
      `/Voucher/${voucherId}`,
      undefined,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  async enshrineOne(voucherId: number) {
    return await new API(this.apiKey).request(
      `/Voucher/${voucherId}/enshrine`,
      undefined,
      { method: "PUT" }
    );
  }

  async bookOne(voucherId: number, body: any) {
    return await new API(this.apiKey).request(
      `/Voucher/${voucherId}/bookAmount`,
      undefined,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  async resetOnesStatusToOpen(voucherId: number) {
    return await new API(this.apiKey).request(
      `/Voucher/${voucherId}/resetToOpen`,
      undefined,
      { method: "PUT" }
    );
  }

  async resetOnesStatusToDraft(voucherId: number) {
    return await new API(this.apiKey).request(
      `/Voucher/${voucherId}/resetToDraft`,
      undefined,
      { method: "PUT" }
    );
  }

  async getManyAccountGuides() {
    return await new API(this.apiKey).request(
      "/ReceiptGuidance/forAllAccounts",
      undefined,
      { method: "GET" }
    );
  }

  async getGuidanceByAmountNumber(accountNumber: number) {
    return await new API(this.apiKey).request(
      "/ReceiptGuidance/forAccountNumber",
      { accountNumber: accountNumber.toString() },
      { method: "GET" }
    );
  }

  async getGuidanceByTaxRule(taxRule: string) {
    return await new API(this.apiKey).request(
      "/ReceiptGuidance/forTaxRule",
      { taxRule },
      { method: "GET" }
    );
  }

  async getGuidanceForRevenueAccounts() {
    return await new API(this.apiKey).request(
      "/ReceiptGuidance/forRevenue",
      undefined,
      { method: "GET" }
    );
  }

  async getGuidanceForExpenseAccounts() {
    return await new API(this.apiKey).request(
      "/ReceiptGuidance/forExpense",
      undefined,
      { method: "GET" }
    );
  }
}
