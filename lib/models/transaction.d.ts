import Arweave from 'arweave';
import { GQLAmountInterface, GQLBlockInterface, GQLMetaDataInterface, GQLOwnerInterface, GQLTagInterface, GQLTransactionInterface } from '../faces/gql';
export default class ArdbTransaction implements GQLTransactionInterface {
    private _id;
    private _anchor;
    private _signature;
    private _recipient;
    private _owner;
    private _fee;
    private _quantity;
    private _data;
    private _tags;
    private _block;
    private _parent;
    private arweave;
    get id(): string;
    get anchor(): string;
    get signature(): string;
    get recipient(): string;
    get owner(): GQLOwnerInterface;
    get fee(): GQLAmountInterface;
    get quantity(): GQLAmountInterface;
    get data(): GQLMetaDataInterface;
    get tags(): GQLTagInterface[];
    get block(): GQLBlockInterface;
    get parent(): {
        id: string;
    };
    constructor(obj: Partial<GQLTransactionInterface>, arweave: Arweave);
}
