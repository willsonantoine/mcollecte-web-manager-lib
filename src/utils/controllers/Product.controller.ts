import { ProductItem } from "../types/IProduit";
import { Currency } from "./Currency.controller";
import { SubCategory } from "./SubCategory.controller";

export class Product {
    private _subCategory: SubCategory;
    private _currency: Currency;

    constructor(private _data: ProductItem) {
        this._subCategory = new SubCategory(_data.subCategory);
        this._currency = new Currency(_data.currency);
    }

    get id() { return this._data.id; }
    get name() { return this._data.name; }
    get description() { return this._data.description; }
    get images(): string[] {
        try {
            return JSON.parse(this._data.images) || [];
        } catch {
            return [];
        }
    }
    get type() { return this._data.type; }
    get unite() { return this._data.unite; }
    get url() { return this._data.url; }
    get priceMin() { return this._data.price_min; }
    get priceMax() { return this._data.price_max; }
    get currency(): Currency { return this._currency; }
    get subCategory(): SubCategory { return this._subCategory; }
    get createdAt() { return this._data.createdAt; }
    get updatedAt() { return this._data.updatedAt; }
}
