import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    template: '%s | Resumeer',
    default: 'Resumeer - The Ultimate Resume Builder',
  },
  description: "Transform your professional narrative into a masterpiece with Resumeer. Our intuitive platform guides you through crafting a resume that resonates with recruiters and showcases your unique career journey.",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
