"use client";

import Sidebar from "@/components/sidebar/Sidebar";
/* import { usePathname } from 'next/navigation'; */

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /* const pathname = usePathname();

  if (pathname?.startsWith('/enter') || pathname?.startsWith('/join')) {
    return <>{children}</>;
  } */

  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}
