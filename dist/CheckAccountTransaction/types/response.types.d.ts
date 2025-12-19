import { CheckAccountTransaction } from "./base.types";
export type getTransactionResponse = {
    objects: CheckAccountTransaction[];
};
export type createTransactionResponse = CheckAccountTransaction;
export type getCheckAccountTransactionByIdResponse = {
    objects: CheckAccountTransaction[];
};
export type updateCheckAccountTransactionResponse = CheckAccountTransaction;
export type deleteCheckAccountTransactionResponse = {
    objects: [null];
};
export type enshrineResponse = {
    objects: null;
};
