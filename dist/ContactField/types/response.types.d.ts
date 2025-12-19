import { ContactField, ContactCustomFieldSetting } from "./base.types";
export type getPlaceholderResponse = {
    objects: {
        key: string;
        value: {
            key: string;
            value: string;
        }[];
    }[];
};
export type getContactFieldsResponse = {
    objects: ContactField[];
};
export type createContactFieldResponse = ContactField;
export type updateContactFieldResponse = ContactField;
export type deleteContactFieldResponse = {
    objects: [null];
};
export type getContactFieldSettingsResponse = {
    objects: ContactCustomFieldSetting[];
};
export type createContactFieldSettingResponse = {
    objects: ContactCustomFieldSetting[];
};
export type getContactFieldSettingByIdResponse = {
    objects: ContactCustomFieldSetting[];
};
export type updateContactFieldSettingResponse = ContactCustomFieldSetting;
export type deleteContactFieldSettingResponse = {
    objects: [null];
};
export type getReferenceCountResponse = {
    objects: number;
};
