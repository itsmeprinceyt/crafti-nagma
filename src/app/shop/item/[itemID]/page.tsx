"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { PageWrapperItem, PageWrapper2 } from "../../../(components)/Utils/PageWrapper";
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
import { DiscountAmountItem, DiscountAmountTag } from "../../../(components)/ProductRelated/DiscountComponents";
import Spinner from "../../../(components)/components/Spinner";
import { ShoppingCart } from "lucide-react";

export default function ProductPage() {
    const params = useParams();
    const productID = params.itemID as string;

    const [product, setProduct] = useState<ProductDetails | null>(null);
    const [productImages, setProductImages] = useState<string[]>([]);
    const [isValid, setIsValid] = useState<boolean>(true);
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [discount, setDiscount] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const { addToCart } = useCart();

    useEffect(() => {
        setLoading(true);
        const foundProduct = ProductData.find((item) => item.code === productID);

        if (!foundProduct || !foundProduct.is_active) {
            setIsValid(false);
            return;
        }

        setDiscount(getDiscountPercent(foundProduct.price, foundProduct.discount_price));
        setProduct(foundProduct);
        fetch(`/api/getProductImages?productCode=${foundProduct.code}`)
            .then((res) => res.json())
            .then((data) => setProductImages(data.images || []))
            .catch(() => setProductImages([]))
            .finally(() => setLoading(false));
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

    const LeftSide: string = "text-gray-500 font-medium";
    const RightSide: string = "text-gray-500 text-xs";
    const RightSideHighlight: string = "font-semibold text-xs";
    const StockStyle = (inStock: boolean) =>
        inStock ? "text-green-600" : "text-red-600";

    const accordionBase: string = "flex flex-col group border border-amber-600/50 rounded-xl overflow-hidden bg-gradient-to-br from-white via-amber-100/20 to-white shadow-md shadow-amber-600/20 backdrop-blur-sm";
    const accordionSummary: string = "text-amber-900 text-xl font-bold cursor-pointer px-5 py-4  flex justify-between items-center bg-gradient-to-r from-amber-600/20 via-amber-600/10 to-white hover:bg-amber-600/10 transition duration-300";
    const accordionArrow: string = "transform transition-transform duration-300 group-open:rotate-90 text-amber-800 text-lg";
    const accordionBody: string = "flex flex-col divide-y divide-amber-600/20 bg-white/70 animate-fade-in";


    return (
        <>
            {loading && (
                <PageWrapperItem>
                    <div className="text-sm font-extralight text-amber-900 w-full p-5 flex items-center justify-center gap-2">
                        <Spinner /> {`Loading all the details about the product!`}
                    </div>
                </PageWrapperItem>
            )}

            <PageWrapper2>
                {product && !loading && (
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-5 px-2 md:p-5 select-text relative">
                        {/* Product Image Carousel */}
                        <div className="w-full max-w-[350px] sm:max-w-[500px] md:max-w-[500px] lg:max-w-[600px] rounded-lg relative">
                            {loading ? (
                                <div className="flex flex-col items-center justify-center gap-3 py-10 z-10">
                                    <Spinner />
                                    <p className="text-amber-600 text-lg font-extralight animate-bounce">{`Loading Images ...`}</p>
                                </div>
                            ) : productImages.length > 0 ? (
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
                            ) : (
                                <div className="w-full flex items-center justify-center text-gray-500 italic rounded-lg">
                                    <span>{`Product image is not available`}</span>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col w-full md:max-w-3xl p-4 gap-5 border border-amber-600/20 rounded-lg shadow-md bg-white relative">
                            {/* Name */}
                            <p className="font-extralight text-2xl text-amber-800">{product!.name}</p>
                            {/* Discount + Price */}
                            <div className="flex gap-2">
                                <DiscountAmountItem discount_price={product.discount_price} price={product.price} />
                                <DiscountAmountTag discount={discount} />
                            </div>
                            {/* Description */}
                            <p className="text-sm sm:text-base text-black/50 whitespace-pre-line leading-relaxed">
                                {product.description}
                            </p>

                            {/* Add to Cart */}
                            <button
                                onClick={handleAddToCart}
                                className="w-full text-center bg-gradient-to-r from-green-600 to-green-400 border border-green-600/30 text-green-50 font-semibold text-lg hover:text-green-900  transition-all duration-300 ease-in-out shadow-lg shadow-green-600/30 py-3 px-5 rounded-md flex items-center justify-center gap-2 ">
                                <ShoppingCart className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-rotate-3" />
                                Add to Cart
                            </button>


                            {/* Free Gift Notice */}
                            {product.gift_included && product.gift_included.length > 0 && (
                                <div className="bg-gradient-to-r from-purple-600/20 via-blue-500/20 to-indigo-600/20 border border-indigo-500/30 text-indigo-900 text-base sm:text-lg font-semibold px-5 py-4 rounded-md shadow-md shadow-indigo-500/30 mb-3 backdrop-blur-md">
                                    {`🎁 This product is special! You'll get the following items `}<span className="font-bold">for free!</span>
                                </div>
                            )}

                            {/* Gift Accordion */}
                            {product.gift_included && product.gift_included.length > 0 && (
                                <details className="group border border-indigo-400/40 rounded-md overflow-hidden bg-gradient-to-br from-purple-50 via-indigo-50 to-white shadow-lg shadow-indigo-400/20 backdrop-blur-sm">
                                    <summary className="text-indigo-800 text-xl font-bold cursor-pointer px-5 py-4  flex justify-between items-center bg-gradient-to-r from-purple-100/50 via-indigo-100/50 to-white hover:bg-indigo-100/30 transition duration-300">
                                        🎉 Order to get these for free!
                                        <span className="transform transition-transform duration-300 group-open:rotate-90 text-indigo-700 text-lg">›</span>
                                    </summary>

                                    <div className="flex flex-col divide-y divide-indigo-300/30">
                                        {product.gift_included.map((gift, i) => (
                                            <div
                                                key={i}
                                                className="py-3 px-5 text-indigo-900 text-sm sm:text-base bg-white/80 hover:bg-indigo-50/60 transition-all duration-200"
                                            >
                                                🎁 {gift}
                                            </div>
                                        ))}
                                    </div>
                                </details>
                            )}


                            {/* Details */}
                            <div className="flex flex-col">
                                <h1 className="text-amber-900 text-2xl pt-5 pb-2 font-bold underline-hover">Product Details</h1>

                                <div className="flex flex-col divide-y divide-amber-600/10">
                                    {/* Product Code */}
                                    <div className="grid grid-cols-2 gap-2 py-2 items-center">
                                        <p className={LeftSide}>Product Code</p>
                                        <p className={`text-blue-600 ${RightSideHighlight}`}>{product.code}</p>
                                    </div>

                                    {/* Category */}
                                    {product.category.length > 0 && (
                                        <div className="grid grid-cols-2 gap-2 py-2">
                                            <p className={LeftSide}>Category</p>
                                            <div className="flex flex-wrap gap-2">
                                                {product.category.map((cat, idx) => (
                                                    <Link
                                                        href={`/shop/category/${cat}`}
                                                        key={idx}
                                                        className="bg-amber-600/20 hover:bg-amber-600/40 border border-amber-600/40 text-amber-700 px-2 py-1 rounded-lg text-sm transition-all ease-in-out duration-300"
                                                    >
                                                        {cat}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Material */}
                                    {product.material && (
                                        <div className="grid grid-cols-2 gap-2 py-2 items-center">
                                            <p className={LeftSide}>Material</p>
                                            <p className={RightSide}>{product.material}</p>
                                        </div>
                                    )}

                                    {/* Size */}
                                    {product.size && (
                                        <div className="grid grid-cols-2 gap-2 py-2 items-center">
                                            <p className={LeftSide}>Size</p>
                                            <p className={RightSide}>{product.size}</p>
                                        </div>
                                    )}

                                    {/* Processing Time */}
                                    {product.processing_time && (
                                        <div className="grid grid-cols-2 gap-2 py-2 items-center">
                                            <p className={LeftSide}>Processing Time</p>
                                            <p className={RightSide}>{product.processing_time}</p>
                                        </div>
                                    )}

                                    {/* Stock */}
                                    {typeof product.stock === "boolean" && (
                                        <div className="grid grid-cols-2 gap-2 py-2 items-center">
                                            <p className={LeftSide}>Stock</p>
                                            <p className={`${StockStyle(product.stock)} text-xs`}>
                                                {product.stock ? "In Stock" : "Out of Stock"}
                                            </p>
                                        </div>
                                    )}

                                </div>
                            </div>

                            {/* Features */}
                            {product.features?.length > 0 && (
                                <details className={accordionBase}>
                                    <summary className={accordionSummary}>
                                        Features
                                        <span className={accordionArrow}>›</span>
                                    </summary>
                                    <div className={accordionBody}>
                                        {product.features.map((f, i) => (
                                            <div key={i} className="py-3 px-5 text-gray-800 text-sm sm:text-base">
                                                • {f}
                                            </div>
                                        ))}
                                    </div>
                                </details>
                            )}

                            {/* Variants */}
                            {product.variants && product.variants?.length > 0 && (
                                <details className={accordionBase}>
                                    <summary className={accordionSummary}>
                                        Variants
                                        <span className={accordionArrow}>›</span>
                                    </summary>
                                    <div className={accordionBody}>
                                        {product.variants.map((v, i) => (
                                            <div key={i} className="py-3 px-5 text-gray-800 text-sm sm:text-base">
                                                <span className="font-semibold">{v.name}</span>
                                                {v.description && <> — {v.description}</>}
                                            </div>
                                        ))}
                                    </div>
                                </details>
                            )}

                            {/* Options */}
                            {product.options && product.options?.length > 0 && (
                                <details className={accordionBase}>
                                    <summary className={accordionSummary}>
                                        Options
                                        <span className={accordionArrow}>›</span>
                                    </summary>
                                    <div className={accordionBody}>
                                        {product.options.map((o, i) => (
                                            <div key={i} className="py-3 px-5 text-gray-800 text-sm sm:text-base">
                                                <span className="font-semibold">{o.option_name}</span>
                                                {o.option_description && <> — {o.option_description}</>}
                                            </div>
                                        ))}
                                    </div>
                                </details>
                            )}

                            {/* Care Instructions */}
                            {product.care_instructions && product.care_instructions?.length > 0 && (
                                <details className={accordionBase}>
                                    <summary className={accordionSummary}>
                                        Care Instructions
                                        <span className={accordionArrow}>›</span>
                                    </summary>
                                    <div className={accordionBody}>
                                        {product.care_instructions.map((c, i) => (
                                            <div key={i} className="py-3 px-5 text-gray-800 text-sm sm:text-base">
                                                • {c}
                                            </div>
                                        ))}
                                    </div>
                                </details>
                            )}



                            {/* Custom Note */}
                            {product.custom_note && (
                                <div className="bg-green-600/10 border-l-4 border-green-600 p-3 text-sm text-green-800 rounded">
                                    <p><strong>Note:</strong> {product.custom_note}</p>
                                </div>
                            )}

                            {/* Optional Upgrade */}
                            {product.optional_upgrade && (
                                <div className="text-sm sm:text-base">
                                    <p className="bg-green-600/10 border-l-4 border-green-600 p-3 text-sm text-green-800 rounded"><strong>Optional Upgrade:</strong> {product.optional_upgrade}</p>
                                    {product.optional_upgrade_price && (
                                        <p className=" font-semibold">₹{product.optional_upgrade_price}</p>
                                    )}
                                </div>
                            )}

                            {/* Delivery Charges */}
                            {product.delivery_charges !== 0 && (
                                <p className="bg-red-600/10 border-l-4 border-red-600 p-3 text-sm text-red-800 rounded">
                                    <strong>Delivery Charges:</strong> ₹{product.delivery_charges}
                                </p>
                            )}

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