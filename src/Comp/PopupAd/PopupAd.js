"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PopupAd = ({ img, link, countdownStart = 8 }) => {
    const [open, setOpen] = useState(false);
    const [countdown, setCountdown] = useState(countdownStart);
    const [clicks, setClicks] = useState(0);

    // Show popup after 1 sec
    useEffect(() => {
        const timer = setTimeout(() => setOpen(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    // Load click count
    useEffect(() => {
        const storedClicks = localStorage.getItem("popupAdClicks");
        if (storedClicks) setClicks(Number(storedClicks));
    }, []);

    // Countdown logic
    useEffect(() => {
        if (!open) return;

        const countdownTimer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    setOpen(false);
                    clearInterval(countdownTimer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(countdownTimer);
    }, [open]);

    useEffect(() => {
        console.log("Popup mounted ✅");
    }, []);

    // Handle image click
    const handleClick = () => {
        const newCount = clicks + 1;
        setClicks(newCount);
        localStorage.setItem("popupAdClicks", newCount);
    };

    if (!open) return null;

    return (
        <>

            <AnimatePresence>
                {open && (
                    <>
                        {/* ✅ Blackout Background */}
                        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]" />

                        {/* ✅ Popup Box */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="
                fixed top-1/2 left-1/2 
                -translate-x-1/2 -translate-y-1/2 
                z-[9999]
                bg-white/80 backdrop-blur-xl 
                shadow-xl border border-white/30 
                rounded-2xl p-3 w-72 
            "

                        >
                            {/* Countdown Badge */}
                            <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
                                Closing in {countdown}s
                            </div>

                            {/* Close Button */}
                            <button
                                className="absolute top-2 right-2 bg-black/30 hover:bg-black/60 text-white rounded-full p-1"
                                onClick={() => setOpen(false)}
                            >
                                <X size={18} />
                            </button>

                            {/* Ad Image */}
                            <Link href={link} onClick={handleClick}>
                                <Image
                                    src={img}
                                    alt="Ad Image"
                                    width={260}
                                    height={180}
                                    className="rounded-xl cursor-pointer"
                                />
                            </Link>
                        </motion.div>
                    </>
                )
                }
            </AnimatePresence>
        </>
    );

};

export default PopupAd;
