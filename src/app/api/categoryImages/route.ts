import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { ProductData } from '../../../utility/ProductData.util';
import getSortedCategories from '../../../utility/getCategories.util';

export async function GET() {
    const sortedCategories = getSortedCategories();
    const usedProductIds = new Set<string>();
    const validExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"];
    const result: { category: string; image: string }[] = [];

    for (const category of sortedCategories) {
        const availableProducts = ProductData.filter(product =>
            product.category.includes(category) &&
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
            image: imagePath || "/fallback-image.jpg"
        });
    }

    return NextResponse.json(result);
}
