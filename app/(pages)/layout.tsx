"use client";

import { LayoutProps } from "@/.next/types/app/layout";
import "@/app/globals.css";
import { useTheme } from "@/context/ThemeContext";

export default function RootLayout({ children }: LayoutProps) {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
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
    </>
  );
}
