export type CreateANewContactCommunicationWayBody = {
    contact?: {
        id: number;
        objectName: "Contact";
    };
    type: "PHONE" | "EMAIL" | "WEB" | "MOBILE";
    value: string;
    key: {
        id: number;
        objectName: "CommunicationWayKey";
    };
    main?: boolean | null;
};
export type UpdateAExistingCommunicationWayBody = {
    contact?: {
        id: number;
        objectName: "Contact";
    } | null;
    type?: "PHONE" | "EMAIL" | "WEB" | "MOBILE";
    value?: string;
    key?: {
        id: number;
        objectName: "CommunicationWayKey";
    } | null;
    main?: boolean | null;
};
