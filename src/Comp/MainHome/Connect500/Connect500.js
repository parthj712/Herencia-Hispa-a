"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Country } from "country-state-city";

const Connect500 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [errors, setErrors] = useState({ email: "", phone: "" });

    const [successPopup, setSuccessPopup] = useState(false);
    const countryCodes = Country.getAllCountries();

    // ✅ Auto-detect user country code based on IP
    useEffect(() => {
        fetch("https://ipapi.co/json/")
            .then((r) => r.json())
            .then((data) => {
                if (data.country_calling_code) {
                    setCountry(data.country_calling_code.replace("+", ""));
                } else {
                    setCountry("91"); // default fallback
                }
            })
            .catch(() => setCountry("91"));
    }, []);

    const validate = () => {
        let valid = true;
        let newErrors = { email: "", phone: "" };

        if (!email.trim()) {
            newErrors.email = "Email is required";
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Enter a valid email";
            valid = false;
        }

        if (!phone.trim()) {
            newErrors.phone = "Phone number is required";
            valid = false;
        } else if (!/^\d{7,12}$/.test(phone)) {
            newErrors.phone = "Enter a valid phone number";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            // ✅ Show success popup
            setSuccessPopup(true);
            setTimeout(() => setSuccessPopup(false), 2500);

            // ✅ Open Google Form
            // window.open("https://forms.gle/xJjxwJgZmxmixHbN8", "_blank");

            // ✅ Auto-download free module
            const link = document.createElement("a");
            link.href = "/Herencia Hispaña Course Brochure.pdf";
            link.download = "Herencia Hispaña Course Brochure.pdf";
            link.click();

            // ✅ Send WhatsApp message automatically
            //             const whatsappMessage = `
            // ✅ *New Module Request*

            // 📧 *Email:* ${email}
            // 📞 *Phone:* +${country} ${phone}

            // 📘 _Requested Free Module from Website_
            // `;

            //             const adminPhone = "918767010062";
            //             window.open(
            //                 `https://wa.me/${adminPhone}?text=${encodeURIComponent(whatsappMessage)}`,
            //                 "_blank"
            //             );
        }
    };

    return (
        <div className="py-20 relative">

            {/* ✅ Success Popup */}
            {successPopup && (
                <div className="success-popup fixed top-6 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-[9999]">
                    ✅ Module is downloading...
                </div>
            )}

            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-12"
            >
                {/* Left Side */}
                <section
                    className="relative w-full h-[60vh] md:h-[50vh] flex items-center justify-center bg-cover bg-center rounded-none lg:rounded-2xl shadow-lg"
                    style={{ backgroundImage: "url('/connect500.png')" }}
                >
                    <div className="text-white text-center px-6">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 drop-shadow">
                            Connect with 500 Million Reasons to Learn
                        </h1>
                        <p className="drop-shadow text-base md:text-[16px]">
                            Learn from India’s best Spanish teachers. Get personalized coaching for CBSE, DELE, and fluency.
                        </p>
                    </div>
                </section>

                {/* Right Side Form */}
                <div className="w-full lg:w-[680px] bg-white p-8 rounded-none lg:rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-semibold mb-6">Download the Free Module</h2>

                    <form onSubmit={handleSubmit}>
                        {/* ✅ Email */}
                        <div className="mb-4">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className={`w-full px-4 py-3 rounded-xl bg-[#F5F7FA] text-gray-700 border ${errors.email ? "border-red-400" : "border-[#E3E6EA]"
                                    } focus:outline-none focus:ring-2 ${errors.email ? "ring-red-300" : "ring-yellow-300"
                                    }`}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        {/* ✅ Country Code + Phone */}
                        <div className="flex flex-col sm:flex-row gap-3 mb-4">

                            {/* Country Code Dropdown */}
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
                                className={`w-full sm:w-1/2 px-4 py-3 rounded-xl bg-[#F5F7FA] text-gray-700 border ${errors.phone ? "border-red-400" : "border-[#E3E6EA]"
                                    } focus:outline-none focus:ring-2 ${errors.phone ? "ring-red-300" : "ring-yellow-300"
                                    }`}
                            />
                        </div>

                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}

                        {/* ✅ Button */}
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
