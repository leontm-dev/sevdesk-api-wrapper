export type CreateANewContactBody = {
  name?: string | null;
  status?: number | null;
  customerNumber?: string | null;
  parent?: {
    id: number;
    objectName: "Contact";
  } | null;
  surename?: string | null;
  familyname?: string | null;
  titel?: string | null;
  category: {
    id: number;
    objectName: "Category";
  };
  description?: string | null;
  academicTitle?: string | null;
  gender?: string | null;
  name2?: string | null;
  birthday?: Date | null;
  vatNumber?: string | null;
  bankAccount?: string | null;
  bankNumber?: string | null;
  defaultCashbackTime?: number | null;
  defaultCashbackPercent?: number | null;
  defaultTimeToPay?: number | null;
  taxNumber?: string | null;
  taxOffice?: string | null;
  exemptVat?: boolean | null;
  defaultDiscountAmount?: number | null;
  defaultDiscountPercentage?: boolean | null;
  buyerReference?: string | null;
  governmentAgency?: boolean | null;
};
export type UpdateAExistingContactBody = CreateANewContactBody;
