import type { Metadata } from "next";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

import "./globals.css";

import Loader from './(components)/components/Loader';
import Navbar from './(components)/Navbar/Navbar';
import Chatbot from "./(components)/Chatbot/Chatbot";
import { OpenProvider } from "./(context)/Hamburger.context";
import { CartProvider } from "./(context)/Cart.context";
import Popup from "./(components)/Popup/Popup";

export const metadata: Metadata = {
  metadataBase: new URL('https://crafti-nagma.vercel.app/'),
  title: "Crafti Nagma — Handmade Crochet & Embroidery",
  description: "Shop handmade crochet gifts, embroidery hoops, and custom decor. Made with love by Crafti Nagma 💛",
  openGraph: {
    title: "Crafti Nagma — Handmade Crochet & Embroidery",
    description: "Shop handmade crochet gifts, embroidery hoops, and custom decor. Made with love by Crafti Nagma 💛",
    siteName: "Crafti Nagma",
    images: [
      {
        url: "/Logo/website-logo.png",
        width: 1200,
        height: 630,
        alt: "Crafti Nagma Logo",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/Logo/website-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased select-none relative">
        <Suspense fallback={<Loader />} >
          <OpenProvider>
            <CartProvider>
              <Popup/>
              <Toaster position="bottom-left" />
              <Chatbot/>
              <Navbar />
              {children}
            </CartProvider>
          </OpenProvider>
        </Suspense>
      </body>
    </html>
  );
}
