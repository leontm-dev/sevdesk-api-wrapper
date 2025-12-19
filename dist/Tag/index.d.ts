import { CreateANewTagBody, UpdateTagBody } from "./types/body.types";
import { DeletesATagResponse, FindTagByIDREsponse, RetrieveTagRelationsResponse, RetrieveTagsResponse } from "./types/response.types";
export declare class Tag {
    private apiKey;
    constructor(apiKey: string);
    /**
     * Retrieve all tags
     * @link https://api.sevdesk.de/#tag/Tag/operation/getTags
     * @param id ID of the Tag
     * @param name Name of the Tag
     * @returns Array of objects (Tag model)
     */
    getMany(id?: number, name?: string): Promise<import("../types/Response").IApiResponse<RetrieveTagsResponse>>;
    /**
     * Returns a single tag
     * @link https://api.sevdesk.de/#tag/Tag/operation/getTagById
     * @param tagId ID of tag to return
     * @returns Array of objects (Tag model)
     */
    getOne(tagId: number): Promise<import("../types/Response").IApiResponse<FindTagByIDREsponse>>;
    /**
     * Update an existing tag
     * @link https://api.sevdesk.de/#tag/Tag/operation/updateTag
     * @param tagId ID of tag you want to update
     * @param body
     * @returns
     */
    updateOne(tagId: number, body: UpdateTagBody): Promise<import("../types/Response").IApiResponse<import("./types/base.types").Tag>>;
    /**
     *
     * @link https://api.sevdesk.de/#tag/Tag/operation/deleteTag
     * @param tagId Id of tag to delete
     * @returns Array of any
     */
    deleteOne(tagId: number): Promise<import("../types/Response").IApiResponse<DeletesATagResponse>>;
    /**
     * Create a new tag
     * @link https://api.sevdesk.de/#tag/Tag/operation/createTag
     * @param body
     * @returns
     */
    createOne(body: CreateANewTagBody): Promise<import("../types/Response").IApiResponse<import("./types/base.types").Tag>>;
    /**
     * Retrieve all tag relations
     * @link https://api.sevdesk.de/#tag/Tag/operation/getTagRelations
     * @returns Array of objects (Tag model)
     */
    getManyRelations(): Promise<import("../types/Response").IApiResponse<RetrieveTagRelationsResponse>>;
}
