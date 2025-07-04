export default function ButtonGold({ text }: { text: string }) {
    return (
        <button className=" bg-gradient-to-r from-amber-300 to-amber-400 shadow-lg shadow-amber-400/50 border border-amber-700/10  hover:scale-105 transition-all ease-in-out duration-300 text-amber-900 p-2 px-4 rounded-lg text-[13px]">{text}</button>
    )
}