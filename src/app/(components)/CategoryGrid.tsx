
import Link from 'next/link';

export default function CategoriesGrid({ categories }: { categories: string[]; }) {
    return (
        <div className="bg-gradient-to-r from-white via-amber-600/20 to-white border border-amber-600/10 w-full mt-10 mb-10 flex flex-col items-center gap-5 p-5">
            <p className="text-3xl sm:text-4xl font-light text-amber-900 underline-hover cursor-default">
                Categories
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-h-[60vh] overflow-y-auto bg-amber-600/20 border border-amber-600/10 rounded-lg p-4">
                {categories.map((category, index) => (
                    <Link
                        key={index}
                        href={`/shop/category/${encodeURIComponent(category)}`}
                        className="bg-white shadow p-3 w-full h-full rounded hover:scale-105 transition-all ease-in-out duration-300 flex items-center justify-start min-h-[50px] text-sm text-amber-900 font-medium"
                    >
                        🌻 <span className="ml-1 truncate">{category}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
