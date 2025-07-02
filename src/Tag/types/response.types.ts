// Project-Imports

import { sevClient, Tag } from "../../types/sevdeskModels";

// Code

export type RetrieveTagsResponse = {
  objects: Tag[];
};
export type FindTagByIDREsponse = {
  objects: Tag[];
};
export type UpdateTagResponse = Tag;
export type DeletesATagResponse = {
  objects: [null];
};
export type CreateANewTagResponse = {
  id: string;
  objectName: "TagRelation";
  additionalInformation: string | null;
  create: Date;
  tag: {
    id: string;
    objectName: "Tag";
  };
  object: {
    id: number;
    objectName: "Invoice" | "Voucher" | "Order" | "CreditNote";
  };
  sevClient: sevClient;
};
export type RetrieveTagRelationsResponse = {
  objects: {
    id: string;
    objectName: "TagRelation";
    additionalInformation: string | null;
    create: Date;
    tag: {
      id: string;
      objectName: "Tag";
    };
    object: {
      id: number;
      objectName: "Invoice" | "Voucher" | "Order" | "CreditNote";
    };
    sevClient: sevClient;
  }[];
};
