"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Hero = dynamic(() => import("./components/Hero"), {
  loading: () => (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden text-white">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-400">در حال بارگذاری...</p>
      </div>
    </section>
  ),
  ssr: true, // Enable SSR for better SEO
});

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-900" />}>
      <Hero />
    </Suspense>
  );
}
