import { ProductDetails } from '../types/ProductData.type';

export const CategoryList: string[] = [
  "Handicraft"
]

export const ProductData: ProductDetails[] = [
  {
    id: "1",
    code: "CN-HEH001",
    name: "Personalized Name Hanky & Floral Embroidered Hanky",
    brief_description: "Add a personal touch to everyday elegance with our beautifully handcrafted embroidered hankies.",
    description: "Crafti Nagma’s personalized name and floral hankies are designed to be thoughtful keepsakes or charming daily accessories. Whether you're gifting someone special or treating yourself, these hankies offer both beauty and functionality in one delicate piece. Each hanky is carefully hand-embroidered on soft, high-quality cotton fabric. You can choose from elegant name embroidery, graceful floral designs—or both! They’re perfect for weddings, gifting, spiritual use, or everyday personal style.",
    price: 120,
    main_image: "",
    category: [CategoryList[0]],
    delivery_charges: 90,
    stock: true,
    processing_time: "3-5 Days as each item is handmade so please have patience.",
    variants: [
      {
        name: "Name + Floral Combo Hanky"
      },
      {
        name: "Lace customization available",
        description: "Only on request for extra ₹70/-"
      }
    ],
    optional_upgrade: "Add a handmade crochet lace border to your hanky for an extra touch of elegance.",
    optional_upgrade_price: "₹70/- per hanky",
    options: [
      {
        option_name: "Name Embroidered Hanky",
      },
      {
        option_name: "Floral Pattern Hanky",
      }
    ],
    size: "10 x 10 inch",
    material: "Soft Cotton Fabric",
    features: [
      "Made with premium soft cotton fabric",
      "Elegant hand embroidery (name, floral, or combo)",
      "Lightweight, reusable, and washable",
      "Ideal for gifting, bridal use, personal keepsake"
    ],
    is_featured: true,
    is_active: true,
  },
  /*
  {
    id: "",
    code: "",
    name: "",
    brief_description: "",
    description: "",
    price: 0,
    main_image: "",
    category: ["", ""],
    delivery_charges: 0,
    discount_price: 0,
    stock: true,
    processing_time: "",
    variants: [
      {
        name: "",
        description: ""
      },
      {
        name: "",
        description: ""
      },
    ],
    custom_note: "",
    optional_upgrade: "",
    care_instructions: ["", ""],
    options: [
      {
        option_name: "",
        option_description: ""
      }
    ],
    size: "",
    material: "",
    features: ["", ""],
    is_featured: true,
    is_active: true,
    orders_count: 0,
  },
  */
];
