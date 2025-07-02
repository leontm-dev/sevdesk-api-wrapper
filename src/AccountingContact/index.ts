// Project-Imports

import {
  CreateANewAccountingContactBody,
  UpdateAnExistingAccountingContactBody,
} from "./types/body.types.js";
import {
  FindAccountingContactByIDResponse,
  CreateANewAccountingContactResponse,
  UpdateAnExistingAccountingContactResponse,
  DeletesAnAccountingContactResponse,
  RetrieveAccountingContactResponse,
} from "./types/response.types.js";
import { Responder, IResponse } from "../types/Response.js";

// Code

export class AccountingContact {
  private Responder: Responder;
  constructor(private apiKey: string) {
    this.Responder = new Responder(apiKey, "1");
  }
  /**
   * Returns all accounting contact which have been added up until now. Filters can be added.
   * @param contactId ID of contact for which you want the accounting contact.
   * @returns
   */
  async retrieveAccountingContact(
    contactId: string
  ): Promise<IResponse<RetrieveAccountingContactResponse>> {
    const response = await this.Responder.fetch(
      "/AccountingContact",
      {
        method: "GET",
      },
      [
        { key: "contact[id]", value: contactId },
        { key: "contact[objectName]", value: "Contact" },
      ]
    );

    if (response.type === "error") {
      throw response.obj;
    }

    return response.obj as IResponse<RetrieveAccountingContactResponse>;
  }
  /**
   * Creates a new accounting contact.
   * @param body Creation data
   * @returns Returns created accounting contact
   */
  async createANewAccountingContact(
    body: CreateANewAccountingContactBody
  ): Promise<IResponse<CreateANewAccountingContactResponse>> {
    const response = await this.Responder.fetch(`/AccountingContact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return Responder.validateResponse(response);
  }
  /**
   * Returns a single accounting contact
   * @param accountingContactId ID of accounting contact to return
   * @returns
   */
  async findAccountingContactByID(
    accountingContactId: number
  ): Promise<IResponse<FindAccountingContactByIDResponse>> {
    const response = await this.Responder.fetch(
      `/AccountingContact/${accountingContactId}`,
      {
        method: "GET",
      }
    );
    return Responder.validateResponse(response);
  }
  /**
   * Attention, updating an existing AccountingContact can lead to booking errors, especially in the DATEV export. Compatibility of sevdesk with DATEV is no longer guaranteed.
   * @param accountingContactId ID of accounting contact to update
   * @param body Update data
   * @returns Returns changed accounting contact resource
   */
  async updateAnExistingAccountingContact(
    accountingContactId: number,
    body: UpdateAnExistingAccountingContactBody
  ): Promise<IResponse<UpdateAnExistingAccountingContactResponse>> {
    const response = await this.Responder.fetch(
      `/AccountingContact/${accountingContactId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    return Responder.validateResponse(response);
  }
  async deletesAnAccountingContact(
    accountingContactId: number
  ): Promise<IResponse<DeletesAnAccountingContactResponse>> {
    const response = await this.Responder.fetch(
      `/AccountingContact/${accountingContactId}`,
      {
        method: "DELETE",
      }
    );
    return Responder.validateResponse(response);
  }
}
