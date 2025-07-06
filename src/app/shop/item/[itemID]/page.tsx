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

export default function ProductPage() {
    const params = useParams();
    const productID = params.itemID as string;

    const [product, setProduct] = useState<ProductDetails | null>(null);
    const [isValid, setIsValid] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { addToCart } = useCart();

    useEffect(() => {
        const foundProduct = ProductData.find((item) => item.code === productID);

        if (!foundProduct) {
            setIsValid(false);
            return;
        }

        setProduct(foundProduct);
    }, [productID]);

    if (!isValid) return notFound();

    const handleAddToCart = () => {
        if (!product) return;

        const priceToUse = product.discount_price
            ? Number(product.discount_price)
            : product.price;

        addToCart({
            id: product.code,
            name: product.name,
            price: priceToUse,
            quantity: 1,
            photo: product.main_image
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
                <div className="bg-gradient-to-r from-white via-amber-600/20 to-white border border-amber-600/10 text-3xl sm:text-4xl font-light text-amber-900 w-full mt-5 mb-5 p-5 text-center">
                    {product?.name}
                </div>
            </PageWrapper2>

            <PageWrapper2>
                {product && (
                    <div className="flex flex-col items-center gap-5">
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
                                {product.product_images?.map((img, index) => (
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


                        <div className="flex flex-col gap-4 mb-5 w-full max-w-[320px] sm:max-w-[600px] p-4 border border-amber-400/40 rounded-lg shadow-md bg-white">

                            {/* Description */}
                            <div>
                                <p className="text-sm font-semibold text-amber-700 mb-1">Description</p>
                                <p className="text-sm text-gray-700 whitespace-pre-line">{product.description}</p>
                            </div>

                            {/* Basic Info: Size, Material */}
                            <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                    <p className="font-medium text-gray-600">Size</p>
                                    <p className="text-gray-800">{product.size}</p>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-600">Material</p>
                                    <p className="text-gray-800">{product.material}</p>
                                </div>
                            </div>

                            {/* Additional Info: Code, Category, Stock, Processing Time */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                                <div>
                                    <p className="font-medium text-gray-600">Product Code</p>
                                    <p className="text-gray-800">{product.code}</p>
                                </div>

                                {product.category.length > 0 && (
                                    <div>
                                        <p className="font-medium text-gray-600">Category</p>
                                        <p className="text-gray-800">{product.category.join(", ")}</p>
                                    </div>
                                )}

                                <div>
                                    <p className="font-medium text-gray-600">Stock</p>
                                    <p className={product.stock ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>
                                        {product.stock ? "In Stock" : "Out of Stock"}
                                    </p>
                                </div>

                                {product.processing_time && (
                                    <div>
                                        <p className="font-medium text-gray-600">Processing Time</p>
                                        <p className="text-gray-800">{product.processing_time}</p>
                                    </div>
                                )}
                            </div>

                            {/* Features */}
                            {product.features?.length > 0 && (
                                <details className="bg-amber-50 border border-amber-300/50 rounded p-2 text-sm">
                                    <summary className="cursor-pointer font-medium text-amber-800">Features</summary>
                                    <ul className="list-disc pl-4 mt-2 text-gray-700">
                                        {product.features.map((f, i) => <li key={i}>{f}</li>)}
                                    </ul>
                                </details>
                            )}

                            {/* Variants */}
                            {product.variants!?.length > 0 && (
                                <details className="bg-amber-50 border border-amber-300/50 rounded p-2 text-sm">
                                    <summary className="cursor-pointer font-medium text-amber-800">Variants</summary>
                                    <ul className="pl-4 mt-2 text-gray-700 space-y-1">
                                        {product.variants!.map((v, i) => (
                                            <li key={i}>
                                                <span className="font-semibold">{v.name}</span>
                                                {v.description && ` — ${v.description}`}
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            )}

                            {/* Options */}
                            {product.options!?.length > 0 && (
                                <details className="bg-amber-50 border border-amber-300/50 rounded p-2 text-sm">
                                    <summary className="cursor-pointer font-medium text-amber-800">Options</summary>
                                    <ul className="pl-4 mt-2 text-gray-700 space-y-1">
                                        {product.options!.map((o, i) => (
                                            <li key={i}>
                                                <span className="font-semibold">{o.option_name}</span>
                                                {o.option_description && ` — ${o.option_description}`}
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            )}

                            {/* Care Instructions */}
                            {product.care_instructions!?.length > 0 && (
                                <details className="bg-amber-50 border border-amber-300/50 rounded p-2 text-sm">
                                    <summary className="cursor-pointer font-medium text-amber-800">Care Instructions</summary>
                                    <ul className="list-disc pl-4 mt-2 text-gray-700">
                                        {product.care_instructions!.map((c, i) => <li key={i}>{c}</li>)}
                                    </ul>
                                </details>
                            )}

                            {/* Custom Note */}
                            {product.custom_note && (
                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 text-sm text-yellow-800 rounded">
                                    <p><strong>Note:</strong> {product.custom_note}</p>
                                </div>
                            )}

                            {/* Optional Upgrade */}
                            {product.optional_upgrade && (
                                <div className="text-sm">
                                    <p className="text-amber-700 font-medium">Optional Upgrade:</p>
                                    <p className="text-gray-700">{product.optional_upgrade}</p>
                                    {product.optional_upgrade_price && (
                                        <p className="text-lime-600 font-semibold">₹{product.optional_upgrade_price}</p>
                                    )}
                                </div>
                            )}

                            {/* Delivery Charges */}
                            {product.delivery_charges !== 0 && (
                                <p className="text-sm text-red-600">
                                    <span className="font-medium">Delivery Charges:</span> ₹{product.delivery_charges}
                                </p>
                            )}

                            {/* Price + Add to Cart */}
                            <div className="flex gap-5 items-center">
                                <p className="flex-1 text-center bg-gradient-to-r from-lime-400 to-lime-500 border border-lime-600/50 text-lime-900 shadow-lg shadow-lime-600/30 py-2 px-5 rounded-sm">
                                    ₹{product.discount_price ? product.discount_price : product.price}
                                </p>

                                <button
                                    onClick={handleAddToCart}
                                    className="w-max text-center bg-gradient-to-r from-amber-600/40 to-amber-600/20 border border-amber-600/30 text-amber-900 hover:bg-amber-600/20 transition-all ease-in-out duration-500 shadow-lg shadow-amber-600/30 py-2 px-5 rounded-sm"
                                >
                                    Add to Cart
                                </button>
                            </div>

                        </div>



                        {isFullscreen && (
                            <div
                                className="fixed inset-0 z-50 bg-black/90 bg-opacity-90 flex items-center justify-center p-10"
                                onClick={() => setIsFullscreen(false)}
                            >
                                {/* Close button */}
                                <button
                                    onClick={() => setIsFullscreen(false)}
                                    className="absolute top-5 right-5"
                                >
                                    <Image
                                        src={"/icons/cross.png"}
                                        width={25}
                                        height={25}
                                        alt="Cross"
                                    />
                                </button>

                                {/* Previous button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentIndex((prev) => (prev - 1 + product.product_images!.length) % product.product_images!.length);
                                    }}
                                    className="absolute left-5 bg-black p-5 invert rounded-full">
                                    <Image
                                        src={"/icons/arrow.png"}
                                        width={25}
                                        height={25}
                                        alt="Cross"
                                        className="invert rotate-180"
                                    />
                                </button>

                                {/* Image preview */}
                                <Image
                                    src={product.product_images![currentIndex]}
                                    alt={product.name}
                                    width={1000}
                                    height={1000}
                                    className="max-h-full max-w-full object-contain rounded-lg shadow-xl"
                                    onClick={(e) => e.stopPropagation()}
                                />

                                {/* Next button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentIndex((prev) => (prev + 1) % product.product_images!.length);
                                    }}
                                    className="absolute right-5 bg-black p-5 invert rounded-full"
                                >
                                    <Image
                                        src={"/icons/arrow.png"}
                                        width={25}
                                        height={25}
                                        alt="Cross"
                                        className="invert"
                                    />
                                </button>
                            </div>
                        )}


                    </div>

                )}
            </PageWrapper2>
        </>
    );
}
