import Image from "next/image";
import Link from "next/link";
import ButtonGold from "../Buttons/Button";
import { InfoCardProps } from "../../../types/InfoCard.type";

export default function InfoCard({
    title,
    description,
    buttonText,
    href,
    image,
}: InfoCardProps) {
    return (
        <div className="bg-amber-600/20 border border-amber-600/10 shadow-amber-600/20 shadow-xl p-5 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-5 sm:items-start">
            {/* Text */}
            <div className="flex flex-col gap-3 text-center sm:text-left w-full sm:w-auto">
                <span className="underline-hover text-inherit cursor-default font-extralight text-wrap text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    {title}
                </span>
                <div className="w-full max-w-[400px] font-extralight text-base sm:text-lg">
                    {description}
                </div>
                <Link href={href}>
                    <ButtonGold text={buttonText} />
                </Link>
            </div>

            {/* Image */}
            <div className="w-[150px] h-[150px] relative rounded-full overflow-hidden border border-amber-600/10 shadow-xl shadow-amber-400/30 transition duration-300 ease-in-out hover:scale-105">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover object-top"
                    loading="lazy"
                />
            </div>
        </div>
    );
}
