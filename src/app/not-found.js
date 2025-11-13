"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, Compass, Map } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen w-full relative overflow-hidden bg-[#FFF8E8] flex items-center justify-center px-4">

            {/* ⭐ Floating Purple Blobs */}
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full opacity-35 blur-3xl -left-32 -top-20"
                style={{
                    background: "linear-gradient(135deg, #5D17EB, #350D85)",
                }}
                animate={{ x: [-80, 80, -80], y: [-60, 60, -60] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full opacity-30 blur-3xl right-0 top-1/3"
                style={{
                    background: "linear-gradient(135deg, #350D85, #5D17EB)",
                }}
                animate={{ x: [100, -100, 100], y: [40, -40, 40] }}
                transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Spanish Icons floating softly */}
            <motion.div
                className="absolute text-5xl opacity-40"
                style={{ left: "15%", top: "25%" }}
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                🇪🇸
            </motion.div>

            <motion.div
                className="absolute text-5xl opacity-40"
                style={{ right: "12%", top: "40%" }}
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
                📘
            </motion.div>

            <motion.div
                className="absolute text-5xl opacity-40"
                style={{ left: "50%", bottom: "20%" }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
                🌎
            </motion.div>

            {/* MAIN CARD CONTENT */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-xl w-full bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-10 text-center"
                style={{
                    border: "2px solid transparent",
                    backgroundClip: "padding-box",
                    position: "relative",
                }}
            >
                {/* Outer border glow using purple gradient */}
                <div
                    className="absolute inset-0 rounded-3xl z-[-1]"
                    style={{
                        padding: "2px",
                        background: "linear-gradient(135deg, #5D17EB, #350D85)",
                        borderRadius: "inherit",
                        WebkitMask:
                            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                    }}
                />

                {/* Animated Icons Row */}
                <div className="flex justify-center gap-6 mb-6 opacity-80">
                    <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                        <Sparkles className="w-8 h-8 text-[#5D17EB]" />
                    </motion.div>

                    <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                        <Compass className="w-8 h-8 text-[#350D85]" />
                    </motion.div>

                    <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}>
                        <Map className="w-8 h-8 text-[#5D17EB]" />
                    </motion.div>
                </div>

                <motion.h1
                    className="text-[95px] font-extrabold text-[#5D17EB] drop-shadow-md leading-none"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    404
                </motion.h1>

                <motion.p
                    className="text-[22px] text-gray-700 mt-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Looks like you're <span className="font-semibold text-[#350D85]">lost in translation</span>.
                </motion.p>

                <motion.p
                    className="text-[17px] text-gray-600 mt-2 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    The page you're searching for does not exist.
                </motion.p>

                {/* BUTTON */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href="/">
                        <button
                            className="relative overflow-hidden px-8 py-3 rounded-xl text-white font-semibold shadow-md transition-all duration-300"
                        >
                            {/* Purple Gradient Background Animation */}
                            <motion.div
                                className="absolute inset-0 z-0 rounded-xl"
                                style={{
                                    background: "linear-gradient(270deg, #5D17EB, #350D85, #5D17EB)",
                                    backgroundSize: "300% 300%",
                                }}
                                animate={{
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                }}
                                transition={{
                                    duration: 4,
                                    ease: "linear",
                                    repeat: Infinity,
                                }}
                            />

                            <span className="relative z-10">Go Back Home</span>
                        </button>
                    </Link>
                </motion.div>

            </motion.div>
        </div>
    );
}
