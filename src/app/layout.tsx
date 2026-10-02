import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Silver Spicy Hut | Family Multicuisine Dining | Hennur-Bagalur Road",
  description: "Silver Spicy Hut offers authentic multicuisine dining on Hennur-Bagalur Road, Bangalore. 4.1★ rated. North Indian, Tandoor, Chinese & Continental. Book your table online!",
  keywords: "Silver Spicy Hut, family dining, Mitganahalli, Hennur, Bangalore, multicuisine, North Indian, Tandoori, Chinese, Continental restaurant",
  openGraph: {
    title: "Silver Spicy Hut | Family Multicuisine Dining Restaurant",
    description: "Authentic multicuisine casual dining. 4.1★ rated across 377+ reviews on Hennur-Bagalur Road.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#DC2626" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased text-[#1F2937] bg-[#FAF8F5]`}>
        {children}
      </body>
    </html>
  );
}