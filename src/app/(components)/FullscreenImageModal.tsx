"use client";
import Image from "next/image";
import { useState } from "react";
import type { fullscreenModal } from "../../types/ProductCardGrid.type";
import Spinner from "../(components)/Spinner";

export default function FullscreenImageModal({ images, index, onClose, onPrev, onNext }: fullscreenModal) {
    const [loading, setLoading] = useState(true);
    return (
        <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-10"
            onClick={onClose}
        >
            <button onClick={onClose} className="absolute top-5 right-5">
                <Image src="/icons/cross.png" width={25} height={25} alt="Close" />
            </button>
            {loading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 py-10 ">
                    <Spinner />
                    <p className="text-white text-lg font-extralight animate-bounce">Loading</p>
                </div>
            )}
            <Image
                src={images[index]}
                width={1000}
                height={1000}
                alt="Fullscreen"
                className={`max-h-full max-w-full object-contain rounded-lg shadow-xl transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"
                    }`}
                onClick={(e) => e.stopPropagation()}
                onLoadingComplete={()=> setLoading(false)}
            />
            {images.length > 1 && (
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute bottom-5 flex flex-col items-center justify-center gap-2"
                >
                    <p className="text-xs text-white/30 mb-1">Please wait a moment after clicking the buttons</p>
                    <div className="flex gap-2 shadow-md">
                        <button
                            onClick={onPrev}
                            className="bg-white text-black hover:bg-white/90 px-6 py-3 transition w-[130px] rounded-md"
                        >
                            Previous
                        </button>
                        <button
                            onClick={onNext}
                            className="bg-white text-black hover:bg-white/90 px-6 py-3 transition w-[130px] rounded-md"
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
