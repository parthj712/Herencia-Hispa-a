import { Box, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

const Mission_Vision = () => {


  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));


  return (
    <div>
      <Box display={"flex"} flexDirection={"column"} py={isMobile ? 6 : isTablet ? 6 : 8}>
        <Box
          className="w-full px-5 lg:px-5 md:px-5 py-4 text-white font-semibold text-lg bg-gradient-to-r from-[#350D85] to-[#5D17EB]"
        >
          <p className="text-[20px] lg:text-[24px] md:text-[22px] text-white">
            Our Vision &amp; Mission
          </p>
        </Box>

        <Box className="flex flex-col gap-3 w-full pl-5 lg:pl-5 md:pl-5 py-4">
          <Box display={"flex"} flexDirection={"column"}>
            <p className='text-[18px] lg:text-[20px] md:text-[18px] font-semibold py-1'>Our Mission</p>
            <p className='text-[17px] lg:text-[18px] md:text-[17px]'>Our mission is to help people confidently learn new languages, connect with others, and open doors to new opportunities. We believe language is not just about words it’s about building bridges and understanding different cultures.</p>
          </Box>

          <Box display={"flex"} flexDirection={"column"}>
            <p className='text-[18px]lg:text-[20px] md:text-[18px] font-semibold py-1'>Our Vision</p>
            <p className='text-[17px] lg:text-[18px] md:text-[17px]'>We dream of a world where language brings people closer, breaks down barriers, and creates lasting connections. Through fun, supportive, and practical learning experiences, we want to empower everyone to embrace diversity and feel at home anywhere in the world.</p>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Mission_Vision