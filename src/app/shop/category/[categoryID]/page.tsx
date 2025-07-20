"use client";
import { useEffect, useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import { PageWrapper2 } from '../../../(components)/PageWrapper';
import { ProductCategory } from '../../../../utility/ProductData.util';
import { ProductDetails } from '../../../../types/ProductData.type';
import { getProductsByCategory } from '../../../../utility/getProductByCategory.util';
import { useCart } from '../../../(context)/Cart.context';
import { toast } from "react-hot-toast";
import { DEFAULT_IMG } from '../../../../utility/utils';
import ProductGrid from "../../../(components)/ProductGrid";
import FullscreenImageModal from "../../../(components)/FullscreenImageModal";
import Spinner from '@/app/(components)/Spinner';

export default function CategoryPage() {
  const params = useParams();
  const decodedCategory = decodeURIComponent(params.categoryID as string);
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<ProductDetails[]>([]);
  const [productImages, setProductImages] = useState<Record<string, string[]>>({});
  const [isValid, setIsValid] = useState<boolean>(true);
  const [fullscreenImage, setFullscreenImage] = useState<{
    images: string[],
    index: number
  } | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchCategoryData() {
      setLoading(true);
      const categoryEnumValues = Object.values(ProductCategory) as string[];
      const matchedCategory = categoryEnumValues.find(
        (cat) => cat.toLowerCase() === decodedCategory.toLowerCase()
      ) as ProductCategory | undefined;

      if (!matchedCategory) {
        setIsValid(false);
        setLoading(false);
        return;
      }

      const categoryProducts = getProductsByCategory(matchedCategory);
      setProducts(categoryProducts);
      const results = await Promise.all(
        categoryProducts.map(async (product) => {
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
      results.forEach(({ code, images }) => {
        imageMap[code] = images;
      });
      setProductImages(imageMap);
      setLoading(false);
    }

    fetchCategoryData();
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
        {loading ? (
          <div className="flex flex-col items-center justify-center gap-3 py-10 text-amber-800">
            <Spinner />
            <p className="text-lg font-extralight animate-bounce">Loading {decodedCategory} Products...</p>
          </div>
        ) : (
          <ProductGrid
            products={products}
            productImages={productImages}
            onImageClick={openFullscreen}
            onAddToCart={handleAddToCart}
          />
        )}

        {fullscreenImage && !loading && (
          <FullscreenImageModal
            images={fullscreenImage.images}
            index={fullscreenImage.index}
            onClose={() => setFullscreenImage(null)}
            onPrev={() =>
              setFullscreenImage((prev) =>
                prev
                  ? {
                    ...prev,
                    index: (prev.index - 1 + prev.images.length) % prev.images.length,
                  }
                  : prev
              )
            }
            onNext={() =>
              setFullscreenImage((prev) =>
                prev
                  ? {
                    ...prev,
                    index: (prev.index + 1) % prev.images.length,
                  }
                  : prev
              )
            }
          />
        )}
      </PageWrapper2>
    </>
  );
}
