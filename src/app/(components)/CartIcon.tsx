import Image from "next/image";
import Link from "next/link";
import { useCart } from "../(context)/Cart.context";

export default function CartIcon() {
    const { cartCount } = useCart();

    return (
        <Link href="/cart">
        <div className="absolute top-5 right-5">
            <div className="relative">
                <Image
                src={'/icons/bag.png'}
                width={20}
                height={20}
                alt="bag"
                />
                {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white w-[18px] h-[18px] rounded-full flex justify-center items-center">
                        {cartCount}
                    </span>
                )}
            </div>
        </div>
        </Link>
    );
}
