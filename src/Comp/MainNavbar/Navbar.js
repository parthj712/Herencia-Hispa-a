"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react"; // lightweight icons (install if needed)

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Contact Us", path: "/contact" },
        { name: "Blogs", path: "/blogs" },
        { name: "What we offer", path: "/offer" },
        { name: "Why Spanish", path: "/why-spanish" },
    ];

    // Prefetch routes for faster navigation
    useEffect(() => {
        navItems.forEach((item) => router.prefetch(item.path));
    }, []);


    const toggleMenu = () => {
        if (isOpen) {
            setIsAnimating(true);
            setTimeout(() => {
                setIsOpen(false);
                setIsAnimating(false);
            }, 300); // same as animation duration
        } else {
            setIsOpen(true);
        }
    };

    return (
        <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img
                        src="/logo1.png"
                        alt="Logo"
                        className="h-12 w-auto text-indigo-600"
                    />
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden lg:flex items-center space-x-10">
                    {navItems.map((item) => (
                        <Link
                            prefetch={true}
                            key={item.name}
                            href={item.path}
                            className="relative text-[16px] font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-300 group"
                        >
                            {item.name}
                            <span className="mt-1 absolute left-0 bottom-0 w-0 h-[2.5px] bg-indigo-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden flex items-center justify-center text-gray-700"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="lg:hidden bg-white shadow-md border-t border-gray-100 animate-slideDown">
                    <div className="flex flex-col items-start space-y-4 px-6 py-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                onClick={() => setMenuOpen(false)} // close menu on tap
                                className="relative text-[16px] font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-300 group w-full"
                            >
                                {item.name}
                                <span className="mt-1 absolute left-0 bottom-0 w-0 h-[2.5px] bg-indigo-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
