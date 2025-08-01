"use client";
import Image from 'next/image';
import Link from 'next/link';
import SideBar from './SideBar';
import CartIcon from '../Cart/CartIcon';
import { Sling as Hamburger } from 'hamburger-react';
import { useOpen } from '../../(context)/Hamburger.context';
import SearchIcon from '../Search/SearchIcon';

export default function Navbar() {
    const { isOpen, toggleOpen } = useOpen();
    return (
        <div className="flex items-start justify-start">
            {isOpen && (
                <div className="fixed bg-black/95 min-h-screen min-w-screen z-50">
                    <div className="absolute top-4 right-4 z-50 text-white">
                        <Hamburger
                            toggled={isOpen}
                            toggle={toggleOpen}
                            size={20}
                            easing="ease-in"
                            rounded
                            label="Close menu"
                        />
                    </div>
                    <SideBar />
                </div>
            )}

            <div className="z-10 w-screen relative flex justify-start items-center bg-gradient-to-r from-white via-amber-600/20 to-white">
                <SearchIcon />
                <CartIcon />
                <Hamburger
                    toggled={isOpen}
                    toggle={toggleOpen}
                    size={20}
                    easing="ease-in"
                    rounded
                    label="Show menu"
                />

                <Link href="/" className="ml-2 max-[350px]:hidden">
                    <Image
                        src="/Logo/colored-logo.png"
                        width={56}
                        height={56}
                        alt="Logo"
                        className="w-14"
                        priority
                    />
                </Link>

                <Link href="/"
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extralight">
                    Crafti Nagma
                </Link>
            </div>
        </div>
    );
}
