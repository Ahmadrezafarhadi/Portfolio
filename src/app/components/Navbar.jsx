"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const navItems = [
  { name: "خانه", path: "/" },
  { name: "درباره من", path: "/about" },
  { name: "پروژه‌ها", path: "/projects" },
  { name: "تماس", path: "/contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const { scrollY } = useScroll();

  const backgroundOpacity = useTransform(scrollY, [0, 100], [0.4, 0.8]);
  const backdropBlur = useTransform(scrollY, [0, 100], [8, 12]);

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", updateScrolled);
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  const handleMouseEnter = useCallback(
    (path) => {
      if (path !== pathname) {
        router.prefetch(path);
      }
    },
    [pathname, router]
  );

  const handleNavigation = useCallback(
    async (path, e) => {
      if (path === pathname) {
        e.preventDefault();
        return;
      }

      setIsNavigating(true);

      setTimeout(() => {
        router.push(path);
        setTimeout(() => setIsNavigating(false), 300);
      }, 50);
    },
    [pathname, router]
  );

  return (
    <motion.nav
      style={{
        backgroundColor: `rgba(15, 23, 42, ${backgroundOpacity})`,
        backdropFilter: `blur(${backdropBlur}px)`,
      }}
      className="fixed top-0 w-full border-b border-slate-700/50 z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/"
            className="text-2xl font-bold text-gradient hover:text-gradient-hover transition-all duration-300"
          >
            Ahmadreza.dev
          </Link>
        </motion.div>

        <div className="flex gap-2">
          {navItems.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <Link
                  href={item.path}
                  onMouseEnter={() => handleMouseEnter(item.path)}
                  onClick={(e) => handleNavigation(item.path, e)}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActive || isNavigating
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  } ${isNavigating ? "pointer-events-none opacity-70" : ""}`}
                >
                  {item.name}

                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 rounded-lg border border-slate-600/40"
                      initial={false}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}

                  <motion.div
                    className="absolute inset-0 bg-slate-700/30 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                  />

                  {isNavigating && (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="w-4 h-4 border-2 border-primary-400/40 border-t-primary-400 rounded-full animate-spin"></div>
                    </motion.div>
                  )}
                </Link>

                {isActive && (
                  <motion.div
                    layoutId="glow"
                    className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 rounded-lg blur-md -z-10"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="md:hidden p-2 glass-effect rounded-lg"
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </motion.button>
      </div>
    </motion.nav>
  );
}
