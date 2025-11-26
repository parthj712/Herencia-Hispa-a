import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Contact Us", path: "/contact" },
        { name: "Blogs", path: "/blogs" },
        { name: "What we offer", path: "/offer" },
        { name: "Why Spanish", path: "/why-spanish" },
    ];


    return (
        <footer className="bg-gradient-to-b from-[#FDB900] to-[#FFDC7C] text-black py-10 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-20 items-start">

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
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.facebook.com/share/16jgS1if5W/?mibextid=wwXIfr"
                            className="bg-white p-2 rounded-full hover:scale-105 transition"
                        >
                            <img src="/fb.png" alt="Facebook" className="w-6 h-6 md:w-8 md:h-8" />
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.instagram.com/herencia.hispana?igsh=MTM3M29rcmVxN2lwdA=="
                            className="bg-white p-2 rounded-full hover:scale-105 transition"
                        >
                            <img src="/insta.png" alt="Instagram" className="w-6 h-6 md:w-8 md:h-8" />
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/amey-prabhudesai-1711b5220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                            className="bg-white p-2 rounded-full hover:scale-105 transition"
                        >
                            <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6 md:w-8 md:h-8" />
                        </a>
                    </div>
                </div>

                {/* Middle Section - Contact Info */}
                <div className="text-left md:text-left space-y-3">
                    <h3 className="font-bold text-xl">GET IN TOUCH</h3>
                    <div className="flex flex-col gap-6 items-start">
                        <p className=" font-medium text-[18px] flex items-start justify-center md:justify-start gap-2">
                            <MapPin className="w-10 h-7 lg:w-10" />
                            202, A wing Shramasadhana apartments, Natuskar Lane, Markandi, Chiplun, 415605
                        </p>

                        <a
                            href="mailto:prabhudesaiamey95@gmail.com"
                            className=" font-medium text-[18px] flex items-center justify-center md:justify-start gap-2 hover:underline hover:text-blue-600 transition"
                        >
                            <Mail className="w-5 h-5" />
                            prabhudesaiamey95@gmail.com
                        </a>

                        <a
                            href="tel:+918767010062"
                            className=" font-medium text-[18px] flex items-center justify-center md:justify-start gap-2 hover:underline hover:text-blue-600 transition"
                        >
                            <Phone className="w-5 h-5" />
                            +91 8767010062
                        </a>
                    </div>
                </div>


                {/* Right Section - Quick Links */}
                <div className="text-left md:text-left lg:text-right">
                    <h3 className="font-bold text-xl mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    key={item.name}
                                    href={item.path}
                                    className="relative text-[18px] font-medium hover:text-indigo-600 transition-colors duration-300 group"
                                >
                                    {item.name}
                                    <span className="mt-1 absolute left-0 bottom-0 w-0 h-[2.5px] bg-indigo-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
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
