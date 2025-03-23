import type { Metadata } from "next";
import {
  Manrope,
  Space_Mono,
  Kumbh_Sans,
  Caveat,
  DM_Sans,
  IBM_Plex_Sans,
  Inter,
} from "next/font/google";
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

const kumbh_Sans = Kumbh_Sans({
  style: "normal",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-kumbh-sans",
});

const caveat = Caveat({
  style: "normal",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-caveat",
});

const dm_Sans = DM_Sans({
  style: "normal",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const ibm_Plex_Sans = IBM_Plex_Sans({
  style: "normal",
  weight: "500",
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
});

const inter = Inter({
  style: "normal",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TimelyCapsule",
  description: "Unleash the power of timed messaging.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${space_Mono.variable} ${kumbh_Sans.variable} ${dm_Sans.variable} ${caveat.variable} ${ibm_Plex_Sans.variable} ${inter.variable}  antialiased`}
      >
        <SessionProvider>
          <QueryProvider>{children}</QueryProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
