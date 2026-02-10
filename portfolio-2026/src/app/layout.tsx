import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sonia Karenzi Uwase | UI/UX Designer & Full-Stack Developer",
  description: "Portfolio of Sonia Karenzi Uwase, a UI/UX Designer and Full-Stack Developer specializing in creating beautiful, accessible, and user-centered digital experiences.",
  keywords: ["UI/UX Designer", "Full-Stack Developer", "Web Developer", "Portfolio", "Sonia Karenzi Uwase", "Rwanda"],
  authors: [{ name: "Sonia Karenzi Uwase" }],
  creator: "Sonia Karenzi Uwase",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Sonia Karenzi Uwase | UI/UX Designer & Developer",
    description: "Portfolio showcasing my work in UI/UX design and full-stack development",
    siteName: "Sonia Karenzi Uwase Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonia Karenzi Uwase | Portfolio",
    description: "UI/UX Designer & Full-Stack Developer",
    creator: "@Stranger1144261",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
