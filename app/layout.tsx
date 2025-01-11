import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight:['300','400','500','600','700'],
});

export const metadata: Metadata = {
  title: "Bio generator",
  description: "Instagram Bio Generator",
  icons: {
    icon: ['/favicon.ico?v=4'],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
