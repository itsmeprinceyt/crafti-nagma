export interface ProductDetails {
    id: string,
    code: string,
    name: string,
    brief_description: string,
    description: string,
    price: number,
    category: string[],
    delivery_charges: number | string,
    discount_price: number,
    stock: boolean,
    processing_time?: string,
    variants?: Variants[],
    custom_note?: string,
    optional_upgrade?: string,
    optional_upgrade_price?: number | string,
    care_instructions?: string[],
    options?: Options[],
    size: string,
    material: string,
    features: string[],
    is_featured: boolean, // to show on /shop featured product list or not
    is_active: boolean, // to show on the website or not
    main_showcase?: boolean,
    gift_included?: string[],
    orders_count?: 0,
}

interface Variants {
    name: string,
    description?: string,
}

interface Options{
    option_name: string,
    option_description?: string
}