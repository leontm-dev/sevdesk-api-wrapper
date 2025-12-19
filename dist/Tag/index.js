"use strict";
// Project-Imports
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
var common_classes_1 = require("../types/common.classes");
// Code
var Tag = /** @class */ (function () {
    function Tag(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * Retrieve all tags
     * @link https://api.sevdesk.de/#tag/Tag/operation/getTags
     * @param id ID of the Tag
     * @param name Name of the Tag
     * @returns Array of objects (Tag model)
     */
    Tag.prototype.getMany = function (id, name) {
        return __awaiter(this, void 0, void 0, function () {
            var queryObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryObj = {};
                        if (id)
                            queryObj["id"] = id.toString();
                        if (name)
                            queryObj["name"] = name;
                        return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Tag", queryObj, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns a single tag
     * @link https://api.sevdesk.de/#tag/Tag/operation/getTagById
     * @param tagId ID of tag to return
     * @returns Array of objects (Tag model)
     */
    Tag.prototype.getOne = function (tagId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Tag/".concat(tagId), undefined, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Update an existing tag
     * @link https://api.sevdesk.de/#tag/Tag/operation/updateTag
     * @param tagId ID of tag you want to update
     * @param body
     * @returns
     */
    Tag.prototype.updateOne = function (tagId, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Tag/".concat(tagId), undefined, {
                            method: "PUT",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(body),
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *
     * @link https://api.sevdesk.de/#tag/Tag/operation/deleteTag
     * @param tagId Id of tag to delete
     * @returns Array of any
     */
    Tag.prototype.deleteOne = function (tagId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Tag/".concat(tagId), undefined, { method: "DELETE" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Create a new tag
     * @link https://api.sevdesk.de/#tag/Tag/operation/createTag
     * @param body
     * @returns
     */
    Tag.prototype.createOne = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/Tag/Factory/create", undefined, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(body),
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Retrieve all tag relations
     * @link https://api.sevdesk.de/#tag/Tag/operation/getTagRelations
     * @returns Array of objects (Tag model)
     */
    Tag.prototype.getManyRelations = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new common_classes_1.API(this.apiKey).request("/TagRelation", undefined, { method: "GET" })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Tag;
}());
exports.Tag = Tag;
