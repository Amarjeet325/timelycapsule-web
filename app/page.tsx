"use client";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="">
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
