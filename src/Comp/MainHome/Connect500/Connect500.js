"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const Connect500 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [errors, setErrors] = useState({ email: "", phone: "" });


    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    const validate = () => {
        let valid = true;
        const newErrors = { email: "", phone: "" };

        // Email validation
        if (!email.trim()) {
            newErrors.email = "Email is required";
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Enter a valid email address";
            valid = false;
        }

        // Phone validation (must be 7–15 digits)
        if (!phone.trim()) {
            newErrors.phone = "Phone number is required";
            valid = false;
        } else if (!/^\d{7,10}$/.test(phone)) {
            newErrors.phone = "Enter a valid phone number";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Open Google Form if valid
            window.open("https://forms.gle/xJjxwJgZmxmixHbN8", "_blank");
        }
    };

    return (
        <div className="py-20">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-12 px-0 lg:px-0 md:px-0"
            >
                {/* Left Side - Background Image & Text */}
                <section
                    className="relative w-full lg:w-[full] h-[60vh] md:h-[50vh] lg:h-[50vh] flex items-center justify-center bg-cover bg-center rounded-none lg:rounded-2xl md:rounded-none shadow-lg"
                    style={{ backgroundImage: "url('/connect500.png')" }}
                >
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-white text-center px-6 md:px-8"
                    >
                        <h1 className="drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)] text-2xl md:text-[22px] lg:text-4xl font-semibold mb-4 leading-snug">
                            Connect with 500 Million Reasons to Learn
                        </h1>
                        {/* <p className="drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] text-base md:text-[16px]">
                            Spanish isn't just a language it's a global passport. Learning it
                            opens doors to friendships, travel, and connection with over
                            half a billion people worldwide.
                        </p> */}
                        <p className="drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] text-base md:text-[16px]">
                            Learn from the best Spanish teachers online in India, get personalized CBSE Spanish coaching, and
                            achieve your goals with our Spanish exam preparation and DELE coaching programs  all designed to make you fluent and confident in Spanish.
                        </p>
                    </motion.div>
                </section>

                {/* Right Side - Form */}
                <div className="w-full lg:w-[680px] bg-white p-8 rounded-none lg:rounded-2xl md:rounded-none shadow-lg">
                    <h2 className="text-2xl font-semibold mb-6">
                        Download the Free Module
                    </h2>

                    <form onSubmit={handleSubmit}>
                        {/* Email Input */}
                        <div className="mb-4">
                            
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className={`w-full px-4 py-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 ${errors.email
                                    ? "border-red-500 ring-red-300"
                                    : "border-gray-300 focus:ring-yellow-400"
                                    }`}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        {/* Phone Input */}
                        <div className="flex flex-col sm:flex-row gap-3 mb-4">
                            <div className="relative w-full sm:w-auto">
                                <select
                                    className="w-full appearance-none px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 pr-10"
                                    onClick={handleToggle}
                                    onBlur={() => setIsOpen(false)} // closes when focus is lost
                                >
                                    <option>India +91</option>
                                    <option>USA +1</option>
                                    <option>Spain +34</option>
                                    <option>Mexico +52</option>
                                </select>

                                <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600">
                                    {isOpen ? "▲" : "▼"}
                                </span>
                            </div>

                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Enter phone number"
                                className={`flex-1 px-4 py-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 ${errors.phone
                                    ? "border-red-500 ring-red-300"
                                    : "border-gray-300 focus:ring-yellow-400"
                                    }`}
                            />
                        </div>
                        {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                        )}

                        {/* Button */}
                        <motion.button
                            type="submit"
                            className="relative w-full overflow-hidden text-black font-semibold py-3 rounded-[10px] shadow-md hover:opacity-90 transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <motion.div
                                className="absolute inset-0 z-0 rounded-[10px]"
                                style={{
                                    background:
                                        "linear-gradient(270deg, #FDB900, #FFD563, #FDB900)",
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
                            ></motion.div>

                            <span className="relative z-10 tracking-[1px] text-[18px]">
                                Send me the module
                            </span>
                        </motion.button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default Connect500;
