"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Importance = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    // Animation variants for staggered appearance
    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15, // delay between each card
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <div
            ref={ref}
            className="py-26 px-8 md:px-12 lg:px-7 bg-white text-center"
        >
            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-2xl md:text-2xl lg:text-3xl font-semibold mb-8 tracking-wide px-3 pb-6"
            >
                The Importance of Starting Early with DELE Escolares
            </motion.h2>

            {/* Grid Section with stagger animation */}
            <motion.div
                variants={container}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-7xl mx-auto"
            >
                {[
                    "Building a Strong Language Foundation",
                    "Superior Cognitive Development",
                    "Confidence and Motivation",
                    "Academic Pathway Planning",
                    "Competitive Advantage",
                    "Cultural Competence",
                ].map((text, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        className="bg-[#5D17EB] text-[20px] sm:text-[20px] text-white font-semibold py-6 px-6 rounded-md shadow-md"
                    >
                        {text}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Importance;
