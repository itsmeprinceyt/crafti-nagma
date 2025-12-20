import { ProductData } from './ProductData.util';
import { ProductDetails } from '../types/ProductData.type';
import { ProductCategory } from './ProductData.util';

export function getProductsByCategory(category: ProductCategory): ProductDetails[] {
    const filtered = ProductData.filter((product) =>
        product.category.includes(category)
    );

    return filtered.sort((a, b) => a.name.localeCompare(b.name));
}