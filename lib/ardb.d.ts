import Arweave from 'arweave';
import Blockweave from 'blockweave';
import { fieldType } from './faces/fields';
import { IGlobalOptions, RequestType } from './faces/options';
import ArdbBlock from './models/block';
import ArdbTransaction from './models/transaction';
import { LOGS } from './utils/log';
/**
 * Arweave as a database.
 * To easily interact with Arweave's graphql endpoint.
 */
export default class ArDB {
    private arweave;
    private reqType;
    private options;
    private after;
    private readonly afterRegex;
    private readonly emptyLinesRegex;
    private readonly fields;
    private includes;
    private log;
    /**
     *
     * @param arweave An arweave instance
     * @param logLevel Show logs. 0 = false, 1 = true, 2 = if arweave instance has log enabled.
     */
    constructor(arweave: Arweave | Blockweave, logLevel?: LOGS);
    /**
     * Get the current cursor (also known as `after`) in case you need to do extra manual work with it.
     * @returns cursor
     */
    getCursor(): string;
    /**
     * Search is the first function called before doing a find.
     * @param type What type of search are we going to do.
     * @returns ardb
     */
    search(type?: RequestType): ArDB;
    /**
     * Get transactions or blocks by transaction ID.
     * @param id The transaction/block ID.
     * @returns ardb
     */
    id(id: string): ArDB;
    /**
     * Get transactions or blocks by transaction IDs.
     * @param ids A list of transactions/blocks IDs.
     * @returns ardb
     */
    ids(ids: string[]): ArDB;
    /**
     * Get transaction(s) per tag App-Name = name.
     * @param name The App-Name value as string.
     * @returns ardb
     */
    appName(name: string): ArDB;
    /**
     * Get transaction(s) with the tag Content-Type = type.
     * @param type Content-Type as string.
     * @returns ardb
     */
    type(type: string): ArDB;
    /**
     * Get transaction(s) by a list of tags
     * @param tags Array of objects with name (string) and values (array|string)
     * @returns ardb
     */
    tags(tags: {
        name: string;
        values: string[] | string;
    }[]): ArDB;
    /**
     * Get transaction(s) by this specific tag, if previous ones exists it will be added to the list of tags.
     * @param name The tag name, ex: App-Name.
     * @param values The tag value or an array of values.
     * @returns ardb
     */
    tag(name: string, values: string | string[]): ArDB;
    /**
     * Get transaction(s) by owner(s).
     * @param owners Owner address or a list of owners.
     * @returns ardb
     */
    from(owners: string | string[]): ArDB;
    /**
     * Get transaction(s) by recipient(s).
     * @param recipients A recipient address or a list of recipients.
     * @returns ardb
     */
    to(recipients: string | string[]): ArDB;
    /**
     * Get blocks with the min height.
     * @param min The minimum height for the search.
     * @returns ardb
     */
    min(min: number): ArDB;
    /**
     * Get blocks by a max height.
     * @param max The maximum height for the search.
     * @returns ardb
     */
    max(max: number): ArDB;
    /**
     * Limits the returned results, this only works with `find()`, `findOne()` will always have a limit of 1, and `findAll()` has no limit.
     * @param limit A number between 1 and 100.
     * @returns ardb
     */
    limit(limit: number): ArDB;
    /**
     * Sort blocks or transactions by DESC or ASC.
     * @param sort HEIGHT_DESC or HEIGHT_ASC.
     * @returns ardb
     */
    sort(sort: 'HEIGHT_DESC' | 'HEIGHT_ASC'): ArDB;
    /**
     * Set a cursor for when to get started.
     * @param after The cursor string.
     * @returns ardb
     */
    cursor(after: string): ArDB;
    /**
     * Returns only the specified fields for block(s) or transaction(s).
     * @param fields The field or list of fields to return.
     * @returns ardb
     */
    only(fields: fieldType | fieldType[]): ArDB;
    /**
     * Exclude fields from the returned results.
     * @param fields A field or list of fields to exclude.
     * @returns ardb
     */
    exclude(fields: fieldType | fieldType[]): ArDB;
    /**
     * Find a list of blocks or transactions based on the specified search filters.
     * @param filters Optional. You can manually add the filters here instead of using our search methods.
     * @returns A list of transactions or blocks.
     */
    find(filters?: IGlobalOptions): Promise<ArdbTransaction[] | ArdbBlock[]>;
    /**
     * Find a single
     * @param filters
     * @returns
     */
    findOne(filters?: IGlobalOptions): Promise<ArdbTransaction | ArdbBlock>;
    findAll(filters?: IGlobalOptions): Promise<ArdbTransaction[] | ArdbBlock[]>;
    /**
     * To run with the cursor
     */
    next(): Promise<ArdbTransaction | ArdbBlock | ArdbTransaction[] | ArdbBlock[]>;
    run(query: string): Promise<ArdbTransaction[] | ArdbBlock[]>;
    runAll(query: string): Promise<ArdbTransaction[] | ArdbBlock[]>;
    /** Helpers */
    private checkSearchType;
    private get;
    private construct;
    private validateIncludes;
}
