import { ProductGridProps } from "../../../types/ProductCardGrid.type";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products, productImages, onAddToCart, onImageClick }: ProductGridProps) {
    return (
        <div className="w-full px-2 sm:max-w-[85%] mx-auto flex flex-wrap items-start justify-center gap-5 mb-5">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    images={productImages[product.code] || []}
                    onAddToCart={() => onAddToCart(product)}
                    onImageClick={() => onImageClick(productImages[product.code] || [])}
                />
            ))}
        </div>
    );
}
