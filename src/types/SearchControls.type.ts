export type SearchControlsProps = {
    query: string;
    onQueryChange: (v: string) => void;
    sortType: string;
    onSortTypeChange: (v: string) => void;
    onlyDiscounted: boolean;
    onToggleDiscounted: () => void;
};

export type SearchControls2Props = Omit<SearchControlsProps, "query" | "onQueryChange">;