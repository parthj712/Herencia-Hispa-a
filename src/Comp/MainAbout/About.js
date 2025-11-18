"use client"


import { Box, useMediaQuery, useTheme } from '@mui/material'
import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import Mission_Vision from './Mission_Vision';
import Meet_Founder from './Meet_Founder';
import Our_Philosopy from './Our_Philosopy';

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

                        <Box display={"flex"} flexDirection={"column"} gap={2} py={isMobile ? 4 : isTablet ? 6 : 8}>
                            <p className='text-[20px] lg:text-[24px] md:text-[22px] font-semibold text-center'>A New Standard for Spanish Education </p>
                            <p className='text-[17px] lg:text-[22px] md:text-[18px] text-center'>Welcome to Herencia Hispaña where professional certification meets cultural passion. We are not just a coaching center; we are a specialized institute dedicated to transforming students into confident, certified Spanish speakers.</p>
                        </Box>

                        <Mission_Vision />


                        <Meet_Founder />

                        <Our_Philosopy />

                    </div>

                </div>
            </Box>
        </div>
    )
}

export default About