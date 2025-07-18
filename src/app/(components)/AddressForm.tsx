"use client";
import { useEffect, useState } from "react";
import { AddressData, AddressFormProps, AddressField } from "../../types/AddressData.type";

export default function AddressForm({ onConfirm, onCancel, defaultValues }: AddressFormProps) {
    const [formData, setFormData] = useState<AddressData>(
        defaultValues ?? {
            firstName: "",
            lastName: "",
            phone: "",
            altPhone: "",
            email: "",
            house: "",
            street: "",
            landmark: "",
            city: "",
            pincode: "",
            state: "",
        }
    );
    const [errors, setErrors] = useState<Partial<Record<keyof AddressData, string>>>({});
    const [saveAddress, setSaveAddress] = useState<boolean>(false);
    const [addressSaved, setAddressSaved] = useState<boolean>(true);

    useEffect(() => {
        const saved = localStorage.getItem("crafti_address");
        if (saved) {
            setFormData(JSON.parse(saved));
            setAddressSaved(false);
        } else {
            setAddressSaved(true);
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const fieldName = name as AddressField;
        setFormData((prev) => ({ ...prev, [fieldName]: value }));
        setErrors((prev) => ({ ...prev, [fieldName]: "" }));
    };

    const handleSubmit = () => {
        if (!validateForm()) return;
        if (saveAddress) {
            localStorage.setItem("crafti_address", JSON.stringify(formData));
        }
        onConfirm(formData);
    };

    const handleReset = () => {
        setFormData({
            firstName: "",
            lastName: "",
            phone: "",
            altPhone: "",
            email: "",
            house: "",
            street: "",
            landmark: "",
            city: "",
            pincode: "",
            state: "",
        });
    };

    const handleClearSaved = () => {
        localStorage.removeItem("crafti_address");
        setAddressSaved(true);
    };

    const validateForm = () => {
        const newErrors: typeof errors = {};
        const requiredFields: (keyof AddressData)[] = [
            "firstName",
            "lastName",
            "phone",
            "house",
            "pincode",
            "city",
            "state",
        ];
        for (const field of requiredFields) {
            if (!formData[field]?.trim()) {
                newErrors[field] = "This field is required";
            }
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const input_CSS: string = "w-full p-2 border border-amber-600/30 rounded focus:outline-none focus:ring-2 focus:ring-amber-600/30 focus:border-amber-600/30 focus:bg-amber-50 active:bg-amber-100 transition duration-200";
    const grid_CSS: string = "grid grid-cols-2 gap-4 ";

    return (
        <div className="bg-white p-5 rounded shadow-lg border border-amber-600/30 max-w-lg mx-auto">
            <h2 className="text-lg font-semibold mb-4">🛒 Enter Your Shipping Details</h2>

            <div className={grid_CSS}>
                <div>
                    <input
                        name="firstName"
                        placeholder="First Name *"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={input_CSS}
                    />
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                </div>
                <div>
                    <input
                        name="lastName"
                        placeholder="Last Name *"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={input_CSS}
                    />
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                </div>
            </div>

            <input
                name="email"
                placeholder="Email (Optional)"
                value={formData.email}
                onChange={handleChange}
                className={`${input_CSS} mt-4`}
            />
            <div>
                <input
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`${input_CSS} mt-4`}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
            <input
                name="altPhone"
                placeholder="Alternate Phone (Optional)"
                value={formData.altPhone}
                onChange={handleChange}
                className={`${input_CSS} mt-4`}
            />

            <div>
                <input
                    name="house"
                    placeholder="House No., Building Name *"
                    value={formData.house}
                    onChange={handleChange}
                    className={`${input_CSS} mt-4`}
                />
                {errors.house && <p className="text-red-500 text-sm">{errors.house}</p>}
            </div>
            <input
                name="street"
                placeholder="Locality / Street Name (Optional)"
                value={formData.street}
                onChange={handleChange}
                className={`${input_CSS} mt-4`}
            />
            <input
                name="landmark"
                placeholder="Landmark (Optional)"
                value={formData.landmark}
                onChange={handleChange}
                className={`${input_CSS} mt-4`}
            />

            <div className={`${grid_CSS} mt-4`}>
                <div>
                    <input
                        name="pincode"
                        placeholder="Pincode *"
                        value={formData.pincode}
                        onChange={handleChange}
                        className={input_CSS}
                    />
                    {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode}</p>}
                </div>
                <div>
                    <input
                        name="city"
                        placeholder="City *"
                        value={formData.city}
                        onChange={handleChange}
                        className={input_CSS}
                    />
                    {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                </div>
            </div>

            <div className="mt-4">
                <input
                    name="state"
                    placeholder="State *"
                    value={formData.state}
                    onChange={handleChange}
                    className={input_CSS}
                />
                {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
            </div>

            <label className="flex items-center gap-2 mt-4">
                <input
                    type="checkbox"
                    checked={saveAddress}
                    onChange={() => setSaveAddress(!saveAddress)}
                />
                <span className="text-sm">Do you want to save this address for future orders?</span>
            </label>

            <div className="grid grid-cols-2 gap-5 justify-between mt-5">
                <button
                    onClick={onCancel}
                    className="bg-gray-600 hover:bg-gray-700 shadow-xl shadow-gray-700/40 text-gray-100 font-medium py-2 px-4 rounded transition w-full"
                >
                    Close
                </button>
                <button
                    onClick={handleSubmit}
                    className="bg-green-600 hover:bg-green-700 shadow-xl shadow-green-700/40 text-white font-medium py-2 px-4 rounded transition w-full"
                >
                    Continue
                </button>

                <button
                    onClick={handleReset}
                    className="bg-yellow-500 hover:bg-yellow-600 shadow-xl shadow-yellow-600/40 text-white font-medium py-2 px-4 rounded transition w-full"
                >
                    Clear Address
                </button>

                <button
                    onClick={handleClearSaved}
                    disabled={addressSaved}
                    className={`bg-red-600 shadow-xl shadow-red-700/40 text-white font-medium py-2 px-4 rounded transition w-full ${addressSaved ? 'opacity-50' : 'opacity-100 hover:bg-red-700'}`}
                >
                    Remove Saved Address
                </button>


            </div>

        </div>
    );
}