import Image from "next/image";
import Link from "next/link";

export default function SearchIcon() {
    return (
        <Link href="/search">
        <div className="absolute top-5 right-15">
            <div className="relative">
                <Image
                src={'/icons/search.png'}
                width={23}
                height={23}
                alt="bag"
                />
            </div>
        </div>
        </Link>
    );
}
