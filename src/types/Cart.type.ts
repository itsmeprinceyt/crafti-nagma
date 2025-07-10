export interface CartItem {
    code: string;
    name: string;
    price: number;
    discount: number;
    quantity: number;
    photo?: string;
}

export interface CartContextProps {
    cart: CartItem[];
    cartCount: number;
    addToCart: (item: CartItem) => void;
    updateQuantity: (code: string, amount: number) => void;
    removeItem: (code: string) => void;
    clearCart: () => void;
}