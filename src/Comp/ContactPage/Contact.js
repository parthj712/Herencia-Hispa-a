"use client";
import React, { useState } from "react";
import {
    Card,
    CardContent,
    Box,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import CommonTextField from "../CustomTextField/CustomTextField";
import CommonSelectField from "../CommonSelectField/CommonSelectField";
import { motion } from "framer-motion";

const Contact = () => {


    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));



    const [formData, setFormData] = useState({
        fullName: "",
        mobile: "",
        email: "",
        city: "",
        language: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        setErrors((prev) => ({ ...prev, [field]: "" })); // clear error
    };

    const validate = () => {
        let newErrors = {};

        if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
        if (!formData.mobile.trim()) newErrors.mobile = "Mobile Number is required";
        else if (!/^[0-9]{10}$/.test(formData.mobile))
            newErrors.mobile = "Enter a valid 10-digit number";

        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            newErrors.email = "Enter a valid email";

        if (!formData.city) newErrors.city = "Please select your city";
        if (!formData.language) newErrors.language = "Please select a language";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            const message = `✅ *New Enquiry Received* %0A%0A
*👤 Full Name:* ${formData.fullName}%0A
*📞 Mobile Number:* ${formData.mobile}%0A
*✉️ Email:* ${formData.email}%0A
*📍 City:* ${formData.city}%0A
*💬 Language:* ${formData.language}%0A%0A
📲 _Sent via Website Contact Form_`;

            // your WhatsApp number (without +)
            const phoneNumber = "918767010062";

            // open WhatsApp with the message
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
        }


    };


    return (
        <Box className="w-full flex flex-col">
            <div className="flex flex-col items-center justify-center py-12">
                {/* Title Bar */}
                <Box
                    className="w-full px-10 lg:px-36 md:px-14 py-4 text-white font-semibold text-lg mb-10"
                    sx={{
                        background: "linear-gradient(90deg, #3b0ca3 0%, #7026e2 100%)",
                    }}
                >
                    <p className="text-white">Contact Us</p>
                </Box>

                <div className="px-8 lg:px-4 md:px-0 w-full max-w-4xl lg:max-w-7xl md:max-w-2xl flex flex-col lg:flex-row md:flex-col items-center gap-4 lg:gap-16 md:gap-10">
                    {/* Info Cards */}
                    <Box display={"flex"} flexDirection={isTablet ? "row" : "column"} gap={isMobile ? 2 : isTablet ? 4 : 6} alignItems={"center"} className="w-full lg:w-[1000px] md:w-[670px]">
                        <Card onClick={() => (window.location.href = "mailto:prabhudesaiamey95@gmail.com")} className="shadow-md rounded-xl bg-gray-50 h-full flex w-full hover:cursor-pointer">
                            <CardContent className="flex flex-col items-start justify-start w-full">
                                <span className="text-[28px] lg:text-[34px] md:text-[34px]">📧</span>
                                <div className="text-left md:text-left px-2">
                                    <p className="font-semibold text-[18px] lg:text-xl md:text-xl">Mail To</p>
                                    <p>prabhudesaiamey95@gmail.com</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card onClick={() => (window.location.href = "tel:+918767010062")} className="shadow-md rounded-xl bg-gray-50 h-full flex w-full hover:cursor-pointer">
                            <CardContent className="flex flex-col items-start justify-start w-full">
                                <span className="text-[28px] lg:text-[34px] md:text-[34px]">📞</span>
                                <div className="text-left md:text-left px-2">
                                    <p className="font-semibold text-[18px] lg:text-xl md:text-xl">Phone Number</p>
                                    <p>+91 8767010062</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Box>

                    {/* Enquiry Form */}
                    <div className="flex flex-col w-full py-4">
                        <p className="text-black font-semibold text-center mb-6 text-2xl lg:text-3xl md:text-3xl">
                            Enquire Now
                        </p>

                        <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit}>
                            <CommonTextField
                                placeholder="Enter Full Name"
                                value={formData.fullName}
                                onChange={(e) => handleChange("fullName", e.target.value)}
                                error={Boolean(errors.fullName)}
                                helperText={errors.fullName}
                            />
                            <CommonTextField
                                placeholder="Mobile Number"
                                value={formData.mobile}
                                onChange={(e) => handleChange("mobile", e.target.value)}
                                error={Boolean(errors.mobile)}
                                helperText={errors.mobile}
                            />
                            <CommonTextField
                                placeholder="Email Id"
                                value={formData.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                                error={Boolean(errors.email)}
                                helperText={errors.email}
                            />
                            <CommonSelectField
                                placeholder="Select City"
                                options={["Pune", "Mumbai", "Nagpur"]}
                                value={formData.city}
                                onChange={(e) => handleChange("city", e.target.value)}
                                error={Boolean(errors.city)}
                                helperText={errors.city}
                            />
                            <CommonSelectField
                                placeholder="Select Language"
                                options={["English", "Marathi", "Hindi"]}
                                value={formData.language}
                                onChange={(e) => handleChange("language", e.target.value)}
                                error={Boolean(errors.language)}
                                helperText={errors.language}
                            />

                            {/* Submit Button */}
                            <div className="flex justify-center pt-4">
                                <motion.button
                                    type="submit"
                                    className="relative overflow-hidden text-black font-semibold px-6 py-3 md:py-2 lg:py-2 rounded-[10px] shadow-md hover:opacity-90 transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <motion.div
                                        className="absolute inset-0 z-0 rounded-[10px]"
                                        style={{
                                            background: "linear-gradient(270deg, #FDB900, #FFD563, #FDB900)",
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
                                    />
                                    <span className="relative z-10 tracking-[0px] lg:tracking-[1px] md:tracking-[1px] text-[18px]">
                                        Submit
                                    </span>
                                </motion.button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default Contact;
