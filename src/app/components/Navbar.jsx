"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";

const navItems = [
  { name: "خانه", path: "/", icon: "🏠" },
  { name: "درباره من", path: "/about", icon: "👤" },
  { name: "پروژه‌ها", path: "/projects", icon: "💼" },
  { name: "تماس", path: "/contact", icon: "📧" },
];

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const menuRef = useRef(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
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
    (path, e) => {
      if (path === pathname) {
        e.preventDefault();
        setIsMobileMenuOpen(false);
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
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-slate-900/90 backdrop-blur-xl border-b border-slate-700/50 shadow-lg shadow-slate-900/20"
            : "bg-slate-900/40 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* لوگو */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0"
            >
              <Link
                href="/"
                className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-300 hover:to-pink-300 transition-all duration-300"
              >
                Ahmadreza.dev
              </Link>
            </motion.div>

            {/* منوی دسکتاپ */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
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
                      className={`relative px-3 lg:px-4 py-2 rounded-xl font-medium transition-all duration-300 block ${
                        isActive
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                      } ${isNavigating ? "pointer-events-none" : ""}`}
                    >
                      <span className="relative z-10">{item.name}</span>

                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl border border-white/10"
                          initial={false}
                          transition={{
                            type: "spring",
                            bounce: 0.2,
                            duration: 0.6,
                          }}
                        />
                      )}

                      {!isActive && (
                        <motion.div
                          className="absolute inset-0 bg-white/5 rounded-xl opacity-0"
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </Link>

                    {isActive && (
                      <motion.div
                        layoutId="glow"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-sm"
                        initial={false}
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            <div className="hidden md:block">
              <motion.a
                href="/AhmadFarhadi.Resume.pdf"
                download="AhmaFarhadi.Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 inline-flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                رزومه من
              </motion.a>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 0 : -4,
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-0.5 bg-white rounded-full absolute"
                />
                <motion.span
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                    x: isMobileMenuOpen ? 20 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-0.5 bg-white rounded-full absolute"
                />
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? 0 : 4,
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-0.5 bg-white rounded-full absolute"
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-slate-900/95 backdrop-blur-xl border-l border-slate-700/50 z-50 md:hidden shadow-2xl"
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
                <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  منو
                </span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>

              <div className="p-4 space-y-2">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.path;
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.path}
                        onClick={(e) => handleNavigation(item.path, e)}
                        className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-white/10"
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span className="font-medium">{item.name}</span>
                        {isActive && (
                          <motion.div
                            layoutId="mobileActiveIndicator"
                            className="mr-auto w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700/50"
              >
                <motion.a
                  href="/resume.pdf"
                  download="Ahmadreza-Resume.pdf"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  دانلود رزومه
                </motion.a>

                <div className="flex justify-center gap-4 mt-4">
                  {[
                    { icon: "💼", label: "LinkedIn" },
                    { icon: "🐙", label: "GitHub" },
                    { icon: "🐦", label: "Twitter" },
                  ].map((social, i) => (
                    <motion.a
                      key={social.label}
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                      aria-label={social.label}
                    >
                      <span className="text-xl">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="h-16 md:h-20" />
    </>
  );
}
