import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Silver Spicy Hut | Family Dining in Mitganahalli | Hennur-Bagalur Road",
  description: "Silver Spicy Hut offers authentic multicuisine dining on Hennur-Bagalur Road. 4.1★ rated. Chinese, North Indian, Continental. Reserve your table today!",
  keywords: "restaurant, family dining, Mitganahalli, Hennur, Bangalore, multicuisine, North Indian, Chinese, Continental",
  openGraph: {
    title: "Silver Spicy Hut | Family Dining Restaurant",
    description: "Authentic multicuisine casual dining. 4.1★ rated across platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#D32F2F" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}