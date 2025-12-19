"use strict";
// Imports
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = void 0;
var ApiResponse = /** @class */ (function () {
    function ApiResponse(httpStatus, message, data) {
        this.httpStatus = httpStatus;
        this.message = message;
        this.data = data;
        this.at = new Date();
        this.ok = httpStatus <= 399;
    }
    ApiResponse.prototype.toJSON = function () {
        return {
            httpStatus: this.httpStatus,
            message: this.message,
            data: this.data,
            at: this.data,
            ok: this.ok,
        };
    };
    ApiResponse.prototype.toString = function () {
        return "".concat(this.httpStatus, ": ").concat(this.message, " (").concat(this.at.toLocaleString(), ")");
    };
    return ApiResponse;
}());
exports.ApiResponse = ApiResponse;
