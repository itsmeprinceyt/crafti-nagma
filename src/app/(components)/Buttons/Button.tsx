export const GOLDEN_BUTTON_CSS: string = "bg-gradient-to-r from-amber-300 to-amber-400 shadow-lg shadow-amber-400/50 border border-amber-700/10  hover:scale-105 transition-all ease-in-out duration-300 text-amber-900 p-2 px-4 rounded-lg text-[13px]";

export const GREY_BUTTON_CSS: string = "bg-gradient-to-r from-stone-600 to-stone-800 shadow-lg shadow-stone-400/50 border border-stone-700/10  hover:scale-105 transition-all ease-in-out duration-300 text-stone-100 p-2 px-4 rounded-lg text-[13px]";

export default function ButtonGold({ text }: { text: string }) {
    return (
        <button className={`${GOLDEN_BUTTON_CSS}`}>{text}</button>
    )
}