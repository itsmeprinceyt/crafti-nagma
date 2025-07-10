"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import { PageWrapper2 } from '../../../(components)/PageWrapper';
import { CategoryList } from '../../../../utility/ProductData.util';
import { ProductDetails } from '../../../../types/ProductData.type';
import { getProductsByCategory } from '../../../../utility/getProductByCategory.util';
import { useCart } from '../../../(context)/Cart.context';
import { toast } from "react-hot-toast";

export default function CategoryPage() {
  const params = useParams();
  const decodedCategory = decodeURIComponent(params.categoryID as string);

  const [products, setProducts] = useState<ProductDetails[]>([]);
  const [isValid, setIsValid] = useState<boolean>(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const isValidCategory = CategoryList.some(
      (cat) => cat.toLowerCase() === decodedCategory.toLowerCase()
    );

    if (!isValidCategory) {
      setIsValid(false);
      return;
    }

    const categoryProducts = getProductsByCategory(decodedCategory);
    setProducts(categoryProducts);
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
        <div className="bg-gradient-to-r from-white via-amber-600/20 to-white border border-amber-600/10 text-3xl sm:text-4xl font-light text-amber-900 w-full mt-10 mb-10 p-5 text-center">
          {decodedCategory}
        </div>
      </PageWrapper2>

      <PageWrapper2>
        <div className="grid grid-cols-3 max-[1050px]:grid-cols-2 max-[700px]:grid-cols-1 gap-10 p-1 mb-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-5 w-[350px] max-[349px]:w-full flex flex-col justify-start items-center gap-3 bg-white border border-amber-600/30 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all ease-in-out duration-300 "
            >
              <Image
                src={product.main_image}
                width={700}
                height={700}
                alt={product.name}
                className="max-w-[300px] max-h-[300px] object-cover object-center rounded-lg shadow-lg"
              />

              <div className="flex flex-col items-start justify-between h-full text-start gap-2">
                <p className="text-start font-bold text-xs text-wrap w-full line-clamp-2 pb-2 border-b border-black/10">
                  {product.name}
                </p>

                <p className="text-start text-xs text-wrap w-full text-gray-600 line-clamp-3 pb-2 border-b border-black/10">
                  {product.brief_description}
                </p>

                <div className="flex justify-between items-center gap-2 w-full">
                  <p className="flex-1 text-center bg-gradient-to-r from-lime-400 to-lime-500 border border-lime-600/50 text-lime-900 shadow-lg shadow-lime-600/30 py-2 px-5 rounded-sm">₹{product.discount_price
                    ? product.discount_price
                    : product.price}</p>
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
          ))}
        </div>


      </PageWrapper2>
    </>
  );
}
