// Project-Imports

import { Responder, IResponse } from "../types/Response";
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
  private Responder: Responder;
  constructor(private apiKey: string) {
    this.Responder = new Responder(apiKey, "1");
  }

  /**
   * Retrieve all tags
   * @link https://api.sevdesk.de/#tag/Tag/operation/getTags
   * @param id ID of the Tag
   * @param name Name of the Tag
   * @returns Array of objects (Tag model)
   */
  async retrieveTags(
    id: number,
    name: string
  ): Promise<IResponse<RetrieveTagsResponse>> {
    return this.Responder.process(
      "/Tag",
      {
        method: "GET",
      },
      [
        { key: "id", value: id },
        { key: "name", value: name },
      ]
    );
  }

  /**
   * Returns a single tag
   * @link https://api.sevdesk.de/#tag/Tag/operation/getTagById
   * @param tagId ID of tag to return
   * @returns Array of objects (Tag model)
   */
  async findTagByID(tagId: number): Promise<IResponse<FindTagByIDREsponse>> {
    return this.Responder.process(`/Tag/${tagId}`, { method: "GET" });
  }

  /**
   * Update an existing tag
   * @link https://api.sevdesk.de/#tag/Tag/operation/updateTag
   * @param tagId ID of tag you want to update
   * @param body
   * @returns
   */
  async updateTag(
    tagId: number,
    body: UpdateTagBody
  ): Promise<IResponse<UpdateTagResponse>> {
    return this.Responder.process("/Tag/" + tagId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  /**
   *
   * @link https://api.sevdesk.de/#tag/Tag/operation/deleteTag
   * @param tagId Id of tag to delete
   * @returns Array of any
   */
  async deletesATag(tagId: number): Promise<IResponse<DeletesATagResponse>> {
    return this.Responder.process(`/Tag/${tagId}`, {
      method: "DELETE",
    });
  }

  /**
   * Create a new tag
   * @link https://api.sevdesk.de/#tag/Tag/operation/createTag
   * @param body
   * @returns
   */
  async createANewTag(
    body: CreateANewTagBody
  ): Promise<IResponse<CreateANewTagResponse>> {
    return this.Responder.process("/Tag/Factory/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  async retrieveTagRelations(): Promise<
    IResponse<RetrieveTagRelationsResponse>
  > {
    return this.Responder.process("/TagRelation", {
      method: "GET",
    });
  }
}
