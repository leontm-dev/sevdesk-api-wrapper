// Project-Imports

import {
  CreateANewCreditNoteResponse,
  CreatesANewCreditNoteFromAVoucherResponse,
  DeletesAnCreditNoteResponse,
  FindCreditNoteByIdResponse,
  RetrieveCreditNoteResponse,
  UpdateAnExistingCreditNoteResponse,
} from "./types/response.types";
import {
  CreateANewCreditNoteBody,
  CreatesANewCreditNoteFromAnInvoiceBody,
  CreatesANewCreditNoteFromAVoucherBody,
  UpdateAnExistingCreditNoteBody,
} from "./types/body.types";
import { API } from "../types/common.classes";

// Code

export class CreditNote {
  constructor(private apiKey: string) {}

  /**
   * There are a multitude of parameter which can be used to filter.
   * @link https://api.sevdesk.de/#tag/CreditNote/operation/getCreditNotes
   * @param status Status of the CreditNote
   * @param creditNoteNumber Retrieve all CreditNotes with this creditNote number
   * @param startDate Retrieve all CreditNotes with a date equal or higher
   * @param endDate Retrieve all CreditNotes with a date equal or lower
   * @param contactId Retrieve all CreditNotes with this contact. Must be provided with contact[objectName]
   * @returns Array of objects (creditNote model)
   */
  async getMany(
    status?: "100" | "200" | "300" | "500" | "750" | "1000",
    creditNoteNumber?: string,
    startDate?: Date,
    endDate?: Date,
    contactId?: number
  ) {
    const queryObj: Record<string, string> = {};
    if (status) queryObj["status"] = status;
    if (creditNoteNumber) queryObj["creditNoteNumber"] = creditNoteNumber;
    if (startDate) queryObj["startDate"] = startDate.toISOString();
    if (endDate) queryObj["endDate"] = endDate.toISOString();
    if (contactId) {
      queryObj["contact[id]"] = contactId.toString();
      queryObj["contact[objectName]"] = "Contact";
    }

    return await new API(this.apiKey).request<RetrieveCreditNoteResponse>(
      "/CreditNote",
      queryObj,
      { method: "GET" }
    );
  }
  /**
   * The list of parameters starts with the credit note array.
This array contains all required attributes for a complete credit note.
Most of the attributes are covered in the credit note attribute list, there are only two parameters standing out, namely mapAll and objectName.
These are just needed for our system and you always need to provide them.
The list of parameters then continues with the credit note position array.
With this array you have the possibility to add multiple positions at once.
In the example it only contains one position, again together with the parameters mapAll and objectName, however, you can add more credit note positions by extending the array.
So if you wanted to add another position, you would add the same list of parameters with an incremented array index of "1" instead of "0".

The list ends with the five parameters creditNotePosDelete, discountSave, discountDelete, takeDefaultAddress and forCashRegister.
They only play a minor role if you only want to create a credit note but we will shortly explain what they can do.
With creditNotePosDelete you have to option to delete credit note positions as this request can also be used to update credit notes.
Both discount parameters are deprecated and have no use for credit notes, however they need to be provided in case you want to use the following two parameters.
With takeDefaultAddress you can specify that the first address of the contact you are using for the credit note is taken for the credit note address attribute automatically, so you don't need to provide the address yourself.
Finally, the forCashRegister parameter needs to be set to true if your credit note is to be booked on the cash register.
If you want to know more about these parameters, for example if you want to use this request to update credit notes, feel free to contact our support.
Finally, after covering all parameters, they only important information left, is that the order of the last five attributes always needs to be kept.
You will also always need to provide all of them, as otherwise the request won't work properly.
    * @link https://api.sevdesk.de/#tag/CreditNote/operation/createcreditNote
   * @param body Creation data. Please be aware, that you need to provide at least all required parameter of the credit note model!
   * @returns Returns created credit note
   */
  async createOne(body: CreateANewCreditNoteBody) {
    return await new API(this.apiKey).request<CreateANewCreditNoteResponse>(
      "/CreditNote/Factory/saveCreditNote",
      undefined,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }
  /**
   * Use this endpoint to create a new creditNote from a voucher.
   * @link https://api.sevdesk.de/#tag/CreditNote/operation/createCreditNoteFromInvoice
   * @param body
   */
  async createOneFromInvoice(body: CreatesANewCreditNoteFromAnInvoiceBody) {
    return await new API(
      this.apiKey
    ).request<CreatesANewCreditNoteFromAVoucherResponse>(
      "/CreditNote/Factory/createFromInvoice",
      undefined,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * Use this endpoint to create a new creditNote from a voucher.
   * @link https://api.sevdesk.de/#tag/CreditNote/operation/createCreditNoteFromVoucher
   * @deprecated
   * @param body
   * @returns
   */
  async createOneFromVoucher(body: CreatesANewCreditNoteFromAVoucherBody) {
    return await new API(
      this.apiKey
    ).request<CreatesANewCreditNoteFromAVoucherResponse>(
      "/CreditNote/Factory/createFromVoucher",
      undefined,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  // TODO: Documentation
  async getOne(creditNoteId: number) {
    return await new API(this.apiKey).request<FindCreditNoteByIdResponse>(
      `/CreditNote/${creditNoteId}`,
      undefined,
      { method: "GET" }
    );
  }

  // TODO: Documentation
  async updateOne(creditNoteId: number, body: UpdateAnExistingCreditNoteBody) {
    return await new API(
      this.apiKey
    ).request<UpdateAnExistingCreditNoteResponse>(
      `/CreditNote/${creditNoteId}`,
      undefined,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  async deleteOne(creditNoteId: number) {
    return await new API(this.apiKey).request<DeletesAnCreditNoteResponse>(
      `/CreditNote/${creditNoteId}`,
      undefined,
      { method: "DELETE" }
    );
  }

  async sendOneByPrinting(creditNoteId: number, sendType: string) {
    return await new API(this.apiKey).request(
      `/CreditNote/${creditNoteId}/sendByWithRender`,
      { sendType },
      { method: "GET" }
    );
  }

  async markOneAsSent(creditNoteId: number, body: any) {
    return await new API(this.apiKey).request(
      `/CreditNote/${creditNoteId}/sendBy`,
      undefined,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  async enshrineOne(creditNoteId: number) {
    return await new API(this.apiKey).request(
      `/CreditNote/${creditNoteId}/enshrine`,
      undefined,
      { method: "PUT" }
    );
  }

  async getOnesPdf(
    creditNoteId: number,
    download: boolean,
    preventSendBy: boolean
  ) {
    return await new API(this.apiKey).request(
      `/CreditNote/${creditNoteId}/getPdf`,
      { download: String(download), preventSendBy: String(preventSendBy) },
      { method: "GET" }
    );
  }

  async sendOneViaEmail(creditNoteId: number, body: any) {
    return await new API(this.apiKey).request(
      `/CreditNote/${creditNoteId}/sendViaEmail`,
      undefined,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  async bookOne(creditNoteId: number, body: any) {
    return await new API(this.apiKey).request(
      `/CreditNote/${creditNoteId}/bookAmount`,
      undefined,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  async resetOnesStatusToOpen(creditNoteId: number) {
    return await new API(this.apiKey).request(
      `/CreditNote/${creditNoteId}/resetToOpen`,
      undefined,
      { method: "PUT" }
    );
  }

  async resetOnesStatusToDraft(creditNoteId: number) {
    return await new API(this.apiKey).request(
      `/CreditNote/${creditNoteId}/resetToDraft`,
      undefined,
      { method: "PUT" }
    );
  }
}
