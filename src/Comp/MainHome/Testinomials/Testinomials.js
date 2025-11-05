"use client";
import React from "react";
import { motion } from "framer-motion";
import { testimonialsData } from "./testimonialsData";

const Testinomials = () => {
    // Animation variants
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: { delay: i * 0.2, duration: 0.5 },
        }),
    };

    return (
        <motion.div
            className="py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <section
                className="relative py-16 bg-gradient-to-l from-[#350D85] to-[#5D17EB] text-center text-white bg-cover bg-center"
                style={{ backgroundImage: "url('/test_bg.png')" }}
            >
                <div className="relative max-w-6xl mx-auto px-4 z-10 py-7">
                    {/* Heading */}
                    <motion.h2
                        className="text-2xl md:text-3xl lg:text-3xl font-semibold mb-2 tracking-wide"
                        variants={sectionVariants}
                    >
                        Testimonials
                    </motion.h2>
                    <motion.p
                        className="text-lg mb-12"
                        variants={sectionVariants}
                        transition={{ delay: 0.3 }}
                    >
                        From 'Hola' to Fluent : Real Stories, Real Success.
                    </motion.p>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-4 pb-6 md:pb-0">
                        {testimonialsData.map((test, index) => (
                            <motion.div
                                key={test.id}
                                className="bg-gradient-to-b from-[#FCE39F] to-[#FDB900] rounded-b-2xl rounded-tr-2xl shadow-lg p-6 text-left text-black"
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={index}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={test.image}
                                        alt={test.name}
                                        className="w-18 h-18 rounded-b-2xl rounded-tr-2xl object-cover"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-lg">{test.name}</h4>
                                        <p className="text-gray-900 text-sm text-[16px]">
                                            {test.location}
                                        </p>
                                    </div>
                                </div>

                                <p className="text-gray-800 leading-relaxed text-[18px]">
                                    {test.feedback}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Testinomials;
