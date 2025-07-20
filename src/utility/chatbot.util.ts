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
                                "Choose 'Shop' from the menu.",
                                "Scroll and look at everything, or use the search button on the top right to find something specific."
                            ]
                        }
                    },
                    {
                        label: "How do I search for a product?",
                        next: {
                            text: [
                                "Click the search icon (magnifying glass) on the top right.",
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
                                "Go to 'Shop'.",
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
                                "PayPal GNS"
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
                                "The website is created by @itsmeprinceyt. You can check out their work by visiting: https://portfolio-itsmeprince.vercel.app/"
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
                                "Tap 'Contact'.",
                                "You’ll find all our links: Instagram & WhatsApp."
                            ]
                        }
                    },
                    {
                        label: "Can I reach you on Instagram?",
                        next: {
                            text: [
                                "Yes, we’re active there!",
                                "Go to the Contact section in the menu.",
                                "Click our Instagram link.",
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
    text: "Hi! कैसे मदद करूँ आज आपकी? नीचे से कोई ऑप्शन चुनिए:",
    options: [
        {
            label: "प्रोडक्ट्स से जुड़ी जानकारी",
            next: {
                text: "हमारे प्रोडक्ट्स के बारे में क्या जानना है? पूछिए!",
                options: [
                    {
                        label: "सारे प्रोडक्ट्स कैसे देखें?",
                        next: {
                            text: [
                                "सारे प्रोडक्ट्स देखने के ये स्टेप्स हैं:",
                                "ऊपर बाएँ कोने में ☰ (हैमबर्गर मेन्यू) पे क्लिक करें।",
                                "'Shop' सेलेक्ट करें।",
                                "अब सब कुछ आराम से स्क्रॉल करें, या टॉप राइट में सर्च बटन इस्तेमाल करें किसी खास चीज़ को ढूँढने के लिए।"
                            ]
                        }
                    },
                    {
                        label: "किसी प्रोडक्ट को कैसे सर्च करें?",
                        next: {
                            text: [
                                "बहुत आसान है!",
                                "टॉप राइट में मैग्निफाइंग ग्लास वाली सर्च आइकन पे क्लिक करें।",
                                "जिस प्रोडक्ट का नाम या कोड याद है, वो टाइप करें।",
                                "अगर वो प्रोडक्ट उपलब्ध है तो नीचे दिखाई देने लगेगा।"
                            ]
                        }
                    },
                    {
                        label: "लेटेस्ट प्रोडक्ट्स कैसे देखूँ?",
                        next: {
                            text: [
                                "नई चीज़ें सबसे पहले देखने के लिए:",
                                "ऊपर बाएँ ☰ मेन्यू खोलें।",
                                "'Shop' पे जाएँ।",
                                "जहाँ 'A-Z' लिखा है, वहाँ sort dropdown पे क्लिक करें।",
                                "'Latest' चुनें।",
                                "अब सबसे नए प्रोडक्ट ऊपर दिखेंगे!"
                            ]
                        }
                    },
                    {
                        label: "कैटेगरी वाइज प्रोडक्ट कैसे देखें?",
                        next: {
                            text: [
                                "'Shop' मेन्यू पे जाएँ।",
                                "ऊपर की ओर आपको अलग-अलग कैटेगरी बटन मिलेंगे।",
                                "किसी भी कैटेगरी पर क्लिक करें — वहीं के प्रोडक्ट्स सामने आ जाएँगे।",
                                "या फिर सीधा Shop में जाकर सारी कैटेगरी एक साथ देख सकती हैं।"
                            ]
                        }
                    },
                    {
                        label: "प्रोडक्ट डिटेल्स या कस्टमाइज़ेशन कहाँ मिलेंगे?",
                        next: {
                            text: [
                                "किसी भी प्रोडक्ट की पूरी डिटेल्स पाने के लिए:",
                                "जिस प्रोडक्ट में इंटरेस्ट है, उसके 'View' बटन पर क्लिक करें।",
                                "वहाँ मटेरियल, साइज, कस्टमाइजेशन ऑप्शंस, फोटो—सबकुछ मिलेगा।",
                                "अगर आपको कुछ और कस्टम चाहिए, तो प्रोडक्ट डिस्क्रिप्शन में देख लें या फिर Whatsapp पर मुझसे चैट करते वक्त बता दीजिए।"
                            ]
                        }
                    },
                    {
                        label: "पॉपुलर या सजेस्टेड प्रोडक्ट्स दिख सकते हैं?",
                        next: {
                            text: [
                                "फिलहाल हमारी साइट यूज़र डेटा सेव नहीं करती, इसलिए ऐसा दिखा नहीं सकते।"
                            ]
                        }
                    }
                ]
            }
        },
        {
            label: "ऑर्डर/चेकआउट से जुड़ा",
            next: {
                text: "पेमेंट, डिलीवरी, या आर्डर करने की कोई क्वेश्चन है? यहाँ देखिए:",
                options: [
                    {
                        label: "ऑर्डर कैसे करें?",
                        next: {
                            text: [
                                "बहुत सिंपल है!",
                                "कोई भी आइटम जो पसंद आए, उस पर क्लिक करें।",
                                "'Add to Cart' बटन दबाएँ।",
                                "जितना सामान चाहिए, उतना ऐड करें और फिर ऊपर कार्ट आइकन पे क्लिक करें, पसन्द बदलनी हो तो यहाँ कर सकते हैं।",
                                "'Checkout' पे क्लिक करें।",
                                "अपना एड्रेस डालकर 'Continue' कर दीजिए।",
                                "पेपमेंट होते ही हम Whatsapp पर ऑर्डर कन्फर्म कर देंगे।"
                            ]
                        }
                    },
                    {
                        label: "पेमेंट ऑप्शन कौन-कौन से हैं?",
                        next: {
                            text: [
                                "आप इन मोड्स से पे कर सकती हैं:",
                                "UPI (जैसे Google Pay या Slice)",
                                "PayPal GNS"
                            ]
                        }
                    },
                    {
                        label: "डिलीवरी चार्जेस कैसे लगेंगे?",
                        next: {
                            text: [
                                "डिलीवरी चार्ज इन बातों पर निर्भर करेगा:",
                                "प्रोडक्ट के हिसाब से चार्ज बदल सकता है।",
                                "चेकआउट और प्रोडक्ट पेज—दोनों जगह देख सकती हैं, पेमेंट से पहले ही दिख जाएगा।",
                                "आर्डर ₹599 या उससे ज़्यादा का होगा तो डिलीवरी फ्री मिलेगी!",
                                "आम तौर पर डिलीवरी चार्ज पूरे आर्डर का लगाया जाता है, ना कि हर आइटम पे अलग-अलग।"
                            ]
                        }
                    },
                    {
                        label: "वेरिएंट्स, कस्टम रिक्वेस्ट या मटेरियल कैसे प्राइस बदलते हैं?",
                        next: {
                            text: [
                                "अच्छा सवाल है!",
                                "कुछ प्रोडक्ट्स में एक्स्ट्रा ऑप्शंस होते हैं, जैसे कस्टम नाम, डिज़ाइन या अलग मटेरियल।",
                                "अगर आपको कुछ कस्टम चाहिए—या वेरिएंट चाहिए—तो Whatsapp पर रिप्लाई करते वक़्त ज़रूर बता देना।",
                                "हम फाइनल प्राइस पेमेंट से पहले कन्फर्म कर देंगे।"
                            ]
                        }
                    },
                    {
                        label: "क्या एडवांस पेमेंट ज़रूरी है?",
                        next: {
                            text: [
                                "हाँ, एडवांस पेमेंट हमें चाहिए होता है।",
                                "ताकि हम आपके लिए मटेरियल ले सकें और ऑर्डर स्टार्ट कर सकें।"
                            ]
                        }
                    },
                    {
                        label: "अपना एड्रेस कैसे दूँ?",
                        next: {
                            text: [
                                "Checkout पर जाएँ:",
                                "Checkout पर क्लिक करते ही एड्रेस फॉर्म आएगा।",
                                "वहाँ एड्रेस ठीक से भरें और 'Continue' दबाएँ।",
                                "अगर आप चाहें, तो अगली बार के लिए एड्रेस सेव भी कर सकती हैं—हर बार लिखना नहीं पड़ेगा!"
                            ]
                        }
                    },
                    {
                        label: "अगर मन बदल जाये तो रिफंड मिलेगा?",
                        next: {
                            text: [
                                "रिफंड पॉलिसी:",
                                "ऑर्डर कन्फर्म और पेमेंट हो जाने के बाद, मन बदलने या बदलाव के लिए रिफंड नहीं मिल सकेगा।",
                                "लेकिन अगर कभी हमारी तरफ से कोई गलती हो जाए, तो हम हमेशा आपकी हेल्प करेंगे!"
                            ]
                        }
                    },
                    {
                        label: "मेरा इंफो प्राइवेट रहेगा?",
                        next: {
                            text: [
                                "बिल्कुल! आपकी प्राइवेसी हमारे लिए बहुत ज़रूरी है।",
                                "आपका नाम, फोन, एड्रेस—सिर्फ आपके ऑर्डर के लिए ही यूज़ होता है।",
                                "कभी किसी के साथ शेयर या लीक नहीं किया जाएगा।",
                                "आपकी जानकारी हमारे पास बिलकुल सुरक्षित है।"
                            ]
                        }
                    }
                ]
            }
        },
        {
            label: "वेबसाइट से जुड़ी बातें",
            next: {
                text: "वेबसाइट के बारे में और जानना है? पूछिए! 😊",
                options: [
                    {
                        label: "ये वेबसाइट किसने बनाई?",
                        next: {
                            text: [
                                "ये वेबसाइट @itsmeprinceyt ने बनाई है! ",
                                "इनका काम देखने हो तो यहाँ जाओ: https://portfolio-itsmeprince.vercel.app/"
                            ]
                        }
                    },
                    {
                        label: "क्या ये नार्मल वेबसाइट है?",
                        next: {
                            text: [
                                "ये एक सेमी-डायनामिक वेबसाइट है।",
                                "यहाँ सबकुछ मैन्युअली अपडेट होता है, कोई बड़ा डेटाबेस नहीं है।",
                                "इसलिए सारी जानकारी फ्रेश और पर्सनल रहती है।"
                            ]
                        }
                    },
                    {
                        label: "अगर कोई दिक्कत या बग आये तो?",
                        next: {
                            text: [
                                "कुछ गड़बड़ हो तो निश्चिन्त होकर बताइए:",
                                "Email करें: nagmaparveen054321@gmail.com",
                                "या Contact मेन्यू से जुड़िए।",
                                "जो भी प्रॉब्लम है, हम जल्दी से जल्दी ठीक करने की कोशिश करेंगे!"
                            ]
                        }
                    },
                    {
                        label: "कोई नई फ़ीचर सजेस्ट करना है?",
                        next: {
                            text: [
                                "हमेशा नए आइडियाज के लिए खुली हूँ!",
                                "Email करें nagmaparveen054321@gmail.com या इंस्टा DMs पे मेसेज कीजिए।",
                                "आइडिया साफ-साफ लिखना, हम हर मैसेज पढ़ते हैं और बहुत शुक्रगुज़ार हैं!"
                            ]
                        }
                    }
                ]
            }
        },
        {
            label: "ऑर्डर से जुड़ी बातें",
            next: {
                text: "ऑर्डर से जुड़े सवाल पूछिए:",
                options: [
                    {
                        label: "ऑर्डर का स्टेटस या ट्रैक कैसे करूँ?",
                        next: {
                            text: [
                                "ट्रैकिंग बहुत आसान है!",
                                "ऑर्डर करने के बाद WhatsApp पर कन्फर्मेशन मैसेज मिलेगा।",
                                "हम आपको हर अपडेट देते रहेंगे।",
                                "अगर जल्दी जानकारी चाहिए तो व्हाट्सएप पे अपना ईमेल आईडी भेज दो—तुरन्त अपडेट मिल जाएगा।"
                            ]
                        }
                    },
                    {
                        label: "ऑर्डर कन्फर्मेशन और अपडेट्स कैसे आएँगे?",
                        next: {
                            text: [
                                "ऑर्डर करने के बाद एड्रेस डालो,",
                                "Continue वाला बटन दबाओ—सीधे व्हाट्सएप पर पहुँच जाओगी।",
                                "हम वहाँ से सीधा कनेक्ट करेंगे,",
                                "ऑर्डर डिटेल्स, टाइमलाइन और पेमेंट—सब वहीं कन्फर्म होगा।",
                                "अगर कोई चेंज या सवाल है तो फटाफट बता दो—we’re quick to reply!"
                            ]
                        }
                    }
                ]
            }
        },
        {
            label: "कॉन्टैक्ट/संपर्क चाहिए",
            next: {
                text: "मुझसे जुड़ना है? ये तरीका है:",
                options: [
                    {
                        label: "कॉन्टैक्ट कैसे करो?",
                        next: {
                            text: [
                                "बहुत सिंपल है:",
                                "मेन्यू (☰) खोलो।",
                                "'Contact' टैप करो।",
                                "वहाँ हमारे सारे लिंक मिलेंगे—इंस्टा और व्हाट्सएप।"
                            ]
                        }
                    },
                    {
                        label: "इंस्टाग्राम पे भी मिलोगी?",
                        next: {
                            text: [
                                "हाँ जी, इंस्टा पे भी एक्टिव हूँ!",
                                "Menu में Contact सेक्शन पर जाओ।",
                                "Instagram लिंक पर क्लिक करो।",
                                "सीधा DM भेज दो—मैं ज़रूर जवाब दूंगी।"
                            ]
                        }
                    }
                ]
            }
        }
    ]
}


export const BOT_FLOW: ChatbotNode = {
    text: "Please select your language / कृपया अपनी भाषा चुनें:",
    options: [
        { label: "English", next: EN_ROOT },
        { label: "हिंदी", next: HI_ROOT }
    ]
};