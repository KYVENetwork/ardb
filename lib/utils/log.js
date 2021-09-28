"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.Log = exports.LOGS = void 0;
var LOGS;
(function (LOGS) {
    LOGS[LOGS["NO"] = 0] = "NO";
    LOGS[LOGS["YES"] = 1] = "YES";
    LOGS[LOGS["ARWEAVE"] = 2] = "ARWEAVE";
})(LOGS = exports.LOGS || (exports.LOGS = {}));
class Log {
    constructor() {
        this.logs = LOGS.ARWEAVE;
    }
    init(logLevel = LOGS.ARWEAVE, arweave) {
        this.logs = logLevel;
        this.arweave = arweave;
        return this;
    }
    show(str, type = 'log') {
        if (this.logs === LOGS.YES || (this.logs === LOGS.ARWEAVE && this.arweave.getConfig().api.logging)) {
            console[type](str);
        }
    }
}
exports.Log = Log;
exports.log = new Log();
