import type { Metadata } from "next";
import { profile } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} AI/Data + Web Portfolio`,
  description: `${profile.name}의 AI/Data, 웹 구현, 모델 서빙 경험을 정리한 포트폴리오입니다.`
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
