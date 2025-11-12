"use client";

import React from "react";
import { Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

const supports = [
    { title: "Interactive Lessons", icon: "🎯" },
    { title: "Smart Tracking & Feedback", icon: "📊" },
    { title: "Pronunciation Feedback", icon: "🎤" },
    { title: "Multimedia Resources", icon: "💡" },
    { title: "Accessibility", icon: "🌍" },
    { title: "Daily Motivation", icon: "🔥" },
];

export default function LearningSupport() {
    return (
        <div className="w-full py-20 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
                    Unique Learning Technology & Support
                </h2>

                <p className="text-gray-700 max-w-3xl mx-auto mb-14 text-[18px] leading-relaxed">
                    We use modern techniques and platform features to ensure learning is
                    effective, confident, and engaging.
                </p>

                {/* Cards Grid */}
                <div
                    className="
            grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6
            overflow-x-auto lg:overflow-visible
            snap-x snap-mandatory scrollbar-hide pb-4
          "
                >
                    {supports.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="snap-start min-w-[45%] sm:min-w-0"
                        >
                            {/* Animated Aura Wrapper */}
                            <motion.div
                                className="relative rounded-[18px] p-[2px]"
                                animate={{
                                    boxShadow: [
                                        "0 0 10px rgba(93, 23, 235, 0.3)",
                                        "0 0 18px rgba(82, 25, 180, 0.45)",
                                        "0 0 10px rgba(93, 23, 235, 0.3)",
                                    ],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                {/* Inner background with smooth shimmer */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.02, 1],
                                        backgroundPosition: ["0% 50%", "200% 50%", "0% 50%"],
                                    }}
                                    transition={{
                                        duration: 10,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    style={{
                                        background:
                                            "linear-gradient(120deg, #5D17EB, #350D85, #5D17EB)",
                                        backgroundSize: "250% 250%",
                                        borderRadius: "16px",
                                        position: "relative",
                                        overflow: "hidden",
                                    }}
                                >
                                    {/* Moving Light Overlay (metallic shine) */}
                                    <motion.div
                                        className="absolute inset-0"
                                        style={{
                                            background:
                                                "linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)",
                                            backgroundSize: "200% 200%",
                                        }}
                                        animate={{
                                            backgroundPosition: ["-200% 0%", "200% 0%"],
                                        }}
                                        transition={{
                                            duration: 5,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                    />

                                    {/* Card Content */}
                                    <Card
                                        elevation={0}
                                        sx={{
                                            borderRadius: "16px",
                                            height: "150px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            background: "transparent",
                                            color: "#fff",
                                            position: "relative",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <CardContent className="p-4 flex flex-col items-center justify-center text-center relative z-10">
                                            <motion.div
                                                className="text-3xl mb-2"
                                                animate={{
                                                    rotate: [0, 2, -2, 0],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                }}
                                            >
                                                {item.icon}
                                            </motion.div>

                                            <h3 className="text-[15px] font-medium leading-snug">
                                                {item.title}
                                            </h3>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
