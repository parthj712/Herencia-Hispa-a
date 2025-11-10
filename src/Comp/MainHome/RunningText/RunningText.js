"use client";

import React, { useEffect, useState } from "react";

const RunningText = () => {
    const items = [
        { text: "Learn Spanish Fast", emoji: "⚡" },
        { text: "Live Online Class", emoji: "🎥" },
        { text: "DELE Certification Prep", emoji: "📘" },
        { text: "Free Study Materials", emoji: "📚" },
        { text: "500+ Students Trained", emoji: "👥" },
        { text: "Expert Native-Level Trainer", emoji: "🎓" },
    ];

    const [speed, setSpeed] = useState("14s");

    // ✅ Device-based speed control
    useEffect(() => {
        const width = window.innerWidth;

        if (width < 640) {
            // mobile
            setSpeed("5s");
        } else if (width < 1024) {
            // tablet
            setSpeed("20s");
        } else {
            // desktop
            setSpeed("15s");
        }
    }, []);

    return (
        <div className="py-6 relative">

            {/* Fade Left */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-12 
                      bg-gradient-to-r from-[#fffaf3] to-transparent z-[5]" />

            {/* Fade Right */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-12 
                      bg-gradient-to-l from-[#fffaf3] to-transparent z-[5]" />

            <div
                className="
          overflow-hidden whitespace-nowrap py-2 
          bg-[#fffaf3] 
          border-y border-purple-200 relative
        "
                style={{ "--speed": speed }}
            >
                <div className="animate-marquee flex gap-8">

                    {items.map((item, i) => (
                        <span key={i} className="flex items-center gap-2">
                            <span className="text-[15px]">{item.emoji}</span>

                            <span
                                className="w-2 h-2 rounded-full 
                bg-gradient-to-r from-[#5D17EB] to-[#350D85]"
                            ></span>

                            <span
                                className="
                  text-[15px] font-semibold
                  bg-gradient-to-r from-[#5D17EB] to-[#350D85]
                  bg-clip-text text-transparent
                "
                            >
                                {item.text}
                            </span>
                        </span>
                    ))}

                    {/* Duplicate Loop */}
                    {items.map((item, i) => (
                        <span key={`dup-${i}`} className="flex items-center gap-2">
                            <span className="text-[15px]">{item.emoji}</span>

                            <span
                                className="w-2 h-2 rounded-full 
                bg-gradient-to-r from-[#5D17EB] to-[#350D85]"
                            ></span>

                            <span
                                className="
                  text-[15px] font-semibold
                  bg-gradient-to-r from-[#5D17EB] to-[#350D85]
                  bg-clip-text text-transparent
                "
                            >
                                {item.text}
                            </span>
                        </span>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default RunningText;
