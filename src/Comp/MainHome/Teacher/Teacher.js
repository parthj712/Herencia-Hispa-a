"use client";

import React from "react";
import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import Image from "next/image";

const Teacher = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

    return (
        <Box
            sx={{
                py: 6,
                px: isMobile ? 2 : 6,
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: 6
            }}
        >

            {/* <p
                className={`tracking-[1px] font-semibold mb-4 text-[1.5rem] text-shadow-sm ${isMobile ? "text-center" : "text-left"
                    }`}
            >
                Meet Our Instructor
            </p> */}

<h2 className="text-[20px] md:text-3xl lg:text-[24px] font-semibold mb-8">
                Meet Our Instructor
            </h2>



            <Box
                display={"flex"}
                flexDirection={isMobile || isTablet ? "column": "row"}
                alignItems="center"
                gap={10}
            >
                {/* Image Section */}

                <Image
                    src="/instructor.png"
                    alt="Instructor"
                    width={800} // large intrinsic width
                    height={800} // large intrinsic height
                    style={{
                        width: isMobile ? "80%" : isTablet ? "60%" : "400px", // control responsiveness
                        height: "auto",
                        objectFit: "cover",

                    }}
                />



                {/* Text Section */}
                <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={2}>
                    <p className="w-[320px] lg:w-[577px] text-center text-[16px] lg:text-[24px]">
                        "I founded this company because I believe learning Spanish should be
                        effective, engaging, and fast. As your instructor and the CEO, I
                        personally ensure that every feature from our AI pronunciation
                        feedback to our full DELE exam preparation is the best in the world.
                        You are not just a student here; you are our focus. Let’s make you
                        fluent."
                    </p>
                    <Box>
                        <p
                            className="text-center font-bold text-[20px] lg:text-[24px] tracking-[1px]"
                        >
                            Mr. Amey Prabhudesai
                        </p>

                        <p
                            className="text-center font-bold tracking-[1px]"
                        >
                            (Head Instructor & CEO)
                        </p>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Teacher;
