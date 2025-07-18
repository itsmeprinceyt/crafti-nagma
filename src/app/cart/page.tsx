"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "../(context)/Cart.context";
import { PageWrapper2 } from "../(components)/PageWrapper";
import AddressForm from "../(components)/AddressForm";
import { AddressData } from "../../types/AddressData.type";

export default function CartPage() {
    const { cart, updateQuantity, removeItem, cartCount } = useCart();
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [customerDetails, setCustomerDetails] = useState<AddressData | null>(null);

    useEffect(() => {
        const saved = localStorage.getItem("customer-address");
        if (saved) {
            setCustomerDetails(JSON.parse(saved));
        }
    }, []);

    const totalOriginal = cart.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);

    const totalDiscounted = cart.reduce((sum, item) => {
        const effectivePrice = item.discount > 0 ? item.discount : item.price;
        return sum + effectivePrice * item.quantity;
    }, 0);

    const hasDiscount = cart.some(item => item.discount > 0);
    const deliveryCharge = totalDiscounted >= 599 ? 0 : 90;
    const finalAmount = totalDiscounted + deliveryCharge;

    const sendWhatsAppCheckout = (address: AddressData) => {
        const baseWABUrl = process.env.NEXT_PUBLIC_WAB_CHECKOUT_LINK;

        const message = cart.map((item, i) => {
            const hasDiscount = item.discount > 0;
            const originalPrice = `₹${item.price}`;
            const discountedPrice = `₹${item.discount}`;
            return `🛍️ *Item ${i + 1}*:\nCode: ${item.code}\nName: ${item.name}\nPrice: ${hasDiscount ? `~${originalPrice}~ → *${discountedPrice}*` : originalPrice}\nQuantity: ${item.quantity}\n`;
        }).join("\n");

        const addressMsg = `📍 *Customer Info:*\nFirst Name: ${address.firstName}\nLast Name: ${address.lastName}\n${address.email ? `Email ID: ${address.email}\n` : ""}${address.phone ? `Phone Number: ${address.phone}\n` : ""}${address.altPhone ? `Alternate Phone Number: ${address.altPhone}\n` : ""}House No, Building Name, etc: ${address.house}\n${address.street ? `Locality/Street Name: ${address.street}\n` : ""}${address.landmark ? `Landmark: ${address.landmark}\n` : ""}Pincode: ${address.pincode}\nCity: ${address.city}\nState: ${address.state}`;

        const finalMessage = `✨ *I want to order these items from Crafti Nagma Store* ✨\n\n${message}\n🧾 *Subtotal:* ₹${totalDiscounted}\n🚚 *Delivery:* ${deliveryCharge === 0 ? "Free 🎉" : `₹${deliveryCharge}`}\n💳 *Total Amount:* ₹${finalAmount}\n\n${addressMsg}`;

        const fullURL = `${baseWABUrl}&text=${encodeURIComponent(finalMessage)}`;
        window.open(fullURL, "_blank");
    };


    const handleCheckout = () => {
        setShowAddressForm(true);
    };

    const confirmAddress = (data: AddressData) => {
        setCustomerDetails(data);
        sendWhatsAppCheckout(data);
    };

    const cancelAddress = () => {
        setShowAddressForm(false);
    };

    return (
        <>
            <PageWrapper2>
                <div className="bg-gradient-to-r from-white via-amber-600/20 to-white border border-amber-600/10 text-3xl sm:text-4xl font-light text-amber-900 w-full mt-5 mb-5 p-5 text-center">
                    Your Cart
                </div>
            </PageWrapper2>
            <PageWrapper2>
                <div className="mb-10 mt-5 m-2">

                    {cart.length === 0 ? (
                        <p className="italic text-gray-500">Your cart is empty.</p>
                    ) : (
                        <div className="space-y-5">
                            {cart.map((item) => (
                                <div key={item.code} className="flex items-center justify-between gap-5 border border-amber-600/30 shadow-xl shadow-amber-600/10 p-3 rounded-md">
                                    <div className="flex gap-5 items-center">
                                        <Link href={`/shop/item/${item.code}`}>
                                            <Image
                                                src={`${item.photo}`}
                                                width={500}
                                                height={500}
                                                alt={`${item.name} photo`}
                                                className="rounded-full max-w-[50px] max-h-[50px] object-cover"
                                            />
                                        </Link>

                                        <div>
                                            <p className="text-xs text-gray-400 mb-1">#{item.code}</p>
                                            <p className="font-medium text-gray-800">{item.name}</p>
                                            <p className="text-sm text-gray-600">
                                                • Price:{" "}
                                                {item.discount > 0 ? (
                                                    <>
                                                        <strong className="line-through text-red-500">₹{item.price}</strong>{" "}
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
                                                className="bg-amber-200 border border-amber-600/30 shadow-lg shadow-amber-600/40 px-2 rounded-full h-[30px] w-[30px]"
                                            >
                                                −
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.code, 1)}
                                                className="bg-amber-200 border border-amber-600/30 shadow-lg shadow-amber-600/40 px-2 rounded-full h-[30px] w-[30px]"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => removeItem(item.code)}
                                            className="bg-rose-500 border border-rose-600/30 shadow-lg shadow-rose-600/40 text-rose-100 px-3 py-1 rounded"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}

                            <div className="mt-6 p-4 bg-amber-50 border border-amber-600/30 shadow-xl shadow-amber-600/10 rounded text-sm text-amber-800">
                                <p className="mb-1 font-semibold">⚠️ Important Information</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Delivery charges, variants, materials, and custom requests may affect the final price. Please confirm the final amount before making payment.</li>
                                    <li>Advance payment is required to proceed with your order.</li>
                                    <li>Kindly share your delivery address to complete the order process.</li>
                                    <li>We respect your privacy — your personal information will never be shared or leaked.</li>
                                    <li><strong>No refunds</strong> can be issued if the error or change is from your side after order confirmation.</li>
                                    <li><strong>We will never share your address or any sensitive information with anyone.</strong></li>
                                </ul>
                            </div>


                            <div className="w-full mx-auto bg-white p-6 rounded-md shadow-md text-gray-800">
                                <h2 className="text-xl font-bold text-center text-green-700 mb-4">Invoice Summary</h2>

                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="font-medium">Total Items</span>
                                        <strong>{cartCount}</strong>
                                    </div>
                                    {hasDiscount ? (
                                        <div className="flex justify-between">
                                            <span className="font-medium">Total Amount</span>
                                            <strong className="line-through text-red-500">₹{totalOriginal}</strong>
                                        </div>
                                    ) : <div className="flex justify-between">
                                        <span className="font-medium">Total Amount</span>
                                        <strong className="text-green-600">₹{totalOriginal}</strong>
                                    </div>}
                                    {hasDiscount && (
                                        <div className="flex justify-between">
                                            <span className="font-medium">Discounted Amount</span>
                                            <strong className="text-green-600">₹{totalDiscounted}</strong>
                                        </div>
                                    )}

                                    <div className="flex justify-between">
                                        <span className="font-medium">Delivery Charges</span>
                                        <strong className={deliveryCharge === 0 ? "text-green-600" : "text-red-500"}>
                                            {deliveryCharge === 0 ? "Free" : `₹${deliveryCharge}`}
                                        </strong>
                                    </div>

                                    <hr className="my-2 border-t border-dashed" />

                                    <div className="flex justify-between text-lg font-bold">
                                        <span>Final Total</span>
                                        <span>₹{finalAmount}</span>
                                    </div>
                                </div>

                                <p
                                    className={`mt-4 text-center text-sm font-medium px-3 py-2 rounded shadow-md transition-all ${deliveryCharge === 0
                                        ? "text-green-100 bg-green-600"
                                        : "text-red-100 bg-red-500 border-red-500"
                                        }`}
                                >
                                    {deliveryCharge === 0
                                        ? "🎉 Free delivery unlocked 🥳"
                                        : "👉 Free delivery for orders above ₹599 😊"}
                                </p>
                            </div>

                            {!showAddressForm ? (
                                <button
                                    onClick={handleCheckout}
                                    className="w-full bg-green-600 hover:bg-green-700 shadow-xl shadow-green-700/40 text-green-100 font-medium py-2 px-4 rounded transition"
                                >
                                    Checkout
                                </button>
                            ) : (
                                <AddressForm
                                    onConfirm={confirmAddress}
                                    onCancel={cancelAddress}
                                    defaultValues={customerDetails ?? undefined}
                                />
                            )}

                        </div>
                    )}
                </div>
            </PageWrapper2>
        </>
    );
}
