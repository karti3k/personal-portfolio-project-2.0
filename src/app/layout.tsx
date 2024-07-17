import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Jua } from 'next/font/google';
import "./globals.css";
import NavBar from "@/components/NavBar";

const jua = Jua({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jua',
  weight: "400",
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${jua.variable}`}>
        <NavBar></NavBar>
        {children}
        </body>
    </html>
  );
}
