import { CommunicationWay } from "./base.types";
export type getCommunicationWaysResponse = {
    objects: CommunicationWay[];
};
export type createCommunicationWayResponse = CommunicationWay;
export type getCommunicationWayByIdResponse = {
    objects: CommunicationWay[];
};
export type deleteCommunicationWayResponse = {
    objects: [null];
};
export type updateCommunicationWayResponse = CommunicationWay;
export type getCommunicationWayKeysResponse = {
    objects: {
        /**
         * The id of the communication way key
    
    ID: 1 - Privat |
    ID: 2 - Arbeit |
    ID: 3 - Fax |
    ID: 4 - Mobil |
    ID: 5 - " " |
    ID: 6 - Autobox |
    ID: 7 - Newsletter |
    ID: 8 - Rechnungsadresse
         */
        id: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
        /**
         * object name which is 'CommunicationWayKey'.
         */
        objectName: "CommunicationWayKey";
        /**
         * Date the communication way key was created
         */
        create: Date;
        /**
         * Date the communication way key was last updated
         */
        update: Date;
        /**
         * Name of the communication way key
         */
        name: "Arbeit" | "Autobox" | "Fax" | "Mobil" | "Newsletter" | "Privat" | "Rechnungsadresse" | " ";
        translationCode: string;
    }[];
};
