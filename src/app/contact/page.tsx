"use client";
import Link from "next/link";
import { PageWrapper } from "../(components)/PageWrapper";

export default function ContactMe() {
    return (
        <PageWrapper>
            <div className="flex flex-col items-center justify-center text-center gap-6 min-h-[60vh] px-4">
                <h1 className="text-3xl sm:text-4xl font-light text-amber-900 animate-pulse">
                    Get in Touch 🤝
                </h1>
                <p className="text-gray-700 text-sm sm:text-base max-w-xl">
                    Have questions, a custom order in mind, or just want to say hello?
                    We’re just a message away on WhatsApp.
                </p>

                <Link
                    href={`${process.env.NEXT_PUBLIC_WAB_LINK}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[230px] inline-block bg-gradient-to-r from-lime-300 to-lime-400 hover:scale-105 text-lime-900 border border-lime-800/30 text-sm sm:text-base px-6 py-3 rounded-md transition-all duration-300 shadow-lg/20 shadow-black"
                >
                    Contact on WhatsApp
                </Link>
                <Link
                    href={`${process.env.NEXT_PUBLIC_INSTA_LINK}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[230px] inline-block bg-gradient-to-r from-purple-400 via-rose-400 to-amber-400 hover:scale-105 text-white border border-purple-800/30 text-sm sm:text-base px-6 py-3 rounded-md transition-all duration-300 shadow-lg/20 shadow-black"
                >
                    Follow me on Instagram
                </Link>
                <Link href="https://portfolio-itsmeprince.vercel.app/" target="_blank" className="text-xs hover:animate-pulse">
                    Website Created by 🤎 @itsmeprinceyt
                </Link>
            </div>

        </PageWrapper>
    );
}
