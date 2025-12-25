"use client";

import { useEffect, Suspense, useState, Component } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">خطایی رخ داده است</h2>
            <p className="text-gray-400 mb-4">
              متاسفانه خطایی در بارگذاری صفحه رخ داده است.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              تلاش مجدد
            </button>
            {process.env.NODE_ENV === "development" && (
              <details className="mt-4 text-left">
                <summary className="cursor-pointer text-sm text-gray-500">
                  جزئیات ارور (برای توسعه‌دهندگان)
                </summary>
                <pre className="mt-2 text-xs text-red-400 bg-gray-800 p-2 rounded overflow-auto">
                  {this.state.error?.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const NavBar = dynamic(() => import("./Navbar"), {
  loading: () => (
    <nav className="fixed top-0 w-full border-b border-white/10 z-50 bg-slate-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="h-8 bg-white/10 rounded animate-pulse w-32"></div>
      </div>
    </nav>
  ),
});

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-400">در حال بارگذاری...</p>
    </div>
  </div>
);

const preloadPages = () => {
  if (typeof window !== "undefined") {
    import("../about/page");
    import("../projects/page");
    import("../contact/page");
  }
};

export default function ClientLayout({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    try {
      preloadPages();
      setIsLoaded(true);
    } catch (error) {
      console.error("Error during initialization:", error);
      setIsLoaded(true);
    }

    if ("serviceWorker" in navigator && typeof window !== "undefined") {
      try {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("Service Worker registered:", registration);
          })
          .catch((error) => {
            console.warn("Service Worker registration failed:", error);
          });
      } catch (error) {
        console.warn("Service Worker not supported:", error);
      }
    }

    if (typeof window !== "undefined" && "startViewTransition" in document) {
      try {
        const originalPush = window.history.pushState;
        window.history.pushState = function (state, title, url) {
          if (!url || url === window.location.href) return;

          const transition = document.startViewTransition(() => {
            originalPush.call(this, state, title, url);
          });

          return transition.ready;
        };
      } catch (error) {
        console.warn("View Transitions API not supported:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (pathname !== "/" || typeof window === "undefined") return;

    try {
      const canvas = document.createElement("canvas");
      canvas.className = "fixed inset-0 w-full h-full pointer-events-none z-0";
      document.body.appendChild(canvas);

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles = [];
      const numParticles = window.innerWidth < 768 ? 20 : 30;

      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          alpha: Math.random() * 0.5 + 0.2,
        });
      }

      let animationId;
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(59, 130, 246, ${p.alpha * 0.6})`;
          ctx.fill();
        });

        animationId = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        if (animationId) cancelAnimationFrame(animationId);
        if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
      };
    } catch (error) {
      console.warn("Canvas animation error:", error);
    }
  }, [pathname]);

  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoader />}>
        <div className="relative z-20">
          <NavBar />
        </div>

        <main className="relative z-10">
          <div
            className={`transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            {children}
          </div>
        </main>
      </Suspense>
    </ErrorBoundary>
  );
}
