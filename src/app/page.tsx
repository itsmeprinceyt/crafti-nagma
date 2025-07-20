"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { PageWrapperMain, PageWrapper } from "./(components)/PageWrapper";
import ButtonGold from "./(components)/Button";
import InfoCard from "./(components)/InfoCard";
import { CategoryWithImage } from "../types/CategoryWithImages.type";
import Spinner from "./(components)/Spinner";

export default function Home() {
  const [categoryData, setCategoryData] = useState<CategoryWithImage[]>([]);

  useEffect(() => {
    fetch("/api/categoryImages")
      .then((res) => res.json())
      .then((data: CategoryWithImage[]) => setCategoryData(data))
      .catch((err) => {
        console.error("Failed to fetch category images:", err);
      });
  }, []);

  return (
    <>
      <PageWrapperMain>
        {/* Banner Section */}
        <div className="relative flex items-center justify-center py-10">
          <Image
            src={"/banner/1.png"}
            alt="Banner"
            width={1536}
            height={1024}
            className="max-[500px]:w-3/4 w-1/2 h-auto object-cover rounded-lg shadow-xl shadow-amber-400/30 hover:scale-105 transition ease-in-out duration-300 border border-amber-600/10"
          />
        </div>

        {/* Hero Section */}
        <div className="relative bg-white/90 h-[250px]">
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-5 gap-5 text-center">
            <div className="w-full sm:w-3/4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light flex flex-wrap justify-center gap-x-2 text-center sm:text-left cursor-default">
              <span className="underline-hover">Handmade with Heart</span>
              <span>—</span>
              <span className="underline-hover">Crochet</span>
              <span>&</span>
              <span className="underline-hover">Embroidery Treasures</span>
            </div>

            <Link href="/shop">
              <ButtonGold text="Shop Now" />
            </Link>
          </div>
        </div>
      </PageWrapperMain>

      <PageWrapper>
        {/* Shop by Category */}
        <div className="bg-gradient-to-r from-white via-amber-600/20 to-white border border-amber-600/10 text-2xl font-light text-center p-5">
          <span className="underline-hover text-inherit cursor-default">Shop by Category</span>

          {categoryData.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-3 py-10 text-amber-800">
              <Spinner />
              <p className="text-lg font-extralight animate-bounce">Loading Categories...</p>
            </div>
          ) : (
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
              {categoryData.map(({ category, image }, idx) => (
                <SwiperSlide key={idx}>
                  <Link
                    href={`/shop/category/${category}`}
                    className="p-5 flex flex-col items-center gap-3 text-center"
                  >
                    <Image
                      src={image}
                      alt={category}
                      width={700}
                      height={700}
                      className="w-[150px] h-[150px] object-cover object-center rounded-lg shadow-lg"
                    />
                    <ButtonGold text={category} />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        {/* Tagline */}
        <div className="bg-gradient-to-r from-white via-amber-600/20 to-white border border-amber-600/10 text-2xl font-light text-center p-5">
          🤎 Crafted with love, cherished by you!
        </div>

        {/* Info Cards */}
        <div className="grid gap-10 p-5 items-center justify-center">
          <InfoCard
            title="CUSTOM ORDERS"
            description="Select your design, colors, material and personalize with embroidery."
            buttonText="Get Started"
            href="/shop"
            image="/character/1.png"
          />

          <InfoCard
            title="FLEXIBLE PRICE & DELIVERY"
            description="Offering flexible pricing, discounts and delivering all over INDIA!"
            buttonText="Shop Now"
            href="/shop"
            image="/character/3.png"
          />

          <InfoCard
            title="ABOUT US"
            description="Handcrafted with care, my passion is to bring warmth, color, and joy into every stitch and loop."
            buttonText="Contact Now"
            href="/contact"
            image="/character/2.png"
          />
        </div>
      </PageWrapper >
    </>
  );
}