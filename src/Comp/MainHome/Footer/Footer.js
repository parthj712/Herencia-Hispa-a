import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-[#FDB900] to-[#FFDC7C] text-black py-10 px-6 md:px-16">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-20 items-center">

                {/* Left Section - Logo & Social Icons */}
                <div className="flex flex-col items-start md:items-start space-y-4">
                    <div className="flex items-center space-x-2">
                        <img
                            src="/logo1.png"
                            alt="Logo"
                            className="h-12 md:h-14 lg:h-16 w-auto text-indigo-600"
                        />
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-4 mt-2">
                        <a
                            href="#"
                            className="bg-white p-2 rounded-full hover:scale-105 transition"
                        >
                            <img src="/fb.png" alt="Facebook" className="w-6 h-6 md:w-8 md:h-8" />
                        </a>
                        <a
                            href="#"
                            className="bg-white p-2 rounded-full hover:scale-105 transition"
                        >
                            <img src="/insta.png" alt="Instagram" className="w-6 h-6 md:w-8 md:h-8" />
                        </a>
                        <a
                            href="#"
                            className="bg-white p-2 rounded-full hover:scale-105 transition"
                        >
                            <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6 md:w-8 md:h-8" />
                        </a>
                    </div>
                </div>

                {/* Middle Section - Contact Info */}
                <div className="text-left md:text-left space-y-3">
                    <h3 className="font-semibold text-lg">GET IN TOUCH</h3>
                    <div className="flex flex-col gap-6 items-start">
                        <p className="text-[18px] flex items-start justify-center md:justify-start gap-2">
                            <MapPin className="w-10 h-7 lg:w-10" />

                            202, A wing Shramasadhana apartments, Natuskar Lane, Markandi, Chiplun, 415605

                        </p>
                        <p className="text-[18px] flex items-center justify-center md:justify-start gap-2">
                            <Mail className="w-5 h-5" />
                            prabhudesaiamey95@gmail.com
                        </p>
                        <p className="text-[18px] flex items-center justify-center md:justify-start gap-2">
                            <Phone className="w-5 h-5" />
                            +91 8767010062
                        </p>
                    </div>
                </div>

                {/* Right Section - Quick Links */}
                <div className="text-left md:text-left lg:text-right">
                    <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-[18px] hover:underline">Home</a></li>
                        <li><a href="#" className="text-[18px] hover:underline">About Us</a></li>
                        <li><a href="#" className="text-[18px] hover:underline">Contact Us</a></li>
                        <li><a href="#" className="text-[18px] hover:underline">Blogs</a></li>
                        <li><a href="#" className="text-[18px] hover:underline">What We Offer</a></li>
                        <li><a href="#" className="text-[18px] hover:underline">Why Spanish?</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="border-t border-black mt-10 pt-4 text-center text-sm">
                © {new Date().getFullYear()} Herencia Hispana. All rights reserved.
            </div>
        </footer>
    );
}
