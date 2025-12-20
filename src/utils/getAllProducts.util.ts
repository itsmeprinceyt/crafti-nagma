import { ProductData } from './ProductData.util';
import { ProductDetails } from '../types/ProductData.type';

export function getAllProductsSorted(): ProductDetails[] {
    return [...ProductData]
        .filter((product) => product.is_active)
        .sort((a, b) => a.name.localeCompare(b.name));
}