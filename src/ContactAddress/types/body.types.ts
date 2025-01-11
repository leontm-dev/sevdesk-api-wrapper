export type CreateANewContactAddressBody = {
  contact: {
    id: number;
    objectName: "Contact";
  };
  street?: string | null;
  zip?: string | null;
  city?: string | null;
  country: {
    id: number;
    objectName: "StaticCountry";
  };
  category: {
    id: number;
    objectName: "Category";
  } | null;
  name?: string | null;
  name2?: string | null;
  name3?: string | null;
  name4?: string | null;
};
export type UpdateAExistingContactAddressBody = {
  contact?: {
    id: number;
    objectName: "Contact";
  } | null;
  street?: string | null;
  zip?: string | null;
  city?: string | null;
  country?: {
    id: number;
    objectName: "StaticCountry";
  } | null;
  category?: {
    id: number;
    objectName: "Category";
  } | null;
  name?: string | null;
  name2?: string;
  name3?: string | null;
  name4?: string | null;
};
