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

    // ✅ Slick slider settings
    const settings = {
        dots: true, // enable dots
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false, // custom arrows only for desktop
        swipe: true,
        appendDots: (dots) => (
            <div
                style={{
                    marginTop: "30px",
                }}
            >
                <ul className="flex justify-center gap-3 md:gap-4">{dots}</ul>
            </div>
        ),
        customPaging: () => (
            <div className="w-3 h-3 bg-white/40 rounded-full transition-all duration-300" />
        ),
        responsive: [
            {
                breakpoint: 1024, // tablet
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true,
                },
            },
            {
                breakpoint: 768, // mobile
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
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
                <div className="relative max-w-7xl mx-auto px-4 z-10 py-7">
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

                    {/* Carousel */}
                    <div className="relative">
                        {/* Custom Arrows for Desktop */}
                        {/* Custom Arrows for Desktop */}
                        <div className="hidden lg:flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 z-20 pointer-events-none">
                            <button
                                onClick={() => sliderRef.current.slickPrev()}
                                className="pointer-events-auto bg-white/20 hover:bg-white/40 transition rounded-full p-3 -translate-x-20 shadow-lg backdrop-blur-md"
                            >
                                <ChevronLeft size={28} />
                            </button>
                            <button
                                onClick={() => sliderRef.current.slickNext()}
                                className="pointer-events-auto bg-white/20 hover:bg-white/40 transition rounded-full p-3 translate-x-20 shadow-lg backdrop-blur-md"
                            >
                                <ChevronRight size={28} />
                            </button>
                        </div>


                        <Slider ref={sliderRef} {...settings}>
                            {testimonialsData.map((test) => (
                                <motion.div
                                    key={test.id}
                                    className="px-3"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="bg-gradient-to-b from-[#FCE39F] to-[#FDB900] rounded-b-2xl rounded-tr-2xl shadow-lg p-6 text-left text-black min-h-[230px] flex flex-col gap-1">
                                        <div className="flex items-center gap-4 mb-4">
                                            {/* <img
                                                src={test.image}
                                                alt={test.name}
                                                className="w-18 h-18 rounded-b-2xl rounded-tr-2xl object-cover"
                                            /> */}
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

            {/* Custom dot styling */}
            <style jsx global>{`
  .slick-dots {
    bottom: -45px; /* moved slightly closer */
    
  }

  .slick-dots li button:before {
    display: none;
  }

  /* Default dot size reduced */
  .slick-dots li div {
    width: 6px;
    height: 6px;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  /* Active dot slightly larger */
  .slick-dots li.slick-active div {
    background-color: white !important;
    transform: scale(1.4);
  }
`}</style>

        </motion.div>
    );
};

export default Testimonials;
