"use client";

import React from "react";
import { motion } from "framer-motion";

const advantages = [
    {
        title: "Global Reach",
        text: "Spanish is the second most-spoken native language globally, with over 500 million speakers.",
    },
    {
        title: "Career Boost",
        text: "In the Indian job market, proficiency in Spanish is a high-value skill that instantly sets a candidate apart.",
    },
    {
        title: "The Mobility Edge",
        text: "Spanish is the official language of 21 countries across Europe, the Americas, and Africa.",
    },
];

export default function GlobalAdvantage() {
    return (
        <div className="relative w-full py-24 overflow-hidden bg-white">

            {/* 🌍 Infinite Moving Background */}
            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                <motion.div
                    className="flex absolute inset-0 h-full"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        duration: 50,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    <img
                        src="/bg-3.png"
                        className="w-full h-full object-cover flex-shrink-0"
                        alt="map"
                    />
                    <img
                        src="/bg-3.png"
                        className="w-full h-full object-cover flex-shrink-0"
                        alt="map"
                    />
                </motion.div>
            </div>

            {/* CONTENT */}
            <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-2xl md:text-3xl font-semibold mb-16">
                    The Global & Economic Advantage
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {advantages.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="
                                bg-white/70 backdrop-blur-xs rounded-2xl 
                                p-6 shadow-md border border-[#f1e4b0]/50
                                hover:shadow-lg transition-all duration-300
                            "
                        >
                            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                            <p className="text-gray-700 leading-relaxed text-[18px]">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
