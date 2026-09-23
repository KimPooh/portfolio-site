"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Compass,
  ExternalLink,
  Globe,
  Landmark,
  Tag
} from "lucide-react";
import { useLanguage } from "@/lib/language";
import type { Bilingual } from "@/types/portfolio";

const bi = (kr: string, en: string): Bilingual => ({ kr, en });

const features = [
  [Globe, bi("한국어·영어 지원", "Korean/English Support"), bi("사이트 전반과 작품 정보에 한국어·영어 전환을 적용해 두 언어로 일관된 탐색 경험을 제공합니다.", "Korean/English switching applies across the whole site and every artwork's information, for a consistent browsing experience in either language.")],
  [Compass, bi("취향 추천과 실제 공간 미리보기", "Taste Matching & Room Preview"), bi("색감과 분위기를 기준으로 작품을 탐색하고, 선택한 작품을 거실·침실 등 공간에 배치해 볼 수 있습니다.", "Browse artwork by color and mood, and preview how a chosen piece looks placed in a living room, bedroom, or other space.")],
  [Landmark, bi("전시 데이터 자동 갱신", "Automated Exhibition Data"), bi("문화공공데이터광장의 전시 정보를 정제한 뒤 매일 갱신해 지역별 전시 카탈로그로 제공합니다.", "Cleans exhibition data from Korea's public culture data portal and refreshes it daily into a region-based exhibition catalogue.")],
  [Tag, bi("작품 탐색과 문의 흐름", "Artwork Discovery & Inquiry Flow"), bi("작가·작품별 탐색, 검색·필터, 찜과 문의 흐름을 연결해 구매 전 검토 과정을 지원합니다.", "Connects artist/artwork browsing, search and filters, favorites, and inquiries to support review before a purchase.")]
] as const;

const decisions = [
  [
    bi("구매 행동은 판매 절차보다 탐색부터", "Discovery before the sales process"),
    bi("작품을 처음 구매하는 방문자에게는 결제보다 작품·작가 정보와 공간에서의 모습 확인이 먼저 필요했습니다.", "A first-time buyer needs to review the artwork, the artist, and how it looks in a space well before checkout."),
    bi("작품·작가 탐색, 검색·필터, 찜, 문의와 실제 공간 미리보기를 하나의 구매 전 탐색 흐름으로 구현했습니다.", "Built artwork/artist discovery, search and filters, favorites, inquiries, and a room preview into a single pre-purchase discovery flow.")
  ],
  [
    bi("실시간 API 대신 정적 데이터 스냅샷", "A static data snapshot instead of a live API"),
    bi("연동하려던 전시 데이터 API가 Vercel 서버 인프라에서는 안정적으로 응답하지 않는 것을 확인했습니다.", "Found that the exhibition-data API I wanted to integrate didn't respond reliably from Vercel's server infrastructure."),
    bi("GitHub Actions가 매일 데이터를 수집·정제해 정적 JSON 스냅샷을 갱신하고, 서비스는 빠르고 안정적인 카탈로그를 제공하도록 바꿨습니다.", "Switched to GitHub Actions collecting and cleaning the data daily into a static JSON snapshot, so the service serves a fast, stable catalogue.")
  ],
  [
    bi("색은 눈대중이 아니라 계산으로", "Color by calculation, not by eye"),
    bi("오렌지로 바꿨다고 생각했지만 실제 색상값은 여전히 빨강에 가까운 9~18도에 머물러 있었습니다.", "Thought the palette had already shifted to orange, but the actual hue value was still stuck near red, at 9–18°."),
    bi("HSL 색상값을 직접 계산해 25~35도(실제 오렌지 톤) 범위로 팔레트 전체를 재조정했습니다.", "Calculated the actual HSL values and re-tuned the whole palette into the 25–35° range, a genuine orange tone.")
  ],
  [
    bi("'잘려 보인다'는 신고의 진짜 원인 추적", "Tracing the real cause behind a 'looks clipped' report"),
    bi("실제로는 클리핑이 아니라 그라데이션의 어두운 색이 배경과 대비비 1.25에 불과해 흐려 보이는 문제였습니다.", "It wasn't actually clipping — the gradient's dark end had a contrast ratio of just 1.25 against the background, so it read as faded."),
    bi("밝은 색 구간만 쓰는 불투명 그라데이션 규칙으로 통일하고, 브랜드 자산은 렌더링된 바운딩 박스를 수치로 검증한 뒤 내보내도록 바꿨습니다.", "Standardized on an opaque gradient rule using only the lighter color range, and now export brand assets only after numerically verifying the rendered bounding box.")
  ]
] as const;

const copyByLanguage = {
  kr: {
    back: "프로젝트",
    badge: "ART GALLERY · CONNECTOR PLATFORM",
    heroKicker: "ART GALLERY · MULTILINGUAL WEB APP",
    heroTitle: "작가와 구매자를",
    heroTitle2: "연결만 하는 갤러리, Pote",
    heroBody: "신진·아마추어 작가의 작품을 소개하고, 취향과 구매 전 검토를 돕는 온라인 아트 갤러리입니다. 작품·작가 탐색부터 실제 공간 미리보기, 전시 카탈로그까지 하나의 탐색 경험으로 구현하고 Vercel에 배포·운영했습니다.",
    liveApp: "배포 앱 보기",
    processLink: "제작 과정 보기",
    productScope: "PRODUCT SCOPE",
    productScopeTitle: "현재 직접 작동하는 핵심 기능",
    decisionHistory: "DECISION HISTORY",
    decisionHistoryTitle: "기능보다 먼저 정한 원칙",
    reasonLabel: "배경",
    decisionLabel: "결정",
    statusTitle: "현재 상태와 다음 단계",
    statusBody: "5명 작가의 작품 98점을 Vercel 프로덕션에서 운영하고 있습니다. 작품 탐색·문의와 전시 정보 제공을 중심으로, 작가 제출과 관리자 검토 흐름도 서비스 안에서 관리할 수 있도록 확장했습니다.",
    next: ["작가 셀프 업로드와 관리자 승인 화면", "판매 정산 자동화 검토", "신규 작가 온보딩 확대", "결제·배송 연동 필요성 재검토"],
    preview: { name: "신진 작가 온라인 갤러리", price: "판매가", priceHelper: "작가 직접 설정", nav: ["갤러리", "취향찾기", "전시", "작가지원"] }
  },
  en: {
    back: "Projects",
    badge: "ART GALLERY · CONNECTOR PLATFORM",
    heroKicker: "ART GALLERY · MULTILINGUAL WEB APP",
    heroTitle: "Pote, a gallery that only",
    heroTitle2: "connects artists and buyers",
    heroBody: "An online art gallery that introduces emerging and amateur artists' work and helps visitors match their taste and review a piece before buying. Built artwork/artist discovery, a room preview, and the exhibition catalogue into one browsing experience, deployed and operated on Vercel.",
    liveApp: "View Live App",
    processLink: "See Build Process",
    productScope: "PRODUCT SCOPE",
    productScopeTitle: "Core Features That Work Today",
    decisionHistory: "DECISION HISTORY",
    decisionHistoryTitle: "Principles Set Before Features",
    reasonLabel: "Context",
    decisionLabel: "Decision",
    statusTitle: "Current Status & Next Steps",
    statusBody: "Operating 98 works from 5 artists in Vercel production. Centered on artwork discovery, inquiries, and exhibition information, and extended to manage artist submissions and admin review inside the service too.",
    next: ["A self-serve artist upload and admin approval screen", "Evaluating automated sales settlement", "Expanding onboarding for new artists", "Re-evaluating the need for payment/shipping integration"],
    preview: { name: "Online Gallery for Emerging Artists", price: "Price", priceHelper: "Set by the artist", nav: ["Gallery", "Match", "Exhibitions", "Submit"] }
  }
};

function ProductPreview({ copy }: { copy: (typeof copyByLanguage)["kr"] }) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0D2822] p-5 text-white shadow-[0_30px_80px_rgb(13_40_34/0.35)]">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="text-[10px] font-black tracking-[0.18em] text-[#F0B36F]">POTE</p>
          <p className="mt-1 text-sm font-black">{copy.preview.name}</p>
        </div>
        <span className="rounded-full bg-[#F0B36F]/20 px-3 py-1 text-[10px] font-black text-[#F7D9B0]">LIVE APP</span>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3">
        <span className="h-16 rounded-lg" style={{ background: "linear-gradient(135deg,#f6ca98,#985216)" }} />
        <span className="h-16 rounded-lg bg-[#173F3B]" />
        <span className="h-16 rounded-lg" style={{ background: "linear-gradient(135deg,#ec9951,#62320e)" }} />
      </div>
      <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-4">
        <div className="flex justify-between">
          <p className="text-xs font-black">{copy.preview.price}</p>
          <p className="text-[10px] text-white/40">{copy.preview.priceHelper}</p>
        </div>
        <p className="mt-2 text-base font-black text-[#F0B36F]">350,000원</p>
        <div className="mt-3 flex flex-wrap gap-1.5 text-[9px] font-bold text-white/55">
          {["KO", "EN"].map((lang) => (
            <span key={lang} className="rounded bg-white/10 px-2 py-1">{lang}</span>
          ))}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-4 border-t border-white/10 pt-4 text-center text-[9px] font-bold text-white/45">
        {copy.preview.nav.map((item, index) => (
          <span key={item} className={index === 0 ? "text-[#F0B36F]" : ""}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export default function PoteGalleryPage() {
  const { language, setLanguage } = useLanguage();
  const copy = copyByLanguage[language];

  return (
    <main className="min-h-screen bg-[#F5EFE6] text-[#202329]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#F5EFE6]/95 backdrop-blur">
        <div className="mx-auto flex min-h-16 max-w-[1240px] items-center justify-between px-5 sm:px-8">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-bold text-black/65 hover:text-black"><ArrowLeft className="h-4 w-4" aria-hidden="true" /> {copy.back}</Link>
          <div className="flex items-center gap-3">
            <span className="hidden text-xs font-black text-[#A85A1E] sm:inline">{copy.badge}</span>
            <div className="flex overflow-hidden rounded-md border border-black/15 text-xs font-black">
              {(["kr", "en"] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setLanguage(item)}
                  className={`min-w-9 px-2.5 py-1.5 transition ${language === item ? "bg-[#0D2822] text-white" : "text-black/60 hover:text-black"}`}
                  aria-pressed={language === item}
                >
                  {item === "kr" ? "KR" : "EN"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="border-b border-black/10 bg-[#F7E6D3]">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-black tracking-[0.16em] text-[#A85A1E]">{copy.heroKicker}</p>
            <h1 className="mt-5 text-4xl font-black leading-[1.12] [word-break:keep-all] sm:text-6xl">{copy.heroTitle}<br />{copy.heroTitle2}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-black/60 sm:text-lg">{copy.heroBody}</p>
            <div className="mt-8 flex flex-wrap gap-2">{["Next.js", "React", "TypeScript", "KR · EN", "Vercel", "Static Data Pipeline"].map((tag) => <span key={tag} className="rounded-full border border-[#A85A1E]/25 bg-white/45 px-3 py-1.5 text-xs font-bold text-[#8A4A18]">{tag}</span>)}</div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="https://potegallery.com" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-md bg-[#0D2822] px-5 text-sm font-black text-white transition hover:-translate-y-0.5">
                {copy.liveApp} <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link href="/projects/pote-gallery/process" className="inline-flex min-h-12 items-center gap-2 rounded-md border border-[#A85A1E]/35 bg-white/45 px-5 text-sm font-black text-[#8A4A18] transition hover:-translate-y-0.5 hover:bg-white/70">
                {copy.processLink} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <ProductPreview copy={copy} />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <p className="text-xs font-black text-[#A85A1E]">{copy.productScope}</p><h2 className="mt-3 text-3xl font-black sm:text-5xl">{copy.productScopeTitle}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(([Icon, title, body]) => <article key={title.kr} className="rounded-2xl border border-black/10 bg-white/55 p-5"><Icon className="h-6 w-6 text-[#A85A1E]" aria-hidden="true" /><h3 className="mt-5 text-lg font-black [word-break:keep-all]">{title[language]}</h3><p className="mt-3 text-sm leading-7 text-black/55">{body[language]}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#0D2822] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <p className="text-xs font-black text-[#F0B36F]">{copy.decisionHistory}</p><h2 className="mt-3 text-3xl font-black sm:text-5xl">{copy.decisionHistoryTitle}</h2>
          <div className="mt-10">{decisions.map(([title, context, decision], index) => (
            <article key={title.kr} className="grid gap-4 border-t border-white/15 py-7 lg:grid-cols-[4rem_18rem_1fr_1fr]">
              <span className="text-xs font-black text-white/35">{String(index + 1).padStart(2, "0")}</span><h3 className="text-lg font-black leading-7 [word-break:keep-all]">{title[language]}</h3>
              <div><p className="text-[10px] font-black text-[#F0A58D]">{copy.reasonLabel}</p><p className="mt-3 text-sm leading-7 text-white/55">{context[language]}</p></div>
              <div><p className="text-[10px] font-black text-[#86EFAC]">{copy.decisionLabel}</p><p className="mt-3 text-sm leading-7 text-white/80">{decision[language]}</p></div>
            </article>))}</div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-white/40 py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div><h2 className="text-3xl font-black">{copy.statusTitle}</h2><p className="mt-5 text-sm leading-7 text-black/55">{copy.statusBody}</p></div>
          <div className="grid gap-3 sm:grid-cols-2">{copy.next.map((item, index) => <div key={item} className="rounded-xl border border-black/10 bg-[#F5EFE6] p-5"><span className="text-xs font-black text-[#A85A1E]">NEXT {index + 1}</span><p className="mt-3 text-sm font-bold leading-7 [word-break:keep-all]">{item}</p></div>)}</div>
        </div>
      </section>
    </main>
  );
}
