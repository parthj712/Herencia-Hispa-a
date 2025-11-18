"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Country } from "country-state-city";

const Connect500 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("91"); // default India
    const [errors, setErrors] = useState({ email: "", phone: "" });

    const countryCodes = Country.getAllCountries();

    // ✅ COUNTRY-WISE PHONE VALIDATION
    const validatePhoneByCountry = (countryCode, phoneNumber) => {
        switch (countryCode) {
            case "91":
                return /^[6-9]\d{9}$/.test(phoneNumber);

            case "1":
                return /^[2-9]\d{2}[2-9]\d{6}$/.test(phoneNumber);

            case "34":
                return /^[6-7]\d{8}$/.test(phoneNumber);

            case "52":
                return /^\d{10}$/.test(phoneNumber);

            default:
                return /^\d{6,15}$/.test(phoneNumber);
        }
    };

    // ✅ FULL VALIDATION
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

        // Phone validation (based on selected country)
        if (!phone.trim()) {
            newErrors.phone = "Phone number is required";
            valid = false;
        } else if (!validatePhoneByCountry(country, phone)) {
            newErrors.phone = "Invalid phone number for selected country";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (validate()) {
    //         window.open("https://forms.gle/xJjxwJgZmxmixHbN8", "_blank");

    //         const link = document.createElement("a");
    //         link.href = "/Free_Module.pdf";
    //         link.download = "Spanish_Free_Module.pdf";
    //         link.click();
    //     }
    // };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {

            // 2️⃣ Instead of auto-download, redirect to a download page or show button
            window.location.href = "/download-module";
        }
    };


    return (
        <div className="py-20">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-12"
            >
                {/* LEFT SIDE */}
                <section
                    className="relative w-full h-[60vh] md:h-[50vh] flex items-center justify-center bg-cover bg-center rounded-none lg:rounded-2xl shadow-lg"
                    style={{ backgroundImage: "url('/connect500.png')" }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-white text-center px-6 md:px-8"
                    >
                        <h1 className="drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)] text-2xl md:text-[22px] lg:text-4xl font-semibold mb-4 leading-snug">
                            Connect with 500 Million Reasons to Learn
                        </h1>

                        <p className="drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] text-base md:text-[16px]">
                            Learn from the best Spanish teachers online in India, get personalized CBSE Spanish coaching,
                            and achieve your goals with our Spanish exam preparation and DELE coaching programs.
                        </p>
                    </motion.div>
                </section>

                {/* RIGHT SIDE - FORM */}
                <div className="w-full lg:w-[680px] bg-white p-8 rounded-none lg:rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-semibold mb-6">Download the Free Module</h2>

                    <form onSubmit={handleSubmit}>
                        {/* ✅ Email Input */}
                        <div className="mb-4">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className={`w-full px-4 py-3 rounded-xl bg-[#F5F7FA] text-gray-700 border ${errors.email ? "border-red-400 ring-red-300" : "border-[#E3E6EA] ring-yellow-300"
                                    } focus:outline-none focus:ring-2`}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        {/* ✅ Country + Phone */}
                        <div className="flex flex-col sm:flex-row gap-3 mb-4">
                            {/* Country Dropdown */}
                            <div className="relative w-full sm:w-1/2">
                                <select
                                    className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] text-gray-700 border border-[#E3E6EA] 
                                    focus:outline-none focus:ring-2 focus:ring-yellow-300 appearance-none"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                >
                                    {countryCodes.map((c) => (
                                        <option key={c.isoCode} value={c.phonecode}>
                                            {c.name} +{c.phonecode}
                                        </option>
                                    ))}
                                </select>

                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                                    ▼
                                </span>
                            </div>

                            {/* Phone Input */}
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Enter phone number"
                                className={`w-full sm:w-1/2 px-4 py-3 rounded-xl bg-[#F5F7FA] text-gray-700 border ${errors.phone ? "border-red-400 ring-red-300" : "border-[#E3E6EA] ring-yellow-300"
                                    } focus:outline-none focus:ring-2`}
                            />
                        </div>

                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}

                        {/* ✅ Submit Button */}
                        <motion.button
                            type="submit"
                            className="relative w-full overflow-hidden text-black font-semibold py-3 rounded-[10px] shadow-md mt-6"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <motion.div
                                className="absolute inset-0 z-0 rounded-[10px]"
                                style={{
                                    background: "linear-gradient(270deg, #FDB900, #FFD563, #FDB900)",
                                    backgroundSize: "300% 300%",
                                }}
                                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                            />
                            <span className="relative z-10 text-[18px] tracking-wide">
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
