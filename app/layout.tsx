import type { Metadata } from "next";
import { profile } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} AI/Data Portfolio`,
  description: `${profile.name}의 머신러닝, 데이터 분석, AI 프로젝트 포트폴리오입니다.`
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
  try {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.dataset.theme = saved || (prefersDark ? "dark" : "light");
  } catch {
    document.documentElement.dataset.theme = "light";
  }
})();`
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
