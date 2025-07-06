export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    photo?: string;
}

export interface CartContextProps {
    cart: CartItem[];
    cartCount: number;
    addToCart: (item: CartItem) => void;
    updateQuantity: (id: string, amount: number) => void;
    removeItem: (id: string) => void;
    clearCart: () => void;
}