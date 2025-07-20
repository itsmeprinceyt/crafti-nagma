import { SearchControlsProps } from "../../types/SearchControls.type";
import SortMenu from "./SortMenu";

export default function SearchControls({
    query,
    onQueryChange,
    sortType,
    onSortTypeChange,
    onlyDiscounted,
    onToggleDiscounted,
}: SearchControlsProps) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center justify-center  gap-4 mb-6 px-4 sm:px-0 w-full">
            <input
                type="text"
                placeholder="Search by name or code..."
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                className="w-full sm:w-[300px] border border-gray-300 focus:border-amber-500 focus:ring-amber-500 rounded-md shadow-sm p-2 text-sm transition-all duration-200 outline-none"
            />
            <div className="flex flex-wrap items-center justify-center gap-3">
                <SortMenu
                    value={sortType}
                    onChange={onSortTypeChange}
                    className="border border-gray-300 rounded-md shadow-sm p-2 text-sm focus:border-amber-500 focus:ring-amber-500 transition-all duration-200 outline-none"
                />
                <button
                    onClick={onToggleDiscounted}
                    className={`text-sm font-semibold px-5 py-2 rounded-md border transition-all duration-300 shadow-md ${onlyDiscounted
                        ? "bg-gradient-to-r from-lime-400 to-lime-500 text-lime-900 border-lime-500 shadow-lime-500/40 hover:brightness-105"
                        : "bg-stone-600 text-white border-stone-400 shadow-stone-700/40 hover:bg-stone-700"
                        }`}
                >
                    {onlyDiscounted ? "Discount: ON" : "Discount: OFF"}
                </button>
            </div>
        </div>
    );
}
