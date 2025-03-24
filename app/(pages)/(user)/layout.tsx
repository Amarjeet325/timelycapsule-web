"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/app/components/Sidebar";
import Navbar from "@/app/components/Navbar";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentRouteName, setCurrentRouteName] = useState("");

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        setCurrentRouteName={setCurrentRouteName}
      />
      <div className="flex-1 flex flex-col">
        <Navbar
          currentRouteName={currentRouteName}
          toggleMobileMenu={toggleMobileMenu}
        />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
