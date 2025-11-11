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
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    autoplay: true,          // ✅ Auto scroll
    autoplaySpeed: 3500,     // ✅ Adjust speed (in ms)

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                dots: true,
                autoplay: true,          // ✅ also ensure autoplay works on tab/mobile
                autoplaySpeed: 3500,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                dots: true,
                autoplay: true,
                autoplaySpeed: 3500,
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
                <div className="relative max-w-6xl mx-auto px-4 z-10 py-2">
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
                    <div className="relative pt-7">
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

                        <span className=" absolute left-6 -top-4 lg:-top-8 md:-top-8 text-[#FDB900] text-[108px] font-bold -z-10 opacity-90">
                            “
                        </span>
                        <Slider ref={sliderRef} {...settings}>
                            {testimonialsData.map((test) => (
                                <motion.div
                                    key={test.id}
                                    className="px-4 pb-0 lg:pb-6 md:pb-6"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="py-16 lg:py-0 md:py-0 relative rounded-b-2xl rounded-tr-2xl p-0 lg:p-6 md:p-6 text-left text-black">
                                        {/* Opening Quote */}

                                        <div className="px-8 lg:px-16 md:px-16 flex flex-col items-center">
                                            <div className="flex items-center gap-4">
                                                <div>
                                                    <h4 className="text-[#FDB900] font-semibold text-[26px] lg:text-3xl md:text-2xl text-center">{test.name}</h4>
                                                    <p className="text-white  text-[16px] lg:text-[18px] md:text-[16px] text-center">
                                                        {test.location}
                                                    </p>
                                                </div>
                                            </div>

                                            <span className="text-[22px] text-[#FDB900] shadow-2xl">•</span>

                                            <p className="text-white text-center leading-relaxed text-[20px] lg:text-[18px] relative z-10">
                                                {test.feedback}
                                            </p>
                                        </div>


                                    </div>

                                </motion.div>
                            ))}
                        </Slider>
                        {/* Closing Quote */}
                        <span className="absolute right-6 -bottom-4 lg:-bottom-26 md:-bottom-26 text-[#FDB900] text-[108px] font-bold -z-10 opacity-90">
                            ”
                        </span>
                    </div>

                    <p className="lg:hidden md:hidden text-[16px] pt-0 lg:pt-9 md:pt-9">Swipe to see more</p>
                </div>
            </section>
        </motion.div>
    );
};

export default Testimonials;
