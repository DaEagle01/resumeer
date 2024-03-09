import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Resumeer',
    default: 'Resumeer - The Ultimate Resume Builder',
  },
  description: "Transform your professional narrative into a masterpiece with Resumeer. Our intuitive platform guides you through crafting a resume that resonates with recruiters and showcases your unique career journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
