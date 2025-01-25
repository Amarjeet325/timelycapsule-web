"use client";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Timely Capsule</h1>
      <p>Current Theme: {theme}</p>
      <button
        className="p-2 bg-gray-200 dark:bg-gray-800 rounded"
        onClick={toggleTheme}
      >
        Switch to {theme === "light" ? "dark" : "light"} mode
      </button>
    </div>
  );
}
