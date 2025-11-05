"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Join = () => {
    // Variants for the scroll animations
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
        },
    };

    return (
        <motion.section
            className="flex flex-col md:flex-row items-center justify-center gap-8 bg-white px-8 md:px-16 py-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            {/* Image Section */}
            <motion.div
                className="w-full md:w-1/2 flex justify-end"
                variants={imageVariants}
            >
                <img
                    src="/join.png"
                    alt="Student holding book"
                    className="rounded-lg max-w-full md:max-w-[500px] object-cover"
                />
            </motion.div>

            {/* Text Section */}
            <motion.div
                className="w-full md:w-1/2 text-center md:text-left"
                variants={textVariants}
            >
                <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-6 text-black">
                    Stop
                    <br />
                    Dreaming.
                    <br />
                    Start Speaking.
                </h2>

                <Link
                    href="https://forms.gle/xJjxwJgZmxmixHbN8"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <motion.button
                        className="relative overflow-hidden text-black font-semibold px-6 py-3 md:py-2 lg:py-2 rounded-[10px] shadow-md hover:opacity-90 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {/* Animated gradient background */}
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
                        <span className="text-[20px] relative z-10 tracking-[1px]">
                            VAMOS! Join The Fluent Movement.
                        </span>
                    </motion.button>
                </Link>
            </motion.div>
        </motion.section>
    );
};

export default Join;
