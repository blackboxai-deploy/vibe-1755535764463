import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RideShare - Get a ride, delivered to your door",
  description: "Request a ride, order food, and more with RideShare. Available in 10,000+ cities worldwide.",
  keywords: "ride sharing, food delivery, transportation, rideshare app",
  authors: [{ name: "RideShare Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}