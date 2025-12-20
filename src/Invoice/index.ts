// Project-Imports

import { API } from "../types/common.classes";
import {
  InvoiceModule_Body_BookOne,
  InvoiceModule_Body_CreateOne,
  InvoiceModule_Body_CreateOneFromOrder,
  InvoiceModule_Body_CreateReminderForOne,
  InvoiceModule_Body_MarkOneAsSent,
  InvoiceModule_Body_RenderOne,
  InvoiceModule_Body_SendOneViaEmail,
} from "./types/body.types";
import {
  InvoiceModule_Response_BookOne,
  InvoiceModule_Response_CheckifOneIsPartiallyPaid,
  InvoiceModule_Response_CreateOne,
  InvoiceModule_Response_CreateOneFromOrder,
  InvoiceModule_Response_CreateReminderForOne,
  InvoiceModule_Response_EnshrineOne,
  InvoiceModule_Response_GetMany,
  InvoiceModule_Response_GetOne,
  InvoiceModule_Response_GetOnesPdf,
  InvoiceModule_Response_GetOnesPositions,
  InvoiceModule_Response_GetOnesXML,
  InvoiceModule_Response_MarkOneAsSent,
  InvoiceModule_Response_RenderOne,
  InvoiceModule_Response_ResetOnesStatusToDraft,
  InvoiceModule_Response_ResetOnesStatusToOpen,
  InvoiceModule_Response_SendOneViaEmail,
} from "./types/response.types";

// Code

export class Invoice {
  constructor(private apiKey: string) {}

  /**
   * There are a multitude of parameter which can be used to filter. A few of them are attached but for a complete list please check out this list
   * @link https://api.sevdesk.de/#tag/Invoice/operation/getInvoices
   * @param status Status of the invoices
   * @param invoiceNumber Retrieve all invoices with this invoice number
   * @param startDate Retrieve all invoices with a date equal or higher
   * @param endDate Retrieve all invoices with a date equal or lower
   * @param contactId Retrieve all invoices with this contact. Must be provided with contact[objectName]
   * @returns
   */
  async getMany(
    status?: 100 | 200 | 1000,
    invoiceNumber?: string,
    startDate?: Date,
    endDate?: Date,
    contactId?: number
  ) {
    const queryObj: Record<string, string> = {};
    if (status) queryObj["status"] = status.toString();
    if (invoiceNumber) queryObj["invoiceNumber"] = invoiceNumber;
    if (startDate) queryObj["startDate"] = new Date(startDate).toISOString();
    if (endDate) queryObj["endDate"] = new Date(endDate).toISOString();
    if (contactId) {
      queryObj["contact[id]"] = contactId.toString();
      queryObj["contact[objectName]"] = "Contact";
    }

    return await new API(this.apiKey).request<InvoiceModule_Response_GetMany>(
      "/Invoice",
      queryObj,
      {
        method: "GET",
      }
    );
  }

  /**
   * This endpoint offers you the following functionality.

Create invoices together with positions and discounts
Delete positions while adding new ones
Delete or add discounts, or both at the same time
Automatically fill the address of the supplied contact into the invoice address
To make your own request sample slimmer, you can omit all parameters which are not required and nullable. However, for a valid and logical bookkeeping document, you will also need some of them to ensure that all the necessary data is in the invoice.

The list of parameters starts with the invoice array.
This array contains all required attributes for a complete invoice.
Most of the attributes are covered in the invoice attribute list, there are only two parameters standing out, namely mapAll and objectName.
These are just needed for our system and you always need to provide them.

The list of parameters then continues with the invoice position array.
With this array you have the possibility to add multiple positions at once.
In the example it only contains one position, again together with the parameters mapAll and objectName, however, you can add more invoice positions by extending the array.
So if you wanted to add another position, you would add the same list of parameters with an incremented array index of "1" instead of "0".

The list ends with the four parameters invoicePosDelete, discountSave, discountDelete and takeDefaultAddress.
They only play a minor role if you only want to create an invoice but we will shortly explain what they can do.
With invoicePosDelete you have to option to delete invoice positions as this request can also be used to update invoices.
With discountSave you can add discounts to your invoice.
With discountDelete you can delete discounts from your invoice.
With takeDefaultAddress you can specify that the first address of the contact you are using for the invoice is taken for the invoice address attribute automatically, so you don't need to provide the address yourself.
If you want to know more about these parameters, for example if you want to use this request to update invoices, feel free to contact our support.

Finally, after covering all parameters, they only important information left, is that the order of the last four attributes always needs to be kept.
You will also always need to provide all of them, as otherwise the request won't work properly.

Warning: You can not create a regular invoice with the deliveryDate being later than the invoiceDate.
To do that you will need to create a so called Abschlagsrechnung by setting the invoiceType parameter to AR.
   * @link https://api.sevdesk.de/#tag/Invoice/operation/createInvoiceByFactory
   * @param body Creation data. Please be aware, that you need to provide at least all required parameter of the invoice model!
   * @returns created invoice
   */
  async createOne(body: InvoiceModule_Body_CreateOne) {
    return await new API(this.apiKey).request<InvoiceModule_Response_CreateOne>(
      "/Invoice/Factory/saveInvoice",
      undefined,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * Returns a single invoice
   * @link https://api.sevdesk.de/#tag/Invoice/operation/getInvoiceById
   * @param invoiceId ID of invoice to return
   * @returns
   */
  async getOne(invoiceId: number) {
    return await new API(this.apiKey).request<InvoiceModule_Response_GetOne>(
      `/Invoice/${invoiceId}`,
      undefined,
      { method: "GET" }
    );
  }

  /**
   * Returns all positions of an invoice
   * @link https://api.sevdesk.de/#tag/Invoice/operation/getInvoicePositionsById
   * @param invoiceId ID of invoice to return the positions
   * @param limit limits the number of entries returned
   * @param offset set the index where the returned entries start
   * @param embed Get some additional information. Embed can handle multiple values, they must be separated by comma.
   * @returns
   */
  async getOnesPositions(
    invoiceId: number,
    limit?: number,
    offset?: number,
    embed?: string[]
  ) {
    const queryObj: Record<string, string> = {};
    if (limit) queryObj["limit"] = limit.toString();
    if (offset) queryObj["offset"] = offset.toString();
    if (embed) queryObj["embed"] = embed.join(",");

    return await new API(
      this.apiKey
    ).request<InvoiceModule_Response_GetOnesPositions>(
      `/Invoice/${invoiceId}/getPositions`,
      queryObj,
      { method: "GET" }
    );
  }

  /**
   * Create an invoice from an order
   * @link https://api.sevdesk.de/#tag/Invoice/operation/createInvoiceFromOrder
   * @param body Create invoice
   * @returns
   */
  async createOneFromOrder(body: InvoiceModule_Body_CreateOneFromOrder) {
    return await new API(
      this.apiKey
    ).request<InvoiceModule_Response_CreateOneFromOrder>(
      "/Invoice/Factory/createInvoiceFromOrder",
      undefined,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * Create an reminder from an invoice
   * @link https://api.sevdesk.de/#tag/Invoice/operation/createInvoiceReminder
   * @param invoiceId the id of the invoice
   * @param body Create invoice
   * @returns
   */
  async createReminderForOne(
    invoiceId: number,
    body: InvoiceModule_Body_CreateReminderForOne
  ) {
    return await new API(
      this.apiKey
    ).request<InvoiceModule_Response_CreateReminderForOne>(
      "/Invoice/Factory/createInvoiceReminder",
      { "invoice[id]": invoiceId.toString(), "invoice[objectName]": "Invoice" },
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * Returns 'true' if the given invoice is partially paid - 'false' if it is not. Invoices which are completely paid are regarded as not partially paid.
   * @link https://api.sevdesk.de/#tag/Invoice/operation/getIsInvoicePartiallyPaid
   * @param invoiceId ID of invoice to return
   * @returns
   */
  async checkIfOneIsPartiallyPaid(invoiceId: number) {
    return await new API(
      this.apiKey
    ).request<InvoiceModule_Response_CheckifOneIsPartiallyPaid>(
      `/Invoice/${invoiceId}/getIsPartiallyPaid`,
      undefined,
      { method: "GET" }
    );
  }

  /**
   * This endpoint will cancel the specified invoice therefor creating a cancellation invoice.
The cancellation invoice will be automatically paid and the source invoices status will change to 'cancelled'.
   * @link https://api.sevdesk.de/#tag/Invoice/operation/cancelInvoice
   * @param invoiceId ID of invoice to be cancelled
   * @returns cancellation invoice
   */
  async cancelOne(invoiceId: number) {
    return await new API(
      this.apiKey
    ).request<InvoiceModule_Response_CheckifOneIsPartiallyPaid>(
      `/Invoice/${invoiceId}/cancelInvoice`,
      undefined,
      { method: "POST" }
    );
  }

  /**
   * Using this endpoint you can render the pdf document of an invoice.
Use cases for this are the retrieval of the pdf location or the forceful re-render of a already sent invoice.
Please be aware that changing an invoice after it has been sent to a customer is not an allowed bookkeeping process.
   * @link https://api.sevdesk.de/#tag/Invoice/operation/invoiceRender
   * @param invoiceId ID of invoice to render
   * @param body Define if the document should be forcefully re-rendered.
   * @returns meta-data about pdf
   */
  async renderOne(invoiceId: number, body: InvoiceModule_Body_RenderOne) {
    return await new API(this.apiKey).request<InvoiceModule_Response_RenderOne>(
      `/Invoice/${invoiceId}/render`,
      undefined,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * This endpoint sends the specified invoice to a customer via email.
This will automatically mark the invoice as sent.
Please note, that in production an invoice is not allowed to be changed after this happened!
   * @link https://api.sevdesk.de/#tag/Invoice/operation/sendInvoiceViaEMail
   * @param invoiceId ID of invoice to be sent via email
   * @param body Mail data
   * @returns created mail object
   */
  async sendOneViaEmail(
    invoiceId: number,
    body: InvoiceModule_Body_SendOneViaEmail
  ) {
    return await new API(
      this.apiKey
    ).request<InvoiceModule_Response_SendOneViaEmail>(
      `/Invoice/${invoiceId}/sendViaEmail`,
      undefined,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * Retrieves the pdf document of an invoice with additional metadata.
   * @link https://api.sevdesk.de/#tag/Invoice/operation/invoiceGetPdf
   * @param invoiceId ID of invoice from which you want the pdf
   * @param download If u want to download the pdf of the invoice.
   * @param preventSendBy Defines if u want to send the invoice.
   * @returns
   */
  async getOnesPdf(
    invoiceId: number,
    download: boolean,
    preventSendBy: boolean
  ) {
    return await new API(
      this.apiKey
    ).request<InvoiceModule_Response_GetOnesPdf>(
      `/Invoice/${invoiceId}/getPdf`,
      {
        download: String(download),
        preventSendBy: String(preventSendBy),
      },
      { method: "GET" }
    );
  }

  /**
   * Retrieves the XML of an e-invoice
   * @link https://api.sevdesk.de/#tag/Invoice/operation/invoiceGetXml
   * @param invoiceId ID of invoice from which you want the XML
   * @returns A xml file
   */
  async getOnesXML(invoiceId: number) {
    return await new API(
      this.apiKey
    ).request<InvoiceModule_Response_GetOnesXML>(
      `/Invoice/${invoiceId}/getXml`,
      undefined,
      { method: "GET" }
    );
  }

  /**
   * Marks an invoice as sent by a chosen send type.
   * @link https://api.sevdesk.de/#tag/Invoice/operation/invoiceSendBy
   * @param invoiceId ID of invoice to mark as sent
   * @param body Specify the send type
   * @returns
   */
  async markOneAsSent(
    invoiceId: number,
    body: InvoiceModule_Body_MarkOneAsSent
  ) {
    return await new API(
      this.apiKey
    ).request<InvoiceModule_Response_MarkOneAsSent>(
      `/Invoice/${invoiceId}/sendBy`,
      undefined,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * Sets the current date and time as a value for the property enshrined.
This operation is only possible if the status is "Open" ("status": "200") or higher.

Enshrined invoices cannot be changed. This operation cannot be undone.
   * @link https://api.sevdesk.de/#tag/Invoice/operation/invoiceEnshrine
   * @param invoiceId ID of the invoice to enshrine
   * @returns 
   */
  async enshrineOne(invoiceId: number) {
    return await new API(
      this.apiKey
    ).request<InvoiceModule_Response_EnshrineOne>(
      `/Invoice/${invoiceId}/enshrine`,
      undefined,
      { method: "PUT" }
    );
  }

  /**
   * Booking the invoice with a transaction is probably the most important part in the bookkeeping process.
There are several ways on correctly booking an invoice, all by using the same endpoint.
for more information look here.
   * @link https://api.sevdesk.de/#tag/Invoice/operation/bookInvoice
   * @param invoiceId ID of invoice to book
   * @param body Booking data
   * @returns changed invoice log entry
   */
  async bookOne(invoiceId: number, body: InvoiceModule_Body_BookOne) {
    return await new API(this.apiKey).request<InvoiceModule_Response_BookOne>(
      `/Invoice/${invoiceId}/bookAmount`,
      undefined,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * Resets the status "Open" ("status": "200"). Linked transactions will be unlinked.
This is not possible if the invoice itself or one of its transactions (CheckAccountTransaction) is already enshrined.

This endpoint cannot be used to increase the status to "Open" ("status": "200").
Use Invoice/{invoiceId}/sendBy / Invoice/{invoiceId}/sendViaEmail instead.

This endpoint cannot be used for recurring invoices ("invoiceType": "WKR"). Use Invoice/Factory/saveInvoice instead.
   * @link https://api.sevdesk.de/#tag/Invoice/operation/invoiceResetToOpen
   * @param invoiceId ID of the invoice to reset
   * @returns changed invoice
   */
  async resetOnesStatusToOpen(invoiceId: number) {
    return await new API(
      this.apiKey
    ).request<InvoiceModule_Response_ResetOnesStatusToDraft>(
      `/Invoice/${invoiceId}/resetToOpen`,
      undefined,
      { method: "PUT" }
    );
  }

  /**
   * Resets the status to "Draft" ("status": "100").
This is only possible if the invoice has the status "Open" ("status": "200").
If it has a higher status use Invoice/{invoiceId}/resetToOpen first.

This endpoint cannot be used for recurring invoices ("invoiceType": "WKR").
Use Invoice/Factory/saveInvoice instead.
   * @link https://api.sevdesk.de/#tag/Invoice/operation/invoiceResetToDraft
   * @param invoiceId ID of the invoice to reset
   * @returns changed invoice
   */
  async resetOnesStatusToDraft(invoiceId: number) {
    return await new API(
      this.apiKey
    ).request<InvoiceModule_Response_ResetOnesStatusToDraft>(
      `/Invoice/${invoiceId}/resetToDraft`,
      undefined,
      { method: "PUT" }
    );
  }
}
