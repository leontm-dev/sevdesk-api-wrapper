import { SevClient } from "../../types/models.types";
export type InvoicePos = {
    /**
     * The invoice position id
     */
    id: string;
    /**
     * The invoice position object name
     */
    objectName: string;
    /**
     * Date of invoice position creation
     */
    create: string;
    /**
     * Date of last invoice position update
     */
    update: string;
    /**
     * The invoice to which the position belongs.
     */
    invoice: {
        /**
         * Unique identifier of the invoice
         */
        id: string;
        /**
         * Model name, which is 'Invoice'
         */
        objectName: "Invoice";
    };
    /**
     * Part from your inventory which is used in the position.
     */
    part: {
        /**
         * Unique identifier of the part
         */
        id: string;
        /**
         * Model name, which is 'Part'
         */
        objectName: "Part";
    };
    /**
     * Quantity of the article/part
     */
    quantity: boolean;
    /**
     * Price of the article/part. Is either gross or net, depending on the sevdesk account setting.
     */
    price: string;
    /**
     * Name of the article/part.
     */
    name: string;
    /**
     * The unit in which the positions part is measured
     */
    unity: {
        /**
         * Unique identifier of the unit
         */
        id: string;
        /**
         * Model name, which is 'Unity'
         */
        objectName: "Unity";
    };
    /**
     * Client to which invoice position belongs. Will be filled automatically
     */
    sevClient: SevClient;
    /**
     * Position number of your position. Can be used to order multiple positions.
     */
    positionNumber: string;
    /**
     * A text describing your position.
     */
    text: string;
    /**
     * An optional discount of the position.
     */
    discount: string;
    /**
     * Tax rate of the position.
     */
    taxRate: string;
    /**
     * Discount sum of the position
     */
    sumDiscount: string;
    /**
     * Net accounting sum of the position
     */
    sumNetAccounting: string;
    /**
     * Tax accounting sum of the position
     */
    sumTaxAccounting: string;
    /**
     * Gross accounting sum of the position
     */
    sumGrossAccounting: string;
    /**
     * Net price of the part
     */
    priceNet: string;
    /**
     * Gross price of the part
     */
    priceGross: string;
    /**
     * Tax on the price of the part
     */
    priceTax: string;
};
