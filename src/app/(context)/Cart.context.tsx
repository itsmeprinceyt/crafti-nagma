"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { CartContextProps, CartItem } from "../../types/Cart.type";

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within CartProvider");
    return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem("crafti_cart");
        if (stored) setCart(JSON.parse(stored));
    }, []);

    useEffect(() => {
        localStorage.setItem("crafti_cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item: CartItem) => {
        setCart((prev) => {
            const exists = prev.find((p) => p.id === item.id);
            if (exists) {
                return prev.map((p) =>
                    p.id === item.id ? { ...p, quantity: p.quantity + item.quantity } : p
                );
            }
            return [...prev, item];
        });
    };

    const updateQuantity = (id: string, amount: number) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + amount) }
                    : item
            )
        );
    };

    const removeItem = (id: string) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const clearCart = () => setCart([]);

    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{ cart, cartCount, addToCart, updateQuantity, removeItem, clearCart }}
        >
            {children}
        </CartContext.Provider>

    );
};
