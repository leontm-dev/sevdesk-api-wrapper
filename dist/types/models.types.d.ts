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
