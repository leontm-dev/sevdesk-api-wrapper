// Project-Imports

import { API } from "../types/common.classes";
import {
  OrderModule_Body_CreateContractNoteFromOrder,
  OrderModule_Body_CreateOne,
  OrderModule_Body_CreatePackagingListFromOrder,
  OrderModule_Body_MarkOneAsSent,
  OrderModule_Body_SendOneViaEmail,
  OrderModule_Body_UpdateOne,
} from "./types/body.types";
import {
  OrderModule_Respone_GetMany,
  OrderModule_Response_GetOne,
  OrderModule_Response_CreateOne,
  OrderModule_Response_UpdateOne,
  OrderModule_Response_DeleteOne,
  OrderModule_Response_GetOnesPositions,
  OrderModule_Response_GetOnesDiscounts,
  OrderModule_Response_GetOnesRelatedObjects,
  OrderModule_Response_SendOneViaEmail,
  OrderModule_Response_CreatePackagingListFromOrder,
  OrderModule_Response_CreateContractNoteFromOrder,
  OrderModule_Response_GetOnesPdf,
  OrderModule_Response_MarkOneAsSent,
} from "./types/response.types";

// Code

export class Order {
  constructor(private apiKey: string) {}

  /**
   * There are a multitude of parameter which can be used to filter. A few of them are attached but for a complete list please check out this list
   * @link https://api.sevdesk.de/#tag/Order/operation/getOrders
   * @param status Status of the order
   * @param orderNumber Retrieve all orders with this order number
   * @param startDate Retrieve all orders with a date equal or higher
   * @param endDate Retrieve all orders with a date equal or lower
   * @param contactId Retrieve all orders with this contact. Must be provided with contact[objectName]
   * @returns
   */
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

    return await new API(this.apiKey).request<OrderModule_Respone_GetMany>(
      "/Order",
      queryObj,
      {
        method: "GET",
      }
    );
  }

  /**
   * Creates an order to which positions can be added later.
   * @link https://api.sevdesk.de/#tag/Order/operation/createOrder
   * @param body Creation data. Please be aware, that you need to provide at least all required parameter of the order model!
   * @returns created voucher
   */
  async createOne(body: OrderModule_Body_CreateOne) {
    return await new API(this.apiKey).request<OrderModule_Response_CreateOne>(
      "/Order/Factory/saveOrder",
      undefined,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * Returns a single order
   * @link https://api.sevdesk.de/#tag/Order/operation/getOrderById
   * @param orderId ID of order to return
   * @returns
   */
  async getOne(orderId: number) {
    return await new API(this.apiKey).request<OrderModule_Response_GetOne>(
      `/Order/${orderId}`,
      undefined,
      {
        method: "GET",
      }
    );
  }

  /**
   * Update an order
   * @link https://api.sevdesk.de/#tag/Order/operation/updateOrder
   * @param orderId ID of order to update
   * @param body Update data
   * @returns changed order resource
   */
  async updateOne(orderId: number, body: OrderModule_Body_UpdateOne) {
    return await new API(this.apiKey).request<OrderModule_Response_UpdateOne>(
      `/Order/${orderId}`,
      undefined,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * @link https://api.sevdesk.de/#tag/Order/operation/deleteOrder
   * @param orderId Id of order resource to delete
   * @returns
   */
  async deleteOne(orderId: number) {
    return await new API(this.apiKey).request<OrderModule_Response_DeleteOne>(
      `/Order/${orderId}`,
      undefined,
      {
        method: "DELETE",
      }
    );
  }

  /**
   * Returns all positions of an order
   * @link https://api.sevdesk.de/#tag/Order/operation/getOrderPositionsById
   * @param orderId ID of order to return the positions
   * @param limit limits the number of entries returned
   * @param offset set the index where the returned entries start
   * @param embed Get some additional information. Embed can handle multiple values, they must be separated by comma.
   * @returns
   */
  async getOnesPositions(
    orderId: number,
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
    ).request<OrderModule_Response_GetOnesPositions>(
      `/Order/${orderId}/getPositions`,
      queryObj,
      { method: "GET" }
    );
  }

  /**
   * Returns all discounts of an order
   * @link https://api.sevdesk.de/#tag/Order/operation/getDiscounts
   * @param orderId ID of order to return the positions
   * @param limit limits the number of entries returned
   * @param offset set the index where the returned entries start
   * @param embed Get some additional information. Embed can handle multiple values, they must be separated by comma.
   * @returns
   */
  async getOnesDiscounts(
    orderId: number,
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
    ).request<OrderModule_Response_GetOnesDiscounts>(
      `/Order/${orderId}/getDiscounts`,
      queryObj,
      { method: "GET" }
    );
  }

  /**
   * Get related objects of a specified order
   * @link https://api.sevdesk.de/#tag/Order/operation/getRelatedObjects
   * @param orderId ID of order to return the positions
   * @param limit limits the number of entries returned
   * @param offset set the index where the returned entries start
   * @param embed Get some additional information. Embed can handle multiple values, they must be separated by comma.
   * @returns
   */
  async getOnesRelatedObjects(
    orderId: number,
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
    ).request<OrderModule_Response_GetOnesRelatedObjects>(
      `/Order/${orderId}/getRelatedObjects`,
      queryObj,
      { method: "GET" }
    );
  }

  /**
   * This endpoint sends the specified order to a customer via email.
This will automatically mark the order as sent.
Please note, that in production an order is not allowed to be changed after this happened!
   * @link https://api.sevdesk.de/#tag/Order/operation/sendorderViaEMail
   * @param orderId ID of order to be sent via email
   * @param body Mail data
   * @returns 
   */
  async sendOneViaEmail(
    orderId: number,
    body: OrderModule_Body_SendOneViaEmail
  ) {
    return await new API(
      this.apiKey
    ).request<OrderModule_Response_SendOneViaEmail>(
      `/Order/${orderId}/sendViaEmail`,
      undefined,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * Create packing list from order
   * @link https://api.sevdesk.de/#tag/Order/operation/createPackingListFromOrder
   * @param orderId the id of the order
   * @param body Create packing list
   * @returns
   */
  async createPackagingListFromOrder(
    orderId: number,
    body: OrderModule_Body_CreatePackagingListFromOrder
  ) {
    return await new API(
      this.apiKey
    ).request<OrderModule_Response_CreatePackagingListFromOrder>(
      "/Order/Factory/createPackagingList",
      { "order[id]": orderId.toString(), "order[objectName]": "Order" },
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * Create contract note from order
   * @link https://api.sevdesk.de/#tag/Order/operation/createContractNoteFromOrder
   * @param orderId the id of the order
   * @param body Create contract note
   * @returns
   */
  async createContractNoteFromOrder(
    orderId: number,
    body: OrderModule_Body_CreateContractNoteFromOrder
  ) {
    return await new API(
      this.apiKey
    ).request<OrderModule_Response_CreateContractNoteFromOrder>(
      "/Order/Factory/createContractNoteFromOrder",
      { "order[id]": orderId.toString(), "order[objectName]": "Order" },
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * Retrieves the pdf document of an order with additional metadata and commit the order.
   * @link https://api.sevdesk.de/#tag/Order/operation/orderGetPdf
   * @param orderId ID of order from which you want the pdf
   * @param download If u want to download the pdf of the order.
   * @param preventSendBy Defines if u want to send the order.
   * @returns A pdf file
   */
  async getOnesPdf(orderId: number, download: boolean, preventSendBy: boolean) {
    return await new API(this.apiKey).request<OrderModule_Response_GetOnesPdf>(
      `/Order/${orderId}/getPdf`,
      {
        downlaod: String(download),
        preventSendBy: String(preventSendBy),
      },
      { method: "GET" }
    );
  }

  /**
   * Marks an order as sent by a chosen send type.
   * @link https://api.sevdesk.de/#tag/Order/operation/orderSendBy
   * @param orderId ID of order to mark as sent
   * @param body Specify the send type
   * @returns changed order log entry
   */
  async markOneAsSent(orderId: number, body: OrderModule_Body_MarkOneAsSent) {
    return await new API(
      this.apiKey
    ).request<OrderModule_Response_MarkOneAsSent>(
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
