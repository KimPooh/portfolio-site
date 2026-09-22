"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/language";

const navItems = [
  { id: "about", label: { kr: "소개", en: "About" }, hash: "about" },
  { id: "skills", label: { kr: "기술", en: "Skills" }, hash: "skills" },
  { id: "projects", label: { kr: "프로젝트", en: "Projects" }, hash: "projects" },
  { id: "notes", label: { kr: "기술 노트", en: "Notes" }, href: "/notes" },
  { id: "background", label: { kr: "배경", en: "Background" }, href: "/background" },
  { id: "journey", label: { kr: "여정", en: "Journey" }, href: "/journey" },
  { id: "contact", label: { kr: "연락", en: "Contact" }, hash: "contact" }
];

export function SiteHeader() {
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const hrefFor = (item: (typeof navItems)[number]) => item.href ?? (isHome ? `#${item.hash}` : `/#${item.hash}`);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#15171B]/95 text-[#F5F1E8] backdrop-blur-xl">
      <div className="relative mx-auto flex max-w-[1240px] items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label={language === "kr" ? "김지현 포트폴리오 홈" : "Jihyun Kim portfolio home"}>
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#B9E4D0] text-xs font-black text-[#15171B]">KJH</span>
          <span className="hidden text-sm font-black sm:block">KIM JI-HYUN</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-[#B8BDC7] md:flex">
          {navItems.map((item) => (
            <Link key={item.id} href={hrefFor(item)} className="transition hover:text-[#B9E4D0]">
              {item.label[language]}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="flex overflow-hidden rounded-md border border-white/15 text-xs font-black">
            {(["kr", "en"] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLanguage(item)}
                className={`min-w-10 px-3 py-2 transition ${
                  language === item ? "bg-[#F5F1E8] text-[#15171B]" : "text-[#AEB4BF] hover:text-white"
                }`}
                aria-pressed={language === item}
              >
                {item === "kr" ? "KR" : "EN"}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-[#F5F1E8] md:hidden"
            aria-label={isMenuOpen ? (language === "kr" ? "메뉴 닫기" : "Close menu") : (language === "kr" ? "메뉴 열기" : "Open menu")}
            aria-expanded={isMenuOpen}
          >
            <span aria-hidden="true" className="text-xl leading-none">{isMenuOpen ? "×" : "≡"}</span>
          </button>
        </div>
        {isMenuOpen && (
          <nav className="absolute left-5 right-5 top-[calc(100%+0.5rem)] grid rounded-md border border-white/10 bg-[#202329] p-2 shadow-2xl md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={hrefFor(item)}
                onClick={() => setIsMenuOpen(false)}
                className="rounded px-4 py-3 text-sm font-bold text-[#D8DCE3] transition hover:bg-white/[0.06] hover:text-[#B9E4D0]"
              >
                {item.label[language]}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
