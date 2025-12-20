import { Order } from "../Order/types/base.types";
export type SevClient = {
    /**
     * Unique identifier of the client
     */
    id: number;
    /**
     * Model name, which is 'SevClient'
     */
    objectName: "SevClient";
};
export type SevUser = {
    /**
     * Unique identifier of the user
     */
    id: string;
    /**
     * Model name, which is 'SevUser'
     */
    objectName: "SevUser";
};
export type Discounts = {
    /**
     * The id of the discount
     */
    id: number;
    /**
     * Model name, which is 'Discounts'
     */
    objectName: "Discounts";
    /**
     * Date of discount creation
     */
    create: string;
    /**
     * Date of last discount update
     */
    update: string;
    /**
     * Client to which the discount belongs
     */
    sevClient: SevClient;
    /**
     * Indicates that this is a discount or a surcharge (0 = surcharge, 1 = discount)
     */
    discount: string;
    /**
     * A text describing your position.
     */
    text: string;
    /**
     * Defines if this is a percentage or an absolute discount
     */
    percentage: string;
    /**
     * Value of the discount
     */
    value: string;
    /**
     * Defines is the Discount net or gross (0 = net, 1 = gross)
     */
    isNet: string;
};
export type Email = {
    /**
     * The email id
     */
    id: number;
    /**
     * The email object name
     */
    objectName: string;
    /**
     * Date of mail creation
     */
    create: string;
    /**
     * Date of last mail update
     */
    update: string;
    /**
     * Order model
     */
    object: Order;
    /**
     * The sender of the email
     */
    from: string;
    /**
     * The recipient of the email
     */
    to: string;
    /**
     * The subject of the email
     */
    subject: string;
    /**
     * The text of the email
     */
    text: string | null;
    /**
     * Client to which mail belongs. Will be filled automatically
     */
    sevClient: SevClient;
    /**
     * A list of mail addresses which are in the cc
     */
    cc: string | null;
    /**
     * A list of mail addresses which are in the bcc
     */
    bcc: string | null;
    /**
     * Date the mail arrived
     */
    arrived: string | null;
};
