"use client";

import React from "react";
import { Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

const goals = [
    {
        title: "DELE Certification Preparation",
        text: "Our programs combine structured learning with official certification preparation, ensuring students master Spanish and excel in the DELE Escolares examination.",
        icon: "📝",
    },
    {
        title: "Targeted Age & Exam Levels Covered",
        text: "Specifically designed for young learners aged 11 to 17 years old, we prepare students for DELE A1 Escolares and A2/B1 Escolares.",
        icon: "🎯",
    },
    {
        title: "DELE Registration Guidance",
        text: "Once enrolled, Herencia Hispana will guide you through the entire exam registration process, making it stress-free and simple.",
        icon: "📄",
    },
];

export default function DELEGoals() {
    return (
        <div className="w-full py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-center text-2xl md:text-3xl font-semibold mb-16 tracking-wide ">
                    The Official DELE Certification Goal
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-12">
                    {goals.map((g, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card
                                elevation={0}
                                sx={{
                                    borderRadius: "18px",
                                    height: "100%",
                                    backgroundColor: "#fff",
                                    position: "relative",
                                    overflow: "hidden",
                                    border: "1px solid #f0f0f0",
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
                                    "&:hover": {
                                        transform: "translateY(-4px)",
                                        transition: "all 0.3s ease",
                                    },
                                }}
                            >
                                <CardContent className="p-6">
                                    <div className="text-4xl mb-4 ">{g.icon}</div>

                                    <h3 className="font-semibold text-[20px] mb-3 ">
                                        {g.title}
                                    </h3>

                                    <p className=" opacity-90 leading-relaxed text-[16px]">
                                        {g.text}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
