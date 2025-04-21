import { CategoryItem, SubCategoryItem } from "../types/ICategory";
import { SubCategory } from "./SubCategory.controller";

export class Category {
    private _subCategories: SubCategoryItem[];

    constructor(private _data: CategoryItem) {
        this._subCategories = _data.subCategories?.map(sc => new SubCategory(sc)) || [];
    }

    get id() { return this._data.id; }
    get name() { return this._data.name; }
    get description() { return this._data.description; }
    get image() { return this._data.image; }
    get subCategories(): SubCategoryItem[] {
        return this._subCategories;
    }
}
