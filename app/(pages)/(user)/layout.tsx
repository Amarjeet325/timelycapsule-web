"use client";

import Sidebar from "@/app/components/Sidebar";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}
