"use client";
import { useState, useEffect, useCallback } from "react";
import { PageWrapper2 } from "../(components)/Utils/PageWrapper";
import { isFeaturedProduct } from "../../utils/getFeaturedIProducts.util";
import { ProductDetails } from "../../types/ProductData.type";
import { getAllProductsSorted } from "../../utils/getAllProducts.util";
import { useCart } from "../(context)/Cart.context";
import toast from "react-hot-toast";
import { DEFAULT_IMG } from "../../utils/utils";
import ProductGrid from "../(components)/ProductRelated/ProductGrid";
import FullscreenImageModal from "../(components)/ProductRelated/FullscreenImageModal";
import FeaturedProductsCarousel from "../(components)/ProductRelated/FeaturedProducts";
import Spinner from "../(components)/components/Spinner";
import SortControls from "../(components)/Search/SortControls";
import { getFilteredProducts } from "../../utils/getFilteredResult.util";

export default function Shop() {
  const [loadingFeatured, setLoadingFeatured] = useState<boolean>(true);
  const [loadingProducts, setLoadingProducts] = useState<boolean>(true);
  const [isFeatured, setIsFeatured] = useState<ProductDetails[]>([]);
  const [allProducts, setAllProducts] = useState<ProductDetails[]>([]);
  const [productImages, setProductImages] = useState<Record<string, string[]>>(
    {}
  );
  const [fullscreenImage, setFullscreenImage] = useState<{
    images: string[];
    index: number;
  } | null>(null);
  const [sortType, setSortType] = useState<string>("A-Z");
  const [onlyDiscounted, setOnlyDiscounted] = useState<boolean>(false);
  const [filteredProducts, setFilteredProducts] = useState<ProductDetails[]>(
    []
  );
  const { addToCart } = useCart();

  // Load featured products
  useEffect(() => {
    let isMounted = true;

    const loadFeatured = async () => {
      try {
        const featured = await isFeaturedProduct();
        if (isMounted) {
          setIsFeatured(featured);
        }
      } catch (error) {
        console.error("Error loading featured products:", error);
      } finally {
        if (isMounted) {
          setLoadingFeatured(false);
        }
      }
    };

    loadFeatured();

    return () => {
      isMounted = false;
    };
  }, []);

  // Load all products and their images
  useEffect(() => {
    let isMounted = true;

    const loadProductsAndImages = async () => {
      try {
        const products = getAllProductsSorted();

        if (isMounted) {
          setAllProducts(products);
        }

        // Load images for each product
        const imagePromises = products.map(async (product) => {
          try {
            const res = await fetch(
              `/api/getProductImages?productCode=${product.code}`
            );
            const data = await res.json();
            return { code: product.code, images: data.images || [] };
          } catch {
            return { code: product.code, images: [] };
          }
        });

        const results = await Promise.all(imagePromises);

        if (isMounted) {
          const imageMap: Record<string, string[]> = {};
          results.forEach(({ code, images }) => {
            imageMap[code] = images;
          });
          setProductImages(imageMap);
        }
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        if (isMounted) {
          setLoadingProducts(false);
        }
      }
    };

    loadProductsAndImages();

    return () => {
      isMounted = false;
    };
  }, []);

  // Update filtered products when sort or discount filter changes
  useEffect(() => {
    if (loadingProducts) return;

    // Use requestAnimationFrame to avoid synchronous state updates
    const updateFiltered = () => {
      setFilteredProducts(
        getFilteredProducts(allProducts, "", sortType, onlyDiscounted)
      );
    };

    requestAnimationFrame(updateFiltered);
  }, [sortType, onlyDiscounted, allProducts, loadingProducts]);

  const handleAddToCart = useCallback(
    (product: ProductDetails) => {
      addToCart({
        code: product.code,
        name: product.name,
        price: product.price,
        discount: product.discount_price,
        quantity: 1,
        photo: productImages[product.code]?.[0] || DEFAULT_IMG,
      });

      toast.success(`'${product.name}' added to cart!`, {
        duration: 3000,
        style: {
          border: "1px solid #facc15",
          padding: "12px",
        },
      });
    },
    [addToCart, productImages]
  );

  const openFullscreen = useCallback((images: string[], index: number = 0) => {
    if (!images || images.length === 0) return;
    setFullscreenImage({ images, index });
  }, []);

  const handleCloseFullscreen = useCallback(() => {
    setFullscreenImage(null);
  }, []);

  const handlePrevImage = useCallback(() => {
    setFullscreenImage((prev) =>
      prev
        ? {
            ...prev,
            index: (prev.index - 1 + prev.images.length) % prev.images.length,
          }
        : prev
    );
  }, []);

  const handleNextImage = useCallback(() => {
    setFullscreenImage((prev) =>
      prev
        ? {
            ...prev,
            index: (prev.index + 1) % prev.images.length,
          }
        : prev
    );
  }, []);

  const handleToggleDiscounted = useCallback(() => {
    setOnlyDiscounted((prev) => !prev);
  }, []);

  return (
    <div className="space-y-10 py-10">
      {!loadingFeatured ? (
        <FeaturedProductsCarousel
          products={isFeatured}
          productImages={productImages}
        />
      ) : (
        <div className="flex flex-col items-center justify-center gap-3 text-amber-800">
          <Spinner />
          <p className="text-lg font-extralight animate-bounce">
            Loading Featured Products...
          </p>
        </div>
      )}

      <PageWrapper2>
        <div className="flex flex-col w-full items-center justify-center">
          {!loadingProducts ? (
            <>
              <div className="bg-linear-to-r from-white via-amber-600/20 to-white border-t border-b border-amber-600/10 text-2xl font-light text-center mb-5 p-5 w-full">
                <span className="text-3xl sm:text-4xl font-light text-amber-900 underline-hover cursor-default">
                  All Products!
                </span>
              </div>
              <SortControls
                sortType={sortType}
                onSortTypeChange={setSortType}
                onlyDiscounted={onlyDiscounted}
                onToggleDiscounted={handleToggleDiscounted}
              />

              <ProductGrid
                products={filteredProducts || allProducts}
                productImages={productImages}
                onImageClick={openFullscreen}
                onAddToCart={handleAddToCart}
              />
              {fullscreenImage && (
                <FullscreenImageModal
                  images={fullscreenImage.images}
                  index={fullscreenImage.index}
                  onClose={handleCloseFullscreen}
                  onPrev={handlePrevImage}
                  onNext={handleNextImage}
                />
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-3 py-10 text-amber-800">
              <Spinner />
              <p className="text-lg font-extralight animate-bounce">
                Loading Products...
              </p>
            </div>
          )}
        </div>
      </PageWrapper2>
    </div>
  );
}
