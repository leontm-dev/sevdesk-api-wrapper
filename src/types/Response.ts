// Imports

// Code

export interface IApiResponse<T = null> {
  httpStatus: number;
  message: string;
  data: T;
  at: Date;
  ok: boolean;
}

export class ApiResponse<T = null> implements IApiResponse<T> {
  httpStatus: number;
  message: string;
  data: T;
  at: Date;
  ok: boolean;
  constructor(httpStatus: number, message: string, data: T) {
    this.httpStatus = httpStatus;
    this.message = message;
    this.data = data;
    this.at = new Date();
    this.ok = httpStatus <= 399;
  }

  toJSON() {
    return {
      httpStatus: this.httpStatus,
      message: this.message,
      data: this.data,
      at: this.data,
      ok: this.ok,
    };
  }

  toString() {
    return `${this.httpStatus}: ${this.message} (${this.at.toLocaleString()})`;
  }
}
