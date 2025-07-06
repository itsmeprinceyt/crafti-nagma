import { ProductData } from "./ProductData.util";
import getSortedCategories from "./getCategories.util";
import { CategoryWithImage } from "../types/CategoryWithImages.type";

export default function getCategoryImages(): CategoryWithImage[] {
    const sortedCategories = getSortedCategories();
    const useProductIds = new Set<string>();

    const result: CategoryWithImage[] = [];

    for (const category of sortedCategories) {
        const availableProducts = ProductData.filter(product =>
            product.category.includes(category) &&
            !useProductIds.has(product.code)
        );

        if (availableProducts.length === 0) {
            continue;
        }

        const randomProduct = availableProducts[Math.floor(Math.random() * availableProducts.length)];
        useProductIds.add(randomProduct.code);
        result.push({
            category,
            image: randomProduct.main_image
        })
    }

    return result;
}
