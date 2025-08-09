"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CANCEL_BUTTON_CSS, POPUP_BUTTON_CSS } from "../Buttons/ButtonCSS";

export default function Popup() {
    const [visible, setVisible] = useState<boolean>(false);
    const [doNotShowAgain, setDoNotShowAgain] = useState<boolean>(false);
    const LOCAL_STORAGE_KEY: string = "hidePopup";
    useEffect(() => {
        const shouldHide = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (!shouldHide) {
            setVisible(true);
        }
    }, []);

    const handleClose = () => {
        if (doNotShowAgain) {
            localStorage.setItem(LOCAL_STORAGE_KEY, "true");
        }
        setVisible(false);
    };

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
                <button
                    onClick={handleClose}
                    className={CANCEL_BUTTON_CSS}
                    aria-label="Close Popup"
                >
                    Close
                </button>
                <Link href="/shop">
                    <button
                        onClick={handleClose}
                        className={POPUP_BUTTON_CSS}
                        aria-label="Shop Now"
                    >
                        Shop
                    </button>
                </Link>
            </div>

            <label className="mt-5 text-xs text-white flex items-center gap-2 cursor-pointer">
                <input
                    type="checkbox"
                    checked={doNotShowAgain}
                    onChange={(e) => setDoNotShowAgain(e.target.checked)}
                    className="w-4 h-4 accent-amber-500"
                />
                Do not show again
            </label>
        </div>
    );
}
