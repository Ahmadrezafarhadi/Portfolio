"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import profile from "../../../public/images/profile.jpg";

export default function AboutPage() {
  const skills = [
    { name: "HTML5", level: 95, category: "Frontend" },
    { name: "CSS3", level: 95, category: "Frontend" },
    { name: "Sass", level: 90, category: "Frontend" },
    { name: "JavaScript (ES6+)", level: 90, category: "Frontend" },
    { name: "React.js", level: 90, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Frontend" },
    { name: "Next.js", level: 85, category: "Frontend" },
    { name: "Tailwind CSS", level: 90, category: "Frontend" },
    { name: "Framer Motion", level: 80, category: "Animation" },
    { name: "Git", level: 85, category: "Tools" },
  ];

  const categories = ["Frontend", "Animation", "Tools"];

  return (
    <section className="relative min-h-screen w-full px-6 py-20 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">درباره من</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            توسعه‌دهنده فرانت‌اند با عشق به خلق تجربه‌های دیجیتال شگفت‌انگیز
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl glass-effect">
                <Image
                  src={profile}
                  alt="AhmadReza Profile"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Bio */}
            <div className="glass-effect glass-effect-hover rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-gradient mb-4">سلام! 👋</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                من احمدرضا هستم، یک توسعه‌دهنده‌ی فرانت‌اند که عاشق طراحی رابط‌های
                کاربری زیبا و تجربه‌های تعاملی هستم. با استفاده از جدیدترین تکنولوژی‌ها
                و بهترین روش‌ها، وب‌سایت‌ها و اپلیکیشن‌هایی می‌سازم که نه تنها زیبا هستند،
                بلکه عملکرد عالی هم دارند.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">مهارت‌ها</h3>

              {categories.map((category, categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-xl p-6 border border-white/10"
                >
                  <h4 className="text-lg font-semibold text-gradient mb-4">{category}</h4>
                  <div className="space-y-4">
                    {skills
                      .filter(skill => skill.category === category)
                      .map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-300">{skill.name}</span>
                            <span className="text-gradient font-semibold">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1.5, delay: index * 0.1 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
