"use client";

import React, { useState } from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

const CommonFaq = ({
    title = "FAQs",
    faqItems = [],
    bgColor = "#5D17EB",
    textColor = "white",
}) => {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down("md"));
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                mt: 8,
                px: isTablet ? 6 : 16,
            }}
        >
            {/* Title */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl md:text-3xl font-semibold mb-10 tracking-wide">
                    {title}
                </h2>
            </motion.div>

            {/* FAQ Accordions */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                {faqItems.map((item, index) => {
                    const panelId = `panel${index}`;
                    const isOpen = expanded === panelId;

                    return (
                        <Accordion
                            key={panelId}
                            expanded={isOpen}
                            onChange={handleChange(panelId)}
                            disableGutters
                            sx={{
                                backgroundColor: bgColor,
                                color: textColor,
                                mb: 3.5,
                                // boxShadow: "0px 4px 16px rgba(0,0,0,0.2)",
                                borderRadius: isOpen ? "4px" : "4px",
                                transition: "all 0.3s ease-in-out",
                                "&:before": { display: "none" },
                                "& .MuiAccordionSummary-root": {
                                    borderBottom: isOpen
                                        ? "1px solid rgba(255,255,255,0.3)"
                                        : "none",
                                },
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: textColor }} />}
                                aria-controls={`${panelId}-content`}
                                id={`${panelId}-header`}
                                sx={{
                                    px: 4,
                                    py: 0.5,
                                    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                                        transform: "rotate(180deg)",
                                    },
                                }}
                            >
                                <p className="text-[18px] font-semibold">{item.question}</p>
                            </AccordionSummary>

                            <AccordionDetails sx={{ px: 4, pb: 3 }}>
                                <p className="text-left text-[16px] leading-relaxed">
                                    {item.answer}
                                </p>
                            </AccordionDetails>
                        </Accordion>
                    );
                })}
            </motion.div>
        </Box>
    );
};

export default CommonFaq;
