import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { AppLayout } from "@/components/layout/AppLayout";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { AppProvider } from "@/lib/app-context";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Viralin.pro",
  description: "AI Platform untuk riset, membuat, dan mengembangkan konten viral.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-app-background text-app-text-primary">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <AppProvider>
            <AppLayout>{children}</AppLayout>
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
