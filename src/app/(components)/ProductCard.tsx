import Image from "next/image";
import Link from "next/link";
import { getDiscountPercent } from "../../utility/discountPercentage.util";
import { DiscountTagProduct, DiscountAmountProduct } from "./DiscountComponents";
import { DEFAULT_IMG } from "../../utility/utils";
import type { ProductCard } from "../../types/ProductCardGrid.type";

export default function ProductCard({ product, images, onAddToCart, onImageClick }: ProductCard) {
    const discountPercent = getDiscountPercent(product.price, product.discount_price);
    return (
        <div className="p-5 w-[350px] max-[349px]:w-full flex flex-col justify-start items-center gap-3 bg-white border border-amber-600/30 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all ease-in-out duration-300 relative">
            {discountPercent > 0 && <DiscountTagProduct discountPercent={discountPercent} />}
            {images[0] ? (
                <Image
                    src={images[0]}
                    width={700}
                    height={700}
                    alt={product.name}
                    onClick={onImageClick}
                    className="max-w-[300px] max-h-[300px] object-cover object-center rounded-lg shadow-lg"
                />
            ) : (
                <Image
                    src={DEFAULT_IMG}
                    alt={product.name}
                    width={700}
                    height={700}
                    className="max-w-[300px] max-h-[300px] object-cover object-center rounded-lg shadow-lg"
                />
            )}

            <div className="flex flex-col items-start justify-between h-full text-start gap-2">
                <p className="text-start font-bold text-xs text-wrap w-full line-clamp-2 pb-2 border-b border-black/10">
                    {product.name}
                </p>
                <p className="text-start text-xs text-wrap w-full text-gray-600 line-clamp-3 pb-2 border-b border-black/10">
                    {product.brief_description}
                </p>
                <div className="flex justify-between items-center gap-2 w-full">
                    <DiscountAmountProduct discount_price={product.discount_price} price={product.price} />
                    <Link href={`/shop/item/${product.code}`}>
                        <p className="w-[90px] text-center bg-gradient-to-r from-amber-600/20 to-amber-600/40 border border-amber-600/30 text-amber-900 hover:bg-amber-600/20 transition-all ease-in-out duration-500 shadow-lg shadow-amber-600/30 py-2 px-5 rounded-sm">
                            View
                        </p>
                    </Link>
                    <button
                        onClick={onAddToCart}
                        className="w-[130px] text-center bg-gradient-to-r from-amber-600/40 to-amber-600/20 border border-amber-600/30 text-amber-900 hover:bg-amber-600/20 transition-all ease-in-out duration-500 shadow-lg shadow-amber-600/30 py-2 px-5 rounded-sm"
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
