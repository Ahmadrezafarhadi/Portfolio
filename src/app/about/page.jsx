"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import profile from "../../../public/images/profile.jpg";
import {
  FaCode,
  FaPaintBrush,
  FaTools,
  FaRocket,
  FaHeart,
  FaCoffee,
} from "react-icons/fa";

export default function AboutPage() {
  const skills = [
    { name: "HTML5", level: 95, category: "Frontend", icon: "🌐" },
    { name: "CSS3", level: 95, category: "Frontend", icon: "🎨" },
    { name: "Sass", level: 90, category: "Frontend", icon: "💅" },
    { name: "JavaScript (ES6+)", level: 90, category: "Frontend", icon: "⚡" },
    { name: "React.js", level: 90, category: "Frontend", icon: "⚛️" },
    { name: "TypeScript", level: 85, category: "Frontend", icon: "🔷" },
    { name: "Next.js", level: 85, category: "Frontend", icon: "▲" },
    { name: "Tailwind CSS", level: 90, category: "Frontend", icon: "💨" },
    { name: "Framer Motion", level: 80, category: "Animation", icon: "🎭" },
    { name: "Git", level: 85, category: "Tools", icon: "📚" },
  ];

  const categories = [
    { name: "Frontend", icon: FaCode, color: "from-blue-500 to-cyan-500" },
    {
      name: "Animation",
      icon: FaPaintBrush,
      color: "from-purple-500 to-pink-500",
    },
    { name: "Tools", icon: FaTools, color: "from-green-500 to-teal-500" },
  ];

  return (
    <section className="relative min-h-screen w-full px-6 py-20 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/8 to-pink-500/8 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">درباره من</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            توسعه‌دهنده فرانت‌اند با عشق به خلق تجربه‌های دیجیتال شگفت‌انگیز و
            <span className="text-gradient font-semibold"> نوآورانه</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-3xl opacity-40 animate-pulse group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl glass-effect group-hover:border-white/50 transition-all duration-500">
                <Image
                  src={profile}
                  alt="AhmadReza Profile"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-rose-500 p-3 rounded-full shadow-lg"
              >
                <FaHeart className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-full shadow-lg"
              >
                <FaCoffee className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="glass-effect rounded-3xl p-8 border border-slate-700/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                  <FaRocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gradient">سلام! 👋</h3>
              </div>
              <div className="space-y-4 text-slate-200 leading-relaxed text-lg">
                <p>
                  من{" "}
                  <span className="text-gradient font-semibold">احمدرضا</span>{" "}
                  هستم، یک توسعه‌دهنده‌ی فرانت‌اند که عاشق طراحی رابط‌های کاربری
                  زیبا و تجربه‌های تعاملی هستم.
                </p>
                <p>
                  با استفاده از جدیدترین تکنولوژی‌ها و بهترین روش‌ها، وب‌سایت‌ها
                  و اپلیکیشن‌هایی می‌سازم که نه تنها زیبا هستند، بلکه عملکرد
                  عالی هم دارند.
                </p>
                <p className="text-gradient font-medium">
                  همیشه در حال یادگیری و بهبود مهارت‌های خودم هستم! 🚀
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
              مهارت‌های من
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity duration-500`}
                ></div>
                <div className="relative glass-effect rounded-2xl p-6 border border-slate-700/30 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`p-3 bg-gradient-to-r ${category.color} rounded-xl`}
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-50">
                      {category.name}
                    </h4>
                  </div>

                  <div className="space-y-4">
                    {skills
                      .filter((skill) => skill.category === category.name)
                      .map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="group/skill"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{skill.icon}</span>
                              <span className="text-slate-300 font-medium">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-gradient font-bold text-lg">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="relative w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1.5, delay: index * 0.1 }}
                              viewport={{ once: true }}
                            />
                            <div
                              className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-30 rounded-full blur-sm`}
                            ></div>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
