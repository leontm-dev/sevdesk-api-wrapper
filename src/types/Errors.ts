// Code

export interface IApiError {
  httpStatus: number;
  message: string;
  at: Date;
}
export class APIError implements IApiError {
  public at: Date;
  constructor(public httpStatus: number, public message: string) {
    this.at = new Date();
  }

  toJSON() {
    return {
      at: this.at,
      httpStatus: this.httpStatus,
      message: this.message,
    };
  }

  toString() {
    return `Sevdesk API Error: ${this.httpStatus} ${this.message}`;
  }
}
