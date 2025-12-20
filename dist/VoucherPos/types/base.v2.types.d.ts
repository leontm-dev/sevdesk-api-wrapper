import { SevClient } from "../../types/models.types";
export type VoucherPosV2 = {
    /**
     * The voucher position id
     */
    id: string;
    /**
     * The voucher position object name
     */
    objectName: string;
    /**
     * Date of voucher position creation
     */
    create: string;
    /**
     * Date of last voucher position update
     */
    update: string;
    /**
     * Client to which voucher position belongs. Will be filled automatically
     */
    sevClient: SevClient;
    /**
     * The voucher to which the position belongs.
     */
    voucher: {
        /**
         * Unique identifier of the voucher
         */
        id: string;
        /**
         * Model name, which is 'Voucher'
         */
        objectName: "Voucher";
    };
    /**
     * Use this in sevdesk-Update 2.0 (replaces accountingType). The account datev to which the position belongs.
  An account datev is the booking account to which the position belongs.
  For more information, please refer to this section.
     */
    accountDatev: {
        /**
         * Unique identifier of the account datev
         */
        id: number;
        /**
         * Model name, which is 'AccountDatev'
         */
        objectName: "AccountDatev";
    };
    /**
     * The accounting type to which the position belongs estimated by our voucher recognition.
  An accounting type is the booking account to which the position belongs.
  For more information, please refer to this section.
     */
    estimatedAccountingType: {
        /**
         * Unique identifier of the accounting type
         */
        id: string;
        /**
         * Model name, which is 'AccountingType'
         */
        objectName: "AccountingType";
    };
    /**
     * Tax rate of the voucher position.
     */
    taxRate: string;
    /**
     * Determines whether 'sumNet' or 'sumGross' is regarded.
  If both are not given, 'sum' is regarded and treated as net or gross depending on 'net'. All positions must be either net or gross, a mixture of the two is not possible.
     */
    net: boolean;
    /**
     * Determines whether position is regarded as an asset which can be depreciated.
     */
    isAsset: boolean;
    /**
     * Net sum of the voucher position.
  Only regarded if 'net' is 'true', otherwise its readOnly.
     */
    sumNet: string;
    /**
     * Tax sum of the voucher position.
     */
    sumTax: string;
    /**
     * Gross sum of the voucher position.
  Only regarded if 'net' is 'false', otherwise its readOnly.
     */
    sumGross: string;
    /**
     * Net accounting sum. Is equal to sumNet.
     */
    sumNextAccounting: string;
    /**
     * Tax accounting sum. Is equal to sumTax.
     */
    sumTaxAccounting: string;
    /**
     * Gross accounting sum. Is equal to sumGross.
     */
    sumGrossAccounting: string;
    /**
     * Comment for the voucher position.
     */
    comment: string | null;
};
