import { Box, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image';
import React from 'react'

const Meet_Founder = () => {


    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));


    return (
        <div>
            <Box display={"flex"} flexDirection={"column"} width={"inherit"} py={isMobile ? 4 : isTablet ? 4 : 8}>
                <p className='text-[20px] lg:text-[24px] md:text-[22px]  font-semibold text-center'>Meet Our Founder & Your Instructor</p>

                <Box className="flex flex-col lg:flex-row md:flex-col w-full px-5 lg:px-0 md:px-5 py-16 items-center justify-center">
                    {/* <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                > */}
                    <Image
                        className='w-1/2 rounded-tl-2xl rounded-tr-2xl lg:rounded-tl-2xl lg:rounded-bl-2xl md:rounded-tl-2xl md:rounded-tr-2xl'
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
        </div>
    )
}

export default Meet_Founder