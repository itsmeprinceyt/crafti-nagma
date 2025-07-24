"use client";
import { useState, useEffect } from 'react';
import { PageWrapper2 } from '../(components)/Utils/PageWrapper';
import getSortedCategories from '../../utility/getCategories.util';
import { isFeaturedProduct } from '../../utility/getFeaturedIProducts.util';
import { ProductDetails } from '../../types/ProductData.type';
import { getAllProductsSorted } from '../../utility/getAllProducts.util';
import { useCart } from '../(context)/Cart.context';
import toast from "react-hot-toast";
import { DEFAULT_IMG } from '../../utility/utils';
import ProductGrid from '../(components)/ProductRelated/ProductGrid';
import FullscreenImageModal from '../(components)/ProductRelated/FullscreenImageModal';
import CategoriesGrid from "../(components)/ProductRelated/CategoryGrid";
import FeaturedProductsCarousel from '../(components)/ProductRelated/FeaturedProducts';
import Spinner from '../(components)/components/Spinner';
import SortControls from '../(components)/Search/SortControls';
import { getFilteredProducts } from '../../utility/getFilteredResult.util';

export default function Shop() {
    const [categories, setCategories] = useState<string[]>([]);
    const [loadingCategories, setLoadingCategories] = useState<boolean>(true);
    const [loadingFeatured, setLoadingFeatured] = useState<boolean>(true);
    const [loadingProducts, setLoadingProducts] = useState<boolean>(true);
    const [isFeatured, setIsFeatured] = useState<ProductDetails[]>([]);
    const [allProducts, setAllProducts] = useState<ProductDetails[]>([]);
    const [productImages, setProductImages] = useState<Record<string, string[]>>({});
    const [fullscreenImage, setFullscreenImage] = useState<{
        images: string[],
        index: number
    } | null>(null);
    const [sortType, setSortType] = useState<string>('A-Z');
    const [onlyDiscounted, setOnlyDiscounted] = useState<boolean>(false);
    const [filteredProducts, setFilteredProducts] = useState<ProductDetails[]>([]);
    const { addToCart } = useCart();

    useEffect(() => {
        setLoadingCategories(true);
        Promise.resolve(getSortedCategories()).then((cats) => {
            setCategories(cats);
            setLoadingCategories(false);
        });

        setLoadingFeatured(true);
        Promise.resolve(isFeaturedProduct()).then((featured) => {
            setIsFeatured(featured);
            setLoadingFeatured(false);
        });

        setLoadingProducts(true);
        const products = getAllProductsSorted();
        setAllProducts(products);
        Promise.all(
            products.map(async (product) => {
                try {
                    const res = await fetch(`/api/getProductImages?productCode=${product.code}`);
                    const data = await res.json();
                    return { code: product.code, images: data.images || [] };
                } catch {
                    return { code: product.code, images: [] };
                }
            })
        ).then((results) => {
            const imageMap: Record<string, string[]> = {};
            results.forEach(({ code, images }) => { imageMap[code] = images; });
            setProductImages(imageMap);
            setLoadingProducts(false);
        });
    }, []);

    useEffect(() => {
        if (loadingProducts) return;
        setFilteredProducts(
            getFilteredProducts(allProducts, '', sortType, onlyDiscounted)
        );
    }, [sortType, onlyDiscounted, allProducts, loadingProducts]);


    const handleAddToCart = (product: ProductDetails) => {
        addToCart({
            code: product.code,
            name: product.name,
            price: product.price,
            discount: product.discount_price,
            quantity: 1,
            photo: productImages[product.code]?.[0] || DEFAULT_IMG
        });

        toast.success(`'${product.name}' added to cart!`, {
            duration: 3000,
            style: {
                border: '1px solid #facc15',
                padding: '12px',
            },
        });
    };

    const openFullscreen = (images: string[], index: number = 0) => {
        if (!images || images.length === 0) return;
        setFullscreenImage({ images, index });
    };

    return (
        <>
            {!loadingCategories ? (
                <CategoriesGrid categories={categories} />
            ) : (
                <div className="flex flex-col items-center justify-center gap-3 py-10 text-amber-800">
                    <Spinner />
                    <p className="text-lg font-extralight animate-bounce">Loading Categories...</p>
                </div>
            )}

            {!loadingFeatured ? (
                <FeaturedProductsCarousel products={isFeatured} productImages={productImages} />
            ) : (
                <div className="flex flex-col items-center justify-center gap-3 py-10 text-amber-800">
                    <Spinner />
                    <p className="text-lg font-extralight animate-bounce">Loading Featured Products...</p>
                </div>
            )}

            <PageWrapper2>
                <div className="flex flex-col">
                    {!loadingProducts ? (
                        <>
                            <div className="bg-gradient-to-r from-white via-amber-600/20 to-white border border-amber-600/10 text-2xl font-light text-center mt-10 mb-10 p-5 w-full">
                                <span className="text-3xl sm:text-4xl font-light text-amber-900 underline-hover cursor-default">
                                    All Products!
                                </span>
                            </div>
                            <SortControls
                                sortType={sortType}
                                onSortTypeChange={setSortType}
                                onlyDiscounted={onlyDiscounted}
                                onToggleDiscounted={() => setOnlyDiscounted(v => !v)}
                            />

                            <ProductGrid
                                products={filteredProducts || allProducts}
                                productImages={productImages}
                                onImageClick={openFullscreen}
                                onAddToCart={handleAddToCart}
                            />
                            {fullscreenImage && (
                                <FullscreenImageModal
                                    images={fullscreenImage.images}
                                    index={fullscreenImage.index}
                                    onClose={() => setFullscreenImage(null)}
                                    onPrev={() => setFullscreenImage(prev => prev
                                        ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length }
                                        : prev
                                    )}
                                    onNext={() => setFullscreenImage(prev => prev
                                        ? { ...prev, index: (prev.index + 1) % prev.images.length }
                                        : prev
                                    )}
                                />
                            )}
                        </>
                    ) :
                        (
                            <div className="flex flex-col items-center justify-center gap-3 py-10 text-amber-800">
                                <Spinner />
                                <p className="text-lg font-extralight animate-bounce">Loading Products...</p>
                            </div>
                        )}
                </div>
            </PageWrapper2>
        </>
    )
}