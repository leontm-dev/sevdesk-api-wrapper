"use strict";
// Code
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIError = void 0;
var APIError = /** @class */ (function () {
    function APIError(httpStatus, message) {
        this.httpStatus = httpStatus;
        this.message = message;
        this.at = new Date();
    }
    APIError.prototype.toJSON = function () {
        return {
            at: this.at,
            httpStatus: this.httpStatus,
            message: this.message,
        };
    };
    APIError.prototype.toString = function () {
        return "Sevdesk API Error: ".concat(this.httpStatus, " ").concat(this.message);
    };
    return APIError;
}());
exports.APIError = APIError;
