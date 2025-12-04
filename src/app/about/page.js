"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import profile from "../../../public/images/profile.jpg";

export default function AboutPage() {
  const skills = [
    { name: "HTML:5", level: 95 },
    { name: "CSS:3", level: 95 },
    { name: "Sass", level: 90 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "React.js", level: 90 },
    { name: "TypeScript", level: 50 },
    { name: "Next.js", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Bootstrap CSS", level: 90 },
    { name: "Material UI", level: 80 },
  ];

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 pb-14 bg-gradient-to-b text-white">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-shrink-0"
      >
        <div className="w-64 h-64 md:h-64 md:w-64 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
          <Image
            src={profile}
            alt="AhmadReza Profile"
            width={256}
            height={256}
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl"
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-400">درباره من</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          من احمدرضا هستم، یک توسعه‌دهنده‌ی فرانت‌اند که عاشق طراحی رابط‌های
          کاربری زیبا و تجربه‌های تعاملی هستم. با React، Next.js و Tailwind کار
          می‌کنم و همیشه دنبال یادگیری و بهتر شدنم 🚀
        </p>

        <div className="space-y-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ display: index * 0.15 }}
            >
              <div className="flex justify-between text-sm mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
