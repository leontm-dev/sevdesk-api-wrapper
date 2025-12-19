export type UpdateTagBody = {
    name: string;
};
export type CreateANewTagBody = {
    name: string;
    object: {
        id: number;
        objectName: "Invoice" | "Voucher" | "Order" | "CreditNote";
    };
};
