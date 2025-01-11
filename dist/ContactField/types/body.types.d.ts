export type CreateContactFieldBody = {
    contact: {
        id: number;
        objectName: "Contact";
    };
    contactCustomFieldSetting: {
        id: number;
        objectName: "ContactCustomFieldSetting";
    };
    value: string;
    objectName: "ContactCustomField";
};
export type UpdateAContactFieldBody = {
    contact?: {
        id: number;
        objectName: "Contact";
    };
    contactCustomFieldSetting?: {
        id: number;
        objectName: "ContactCustomFieldSetting";
    };
    value?: string;
    objectName?: "ContactCustomField";
};
export type CreateContactFieldSettingBody = {
    name: string;
    description?: string;
    objectName?: "ContactCustomFieldSetting";
};
export type UpdateContactFieldSettingBody = {
    name?: string;
    description?: string;
    objectName?: "ContactCustomFieldSetting";
};
