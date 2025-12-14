"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { name: "خانه", path: "/" },
  { name: "درباره من", path: "/about" },
  { name: "پروژه‌ها", path: "/projects" },
  { name: "تماس", path: "/contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md glass border-b border-gray-800 z-50">
      <div className="container flex items-center justify-between py-4">
        <Link
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] bg-clip-text text-transparent"
        >
          Ahmadreza.dev
        </Link>

        <button
          aria-label="menu"
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-200"
        >
          {open ? "✕" : "☰"}
        </button>

        <div className={`hidden md:flex gap-8 items-center`}> 
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative text-gray-300 hover:text-white transition ${
                  isActive ? "font-semibold text-white" : ""
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {open && (
          <div className="absolute right-4 top-16 bg-gray-900/80 glass rounded-lg p-4 flex flex-col gap-3 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setOpen(false)}
                className="text-gray-200 py-1"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
