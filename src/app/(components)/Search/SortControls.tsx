import { SearchControls2Props } from "../../../types/SearchControls.type";
import SortMenu from "./SortMenu";

export default function SearchControls2({
    sortType,
    onSortTypeChange,
    onlyDiscounted,
    onToggleDiscounted,
}: SearchControls2Props) {
    return (
        <div className="flex flex-wrap items-center justify-center gap-3 py-4 mb-6 px-4 sm:px-0 w-full">
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
    );
}
