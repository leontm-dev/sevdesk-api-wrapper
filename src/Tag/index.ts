// Project-Imports

import { API } from "../types/common.classes";
import { CreateANewTagBody, UpdateTagBody } from "./types/body.types";
import {
  CreateANewTagResponse,
  DeletesATagResponse,
  FindTagByIDREsponse,
  RetrieveTagRelationsResponse,
  RetrieveTagsResponse,
  UpdateTagResponse,
} from "./types/response.types";

// Code

export class Tag {
  constructor(private apiKey: string) {}

  /**
   * Retrieve all tags
   * @link https://api.sevdesk.de/#tag/Tag/operation/getTags
   * @param id ID of the Tag
   * @param name Name of the Tag
   * @returns Array of objects (Tag model)
   */
  async getMany(id?: number, name?: string) {
    const queryObj: Record<string, string> = {};
    if (id) queryObj["id"] = id.toString();
    if (name) queryObj["name"] = name;

    return await new API(this.apiKey).request<RetrieveTagsResponse>(
      "/Tag",
      queryObj,
      { method: "GET" }
    );
  }

  /**
   * Returns a single tag
   * @link https://api.sevdesk.de/#tag/Tag/operation/getTagById
   * @param tagId ID of tag to return
   * @returns Array of objects (Tag model)
   */
  async getOne(tagId: number) {
    return await new API(this.apiKey).request<FindTagByIDREsponse>(
      `/Tag/${tagId}`,
      undefined,
      { method: "GET" }
    );
  }

  /**
   * Update an existing tag
   * @link https://api.sevdesk.de/#tag/Tag/operation/updateTag
   * @param tagId ID of tag you want to update
   * @param body
   * @returns
   */
  async updateOne(tagId: number, body: UpdateTagBody) {
    return await new API(this.apiKey).request<UpdateTagResponse>(
      `/Tag/${tagId}`,
      undefined,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   *
   * @link https://api.sevdesk.de/#tag/Tag/operation/deleteTag
   * @param tagId Id of tag to delete
   * @returns Array of any
   */
  async deleteOne(tagId: number) {
    return await new API(this.apiKey).request<DeletesATagResponse>(
      `/Tag/${tagId}`,
      undefined,
      { method: "DELETE" }
    );
  }

  /**
   * Create a new tag
   * @link https://api.sevdesk.de/#tag/Tag/operation/createTag
   * @param body
   * @returns
   */
  async createOne(body: CreateANewTagBody) {
    return await new API(this.apiKey).request<CreateANewTagResponse>(
      "/Tag/Factory/create",
      undefined,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  }

  /**
   * Retrieve all tag relations
   * @link https://api.sevdesk.de/#tag/Tag/operation/getTagRelations
   * @returns Array of objects (Tag model)
   */
  async getManyRelations() {
    return await new API(this.apiKey).request<RetrieveTagRelationsResponse>(
      "/TagRelation",
      undefined,
      { method: "GET" }
    );
  }
}
