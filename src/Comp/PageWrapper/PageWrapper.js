"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function PageWrapper({ children }) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key="page"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="min-h-screen flex flex-col"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
