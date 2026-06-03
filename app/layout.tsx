import type { Metadata } from "next";
import { profile } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} | Portfolio`,
  description: `${profile.name}의 Next.js, Tailwind CSS, Framer Motion 포트폴리오입니다.`
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
