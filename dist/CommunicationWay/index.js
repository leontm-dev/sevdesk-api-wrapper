"use strict";
// Imports
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunicationWay = void 0;
var node_fetch_1 = __importDefault(require("node-fetch"));
// Project-Imports
var index_js_1 = require("../index.js");
// Code
var CommunicationWay = /** @class */ (function () {
    function CommunicationWay(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * Returns all communication ways which have been added up until now. Filters can be added.
     * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/getCommunicationWays
     * @param contactId ID of contact for which you want the communication ways.
     * @param type Type of the communication ways you want to get.
     * @param main Define if you only want the main communication way.
     * @returns Array of objects (CommunicationWay model)
     */
    CommunicationWay.prototype.retrieveCommunicationWays = function (contactId, type, main) {
        return __awaiter(this, void 0, void 0, function () {
            var query, response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = [];
                        if (contactId) {
                            query.push("contact[id]=".concat(contactId, "&contact[objectName]=Contact"));
                        }
                        if (type) {
                            query.push("type=".concat(type));
                        }
                        if (main) {
                            query.push("main=".concat(main));
                        }
                        return [4 /*yield*/, (0, node_fetch_1.default)("".concat(index_js_1.apiUrl, "/CommunicationWay?{").concat(query.join("&"), "}"), {
                                method: "GET",
                                headers: {
                                    Authorization: this.apiKey,
                                },
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, {
                                status: response.status,
                                response: {
                                    body: response.body,
                                    headers: response.headers,
                                    data: data ? data : null,
                                    ok: response.ok,
                                    redirected: response.redirected,
                                    status: response.status,
                                    statusText: response.statusText,
                                    type: response.type,
                                    url: response.url,
                                    bodyUsed: response.bodyUsed,
                                    size: response.size,
                                },
                            }];
                }
            });
        });
    };
    /**
     * Creates a new contact communication way.
     * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/createCommunicationWay
     * @param body Creation data
     * @returns Returns created contact communication way
     */
    CommunicationWay.prototype.createANewContactCommunicationWay = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, node_fetch_1.default)("".concat(index_js_1.apiUrl, "/CommunicationWay"), {
                            method: "POST",
                            headers: {
                                Authorization: this.apiKey,
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(body),
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, {
                                status: response.status,
                                response: {
                                    body: response.body,
                                    headers: response.headers,
                                    data: data ? data : null,
                                    ok: response.ok,
                                    redirected: response.redirected,
                                    status: response.status,
                                    statusText: response.statusText,
                                    type: response.type,
                                    url: response.url,
                                    bodyUsed: response.bodyUsed,
                                    size: response.size,
                                },
                            }];
                }
            });
        });
    };
    /**
     * Returns a single communication way
     * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/getCommunicationWayById
     * @param communicationWayId ID of communication way to return
     * @returns Array of objects (CommunicationWay model)
     */
    CommunicationWay.prototype.findCommunicationWayByID = function (communicationWayId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, node_fetch_1.default)("".concat(index_js_1.apiUrl, "/CommunicationWay/").concat(communicationWayId), {
                            method: "GET",
                            headers: {
                                Authorization: this.apiKey,
                            },
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, {
                                status: response.status,
                                response: {
                                    body: response.body,
                                    headers: response.headers,
                                    data: data ? data : null,
                                    ok: response.ok,
                                    redirected: response.redirected,
                                    status: response.status,
                                    statusText: response.statusText,
                                    type: response.type,
                                    url: response.url,
                                    bodyUsed: response.bodyUsed,
                                    size: response.size,
                                },
                            }];
                }
            });
        });
    };
    /**
     * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/deleteCommunicationWay
     * @param communicationWayId Id of communication way resource to delete
     * @returns Communication way deleted
     */
    CommunicationWay.prototype.deletesACommunicationWay = function (communicationWayId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, node_fetch_1.default)("".concat(index_js_1.apiUrl, "/CommunicationWay/").concat(communicationWayId), {
                            method: "DELETE",
                            headers: {
                                Authorization: this.apiKey,
                            },
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, {
                                status: response.status,
                                response: {
                                    body: response.body,
                                    headers: response.headers,
                                    data: data ? data : null,
                                    ok: response.ok,
                                    redirected: response.redirected,
                                    status: response.status,
                                    statusText: response.statusText,
                                    type: response.type,
                                    url: response.url,
                                    bodyUsed: response.bodyUsed,
                                    size: response.size,
                                },
                            }];
                }
            });
        });
    };
    /**
     * Update a communication way
     * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/UpdateCommunicationWay
     * @param communicationWayId ID of CommunicationWay to update
     * @param body Update data
     * @returns Returns changed CommunicationWay resource
     */
    CommunicationWay.prototype.updateAExistingCommunicationWay = function (communicationWayId, body) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, node_fetch_1.default)("".concat(index_js_1.apiUrl, "/CommunicationWay/").concat(communicationWayId), {
                            method: "PUT",
                            headers: {
                                Authorization: this.apiKey,
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(body),
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, {
                                status: response.status,
                                response: {
                                    body: response.body,
                                    headers: response.headers,
                                    data: data ? data : null,
                                    ok: response.ok,
                                    redirected: response.redirected,
                                    status: response.status,
                                    statusText: response.statusText,
                                    type: response.type,
                                    url: response.url,
                                    bodyUsed: response.bodyUsed,
                                    size: response.size,
                                },
                            }];
                }
            });
        });
    };
    /**
     * Returns all communication way keys.
     * @link https://api.sevdesk.de/#tag/CommunicationWay/operation/getCommunicationWayKeys
     * @returns Array of objects
     */
    CommunicationWay.prototype.retrieveCommunicationWayKeys = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, node_fetch_1.default)("".concat(index_js_1.apiUrl, "/CommunicationWayKey"), {
                            method: "GET",
                            headers: {
                                Authorization: this.apiKey,
                            },
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, {
                                status: response.status,
                                response: {
                                    body: response.body,
                                    headers: response.headers,
                                    data: data ? data : null,
                                    ok: response.ok,
                                    redirected: response.redirected,
                                    status: response.status,
                                    statusText: response.statusText,
                                    type: response.type,
                                    url: response.url,
                                    bodyUsed: response.bodyUsed,
                                    size: response.size,
                                },
                            }];
                }
            });
        });
    };
    return CommunicationWay;
}());
exports.CommunicationWay = CommunicationWay;
