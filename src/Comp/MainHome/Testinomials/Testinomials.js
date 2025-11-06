"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { testimonialsData } from "./testimonialsData";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
    const sliderRef = useRef(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); // ✅ ensures width is accurate (client-side)
    }, []);

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                },
            },
        ],
    };

    // ✅ Only render slider after mount (ensures correct breakpoint)
    if (!mounted) return null;

    return (
        <motion.div
            className="py-12"
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
                    <motion.h2
                        className="text-2xl md:text-3xl font-semibold mb-2 tracking-wide"
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

                    {/* Slider */}
                    <div className="relative">
                        {/* Custom arrows (desktop only) */}
                        <button
                            className="absolute -left-10 top-1/2 transform -translate-y-1/2 hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 transition"
                            onClick={() => sliderRef.current.slickPrev()}
                        >
                            <ChevronLeft className="text-white" />
                        </button>

                        <button
                            className="absolute -right-10 top-1/2 transform -translate-y-1/2 hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 transition"
                            onClick={() => sliderRef.current.slickNext()}
                        >
                            <ChevronRight className="text-white" />
                        </button>

                        <Slider ref={sliderRef} {...settings}>
                            {testimonialsData.map((test) => (
                                <motion.div
                                    key={test.id}
                                    className="px-4 pb-6"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="bg-gradient-to-b from-[#fce094] to-[#FDB900] rounded-b-2xl rounded-tr-2xl shadow-lg p-6 text-left text-black">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div>
                                                <h4 className="font-semibold text-[20px] lg:text-2xl md:text-2xl">{test.name}</h4>
                                                <p className="text-gray-900 text-[16px] lg:text-[18px] md:text-[16px]">
                                                    {test.location}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-gray-800  leading-relaxed text-[16px] lg:text-[18px]">
                                            {test.feedback}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </Slider>
                    </div>

                    <p className="lg:hidden md:hidden text-[16px] pt-9">Swipe to see more</p>
                </div>
            </section>
        </motion.div>
    );
};

export default Testimonials;
