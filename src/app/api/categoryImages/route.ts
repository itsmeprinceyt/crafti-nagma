import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { ProductData } from '../../../utility/ProductData.util';
import getSortedCategories from '../../../utility/getCategories.util';

/**
 * API Route: GET /api/[your-route]
 * 
 * Description:
 * Returns an array of category-image pairs, where each image represents a random product from that category.
 * - For each category, selects a random product that is active (`is_active`) and not already used for another category.
 * - Ensures that a product is not reused across categories to maintain visual variety.
 * - Searches for image files in the product's directory under `/public/ProductImages/{product.code}`.
 * - Picks the first image (alphabetically sorted) from the product folder. If no image is found or directory read fails, falls back to a default image.
 * 
 * Response Format:
 * [
 *   { category: "Category Name", image: "/ProductImages/product-code/image-name.jpg" },
 *   ...
 * ]
 */
export async function GET() {
    const sortedCategories = getSortedCategories();
    const usedProductIds = new Set<string>();
    const validExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"];
    const result: { category: string; image: string }[] = [];

    for (const category of sortedCategories) {
        const availableProducts = ProductData.filter(product =>
            product.category.includes(category) && product.is_active &&
            !usedProductIds.has(product.code)
        );

        if (availableProducts.length === 0) continue;

        const randomProduct = availableProducts[Math.floor(Math.random() * availableProducts.length)];
        usedProductIds.add(randomProduct.code);

        const productDir = path.join(process.cwd(), "public", "ProductImages", randomProduct.code);
        let imagePath = "";

        try {
            const files = fs.readdirSync(productDir);
            const images = files
                .filter(file => validExtensions.includes(path.extname(file).toLowerCase()))
                .sort();

            if (images.length > 0) {
                imagePath = `/ProductImages/${randomProduct.code}/${images[0]}`;
            }
        } catch (err) {
            console.warn(`Image fetch failed for product ${randomProduct.code}:`, err);
        }

        result.push({
            category,
            image: imagePath || "/ProductImages/default.png"
        });
    }

    return NextResponse.json(result);
}
