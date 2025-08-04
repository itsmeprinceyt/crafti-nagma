import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { ProductData } from '../../../utility/ProductData.util';
import getSortedCategories from '../../../utility/getCategories.util';

/**
 * API Route: GET /api/[your-route]
 * 
 * Description:
 * Returns an array of category-image pairs, where each image represents a product from that category.
 * - For each category, selects a product that is marked as active and ideally flagged as `main_showcase`.
 * - Ensures that a product is not reused across multiple categories, unless it is the only product available in that category.
 * - Prioritizes unused products and uses a fallback default image if no images are found.
 * - Images are selected from the corresponding product's directory in `/public/ProductImages/`.
 * 
 * Response Format:
 * [
 *   { category: "Category Name", image: "/ProductImages/product-code/image-name.jpg" },
 *   ...
 * ]
 */
export async function GET() {
    const sortedCategories = getSortedCategories();
    const validExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"];
    const result: { category: string; image: string }[] = [];
    const usedProductCodes = new Set<string>();

    for (const category of sortedCategories) {
        const allProductsInCategory = ProductData.filter(
            product => product.category.includes(category) && product.is_active
        );

        const unusedProducts = allProductsInCategory.filter(
            p => !usedProductCodes.has(p.code)
        );

        let selectedProduct: typeof allProductsInCategory[0] | undefined;

        if (unusedProducts.length > 0) {
            const showcaseProduct = unusedProducts.find(p => p.main_showcase);
            selectedProduct = showcaseProduct || unusedProducts[Math.floor(Math.random() * unusedProducts.length)];
        } else if (allProductsInCategory.length === 1) {
            // Allow reuse only if it's the only product in that category
            selectedProduct = allProductsInCategory[0];
        }

        let imagePath = "/ProductImages/default.png";

        if (selectedProduct) {
            usedProductCodes.add(selectedProduct.code); // Mark it as used

            const productDir = path.join(process.cwd(), "public", "ProductImages", selectedProduct.code);
            try {
                const files = fs.readdirSync(productDir);
                const images = files
                    .filter(file => validExtensions.includes(path.extname(file).toLowerCase()))
                    .sort();

                if (selectedProduct.main_showcase) {
                    const mainImage = images.find(i => i.toLowerCase().startsWith("main"));
                    imagePath = mainImage
                        ? `/ProductImages/${selectedProduct.code}/${mainImage}`
                        : images.length > 0
                            ? `/ProductImages/${selectedProduct.code}/${images[0]}`
                            : imagePath;
                } else if (images.length > 0) {
                    imagePath = `/ProductImages/${selectedProduct.code}/${images[0]}`;
                }
            } catch (err) {
                console.warn(`Image fetch failed for product ${selectedProduct.code}:`, err);
            }
        }

        result.push({
            category,
            image: imagePath
        });
    }

    return NextResponse.json(result);
}
