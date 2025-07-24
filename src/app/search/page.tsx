"use client";
import { useEffect, useState } from "react";
import { ProductDetails } from "../../types/ProductData.type";
import { getFilteredProducts } from "../../utility/getFilteredResult.util";
import { useCart } from "../(context)/Cart.context";
import toast from "react-hot-toast";
import { PageWrapper2 } from "../(components)/Utils/PageWrapper";
import SearchControls from "../(components)/Search/SearchControls";
import ProductGrid from "../(components)/ProductRelated/ProductGrid";
import FullscreenImageModal from "../(components)/ProductRelated/FullscreenImageModal";
import Spinner from "../(components)/components/Spinner";
import { DEFAULT_IMG } from "../../utility/utils";

export default function SearchPage() {
    const [query, setQuery] = useState<string>("");
    const [filteredProducts, setFilteredProducts] = useState<ProductDetails[]>([]);
    const [productImages, setProductImages] = useState<Record<string, string[]>>({});
    const [sortType, setSortType] = useState<string>("A-Z");
    const [onlyDiscounted, setOnlyDiscounted] = useState<boolean>(false);
    const [fullscreenImage, setFullscreenImage] = useState<{ images: string[]; index: number } | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const { addToCart } = useCart();

    useEffect(() => {
        let canceled = false;

        setLoading(true);
        const handler = setTimeout(async () => {
            const result = getFilteredProducts(undefined,query, sortType, onlyDiscounted, true);
            if (canceled) return;
            setFilteredProducts(result);

            if (result.length === 0) {
                setProductImages({});
                setLoading(false);
                return;
            }

            const imagesMap: Record<string, string[]> = {};
            await Promise.all(
                result.map(async (product) => {
                    try {
                        const res = await fetch(`/api/getProductImages?productCode=${product.code}`);
                        const data = await res.json();
                        if (Array.isArray(data.images) && data.images.length > 0) {
                            imagesMap[product.code] = data.images;
                        }
                    } catch {
                        imagesMap[product.code] = [];
                    }
                })
            );
            if (!canceled) {
                setProductImages(imagesMap);
                setLoading(false);
            }
        }, 300);

        return () => {
            canceled = true;
            clearTimeout(handler);
        };
    }, [query, sortType, onlyDiscounted]);


    const handleAddToCart = (product: ProductDetails) => {
        addToCart({
            code: product.code,
            name: product.name,
            price: product.price,
            discount: product.discount_price,
            quantity: 1,
            photo: productImages[product.code]?.[0] || DEFAULT_IMG,
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

    const handlePrev = () => {
        setFullscreenImage((prev) =>
            prev
                ? {
                    ...prev,
                    index: (prev.index - 1 + prev.images.length) % prev.images.length,
                }
                : prev
        );
    };
    const handleNext = () => {
        setFullscreenImage((prev) =>
            prev
                ? {
                    ...prev,
                    index: (prev.index + 1) % prev.images.length,
                }
                : prev
        );
    };

    return (
        <PageWrapper2>
            <div className="flex flex-col items-center justify-center w-full">
                <div className="bg-gradient-to-r from-white via-amber-600/20 to-white border border-amber-600/10 text-2xl font-light text-center mt-10 mb-10 p-5 w-full">
                    <span className="text-3xl sm:text-4xl font-light text-amber-900 underline-hover cursor-default">
                        Search Product/Item
                    </span>
                </div>

                <SearchControls
                    query={query}
                    onQueryChange={setQuery}
                    sortType={sortType}
                    onSortTypeChange={setSortType}
                    onlyDiscounted={onlyDiscounted}
                    onToggleDiscounted={() => setOnlyDiscounted((cur) => !cur)}
                />

                {loading ? (
                    <div className="flex flex-col items-center justify-center gap-3 py-10 text-amber-800 w-full">
                        <Spinner />
                        <p className="text-lg font-extralight animate-bounce">Loading search results...</p>
                    </div>
                ) : (
                    <>
                        <ProductGrid
                            products={filteredProducts}
                            productImages={productImages}
                            onAddToCart={handleAddToCart}
                            onImageClick={openFullscreen}
                        />
                        {filteredProducts.length === 0 && query === "" && (
                            <p className="italic text-gray-500 text-center">Search for something to begin.</p>
                        )}
                        {filteredProducts.length === 0 && query !== "" && (
                            <p className="italic text-gray-500 text-center">No products match your search.</p>
                        )}
                        {fullscreenImage && (
                            <FullscreenImageModal
                                images={fullscreenImage.images}
                                index={fullscreenImage.index}
                                onClose={() => setFullscreenImage(null)}
                                onPrev={handlePrev}
                                onNext={handleNext}
                            />
                        )}
                    </>
                )}
            </div>
        </PageWrapper2>
    );
}
