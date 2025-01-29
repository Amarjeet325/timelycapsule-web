"use client";

import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthRoute =
    pathname?.includes("/enter") || pathname?.includes("/join");

  // Si es una ruta de autenticación, retornamos solo el contenido sin el layout principal
  if (isAuthRoute) {
    return children;
  }

  // Para otras rutas, mantenemos el layout normal
  return (
    <div>
      <div>
        <h1>Pages layout</h1>
        <p>Current Theme: light</p>
        <button>Switch to dark mode</button>
      </div>
      {children}
    </div>
  );
}
