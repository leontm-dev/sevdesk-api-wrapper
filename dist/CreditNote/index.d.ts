import { CreateANewCreditNoteResponse, CreatesANewCreditNoteFromAVoucherResponse, DeletesAnCreditNoteResponse, FindCreditNoteByIdResponse, RetrieveCreditNoteResponse, UpdateAnExistingCreditNoteResponse } from "./types/response.types";
import { CreateANewCreditNoteBody, CreatesANewCreditNoteFromAnInvoiceBody, CreatesANewCreditNoteFromAVoucherBody, UpdateAnExistingCreditNoteBody } from "./types/body.types";
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
    getMany(status?: "100" | "200" | "300" | "500" | "750" | "1000", creditNoteNumber?: string, startDate?: Date, endDate?: Date, contactId?: number): Promise<import("../types/Response").IApiResponse<RetrieveCreditNoteResponse>>;
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
    createOne(body: CreateANewCreditNoteBody): Promise<import("../types/Response").IApiResponse<CreateANewCreditNoteResponse>>;
    /**
     * Use this endpoint to create a new creditNote from a voucher.
     * @link https://api.sevdesk.de/#tag/CreditNote/operation/createCreditNoteFromInvoice
     * @param body
     */
    createOneFromInvoice(body: CreatesANewCreditNoteFromAnInvoiceBody): Promise<import("../types/Response").IApiResponse<CreatesANewCreditNoteFromAVoucherResponse>>;
    /**
     * Use this endpoint to create a new creditNote from a voucher.
     * @link https://api.sevdesk.de/#tag/CreditNote/operation/createCreditNoteFromVoucher
     * @deprecated
     * @param body
     * @returns
     */
    createOneFromVoucher(body: CreatesANewCreditNoteFromAVoucherBody): Promise<import("../types/Response").IApiResponse<CreatesANewCreditNoteFromAVoucherResponse>>;
    getOne(creditNoteId: number): Promise<import("../types/Response").IApiResponse<FindCreditNoteByIdResponse>>;
    updateOne(creditNoteId: number, body: UpdateAnExistingCreditNoteBody): Promise<import("../types/Response").IApiResponse<UpdateAnExistingCreditNoteResponse>>;
    deleteOne(creditNoteId: number): Promise<import("../types/Response").IApiResponse<DeletesAnCreditNoteResponse>>;
    sendOneByPrinting(creditNoteId: number, sendType: string): Promise<import("../types/Response").IApiResponse<unknown>>;
    markOneAsSent(creditNoteId: number, body: any): Promise<import("../types/Response").IApiResponse<unknown>>;
    enshrineOne(creditNoteId: number): Promise<import("../types/Response").IApiResponse<unknown>>;
    getOnesPdf(creditNoteId: number, download: boolean, preventSendBy: boolean): Promise<import("../types/Response").IApiResponse<unknown>>;
    sendOneViaEmail(creditNoteId: number, body: any): Promise<import("../types/Response").IApiResponse<unknown>>;
    bookOne(creditNoteId: number, body: any): Promise<import("../types/Response").IApiResponse<unknown>>;
    resetOnesStatusToOpen(creditNoteId: number): Promise<import("../types/Response").IApiResponse<unknown>>;
    resetOnesStatusToDraft(creditNoteId: number): Promise<import("../types/Response").IApiResponse<unknown>>;
}
