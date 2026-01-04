"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "CryptoCurrency",
    description:
      "وبسایت ارزهای دیجیتال مدرن و واکنشگرا با React.js , TailwindCSS, GraphQl",
    image: "/images/crypto.png",
    tech: ["React.js", "Tailwind", "GraphQl"],
    link: "https://crypto-app-one-pink.vercel.app/",
  },
  {
    title: "Library",
    description: "وبسایت کتابخانه مدرن و واکنش‌گرا با React.js و TailwindCSS",
    image: "/images/library.png",
    tech: ["React.js", "Tailwind"],
    link: "https://library-fawn-one.vercel.app/",
  },
  {
    title: "Weather",
    description: "وبسایت دمای هوا React.js",
    image: "/images/weather.png",
    tech: ["React.js"],
    link: "https://weather-app-sandy-zeta-44.vercel.app/",
  },
  {
    title: "Gold",
    description: "وبسایت طلا",
    image: "/images/gold.png",
    tech: ["React.js , Next.js , TailwindCss , Typescript"],
    link: "https://zarvit.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">نمونه کارها</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-slate-400 max-w-2xl mx-auto"
        >
          پروژه‌هایی که با عشق و خلاقیت ساخته‌ام
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative"
          >
            <div className="relative h-full glass-effect rounded-2xl overflow-hidden border border-slate-700/30 transition-all duration-500">
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-bold text-purple-300 mb-3 group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>

                    <p className="text-purple-200 font-bold text-sm leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.1 + 0.5 + i * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-500/30 hover:border-blue-400/50 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-300 group/btn"
                    >
                      <span>مشاهده پروژه</span>
                      <svg
                        className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </motion.a>
                  </motion.div>
                </div>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl transition-all duration-500 pointer-events-none" />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto border border-slate-700/30">
          <h3 className="text-2xl font-bold text-slate-50 mb-4">
            علاقه‌مند به همکاری هستید؟
          </h3>
          <p className="text-slate-400 mb-6">
            پروژه بعدی‌تان را با هم بسازیم. بیایید در مورد ایده‌های شما صحبت
            کنیم.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            شروع کنیم
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
