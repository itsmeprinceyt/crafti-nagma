import type { SortMenuProps } from "../../../types/SortMenu.type";

export default function SortMenu({ value, onChange, className }: SortMenuProps) {
    return (
        <select
            value={value}
            onChange={e => onChange(e.target.value)}
            className={className}
        >
            <option value="Latest">Latest</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="Low-High">Low to High</option>
            <option value="High-Low">High to Low</option>
        </select>
    );
}
