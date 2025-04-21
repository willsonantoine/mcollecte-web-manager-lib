import { SubCategoryItem } from "../types/ICategory";
import { Category } from "./Category.controller";

export class SubCategory {
    private _category?: Category;

    constructor(private _data: SubCategoryItem) {
        if (_data.category) {
            this._category = new Category(_data.category);
        }
    }

    get id() { return this._data.id; }
    get name() { return this._data.name; }
    get description() { return this._data.description; }
    get image() { return this._data.image; }
    get category(): Category | undefined {
        return this._category;
    }
}
