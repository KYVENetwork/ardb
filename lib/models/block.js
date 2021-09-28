"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = require("../utils/log");
class ArdbBlock {
    constructor(obj) {
        this._id = obj.id;
        this._timestamp = obj.timestamp;
        this._height = obj.height;
        this._previous = obj.previous;
    }
    // Getters
    get id() {
        if (!this._id)
            log_1.log.show("ID wasn't defined, make sure you have selected to return it.");
        return this._id;
    }
    get timestamp() {
        if (!this._timestamp)
            log_1.log.show("Timestamp wasn't defined, make sure you have selected to return it.");
        return this._timestamp;
    }
    get height() {
        if (!this._height)
            log_1.log.show("Height wasn't defined, make sure you have selected to return it.");
        return this._height;
    }
    get previous() {
        if (!this._previous)
            log_1.log.show("Previous wasn't defined, make sure you have selected to return it.");
        return this._previous;
    }
}
exports.default = ArdbBlock;
