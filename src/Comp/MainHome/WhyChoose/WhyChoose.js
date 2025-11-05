"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WhyChoose = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const container = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.15 },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const features = [
        {
            emoji: "🌍",
            title: "Global Success, Local Support",
            text: "Dedicated to Indian & Global Young Learners",
        },
        {
            emoji: "🎓",
            title: "Precision Aligned Curriculum",
            text: "Tailored to Exact DELE Escolares Requirements",
        },
        {
            emoji: "💡",
            title: "Engaging & Interactive Learning",
            text: "Multi-media Lessons, Real-Life Context",
        },
        {
            emoji: "📊",
            title: "Tracked Progress, Personalized Mentorship",
            text: "Continuous Tracking & Personal Support",
        },
        {
            emoji: "💬",
            title: "Real-World Communication",
            text: "Fluency first communication",
        },
        {
            emoji: "🧠",
            title: "Comprehensive Skill Mastery",
            text: "All Round DELE skill preparation",
        },
    ];

    return (
        <div
            ref={ref}
            className="py-12 px-8 md:px-12 bg-white text-center overflow-hidden"
        >
            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-2xl md:text-3xl font-semibold mb-10 tracking-normal md:tracking-wide leading-[30px] md:leading-[40px] lg:leading-[40px]"
            >
                Why Choose <span className="text-[#6B2EFF]">Herencia Hispana</span> <br />
                for DELE Escolares Preparation
            </motion.h2>

            {/* Cards Grid */}
            <motion.div
                variants={container}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
            >
                {features.map((itemData, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="bg-gradient-to-l from-[#5D17EB] to-[#350D85] text-white rounded-xl p-6 shadow-md"
                    >
                        <div className="flex flex-col items-center text-center">
                            <span className="text-yellow-400 text-3xl mb-3">
                                {itemData.emoji}
                            </span>
                            <h3 className="font-semibold text-lg mb-1 text-[20px]">
                                {itemData.title}
                            </h3>
                            <p className="text-[15px] opacity-90">{itemData.text}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default WhyChoose;
