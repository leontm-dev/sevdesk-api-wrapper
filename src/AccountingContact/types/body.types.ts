// Code

export type CreateANewAccountingContactBody = {
  contact: {
    id: number;
    objectName: "Contact";
  };
  debitorNumber: number | null;
  creditorNumber: number | null;
};
export type UpdateAnExistingAccountingContactBody = {
  contact: {
    id: number;
    objectName: "Contact";
  };
  debitorNumber: number | null;
  creditorNumber: number | null;
};
