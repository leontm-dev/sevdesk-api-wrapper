// Imports

import { Headers, Response } from "node-fetch";

export type IResponse<T> = {
  status: number;
  response: MiniResponse<T>;
};
export type MiniResponse<T> = {
  body: any;
  bodyUsed: boolean;
  data: T | null;
  headers: Headers;
  ok: boolean;
  redirected: boolean;
  status: number;
  statusText: string;
  type: Response["type"];
  url: string;
  size: number;
};
