"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import ButtonGold from "../(components)/Button";
import { PageWrapper2 } from '../(components)/PageWrapper';
import getSortedCategories from '../../utility/getCategories.util';
import { isFeaturedProduct } from '../../utility/getFeaturedIProducts.util';
import { ProductDetails } from '../../types/ProductData.type';
import { getAllProductsSorted } from '../../utility/getAllProducts.util';
import { useCart } from '../(context)/Cart.context';
import toast from "react-hot-toast";
import { getDiscountPercent } from '../../utility/discountPercentage.util';
import { DEFAULT_IMG } from '../../utility/utils';

export default function Shop() {
    const [categories, setCategories] = useState<string[]>([]);
    const [isFeatured, setIsFeatured] = useState<ProductDetails[]>([]);
    const [allProducts, setAllProducts] = useState<ProductDetails[]>([]);
    const [productImages, setProductImages] = useState<Record<string, string[]>>({});
    const [fullscreenImage, setFullscreenImage] = useState<{
        images: string[],
        index: number
    } | null>(null);
    const { addToCart } = useCart();

    useEffect(() => {
        setCategories(getSortedCategories());
        setIsFeatured(isFeaturedProduct());
        const products = getAllProductsSorted();
        setAllProducts(products);

        Promise.all(
            products.map((product) =>
                fetch(`/api/getProductImages?productCode=${product.code}`)
                    .then(res => res.json())
                    .then(data => ({ code: product.code, images: data.images || [] }))
                    .catch(() => ({ code: product.code, images: [] }))
            )
        ).then((results) => {
            const imageMap: Record<string, string[]> = {};
            results.forEach(({ code, images }) => {
                imageMap[code] = images;
            });
            setProductImages(imageMap);
        });
    }, []);

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
            <PageWrapper2>
                <div className="bg-gradient-to-r from-white via-amber-600/20 to-white border border-amber-600/10 w-full mt-10 mb-10 flex flex-col items-center gap-5 p-5">

                    <p className="text-3xl sm:text-4xl font-light text-amber-900 underline-hover cursor-default">
                        Categories
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-h-[60vh] overflow-y-auto bg-amber-600/20 border border-amber-600/10 rounded-lg p-4">
                        {categories.map((category, index) => (
                            <Link
                                key={index}
                                href={`/shop/category/${category}`}
                                className="bg-white shadow p-3 w-full h-full rounded hover:scale-105 transition-all ease-in-out duration-300 flex items-center justify-start min-h-[50px] text-sm text-amber-900 font-medium"
                            >
                                🌻 <span className="ml-1 truncate">{category}</span>
                            </Link>
                        ))}
                    </div>

                </div>
            </PageWrapper2>
            <div className="bg-gradient-to-r from-white via-amber-600/20 to-white border border-amber-600/10 text-2xl font-light text-center p-5">
                <span className="text-3xl sm:text-4xl font-light text-amber-900 underline-hover cursor-default">Featured Products!</span>
                <div>
                    <Swiper
                        modules={[FreeMode, Autoplay]}
                        spaceBetween={10}
                        slidesPerView={2}
                        freeMode={true}
                        loop={false}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 5,
                            },
                        }}
                    >
                        {isFeatured.map((product, idx) => (
                            <SwiperSlide key={idx}>
                                <Link
                                    href={`/shop/item/${product.code}`}
                                    className="mt-5 p-5 flex flex-col items-center gap-3 text-start bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 w-full sm:w-[200px]"
                                >
                                    {productImages[product.code]?.[0] ? (
                                        <Image
                                            src={productImages[product.code][0]}
                                            alt={product.name}
                                            width={700}
                                            height={700}
                                            className="w-[150px] h-[150px] object-cover object-center rounded-lg shadow-lg"
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

                                    <p className="text-start font-semibold text-xs text-wrap w-full line-clamp-1">
                                        {product.name}
                                    </p>

                                    <p className="text-start text-xs text-wrap w-full text-gray-600 line-clamp-3">
                                        {product.brief_description}
                                    </p>

                                    <ButtonGold text="Click here" />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <PageWrapper2>
                <div className="flex flex-col">
                    <div className="bg-gradient-to-r from-white via-amber-600/20 to-white border border-amber-600/10 text-2xl font-light text-center mt-10 mb-10 p-5">
                        <span className="text-3xl sm:text-4xl font-light text-amber-900 underline-hover cursor-default">All Products!</span>
                    </div>
                    <div className="grid grid-cols-3 max-[1050px]:grid-cols-2 max-[700px]:grid-cols-1 gap-10 p-1 mb-10">
                        {allProducts.map((product) => {
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
                                            src={productImages[product.code][0]}
                                            width={700}
                                            height={700}
                                            alt={product.name}
                                            onClick={() => openFullscreen(productImages[product.code])}
                                            className="max-w-[300px] max-h-[300px] object-cover object-center rounded-lg shadow-lg cursor-pointer hover:brightness-110"
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
                            )
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
                                <Image
                                    src={fullscreenImage.images[fullscreenImage.index]}
                                    width={1000}
                                    height={1000}
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
                </div>
            </PageWrapper2>
        </>
    )
}