import { TagModule_Body_CreateOne, TagModule_Body_UpdateOne } from "./types/body.types";
import { TagModule_Response_DeleteOne, TagModule_Response_GetManyRelations, TagModule_Response_GetOne } from "./types/response.types";
/**
 * @link https://api.sevdesk.de/#tag/Tag
 */
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
    getMany(id?: number, name?: string): Promise<import("../types/Response").IApiResponse<TagModule_Response_GetManyRelations>>;
    /**
     * Returns a single tag
     * @link https://api.sevdesk.de/#tag/Tag/operation/getTagById
     * @param tagId ID of tag to return
     * @returns Array of objects (Tag model)
     */
    getOne(tagId: number): Promise<import("../types/Response").IApiResponse<TagModule_Response_GetOne>>;
    /**
     * Update an existing tag
     * @link https://api.sevdesk.de/#tag/Tag/operation/updateTag
     * @param tagId ID of tag you want to update
     * @param body
     * @returns
     */
    updateOne(tagId: number, body: TagModule_Body_UpdateOne): Promise<import("../types/Response").IApiResponse<import("./types/base.types").Tag>>;
    /**
     *
     * @link https://api.sevdesk.de/#tag/Tag/operation/deleteTag
     * @param tagId Id of tag to delete
     * @returns Array of any
     */
    deleteOne(tagId: number): Promise<import("../types/Response").IApiResponse<TagModule_Response_DeleteOne>>;
    /**
     * Create a new tag
     * @link https://api.sevdesk.de/#tag/Tag/operation/createTag
     * @param body
     * @returns
     */
    createOne(body: TagModule_Body_CreateOne): Promise<import("../types/Response").IApiResponse<import("./types/base.types").Tag>>;
    /**
     * Retrieve all tag relations
     * @link https://api.sevdesk.de/#tag/Tag/operation/getTagRelations
     * @returns Array of objects (Tag model)
     */
    getManyRelations(): Promise<import("../types/Response").IApiResponse<TagModule_Response_GetManyRelations>>;
}
