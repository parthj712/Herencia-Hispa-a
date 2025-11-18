"use client"


import { Box, useMediaQuery, useTheme } from '@mui/material'
import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";
import Link from 'next/link';

const Our_Philosopy = () => {


    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });


    return (
        <div>
            <Box
                className="w-full"
                display="flex"
                flexDirection="column"
                gap={6}
                py={isMobile ? 4 : isTablet ? 4 : 8}
            >

                <p className=' w-full text-[20px] lg:text-[24px] md:text-[22px]  font-semibold text-center'>Our Core Philosophy</p>

                <div className="w-full flex flex-col items-center gap-14">

                    <motion.div
                        // variants={container}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-8xl "
                    >
                        {[
                            "A DELE-Focused Curriculum",
                            "Personalized Excellence",
                            "Interactive & Engaging Lessons",
                            "Cultural Fluency for Global Citizens",
                        ].map((text, index) => (
                            <motion.div
                                key={index}
                                // variants={item}
                                className="bg-[#5D17EB] text-center text-[20px] sm:text-[20px] text-white font-semibold py-6 px-6 rounded-md shadow-md"
                            >
                                {text}
                            </motion.div>
                        ))}
                    </motion.div>

                    <Link
                        href="https://forms.gle/xJjxwJgZmxmixHbN8"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.button
                            className="relative overflow-hidden text-black font-semibold px-6 py-3 md:py-2 lg:py-2 rounded-[10px] shadow-md hover:opacity-90 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {/* Animated gradient background */}
                            <motion.div
                                className="absolute inset-0 z-0 rounded-[10px]"
                                style={{
                                    background:
                                        "linear-gradient(270deg, #FDB900, #FFD563, #FDB900)",
                                    backgroundSize: "300% 300%",
                                }}
                                animate={{
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                }}
                                transition={{
                                    duration: 4,
                                    ease: "linear",
                                    repeat: Infinity,
                                }}
                            ></motion.div>

                            {/* Button Text */}
                            <span className=" text-center relative z-10 text-[18px] lg:text-[22px] md:text-[18px]">Enroll Now & Start Speaking</span>
                        </motion.button>
                    </Link>
                </div>




            </Box>
        </div>
    )
}

export default Our_Philosopy