"use client";

import { LayoutProps } from "@/.next/types/app/layout";
/* import { usePathname } from 'next/navigation'; */

export default function PublicLayout({ children }: LayoutProps) {
  /*  const pathname = usePathname();
  const isAuthRoute =
    pathname?.includes('/enter') || pathname?.includes('/join');

  if (isAuthRoute) {
    return <>{children}</>;
  } */

  return (
    <>
      <main>{children}</main>
    </>
  );
}
