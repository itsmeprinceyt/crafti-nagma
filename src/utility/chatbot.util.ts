import { ChatbotNode } from "../types/Chatbot.type";

export const EN_ROOT: ChatbotNode = {
    text: "Hi, how can I help you today? Please choose an option below:",
    options: [
        {
            label: "Product related",
            next: {
                text: "What would you like to know about our products?",
                options: [
                    {
                        label: "How do I see all the products?",
                        next: {
                            text: [
                                "Here’s how to browse products:",
                                "Tap the hamburger menu (☰) on the top left.",
                                "Choose /shop from the menu.",
                                "Scroll and look at everything, or use the search button on the top right to find something specific."
                            ]
                        }
                    },
                    {
                        label: "How do I search for a product?",
                        next: {
                            text: [
                                "Click the /search icon (magnifying glass) on the top right.",
                                "Type in the name or code of the product.",
                                "If the product exists then it will appear."
                            ]
                        }
                    },
                    {
                        label: "How can I see the latest products?",
                        next: {
                            text: [
                                "Open the hamburger menu (☰) on the top left.",
                                "Go to /shop",
                                "Click the sort dropdown (it says 'A-Z' by default).",
                                "Choose 'Latest'.",
                                "Now the latest products will show first!"
                            ]
                        }
                    },
                    {
                        label: "How do I find products by category?",
                        next: {
                            text: [
                                "Go to 'Shop' using the menu.",
                                "At the top, you’ll see category buttons.",
                                "Click on any category you like to see those products.",
                                "Or you can go to shop and see all the categories at once."
                            ]
                        }
                    },
                    {
                        label: "Where can I find product details or customizations?",
                        next: {
                            text: [
                                "To see more info about any product:",
                                "Click on the 'View' button of the product you’re interested in.",
                                "You’ll find details like material, size, customization options, and photos right there.",
                                "If you want extra custom requests, check the product description or mention me when talking to me through Whatsapp."
                            ]
                        }
                    },
                    {
                        label: "Can I see recommended or popular products?",
                        next: {
                            text: [
                                "Currently our website don't store user's data so we are unable to show that."
                            ]
                        }
                    }
                ]
            }
        },
        {
            label: "Checkout related",
            next: {
                text: "Do you have questions about payment, shipping, or the order process? Here are common questions:",
                options: [
                    {
                        label: "How do I place an order?",
                        next: {
                            text: [
                                "Placing an order is simple:",
                                "Browse the items and pick what you like.",
                                "Click 'Add to Cart' for each product you want.",
                                "When you’re ready, click the cart icon and adjust quantity and click on 'Checkout'",
                                "Enter your delivery address and click 'Continue'.",
                                "We’ll confirm your order details after getting the payment."
                            ]
                        }
                    },
                    {
                        label: "What are your payment options?",
                        next: {
                            text: [
                                "You can pay using:",
                                "UPI (like Google Pay / Slice)",
                                "PayPal (GNS)"
                            ]
                        }
                    },
                    {
                        label: "What about delivery charges?",
                        next: {
                            text: [
                                "Here's how delivery charges work:",
                                "Delivery charges depend on the product.",
                                "You’ll see any applicable charges on the product page and the checkout summary, before you pay.",
                                "They’re usually added per order, not per item.",
                                "Delivery charges is free for orders above ₹599"
                            ]
                        }
                    },
                    {
                        label: "How do product variants, custom requests, or materials affect price?",
                        next: {
                            text: [
                                "Good question! Here’s how it works:",
                                "Some products have extra options, like custom embroidery or special material.",
                                "If you pick a variant or customization, you need to mention that when we reply you on Whatsapp",
                                "Also, if you have a custom request, let us know – we’ll confirm the final price before you pay."
                            ]
                        }
                    },
                    {
                        label: "Is advance payment required?",
                        next: {
                            text: [
                                "Yes, we usually ask for advance payment before we start making your handmade item.",
                                "This helps us get materials and schedule your order."
                            ]
                        }
                    },
                    {
                        label: "How do I provide my address?",
                        next: {
                            text: [
                                "Just do this during checkout:",
                                "When you click on checkout, address form will appear",
                                "Fill out your delivery address in the form.",
                                "Double-check it’s correct and click on 'Continue'",
                                "You can also save your address for future orders so you don't have to type again!"
                            ]
                        }
                    },
                    {
                        label: "Can I get a refund if I change my mind?",
                        next: {
                            text: [
                                "Here’s our policy:",
                                "Once an order is confirmed and payment is done, we can’t issue refunds for changes or cancellations from your side.",
                                "If there’s a problem or mistake from us, we’ll always help fix it!"
                            ]
                        }
                    },
                    {
                        label: "Will my personal info be private?",
                        next: {
                            text: [
                                "Of course! We care about your privacy.",
                                "Your name, phone, and address are only used for your order.",
                                "We never share or leak your info to anyone else.",
                                "Your data is safe with us!"
                            ]
                        }
                    }
                ]
            }
        },
        {
            label: "Website related",
            next: {
                text: "Looking for more info about the website? Ask anything:",
                options: [
                    {
                        label: "Who built this website?",
                        next: {
                            text: [
                                "The website is created by /itsmeprinceyt. You can check out their work by visiting: https://portfolio-itsmeprince.vercel.app/"
                            ]
                        }
                    },
                    {
                        label: "Is this a regular website?",
                        next: {
                            text: [
                                "This is a semi-dynamic website.",
                                "That means we update it manually (not from a big database), so info stays current and personal.",
                                "It keeps things simple and easy for everyone."
                            ]
                        }
                    },
                    {
                        label: "Can I report a bug or problem?",
                        next: {
                            text: [
                                "Spotted something weird? Here’s what to do:",
                                `Email us at nagmaparveen054321@gmail.com`,
                                "Or use the Contact menu to get in touch.",
                                "Tell us the problem, and we’ll fix it as soon as we can!"
                            ]
                        }
                    },
                    {
                        label: "How can I suggest a new feature?",
                        next: {
                            text: [
                                "We love hearing your ideas:",
                                "Email us at nagmaparveen054321@gmail.com or send a DM on Instagram.",
                                "Describe your idea or feature.",
                                "We read every message and really appreciate your help!"
                            ]
                        }
                    }
                ]
            }
        },
        {
            label: "Order related",
            next: {
                text: "Order questions? Here’s help:",
                options: [
                    {
                        label: "How can I track my order?",
                        next: {
                            text: [
                                "Tracking is easy:",
                                "After placing your order, look out for confirmation on WhatsApp.",
                                "We’ll keep you posted with updates.",
                                "You can also message us on WhatsApp with your email address and we will give you an update you."
                            ]
                        }
                    },
                    {
                        label: "How are orders confirmed and updated?",
                        next: {
                            text: [
                                "After you click on checkout and entered your address.",
                                "You will have to enter continue button which will redirect you to our whatsapp number",
                                "From there we will connect with you.",
                                "We’ll confirm the order details and timeline and collect the payment.",
                                "If anything changes or if there’s a question, you’ll hear from us right away."
                            ]
                        }
                    }
                ]
            }
        },
        {
            label: "Contact related",
            next: {
                text: "Need to reach us? Here’s how:",
                options: [
                    {
                        label: "How do I get in touch?",
                        next: {
                            text: [
                                "Easy steps to contact us:",
                                "Open the menu (☰).",
                                "Tap /contact",
                                "You’ll find all our links: /instagram & /whatsapp."
                            ]
                        }
                    },
                    {
                        label: "Can I reach you on Instagram?",
                        next: {
                            text: [
                                "Yes, we’re active there!",
                                "Go to the /contact section in the menu.",
                                "Click our /instagram link.",
                                "Send us a message anytime and we’ll get back to you!"
                            ]
                        }
                    }
                ]
            }
        }
    ]
};

//========================================================================================================
//========================================================================================================
//========================================================================================================
//========================================================================================================

export const HI_ROOT = {
    text: "नमस्ते! आपकी कैसे मदद कर सकती हूँ? नीचे से कोई ऑप्शन चुनें:",
    options: [
        {
            label: "प्रोडक्ट्स से जुड़ी जानकारी",
            next: {
                text: "आप हमारे प्रोडक्ट्स के बारे में क्या जानना चाहती हैं?",
                options: [
                    {
                        label: "सारे प्रोडक्ट्स कैसे देखें?",
                        next: {
                            text: [
                                "प्रोडक्ट्स देखने के लिए:",
                                "ऊपर बाएँ कोने में ☰ मेन्यू पर टैप करें।",
                                "मेन्यू से /shop चुनें।",
                                "आराम से स्क्रॉल करें या किसी खास चीज़ के लिए ऊपर दाए /search बटन का उपयोग करें।"
                            ]
                        }
                    },
                    {
                        label: "किसी प्रोडक्ट को कैसे सर्च किया जाए?",
                        next: {
                            text: [
                                "ऊपर दाहिने कोने में /search (मैग्निफाइंग ग्लास वाला) आइकन पर क्लिक करें।",
                                "प्रोडक्ट का नाम या कोड टाइप करें।",
                                "अगर प्रोडक्ट होगा तो दिख जाएगा।"
                            ]
                        }
                    },
                    {
                        label: "लेटेस्ट (नए) प्रोडक्ट्स कहाँ मिलेंगे?",
                        next: {
                            text: [
                                "लेटेस्ट चीज़ें देखने के लिए:",
                                "ऊपर बाएँ ☰ मेन्यू खोलें।",
                                "/shop पर जाएं।",
                                "जहाँ 'A-Z' लिखा है, वहां sort ड्रॉपडाउन पर क्लिक करें।",
                                "'Latest' चुनें।",
                                "अब सबसे नए प्रोडक्ट सबसे ऊपर दिखेंगे!"
                            ]
                        }
                    },
                    {
                        label: "कैटेगरी के हिसाब से प्रोडक्ट कैसे देखें?",
                        next: {
                            text: [
                                "/shop में मेन्यू से जाएं।",
                                "ऊपर आपको category बटन नज़र आएंगे।",
                                "जो भी category पसंद है, उसपे क्लिक करें, आपको उसी कैटेगरी के प्रोडक्ट्स मिलेंगे।",
                                "या फिर /shop में जाएं और सब कैटेगरीज को एक साथ देखें।"
                            ]
                        }
                    },
                    {
                        label: "प्रोडक्ट डिटेल्स या कस्टमाइज़ेशन कहाँ हैं?",
                        next: {
                            text: [
                                "किसी भी प्रोडक्ट की डिटेल्स देखने के लिए:",
                                "जिस प्रोडक्ट में इंटरेस्ट है, उसके 'View' बटन पर क्लिक करें।",
                                "वहाँ आपको मटेरियल, साइज, कस्टमाइज़ेशन ऑप्शन और फोटो सब मिलेगा।",
                                "अगर कुछ अलग कस्टम चाहिए, तो प्रोडक्ट डिस्क्रिप्शन देखें या Whatsapp पर मुझसे बात करें और mention कर दें।"
                            ]
                        }
                    },
                    {
                        label: "पॉपुलर या रिकमेंडेड प्रोडक्ट्स?",
                        next: {
                            text: [
                                "फिलहाल हमारी वेबसाइट यूज़र डेटा सेव नहीं करती, तो हम वो नहीं दिखा सकते।"
                            ]
                        }
                    }
                ]
            }
        },
        {
            label: "ऑर्डर / चेकआउट से रिलेटेड",
            next: {
                text: "पेमेंट, डिलीवरी या ऑर्डर करने का कोई सवाल है? यहाँ देखें:",
                options: [
                    {
                        label: "ऑर्डर कैसे करें?",
                        next: {
                            text: [
                                "ऑर्डर करना बहुत आसान है:",
                                "प्रोडक्ट्स ब्राउज़ करें और जो पसंद आए, चुनें।",
                                "हर प्रोडक्ट के लिए 'Add to Cart' दबाएँ।",
                                "जब सब कुछ हो जाए, कार्ट आइकन पर क्लिक करें और quantity एडजस्ट करें, फिर 'Checkout' पर क्लिक करें।",
                                "अपना delivery address डालें और 'Continue' पर क्लिक करें।",
                                "पेमेंट के बाद आपका ऑर्डर डिटेल्स हम कन्फर्म करेंगे।"
                            ]
                        }
                    },
                    {
                        label: "पेमेंट के क्या ऑप्शन हैं?",
                        next: {
                            text: [
                                "आप इनसे पे कर सकती हैं:",
                                "UPI (जैसे Google Pay / Slice)",
                                "PayPal (GNS)"
                            ]
                        }
                    },
                    {
                        label: "डिलीवरी चार्ज कैसे लगेंगे?",
                        next: {
                            text: [
                                "डिलीवरी चार्ज ऐसे काम करता है:",
                                "प्रोडक्ट के अनुसार चार्ज बदल सकता है।",
                                "आपको प्रोडक्ट पेज और चेकआउट समरी में चार्ज दिख जाएगा, पेमेंट से पहले।",
                                "चार्ज आमतौर पर पूरे ऑर्डर पर लगता है, न कि हर एक आइटम पर।",
                                "₹599 से ज्यादा ऑर्डर पर डिलीवरी फ्री है!"
                            ]
                        }
                    },
                    {
                        label: "वेरिएंट्स, कस्टम रिक्वेस्ट, मटेरियल आदि से प्राइस पर असर कैसे?",
                        next: {
                            text: [
                                "अच्छा सवाल!",
                                "कुछ प्रोडक्ट्स में एक्स्ट्रा ऑप्शन है, जैसे स्पेशल एम्ब्रायडरी या डिफरेंट मटेरियल।",
                                "अगर आप कोई वेरिएंट या कस्टम चाहते हैं, तो Whatsapp पर जब हम रिप्लाई करें, तब जरूर बता दें।",
                                "किसी भी कस्टम चीज़ का फाइनल प्राइस पेमेंट से पहले हम कन्फर्म कर देंगे।"
                            ]
                        }
                    },
                    {
                        label: "क्या एडवांस पेमेंट ज़रूरी है?",
                        next: {
                            text: [
                                "हाँ, हम आपके लिए आइटम बनाने से पहले एडवांस पेमेंट मांगते हैं।",
                                "इससे हमें चीज़ें तैयार करने में आसानी होती है।"
                            ]
                        }
                    },
                    {
                        label: "एड्रेस कैसे दें?",
                        next: {
                            text: [
                                "जब चेकआउट पर क्लिक करें, तो एड्रेस फॉर्म आएगा।",
                                "वहाँ delivery address सही से भरें, फिर 'Continue' दबाएँ।",
                                "आप चाहें तो अपना एड्रेस सेव भी रख सकती हैं, ताकि आगे बार-बार ना भरना पड़े।"
                            ]
                        }
                    },
                    {
                        label: "अगर मन बदल जाए तो रिफंड मिलेगा?",
                        next: {
                            text: [
                                "हमारी पॉलिसी ये है:",
                                "एक बार पेमेंट हो और ऑर्डर कन्फर्म हो जाए, उसके बाद आपके साइड से बदलाव या कैंसिलेशन पर रिफंड नहीं मिल सकता।",
                                "अगर हमसे कोई गलती हो तो जरूर आपकी मदद करेंगे!"
                            ]
                        }
                    },
                    {
                        label: "मेरी पर्सनल जानकारी प्राइवेट रहेगी?",
                        next: {
                            text: [
                                "बिल्कुल! आपकी प्राइवेसी हमारे लिए बहुत ज़रूरी है।",
                                "आपका नाम, फ़ोन, और एड्रेस सिर्फ ऑर्डर के लिए ही इस्तेमाल होगा।",
                                "कभी किसी से शेयर या लीक नहीं होगा।",
                                "आपका डेटा हमारे पास सेफ है!"
                            ]
                        }
                    }
                ]
            }
        },
        {
            label: "वेबसाइट से जुड़ा",
            next: {
                text: "वेबसाइट के बारे में कुछ जानना है? पूछिए!",
                options: [
                    {
                        label: "ये वेबसाइट किसने बनाई?",
                        next: {
                            text: [
                                "वेबसाइट /itsmeprinceyt द्वारा बनाई गई है। उनका पोर्टफोलियो देखें: https://portfolio-itsmeprince.vercel.app/"
                            ]
                        }
                    },
                    {
                        label: "क्या ये नार्मल वेबसाइट है?",
                        next: {
                            text: [
                                "ये एक सेमी-डायनामिक वेबसाइट है।",
                                "यहाँ सारा डेटा मैन्युअल्ली अपडेट होता है (कोई बड़ा डेटाबेस नहीं है), इसलिए सबकुछ फ्रेश और पर्सनल है।",
                                "सब कुछ सिंपल और ईज़ी रखने के लिए!"
                            ]
                        }
                    },
                    {
                        label: "बग या कोई प्रॉब्लम रिपोर्ट करनी हो तो?",
                        next: {
                            text: [
                                "अगर कुछ अजीब दिखे, तो ये करें:",
                                "हमें ईमेल करें: nagmaparveen054321@gmail.com",
                                "या /contact मेन्यू से कॉन्टैक्ट करें।",
                                "जो भी दिक्कत हो, हम जल्दी हल करने की कोशिश करेंगे!"
                            ]
                        }
                    },
                    {
                        label: "कोई नया फीचर सजेस्ट करना हो?",
                        next: {
                            text: [
                                "आपके आइडियाज का हमेशा स्वागत है!",
                                "ईमेल करें nagmaparveen054321@gmail.com पर या Instagram DM भेजें।",
                                "एकदम खुलकर बताइए क्या चाहिए, हम सभी मैसेज पढ़ते हैं!"
                            ]
                        }
                    }
                ]
            }
        },
        {
            label: "ऑर्डर संबंधित",
            next: {
                text: "ऑर्डर के सवाल? यहाँ देखिए:",
                options: [
                    {
                        label: "ऑर्डर कैसे ट्रैक करें?",
                        next: {
                            text: [
                                "बहुत आसान है!",
                                "ऑर्डर के बाद WhatsApp पर कन्फर्मेशन मिलेगा।",
                                "हर अपडेट पर हम आपको बताते रहेंगे।",
                                "अगर डिटेल चाहिए तो WhatsApp पर अपना ईमेल ऐड्रेस भेजें—we'll update you!"
                            ]
                        }
                    },
                    {
                        label: "ऑर्डर कन्फर्मेशन और अपडेट्स कैसे मिलेंगे?",
                        next: {
                            text: [
                                "जैसे ही आप चेकआउट करके एड्रेस फीड करें।",
                                "Continue बटन दबाएँ, जिससे आप सीधे हमारे Whatsapp नंबर पर पहुंच जाएँगे।",
                                "वहाँ से हम जुड़ेंगे।",
                                "हम ऑर्डर डिटेल्स और टाइमलाइन कन्फर्म करेंगे और पेमेंट लेंगे।",
                                "कुछ भी बदलना या पूछना हो, तो सीधा बताइए—we’ll reply fast!"
                            ]
                        }
                    }
                ]
            }
        },
        {
            label: "कॉन्टैक्ट से जुड़ी जानकारी",
            next: {
                text: "हमसे बात करनी है? ऐसे करें:",
                options: [
                    {
                        label: "कॉन्टैक्ट कैसे करें?",
                        next: {
                            text: [
                                "बिलकुल सिंपल!",
                                "ऊपर मेन्यू (☰) खोलें।",
                                "/contact पर टैप करें।",
                                "आपको हमारे सारे लिंक मिलेंगे: /instagram & /whatsapp."
                            ]
                        }
                    },
                    {
                        label: "इंस्टाग्राम पर कैसे पहुंचे?",
                        next: {
                            text: [
                                "हाँ! हम इंस्टा पर एक्टिव हैं:",
                                "/contact सेक्शन में जाएँ मेन्यू में।",
                                "हमारा /instagram लिंक क्लिक करें।",
                                "सीधा DM कर दें, मैं जल्दी जवाब दूंगी!"
                            ]
                        }
                    }
                ]
            }
        }
    ]
};



export const BOT_FLOW: ChatbotNode = {
    text: "Please select your language / कृपया अपनी भाषा चुनें:",
    options: [
        { label: "English", next: EN_ROOT },
        { label: "हिंदी", next: HI_ROOT }
    ]
};