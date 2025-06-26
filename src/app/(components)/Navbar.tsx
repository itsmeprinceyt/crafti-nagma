"use client";
import { useState, useEffect } from 'react';
import { CategoryList } from '../../utility/ProductData.util';

export default function Navbar() {
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        setCategories([...new Set(CategoryList.flat())]);
    }, [CategoryList]);

    return (
        <div className="min-w-screen bg-yellow-300 p-4">
            <p>Hello this is Navbar</p>
            <ul>
                {categories.map((categories, idx) => (
                    <li key={idx}>{categories}</li>
                ))}
            </ul>
        </div>
    );
}