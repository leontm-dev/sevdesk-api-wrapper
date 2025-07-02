// Imports

import fetch, { RequestInit, Response } from "node-fetch";

// Code

type Config = {
  method: "GET" | "POST" | "PUT" | "DELETE";
} & RequestInit;

type FetchReturn =
  | {
      type: "response";
      obj: Response;
    }
  | {
      type: "error";
      obj: Error;
    };
export class IResponse<T> extends Response {
  json(): Promise<T> {
    return super.json() as Promise<T>;
  }
}
export class Responder {
  url: string;
  private apiKey: string;
  constructor(apiKey: string, v: "1" | "2", response?: Response) {
    this.url = `https://my.sevdesk.de/api/v${v}`;
    this.apiKey = apiKey;
  }
  async fetch(
    urlOfResource: string,
    config?: Config,
    query?: { key: string; value: any }[]
  ): Promise<FetchReturn> {
    try {
      const modUrlOfResource = urlOfResource.startsWith("/")
        ? urlOfResource
        : `/${urlOfResource}`;
      const queryString = query
        ? `?${query
            .map((q) => {
              if (q.value) `${q.key}=${q.value}`;
            })
            .join("&")}`
        : "";
      const response = await fetch(this.url + modUrlOfResource + queryString, {
        ...config,
        headers: {
          Authorization: this.apiKey,
          ...config?.headers,
        },
      });
      return {
        type: "response",
        obj: response,
      };
    } catch (error) {
      return {
        type: "error",
        obj: error instanceof Error ? error : new Error(String(error)),
      };
    }
  }
  async process<T>(
    urlOfResource: string,
    config?: Config,
    query?: { key: string; value: any }[]
  ) {
    const response = await this.fetch(urlOfResource, config, query);
    return Responder.validateResponse<T>(response);
  }
  static validateResponse<T>(response: FetchReturn): IResponse<T> | never {
    if (response.type === "error") {
      throw response.obj;
    }
    if (!response.obj.ok) {
      throw new Error(
        `Request failed with status ${response.obj.status}: ${response.obj.statusText}`
      );
    }
    return response.obj as IResponse<T>;
  }
}
