import { OrderModule_Body_CreateContractNoteFromOrder, OrderModule_Body_CreateOne, OrderModule_Body_CreatePackagingListFromOrder, OrderModule_Body_MarkOneAsSent, OrderModule_Body_SendOneViaEmail, OrderModule_Body_UpdateOne } from "./types/body.types";
import { OrderModule_Respone_GetMany, OrderModule_Response_GetOne, OrderModule_Response_CreateOne, OrderModule_Response_DeleteOne, OrderModule_Response_GetOnesPositions, OrderModule_Response_GetOnesDiscounts, OrderModule_Response_GetOnesRelatedObjects, OrderModule_Response_SendOneViaEmail, OrderModule_Response_GetOnesPdf } from "./types/response.types";
export declare class Order {
    private apiKey;
    constructor(apiKey: string);
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
    getMany(status?: 100 | 200 | 300 | 500 | 750 | 1000, orderNumber?: string, startDate?: Date, endDate?: Date, contactId?: number): Promise<import("../types/Response").IApiResponse<OrderModule_Respone_GetMany>>;
    /**
     * Creates an order to which positions can be added later.
     * @link https://api.sevdesk.de/#tag/Order/operation/createOrder
     * @param body Creation data. Please be aware, that you need to provide at least all required parameter of the order model!
     * @returns created voucher
     */
    createOne(body: OrderModule_Body_CreateOne): Promise<import("../types/Response").IApiResponse<OrderModule_Response_CreateOne>>;
    /**
     * Returns a single order
     * @link https://api.sevdesk.de/#tag/Order/operation/getOrderById
     * @param orderId ID of order to return
     * @returns
     */
    getOne(orderId: number): Promise<import("../types/Response").IApiResponse<OrderModule_Response_GetOne>>;
    /**
     * Update an order
     * @link https://api.sevdesk.de/#tag/Order/operation/updateOrder
     * @param orderId ID of order to update
     * @param body Update data
     * @returns changed order resource
     */
    updateOne(orderId: number, body: OrderModule_Body_UpdateOne): Promise<import("../types/Response").IApiResponse<import("./types/base.types").Order>>;
    /**
     * @link https://api.sevdesk.de/#tag/Order/operation/deleteOrder
     * @param orderId Id of order resource to delete
     * @returns
     */
    deleteOne(orderId: number): Promise<import("../types/Response").IApiResponse<OrderModule_Response_DeleteOne>>;
    /**
     * Returns all positions of an order
     * @link https://api.sevdesk.de/#tag/Order/operation/getOrderPositionsById
     * @param orderId ID of order to return the positions
     * @param limit limits the number of entries returned
     * @param offset set the index where the returned entries start
     * @param embed Get some additional information. Embed can handle multiple values, they must be separated by comma.
     * @returns
     */
    getOnesPositions(orderId: number, limit?: number, offset?: number, embed?: string[]): Promise<import("../types/Response").IApiResponse<OrderModule_Response_GetOnesPositions>>;
    /**
     * Returns all discounts of an order
     * @link https://api.sevdesk.de/#tag/Order/operation/getDiscounts
     * @param orderId ID of order to return the positions
     * @param limit limits the number of entries returned
     * @param offset set the index where the returned entries start
     * @param embed Get some additional information. Embed can handle multiple values, they must be separated by comma.
     * @returns
     */
    getOnesDiscounts(orderId: number, limit?: number, offset?: number, embed?: string[]): Promise<import("../types/Response").IApiResponse<OrderModule_Response_GetOnesDiscounts>>;
    /**
     * Get related objects of a specified order
     * @link https://api.sevdesk.de/#tag/Order/operation/getRelatedObjects
     * @param orderId ID of order to return the positions
     * @param limit limits the number of entries returned
     * @param offset set the index where the returned entries start
     * @param embed Get some additional information. Embed can handle multiple values, they must be separated by comma.
     * @returns
     */
    getOnesRelatedObjects(orderId: number, limit?: number, offset?: number, embed?: string[]): Promise<import("../types/Response").IApiResponse<OrderModule_Response_GetOnesRelatedObjects>>;
    /**
     * This endpoint sends the specified order to a customer via email.
  This will automatically mark the order as sent.
  Please note, that in production an order is not allowed to be changed after this happened!
     * @link https://api.sevdesk.de/#tag/Order/operation/sendorderViaEMail
     * @param orderId ID of order to be sent via email
     * @param body Mail data
     * @returns
     */
    sendOneViaEmail(orderId: number, body: OrderModule_Body_SendOneViaEmail): Promise<import("../types/Response").IApiResponse<OrderModule_Response_SendOneViaEmail>>;
    /**
     * Create packing list from order
     * @link https://api.sevdesk.de/#tag/Order/operation/createPackingListFromOrder
     * @param orderId the id of the order
     * @param body Create packing list
     * @returns
     */
    createPackagingListFromOrder(orderId: number, body: OrderModule_Body_CreatePackagingListFromOrder): Promise<import("../types/Response").IApiResponse<import("./types/base.types").Order>>;
    /**
     * Create contract note from order
     * @link https://api.sevdesk.de/#tag/Order/operation/createContractNoteFromOrder
     * @param orderId the id of the order
     * @param body Create contract note
     * @returns
     */
    createContractNoteFromOrder(orderId: number, body: OrderModule_Body_CreateContractNoteFromOrder): Promise<import("../types/Response").IApiResponse<import("./types/base.types").Order>>;
    /**
     * Retrieves the pdf document of an order with additional metadata and commit the order.
     * @link https://api.sevdesk.de/#tag/Order/operation/orderGetPdf
     * @param orderId ID of order from which you want the pdf
     * @param download If u want to download the pdf of the order.
     * @param preventSendBy Defines if u want to send the order.
     * @returns A pdf file
     */
    getOnesPdf(orderId: number, download: boolean, preventSendBy: boolean): Promise<import("../types/Response").IApiResponse<OrderModule_Response_GetOnesPdf>>;
    /**
     * Marks an order as sent by a chosen send type.
     * @link https://api.sevdesk.de/#tag/Order/operation/orderSendBy
     * @param orderId ID of order to mark as sent
     * @param body Specify the send type
     * @returns changed order log entry
     */
    markOneAsSent(orderId: number, body: OrderModule_Body_MarkOneAsSent): Promise<import("../types/Response").IApiResponse<import("./types/base.types").Order>>;
}
