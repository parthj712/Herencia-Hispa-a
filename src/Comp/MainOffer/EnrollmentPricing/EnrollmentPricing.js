"use client";

import React from "react";
import { Card, CardContent, Button } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

export default function EnrollmentPricing() {
    return (
        <div
            className="my-20 rounded-4xl w-full py-20 relative overflow-hidden"
            style={{
                background:
                    "linear-gradient(270deg, #FFFDF4 0%, #FFF7E1 50%, #FFF3C4 100%)",
            }}
        >

            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    background:
                        "radial-gradient(circle at 50% 50%, rgba(255, 227, 122, 0.35), transparent 70%)",
                }}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />



            <div className="max-w-8xl text-center relative z-10">
                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-semibold mb-10 ">
                    Enrollment & Pricing
                </h2>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 pb-20">
                    {/* Left Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mx-9 text-left bg-white/80 p-6 rounded-2xl backdrop-blur-md max-w-sm lg:max-w-xl md:max-w-xl "
                    >
                        <h3 className="font-semibold text-[24px] mb-2">We offer</h3>
                        <p className="font-medium text-[20px] ">
                            Free Demo Class to all prospective students.
                        </p>
                    </motion.div>

                    {/* Pricing Cards */}
                    <div className="flex flex-col sm:flex-row gap-6">
                        {/* Indian Students */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                animate={{
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                    scale: [1, 1.02, 1],
                                }}
                                transition={{
                                    duration: 6,
                                    ease: "linear",
                                    repeat: Infinity,
                                }}
                                className="relative rounded-[18px] overflow-hidden"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #FFF9E3, #FFECA8, #FFF3C4)",
                                    backgroundSize: "200% 200%",
                                    borderRadius: "18px",
                                }}
                            >
                                {/* Shimmer Overlay */}
                                <motion.div
                                    className="absolute inset-0"
                                    style={{
                                        background:
                                            "linear-gradient(120deg, transparent 45%, rgba(255,255,255,0.4) 50%, transparent 55%)",
                                        backgroundSize: "200% 200%",
                                    }}
                                    animate={{
                                        backgroundPosition: ["-200% 0%", "200% 0%"],
                                    }}
                                    transition={{
                                        duration: 5,
                                        ease: "linear",
                                        repeat: Infinity,
                                    }}
                                />
                                <Card
                                    elevation={0}
                                    sx={{
                                        borderRadius: "18px",
                                        background: "transparent",
                                        color: "#2C2C2C",
                                        minWidth: 220,
                                        height: "100%",
                                        zIndex: 2,
                                        position: "relative",
                                    }}
                                >
                                    <CardContent className="p-6 text-center relative z-10">
                                        <h4 className="font-semibold text-[24px] mb-2">
                                            For Indian Students
                                        </h4>
                                        <p className="text-[20px] font-semibold">INR 15,000/-</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </motion.div>

                        {/* Abroad Students */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                animate={{
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                    scale: [1, 1.02, 1],
                                }}
                                transition={{
                                    duration: 6,
                                    ease: "linear",
                                    repeat: Infinity,
                                }}
                                className="relative rounded-[18px] overflow-hidden"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #E3E9FF, #BFD2FF, #DCE6FF)",
                                    backgroundSize: "200% 200%",
                                    borderRadius: "18px",
                                }}
                            >
                                {/* Shimmer Overlay */}
                                <motion.div
                                    className="absolute inset-0"
                                    style={{
                                        background:
                                            "linear-gradient(120deg, transparent 45%, rgba(255,255,255,0.3) 50%, transparent 55%)",
                                        backgroundSize: "200% 200%",
                                    }}
                                    animate={{
                                        backgroundPosition: ["-200% 0%", "200% 0%"],
                                    }}
                                    transition={{
                                        duration: 5,
                                        ease: "linear",
                                        repeat: Infinity,
                                    }}
                                />
                                <Card
                                    elevation={0}
                                    sx={{
                                        borderRadius: "18px",
                                        background: "transparent",
                                        color: "#1F1F1F",
                                        minWidth: 220,
                                        height: "100%",
                                        zIndex: 2,
                                        position: "relative",
                                    }}
                                >
                                    <CardContent className="p-6 text-center relative z-10">
                                        <h4 className="font-semibold text-[24px] mb-2">
                                            For Abroad Students
                                        </h4>
                                        <p className="text-[20px] font-semibold">USD 350/-</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Enroll Button */}
                <Link
                    href="https://forms.gle/xJjxwJgZmxmixHbN8"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hover:cursor-pointer relative overflow-hidden text-black font-semibold px-8 py-3 rounded-[10px] shadow-md hover:opacity-90 transition-all duration-300"
                        style={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "16px",
                            letterSpacing: "0.3px",
                        }}
                    >
                        {/* Animated Gradient Background */}
                        <motion.div
                            className="absolute inset-0 z-0 rounded-[10px]"
                            style={{
                                background:
                                    "linear-gradient(270deg, #FDB900, #FFD563, #FDB900)",
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
                        ></motion.div>

                        {/* Button Text */}
                        <span className="relative z-10 tracking-[0.5px]">
                            Enroll Now & Start Speaking
                        </span>
                    </motion.button>
                </Link>
            </div>
        </div>
    );
}
