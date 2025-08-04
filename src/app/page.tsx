"use client";
import Image from "next/image";
import Link from "next/link";
import { PageWrapperMain, PageWrapper } from "./(components)/Utils/PageWrapper";
import HomeCategoryButton from "./(components)/Buttons/HomeCategoryButtons";
import ShopNow from "./(components)/Buttons/ShopNow";
import InfoCard from "./(components)/Utils/InfoCard";

export default function Home() {
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

            <div className="flex flex-col items-center justify-center gap-5">
              <Link href="/shop">
                <ShopNow text="Shop Now" />
              </Link>
              <Link href="/categories">
                <HomeCategoryButton text="Browse Categories" />
              </Link>
            </div>
          </div>
        </div>
      </PageWrapperMain>

      <PageWrapper>
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