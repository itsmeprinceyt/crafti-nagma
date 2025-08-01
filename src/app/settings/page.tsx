"use client";
import { useEffect, useState } from "react";
import { PageWrapperMain } from "../(components)/Utils/PageWrapper";

export default function Settings() {
    const [showPopup, setShowPopup] = useState(true);

    useEffect(() => {
        const hidden = localStorage.getItem("hidePopup");
        setShowPopup(!hidden);
    }, []);

    const handleToggle = () => {
        const newValue = !showPopup;
        setShowPopup(newValue);
        if (!newValue) {
            localStorage.setItem("hidePopup", "true");
        } else {
            localStorage.removeItem("hidePopup");
        }
    };

    return (
        <PageWrapperMain>
            <div className="min-h-[50vh] flex items-center justify-center px-4">
                <div className="w-full sm:w-[400px] border border-amber-400 bg-white/80 p-6 rounded-xl shadow-md shadow-amber-300/30 space-y-4 text-amber-900">
                    <h1 className="text-2xl font-light text-center underline-hover mb-4">Settings</h1>

                    <label className="flex items-center gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={showPopup}
                            onChange={handleToggle}
                            className="w-5 h-5 accent-amber-600"
                        />
                        <span className="text-base font-light">Show Offer Popup</span>
                    </label>
                </div>
            </div>
        </PageWrapperMain>
    );
}
