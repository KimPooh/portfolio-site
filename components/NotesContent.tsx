"use client";

import Link from "next/link";
import { ArrowUpRight, Bot, Database, MonitorCheck } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { useLanguage } from "@/lib/language";

const notes = [
  {
    icon: Database,
    category: "PRODUCT DATA PIPELINE",
    title: {
      kr: "외부 전시 API를 정적 스냅샷으로 바꾼 이유",
      en: "Why I Turned an External Exhibition API into a Static Snapshot"
    },
    summary: {
      kr: "Pote의 전시 카탈로그는 문화공공데이터광장 정보를 사용한다. Vercel 환경에서 외부 API 응답이 안정적이지 않은 제약을 확인한 뒤, GitHub Actions가 매일 데이터를 수집·정제해 정적 JSON을 갱신하는 방식으로 바꿨다.",
      en: "Pote's exhibition catalogue uses data from Korea's public culture data portal. After finding that external API responses weren't reliable enough on Vercel, I switched to a setup where GitHub Actions collects and cleans the data daily and refreshes a static JSON file instead."
    },
    takeaways: {
      kr: [
        "실시간 호출보다 배포 환경에서의 안정성을 먼저 검증했다.",
        "외부 데이터는 수집·정제·표시 단계를 분리해 장애 범위를 줄였다.",
        "사용자 화면은 외부 API 호출 없이 빠르게 전시 카탈로그를 제공한다."
      ],
      en: [
        "Verified stability in the deployed environment before relying on real-time calls.",
        "Split external data into collection, cleaning, and display stages to limit the blast radius of failures.",
        "The user-facing screen serves the exhibition catalogue quickly with no external API call at all."
      ]
    },
    href: "/projects/pote-gallery/process",
    action: { kr: "Pote 제작 과정 보기", en: "See Pote's Build Process" }
  },
  {
    icon: Bot,
    category: "MACHINE LEARNING EXPERIMENT",
    title: {
      kr: "모델 하나를 고르기 전, 비교 기준을 먼저 세우기",
      en: "Setting a Comparison Standard Before Picking a Model"
    },
    summary: {
      kr: "난임 임신 성공 예측 팀 프로젝트에서 CatBoost와 LightGBM 등 여러 모델을 반복 실험하며 성능을 비교했다. 단일 결과만 보는 대신, 팀이 같은 기준으로 판단할 수 있도록 실험 결과와 개선 방향을 공유하는 데 집중했다.",
      en: "On the infertility pregnancy-prediction team project, I ran repeated experiments comparing models such as CatBoost and LightGBM. Rather than looking at a single result, I focused on sharing experiment results and next steps so the team could judge by the same standard."
    },
    takeaways: {
      kr: [
        "모델 선택은 한 번의 점수보다 비교 가능한 실험 흐름이 중요하다.",
        "성능 변화의 이유를 설명할 수 있어야 다음 실험을 설계할 수 있다.",
        "협업에서는 결과와 판단 근거를 함께 남겨야 의사결정이 흔들리지 않는다."
      ],
      en: [
        "Choosing a model is less about one score and more about a comparable experiment flow.",
        "You need to explain why performance changed before you can design the next experiment.",
        "In collaboration, recording the reasoning alongside the result keeps decisions from wavering."
      ]
    },
    href: "/projects/infertility-pregnancy-prediction",
    action: { kr: "난임 예측 사례 보기", en: "See the Infertility Prediction Case Study" }
  },
  {
    icon: MonitorCheck,
    category: "RELEASE QUALITY",
    title: {
      kr: "기능 구현 뒤에 실제 브라우저 검증을 남기는 이유",
      en: "Why I Verify in a Real Browser After Building a Feature"
    },
    summary: {
      kr: "Pote는 작품 탐색, 찜, 문의, 실제 공간 미리보기처럼 화면에서 직접 확인해야 하는 기능이 많다. 데스크톱과 모바일에서 실제 흐름을 점검하고, 배포 뒤에도 주요 화면을 다시 확인하는 방식을 유지했다.",
      en: "Pote has many features — artwork browsing, favorites, inquiries, room preview — that really need to be checked on screen. I kept a habit of walking through the real flow on both desktop and mobile, and re-checking the key screens again after each deploy."
    },
    takeaways: {
      kr: [
        "코드가 통과해도 사용자 화면의 문제까지 보장하지는 않는다.",
        "반응형 화면은 기능별 핵심 행동을 기준으로 확인한다.",
        "배포 검증은 구현의 마지막 단계가 아니라 서비스 품질을 지키는 과정이다."
      ],
      en: [
        "Code passing doesn't guarantee the user-facing screen is problem-free.",
        "Check responsive screens against the key action for each feature, not just the layout.",
        "Deploy verification isn't the last step of implementation — it's an ongoing part of protecting quality."
      ]
    },
    href: "/projects/pote-gallery",
    action: { kr: "Pote 프로젝트 보기", en: "See the Pote Project" }
  }
];

const copyByLanguage = {
  kr: {
    back: "포트폴리오",
    badge: "TECHNICAL NOTES",
    kicker: "기술 노트",
    count: "3개의 기록",
    title1: "만든 것에서",
    title2: "배운 판단을 기록합니다.",
    body: "프로젝트 결과를 나열하는 대신, 문제를 어떻게 나누고 어떤 제약 안에서 선택했는지 정리합니다."
  },
  en: {
    back: "Portfolio",
    badge: "TECHNICAL NOTES",
    kicker: "Technical Notes",
    count: "3 entries",
    title1: "Recording the judgment calls",
    title2: "behind what I built.",
    body: "Instead of listing project outcomes, this records how I broke down problems and what I chose within the constraints I had."
  }
};

export default function NotesContent() {
  const { language } = useLanguage();
  const copy = copyByLanguage[language];

  return (
    <main className="min-h-screen bg-[#15171B] text-[#F5F1E8]">
      <SiteHeader />
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-24">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm font-black text-[#B9E4D0]">{copy.kicker}</p>
            <span className="rounded-full border border-[#B9E4D0]/35 px-3 py-1 text-xs font-black text-[#B9E4D0]">{copy.count}</span>
          </div>
          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
            {copy.title1}
            <br />
            <span className="text-[#C9BDF4]">{copy.title2}</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#B8BDC7] sm:text-lg">{copy.body}</p>
        </div>
      </section>
      <section className="mx-auto max-w-[1120px] px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-5">
          {notes.map(({ icon: Icon, category, title, summary, takeaways, href, action }, index) => (
            <article key={title.kr} className="relative rounded-md border border-white/10 bg-[#202329] p-6 sm:p-8">
              <span className="absolute right-6 top-6 text-3xl font-black text-white/10 sm:right-8 sm:top-8">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Icon className="h-6 w-6 text-[#F0A58D]" aria-hidden="true" />
              <p className="mt-5 text-xs font-black tracking-[0.12em] text-[#B9E4D0]">{category}</p>
              <h2 className="mt-3 max-w-3xl text-2xl font-black leading-snug sm:text-3xl">{title[language]}</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#C4C9D2]">{summary[language]}</p>
              <ul className="mt-6 grid gap-2 text-sm leading-6 text-[#D8DCE3]">
                {takeaways[language].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[#F0A58D]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href={href} className="mt-7 inline-flex items-center gap-2 text-sm font-black text-[#B9E4D0] transition hover:text-white">
                {action[language]}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
