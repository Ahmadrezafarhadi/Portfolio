"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden pb-10">
      <div className="relative z-10 text-center px-6 container">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4"
        >
          سلام، من احمدرضا هستم 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg text-gray-300 max-w-xl mx-auto"
        >
          فرانت‌اند دولوپری هستم که عاشق ساخت رابط‌های کاربری تمیز و واکنش‌گرا
          با React و Next.js هستم.
        </motion.p>

        <motion.a
          href="/projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] text-white rounded-lg shadow-lg hover:opacity-95 transition"
        >
          دیدن نمونه‌کارها
        </motion.a>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.02 }}
          className="mt-4 ml-3 inline-block px-4 py-2 border border-gray-700 text-gray-200 rounded-lg hover:bg-gray-800 transition"
        >
          تماس بگیر
        </motion.a>
      </div>
    </section>
  );
}
