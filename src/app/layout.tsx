import type { Metadata } from "next";
import { Kalnia, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart-context";
import Header from "@/components/header";
import Footer from "@/components/footer";

const kalnia = Kalnia({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "YOLI NAILS | Salón de belleza y uñas",
  description:
    "YOLI NAILS — Manicura, pedicura, pestañas, depilación y tienda de productos profesionales de belleza en Salamanca, Madrid. Realza tu belleza, eleva tu confianza.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${kalnia.variable} ${cormorant.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
