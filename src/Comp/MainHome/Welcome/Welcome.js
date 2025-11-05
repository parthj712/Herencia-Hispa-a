
"use client"

import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import Link from 'next/link' // Import Link if you're using Next.js
import React from 'react'
import { motion } from "framer-motion";

const Welcome = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    return (
        <div className='max-w-5xl md:max-w-2xl lg:max-w-7xl mx-auto px-6 lg:px-4 md:px-4'>
            <Box display={"flex"} flexDirection={isMobile ? "column" : "row"} justifyContent={"space-between"} py={4}>
                <p className='text-[34px] md:text-[24px] lg:text-[24px] font-semibold text-[#222222] pb-4 md:pb-0 lg:pb-0'>Hola! Start Speaking Spanish</p>
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
                        <span className="relative z-10 tracking-[1px] text-[18px] lg:text-[18px] md:text-[18px]">REGISTER NOW</span>
                    </motion.button>
                </Link>
            </Box>
        </div>
    )
}

export default Welcome