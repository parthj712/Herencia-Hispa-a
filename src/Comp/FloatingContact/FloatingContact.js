"use client";
import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const FloatingContact = () => {
  // Floating up-down motion for continuous bounce
  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    },
  };

  // Appear from bottom smoothly when page loads
  const appearVariant = {
    hidden: { opacity: 0, y: 80, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 14,
        delay: 0.6, // Slight delay to look natural
      },
    },
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 flex flex-col gap-4 z-50"
      variants={appearVariant}
      initial="hidden"
      animate="visible"
    >
      {/* Phone Button */}
      <motion.div
        animate={floatAnimation}
        whileHover={{ scale: 1.15, rotate: 10 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="relative group"
      >
        {/* Animated Glow */}
        <motion.div
          className="absolute inset-0 rounded-full bg-yellow-400 blur-xl opacity-50"
          animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.2, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <Link
          href="tel:+91 8767010062"
          className="relative bg-gradient-to-l from-[#FDB900] to-[#FFD563] rounded-full p-4 shadow-lg flex items-center justify-center"
        >
          <Phone className="w-6 h-6 text-black" />
        </Link>
      </motion.div>

      {/* Mail Button */}
      <motion.div
        animate={floatAnimation}
        whileHover={{ scale: 1.15, rotate: -10 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="relative group"
      >
        {/* Animated Glow */}
        <motion.div
          className="absolute inset-0 rounded-full bg-yellow-400 blur-xl opacity-50"
          animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.2, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <Link
          href="mailto:prabhudesaiamey95@gmail.com"
          className="relative bg-gradient-to-l from-[#FDB900] to-[#FFD563] rounded-full p-4 shadow-lg flex items-center justify-center"
        >
          <Mail className="w-6 h-6 text-black" />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default FloatingContact;
