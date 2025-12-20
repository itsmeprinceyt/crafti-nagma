export const getDiscountPercent = (price: number, discountPrice: number) => {
    if (discountPrice <= 0 || discountPrice >= price) return 0;
    return Math.round(((price - discountPrice) / price) * 100);
};