"use client";
import Image from "next/image";
import { useCart } from "../(context)/Cart.context";
import { PageWrapper2 } from "../(components)/PageWrapper";

export default function CartPage() {
    const { cart, updateQuantity, removeItem } = useCart();
    const total = cart.reduce((sum, item) => {
        const effectivePrice = item.discount > 0 ? item.discount : item.price;
        return sum + effectivePrice * item.quantity;
    }, 0);
    const deliveryCharge = total >= 599 ? 0 : 90;
    const finalAmount = total + deliveryCharge;

    const handleCheckout = () => {
        const baseWABUrl = process.env.NEXT_PUBLIC_WAB_CHECKOUT_LINK;

        const message = cart
            .map((item, i) => {
                const hasDiscount = item.discount > 0;
                const originalPrice = `₹${item.price}`;
                const discountedPrice = `₹${item.discount}`;
                return `Item ${i + 1}:\nCode: ${item.code}\nName: ${item.name}\nPrice: ${hasDiscount
                    ? `~${originalPrice}~ → ${discountedPrice}`
                    : originalPrice
                    }\nQuantity: ${item.quantity}\n`;
            })
            .join("\n");

        const total = cart.reduce((sum, item) => {
            const priceToUse = item.discount > 0 ? item.discount : item.price;
            return sum + priceToUse * item.quantity;
        }, 0);

        const deliveryCharge = total >= 599 ? 0 : 90;
        const finalAmount = total + deliveryCharge;

        const finalMessage = `I want to order these items from Crafti Nagma Store\n\n${message}\nSubtotal: ₹${total}\nDelivery: ${deliveryCharge === 0 ? "Free" : `₹${deliveryCharge}`}\nTotal Amount: ₹${finalAmount}${deliveryCharge === 0 ? `\n\nI'm eligible for free delivery.` : ``}`;

        const fullURL = `${baseWABUrl}&text=${encodeURIComponent(finalMessage)}`;
        window.open(fullURL, "_blank");
    };


    return (
        <>
            <PageWrapper2>
                <div className="bg-gradient-to-r from-white via-amber-600/20 to-white border border-amber-600/10 text-3xl sm:text-4xl font-light text-amber-900 w-full mt-5 mb-5 p-5 text-center">
                    Your Cart
                </div>
            </PageWrapper2>
            <PageWrapper2>
                <div className="mb-10 mt-5">

                    {cart.length === 0 ? (
                        <p className="italic text-gray-500">Your cart is empty.</p>
                    ) : (
                        <div className="space-y-5">
                            {cart.map((item) => (
                                <div key={item.code} className="flex items-center justify-between gap-5 border border-amber-600/30 shadow-xl shadow-amber-600/10 p-3 rounded-md">
                                    <div className="flex gap-5 items-center">
                                        <Image
                                            src={`${item.photo}`}
                                            width={500}
                                            height={500}
                                            alt={`${item.name} photo`}
                                            className="rounded-full max-w-[50px] max-h-[50px] object-cover"
                                        />

                                        <div>
                                            <p className="text-xs text-gray-400 mb-1">#{item.code}</p>
                                            <p className="font-medium text-gray-800">{item.name}</p>
                                            <p className="text-sm text-gray-600">
                                                • Price:{" "}
                                                {item.discount > 0 ? (
                                                    <>
                                                        <span className="line-through text-red-500 font-bold">₹{item.price}</span>{" "}
                                                        <strong className="text-green-600">₹{item.discount}</strong>
                                                    </>
                                                ) : (
                                                    <strong className="text-green-600">₹{item.price}</strong>
                                                )}
                                                <br />
                                                • Quantity: <strong>{item.quantity}</strong>
                                                <br />
                                                • Total:{" "}
                                                <strong className="text-green-700">
                                                    ₹{item.discount > 0 ? item.discount * item.quantity : item.price * item.quantity}
                                                </strong>
                                            </p>

                                        </div>
                                    </div>


                                    <div className="flex flex-col items-center gap-5 ">
                                        <div className="flex gap-2 items-center justify-center">
                                            <button
                                                onClick={() => updateQuantity(item.code, -1)}
                                                className="bg-amber-200 border border-amber-600/40 shadow-lg shadow-amber-600/40 px-2 rounded-full h-[30px] w-[30px]"
                                            >
                                                −
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.code, 1)}
                                                className="bg-amber-200 border border-amber-600/40 shadow-lg shadow-amber-600/40 px-2 rounded-full h-[30px] w-[30px]"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => removeItem(item.code)}
                                            className="bg-rose-500 border border-rose-600/40 shadow-lg shadow-rose-600/40 text-rose-200 px-3 py-1 rounded"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}

                            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-300 shadow-xl shadow-amber-600/10 rounded text-sm text-yellow-800">
                                <p className="mb-1 font-semibold">⚠️ Important Information</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Delivery charges, variants, materials, and custom requests may affect the final price. Please confirm the final amount before making payment.</li>
                                    <li>Advance payment is required to proceed with your order.</li>
                                    <li>Kindly share your delivery address to complete the order process.</li>
                                    <li>We respect your privacy — your personal information will never be shared or leaked.</li>
                                    <li><strong>No refunds</strong> can be issued if the error or change is from your side after order confirmation.</li>
                                </ul>
                            </div>

                            <div className="text-center font-bold text-base text-green-700 flex flex-col items-center justify-center">
                                <div>Subtotal: ₹{total}</div>

                                <div>
                                    Delivery Charges:{" "}
                                    {deliveryCharge === 0 ? (
                                        <span className="text-green-700">Free</span>
                                    ) : (
                                        <span className="text-red-500">₹{deliveryCharge}</span>
                                    )}
                                </div>

                                <div className="text-2xl">Total: ₹{finalAmount}</div>

                                <p
                                    className={`text-base mt-1 font-normal px-2 py-0.5 rounded shadow-md ${deliveryCharge === 0
                                        ? "text-green-100 bg-green-600"
                                        : "text-red-100 bg-red-500 border-red-500"
                                        }`}
                                >
                                    {deliveryCharge === 0
                                        ? "🎉 Free delivery unlocked 🥳"
                                        : "👉Free delivery for orders above ₹599😊"}
                                </p>
                            </div>


                            <button
                                onClick={handleCheckout}
                                className="w-full bg-green-600 hover:bg-green-700 shadow-xl shadow-green-700/40 text-white font-medium py-2 px-4 rounded transition"
                            >
                                Checkout
                            </button>

                        </div>
                    )}
                </div>
            </PageWrapper2>
        </>
    );
}
