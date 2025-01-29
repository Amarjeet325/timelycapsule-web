import { ThemeProvider } from "@/context/ThemeContext";
import type { Metadata } from "next";
import { Manrope, Space_Mono } from "next/font/google";
import { ReduxProvider } from "./_providers/ReduxProvider";
import "./globals.css";
import SessionProvider from "./providers/SessionProvider";
import { QueryProvider } from "./_providers/QueryProvider";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const space_Mono = Space_Mono({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "TimelyCapsule",
  description: "Your digital time capsule",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${space_Mono.variable} antialiased`}
      >
        <SessionProvider>
          <QueryProvider>
            <ReduxProvider>
              <ThemeProvider>{children}</ThemeProvider>
            </ReduxProvider>
          </QueryProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
