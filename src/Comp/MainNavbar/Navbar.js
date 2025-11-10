"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useMenu } from "../MenuProvider/MenuProvider";

export default function Navbar() {
    const { menuOpen, setMenuOpen } = useMenu();
    const router = useRouter();

    const navItems = [
        { name: "Home", path: "/" },

        // DROPDOWN ITEM
        {
            name: "Our Story & Contact",
            dropdown: [
                { name: "About Us", path: "/about" },
                { name: "Contact Us", path: "/contact" },
            ],
        },

        { name: "Blogs", path: "/blogs" },
        { name: "What we offer", path: "/offer" },
        { name: "Why Spanish", path: "/why-spanish" },
    ];

    useEffect(() => {
        navItems.forEach((item) => {
            if (!item.dropdown) router.prefetch(item.path);
        });
    }, []);

    return (
        <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img src="/logo1.png" alt="Logo" className="h-12 w-auto" />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-10">

                    {navItems.map((item) =>
                        item.dropdown ? (
                            // DROPDOWN (DESKTOP)
                            <div key={item.name} className="relative group cursor-pointer">
                                <p className="text-[16px] font-medium text-gray-900 hover:text-indigo-600 transition-colors duration-300">
                                    {item.name}
                                </p>

                                {/* Dropdown menu */}
                                <div className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-white shadow-lg rounded-md border py-2 w-44 z-50">
                                    {item.dropdown.map((subItem) => (
                                        <Link
                                            key={subItem.name}
                                            href={subItem.path}
                                            className="px-4 py-2 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200"
                                        >
                                            {subItem.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            // NORMAL NAV ITEM
                            <Link
                                key={item.name}
                                href={item.path}
                                className="relative text-[16px] font-medium text-gray-900 hover:text-indigo-600 transition-colors duration-300 group"
                            >
                                {item.name}
                                <span className="mt-1 absolute left-0 bottom-0 w-0 h-[2.5px] bg-indigo-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        )
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden flex items-center justify-center text-gray-700"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <Menu size={28} />
                </button>
            </div>

            {/* MOBILE FULLSCREEN MENU */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center space-y-6 text-center shadow-lg"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="absolute top-5 right-6 text-gray-700 hover:text-indigo-600 transition"
                        >
                            <X size={30} />
                        </button>

                        {/* Mobile Nav Items */}
                        {navItems.map((item) =>
                            item.dropdown ? (
                                <div key={item.name} className="flex flex-col items-center">
                                    <p className="text-[20px] font-semibold text-gray-800">
                                        {item.name}
                                    </p>

                                    <div className="flex flex-col mt-2 space-y-2">
                                        {item.dropdown.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.path}
                                                onClick={() => setMenuOpen(false)}
                                                className="text-[18px] text-gray-700 hover:text-indigo-600 transition-all"
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={item.name}
                                    href={item.path}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-[20px] font-semibold text-gray-800 hover:text-indigo-600 transition-all"
                                >
                                    {item.name}
                                </Link>
                            )
                        )}

                        {/* Social Icons */}
                        <div className="flex items-end space-x-2">
                            <a
                                href="https://www.facebook.com/share/16jgS1if5W/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white p-2 rounded-full hover:scale-110 transition"
                            >
                                <img src="/fb.png" alt="Facebook" className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.instagram.com/herencia.hispana?igsh=MTM3M29rcmVxN2lwdA=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white p-2 rounded-full hover:scale-110 transition"
                            >
                                <img src="/insta.png" alt="Instagram" className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/amey-prabhudesai-1711b5220"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white p-2 rounded-full hover:scale-110 transition"
                            >
                                <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
                            </a>
                        </div>

                        {/* Logo */}
                        <div className="flex items-end space-x-2">
                            <img src="/logo1.png" alt="Logo" className="h-12 w-auto" />
                        </div>

                        {/* Contact Info */}
                        <div>
                            <a
                                href="mailto:prabhudesaiamey95@gmail.com"
                                className="text-[16px] flex items-center justify-center gap-2 hover:underline hover:text-blue-600 transition"
                            >
                                prabhudesaiamey95@gmail.com
                            </a>

                            <a
                                href="tel:+918767010062"
                                className="text-[16px] flex items-center justify-center gap-2 hover:underline hover:text-blue-600 transition"
                            >
                                +91 8767010062
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
