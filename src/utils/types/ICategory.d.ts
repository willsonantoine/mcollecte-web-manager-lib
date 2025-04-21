export interface SubCategoryItem {
    id: string;
    name: string;
    description: string;
    image: string;
    category?: CategoryItem;
}

export interface CategoryItem {
    id: string;
    name: string;
    description: string;
    image: string;
    subCategories?: SubCategoryItem[];
}
