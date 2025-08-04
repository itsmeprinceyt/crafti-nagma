import { MAIN_THEME_BUTTON_CSS } from "./ButtonCSS";

export default function HomeCategoryButton({ text }: { text: string }) {
    return (
        <button className={`${MAIN_THEME_BUTTON_CSS}`}>{text}</button>
    )
}