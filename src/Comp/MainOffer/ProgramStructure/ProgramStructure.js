"use client";

import React from "react";
import { Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

export default function ProgramStructure() {
    const sectionVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <div className="w-full py-20 overflow-hidden">
            <div className="max-w-7xl px-4 text-center mx-auto">
                {/* Title */}
                <motion.h2
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-semibold mb-4 "
                >
                    The Comprehensive 100-Hour Program Structure Section
                </motion.h2>

                <motion.p
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-14 text-[18px] leading-relaxed "
                >
                    Our curriculum is structured and led by our expert faculty with over 5
                    years of experience, ensuring a focused and results-driven approach.
                </motion.p>

                {/* Cards Grid */}
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {/* Card 1 */}
                    <Card
                        elevation={0}
                        sx={{
                            borderRadius: "18px",
                            backgroundColor: "#fff",
                            border: "1px solid #f0f0f0",
                            position: "relative",
                            overflow: "hidden",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-5px)",
                            },
                            "&::after": {
                                content: '""',
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                width: "100%",
                                height: "6px",
                                background:
                                    "linear-gradient(to right, #FDB900, #FECA3E, #FFDC7C)",
                            },
                        }}
                    >
                        <CardContent className="p-6 text-left">
                            <h3 className="font-semibold text-[22px] mb-3 ">
                                Total Intensive Coaching : 100-Hour Program
                            </h3>

                            <ul className="space-y-3 leading-relaxed list-disc pl-5  text-[16px]">
                                <li>
                                    <strong>60 Hours of Dedicated Teaching:</strong> Focused on
                                    building strong language fundamentals.
                                </li>
                                <li>
                                    <strong>40 Hours of Practice:</strong> Dedicated exclusively
                                    to question paper solving and doubt solving to ensure exam
                                    readiness.
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Card 2 */}
                    <Card
                        elevation={0}
                        sx={{
                            borderRadius: "18px",
                            backgroundColor: "#fff",
                            border: "1px solid #f0f0f0",
                            position: "relative",
                            overflow: "hidden",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-5px)",
                            },
                            "&::after": {
                                content: '""',
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                width: "100%",
                                height: "6px",
                                background:
                                    "linear-gradient(to right, #FDB900, #FECA3E, #FFDC7C)",
                            },
                        }}
                    >
                        <CardContent className="p-6 text-left">
                            <h3 className="font-semibold text-[22px] mb-3 ">
                                Program Highlights
                            </h3>
                            <ul className="space-y-3 leading-relaxed list-disc pl-5  text-[16px]">
                                <li>
                                    <strong>Expert Guidance:</strong> Instruction by faculty with
                                    5+ years of experience.
                                </li>
                                <li>
                                    <strong>Structured Curriculum:</strong> Based on a well-defined
                                    and proven curriculum.
                                </li>
                                <li>
                                    <strong>Specialized Workshops:</strong> Includes ‘4 seasons–4
                                    basics of Spanish workshop camps’.
                                </li>
                                <li>
                                    <strong>Personalized Instruction:</strong> Every student
                                    receives tailored, high-quality guidance.
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
