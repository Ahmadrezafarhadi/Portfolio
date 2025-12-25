"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaCss3Alt,
  FaJsSquare,
  FaHtml5,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden text-white">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/15 to-purple-500/15 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="block text-gradient">سلام،</span>
            <span className="block text-gradient mt-2">من احمدرضا هستم</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            فرانت‌اند دولوپر خلاق که عاشق ساخت رابط‌های کاربری شگفت‌انگیز و
            <span className="text-gradient font-semibold">
              {" "}
              تجربه‌های دیجیتال منحصربه‌فرد{" "}
            </span>
            با React و Next.js هستم.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {[
            {
              name: "React",
              icon: FaReact,
              color: "text-cyan-400 hover:text-cyan-300",
            },
            {
              name: "Next.js",
              icon: SiNextdotjs,
              color: "text-slate-300 hover:text-slate-200",
            },
            {
              name: "TypeScript",
              icon: SiTypescript,
              color: "text-blue-400 hover:text-blue-300",
            },
            {
              name: "Tailwind CSS",
              icon: SiTailwindcss,
              color: "text-cyan-400 hover:text-cyan-300",
            },
            {
              name: "Node.js",
              icon: FaNodeJs,
              color: "text-green-400 hover:text-green-300",
            },
            {
              name: "JavaScript",
              icon: FaJsSquare,
              color: "text-yellow-400 hover:text-yellow-300",
            },
            {
              name: "HTML5",
              icon: FaHtml5,
              color: "text-orange-400 hover:text-orange-300",
            },
            {
              name: "CSS3",
              icon: FaCss3Alt,
              color: "text-blue-500 hover:text-blue-400",
            },
            {
              name: "Git",
              icon: FaGitAlt,
              color: "text-red-400 hover:text-red-300",
            },
          ].map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="group relative"
            >
              <div className="p-3 glass-effect rounded-full hover:bg-slate-800/60 transition-all duration-300 cursor-pointer">
                <tech.icon
                  className={`w-6 h-6 ${tech.color} transition-colors duration-300`}
                  title={tech.name}
                />
              </div>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-slate-100 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {tech.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">مشاهده نمونه‌کارها</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="px-8 py-4 glass-effect glass-effect-hover text-white font-semibold rounded-xl border border-white/20 transition-all duration-300"
          >
            شروع همکاری
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToProjects}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="p-3 glass-effect glass-effect-hover rounded-full text-gray-400 hover:text-white transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.button>
      </motion.div>
    </section>
  );
}
