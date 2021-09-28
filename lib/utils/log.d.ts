import Arweave from 'arweave';
import Blockweave from 'blockweave';
export declare enum LOGS {
    NO = 0,
    YES = 1,
    ARWEAVE = 2
}
export declare class Log {
    private logs;
    private arweave;
    init(logLevel: LOGS, arweave: Arweave | Blockweave): this;
    show(str: string, type?: 'log' | 'warn' | 'error' | 'info'): void;
}
export declare const log: Log;
