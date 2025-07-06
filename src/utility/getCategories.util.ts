import { CategoryList } from "./ProductData.util";

export default function getSortedCategories(): string[] {
    const flatCategories = CategoryList.flat();
    const uniqueCategories = [...new Set(flatCategories)];
    return uniqueCategories.sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
    );
}
