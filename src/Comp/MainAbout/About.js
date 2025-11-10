"use client"


import { Box, useMediaQuery, useTheme } from '@mui/material'
import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

const About = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <div>
            <Box className="w-full flex flex-col">
                <div className="flex flex-col items-center justify-center py-12">
                    {/* Title Bar */}
                    <Box
                        className="w-full px-10 lg:px-36 md:px-14 py-4 text-white font-semibold text-lg mb-10"
                        sx={{
                            background: "linear-gradient(90deg, #3b0ca3 0%, #7026e2 100%)",
                        }}
                    >
                        <p className="text-white">ABOUT US: The Herencia Hispaña Story</p>
                    </Box>

                    <div className="px-8 lg:px-4 md:px-0 w-full max-w-4xl lg:max-w-7xl md:max-w-2xl flex flex-col items-center">

                        <Box display={"flex"} flexDirection={"column"} gap={2} py={isMobile ? 10 : isTablet ? 10 : 8}>
                            <p className='text-[20px] lg:text-[24px] md:text-[22px] font-semibold text-center'>A New Standard for Spanish Education </p>
                            <p className='text-[17px] lg:text-[22px] md:text-[18px] text-center'>Welcome to Herencia Hispaña where professional certification meets cultural passion. We are not just a coaching center; we are a specialized institute dedicated to transforming students into confident, certified Spanish speakers.</p>
                        </Box>

                        <Box display={"flex"} flexDirection={"column"} py={isMobile ? 10 : isTablet ? 10 : 8}>
                            <Box
                                className="w-full px-5 lg:px-5 md:px-5 py-4 text-white font-semibold text-lg bg-gradient-to-r from-[#350D85] to-[#5D17EB]"
                            >
                                <p className="text-[20px] lg:text-[24px] md:text-[22px] text-white">
                                    Our Vision &amp; Mission
                                </p>
                            </Box>

                            <Box className="flex flex-col gap-3 w-full px-5 lg:px-5 md:px-5 py-4">
                                <Box display={"flex"} flexDirection={"column"}>
                                    <p className='text-[18px] lg:text-[20px] md:text-[18px] font-semibold py-1'>Our Mission</p>
                                    <p className='text-[16px] lg:text-[18px] md:text-[17px]'>Our mission is to help people confidently learn new languages, connect with others, and open doors to new opportunities. We believe language is not just about words it’s about building bridges and understanding different cultures.</p>
                                </Box>

                                <Box display={"flex"} flexDirection={"column"}>
                                    <p className='text-[18px]lg:text-[20px] md:text-[18px] font-semibold py-1'>Our Vision</p>
                                    <p className='text-[16px] lg:text-[18px] md:text-[17px]'>We dream of a world where language brings people closer, breaks down barriers, and creates lasting connections. Through fun, supportive, and practical learning experiences, we want to empower everyone to embrace diversity and feel at home anywhere in the world.</p>
                                </Box>
                            </Box>
                        </Box>

                        <Box display={"flex"} flexDirection={"column"} width={"inherit"} py={isMobile ? 10 : isTablet ? 10 : 8}>
                            <p className='text-[20px] lg:text-[24px] md:text-[22px]  font-semibold text-center'>Meet Our Founder & Your Instructor</p>

                            <Box className="flex flex-col lg:flex-row md:flex-col w-full px-5 lg:px-0 md:px-5 py-16 items-center justify-center">
                                {/* <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                > */}
                                <Image
                                    className='w-1/2 rounded-tl-2xl rounded-bl-2xl'
                                    src="/teacher.JPG"
                                    alt="Instructor"
                                    width={800}
                                    height={800}
                                    style={{
                                        width: isMobile ? "90%" : isTablet ? "50%" : "27%",
                                        height: "auto",
                                        objectFit: "cover",
                                    }}
                                />
                                {/* </motion.div> */}
                                <div className="flex flex-col items-center gap-6 bg-gradient-to-r from-[#FDB900] to-[#FFD563] py-10 px-6 rounded-2xl shadow-lg">
                                    <div className="flex flex-col items-center">
                                        <p className="text-[20px] lg:text-[24px] md:text-[24px] font-bold">Mr. Amey Prabhudesai</p>
                                        <p className="text-[18px] lg:text-[20px] md:text-[20px] font-semibold">Head Instructor & CEO</p>
                                    </div>

                                    <div className="flex flex-col items-center relative w-[320px] md:w-[600px] lg:w-[500px] text-center text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed">
                                        <span className="absolute left-10  -top-14 text-yellow-500 text-[108px] font-bold opacity-60">
                                            “
                                        </span>
                                        <p className="w-full relative z-10 text-[18px] lg:text-[22px] md:text-[22px] text-center">
                                            I founded this school because I believe Spanish learning should be effective, engaging, and fast. I ensure our tailored curriculum is 100% aligned with the DELE Escolares exam requirements while prioritizing real-world communication skills.
                                        </p>
                                        <span className="absolute right-10 -bottom-26 text-yellow-400 text-[108px] font-bold opacity-60">
                                            ”
                                        </span>
                                    </div>
                                </div>

                            </Box>
                        </Box>




                        <Box
                            className="w-full"
                            display="flex"
                            flexDirection="column"
                            gap={6}
                            py={isMobile ? 10 : isTablet ? 10 : 8}
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

                </div>
            </Box>
        </div>
    )
}

export default About