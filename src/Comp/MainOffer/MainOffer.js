"use client"


import { Box, useMediaQuery, useTheme } from '@mui/material';
import React from 'react'
import DELEGoals from './DELEGoals/DELEGoals';
import ProgramStructure from './ProgramStructure/ProgramStructure';
import LearningSupport from './LearningSupport/LearningSupport';
import EnrollmentPricing from './EnrollmentPricing/EnrollmentPricing';

const MainOffer = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));


    return (
        <div>
            <Box className="w-full flex flex-col">
                <div className="flex flex-col items-center justify-center py-12">
                    <Box
                        className="w-full px-10 lg:px-36 md:px-14 py-4 text-white font-semibold text-lg mb-10"
                        sx={{
                            background: "linear-gradient(90deg, #3b0ca3 0%, #7026e2 100%)",
                        }}
                    >
                        <p className="text-white">WHAT WE OFFER: Your Path to Certified Spanish Mastery</p>
                    </Box>

                    <div className="px-8 lg:px-4 md:px-0 w-full max-w-4xl lg:max-w-7xl md:max-w-2xl flex flex-col items-center">
                        <Box display={"flex"} flexDirection={"column"} gap={2} py={isMobile ? 4 : isTablet ? 6 : 8}>
                            <p className='text-[17px] lg:text-[22px] md:text-[18px] text-center'>At Herencia Hispaña, we offer a specialized, results-driven program focused on achieving true conversational fluency and securing the official DELE Escolares certification. Our offerings are structured to provide personalized, high-quality instruction for young learners aged 11 to 17 years old.</p>
                        </Box>

                        <DELEGoals/>

                        <ProgramStructure/>


                        <LearningSupport/>


                        <EnrollmentPricing/>
                    </div>
                </div>
            </Box>
        </div>
    )
}

export default MainOffer