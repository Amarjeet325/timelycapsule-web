import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Manrope, Space_Mono } from "next/font/google";
import SessionProvider from "./providers/SessionProvider";
import { ReduxProvider } from "./_providers/ReduxProvider";

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
        <ReduxProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ReduxProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
