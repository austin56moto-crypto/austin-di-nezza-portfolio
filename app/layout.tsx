import type { Metadata } from "next";
import { Anton, Roboto_Flex } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/data/profile";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.role}`,
  description:
    "Advanced employer-facing portfolio with live GitHub project sync, AI and automation projects, and a polished full-stack presentation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${robotoFlex.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        <div className="app-shell">
          <div className="app-text-rail">
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </div>
          <Navbar />
          <main className="relative z-10 flex-1 pt-20 md:pt-24">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
