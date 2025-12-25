import "./globals.css";
import ClientLayout from "./components/ClientLayout";

export const metadata = {
  title: "Portfolio | Ahmadreza",
  description:
    "Front-end Developer Portfolio built with Next.js and TailwindCSS",
  keywords: ["Frontend Developer", "React", "Next.js", "Portfolio", "Ahmadreza"],
  authors: [{ name: "Ahmadreza" }],
  openGraph: {
    title: "Portfolio | Ahmadreza",
    description: "Front-end Developer Portfolio built with Next.js and TailwindCSS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Ahmadreza",
    description: "Front-end Developer Portfolio built with Next.js and TailwindCSS",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/vazir.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className="relative min-h-screen overflow-x-hidden text-white font-vazir custom-scrollbar">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
