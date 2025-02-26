"use client";

import { usePathname } from "next/navigation";
import Header from "../components/layout/Header";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (pathname?.startsWith("/enter") || pathname?.startsWith("/join")) {
    return <>{children}</>;
  }

  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
