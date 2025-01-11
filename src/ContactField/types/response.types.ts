// Project-Imports

import {
  ContactCustomFieldSetting,
  ContactField,
} from "../../types/sevdeskModels.js";

// Code

export type RetrievePlaceholdersResponse = {
  objects: { key: string; value: { key: string; value: string }[] }[];
};
export type RetrieveContactFieldsResponse = {
  objects: ContactField[];
};
export type CreateContactFieldResponse = ContactField;
export type UpdateAContactFieldResponse = ContactField;
export type DeleteAContactFieldResponse = {
  objects: [null];
};
export type RetrieveContactFieldSettingsResponse = {
  objects: ContactCustomFieldSetting[];
};
export type CreateContactFieldSettingResponse = {
  objects: ContactCustomFieldSetting[];
};
export type FindContactFieldSettingByIDResponse = {
  objects: ContactCustomFieldSetting[];
};
export type UpdateContactFieldSettingResponse = ContactCustomFieldSetting;
export type DeletesAContactFieldSettingResponse = {
  objects: [null];
};
export type ReceiveCountReferenceResponse = {
  objects: number;
};
