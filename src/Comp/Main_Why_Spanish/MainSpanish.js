"use client"


import { Box, useMediaQuery, useTheme } from '@mui/material';
import React from 'react'
import GlobalAdvantage from './GlobalAdvantage/GlobalAdvantage';
import AcademicExcellence from './AcademicExcellence/AcademicExcellence';
import EnrollmentPricing from '../MainOffer/EnrollmentPricing/EnrollmentPricing';

const MainSpanish = () => {

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
                        <p className="text-white">WHY SPANISH: Your Global Future Starts Here</p>
                    </Box>

                    <div className="px-8 lg:px-4 md:px-0 w-full max-w-4xl lg:max-w-7xl md:max-w-2xl flex flex-col items-center">
                        <Box display={"flex"} flexDirection={"column"} gap={2} py={isMobile ? 4 : isTablet ? 6 : 8}>
                            <p className='text-[17px] lg:text-[22px] md:text-[18px] text-center'>A concise, powerful summary like "Unlock unparalleled career opportunities, academic excellence, and a world of cultural richness.</p>
                        </Box>
                    </div>

                    <GlobalAdvantage />

                    <div className="px-8 lg:px-4 md:px-0 w-full max-w-4xl lg:max-w-7xl md:max-w-2xl flex flex-col items-center">
                        
                        <AcademicExcellence />

                        <EnrollmentPricing />
                        
                    </div>

                </div>
            </Box>
        </div>
    )
}

export default MainSpanish