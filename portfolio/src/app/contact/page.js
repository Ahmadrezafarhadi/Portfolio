"use client";
import { motion } from "framer-motion";
import { FaGithub, FaTelegram, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="fixed inset-0 flex flex-col justify-center items-center text-white px-6 bg-transparent overflow-hidden">
      <div className="max-w-4xl text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-blue-400"
        >
          تماس با من
        </motion.h2>
        <p className="text-gray-400 mt-3">
          از طریق لینک‌های زیر می‌توانید با من در ارتباط باشید
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
      >
        {[
          {
            icon: <FaGithub size={40} />,
            title: "GitHub",
            link: "https://github.com/ahmadreza",
          },
          {
            icon: <FaTelegram size={40} />,
            title: "Telegram",
            link: "https://t.me/ahmadreza",
          },
          {
            icon: <FaEnvelope size={40} />,
            title: "Email",
            link: "mailto:ahmadreza@example.com",
          },
          {
            icon: <FaLinkedin size={40} />,
            title: "LinkedIn",
            link: "https://linkedin.com/in/ahmadreza",
          },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            className="group bg-gray-900/40 backdrop-blur-md border border-gray-800 hover:border-blue-600 transition-all duration-500 rounded-2xl p-6 flex flex-col justify-center items-center shadow-lg relative overflow-hidden"
          >
            <div className="text-blue-400 group-hover:text-blue-300 mb-3 transition">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-blue-400 group-hover:text-blue-300 transition">
              {item.title}
            </h3>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-40 bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 blur-2xl transition-all duration-700"></div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
