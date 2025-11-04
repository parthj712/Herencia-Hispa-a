import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from 'next/font/google'
import "./globals.css";
import Navbar from "@/Comp/MainNavbar/Navbar";
import Footer from "@/Comp/MainHome/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Herencia Hispaña",
  description: "A Spanish Language Coaching Classes",
  icons: {
    icon: "/logo1.ico", // or /myicon.png if you prefer
  },
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // choose the weights you want
  variable: '--font-poppins', // optional CSS variable
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
