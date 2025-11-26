"use client";
import React from "react";

export default function TopBar() {
    return (
        <div className="w-full bg-indigo-600 text-white py-2 overflow-hidden">
            <div className="marquee-wrapper">
                <div className="marquee-content">
                    Batches starting from 1 Jan 2026 — Enroll Now! 🔥 •&nbsp;
                    Batches starting from 1 Jan 2026 — Enroll Now! 🔥 •&nbsp;
                    Batches starting from 1 Jan 2026 — Enroll Now! 🔥 •&nbsp;
                </div>

                {/* Duplicate for seamless loop */}
                <div className="marquee-content">
                    Batches starting from 1 Jan 2026 — Enroll Now! 🔥 •&nbsp;
                    Batches starting from 1 Jan 2026 — Enroll Now! 🔥 •&nbsp;
                    Batches starting from 1 Jan 2026 — Enroll Now! 🔥 •&nbsp;
                </div>
            </div>
        </div>
    );
}
