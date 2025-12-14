"use client";
import { motion } from "framer-motion";
import { FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section className="relative min-h-screen w-full px-6 py-20 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">تماس با من</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            آماده همکاری و گفتگو در مورد پروژه‌های جدید هستم
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {[
            {
              icon: <FaGithub size={64} />,
              title: "GitHub",
              subtitle: "کدهای من",
              link: "https://github.com/ahmadreza",
              iconColor: "text-gray-400",
              hoverColor: "hover:text-gray-300",
              bgColor: "group-hover:shadow-gray-500/20"
            },
            {
              icon: <FaTelegram size={64} />,
              title: "Telegram",
              subtitle: "چت سریع",
              link: "https://t.me/ahmadreza",
              iconColor: "text-blue-400",
              hoverColor: "hover:text-blue-300",
              bgColor: "group-hover:shadow-blue-500/20"
            },
            {
              icon: <MdEmail size={64} />,
              title: "Gmail",
              subtitle: "ایمیل رسمی",
              link: "mailto:ahmadreza@example.com",
              iconColor: "text-red-400",
              hoverColor: "hover:text-red-300",
              bgColor: "group-hover:shadow-red-500/20"
            },
            {
              icon: <FaLinkedin size={64} />,
              title: "LinkedIn",
              subtitle: "شبکه حرفه‌ای",
              link: "https://linkedin.com/in/ahmadreza",
              iconColor: "text-blue-500",
              hoverColor: "hover:text-blue-400",
              bgColor: "group-hover:shadow-blue-600/20"
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative glass-effect glass-effect-hover rounded-2xl p-10 flex flex-col items-center text-center transition-all duration-500 border border-white/10 hover:border-white/20 ${item.bgColor}`}
            >
              {/* Icon */}
              <motion.div
                className={`${item.iconColor} ${item.hoverColor} mb-6 transition-all duration-300`}
                whileHover={{ rotate: 5 }}
              >
                {item.icon}
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                {item.title}
              </h3>
              <p className="text-gray-400 text-base group-hover:text-gray-300 transition-colors">
                {item.subtitle}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl blur-xl transition-all duration-500 pointer-events-none" />
            </motion.a>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-effect glass-effect-hover rounded-2xl p-8 max-w-2xl mx-auto border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">آماده شروع همکاری هستیم؟</h3>
            <p className="text-gray-400 mb-6">
              پروژه بعدی‌تان را با هم بسازیم. ایده‌های شما را با هم بررسی کنیم و بهترین راه‌حل را پیدا کنیم.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:ahmadreza@example.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                ارسال ایمیل
              </motion.a>
              <motion.a
                href="https://t.me/ahmadreza"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-3 glass-effect glass-effect-hover text-white font-semibold rounded-xl border border-white/20 transition-all duration-300"
              >
                چت در تلگرام
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
