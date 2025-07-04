"use client";
import { useState, useEffect, useRef } from 'react';
import { useOpen } from "../(context)/Hamburger.context";
import { CategoryList } from '../../utility/ProductData.util';

export default function SideBar() {
    const { isOpen, toggleOpen } = useOpen();
    const sidebarRef = useRef<HTMLDivElement>(null);
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        setCategories([...new Set(CategoryList.flat())]);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) { toggleOpen(); }
        };
        if (isOpen) document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen, toggleOpen]);

    return (
        <div ref={sidebarRef} className="fixed top-0 left-0 h-screen w-[250px] z-50 bg-pink-400 shadow-lg"
        >
            <ol className="flex flex-col gap-5">
                <button onClick={toggleOpen}>
                    <li>Home</li>
                </button>
                <li>Contact</li>
                <li>Categories

                    <ul className="bg-pink-400">
                        {categories.map((categories, idx) => (
                            <li key={idx}>{categories}</li>
                        ))}
                    </ul>

                </li>
            </ol>
        </div>
    )
}