"use client";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { testimonialsData } from "./testimonialsData";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
    const sliderRef = React.useRef(null);

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const settings = {
        dots: true, // show dots only for mobile
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        appendDots: (dots) => (
            <div>
                <ul> {dots} </ul>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024, // tablet
                settings: {
                    slidesToShow: 2,
                    dots: false, // hide dots on tablet
                },
            },
            {
                breakpoint: 600, // mobile
                settings: {
                    slidesToShow: 1,
                    dots: true, // show dots only on mobile
                },
            },
        ],
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
                        {/* Custom arrows (only visible on desktop) */}
                        <button
                            className="absolute -left-15 top-1/2 transform -translate-y-1/2 hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 transition"
                            onClick={() => sliderRef.current.slickPrev()}
                        >
                            <ChevronLeft className="text-white" />
                        </button>

                        <button
                            className="absolute -right-15 top-1/2 transform -translate-y-1/2 hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 transition"
                            onClick={() => sliderRef.current.slickNext()}
                        >
                            <ChevronRight className="text-white" />
                        </button>

                        <Slider ref={sliderRef} {...settings}>
                            {testimonialsData.map((test, index) => (
                                <motion.div
                                    key={test.id}
                                    className="px-4"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="bg-gradient-to-b from-[#FCE39F] to-[#FDB900] rounded-b-3xl rounded-tr-3xl rounded- shadow-lg p-6 text-left text-black">
                                        <div className="flex items-center gap-4 mb-4">
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
                                    </div>
                                </motion.div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Testimonials;
