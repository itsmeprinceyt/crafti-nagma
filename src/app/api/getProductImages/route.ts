import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { DEFAULT_IMG } from '../../../utility/utils';

/**
 * API Route: GET /api/getProductImages?productCode=PRODUCT_CODE
 *
 * Description:
 * Fetches all image file paths for a given product code.
 * - Reads the directory: `/public/ProductImages/{productCode}`
 * - Filters image files by valid extensions: .png, .jpg, .jpeg, .webp, .gif
 * - Sorts the file names alphabetically for consistent ordering
 * - Returns an array of image URLs relative to the public folder
 * 
 * Query Parameter:
 * - `productCode` (required): The unique code of the product whose images are to be fetched
 * 
 * Response Format:
 * - Success: { images: ["/ProductImages/productCode/image1.jpg", ...] }
 * - Failure (missing or invalid product code): { error: "Missing productCode" }, status 400
 * - Failure (directory read error or no images found): { images: [DEFAULT_IMG] }
 */
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const productCode = searchParams.get('productCode');

    if (!productCode) {
        return NextResponse.json({ error: 'Missing productCode' }, { status: 400 });
    }

    const productDir = path.join(process.cwd(), 'public', 'ProductImages', productCode);
    const validExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.gif'];

    try {
        const files = fs.readdirSync(productDir);
        const images = files
            .filter((file) => validExtensions.includes(path.extname(file).toLowerCase()))
            .sort()
            .map((file) => `/ProductImages/${productCode}/${file}`);

        return NextResponse.json({ images });
    } catch (error) {
        console.error(`Error reading product images for ${productCode}:`, error);
        return NextResponse.json({ images: [DEFAULT_IMG] });
    }
}
