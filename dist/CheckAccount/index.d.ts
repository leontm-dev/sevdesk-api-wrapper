import { IResponse } from "../types/Response.js";
import { CreateANewClearingAccountBody, CreateANewFileImportAccountBody, UpdateAnExistingCheckAccountBody } from "./types/body.types.js";
import { RetrieveCheckAccountsResponse, CreateANewFileImportAccountResponse, FindCheckAccountByIdResponse, UpdateAnExistingCheckAccountResponse, DeleteACheckAccountResponse, GetTheBalanceAtAGivenDateResponse } from "./types/response.types.js";
export declare class CheckAccount {
    private apiKey;
    constructor(apiKey: string);
    /**
     * Retrieve all check accounts
     * @returns Array of objects (CheckAccount model)
     */
    retrieveCheckAccounts(): Promise<IResponse<RetrieveCheckAccountsResponse>>;
    /**
     * Creates a new banking account for file imports (CSV, MT940).
     * @param body Data to create a file import account
     * @returns CheckAccount model. Showing the properties relevant to file import accounts.
     */
    createANewFileImportAccount(body: CreateANewFileImportAccountBody): Promise<IResponse<CreateANewFileImportAccountResponse>>;
    /**
     * Creates a new clearing account.
     * @param body Data to create a clearing account
     * @returns CheckAccount model. Showing the properties relevant to clearing accounts.
     */
    createANewClearingAccount(body: CreateANewClearingAccountBody): Promise<IResponse<CreateANewFileImportAccountResponse>>;
    /**
     * Retrieve an existing check account
     * @param checkAccountId ID of check account
     * @returns Array of objects (CheckAccount model)
     */
    findCheckAccountByID(checkAccountId: number): Promise<IResponse<FindCheckAccountByIdResponse>>;
    /**
     * Update a check account
     * @param checkAccountId ID of check account to update
     * @param body Update data
     * @returns Returns changed check account resource
     */
    updateAnExistingCheckAccount(checkAccountId: number, body: UpdateAnExistingCheckAccountBody): Promise<IResponse<UpdateAnExistingCheckAccountResponse>>;
    /**
     *
     * @param checkAccountId Id of check account to delete
     * @returns Array of any
     */
    deleteACheckAccount(checkAccountId: number): Promise<IResponse<DeleteACheckAccountResponse>>;
    /**
     * Get the balance, calculated as the sum of all transactions sevdesk knows, up to and including the given date. Note that this balance does not have to be the actual bank account balance, e.g. if sevdesk did not import old transactions.
     * @param checkAccountId ID of check account
     * @param date Only consider transactions up to this date at 23:59:59
     */
    getTheBalanceAtAGivenDate(checkAccountId: number, date: Date): Promise<IResponse<GetTheBalanceAtAGivenDateResponse>>;
}
