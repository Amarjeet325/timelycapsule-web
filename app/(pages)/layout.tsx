"use client";

import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

import { LayoutProps } from "@/.next/types/app/layout";
import "@/app/globals.css";
import { useTheme } from "@/context/ThemeContext";

export default function RootLayout({ children }: LayoutProps) {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`${manrope.variable} font-manrope`}>
      <div>Pages layout</div>

      <div>
        <p>Current Theme: {theme}</p>
        <button
          className="p-2 bg-gray-200 dark:bg-gray-800 rounded"
          onClick={toggleTheme}
        >
          Switch to {theme === "light" ? "dark" : "light"} mode
        </button>
      </div>
      {children}
    </div>
  );
}
