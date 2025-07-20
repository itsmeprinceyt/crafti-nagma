import { ProductDetails } from "./ProductData.type";

export type FeaturedProductsCarouselProps = {
    products: ProductDetails[];
    productImages: Record<string, string[]>;
};