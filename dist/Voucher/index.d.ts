export declare class Voucher {
    private apiKey;
    constructor(apiKey: string);
    createOne(body: any): Promise<import("../types/Response").IApiResponse<unknown>>;
    upload(file: FormData): Promise<import("../types/Response").IApiResponse<unknown>>;
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
    getMany(status?: 50 | 100 | 1000, creditDebit?: "C" | "D", descriptionLike?: string, startDate?: Date, endDate?: Date, contactId?: number): Promise<import("../types/Response").IApiResponse<unknown>>;
    getOne(voucherId: number): Promise<import("../types/Response").IApiResponse<unknown>>;
    updateOne(voucherId: number, body: any): Promise<import("../types/Response").IApiResponse<unknown>>;
    enshrineOne(voucherId: number): Promise<import("../types/Response").IApiResponse<unknown>>;
    bookOne(voucherId: number, body: any): Promise<import("../types/Response").IApiResponse<unknown>>;
    resetOnesStatusToOpen(voucherId: number): Promise<import("../types/Response").IApiResponse<unknown>>;
    resetOnesStatusToDraft(voucherId: number): Promise<import("../types/Response").IApiResponse<unknown>>;
    getManyAccountGuides(): Promise<import("../types/Response").IApiResponse<unknown>>;
    getGuidanceByAmountNumber(accountNumber: number): Promise<import("../types/Response").IApiResponse<unknown>>;
    getGuidanceByTaxRule(taxRule: string): Promise<import("../types/Response").IApiResponse<unknown>>;
    getGuidanceForRevenueAccounts(): Promise<import("../types/Response").IApiResponse<unknown>>;
    getGuidanceForExpenseAccounts(): Promise<import("../types/Response").IApiResponse<unknown>>;
}
