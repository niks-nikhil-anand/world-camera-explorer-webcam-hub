import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { TopNavbar } from "@/components/layout/top-navbar";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "CyberWatch Live Hub",
    template: "%s | CyberWatch Live Hub",
  },
  description:
    "Global surveillance stream aggregator. Explore thousands of live webcams from around the world in real-time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="h-screen overflow-hidden flex bg-[#0A0B10]">
        <Providers>
          {/* Left Sidebar - Control Console */}
          <AppSidebar />

          {/* Right Content Area - The Matrix */}
          <div className="flex-1 flex flex-col min-w-0">
            <TopNavbar />
            <main className="flex-1 overflow-y-auto scrollbar-cyber bg-[#0A0B10] relative scanline-overlay">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
