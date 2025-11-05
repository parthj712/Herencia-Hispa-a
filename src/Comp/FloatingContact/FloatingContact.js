"use client";
import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useMenu } from "../MenuProvider/MenuProvider";


const FloatingContact = () => {
  const { menuOpen } = useMenu(); // 👈 get menu state

  if (menuOpen) return null; // ✅ hide when menu is open

  const floatAnimation = {
    y: [0, -10, 0],
    transition: { duration: 3, ease: "easeInOut", repeat: Infinity },
  };

  const appearVariant = {
    hidden: { opacity: 0, y: 80, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 14, delay: 0.6 },
    },
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 flex flex-col gap-4 z-50"
      variants={appearVariant}
      initial="hidden"
      animate="visible"
    >
      {/* Phone */}
      <motion.div
        animate={floatAnimation}
        whileHover={{ scale: 1.15, rotate: 10 }}
        className="relative group"
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-yellow-400 blur-xl opacity-50"
          animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <Link
          href="tel:+91 8767010062"
          className="relative bg-gradient-to-l from-[#FDB900] to-[#FFD563] rounded-full p-4 shadow-lg flex items-center justify-center"
        >
          <Phone className="w-6 h-6 text-black" />
        </Link>
      </motion.div>

      {/* Mail */}
      <motion.div
        animate={floatAnimation}
        whileHover={{ scale: 1.15, rotate: -10 }}
        className="relative group"
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-yellow-400 blur-xl opacity-50"
          animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
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
