import { ProductDetails } from "../types/ProductData.type";
import { getAllProductsSorted } from "./getAllProducts.util";

export function getFilteredProducts(
    products: ProductDetails[] | undefined,
    query: string,
    sortType: string,
    onlyDiscounted: boolean,
    search?: boolean
): ProductDetails[] {
    if (search && query.trim() === '') return [];
    let result = products ?? getAllProductsSorted();

    if (query && query.trim()) {
        result = result.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.code.toLowerCase().includes(query.toLowerCase())
        );
    }

    if (onlyDiscounted) {
        result = result.filter((product) => product.discount_price > 0);
    }

    switch (sortType) {
        case "A-Z":
            result = [...result].sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "Z-A":
            result = [...result].sort((a, b) => b.name.localeCompare(a.name));
            break;
        case "Low-High":
            result = [...result].sort((a, b) => {
                const priceA = a.discount_price > 0 ? a.discount_price : a.price;
                const priceB = b.discount_price > 0 ? b.discount_price : b.price;
                return priceA - priceB;
            });
            break;
        case "High-Low":
            result = [...result].sort((a, b) => {
                const priceA = a.discount_price > 0 ? a.discount_price : a.price;
                const priceB = b.discount_price > 0 ? b.discount_price : b.price;
                return priceB - priceA;
            });
            break;
        case "Latest":
            result = [...result].sort(
                (a, b) => Number(b.id ?? 0) - Number(a.id ?? 0)
            );
            break;
    }

    return result;
}
