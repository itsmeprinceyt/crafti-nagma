import { ProductCategory } from "./ProductData.util";

export default function getSortedCategories(): string[] {
    const categories = Object.values(ProductCategory);
    return categories.sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
    );
}
