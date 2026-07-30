"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedLogo() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex h-full w-full items-center justify-center"
      >
        <Image
          src="/images/projects/logos/logo.png"
          alt="Faqeer Hussain Logo"
          width={220}
          height={220}
          priority
          className="h-full w-full object-contain"
        />
      </motion.div>
    </AnimatePresence>
  );
}
