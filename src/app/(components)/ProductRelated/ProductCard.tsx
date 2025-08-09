import Image from "next/image";
import Link from "next/link";
import { getDiscountPercent } from "../../../utility/discountPercentage.util";
import { DEFAULT_IMG } from "../../../utility/utils";
import type { ProductCard } from "../../../types/ProductCardGrid.type";
import { ShoppingCart, SquareArrowOutUpLeftIcon } from "lucide-react";
import { DiscountAmountProductCard } from "./DiscountComponents";

export default function ProductCard({ product, images, onAddToCart, onImageClick }: ProductCard) {
    const discountPercent = getDiscountPercent(product.price, product.discount_price);
    const CallToAction_Button_CSS: string = "border-amber-600/40 bg-amber-600/10 hover:bg-amber-600/20 transition-all duration-200 ease-in-out flex items-center justify-center gap-1 text-xs font-medium text-amber-800";

    return (
        <div className="w-[250px] sm:w-[250px] max-sm:w-[200px] flex flex-col shadow-lg shadow-amber-600/10 transition-all ease-in-out duration-300 relative rounded-md overflow-hidden">

            {/* Image */}
            <div onClick={onImageClick} className="w-full aspect-square bg-white cursor-pointer overflow-hidden flex items-center justify-center">
                <Image
                    src={images[0] || DEFAULT_IMG}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover object-center rounded-tr-md rounded-tl-md"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between px-2 py-2 gap-1 flex-grow">

                {/* Name & Description */}
                <div className="space-y-1">
                    <p className="text-sm sm:text-sm max-sm:text-xs truncate w-full text-black hover:text-amber-600">{product.name}</p>
                    <p className="text-[10px] line-clamp-2 w-full text-black/50">{product.brief_description}</p>
                </div>

                {/* Price */}
                <div className="mt-1 text-green-600 text-sm">
                    {product.discount_price > 0 && product.discount_price < product.price ? (
                        <div className="flex items-center gap-1 flex-wrap">
                            <DiscountAmountProductCard price={product.price} discount_price={product.discount_price} discountPercent={discountPercent}/>
                        </div>
                    ) : (
                        <div className="flex items-center gap-1">
                            <span className="font-bold text-base sm:text-base max-sm:text-sm">₹{product.price}</span>
                        </div>
                    )}
                </div>

            </div>

            {/* Buttons */}
            <div className="flex shadow-sm hover:shadow">
                {/* View Product Link */}
                <Link
                    href={`/shop/item/${product.code}`}
                    className={`group px-2 py-[6px] rounded-bl-md border-t border-l border-b ${CallToAction_Button_CSS}`}
                    aria-label="View product"
                >
                    <SquareArrowOutUpLeftIcon className="w-4 h-4 max-sm:w-3 max-sm:h-3 text-amber-800 group-hover:animate-pulse" />
                    View
                </Link>

                {/* Add to Cart Button */}
                <button
                    onClick={onAddToCart}
                    className={`group px-2 py-[6px] rounded-br-md border w-full ${CallToAction_Button_CSS}`}
                    aria-label="Add to cart"
                >
                    <ShoppingCart className="w-4 h-4 max-sm:w-3 max-sm:h-3 text-amber-800 group-hover:animate-pulse" />
                    Add to cart
                </button>
            </div>
        </div>

    );
}
