import { MAIN_THEME_BUTTON_CSS } from "./ButtonCSS";

export default function HomeCategoryButton({ text }: { text: string }) {
    const size: number = 20;
    return (
        <button className={`${MAIN_THEME_BUTTON_CSS}`}>{text}</button>
    )
}