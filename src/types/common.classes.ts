// Project-Imports

import { apiUrl } from "..";
import { APIError } from "./Errors";
import { IApiResponse } from "./Response";

// Code

export class API {
  constructor(private readonly apiKey: string) {}

  async request<T>(
    url: string,
    query: Record<string, string> = {},
    options: RequestInit
  ): Promise<IApiResponse<T>> {
    const queryArr = Object.entries(query);
    const res = await fetch(
      apiUrl +
        (!url.startsWith("/") && "/") +
        url +
        (queryArr.length > 0 && "?") +
        queryArr.map((v) => `${v[0]}=${v[1]}`).join("&"),
      {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          ...options.headers,
        },
        ...options,
      }
    );
    const data = res.json();

    if (!res.ok || res.status >= 400) {
      throw new APIError(res.status, res.statusText);
    }

    return {
      at: new Date(),
      ok: true,
      httpStatus: res.status,
      message: res.statusText,
      data: data as T,
    };
  }
}
