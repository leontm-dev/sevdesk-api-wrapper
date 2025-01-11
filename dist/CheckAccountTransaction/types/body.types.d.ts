export type UpdateAnExistingTransactionBody = {
    valueDate: Date;
    entryDate: Date | null;
    paymtPurpose: string;
    amount: number | null;
    payeePayerName: string | null;
    checkAccount: {
        id: number;
        objectName: "CheckAccount";
    };
    status: 100 | 200 | 300 | 400;
    sourceTransaction: {
        id: number;
        objectName: "CheckAccountTransaction";
    } | null;
    targetTransaction: {
        id: number;
        objectName: "CheckAccountTransaction";
    } | null;
};
export type CreateANewTransactionBody = {
    valueDate: Date;
    entryDate?: Date | null;
    paymtPurpose?: string | null;
    amount: number;
    payeePayerName: string | null;
    payeePayerAcctNo?: string | null;
    payeePayerBankCode?: string | null;
    checkAccount: {
        id: number;
        objectName: "CheckAccount";
    };
    status: "100" | "200" | "300" | "400";
    sourceTransaction?: {
        id: number;
        objectName: "CheckAccountTransaction";
    };
    targetTransaction?: {
        id: number;
        objectName: "CheckAccountTransaction";
    };
};
