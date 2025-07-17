import { ProductDetails } from '../types/ProductData.type';

export enum ProductCategory {
  Handicraft = "Handicraft",
  HairAccessories = "Hair Accessories",
  Kids = "Kids Accessories",
  BabyAccessories = "Baby Accessories",
  Headbands = "Headbands",
  KeyChains = "Key Chains",
  HandmadeRakhi = "Handmade Rakhi",
  CrochetAccessories = "Crochet Accessories",
  CrochetClip = "Crochet Clip",
  CrochetFlower = "Crochet Flowers",
  EmbroideryClip = "Embroidery Clips",
  HandmadeBookmarks = "Handmade Bookmarks",
  GiftItems = "Gift Items",
  Stationery = "Stationery",
  HomeDecor = "Home Decoration"
}

export const ProductData: ProductDetails[] = [
  {
    id: "1",
    code: "CN-EHC611",
    name: "Name Hanky & Floral Embroidered Hanky",
    brief_description: "Add a personal touch to everyday elegance with our beautifully handcrafted embroidered hankies.",
    description: "Crafti Nagma’s personalized name and floral hankies are designed to be thoughtful keepsakes or charming daily accessories. Whether you're gifting someone special or treating yourself, these hankies offer both beauty and functionality in one delicate piece. Each hanky is carefully hand-embroidered on soft, high-quality cotton fabric. You can choose from elegant name embroidery, graceful floral designs—or both! They’re perfect for weddings, gifting, spiritual use, or everyday personal style.",
    price: 119,
    category: [ProductCategory.Handicraft],
    delivery_charges: 90,
    discount_price: 0,
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
    is_featured: false,
    is_active: true,
  },
  {
    id: "2",
    code: "CN-EHC608",
    name: "Crochet Hair Clip",
    brief_description: "Add a touch of handmade charm to your hairstyle with our Handmade Crochet Hair Clip, beautifully crafted using premium quality wool.",
    description: "Add a touch of handmade charm to your hairstyle with our Handmade Crochet Hair Clip, beautifully crafted using premium quality wool. Designed with care and attention to detail, this clip is perfect for both kids and adults who love unique, soft, and stylish accessories.",
    price: 59,
    category: [ProductCategory.HairAccessories],
    delivery_charges: 90,
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
    is_featured: false,
    is_active: true,
    orders_count: 0
  },
  {
    id: "3",
    code: "CN-EHC602",
    name: "Hair Accessories – Floral & Crochet Collection Full Set",
    brief_description: "A handcrafted set of 2 floral embroidered hair bows and a crocheted sunflower headband, perfect for baby shoots, gifts, and daily wear.",
    description: "This beautiful handmade hair accessory set includes two embroidered fabric hair bows and one crocheted sunflower headband. The bows are crafted from soft white cotton and decorated with vibrant floral embroidery, each attached to an alligator clip for easy and secure wear. The crochet headband features a charming 3D sunflower and leaf, made from soft acrylic wool with a stretchable fit for comfort. Ideal for special occasions or everyday use, this eco-friendly packaged set is a delightful choice for kids.",
    price: 499,
    category: [
      ProductCategory.HairAccessories,
      ProductCategory.Kids],
    delivery_charges: 90,
    discount_price: 0,
    stock: true,
    processing_time: "1–2 business days",
    variants: [
      {
        name: "Hair Bows",
        description: "Set of 2 soft white cotton hair bows with colorful floral embroidery and alligator clip backing. Size: approx. 4.5 x 3 inches each."
      },
      {
        name: "Crocheted Sunflower Headband",
        description: "Handmade crochet headband featuring a 3D sunflower and leaf. Stretchable soft fit for head circumference 15–20 inches. Width: 1.5 inches."
      }
    ],
    custom_note: "Customized sets with different fabric patterns or designs available on request.",
    optional_upgrade: "Includes FREE Hair Tic Tac Clip",
    care_instructions: [
      "Spot clean with mild soap and water",
      "Avoid soaking or machine washing to preserve hand-stitched details"
    ],
    options: [
      {
        option_name: "Custom Design",
        option_description: "Request custom fabric patterns or matching designs."
      }
    ],
    size: "Hair Bows: 4.5 x 3 in | Headband: 1.5 in width, 15–20 in circumference (stretchable)",
    material: "Cotton fabric, acrylic wool, embroidery threads",
    features: [
      "100% handmade with premium embroidery threads & soft wool",
      "Elegant, lightweight, and comfortable for long hours"
    ],
    is_featured: true,
    is_active: true,
    orders_count: 0
  },
  {
    id: "4",
    code: "CN-EHC610",
    name: "Floral Ribbon Bow Hair Clip – Elegant Everyday Style",
    brief_description: "Elegant handmade floral cotton ribbon bow hair clip with a strong alligator grip – perfect for everyday and festive styling.",
    description: "Add a sweet and sophisticated touch to your hair with our Handmade Floral Bow Hair Clips, crafted using soft, high-quality cotton fabric and detailed with delicate floral patterns. Each bow is securely attached to a durable alligator clip, offering a firm grip and stylish charm for both kids and adults. These clips are perfect for casual days, festive occasions, or as thoughtful handmade gifts. Every piece reflects Crafti Nagma’s signature elegance and love for handmade detailing.",
    price: 79,
    category: [ProductCategory.HairAccessories],
    delivery_charges: 90,
    discount_price: 0,
    stock: true,
    processing_time: "2–4 business days (made to order)",
    variants: [
      {
        name: "Floral Bow Hair Clip",
        description: "Handmade bow crafted from floral-patterned cotton fabric, attached to a secure alligator clip. Size: Bow length 9–10 cm, width 4–5 cm. Clip length: 4.5–5.5 cm."
      }
    ],
    custom_note: "Customization with different fabric patterns or matching sets available on request. We'll confirm your preference after order.",
    optional_upgrade: "",
    care_instructions: [
      "Spot clean with mild soap and air dry",
      "Avoid soaking or machine washing to maintain shape and quality"
    ],
    options: [
      {
        option_name: "Fabric Customization",
        option_description: "Choose from available fabric patterns or request a matching set (subject to pre-order confirmation)."
      }
    ],
    size: "Bow: 9–10 cm (L) x 4–5 cm (W) | Clip: 4.5–5.5 cm",
    material: "Floral-patterned cotton fabric, metal alligator clip",
    features: [
      "Handmade using soft floral cotton fabric",
      "Strong grip alligator clip, lightweight for all-day comfort"
    ],
    is_featured: false,
    is_active: true,
    orders_count: 0
  },
  {
    id: "5",
    code: "CN-EHC606",
    name: "Bloom Bliss Hair Clip – Tic Tac Set (2 pcs)",
    brief_description: "Set of 2 handcrafted floral tic tac clips featuring red roses and delicate embroidery. A charming accessory for all ages.",
    description: "Handcrafted with love, the Bloom Bliss tic tac hair clips are a celebration of traditional embroidery and elegant styling. Designed with blooming red roses, tiny white buds, and lush green leaves, each clip adds a burst of floral beauty to any hairstyle. Made with soft felt backing and strong tic tac clips, these are ideal for daily wear, festive looks, or gifting.",
    price: 79,
    category: [ProductCategory.HairAccessories],
    delivery_charges: 90,
    discount_price: 0,
    stock: true,
    processing_time: "Ships in 1–2 working days",
    variants: [
      {
        name: "Bloom Bliss Tic Tac Clips",
        description: "Pair of hand-embroidered tic tac clips featuring red, white, and green floral detailing. Mounted on 2.5 in x 0.6 in felt-covered metal clips."
      }
    ],
    custom_note: "Customized with different fabric patterns or designs matching sets available on request.",
    optional_upgrade: "",
    care_instructions: [
      "Spot clean gently with a damp cloth",
      "Avoid machine wash to protect embroidery and felt backing"
    ],
    options: [
      {
        option_name: "Custom Design",
        option_description: "Request matching sets or alternative floral color combinations on pre-order."
      }
    ],
    size: "2.5 in (Length) × 0.6 in (Width)",
    material: "Premium embroidery threads, felt base, metal tic tac clip",
    features: [
      "Intricately hand-embroidered with premium threads",
      "Soft felt backing with strong grip metal clips for comfort and durability"
    ],
    is_featured: false,
    is_active: true,
    orders_count: 0
  },
  {
    id: "6",
    code: "CN-EHC600",
    name: "Floral Elegance Hair Clip – Tic Tac Style",
    brief_description: "Elegant embroidered tic tac hair clips with a minimal floral design on a matte black base. Ideal for daily and festive wear.",
    description: "This elegant hair clip features a soft hand-embroidered floral design in soothing shades of blush pink and green, perfectly set against a black fabric base.\nIts clean, minimal aesthetic makes it a versatile accessory for both daily wear and special occasions.\n\nGentle on hair and crafted for durability, this clip brings both comfort and charm to kids and adults alike.",
    price: 59,
    category: [ProductCategory.HairAccessories],
    delivery_charges: 90,
    discount_price: 0,
    stock: true,
    processing_time: "Ready to dispatch in 1–2 working days. Custom orders may take 3–5 days.",
    variants: [
      {
        name: "Floral Tic Tac Hair Clip",
        description: "Hand-embroidered tic tac hair clip with blush pink flowers and green leaves on a matte black base. Size: 2.8 in (L) × 1 in (W). Comes as a pair."
      }
    ],
    custom_note: "Customized with different fabric patterns or matching sets available on request.",
    optional_upgrade: "Discounts available on combo sets",
    care_instructions: [
      "Wipe gently with a soft, damp cloth",
      "Avoid machine washing or soaking to preserve embroidery"
    ],
    options: [
      {
        option_name: "Custom Design",
        option_description: "Choose alternative fabric colors or request a matching gift set (pre-order only)."
      }
    ],
    size: "2.8 in (Length) × 1 in (Width)",
    material: "Felt/fabric base, embroidery thread, metal tic tac clip",
    features: [
      "Neatly hand-embroidered floral artwork",
      "Durable and gentle with soft felt backing for all-day comfort"
    ],
    is_featured: true,
    is_active: true,
    orders_count: 0
  },
  {
    id: "7",
    code: "CN-EHC609",
    name: "Crochet Hair Band with Matching Flower Clips",
    brief_description: "Handmade crochet hair band with two matching flower clips – soft, cute, and perfect for kids.",
    description: "Elevate your little one’s hair accessory collection with this adorable handcrafted crochet hair band and clip set by Crafti Nagma. This set includes a soft and stretchy yellow crochet bow headband with delicate pink edging, paired with two charming flower clips made using premium quality yarn. Perfect for daily use, parties, or gifting!",
    price: 249,
    category: [
      ProductCategory.HairAccessories,
      ProductCategory.Kids],
    delivery_charges: 90,
    discount_price: 0,
    stock: true,
    processing_time: "2–4 business days",
    variants: [
      {
        name: "Yellow & Pink Bow Set",
        description: "Yellow crochet bow hair band with pink border + 2 yellow flower clips"
      }
    ],
    custom_note: "Custom color combinations available on request. Mention preferred shades during checkout.",
    optional_upgrade: "Gift wrap with message card – ₹20 extra",
    care_instructions: [
      "Hand wash gently in cold water",
      "Do not wring or tumble dry. Dry flat in shade"
    ],
    options: [
      {
        option_name: "Color Customization",
        option_description: "Choose your own color theme for the bow and flower clips from our color chart."
      }
    ],
    size: "Hair Band: Stretchable plastic band with bow approx. 4.5 in wide | Flower Clips: approx. 2 in diameter",
    material: "100% Acrylic Yarn, Plastic Hair Band, Metal Tic Tac Clips",
    features: [
      "Handmade with love",
      "Soft and kid-safe",
      "Lightweight and comfortable",
      "Beautiful for daily wear and gifting",
      "Unique design by Crafti Nagma"
    ],
    is_featured: true,
    is_active: true,
    orders_count: 0
  },
  {
    id: "8",
    code: "CN-EHC601",
    name: "Cherry Crochet Hair Clip",
    brief_description: "Cute handcrafted cherry-themed crochet hair clip for kids and adults.",
    description: "Add a pop of fun and color to your hairstyle with this adorable Cherry Crochet Hair Clip by Crafti Nagma. Handmade with love using soft yarn, this design features two bright red cherries and vibrant green leaves attached to a sturdy black clip. Perfect for little girls, teens, or anyone who loves playful hair accessories. Ideal for daily use, parties, and gifting.",
    price: 119,
    category: [
      ProductCategory.Handicraft,
      ProductCategory.Kids],
    delivery_charges: 90,
    discount_price: 0,
    stock: true,
    processing_time: "1–2 business days",
    variants: [
      {
        name: "Red Cherry",
        description: "Red cherry crochet clip with green leaves on black tic tac base"
      }
    ],
    custom_note: "Clip base color and yarn colors can be customized upon request.",
    optional_upgrade: "Gift wrap with a personal note – ₹20 extra",
    care_instructions: [
      "Gently hand wash in cold water only if needed",
      "Lay flat to dry and avoid rough use to maintain shape"
    ],
    options: [
      {
        option_name: "Color Customization",
        option_description: "Option to change cherry or leaf colors from our yarn color palette"
      }
    ],
    size: "Approx. 2.5 inches",
    material: "100% Acrylic Yarn, Metal Tic Tac Clip",
    features: [
      "Handmade with care",
      "Unique and playful design",
      "Lightweight and kid-friendly",
      "Great for styling or gifting",
      "Durable and reusable"
    ],
    is_featured: false,
    is_active: true,
    orders_count: 0
  },
  {
    id: "9",
    code: "CN-EHC0010",
    name: "Crochet Rose Keychain",
    brief_description: "Handmade crochet rose keychain perfect for gifting or everyday use.",
    description: "This beautiful crochet rose keychain is carefully handcrafted using premium quality yarn. Its elegant design makes it a perfect accessory for your bag, keys, or as a charming little gift for loved ones. Each petal is shaped with precision to resemble a blooming rose, available in multiple colors. Lightweight and durable, this product is made with love and attention to detail. Ideal for birthdays, return gifts, or as a symbol of appreciation.",
    price: 59,
    category: [
      ProductCategory.Handicraft,
      ProductCategory.KeyChains],
    delivery_charges: 90,
    discount_price: 49,
    stock: true,
    processing_time: "1–2 days",
    variants: [
      {
        name: "Red Rose",
        description: "Classic red rose symbolizing love and passion."
      },
      {
        name: "Pink Rose",
        description: "Soft pink rose representing affection and care."
      },
      {
        name: "Yellow Rose",
        description: "Bright yellow rose for friendship and joy."
      }
    ],
    custom_note: "Can be customized with initials or charms (extra ₹10).",
    optional_upgrade: "Add a small gift box packaging for ₹20",
    care_instructions: [
      "Hand wash only",
      "Avoid soaking in water",
      "Keep away from fire"
    ],
    options: [
      {
        option_name: "Gift Wrap",
        option_description: "Premium gift wrap with a handwritten note (₹15 extra)."
      }
    ],
    size: "Approx. 6 cm (rose diameter) | Chain length: 4 cm",
    material: "Soft acrylic yarn, metal keyring",
    features: [
      "100% handmade",
      "Lightweight and durable",
      "Customizable colors",
      "Suitable for gifting and personal use",
      "Eco-friendly material"
    ],
    is_featured: false,
    is_active: true,
    orders_count: 0
  },
  {
    id: "10",
    code: "CN-EHC0011",
    name: "Crochet Mickey Style Hair Accessories & Baby Slippers Set",
    brief_description: "Cute black-red Mickey themed crochet set with headband, clips & slippers for babies.",
    description: "This adorable handmade crochet set features a Mickey Mouse inspired theme, perfect for baby photoshoots or special occasions. The set includes a pair of soft crochet baby slippers, a headband with Mickey ears, and two pairs of mini Mickey bow clips. Crafted with care using premium quality black yarn and bright red accents, this set is gentle on baby skin and adds an adorable charm to your baby’s look.",
    price: 600,
    category: [
      ProductCategory.Handicraft,
      ProductCategory.Kids],
    delivery_charges: 90,
    discount_price: 499,
    stock: true,
    processing_time: "2–3 working days",
    variants: [
      {
        name: "Bow Color Option",
        description: "Available in Red (default), Pink, and Yellow"
      },
      {
        name: "Slipper Size",
        description: "Available for 0–3 months, 3–6 months, and 6–9 months"
      }
    ],
    custom_note: "Can be customized with name initials or different bow colors on request.",
    optional_upgrade: "Add gift wrap with custom message for ₹30 extra",
    care_instructions: [
      "Hand wash gently in cold water",
      "Do not bleach",
      "Lay flat to dry",
      "Do not iron"
    ],
    options: [
      {
        option_name: "Add Extra Clip Pair",
        option_description: "Add one more pair of Mickey style bow clips for ₹49"
      }
    ],
    size: "Slippers: Length – approx. 10 cm (for 3–6 months)\nHeadband: Fits head size 38–44 cm\nClips: Approx. 4 cm x 3.5 cm",
    material: "Soft baby wool (acrylic yarn), plastic headband base",
    features: [
      "Handmade with love",
      "Soft, non-irritating baby yarn",
      "Lightweight and stretchable",
      "Perfect for gifting and newborn photoshoots",
      "Multiple customization options available"
    ],
    is_featured: false,
    is_active: true,
    orders_count: 0
  },
  {
    id: "11",
    code: "CN-EHC0016",
    name: "Handmade Crochet Rakhi – Peacock Feather Design",
    brief_description: "Eco-friendly, reusable crochet rakhi inspired by peacock feather motifs",
    description: "Celebrate this Raksha Bandhan with a touch of elegance and sustainability. Our CraftiNagma Handmade Crochet Rakhi is crafted with vibrant threads and detailed with a stunning peacock feather motif that adds both charm and tradition. This rakhi is not just for one-time use – it can be preserved as a beautiful keepsake or reused as a bracelet. Handcrafted with love, it's gentle on the skin, safe for kids and adults, and completely eco-friendly. Presented neatly on a branded card for gifting",
    price: 250,
    category: [
      ProductCategory.HandmadeRakhi,
      ProductCategory.CrochetAccessories],
    delivery_charges: 90,
    stock: true,
    processing_time: "2-4",
    variants: [
      {
        name: "Blue Green feather ",
        description: "Traditional peacock eye with blue center and green outer"
      },
      {
        name: "Pink or yellow -Green Feather",
        description: "Unique floral style pattern with pink inner design"
      }
    ],
    optional_upgrade: "Add a message card in just rs +-55.00/- ",
    care_instructions: [
      "Hand wash only ",
      "Avoid stretching or pulling the threads"
    ],
    options: [
      {
        option_name: "Gift Wrap ",
        option_description: "rakhi gift wrap with ribbon and tag for ₹50"
      }
    ],
    size: "Peacock Feather: approx. 2.5 inch diameter Thread Length (each side): 6–7 inch adjustable",
    material: "Cotton crochet thread, eco-friendly starch base, paper card",
    features: [
      "Reusable and washable",
      "Skin-friendly and child-safe",
      "Elegant peacock motif",
      "Eco-conscious gifting option",
      "Handmade in India"
    ],
    is_featured: true,
    is_active: true,
    orders_count: 0,
    discount_price: 189,
    custom_note: "Name customization or brother-sister initials available on request"
  },
  {
    id: "12",
    code: "CN-EHC0012",
    name: "Handmade Embroidered Tic Tac Clip – Red Fabric Base",
    brief_description: "Elegant red fabric tic tac clip with delicate floral hand embroidery.",
    description: "Add a touch of tradition and charm to your hairstyle with this handmade embroidered tic tac clip. Designed on a rich red fabric base, the clip features fine floral embroidery using cotton threads in contrasting shades like white, green, or gold. Ideal for festive wear, ethnic outfits, and special occasions. It offers a strong grip, gentle hold, and timeless handmade beauty.",
    price: 79,
    category: [ProductCategory.HairAccessories],
    delivery_charges: 90,
    stock: true,
    processing_time: "1–2 days",
    variants: [
      {
        name: "Embroidery Style",
        description: "Floral Pattern, Leaf Vine Pattern, Traditional Motif"
      },
      {
        name: "Set Options",
        description: "Single Clip"
      }
    ],
    optional_upgrade: "Gift box or handmade paper pouch (+₹55)",
    care_instructions: [
      "Keep away from water, perfume, and heat",
      "Store flat",
      "Wipe gently with dry cloth"
    ],
    options: [],
    size: "Approx. 5.5 – 6 cm",
    material: "Red cotton base, embroidery threads, metal tic tac clip inside",
    features: [
      "Premium red fabric base",
      "Hand-embroidered with floral patterns",
      "Strong hold, soft on hair",
      "Suitable for kids and adults",
      "Customizable design",
      "Perfect for gifting and festive wear"
    ],
    is_featured: false,
    is_active: true,
    orders_count: 0,
    discount_price: 49,
    custom_note: "Custom name or initial embroidery on request (+₹20 per clip)"
  },
  {
    id: "13",
    code: "CN-EHC0013",
    name: "Crochet Garden Theme Bookmarks ",
    brief_description: "Whimsical crochet bookmarks with bee, flower, ladybug & sunflower designs.",
    description: "Brighten up your reading experience with these handmade garden-themed crochet bookmarks. This adorable set includes 4 different designs: a buzzing bee, a blooming daisy, a cheerful ladybug, and a sunny sunflower — all connected with a leafy green stem. Made with soft yarn, they are flexible, lightweight, and gentle on your books. Perfect for book lovers, gifting, kids, or handmade collection enthusiasts.",
    price: 99,
    category: [
      ProductCategory.CrochetAccessories,
      ProductCategory.CrochetAccessories,
      ProductCategory.GiftItems,
      ProductCategory.Stationery
    ],
    delivery_charges: 90,
    stock: true,
    processing_time: "1-2",
    variants: [
      {
        name: "Bookmark Theme",
        description: "Garden Set (bee, ladybug, daisy, sunflower) – Custom theme on request (fruit, animals, letters, etc."
      },
      {
        name: "Set Size ",
        description: "Single Bookmark (₹69 each) – Set of 4 (₹249)"
      }
    ],
    optional_upgrade: "Gift pouch packaging (+₹15)",
    care_instructions: [
      "Hand wash with cold water only",
      "Do Not Iron",
      "Dry flat"
    ],
    options: [],
    size: "Each approx. 18–20 cm long",
    material: "Soft acrylic yarn, cotton thread, fiberfill stuffing (for bee & ladybug)",
    features: [
      "100% Handmade",
      "Gentle on book pages",
      "Unique garden character designs",
      "Customizable",
      "Perfect return gift or stocking stuffer",
      "Kid-friendly & safe"
    ],
    is_featured: true,
    is_active: true,
    orders_count: 0,
    discount_price: 79,
    custom_note: "Add custom name embroidery on leaf (extra ₹30)"
  },
  {
    id: "14",
    code: "CN-EHC0017",
    name: "Crochet Rose Hair Clip",
    brief_description: "Handmade elegant crochet rose clip for hair styling.",
    description: "This beautiful crochet rose hair clip is delicately handcrafted with premium yarn, making it the perfect accessory for festive occasions, everyday wear, or gifting. It's lightweight, secure, and adds a natural floral charm to your hairstyle.",
    price: 79,
    category: [
      ProductCategory.HairAccessories,
      ProductCategory.CrochetClip,
      ProductCategory.CrochetAccessories
    ],
    delivery_charges: 90,
    stock: true,
    processing_time: "1-2",
    variants: [
      {
        name: "Red Rose ",
        description: "Classic red rose with green leaf base."
      },
      {
        name: "Blue Rose",
        description: "Light Blue rose with white base clip."
      }
    ],
    optional_upgrade: "Gift wrap option available for Rs/- 20 extra.",
    care_instructions: [
      "Hand wash gently with cold water",
      "Do not wring or twist",
      "Dry flat in shade."
    ],
    options: [
      {
        option_name: "Clip Type",
        option_description: "Choose between Tic Tac Clip or Alligator Clip base."
      }
    ],
    size: "Approx. 6 cm x 4 cm",
    material: "Cotton Yarn, Metal Clip Base, Glue",
    features: [
      "100% handmade with love",
      "Soft & skin-friendly cotton yarn",
      "Suitable for toddlers to adults",
      "Reusable and washable",
      "Ideal for gifting & festive styling"
    ],
    is_featured: true,
    is_active: true,
    orders_count: 0,
    discount_price: 55,
    custom_note: "Customer can request name embroidery on the clip base"
  },
  {
    id: "15",
    code: "CN-EHC0014",
    name: "Embroidered Daisy Bloom Tic Tac Clip Set – BLACK ",
    brief_description: "Aesthetic floral tic tac clips in navy blue, featuring hand-embroidered daisy and bouquet designs.",
    description: "Elevate your hairstyle with this beautifully hand-embroidered tic tac clip set. Each clip features a unique floral design — from blooming daisies to bouquet-style embroidery — all on a rich navy blue fabric base. These clips are lightweight, secure, and perfect for both everyday elegance and festive charm. Carefully crafted to give a touch of handcrafted beauty in every detail.",
    price: 70,
    category: [
      ProductCategory.HairAccessories,
      ProductCategory.EmbroideryClip,
    ],
    delivery_charges: 90,
    stock: true,
    processing_time: "3-4",
    variants: [
      {
        name: "Set ",
        description: "Available in Single / Pair / Set of 4"
      }
    ],
    optional_upgrade: "Can be packed as gift-ready (₹30 extra with box).",
    care_instructions: [
      "Avoid water",
      "Wipe with dry cloth. ",
      "Store flat."
    ],
    options: [
      {
        option_name: "Colour Base",
        option_description: "Red / Yellow (on request)"
      },
      {
        option_name: "Clip Base",
        option_description: "Tic Tac / Alligator (custom)"
      },
      {
        option_name: "Set Type",
        option_description: "Single / Pair / Set of 4"
      }
    ],
    size: "Approx 6.5 cm",
    material: "Cotton embroidery thread, cotton fabric, metal clip",
    features: [
      "Handmade ",
      "Floral Embroidery ",
      "Solid Grip",
      "Elegant Look"
    ],
    is_featured: true,
    is_active: true,
    orders_count: 0,
    discount_price: 65,
    custom_note: "For customized flower color or fabric base, contact via WhatsApp after order."
  },
  {
    id: "16",
    code: "CN-EHC0015",
    name: "Crochet Floral Baby Headband – Off -white with Rose Detail",
    brief_description: "Soft and stretchable crochet baby headband with vibrant rose and flower accents.",
    description: "This beautifully handcrafted crochet headband is specially designed for babies, combining comfort with charm. The beige band is soft and gentle on baby’s skin, while the floral crochet embellishments — including a pink rose, soft leaves, and accent flowers — give it a delightful, picture-perfect look. Ideal for birthdays, photoshoots, or daily wear for your little sunshine",
    price: 200,
    category: [
      ProductCategory.BabyAccessories,
      ProductCategory.Headbands,
      ProductCategory.CrochetAccessories
    ],
    delivery_charges: 90,
    stock: true,
    processing_time: "3-4",
    variants: [
      {
        name: "Type",
        description: "Available for Newborn / 6 M - 1 Y / 1 Y+"
      }
    ],
    optional_upgrade: "Add gift wrap box (₹55 extra)",
    care_instructions: [
      "Hand wash only.",
      "Use mild soap",
      "Do not twist."
    ],
    options: [
      {
        option_name: "Size",
        option_description: "Newborn / 6M-1Y / 1Y+"
      },
      {
        option_name: "Flower Colour ",
        option_description: "Rose Pink / Yellow / Lavender (on request)"
      },
      {
        option_name: "Band Colour ",
        option_description: "Red / White/yellow/Black / "
      }
    ],
    size: "Stretchable – fits up to 1.5 years (adjustable",
    material: "Baby-soft yarn (cotton), Crochet thread ",
    features: [
      "Soft for baby skin",
      "Handmade ",
      "Lightweight & Stretchable"
    ],
    is_featured: true,
    is_active: true,
    orders_count: 0,
    discount_price: 159,
    custom_note: "Mention head size or age for perfect fit in order notes."
  },
  {
    id: "17",
    code: "CN-EHC607",
    name: "Handmade Crochet Rose – Red with Stem & Leaf",
    brief_description: "Realistic crochet rose stick handcrafted with vibrant red petals and leafy detail.",
    description: "This handmade crochet rose is a timeless piece of art, featuring beautifully layered red petals, a long green stem, and soft green leaves. Made with love and precision, it’s perfect for gifting, decoration, or crafting. Whether it’s for Valentine’s Day, birthdays, or just to brighten someone’s day — this rose will never wilt.",
    price: 250,
    category: [
      ProductCategory.HomeDecor,
      ProductCategory.CrochetFlower,
      ProductCategory.GiftItems
    ],
    delivery_charges: 90,
    stock: true,
    processing_time: "2-3",
    variants: [
      {
        name: "Colour ",
        description: "Red / Pink / Yellow / White (Choose your preferred rose color)"
      },
      {
        name: "Set",
        description: "Single / Pair / Set of 5 / Set of 10 (Ideal for gifting & décor)"
      },
      {
        name: "Leaf type ",
        description: "With Leaf / Without Leaf (Choose leaf attachment style)"
      }
    ],
    optional_upgrade: "Add gift wrap + tag (₹35) / Box pack (₹25)",
    care_instructions: [
      "Keep Dry",
      "dust gently with soft brush."
    ],
    options: [
      {
        option_name: "Colour ",
        option_description: "Red / Pink / Yellow / White"
      },
      {
        option_name: "Set ",
        option_description: "Single / Pair / Bunch (Set of 5 or 10)"
      },
      {
        option_name: "Stem ",
        option_description: "With Leaf / Without Leaf"
      }
    ],
    size: "Approx 15–17 cm length",
    material: "Acrylic yarn, metal wire (inside stem), felt (optional leaf)",
    features: [
      "Long-lasting",
      "Realistic Look",
      "Fully -Handmade",
      "Gifting ",
      "Home decore "
    ],
    is_featured: true,
    is_active: true,
    orders_count: 0,
    discount_price: 149,
    custom_note: "Add a personalized tag (₹10 extra) or name initial in flower leaf"
  }


  /*
    {
      id: "",
      code: "",
      name: "",
      brief_description: "",
      description: "",
      price: 0,
      category: [],
      delivery_charges: 0,
      stock: true,
      processing_time: "",
      variants: [],
      optional_upgrade: "",
      care_instructions: [],
      options: [],
      size: "",
      material: "",
      features: [],
      is_featured: true,
      is_active: true,
      orders_count: 0,
      discount_price: 0,
      custom_note: ""
    }
    */

];
