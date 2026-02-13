import { Geist, Geist_Mono, Dancing_Script, Quicksand, Mali, Kanit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  display: 'swap',
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: 'swap',
});

const mali = Mali({
  variable: "--font-mali",
  weight: ['400', '600', '700'],
  subsets: ["thai", "latin"],
  display: 'swap',
});

const kanit = Kanit({
  variable: "--font-kanit",
  weight: ['300', '400', '500', '600'],
  subsets: ["thai", "latin"],
  display: 'swap',
});

export const metadata = {
  title: "Happy Valentine's Day",
  description: "A special gift for you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} ${quicksand.variable} ${mali.variable} ${kanit.variable}`}>
        {children}
      </body>
    </html>
  );
}
