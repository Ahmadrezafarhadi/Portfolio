"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { name: "خانه", path: "/" },
  { name: "درباره من", path: "/about" },
  { name: "پروژه‌ها", path: "/projects" },
  { name: "تماس", path: "/contact" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-gray-900/40 border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* لوگو */}
        <Link
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Ahmadreza.dev
        </Link>

        {/* لینک‌ها */}
        <div className="flex gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative text-gray-300 hover:text-white transition ${
                  isActive ? "font-semibold" : ""
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
