import { CreditNoteModule_Response_BookOne, CreditNoteModule_Response_CreateOne, CreditNoteModule_Response_CreateOneFromInvoice, CreditNoteModule_Response_CreateOneFromVoucher, CreditNoteModule_Response_DeleteOne, CreditNoteModule_Response_EnshrineOne, CreditNoteModule_Response_GetMany, CreditNoteModule_Response_GetOne, CreditNoteModule_Response_GetOnesPdf, CreditNoteModule_Response_MarkOneAsSent, CreditNoteModule_Response_ResetOnesStatusToDraft, CreditNoteModule_Response_ResetOnesStatusToOpen, CreditNoteModule_Response_SendOneByPrinting, CreditNoteModule_Response_SendOneViaEmail, CreditNoteModule_Response_UpdateOne } from "./types/response.types";
import { CreditNoteModule_Body_BookOne, CreditNoteModule_Body_CreateOne, CreditNoteModule_Body_CreateOneFromInvoice, CreditNoteModule_Body_CreateOneFromVoucher, CreditNoteModule_Body_MarkOneAsSent, CreditNoteModule_Body_SendOneViaEmail, CreditNoteModule_Body_UpdateOne } from "./types/body.types";
/**
 * @link https://api.sevdesk.de/#tag/CreditNote
 */
export declare class CreditNote {
    private apiKey;
    constructor(apiKey: string);
    /**
     * There are a multitude of parameter which can be used to filter.
     * @link https://api.sevdesk.de/#tag/CreditNote/operation/getCreditNotes
     * @param status Status of the CreditNote
     * @param creditNoteNumber Retrieve all CreditNotes with this creditNote number
     * @param startDate Retrieve all CreditNotes with a date equal or higher
     * @param endDate Retrieve all CreditNotes with a date equal or lower
     * @param contactId Retrieve all CreditNotes with this contact. Must be provided with contact[objectName]
     * @returns Array of objects (creditNote model)
     */
    getMany(status?: "100" | "200" | "300" | "500" | "750" | "1000", creditNoteNumber?: string, startDate?: Date, endDate?: Date, contactId?: number): Promise<import("../types/Response").IApiResponse<CreditNoteModule_Response_GetMany>>;
    /**
     * The list of parameters starts with the credit note array.
  This array contains all required attributes for a complete credit note.
  Most of the attributes are covered in the credit note attribute list, there are only two parameters standing out, namely mapAll and objectName.
  These are just needed for our system and you always need to provide them.
  The list of parameters then continues with the credit note position array.
  With this array you have the possibility to add multiple positions at once.
  In the example it only contains one position, again together with the parameters mapAll and objectName, however, you can add more credit note positions by extending the array.
  So if you wanted to add another position, you would add the same list of parameters with an incremented array index of "1" instead of "0".
  
  The list ends with the five parameters creditNotePosDelete, discountSave, discountDelete, takeDefaultAddress and forCashRegister.
  They only play a minor role if you only want to create a credit note but we will shortly explain what they can do.
  With creditNotePosDelete you have to option to delete credit note positions as this request can also be used to update credit notes.
  Both discount parameters are deprecated and have no use for credit notes, however they need to be provided in case you want to use the following two parameters.
  With takeDefaultAddress you can specify that the first address of the contact you are using for the credit note is taken for the credit note address attribute automatically, so you don't need to provide the address yourself.
  Finally, the forCashRegister parameter needs to be set to true if your credit note is to be booked on the cash register.
  If you want to know more about these parameters, for example if you want to use this request to update credit notes, feel free to contact our support.
  Finally, after covering all parameters, they only important information left, is that the order of the last five attributes always needs to be kept.
  You will also always need to provide all of them, as otherwise the request won't work properly.
      * @link https://api.sevdesk.de/#tag/CreditNote/operation/createcreditNote
     * @param body Creation data. Please be aware, that you need to provide at least all required parameter of the credit note model!
     * @returns Returns created credit note
     */
    createOne(body: CreditNoteModule_Body_CreateOne): Promise<import("../types/Response").IApiResponse<CreditNoteModule_Response_CreateOne>>;
    /**
     * Use this endpoint to create a new creditNote from a voucher.
     * @link https://api.sevdesk.de/#tag/CreditNote/operation/createCreditNoteFromInvoice
     * @param body
     */
    createOneFromInvoice(body: CreditNoteModule_Body_CreateOneFromInvoice): Promise<import("../types/Response").IApiResponse<CreditNoteModule_Response_CreateOneFromInvoice>>;
    /**
     * Use this endpoint to create a new creditNote from a voucher.
     * @link https://api.sevdesk.de/#tag/CreditNote/operation/createCreditNoteFromVoucher
     * @deprecated
     * @param body
     * @returns
     */
    createOneFromVoucher(body: CreditNoteModule_Body_CreateOneFromVoucher): Promise<import("../types/Response").IApiResponse<CreditNoteModule_Response_CreateOneFromVoucher>>;
    /**
     * Returns a single creditNote
     * @link https://api.sevdesk.de/#tag/CreditNote/operation/getcreditNoteById
     * @param creditNoteId ID of creditNote to return
     * @returns
  Array of objects (creditNote model)
     */
    getOne(creditNoteId: number): Promise<import("../types/Response").IApiResponse<CreditNoteModule_Response_GetOne>>;
    /**
     * Update a creditNote
     * @link https://api.sevdesk.de/#tag/CreditNote/operation/updatecreditNote
     * @param creditNoteId ID of creditNote to update
     * @param body Update data
     * @returns Changed creditNote resources
     */
    updateOne(creditNoteId: number, body: CreditNoteModule_Body_UpdateOne): Promise<import("../types/Response").IApiResponse<CreditNoteModule_Response_UpdateOne>>;
    /**
     * @link https://api.sevdesk.de/#tag/CreditNote/operation/deletecreditNote
     * @param creditNoteId Id of creditNote resource to delete
     * @returns
     */
    deleteOne(creditNoteId: number): Promise<import("../types/Response").IApiResponse<CreditNoteModule_Response_DeleteOne>>;
    /**
     * Sending a credit note to end-customers is an important part of the bookkeeping process.
  Depending on the way you want to send the credit note, you need to use different endpoints.
  Let's start with just printing out the credit note, meaning we only need to render the pdf.
     * @link https://api.sevdesk.de/#tag/CreditNote/operation/sendCreditNoteByPrinting
     * @param creditNoteId ID of creditNote to return
     * @param sendType the type you want to print.
     * @returns
     */
    sendOneByPrinting(creditNoteId: number, sendType: string): Promise<import("../types/Response").IApiResponse<CreditNoteModule_Response_SendOneByPrinting>>;
    /**
     * Marks an credit note as sent by a chosen send type.
     * @link https://api.sevdesk.de/#tag/CreditNote/operation/creditNoteSendBy
     * @param creditNoteId ID of credit note to mark as sent
     * @param body Specify the send type
     * @returns
     */
    markOneAsSent(creditNoteId: number, body: CreditNoteModule_Body_MarkOneAsSent): Promise<import("../types/Response").IApiResponse<CreditNoteModule_Response_MarkOneAsSent>>;
    /**
     * Sets the current date and time as a value for the property enshrined.
  This operation is only possible if the status is "Open" ("status": "200") or higher.
  
  Enshrined credit notes cannot be changed. This operation cannot be undone.
    * @link https://api.sevdesk.de/#tag/CreditNote/operation/creditNoteEnshrine
     * @param creditNoteId ID of the credit note to enshrine
     * @returns
     */
    enshrineOne(creditNoteId: number): Promise<import("../types/Response").IApiResponse<CreditNoteModule_Response_EnshrineOne>>;
    /**
     * Retrieves the pdf document of a credit note with additional metadata.
     * @link https://api.sevdesk.de/#tag/CreditNote/operation/creditNoteGetPdf
     * @param creditNoteId ID of credit note from which you want the pdf
     * @param download If u want to download the pdf of the credit note.
     * @param preventSendBy Defines if u want to send the credit note.
     * @returns A pdf file
     */
    getOnesPdf(creditNoteId: number, download: boolean, preventSendBy: boolean): Promise<import("../types/Response").IApiResponse<CreditNoteModule_Response_GetOnesPdf>>;
    /**
     * This endpoint sends the specified credit note to a customer via email.
  This will automatically mark the credit note as sent.
  Please note, that in production an credit note is not allowed to be changed after this happened!
     * @link https://api.sevdesk.de/#tag/CreditNote/operation/sendCreditNoteViaEMail
     * @param creditNoteId ID of credit note to be sent via email
     * @param body Mail data
     * @returns created mail object
     */
    sendOneViaEmail(creditNoteId: number, body: CreditNoteModule_Body_SendOneViaEmail): Promise<import("../types/Response").IApiResponse<CreditNoteModule_Response_SendOneViaEmail>>;
    /**
     * Booking the credit note with a transaction is probably the most important part in the bookkeeping process.
  There are several ways on correctly booking a credit note, all by using the same endpoint.
  Conveniently, the booking process is exactly the same as the process for invoices and vouchers.
  For this reason, you can have a look at it in the invoice chapter and all you need to do is to change "Invoice" into "CreditNote" in the URL.
     * @link https://api.sevdesk.de/#tag/CreditNote/operation/bookCreditNote
     * @param creditNoteId ID of credit note to book
     * @param body Booking data
     * @returns changed invoice log entry
     */
    bookOne(creditNoteId: number, body: CreditNoteModule_Body_BookOne): Promise<import("../types/Response").IApiResponse<CreditNoteModule_Response_BookOne>>;
    /**
     * Resets the status "Open" ("status": "200"). Linked transactions will be unlinked.
  This is not possible if the credit note itself or one of its transactions (CheckAccountTransaction) is already enshrined.
  
  This endpoint cannot be used to increase the status to "Open" ("status": "200").
  Use CreditNote/{creditNoteId}/sendBy / CreditNote/{creditNoteId}/sendViaEmail instead.
     * @link https://api.sevdesk.de/#tag/CreditNote/operation/creditNoteResetToOpen
     * @param creditNoteId ID of the credit note to reset
     * @returns changed credit note
     */
    resetOnesStatusToOpen(creditNoteId: number): Promise<import("../types/Response").IApiResponse<CreditNoteModule_Response_ResetOnesStatusToOpen>>;
    /**
     * Resets the status to "Draft" ("status": "100").
  This is only possible if the credit note has the status "Open" ("status": "200").
  If it has a higher status use CreditNote/{creditNoteId}/resetToOpen first.
     * @link https://api.sevdesk.de/#tag/CreditNote/operation/creditNoteResetToDraft
     * @param creditNoteId ID of the credit note to reset
     * @returns changed credit note
     */
    resetOnesStatusToDraft(creditNoteId: number): Promise<import("../types/Response").IApiResponse<CreditNoteModule_Response_ResetOnesStatusToDraft>>;
}
