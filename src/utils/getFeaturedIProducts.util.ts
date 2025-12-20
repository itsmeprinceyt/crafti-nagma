import { ProductDetails } from "../types/ProductData.type";
import { ProductData } from "./ProductData.util";

export function isFeaturedProduct(){
    return getFeaturedProducts(ProductData);
}

function getFeaturedProducts(products: ProductDetails[]): ProductDetails[] {
    return products.filter(product => product.is_featured && product.is_active);
}