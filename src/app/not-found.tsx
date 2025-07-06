"use client";
import Link from "next/link";
import ButtonGold from "./(components)/Button";

export default function NotFound() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-white text-gray-800">
            <h1 className="text-4xl font-bold mb-2">404</h1>
            <p className="text-lg text-center max-w-md mb-6">
                Oops! The page you are looking might not be available.
            </p>

            <Link href="/">
                <ButtonGold text="Go Back Home"/>
            </Link>
        </div>
    );
}
