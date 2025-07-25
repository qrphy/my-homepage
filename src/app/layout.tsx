import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Furkan Titiz",
  description: "Frontend Developer",
  keywords: ["furkan", "titiz", "frontend", "developer"],
  authors: [{ name: "Furkan Titiz" }],
  openGraph: {
    title: "Furkan Titiz",
    description: "Frontend Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-black text-white font-inter antialiased animate-fade-in">
        <div className="max-w-[580px] mx-auto px-10 pt-20 pb-0 flex flex-col min-h-screen sm:px-5">
          <header className="mb-8">
            <h1 className="text-xl font-semibold text-white mb-8">
              Furkan Titiz
            </h1>
          </header>
          
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}