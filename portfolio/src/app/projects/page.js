"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "React.js CryptoCurrency",
    description:
      "وبسایت ارزهای دیجیتال مدرن و واکنشگرا با React.js , TailwindCSS, GraphQl",
    image: "/images/crypto.png",
    tech: ["React.js", "Tailwind", "GraphQl"],
    link: "https://crypto-app-one-pink.vercel.app/",
  },
  {
    title: "React.js Library",
    description: "وبسایت کتابخانه مدرن و واکنش‌گرا با React.js و TailwindCSS",
    image: "/images/library.png",
    tech: ["React.js", "Tailwind"],
    link: "https://library-fawn-one.vercel.app/",
  },
  {
    title: "React.js Weather",
    description: "وبسایت دمای هوا React.js",
    image: "/images/weather.png",
    tech: ["React.js"],
    link: "https://weather-ij9cgvyfi-ahmadrezas-projects-a87536cf.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen text-white py-12">
      <div className="container text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-blue-400"
        >
          نمونه کارها
        </motion.h2>
        <p className="text-gray-400 mt-3">پروژه‌هایی که انجام داده‌ام</p>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
              className="relative group rounded-2xl overflow-hidden shadow-2xl cursor-pointer bg-gray-900/30 backdrop-blur-md border border-gray-800 hover:shadow-[0_10px_30px_rgba(99,102,241,0.12)] hover:border-[color:var(--accent-from)] transition-all duration-500"
          >
            {/* تصویر پروژه */}
            <div className="relative w-full h-56">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-60 transition duration-500" />
            </div>

            {/* جزئیات پروژه */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* لینک پروژه */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-blue-400 hover:text-blue-300 transition"
              >
                مشاهده پروژه ↗
              </a>
            </div>

            {/* افکت گرادیان هنگام hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-40 bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 blur-2xl transition-all duration-700 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
