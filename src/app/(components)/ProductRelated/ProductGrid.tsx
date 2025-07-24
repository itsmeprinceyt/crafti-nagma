import { ProductGridProps } from "../../../types/ProductCardGrid.type";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products, productImages, onAddToCart, onImageClick }: ProductGridProps) {
    return (
        <div className="grid grid-cols-3 max-[1050px]:grid-cols-2 max-[700px]:grid-cols-1 gap-10 p-1 mb-10">
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
