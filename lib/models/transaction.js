"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = require("../utils/log");
class ArdbTransaction {
    constructor(obj, arweave) {
        this._id = obj.id;
        this._anchor = obj.anchor;
        this._signature = obj.signature;
        this._recipient = obj.recipient;
        this._owner = obj.owner;
        this._fee = obj.fee;
        this._quantity = obj.quantity;
        this._data = obj.data;
        this._tags = obj.tags;
        this._block = obj.block;
        if (obj.parent && obj.parent.id) {
            this._parent = obj.parent;
        }
        this.arweave = arweave;
    }
    // Getters
    get id() {
        if (!this._id)
            log_1.log.show("ID wasn't defined, make sure you have selected to return it.");
        return this._id;
    }
    get anchor() {
        if (!this._anchor)
            log_1.log.show("Anchor wasn't defined, make sure you have selected to return it.");
        return this._anchor;
    }
    get signature() {
        if (!this._signature)
            log_1.log.show("Signature wasn't defined, make sure you have selected to return it.");
        return this._signature;
    }
    get recipient() {
        if (!this._recipient)
            log_1.log.show("Recipient wasn't defined, make sure you have selected to return it.");
        return this._recipient;
    }
    get owner() {
        if (!this._owner)
            log_1.log.show("Owner wasn't defined, make sure you have selected to return it.");
        return this._owner;
    }
    get fee() {
        if (!this._fee)
            log_1.log.show("Fee wasn't defined, make sure you have selected to return it.");
        return this._fee;
    }
    get quantity() {
        if (!this._quantity)
            log_1.log.show("Quantity wasn't defined, make sure you have selected to return it.");
        return this._quantity;
    }
    get data() {
        if (!this._data)
            log_1.log.show("Data wasn't defined, make sure you have selected to return it.");
        return this._data;
    }
    get tags() {
        if (!this._tags)
            log_1.log.show("Tags wasn't defined, make sure you have selected to return it.");
        return this._tags;
    }
    get block() {
        if (!this._block)
            log_1.log.show("Block wasn't defined, make sure you have selected to return it.");
        return this._block;
    }
    get parent() {
        if (!this._parent || !this._parent.id)
            log_1.log.show("Parent wasn't defined, make sure you have selected to return it.");
        return this._parent;
    }
}
exports.default = ArdbTransaction;
