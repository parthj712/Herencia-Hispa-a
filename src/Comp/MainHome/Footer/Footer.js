import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-[#FDB900] to-[#FFDC7C] text-black py-10 px-6 md:px-16">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-20 items-center">

                {/* Left Section - Logo & Social Icons */}
                <div className="flex flex-col items-center md:items-start space-y-4">
                    <div className="bg-[#5D17EB] text-white font-semibold px-6 py-2 rounded-full shadow-md text-lg">
                        Herencia Hispana
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-4 mt-2">
                        <a
                            href="#"
                            className="bg-white p-2 rounded-full hover:scale-105 transition"
                        >
                            <img src="/fb.png" alt="Facebook" className="w-5 h-5" />
                        </a>
                        <a
                            href="#"
                            className="bg-white p-2 rounded-full hover:scale-105 transition"
                        >
                            <img src="/insta.png" alt="Instagram" className="w-5 h-5" />
                        </a>
                        <a
                            href="#"
                            className="bg-white p-2 rounded-full hover:scale-105 transition"
                        >
                            <img src="/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Middle Section - Contact Info */}
                <div className="text-center md:text-left space-y-3">
                    <h3 className="font-semibold text-lg">GET IN TOUCH</h3>
                    <div className="flex flex-col gap-6 items-start">
                        <p className="text-[18px] flex items-start justify-center md:justify-start gap-2">
                            <MapPin className="w-10 h-7" />
                            <span className="">
                                ABC COMPANY HEADQUARTERS
                                PLAZA MAYOR, OFFICE 5B
                                28012 MADRID, SPAIN
                            </span>
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
