import { SubCategoryItem } from "./ICategory";
import { CurrencyItem } from "./ICurrency";

export interface ProductItem {
    id: string;
    name: string;
    description: string;
    images: string; // JSON stringified array
    brand: string | null;
    type: string;
    stockLocation: string | null;
    url: string;
    unite: string;
    reference: string | null;
    price_max: number;
    price_min: number;
    currencyId: string;
    subCategoryId: string;
    createdAt: string;
    updatedAt: string;
    subCategory: SubCategoryItem;
    currency: CurrencyItem;
}
