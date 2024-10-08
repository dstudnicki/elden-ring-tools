import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import SessionWrapper from "@/components/SessionWrapper";
import { Suspense } from "react";
import BossesFallback from "@/components/BossesFallback";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elden Ring Tracker",
  description: "Elden Ring Tools for the community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <Suspense fallback={<BossesFallback />}>
              {children}
              <Analytics />
            </Suspense>
          </ThemeProvider>
        </body>
      </html>
    </SessionWrapper>
  );
}
