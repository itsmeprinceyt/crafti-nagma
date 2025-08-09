"use client";
import { useEffect, useState } from "react";
import Spinner from "../(components)/components/Spinner";
import FeaturedProductsCarousel from "../(components)/ProductRelated/FeaturedProducts";
import CategoriesGrid from "../(components)/ProductRelated/CategoryGrid";
import { ProductDetails } from "../../types/ProductData.type";
import { CategoryWithImage } from "../../types/CategoryWithImages.type";
import { isFeaturedProduct } from "../../utility/getFeaturedIProducts.util";

export default function Shop() {
    const [isFeatured, setIsFeatured] = useState<ProductDetails[]>([]);
    const [productImages, setProductImages] = useState<Record<string, string[]>>({});
    const [categoryData, setCategoryData] = useState<CategoryWithImage[]>([]);
    const [loadingFeatured, setLoadingFeatured] = useState(true);
    const [loadingCategories, setLoadingCategories] = useState(true);

    useEffect(() => {
        setLoadingFeatured(true);
        Promise.resolve(isFeaturedProduct()).then(async (featured) => {
            setIsFeatured(featured);
            setLoadingFeatured(false);

            const imageResults = await Promise.all(
                featured.map(async (product) => {
                    try {
                        const res = await fetch(`/api/getProductImages?productCode=${product.code}`);
                        const data = await res.json();
                        return { code: product.code, images: data.images || [] };
                    } catch {
                        return { code: product.code, images: [] };
                    }
                })
            );

            const imageMap: Record<string, string[]> = {};
            imageResults.forEach(({ code, images }) => {
                imageMap[code] = images;
            });
            setProductImages(imageMap);
        });

        fetch("/api/category")
            .then((res) => res.json())
            .then((data: CategoryWithImage[]) => {
                setCategoryData(data);
                setLoadingCategories(false);
            })
            .catch((err) => {
                console.error("Failed to fetch category images:", err);
                setLoadingCategories(false);
            });
    }, []);

    return (
        <div className="space-y-10 py-10">
            {loadingFeatured ? (
                <LoadingBlock text="Loading Featured Products..." />
            ) : (
                <FeaturedProductsCarousel products={isFeatured} productImages={productImages} />
            )}

            {loadingCategories ? (
                <LoadingBlock text="Loading Categories..." />
            ) : (
                <CategoriesGrid categories={categoryData} />
            )}
        </div>
    );
}

function LoadingBlock({ text }: { text: string }) {
    return (
        <div className="flex flex-col items-center justify-center gap-3 py-10 text-amber-800">
            <Spinner />
            <p className="text-lg font-extralight animate-bounce">{text}</p>
        </div>
    );
}
