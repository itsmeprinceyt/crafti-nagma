# 🧵 Crafit Nagma – Handmade with Heart

Welcome to **Crafit Nagma**, an elegant web platform built to showcase and sell handmade crochet, embroidery, and customized crafts. This project is developed using **Next.js**, **TypeScript**, and modern frontend tools to deliver a fast, beautiful, and mobile-responsive shopping experience.

---

## 📸 Preview: https://crafti-nagma.vercel.app/

---

## ✨ Features

- 🛍️ Beautiful product listing & detail pages
- 🖼️ Image gallery with Swiper carousel and fullscreen preview
- 💬 WhatsApp checkout integration
- 🛒 Address Form for client to enter their shipping details
- 🛒 Cart system using `React Context + localStorage`
- 🛒 Detailed invoice summary at checkout section in cart page
- 📉 Discount feature for applicable products
- 🔍 Product search module to find items quickly
- 📦 Product variations, features, and care instructions
- 🔍 SEO-friendly with clean URLs and metadata
- 🌙 Responsive design for mobile and desktop

---

## 🛠 Tech Stack

| Tech            | Description                           |
|----------------|---------------------------------------|
| Next.js         | React framework with file-based routing |
| TypeScript      | Typed JavaScript for better DX         |
| Tailwind CSS    | Utility-first styling                  |
| Swiper.js       | Carousel slider for product images     |
| React Hot Toast | Toast notifications                   |
| WhatsApp API    | Message-based checkout                 |

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/crafit-nagma.git
cd crafit-nagma
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up environment variables

Create a `.env.local` file and add:

```env
NEXT_PUBLIC_WAB_LINK=https://api.whatsapp.com/send/?phone=<your number>&text=Hi%2C%20I%20came%20from%20your%20website%20and%20I%27m%20interested%20in%20your%20products%21&type=phone_number&app_absent=0
NEXT_PUBLIC_WAB_CHECKOUT_LINK=https://api.whatsapp.com/send/?phone=<your number>&type=phone_number&app_absent=0
NEXT_PUBLIC_INSTA_LINK=https://www.instagram.com/crafti_nagma/
```
Replace `<your number>` with your WhatsApp number in international format.

### 4. Run the development server

```bash
npm run dev
```

## 🧠 Important Folder
- `/src/utility/ProductData.util.ts`: All product data lives here for now (can be later connected to a CMS or database)

## 📦 Cart + WhatsApp Checkout
Checking out redirects you to WhatsApp and opens the chat with the cart data ready to send.

## 🤝 Contributing
If you have suggestions, bug fixes, or want to add new features, feel free to fork this repo and submit a pull request. Feedback is always welcome!

# Live
https://crafti-nagma.vercel.app/