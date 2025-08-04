import Link from 'next/link';
import Image from 'next/image';
import { CategoryWithImage } from '../../../types/CategoryWithImages.type';

export default function CategoriesGrid({ categories }: { categories: CategoryWithImage[] }) {
    return (
        <div className="bg-gradient-to-r from-white via-amber-600/20 to-white border-t border-b border-amber-600/10 w-full flex flex-col items-center gap-6 p-6">
            <p className="text-3xl sm:text-4xl font-light text-amber-900 underline-hover cursor-default">
                Categories
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
                {categories.map(({ category, image }, index) => (
                    <Link
                        key={index}
                        href={`/shop/category/${encodeURIComponent(category)}`}
                        className="w-[160px] sm:w-[180px] max-sm:w-[140px] flex flex-col items-center rounded-md shadow-md shadow-amber-600/10 bg-white hover:shadow-lg transition-all duration-200 group"
                    >
                        {/* Image Section */}
                        <div className="w-full aspect-square bg-white overflow-hidden flex items-center justify-center rounded-t-md">
                            <Image
                                src={image}
                                alt={category}
                                width={300}
                                height={300}
                                className="w-full h-full object-cover object-center"
                            />
                        </div>

                        {/* Text Section */}
                        <div className="w-full h-[60px] text-[13px] text-center text-amber-900 leading-tight break-words transition-all duration-200 underline-hover relative rounded-b-md overflow-hidden">
                            <span className="text-[14px] absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">{category}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
