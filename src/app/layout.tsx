import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sagar Hussain Sheikh | Full-Stack Developer & AI Engineer",
  description: "Personal portfolio of Sagar Hussain Sheikh - A passionate full-stack developer specializing in Next.js, FastAPI, AI/ML, and cloud-native technologies.",
  keywords: ["portfolio", "full-stack developer", "AI engineer", "Next.js", "FastAPI", "Python", "React"],
  authors: [{ name: "Sagar Hussain Sheikh" }],
  openGraph: {
    title: "Sagar Hussain Sheikh | Full-Stack Developer & AI Engineer",
    description: "Personal portfolio of Sagar Hussain Sheikh - Full-stack developer specializing in modern web technologies and AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
