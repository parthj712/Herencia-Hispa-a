import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from 'next/font/google'
import "./globals.css";
import Navbar from "@/Comp/MainNavbar/Navbar";
import Footer from "@/Comp/Footer/Footer";
import FloatingContact from "@/Comp/FloatingContact/FloatingContact";
import { motion, AnimatePresence } from "framer-motion";
import PageWrapper from "@/Comp/PageWrapper/PageWrapper";
import { MenuProvider } from "@/Comp/MenuProvider/MenuProvider";
import PopupAd from "@/Comp/PopupAd/PopupAd";
import PageTransition from "@/Comp/PageWrapper/PageWrapper";
import TopBar from "@/Comp/TopBar/TopBar";

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

        <PopupAd
          img="/Ad1.jpeg"
          link="https://example.com"
          countdownStart={5}
        />


        {/* <TopBar />     ⭐ Add this line */}



        <MenuProvider>
          <Navbar />
          <PageTransition>
            <main className="flex-grow">{children}</main>
          </PageTransition>
          <FloatingContact />
          <Footer />
        </MenuProvider>




      </body>
    </html>
  );
}
