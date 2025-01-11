import { CheckAccount } from "../../types/sevdeskModels.js";
export type RetrieveCheckAccountsResponse = {
    objects: CheckAccount[];
};
export type CreateANewFileImportAccountResponse = {
    objects: CheckAccount;
};
export type CreateANewClearingAccountResponse = {
    objects: CheckAccount;
};
export type FindCheckAccountByIdResponse = {
    objects: CheckAccount[];
};
export type UpdateAnExistingCheckAccountResponse = {
    id: string;
    objectName: "CheckAccount";
    create: Date;
    update: Date;
    sevClient: {
        id: string;
        objectName: "SevClient";
    };
    name: string;
    iban: string | null;
    type: "online" | "offline";
    importType: "CSV" | "MT940" | null;
    currency: string;
    defaultAccount: string;
    status: 0 | 100;
    bankServer: string | null;
    autoMapTransactions: string | null;
    accountingNumber: string;
};
export type DeleteACheckAccountResponse = {
    objects: [null];
};
export type GetTheBalanceAtAGivenDateResponse = {
    objects: string;
};
