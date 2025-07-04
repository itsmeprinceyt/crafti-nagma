import { ProductDetails } from '../types/ProductData.type';

export const CategoryList: string[] = [
  "Handicraft",
  "Hair Accessories"
]

export const ProductData: ProductDetails[] = [
  {
    id: "1",
    code: "CN-EHC611",
    name: "Personalized Name Hanky & Floral Embroidered Hanky",
    brief_description: "Add a personal touch to everyday elegance with our beautifully handcrafted embroidered hankies.",
    description: "Crafti Nagma’s personalized name and floral hankies are designed to be thoughtful keepsakes or charming daily accessories. Whether you're gifting someone special or treating yourself, these hankies offer both beauty and functionality in one delicate piece. Each hanky is carefully hand-embroidered on soft, high-quality cotton fabric. You can choose from elegant name embroidery, graceful floral designs—or both! They’re perfect for weddings, gifting, spiritual use, or everyday personal style.",
    price: 120,
    main_image: "/ProductImages/CN-EHC611/1.jpg",
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
  {
    id: "2",
    code: "CN-EHC608",
    name: "Crochet Hair Clip",
    brief_description: "Add a touch of handmade charm to your hairstyle with our Handmade Crochet Hair Clip, beautifully crafted using premium quality wool.",
    description: "Add a touch of handmade charm to your hairstyle with our Handmade Crochet Hair Clip, beautifully crafted using premium quality wool. Designed with care and attention to detail, this clip is perfect for both kids and adults who love unique, soft, and stylish accessories.",
    price: 55,
    main_image: "/ProductImages/CN-EHC608/1.jpg",
    category: [CategoryList[1]],
    delivery_charges: 0,
    discount_price: 0,
    stock: true,
    processing_time: "2–4 business days",
    variants: [],
    custom_note: "Customization available for clip type, color, or matching fabric sets on request.",
    optional_upgrade: "",
    care_instructions: [
      "Wipe gently with a dry cloth.",
      "Store in a dry place. Avoid water contact to maintain the crochet shape."
    ],
    options: [
      {
        option_name: "Clip Type",
        option_description: "Choose between alligator clip or tic-tac clip."
      },
      {
        option_name: "Color",
        option_description: "Multiple colors available. Custom colors on request."
      }
    ],
    size: "Flower Diameter: 5–6 cm; Clip Length: 4.5–5.5 cm",
    material: "Soft wool yarn, metal clip (alligator or tic-tac)",
    features: [
      "100% handmade crochet using soft wool",
      "Lightweight, gentle on hair, and easy to wear",
      "Securely attached to metal alligator or tic-tac clip",
      "Suitable for kids, teens, and adults"
    ],
    is_featured: true,
    is_active: true,
    orders_count: 0
  },
  {
    id: "3",
    code: "CN-EHC610",
    name: "Handmade Floral Ribbon Bow Hair Clip – Elegant Everyday Style",
    brief_description: "Add a sweet and sophisticated touch to your hair with our handmade floral bow clips crafted from soft, high-quality cotton fabric.",
    description: "Add a sweet and sophisticated touch to your hair with our Handmade Floral Bow Hair Clips, crafted using soft, high-quality cotton fabric and detailed with delicate floral patterns. Each bow is securely attached to a durable alligator clip, offering a firm grip and stylish charm for both kids and adults.\n\nThese clips are perfect for casual days, festive occasions, or as thoughtful handmade gifts. Every piece reflects Crafti Nagma’s signature elegance and love for handmade detailing.\n\nSize & Measurement:\nBow Length: Approx. 9–10 cm\nBow Width: Approx. 4–5 cm\nAlligator Clip Length: 4.5–5.5 cm\n\n(Customization with different fabric patterns or matching sets available on request.)",
    price: 80,
    main_image: "/ProductImages/CN-EHC610/1.jpg",
    category: [CategoryList[1]],
    delivery_charges: 0,
    discount_price: 0,
    stock: true,
    processing_time: "2–4 business days",
    variants: [],
    custom_note: "Customization available for fabric patterns or matching sets upon request.",
    optional_upgrade: "",
    care_instructions: [
      "Spot clean with mild soap and air dry.",
      "Avoid soaking or machine washing to maintain shape and quality."
    ],
    options: [
      {
        option_name: "Color/Fabric Pattern",
        option_description: "Custom fabric patterns and colors available on pre-order."
      }
    ],
    size: "Bow: 9–10 cm (L) × 4–5 cm (W); Clip Length: 4.5–5.5 cm",
    material: "Cotton fabric, metal alligator clip",
    features: [
      "Handmade using floral-patterned cotton fabric",
      "Strong and secure alligator clip backing",
      "Comfortable and lightweight for all-day wear",
      "Suitable for all hair types"
    ],
    is_featured: true,
    is_active: true,
    orders_count: 0
  }

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
