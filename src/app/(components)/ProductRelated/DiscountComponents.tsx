export function DiscountAmountItem({ discount_price, price }: { discount_price: number, price: number }) {
    return (
        <div className="flex flex-col items-start gap-2 relative">
            {discount_price && discount_price > 0 ? (
                <>
                    <div className="text-green-600 relative flex items-center justify-center">
                        <span className="font-bold text-2xl">Price: ₹{discount_price}</span>
                        <span className="pl-2 line-through text-xs text-black/50">₹{price}</span>
                    </div>
                </>
            ) : (
                <div className="text-green-600 relative flex items-center justify-center">
                    <span className="font-bold text-2xl">Price: ₹{price}</span>
                </div>
            )}
        </div>
    )
}

export function DiscountAmountTag({ discount }: { discount: number }) {
    return (
        <>
            {discount && discount > 0 ? (
                <div className="flex items-center justify-center bg-rose-500 text-rose-100 rounded-md text-center font-bold px-3 animate-float hover:scale-105 transition-all ease-in-out duration-500 ">{discount}%OFF</div>
            ) : (
                <>

                </>
            )}
        </>
    )
}

export function DiscountAmountProductCard({ price, discount_price, discountPercent }: { price: number, discount_price: number, discountPercent: number }) {
    return (
        <>
            <span className="font-bold text-base sm:text-base max-sm:text-sm">₹{discount_price}</span>
            <span className="line-through text-xs text-gray-500 max-sm:text-[10px]">₹{price}</span>
            <span className="bg-rose-600 text-white px-2 py-[2px] rounded-lg text-[10px] hover:scale-125 transition-all ease-in-out duration-500 select-none">{discountPercent}% OFF</span>
        </>
    )
}