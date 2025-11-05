"use client";

import React, { useRef } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const Teacher = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <Box
            sx={{
                py: 6,
                px: isMobile ? 2 : 6,
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: 6,
            }}
            ref={ref}
        >
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-[20px] md:text-3xl lg:text-[24px] font-semibold mb-8"
            >
                Meet Our Instructor
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
                <Box
                    display={"flex"}
                    flexDirection={isMobile || isTablet ? "column" : "row"}
                    alignItems="center"
                    gap={10}
                >
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <Image
                            src="/instructor.png"
                            alt="Instructor"
                            width={800}
                            height={800}
                            style={{
                                width: isMobile ? "90%" : isTablet ? "95%" : "400px",
                                height: "auto",
                                objectFit: "cover",
                            }}
                        />
                    </motion.div>

                    {/* Text Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    >
                        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={2}>
                            <p className="w-[320px] md:w-[600px] lg:w-[577px] text-center text-[18px] md:text-[20px] lg:text-[24px]">
                                "I founded this company because I believe learning Spanish should be
                                effective, engaging, and fast. As your instructor and the CEO, I personally
                                ensure that every feature — from our AI pronunciation feedback to our full
                                DELE exam preparation — is the best in the world. You are not just a student
                                here; you are our focus. Let’s make you fluent."
                            </p>
                            <Box>
                                <p className="text-center font-bold text-[20px] lg:text-[24px] tracking-[1px]">
                                    Mr. Amey Prabhudesai
                                </p>
                                <p className="text-center font-bold tracking-[1px] md:tracking-[0px]">
                                    (Head Instructor & CEO)
                                </p>
                            </Box>
                        </Box>
                    </motion.div>
                </Box>
            </motion.div>
        </Box>
    );
};

export default Teacher;
