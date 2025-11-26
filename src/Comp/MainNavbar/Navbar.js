"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useMenu } from "../MenuProvider/MenuProvider";

export default function Navbar() {
    const { menuOpen, setMenuOpen } = useMenu();
    const router = useRouter();

    const [openDropdown, setOpenDropdown] = useState(null);

    const navItems = [
        { name: "Home", path: "/" },

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

        // ⭐ Freebies scroll-only item
        { name: "Freebies", scrollTo: "freebies" },
    ];

    // Prefetch regular routes
    useEffect(() => {
        navItems.forEach((item) => {
            if (!item.dropdown && item.path) router.prefetch(item.path);
        });
    }, []);

    // ⭐ Smooth scroll handler
    const handleScroll = (sectionId) => {
        if (window.location.pathname === "/") {
            // Already on home → smooth scroll
            document.getElementById(sectionId)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        } else {
            // Go home first → then scroll
            router.push("/");

            // Delay to ensure page loads
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 600);
        }
    };

    return (
        <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <img src="/logo1.png" alt="Logo" className="h-12 w-auto cursor-pointer" />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-10">
                    {navItems.map((item, index) =>
                        item.dropdown ? (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => setOpenDropdown(index)}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <p className="text-[16px] font-medium text-gray-900 cursor-pointer hover:text-indigo-600 transition">
                                    {item.name}
                                </p>

                                <div className="absolute left-0 top-6 w-full h-4"></div>

                                <AnimatePresence>
                                    {openDropdown === index && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.25 }}
                                            className="absolute left-0 mt-5 flex flex-col 
                                                bg-white shadow-lg rounded-md border 
                                                py-2 w-44 z-50"
                                        >
                                            {item.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.path}
                                                    className="px-4 py-2 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 transition"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : item.scrollTo ? (
                            // ⭐ Freebies scroll link (desktop)
                            <p
                                key={item.name}
                                onClick={() => handleScroll(item.scrollTo)}
                                className="relative text-[16px] font-medium text-gray-900 hover:text-indigo-600 transition cursor-pointer group"
                            >
                                {item.name}
                                <span className="absolute left-0 bottom-0 w-0 h-[2.5px] bg-indigo-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
                            </p>
                        ) : (
                            <Link
                                key={item.name}
                                href={item.path}
                                className="relative text-[16px] font-medium text-gray-900 hover:text-indigo-600 transition group"
                            >
                                {item.name}
                                <span className="absolute left-0 bottom-0 w-0 h-[2.5px] bg-indigo-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        )
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden flex items-center text-gray-700"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <Menu size={28} />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center space-y-6 text-center shadow-lg"
                    >
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="absolute top-5 right-6 text-gray-700 hover:text-indigo-600 transition"
                        >
                            <X size={30} />
                        </button>

                        {navItems.map((item) =>
                            item.dropdown ? (
                                <div key={item.name} className="flex flex-col items-center">
                                    <p className="text-[20px] font-semibold">{item.name}</p>

                                    <div className="flex flex-col mt-2 space-y-2">
                                        {item.dropdown.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.path}
                                                onClick={() => setMenuOpen(false)}
                                                className="text-[18px] text-gray-700 hover:text-indigo-600 transition"
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : item.scrollTo ? (
                                // ⭐ Freebies scroll link (mobile)
                                <p
                                    key={item.name}
                                    className="text-[20px] font-semibold hover:text-indigo-600 transition cursor-pointer"
                                    onClick={() => {
                                        setMenuOpen(false);
                                        setTimeout(() => handleScroll(item.scrollTo), 300);
                                    }}
                                >
                                    {item.name}
                                </p>
                            ) : (
                                <Link
                                    key={item.name}
                                    href={item.path}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-[20px] font-semibold hover:text-indigo-600 transition"
                                >
                                    {item.name}
                                </Link>
                            )
                        )}

                        <div className="flex items-end space-x-2">
                            <img src="/logo1.png" alt="Logo" className="h-12 w-auto" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
