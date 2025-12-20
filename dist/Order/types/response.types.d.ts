import { OrderPos } from "../../OrderPos/types/base.types";
import { Discounts, Email } from "../../types/models.types";
import { Order } from "./base.types";
export type OrderModule_Respone_GetMany = {
    objects: Order[];
};
export type OrderModule_Response_CreateOne = {
    order: Order;
    orderPos: OrderPos[];
};
export type OrderModule_Response_GetOne = {
    objects: Order[];
};
export type OrderModule_Response_UpdateOne = Order;
export type OrderModule_Response_DeleteOne = {
    objects: [null];
};
export type OrderModule_Response_GetOnesPositions = {
    objects: OrderPos[];
};
export type OrderModule_Response_GetOnesDiscounts = {
    objects: Discounts[];
};
export type OrderModule_Response_GetOnesRelatedObjects = {
    objects: OrderPos[];
};
export type OrderModule_Response_SendOneViaEmail = {
    objects: Email[];
};
export type OrderModule_Response_CreatePackagingListFromOrder = Order;
export type OrderModule_Response_CreateContractNoteFromOrder = Order;
export type OrderModule_Response_GetOnesPdf = {
    filename: string;
    mimeType: string;
    base64encoded: boolean;
    content: string;
};
export type OrderModule_Response_MarkOneAsSent = Order;
