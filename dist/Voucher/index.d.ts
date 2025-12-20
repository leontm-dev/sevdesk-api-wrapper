import { VoucherModule_Body_BookOne, VoucherModule_Body_CreateOne, VoucherModule_Body_UpdateOne } from "./types/body.types";
import { VoucherModule_Response_BookOne, VoucherModule_Response_CreateOne, VoucherModule_Response_EnshrineOne, VoucherModule_Response_GetGuidanceByAmountNumber, VoucherModule_Response_GetGuidanceByTaxRule, VoucherModule_Response_GetGuidanceForExpenseAccounts, VoucherModule_Response_GetGuidanceForRevenueAccounts, VoucherModule_Response_GetMany, VoucherModule_Response_GetManyAccountGuides, VoucherModule_Response_GetOne, VoucherModule_Response_ResetOnesStatusToDraft, VoucherModule_Response_ResetOnesStatusToOpen, VoucherModule_Response_UpdateOne, VoucherModule_Response_Upload } from "./types/response.types";
/**
 * Vouchers (receipts) is a generic term for various documents that serve as proof of business transactions for the bookkeeping.
Incoming and outgoing invoices, coupons and receipts are among the most common types of documents.
Every time one of our sevdesk customers makes a monetary input or output, the transaction needs to be documented with a receipt.
In sevdesk our customers can create a digital version of this receipt, the voucher, to which the actual offline receipt can be attached.
These vouchers can then be paid by the end-customers or by the customer, depending if it is an input or output, so that the transaction process is completely documented.
The vouchers are directly connected to the transactions of the customer, so every time a voucher is created and marked as paid, there must be a transaction on some bank account.
The voucher must then be linked to this transaction, otherwise false reports for tax offices and other institutions can be the case.
 * @link https://api.sevdesk.de/#tag/Voucher
 */
export declare class Voucher {
    private apiKey;
    constructor(apiKey: string);
    /**
     * Bundles the creation or updating of voucher and voucher position.
  The list of parameters starts with the voucher model.
  This contains all required attributes for a complete voucher.
  Most of the attributes are covered in the voucher attribute list, there are only two parameters standing out, namely mapAll and objectName.
  These are just needed for our system and you always need to provide them.
  
  The list of parameters then continues with the voucher position array.
  With this array you have the possibility to add multiple positions at once.
  In the example it only contains one position, again together with the parameters mapAll and objectName, however, you can add more voucher positions by extending the array.
  So if you wanted to add another position, you would add the same list of parameters with an incremented array index of "1" instead of "0".
  
  The list ends with the two parameters voucherPosDelete and filename.
  We will shortly explain what they can do.
  With voucherPosDelete you can delete voucher positions as this request can also be used to update draft vouchers.
  With filename you can attach a file to the voucher.
  For most of our customers this is a really important step, as they need to digitize their receipts.
  Finally, after covering all parameters, the only important information left, is that the order of the last two attributes always needs to be kept.
  
  The only valid status values for this endpoint are 50 (draft) and 100 (open). You can only update draft vouchers. If you have to, you can downgrade the status by calling resetToOpen (from paid) and resetToDraft (from open).
     * @link https://api.sevdesk.de/#tag/Voucher/operation/voucherFactorySaveVoucher
     * @param body Creation data. Please be aware, that you need to provide at least all required parameters of the voucher and voucher position model!
     * @returns created voucher
     */
    createOne(body: VoucherModule_Body_CreateOne): Promise<import("../types/Response").IApiResponse<VoucherModule_Response_CreateOne>>;
    /**
     * To attach a document to a voucher, you will need to upload it first for later use.
  To do this, you can use this request.
  When you successfully uploaded the file, you will get a sevdesk internal filename in the response.
  The filename will be a hash generated from your uploaded file. You will need it in the next request!
  After you got the just mentioned filename, you can enter it as a value for the filename parameter of the saveVoucher request.
  If you provided all necessary parameters and kept all of them in the right order, the file will be attached to your voucher.
     * @link https://api.sevdesk.de/#tag/Voucher/operation/voucherUploadFile
     * @param file File to upload
     * @returns A pdf file
     */
    upload(file: FormData): Promise<import("../types/Response").IApiResponse<VoucherModule_Response_Upload>>;
    /**
     * There are a multitude of parameter which can be used to filter. A few of them are attached but for a complete list please check out this list
     * @link https://api.sevdesk.de/#tag/Voucher/operation/getVouchers
     * @param status Status of the vouchers to retrieve.
     * @param creditDebit Define if you only want credit or debit vouchers.
     * @param descriptionLike Retrieve all vouchers with a description like this.
     * @param startDate Retrieve all vouchers with a date equal or higher
     * @param endDate Retrieve all vouchers with a date equal or lower
     * @param contactId Retrieve all vouchers with this contact. Must be provided with contact[objectName]
     * @returns
     */
    getMany(status?: 50 | 100 | 1000, creditDebit?: "C" | "D", descriptionLike?: string, startDate?: Date, endDate?: Date, contactId?: number): Promise<import("../types/Response").IApiResponse<VoucherModule_Response_GetMany>>;
    /**
     * Returns a single voucher
     * @link https://api.sevdesk.de/#tag/Voucher/operation/getVoucherById
     * @param voucherId ID of voucher to return
     * @returns
     */
    getOne(voucherId: number): Promise<import("../types/Response").IApiResponse<VoucherModule_Response_GetOne>>;
    /**
     * Update a draft voucher using this method if you want to change simple values like the description. Complex changes like adding a position should use /Voucher/Factory/saveVoucher.
  You can not change the status using this endpoint.
     * @link https://api.sevdesk.de/#tag/Voucher/operation/updateVoucher
     * @param voucherId ID of voucher to update
     * @param body Update data
     * @returns changed voucher resource
     */
    updateOne(voucherId: number, body: VoucherModule_Body_UpdateOne): Promise<import("../types/Response").IApiResponse<VoucherModule_Response_UpdateOne>>;
    /**
     * Sets the current date and time as a value for the property enshrined.
  This operation is only possible if the status is "Open" ("status": "100") or higher.
  
  Enshrined vouchers cannot be changed. This operation cannot be undone.
     * @link https://api.sevdesk.de/#tag/Voucher/operation/voucherEnshrine
     * @param voucherId ID of the voucher to enshrine
     * @returns
     */
    enshrineOne(voucherId: number): Promise<import("../types/Response").IApiResponse<VoucherModule_Response_EnshrineOne>>;
    /**
     * Booking the voucher with a transaction is probably the most important part in the bookkeeping process.
  There are several ways on correctly booking a voucher, all by using the same endpoint.
  Conveniently, the booking process is exactly the same as the process for invoices.
  For this reason, you can have a look at it here and all you need to do is to change "Invoice" into "Voucher" in the URL.
     * @link https://api.sevdesk.de/#tag/Voucher/operation/bookVoucher
     * @param voucherId ID of voucher to book
     * @param body Booking data
     * @returns voucher log entry
     */
    bookOne(voucherId: number, body: VoucherModule_Body_BookOne): Promise<import("../types/Response").IApiResponse<VoucherModule_Response_BookOne>>;
    /**
     * Resets the status to "Open" ("status": "100"). Linked payments will be unlinked. Created asset depreciation will be reset.
  This is not possible if the voucher is already enshrined!
  
  This endpoint can not be used to increase the status from "Draft" to "Open".
  You can only change the status from higher to lower ("Open" to "Draft").
  To change to higher status use Voucher/{voucherId}/bookAmount. To change to lower status use Voucher/{voucherId}/resetToDraft.
     * @link https://api.sevdesk.de/#tag/Voucher/operation/voucherResetToOpen
     * @param voucherId ID of the voucher to reset
     * @returns changed voucher
     */
    resetOnesStatusToOpen(voucherId: number): Promise<import("../types/Response").IApiResponse<VoucherModule_Response_ResetOnesStatusToOpen>>;
    /**
     * Resets the status "Draft" ("status": "50"). Linked payments will be unlinked. Created asset depreciation will be reset.
  This is not possible if the voucher is already enshrined!
  
  You can only change the status from higher to lower ("Open" to "Draft").
  To change to higher status use /Voucher/Factory/saveVoucher.
     * @link https://api.sevdesk.de/#tag/Voucher/operation/voucherResetToDraft
     * @param voucherId ID of the voucher to reset
     * @returns changed voucher
     */
    resetOnesStatusToDraft(voucherId: number): Promise<import("../types/Response").IApiResponse<VoucherModule_Response_ResetOnesStatusToDraft>>;
    /**
     * You can use this endpoint to help you decide which accounts you can use when creating a voucher
     * @link https://api.sevdesk.de/#tag/Voucher/operation/forAllAccounts
     * @returns
     */
    getManyAccountGuides(): Promise<import("../types/Response").IApiResponse<VoucherModule_Response_GetManyAccountGuides>>;
    /**
     * You can use this endpoint to get additional information about the account that you may want to use.
     * @link https://api.sevdesk.de/#tag/Voucher/operation/forAccountNumber
     * @param accountNumber The datev account number you want to get additional information of
     * @returns
     */
    getGuidanceByAmountNumber(accountNumber: number): Promise<import("../types/Response").IApiResponse<VoucherModule_Response_GetGuidanceByAmountNumber>>;
    /**
     * You can use this endpoint to get additional information about the tax rule (for example, USTPFL_UMS_EINN) that you may want to use.
     * @link https://api.sevdesk.de/#tag/Voucher/operation/forTaxRule
     * @param taxRule The code of the tax rule you want to get guidance for.
     * @returns
     */
    getGuidanceByTaxRule(taxRule: string): Promise<import("../types/Response").IApiResponse<VoucherModule_Response_GetGuidanceByTaxRule>>;
    /**
     * Provides all possible combinations for revenue accounts to be used with revenue receipts/vouchers.
     * @link https://api.sevdesk.de/#tag/Voucher/operation/forRevenue
     * @returns
     */
    getGuidanceForRevenueAccounts(): Promise<import("../types/Response").IApiResponse<VoucherModule_Response_GetGuidanceForRevenueAccounts>>;
    /**
     * Provides all possible combinations for expense accounts to be used with expense receipts/vouchers.
     * @link https://api.sevdesk.de/#tag/Voucher/operation/forExpense
     * @returns
     */
    getGuidanceForExpenseAccounts(): Promise<import("../types/Response").IApiResponse<VoucherModule_Response_GetGuidanceForExpenseAccounts>>;
}
