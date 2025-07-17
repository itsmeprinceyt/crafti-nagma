export interface AddressData {
    firstName: string;
    lastName: string;
    email?: string;
    phone: string;
    altPhone?: string;
    house: string;
    street?: string;
    landmark?: string;
    pincode: string;
    city: string;
    state: string;
}

export type AddressFormProps = {
    onConfirm: (data: AddressData) => void;
    onCancel: () => void;
    defaultValues?: AddressData;
};
export type AddressField = keyof AddressData;