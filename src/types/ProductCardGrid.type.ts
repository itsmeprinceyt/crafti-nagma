import { ProductDetails } from "./ProductData.type";

export type ProductGridProps = {
    products: ProductDetails[];
    productImages: Record<string, string[]>;
    onAddToCart: (product: ProductDetails) => void;
    onImageClick: (images: string[], idx?: number) => void;
};

export type ProductCard = {
    product: ProductDetails;
    images: string[];
    onAddToCart: () => void;
    onImageClick: () => void;
}

export type fullscreenModal = {
    images: string[];
    index: number;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}