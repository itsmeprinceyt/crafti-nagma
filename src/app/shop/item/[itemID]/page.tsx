"use client";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { PageWrapper2 } from "../../../(components)/PageWrapper";
import { ProductData } from "../../../../utility/ProductData.util";
import { ProductDetails } from "../../../../types/ProductData.type";
import { useCart } from "../../../(context)/Cart.context";
import toast from "react-hot-toast";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getDiscountPercent } from "../../../../utility/discountPercentage.util";
import { DEFAULT_IMG } from '../../../../utility/utils';
import { DiscountTagItem, DiscountAmountItem } from "../../../(components)/DiscountComponents";

export default function ProductPage() {
    const params = useParams();
    const productID = params.itemID as string;

    const [product, setProduct] = useState<ProductDetails | null>(null);
    const [productImages, setProductImages] = useState<string[]>([]);
    const [isValid, setIsValid] = useState<boolean>(true);
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [discount, setDiscount] = useState<number>(0);
    const { addToCart } = useCart();

    useEffect(() => {
        const foundProduct = ProductData.find((item) => item.code === productID);

        if (!foundProduct) {
            setIsValid(false);
            return;
        }
        setDiscount(getDiscountPercent(foundProduct.price, foundProduct.discount_price));
        setProduct(foundProduct);

        fetch(`/api/getProductImages?productCode=${foundProduct.code}`)
            .then((res) => res.json())
            .then((data) => setProductImages(data.images || []))
            .catch(() => setProductImages([]));
    }, [productID]);

    if (!isValid) return notFound();

    const handleAddToCart = () => {
        if (!product) return;

        addToCart({
            code: product.code,
            name: product.name,
            price: product.price,
            discount: product.discount_price,
            quantity: 1,
            photo: productImages[0] || DEFAULT_IMG
        });

        toast.success(`'${product.name}' added to cart!`, {
            duration: 3000,
            style: {
                border: '1px solid #facc15',
                padding: '12px',
            },
        });
    };

    return (
        <>
            <PageWrapper2>
                <div className="bg-gradient-to-r from-white via-amber-600/20 to-white border border-amber-600/10 text-3xl sm:text-4xl font-light text-amber-900 w-full mt-5 mb-5 p-5 text-center select-text">
                    {product?.name}
                </div>
            </PageWrapper2>

            <PageWrapper2>
                {product && (
                    <div className="flex flex-col items-center gap-5 select-text">
                        {/* Product Image Carousel */}
                        <div className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] p-2 rounded-lg">

                            <Swiper
                                modules={[Navigation, Pagination]}
                                navigation
                                pagination={{ clickable: true }}
                                spaceBetween={10}
                                slidesPerView={1}
                                className="rounded-lg product-swiper"
                            >
                                {productImages.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <div
                                            className="w-full aspect-[4/5] md:aspect-[1/1] relative cursor-pointer"
                                            onClick={() => {
                                                setCurrentIndex(index);
                                                setIsFullscreen(true);
                                            }}
                                        >
                                            <Image
                                                src={img}
                                                alt={`${product.name} ${index + 1}`}
                                                fill
                                                className="object-contain rounded-lg"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className="flex flex-col gap-4 mb-5 w-full max-w-[320px] sm:max-w-[600px] p-4 border border-amber-400/40 rounded-lg shadow-md bg-white relative">
                            {/* Discount */}
                            {discount > 0 && (
                                <DiscountTagItem discount={discount}/>
                            )}
                            {/* Product Description */}
                            <div className="bg-amber-50 border border-amber-200 rounded p-3">
                                <h3 className="text-base sm:text-lg font-bold text-amber-800 mb-1 underline underline-offset-4 decoration-amber-400 select-none">
                                    Description
                                </h3>
                                <p className="text-sm sm:text-base text-gray-800 whitespace-pre-line leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            {/* Basic Info */}
                            <div className="grid grid-cols-2 gap-3 text-sm sm:text-base">
                                <div>
                                    <p className="text-gray-500 font-medium select-none">Size</p>
                                    <p className="text-gray-800">{product.size}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 font-medium select-none">Material</p>
                                    <p className="text-gray-800">{product.material}</p>
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base">
                                <div>
                                    <p className="text-gray-500 font-medium select-none">Product Code</p>
                                    <p className="text-blue-600 font-semibold">{product.code}</p>
                                </div>

                                {product.category.length > 0 && (
                                    <div>
                                        <p className="text-gray-500 font-medium select-none">Category</p>
                                        <p className="text-gray-800">{product.category.join(", ")}</p>
                                    </div>
                                )}

                                <div>
                                    <p className="text-gray-500 font-medium select-none">Stock</p>
                                    <p className={product.stock ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>
                                        {product.stock ? "In Stock" : "Out of Stock"}
                                    </p>
                                </div>

                                {product.processing_time && (
                                    <div>
                                        <p className="text-gray-500 font-medium select-none">Processing Time</p>
                                        <p className="text-gray-800">{product.processing_time}</p>
                                    </div>
                                )}
                            </div>

                            {/* Features */}
                            {product.features?.length > 0 && (
                                <details className="bg-amber-50 border border-amber-300/50 rounded p-3 text-sm sm:text-base">
                                    <summary className="cursor-pointer font-semibold text-amber-800">Features</summary>
                                    <ul className="list-disc pl-5 mt-2 text-gray-700 leading-relaxed">
                                        {product.features.map((f, i) => <li key={i}>{f}</li>)}
                                    </ul>
                                </details>
                            )}

                            {/* Variants */}
                            {Array.isArray(product.variants) && product.variants.length > 0 && (
                                <details className="bg-amber-50 border border-amber-300/50 rounded p-3 text-sm sm:text-base">
                                    <summary className="cursor-pointer font-semibold text-amber-800">Variants</summary>
                                    <ul className="pl-5 mt-2 text-gray-700 space-y-1">
                                        {product.variants.map((v, i) => (
                                            <li key={i}>
                                                <span className="font-semibold">{v.name}</span>
                                                {v.description && <> — {v.description}</>}
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            )}

                            {/* Options */}
                            {Array.isArray(product.options) && product.options.length > 0 && (
                                <details className="bg-amber-50 border border-amber-300/50 rounded p-3 text-sm sm:text-base">
                                    <summary className="cursor-pointer font-semibold text-amber-800">Options</summary>
                                    <ul className="pl-5 mt-2 text-gray-700 space-y-1">
                                        {product.options.map((o, i) => (
                                            <li key={i}>
                                                <span className="font-semibold">{o.option_name}</span>
                                                {o.option_description && <> — {o.option_description}</>}
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            )}

                            {/* Care Instructions */}
                            {Array.isArray(product.care_instructions) && product.care_instructions.length > 0 && (
                                <details className="bg-amber-50 border border-amber-300/50 rounded p-3 text-sm sm:text-base">
                                    <summary className="cursor-pointer font-semibold text-amber-800">Care Instructions</summary>
                                    <ul className="list-disc pl-5 mt-2 text-gray-700 leading-relaxed">
                                        {product.care_instructions.map((c, i) => <li key={i}>{c}</li>)}
                                    </ul>
                                </details>
                            )}

                            {/* Custom Note */}
                            {product.custom_note && (
                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 text-sm text-yellow-800 rounded select-none">
                                    <p><strong>Note:</strong> {product.custom_note}</p>
                                </div>
                            )}

                            {/* Optional Upgrade */}
                            {product.optional_upgrade && (
                                <div className="text-sm sm:text-base">
                                    <p className="text-amber-700 font-semibold select-none">Optional Upgrade:</p>
                                    <p className="text-gray-700">{product.optional_upgrade}</p>
                                    {product.optional_upgrade_price && (
                                        <p className="text-lime-600 font-semibold">₹{product.optional_upgrade_price}</p>
                                    )}
                                </div>
                            )}

                            {/* Delivery Charges */}
                            {product.delivery_charges !== 0 && (
                                <p className="text-sm text-red-600 font-medium select-none">
                                    Delivery Charges: ₹{product.delivery_charges}
                                </p>
                            )}

                            {/* Price + Add to Cart */}
                            <div className="flex gap-5 items-center">
                                <DiscountAmountItem discount_price={product.discount_price} price={product.price}/>
                                <button
                                    onClick={handleAddToCart}
                                    className="w-max text-center bg-gradient-to-r from-amber-600/40 to-amber-600/20 border border-amber-600/30 text-amber-900 hover:bg-amber-600/20 transition-all ease-in-out duration-500 shadow-lg shadow-amber-600/30 py-2 px-5 rounded-sm"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>

                        {/* Fullscreen Modal */}
                        {isFullscreen && productImages.length > 0 && (
                            <div
                                className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-10"
                                onClick={() => setIsFullscreen(false)}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setIsFullscreen(false)}
                                    className="absolute top-5 right-5"
                                >
                                    <Image src="/icons/cross.png" width={25} height={25} alt="Close" />
                                </button>

                                {/* Center Image */}
                                <Image
                                    src={productImages[currentIndex]}
                                    alt={product.name}
                                    width={1000}
                                    height={1000}
                                    className="max-h-full max-w-full object-contain rounded-lg shadow-xl"
                                    onClick={(e) => e.stopPropagation()}
                                />

                                {/* Navigation Buttons */}
                                {productImages.length > 1 && (
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
                                                    setCurrentIndex((prev) => (prev - 1 + productImages.length) % productImages.length)
                                                }
                                                className="bg-white text-black hover:bg-white/90 px-6 py-3 transition w-[130px] rounded-md"
                                            >
                                                Previous
                                            </button>
                                            <button
                                                onClick={() =>
                                                    setCurrentIndex((prev) => (prev + 1) % productImages.length)
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
                )}
            </PageWrapper2>
        </>
    );
}