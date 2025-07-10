"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useOpen } from '../(context)/Hamburger.context';
import getSortedCategories from '../../utility/getCategories.util';

export default function SideBar() {
    const { toggleOpen } = useOpen();
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        setCategories(getSortedCategories());
    }, []);

    const baseItemClass =
        "bg-gradient-to-r from-amber-600/30 via-amber-600/20 to-amber-600/10 text-amber-900 transition-all ease-in-out duration-500 border border-amber-500/40 rounded-md text-start p-2 w-full";

    const NavItem = ({
        href,
        label,
        image
    }: {
        href: string;
        label: string;
        image: string;
    }) => (
        <li className={`${baseItemClass}`}>
            <Link
                href={href}
                className="w-full h-full flex items-center justify-start gap-2 "
                onClick={() => toggleOpen()}
                aria-label={label}
            >
                <Image
                    src={image}
                    width={20}
                    height={20}
                    alt={`${label} image`}
                    className="hover:scale-105 transition-all ease-in-out duration-500"
                />
                {label}
            </Link>
        </li>
    );

    return (
        <div className="absolute top-14 right-0 left-0 z-20 bg-white border border-amber-400/50 shadow-xl shadow-amber-400/30 rounded-lg p-1">
            <ol className="flex flex-col justify-center items-start gap-1">
                <NavItem href="/" image="/icons/home.png" label="Home" />

                <NavItem href="/shop" image="/icons/shop.png" label="Shop" />
                <NavItem href="/search" image="/icons/search.png" label="Search" />
                <NavItem href="/cart" image="/icons/cart.png" label="Cart" />

                <li className="w-full">

                    <details className="group">
                        <summary className={`${baseItemClass} flex justify-between items-center cursor-pointer`}>
                            <div className="flex items-center gap-2">
                                <Image
                                    src={"/icons/categories.png"}
                                    width={20}
                                    height={20}
                                    alt={`category image`}
                                    className="hover:scale-105 transition-all ease-in-out duration-500"
                                />
                                <span>Categories</span>
                            </div>
                            <Image
                                src="/icons/arrow.png"
                                width={15}
                                height={15}
                                alt="arrow"
                                className="transform transition-transform duration-300 group-open:rotate-90 rounded-full p-0.5 bg-amber-600/40"
                            />
                        </summary>

                        <ul className="pl-4 py-1 space-y-1 max-h-[500px] overflow-y-auto pr-2">
                            {categories.map((category, idx) => (
                                <li key={category}>
                                    <Link
                                        href={`/shop/category/${category}`}
                                        onClick={() => toggleOpen()}
                                        className="text-sm block w-full underline-hover text-amber-900 cursor-default"
                                    >
                                        {idx + 1} • {category}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </details>
                </li>

                <NavItem href="/contact" image="/icons/contact.png" label="Contact" />
            </ol>
        </div>
    );
}
