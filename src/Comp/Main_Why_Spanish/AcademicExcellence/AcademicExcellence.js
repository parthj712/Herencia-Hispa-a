"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, GraduationCap } from "lucide-react";

export default function AcademicExcellence() {
    return (
        <div className="hover:cursor-default w-full py-20 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                {/* Title */}
                <h2 className="text-center text-2xl md:text-3xl font-semibold mb-16 text-gray-900">
                    The Academic Excellence & Cultural Connection
                </h2>

                {/* Parent Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-stretch gap-8 mb-16"
                >
                    {/* Left Image */}
                    <motion.div
                        className="flex-1 overflow-hidden rounded-2xl h-auto"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                    >
                        <img
                            src="/why-spanish-1.jpg"
                            alt="Student holding certificate"
                            className="w-full object-cover rounded-2xl shadow-md max-h-[345px]"
                        />
                    </motion.div>


                    {/* Right Content */}
                    <div className="h-full flex-1 flex flex-col bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-md border border-[#f1e4b0]/40">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-[38px]">👨‍👩‍👧‍👦</span>
                            <h3 className="text-[24px] font-semibold ">
                                For Parents
                            </h3>
                        </div>
                        <p className="text-[20px] font-medium mb-4 ">
                            Competitive College Application
                        </p>

                        <ul className="space-y-2 list-disc pl-6 leading-relaxed">
                            <li>DELE Certification Guide</li>
                            <li>Enhanced Problem-Solving</li>
                            <li>Improved Memory & Attention</li>
                            <li>Increased Academic Resilience</li>
                            <li>Unlocking New Curricula & Global Education</li>
                        </ul>
                    </div>
                </motion.div>

                {/* Student Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col-reverse md:flex-row items-stretch gap-8"
                >
                    {/* Left Content */}
                    <div className="h-full flex-1 flex flex-col backdrop-blur-md rounded-2xl p-8 shadow-md border border-[#f1e4b0]/40">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-[38px]">🎓</span>
                            <h3 className="text-[24px]  font-semibold ">
                                For Students
                            </h3>
                        </div>
                        <p className="font-medium mb-4 text-[20px]">
                            Culture Connection and Confidence
                        </p>
                        <ul className="space-y-2 list-disc pl-6  leading-relaxed">
                            <li>Fosters Global Empathy and Cultural Sensitivity</li>
                            <li>Promotes Global Citizenship</li>
                            <li>
                                Enriches Academic Understanding (Literature, Art, History)
                            </li>
                            <li>
                                Enhances Personal Development and Soft Skills
                            </li>
                        </ul>
                    </div>

                    {/* Right Image */}
                    <motion.div
                        className="flex-1 overflow-hidden rounded-2xl h-auto"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                    >
                        <img
                            src="/why-spanish-2.jpg"
                            alt="Cultural festival in Spain"
                            className="w-full object-cover rounded-2xl shadow-md max-h-[315px]"
                        />
                    </motion.div>

                </motion.div>
            </div>
        </div>
    );
}
