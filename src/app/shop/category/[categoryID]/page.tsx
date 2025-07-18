"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import { PageWrapper2 } from '../../../(components)/PageWrapper';
import { ProductCategory } from '../../../../utility/ProductData.util';
import { ProductDetails } from '../../../../types/ProductData.type';
import { getProductsByCategory } from '../../../../utility/getProductByCategory.util';
import { useCart } from '../../../(context)/Cart.context';
import { toast } from "react-hot-toast";
import { getDiscountPercent } from '../../../../utility/discountPercentage.util';
import { DEFAULT_IMG } from '../../../../utility/utils';

export default function CategoryPage() {
  const params = useParams();
  const decodedCategory = decodeURIComponent(params.categoryID as string);

  const [products, setProducts] = useState<ProductDetails[]>([]);
  const [productImages, setProductImages] = useState<Record<string, string[]>>({});
  const [isValid, setIsValid] = useState<boolean>(true);
  const [fullscreenImage, setFullscreenImage] = useState<{
    images: string[],
    index: number
  } | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const categoryEnumValues = Object.values(ProductCategory) as string[];

    const matchedCategory = categoryEnumValues.find(
      (cat) => cat.toLowerCase() === decodedCategory.toLowerCase()
    ) as ProductCategory | undefined;

    if (!matchedCategory) {
      setIsValid(false);
      return;
    }

    const categoryProducts = getProductsByCategory(matchedCategory);
    setProducts(categoryProducts);

    if (matchedCategory) {
      const categoryProducts = getProductsByCategory(matchedCategory);
      setProducts(categoryProducts);
      categoryProducts.forEach(async (product) => {
        try {
          const res = await fetch(`/api/getProductImages?productCode=${product.code}`);
          const data = await res.json();
          setProductImages((prev) => ({ ...prev, [product.code]: data.images }));
        } catch (error) {
          console.error(`Failed to fetch images for ${product.code}:`, error);
        }
      });
    }

  }, [decodedCategory]);

  if (!isValid) {
    notFound();
  }

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
        <div className="bg-gradient-to-r from-white via-amber-600/20 to-white border border-amber-600/10 text-3xl sm:text-4xl font-light text-amber-900 w-full mt-10 mb-10 p-5 text-center">
          {decodedCategory}
        </div>
      </PageWrapper2>

      <PageWrapper2>
        <div className="grid grid-cols-3 max-[1050px]:grid-cols-2 max-[700px]:grid-cols-1 gap-10 p-1 mb-10">
          {products.map((product) => {
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
                {
                  productImages[product.code]?.[0] ? (
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
                  )
                }

                < div className="flex flex-col items-start justify-between h-full text-start gap-2" >
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
              <img
                src={fullscreenImage.images[fullscreenImage.index]}
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
        </div >
      </PageWrapper2 >
    </>
  );
}
