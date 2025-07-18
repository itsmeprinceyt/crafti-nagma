import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { DEFAULT_IMG } from '../../../utility/utils';

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
