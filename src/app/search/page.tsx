"use client";
import { useEffect, useState } from "react";
import { ProductDetails } from "../../types/ProductData.type";
import { getDiscountPercent } from "../../utility/discountPercentage.util";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../(context)/Cart.context";
import toast from "react-hot-toast";
import { PageWrapper2 } from "../(components)/PageWrapper";
import { getFilteredProducts } from "../../utility/getFilteredResult.util";

export default function SearchPage() {
    const [query, setQuery] = useState<string>("");
    const [filteredProducts, setFilteredProducts] = useState<ProductDetails[]>([]);
    const [productImages, setProductImages] = useState<Record<string, string[]>>({});
    const [sortType, setSortType] = useState<string>("A-Z");
    const [onlyDiscounted, setOnlyDiscounted] = useState<boolean>(false);
    const [fullscreenImage, setFullscreenImage] = useState<{
        images: string[],
        index: number
    } | null>(null);
    const { addToCart } = useCart();

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            const result = getFilteredProducts(query, sortType, onlyDiscounted);
            setFilteredProducts(result);
        }, 300);

        return () => clearTimeout(delayDebounce);
    }, [query, sortType, onlyDiscounted]);

    useEffect(() => {
        const fetchImages = async () => {
            const imagesMap: Record<string, string[]> = {}; // CHANGE: store arrays

            await Promise.all(
                filteredProducts.map(async (product) => {
                    try {
                        const res = await fetch(`/api/getProductImages?productCode=${product.code}`);
                        const data = await res.json();
                        if (Array.isArray(data.images) && data.images.length > 0) {
                            imagesMap[product.code] = data.images; // SAVE all images
                        }
                    } catch (err) {
                        console.error(`Error loading image for ${product.code}`, err);
                    }
                })
            );

            setProductImages(imagesMap);
        };

        if (filteredProducts.length > 0) {
            fetchImages();
        }
    }, [filteredProducts]);


    const handleAddToCart = (product: ProductDetails) => {
        addToCart({
            code: product.code,
            name: product.name,
            price: product.price,
            discount: product.discount_price,
            quantity: 1,
            photo: productImages[product.code]?.[0] || '',
        });

        toast.success(`'${product.name}' added to cart!`, {
            duration: 3000,
            style: {
                border: "1px solid #facc15",
                padding: "12px",
            },
        });
    };

    const openFullscreen = (images: string[], index: number = 0) => {
        if (!images || images.length === 0) return;
        setFullscreenImage({ images, index });
    };

    return (
        <PageWrapper2>
            <div className="flex flex-col items-center justify-center w-full">
                <div className="bg-gradient-to-r from-white via-amber-600/20 to-white border border-amber-600/10 text-2xl font-light text-center mt-10 mb-10 p-5 w-full">
                    <span className="text-3xl sm:text-4xl font-light text-amber-900 underline-hover cursor-default">Search Product/Item</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 px-4 sm:px-0">
                    {/* Search Input */}
                    <input
                        type="text"
                        placeholder="Search by name or code..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full sm:w-[300px] border border-gray-300 focus:border-amber-500 focus:ring-amber-500 rounded-md shadow-sm p-2 text-sm transition-all duration-200 outline-none"
                    />

                    {/* Filter Controls */}
                    <div className="flex flex-wrap items-center gap-3">
                        <select
                            value={sortType}
                            onChange={(e) => setSortType(e.target.value)}
                            className="border border-gray-300 rounded-md shadow-sm p-2 text-sm focus:border-amber-500 focus:ring-amber-500 transition-all duration-200 outline-none"
                        >
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                            <option value="Low-High">Low to High</option>
                            <option value="High-Low">High to Low</option>
                        </select>
                        <button
                            onClick={() => setOnlyDiscounted(!onlyDiscounted)}
                            className={`text-sm font-semibold px-5 py-2 rounded-md border transition-all duration-300 shadow-md ${onlyDiscounted ? "bg-gradient-to-r from-lime-400 to-lime-500 text-lime-900 border-lime-500 shadow-lime-500/40 hover:brightness-105"
                                : "bg-stone-600 text-white border-stone-400 shadow-stone-700/40 hover:bg-stone-700"}`}>
                            {onlyDiscounted ? "Discount: ON" : "Discount: OFF"}
                        </button>



                    </div>
                </div>
                <div className="grid grid-cols-3 max-[1050px]:grid-cols-2 max-[700px]:grid-cols-1 gap-10 p-1 mb-10">
                    {filteredProducts.map((product) => {
                        const discountPercent = getDiscountPercent(product.price, product.discount_price);

                        return (
                            <div
                                key={product.id}
                                className="p-5 w-[350px] max-[349px]:w-full flex flex-col justify-start items-center gap-3 bg-white border border-amber-600/30 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all ease-in-out duration-300 relative"
                            >
                                {discountPercent > 0 && (
                                    <span className="absolute -top-5 -left-5 z-2 text-base text-red-100 bg-red-500 h-[60px] w-[60px] rounded-full shadow-md -rotate-10 flex items-center justify-center font-bold text-center">
                                        {discountPercent}% OFF
                                    </span>
                                )}
                                {productImages[product.code]?.[0] ? (
                                    <Image
                                        src={productImages[product.code][0]} // Use first image as thumbnail
                                        width={700}
                                        height={700}
                                        alt={product.name}
                                        onClick={() => openFullscreen(productImages[product.code])} // Pass all images
                                        className="max-w-[300px] max-h-[300px] object-cover object-center rounded-lg shadow-lg"
                                    />
                                ) : (
                                    <div className="w-full max-w-[300px] max-h-[300px] flex items-center justify-center bg-gray-100 text-gray-400 text-sm rounded-lg">
                                        No Image
                                    </div>
                                )}


                                <div className="flex flex-col items-start justify-between h-full text-start gap-2">
                                    <p className="text-start font-bold text-xs text-wrap w-full line-clamp-2 pb-2 border-b border-black/10">
                                        {product.name}
                                    </p>

                                    <p className="text-start text-xs text-wrap w-full text-gray-600 line-clamp-3 pb-2 border-b border-black/10">
                                        {product.brief_description}
                                    </p>

                                    <div className="flex justify-between items-center gap-2 w-full">
                                        <p className="flex-1 text-center bg-gradient-to-r from-lime-400 to-lime-500 border border-lime-600/50 text-lime-900 shadow-lg shadow-lime-600/30 py-2 px-5 rounded-sm relative">{product.discount_price ? (
                                            <>
                                                <span className="absolute -top-3 -left-2 -rotate-15 line-through text-red-100 bg-red-500 border border-red-600/50 p-1 rounded-full font-bold text-[12px]">₹{product.price}</span>
                                                <span className="font-semibold">₹{product.discount_price}</span>
                                            </>
                                        ) : (
                                            <>₹{product.price}</>
                                        )}</p>
                                        <Link href={`/shop/item/${product.code}`}>
                                            <p className="w-[90px] text-center bg-gradient-to-r from-amber-600/20 to-amber-600/40 border border-amber-600/30 text-amber-900 hover:bg-amber-600/20 transition-all ease-in-out duration-500 shadow-lg shadow-amber-600/30 py-2 px-5 rounded-sm">View</p>
                                        </Link>
                                        <button
                                            onClick={() => handleAddToCart(product)}
                                            className="w-[130px] text-center bg-gradient-to-r from-amber-600/40 to-amber-600/20 border border-amber-600/30 text-amber-900 hover:bg-amber-600/20 transition-all ease-in-out duration-500 shadow-lg shadow-amber-600/30 py-2 px-5 rounded-sm"
                                        >
                                            Add To Cart
                                        </button>

                                    </div>
                                </div>

                            </div>
                        );
                    })}
                    {fullscreenImage && (
                        <div
                            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-10"
                            onClick={() => setFullscreenImage(null)}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setFullscreenImage(null)}
                                className="absolute top-5 right-5"
                            >
                                <Image src="/icons/cross.png" width={25} height={25} alt="Close" />
                            </button>

                            {/* Center Image */}
                            <img
                                src={fullscreenImage.images[fullscreenImage.index]}
                                alt="Fullscreen"
                                className="max-h-full max-w-full object-contain rounded-lg shadow-xl"
                                onClick={(e) => e.stopPropagation()}
                            />

                            {/* Navigation Buttons */}
                            {fullscreenImage.images.length > 1 && (
                                <div
                                    onClick={(e) => e.stopPropagation()}
                                    className="absolute bottom-5 flex flex-col items-center justify-center gap-2"
                                >
                                    <p className="text-xs text-white/30 mb-1">
                                        Please wait a moment after clicking the buttons
                                    </p>

                                    <div className="flex gap-2 shadow-md">
                                        <button
                                            onClick={() =>
                                                setFullscreenImage((prev) => ({
                                                    ...prev!,
                                                    index:
                                                        (prev!.index - 1 + prev!.images.length) %
                                                        prev!.images.length,
                                                }))
                                            }
                                            className="bg-white text-black hover:bg-white/90 px-6 py-3 transition w-[130px] rounded-md"
                                        >
                                            Previous
                                        </button>
                                        <button
                                            onClick={() =>
                                                setFullscreenImage((prev) => ({
                                                    ...prev!,
                                                    index: (prev!.index + 1) % prev!.images.length,
                                                }))
                                            }
                                            className="bg-white text-black hover:bg-white/90 px-6 py-3 transition w-[130px] rounded-md"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {filteredProducts.length === 0 && query === "" && (
                    <p className="italic text-gray-500 text-center">Search for something to begin.</p>
                )}

                {filteredProducts.length === 0 && query !== "" && (
                    <p className="italic text-gray-500 text-center">No products match your search.</p>
                )}

            </div>
        </PageWrapper2>
    );
}