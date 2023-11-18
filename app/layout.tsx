import "./reset.css";
import "./globals.css";
import type { Metadata } from "next";
import { Merienda, Lora } from "next/font/google";

const merienda = Merienda({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-merienda",
});
const lora = Lora({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-Lora",
});

export const metadata: Metadata = {
  title: "Hue to Hex",
  description: "A color app to test a user's skill at figuring out hex colors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${merienda.variable} ${lora.className}`}>
        {children}
      </body>
    </html>
  );
}
