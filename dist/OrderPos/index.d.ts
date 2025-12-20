import { OrderPosModule_Body_UpdateOne } from "./types/body.types";
import { OrderPosModule_Response_DeleteOne, OrderPosModule_Response_GetMany, OrderPosModule_Response_GetOne } from "./types/response.types";
/**
 * @link https://api.sevdesk.de/#tag/OrderPos
 */
export declare class OrderPos {
    private apiKey;
    constructor(apiKey: string);
    /**
     * Retrieve all order positions depending on the filters defined in the query.
     * @link https://api.sevdesk.de/#tag/OrderPos/operation/getOrderPositions
     * @param orderId Retrieve all order positions belonging to this order. Must be provided with voucher[objectName]
     * @returns
     */
    getMany(orderId?: number): Promise<import("../types/Response").IApiResponse<OrderPosModule_Response_GetMany>>;
    /**
     * Returns a single order position
     * @link https://api.sevdesk.de/#tag/OrderPos/operation/getOrderPositionById
     * @param orderPosId ID of order position to return
     * @returns
     */
    getOne(orderPosId: number): Promise<import("../types/Response").IApiResponse<OrderPosModule_Response_GetOne>>;
    /**
     * Update an order position
     * @link https://api.sevdesk.de/#tag/OrderPos/operation/updateOrderPosition
     * @param orderPosId ID of order position to update
     * @param body Update data
     * @returns
     */
    updateOne(orderPosId: number, body: OrderPosModule_Body_UpdateOne): Promise<import("../types/Response").IApiResponse<import("./types/base.types").OrderPos>>;
    /**
     * @link https://api.sevdesk.de/#tag/OrderPos/operation/deleteOrderPos
     * @param orderPosId Id of order position resource to delete
     * @returns
     */
    deleteOne(orderPosId: number): Promise<import("../types/Response").IApiResponse<OrderPosModule_Response_DeleteOne>>;
}
