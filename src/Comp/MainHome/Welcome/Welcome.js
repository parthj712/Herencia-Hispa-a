
"use client"

import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import Link from 'next/link' // Import Link if you're using Next.js
import React from 'react'

const Welcome = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    return (
        <div className='max-w-5xl md:max-w-2xl lg:max-w-7xl mx-auto px-4'>
            <Box display={"flex"} flexDirection={isMobile ? "column" : "row"} justifyContent={"space-between"} py={4}>
                <p className='text-[34px] md:text-[24px] lg:text-[24px] font-semibold text-[#222222] pb-4 md:pb-0 lg:pb-0'>Hola! Start Speaking Spanish</p>
                <Link
                    href="https://forms.gle/xJjxwJgZmxmixHbN8"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="hover:cursor-pointer tracking-[0px] xl:tracking-[1px] lg:tracking-[1px] bg-gradient-to-l from-[#FDB900] to-[#FFD563] text-black font-semibold px-6 py-3 md:py-2 lg:py-2 rounded-[10px] shadow-md hover:opacity-90 transition-all duration-300">
                        REGISTER NOW
                    </button>
                </Link>
            </Box>
        </div>
    )
}

export default Welcome