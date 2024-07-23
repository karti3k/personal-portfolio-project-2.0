import type { Metadata } from "next";
import { Inter, Jua, Anek_Devanagari } from 'next/font/google';
import "./globals.css";

const jua = Jua({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jua',
  weight: "400",
});

const anekDevanagari = Anek_Devanagari({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-anek-devanagari',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kartik Bhatia",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/jpeg" href="/favicon.jpg" />
      </head>
      <body className={`${inter.className} ${jua.variable} ${anekDevanagari.variable}`}>
        {children}
      </body>
    </html>
  );
}
