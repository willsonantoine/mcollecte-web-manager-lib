import { CurrencyItem } from "../types/ICurrency";

export class Currency {
    constructor(private _data: CurrencyItem) { }

    get id() { return this._data.id; }
    get name() { return this._data.name; }
}