// Project-Imports

import { CommunicationWay } from "../../types/sevdeskModels.js";

// Code

export type RetrieveCommunicationWaysResponse = {
  objects: CommunicationWay[];
};
export type CreateANewContactCommunicationWayResponse = CommunicationWay;
export type FindCommunicationWayByIDResponse = {
  objects: CommunicationWay[];
};
export type DeletesACommunicationWayResponse = {
  objects: [null];
};
export type UpdateAExistingCommunicationWayResponse = CommunicationWay;
export type RetrieveCommunicationWayKeysResponse = {
  objects: {
    id: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
    objectName: "CommunicationWayKey";
    create: Date;
    update: Date;
    name:
      | "Arbeit"
      | "Autobox"
      | "Fax"
      | "Mobil"
      | "Newsletter"
      | "Privat"
      | "Rechnungsadresse"
      | " ";
    translationCode: string;
  }[];
};
