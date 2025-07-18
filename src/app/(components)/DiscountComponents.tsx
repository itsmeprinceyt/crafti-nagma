export function DiscountTagItem({ discount }: { discount: number }) {
    return (
        <p className="absolute -top-5 -right-5 z-2 text-base text-red-100 bg-red-500 h-[60px] w-[60px] rounded-full shadow-md rotate-10 flex items-center text-center justify-center font-bold select-none">
            {discount}%<br />OFF</p>
    )
}

export function DiscountTagProduct({ discountPercent }: { discountPercent: number }) {
    return (
        <p className="absolute -top-5 -left-5 z-2 text-base text-red-100 bg-red-500 h-[60px] w-[60px] rounded-full shadow-md -rotate-10 flex items-center text-center justify-center font-bold select-none">
            {discountPercent}<br />% OFF
        </p>
    )
}

export function DiscountAmountItem({ discount_price, price }: { discount_price: number, price: number }) {
    return (
        <p className="flex-1 text-center bg-gradient-to-r from-lime-400 to-lime-500 border border-lime-600/50 text-lime-900 shadow-lg shadow-lime-600/30 py-2 px-5 rounded-sm relative select-none">
            {discount_price ? (
                <>
                    <span className="line-through text-red-600 mr-1 font-bold">₹{price}</span>
                    <span className="font-semibold">₹{discount_price}</span>
                </>
            ) : (
                <>₹{price}</>
            )}
        </p>
    )
}

export function DiscountAmountProduct({ discount_price, price }: { discount_price: number, price: number }) {
    return (
        <p className="flex-1 text-center bg-gradient-to-r from-lime-400 to-lime-500 border border-lime-600/50 text-lime-900 shadow-lg shadow-lime-600/30 py-2 px-5 rounded-sm relative">{discount_price ? (
            <>
                <span className="absolute -top-3 -left-2 -rotate-15 line-through text-red-100 bg-red-500 border border-red-600/50 p-1 rounded-full font-bold text-[12px]">₹{price}</span>
                <span className="font-semibold">₹{discount_price}</span>
            </>
        ) : (
            <>₹{price}</>
        )}</p>
    )
}