import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import ButtonGold from "./Button";
import { DEFAULT_IMG } from "../../utility/utils";
import type { FeaturedProductsCarouselProps } from '../../types/FeaturedProducts.type';

export default function FeaturedProductsCarousel({
    products,
    productImages
}: FeaturedProductsCarouselProps) {
    return (
        <div className="bg-gradient-to-r from-white via-amber-600/20 to-white border border-amber-600/10 text-2xl font-light text-center p-5">
            <span className="text-3xl sm:text-4xl font-light text-amber-900 underline-hover cursor-default">
                Featured Products!
            </span>
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
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                    }}
                >
                    {products.map((product, idx) => (
                        <SwiperSlide key={product.code || idx}>
                            <Link
                                href={`/shop/item/${product.code}`}
                                className="mt-5 p-5 flex flex-col items-center gap-3 text-start bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 w-full sm:w-[200px]"
                            >
                                <Image
                                    src={productImages[product.code]?.[0] || DEFAULT_IMG}
                                    alt={product.name}
                                    width={700}
                                    height={700}
                                    className="w-[150px] h-[150px] object-cover object-center rounded-lg shadow-lg"
                                />
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
    );
}
