import "./globals.css";
import ClientLayout from "./components/ClientLayout";
export const metadata = {
  title: "Portfolio | Ahmadreza",
  description:
    "Front-end Developer Portfolio built with Next.js and TailwindCSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="relative min-h-screen overflow-x-hidden bg-gray-950 text-white font-vazir">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
