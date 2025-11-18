"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function DownloadModule() {
    const router = useRouter();

    const handleDownload = () => {
        // Start the download
        const link = document.createElement("a");
        link.href = "/Spanish_Free_Module_unlocked.pdf";
        link.download = "Spanish_Free_Module.pdf";
        link.click();

        // Redirect after a slight delay
        setTimeout(() => {
            router.push("/");
        }, 300); // 0.3 seconds (smooth for mobile)
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-2xl font-bold mb-4">Your Free Module is Ready</h2>

            <p className="text-gray-600 mb-6">Tap the button below to download.</p>

            <button
                onClick={handleDownload}
                className="hover:cursor-pointer px-6 py-3 rounded-xl bg-yellow-400 font-semibold"
            >
                📄 Download PDF
            </button>
        </div>
    );
}
