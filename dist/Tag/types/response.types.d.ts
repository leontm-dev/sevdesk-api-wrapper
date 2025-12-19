import type { Tag } from "./base.types";
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
export type CreateANewTagResponse = Tag;
export type RetrieveTagRelationsResponse = {
    objects: Tag[];
};
