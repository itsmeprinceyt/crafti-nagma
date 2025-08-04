import { SHOP_NOW_BUTTON_CSS } from "./ButtonCSS";
import { PackageOpen } from "lucide-react";

export default function ShopNow({ text }: { text: string }) {
    const size: number = 20;

    return (
        <button className={`${SHOP_NOW_BUTTON_CSS} flex gap-2 items-center justify-center group`}>
            <span className="group-hover:animate-bounce">
                <PackageOpen width={size} height={size} />
            </span>
            {text}
        </button>
    );
}
