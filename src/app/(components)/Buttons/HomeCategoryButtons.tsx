import { MAIN_THEME_BUTTON_CSS } from "./ButtonCSS";
import { FolderOpen } from "lucide-react";

export default function HomeCategoryButton({ text }: { text: string }) {
    const size: number = 20;
    return (
        <button className={`${MAIN_THEME_BUTTON_CSS} flex gap-2 items-center justify-center group`}>
            <span className="group-hover:animate-bounce">
                <FolderOpen  width={size} height={size} />
            </span>
            {text}</button>
    )
}