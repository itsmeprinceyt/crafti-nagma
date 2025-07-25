"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GOLDEN_BUTTON_CSS, GREY_BUTTON_CSS } from "../Buttons/Button";

export default function Popup() {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div
            className="fixed inset-0 bg-black/95 flex flex-col justify-center items-center z-15 p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
        >
            <Image
                src="/offers/offer-1.png"
                width={400}
                height={400}
                alt="Special Offer"
                className="rounded-md shadow-lg"
                priority
            />

            <div className="mt-6 flex gap-4">
                <Link href="/shop">
                    <button
                        onClick={() => setVisible(false)}
                        className={`${GOLDEN_BUTTON_CSS}`}
                        aria-label="Shop Now"
                    >
                        Shop
                    </button>
                </Link>
                <button
                    onClick={() => setVisible(false)}
                    className={`${GREY_BUTTON_CSS}`}
                    aria-label="Close Popup"
                >
                    Close
                </button>
            </div>
        </div>
    );
}
