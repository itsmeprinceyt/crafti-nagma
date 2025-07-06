import { ProductData } from './ProductData.util';
import { ProductDetails } from '../types/ProductData.type';

export function getProductsByCategory(category: string): ProductDetails[] {
    const lowerCaseCategory = category.toLowerCase();

    const filtered = ProductData.filter((product) =>
        product.category.some((cat) => cat.toLowerCase() === lowerCaseCategory)
    );

    return filtered.sort((a, b) => a.name.localeCompare(b.name));
}
