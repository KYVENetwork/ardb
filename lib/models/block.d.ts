import { GQLBlockInterface } from '../faces/gql';
export default class ArdbBlock implements GQLBlockInterface {
    private _id;
    private _timestamp;
    private _height;
    private _previous;
    constructor(obj: Partial<GQLBlockInterface>);
    get id(): string;
    get timestamp(): number;
    get height(): number;
    get previous(): string;
}
