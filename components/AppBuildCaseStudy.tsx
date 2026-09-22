"use client";

import Link from "next/link";
import { CodeXml, Play, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { useLanguage } from "@/lib/language";
import type { Bilingual } from "@/types/portfolio";

type ThemeName = "studyflow" | "arte" | "finance" | "pote";

type BuildStep = {
  question: Bilingual;
  reason: Bilingual;
  decision: Bilingual;
};

type AppBuildCaseStudyProps = {
  theme: ThemeName;
  eyebrow: Bilingual;
  title: Bilingual;
  summary: Bilingual;
  demoHref: string;
  repositoryHref: string;
  problem: Bilingual;
  goal: Bilingual;
  steps: BuildStep[];
  flow: Bilingual[];
  implemented: Bilingual[];
  next: Bilingual[];
};

const themes = {
  studyflow: {
    page: "bg-[#F4F0E9] text-[#1E2026]",
    hero: "bg-[#DCD4F3] border-[#B8ACDA]",
    accent: "text-[#66538F]",
    button: "bg-[#24262C] text-white",
    soft: "bg-[#E8F2EC] border-[#BCD5C8]",
    marker: "bg-[#F0A58D]"
  },
  arte: {
    page: "bg-[#F2F0EA] text-[#1E2022]",
    hero: "bg-[#DCEAE7] border-[#B3CECA]",
    accent: "text-[#2B7069]",
    button: "bg-[#173F3B] text-white",
    soft: "bg-[#F6DDD4] border-[#DDB6A8]",
    marker: "bg-[#C9BDF4]"
  },
  finance: {
    page: "bg-[#F3F1EC] text-[#1E2026]",
    hero: "bg-[#E5E7FA] border-[#C4C7E8]",
    accent: "text-[#4F46A8]",
    button: "bg-[#202329] text-white",
    soft: "bg-[#E8F2EC] border-[#BCD5C8]",
    marker: "bg-[#A5B4FC]"
  },
  pote: {
    page: "bg-[#F5EFE6] text-[#1E2026]",
    hero: "bg-[#F7E6D3] border-[#E8C8A0]",
    accent: "text-[#A85A1E]",
    button: "bg-[#0D2822] text-white",
    soft: "bg-[#FBEEDD] border-[#E8C8A0]",
    marker: "bg-[#F0B36F]"
  }
} satisfies Record<ThemeName, Record<string, string>>;

const visualCopy = {
  finance: {
    aria: {
      kr: "개인 자산관리의 자산, 대출, 현금흐름 대시보드를 표현한 그래픽",
      en: "Graphic representing the personal finance app's asset, loan, and cash-flow dashboard"
    },
    assetMix: {
      kr: ["예금", "적금", "ETF", "청약"],
      en: ["Deposit", "Savings", "ETF", "Subscription"]
    }
  },
  arte: {
    aria: {
      kr: "ARTE Visit Companion의 작품 선택과 이중 언어 관람 가이드 화면을 표현한 그래픽",
      en: "Graphic representing ARTE Visit Companion's artwork selection and bilingual visit-guide screen"
    }
  },
  pote: {
    aria: {
      kr: "Pote의 작품 갤러리와 작가 연결 화면을 표현한 그래픽",
      en: "Graphic representing Pote's artwork gallery and artist-connection screen"
    },
    inquiry: { kr: "문의 가능", en: "Inquiry available" }
  },
  studyflow: {
    aria: {
      kr: "StudyFlow AI의 학습 기록 분석과 프로젝트 연결 화면을 표현한 그래픽",
      en: "Graphic representing StudyFlow AI's learning-log analysis and project-linking screen"
    }
  }
} satisfies Record<ThemeName, Record<string, unknown>>;

function ProductVisual({ theme, language }: { theme: ThemeName; language: "kr" | "en" }) {
  if (theme === "finance") {
    const assetMixLabels = visualCopy.finance.assetMix[language];
    return (
      <div className="relative min-h-[22rem] overflow-hidden rounded-md bg-[#111827] p-5 text-white" aria-label={visualCopy.finance.aria[language]}>
        <div className="flex items-center justify-between border-b border-white/15 pb-4 text-[10px] font-black">
          <span>PERSONAL FINANCE</span>
          <span className="rounded bg-[#A5B4FC] px-2 py-1 text-[#202329]">SECURE · LIVE</span>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          {[["TOTAL ASSETS", "₩42.8M"], ["NET WORTH", "₩24.3M"], ["LOAN", "₩18.5M"], ["SURPLUS", "₩1.81M"]].map(([label, value], index) => (
            <div key={label} className={`rounded-md border p-4 ${index === 1 ? "border-[#A5B4FC]/60 bg-[#6366F1]/20" : "border-white/15 bg-white/5"}`}>
              <p className="text-[9px] font-black text-white/45">{label}</p>
              <p className="mt-3 text-sm font-black">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-md border border-white/15 bg-white/5 p-4">
          <div className="flex items-center justify-between"><span className="text-[10px] font-black">ASSET MIX</span><span className="text-[9px] text-white/40">2026.08</span></div>
          <div className="mt-5 flex h-3 overflow-hidden rounded-full bg-white/10"><span className="w-[28%] bg-[#38BDF8]" /><span className="w-[20%] bg-[#22C55E]" /><span className="w-[36%] bg-[#818CF8]" /><span className="w-[16%] bg-[#F59E0B]" /></div>
          <div className="mt-4 grid grid-cols-4 gap-2 text-center text-[9px] font-bold text-white/50">
            {assetMixLabels.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (theme === "arte") {
    return (
      <div className="relative min-h-[22rem] overflow-hidden rounded-md bg-[#17191E] p-5 text-white" aria-label={visualCopy.arte.aria[language]}>
        <div className="flex items-center justify-between border-b border-white/15 pb-4 text-[10px] font-black">
          <span>VISITOR GUIDE</span>
          <span className="rounded bg-[#B9E4D0] px-2 py-1 text-[#173F3B]">KR · EN</span>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2">
          <span className="h-28 rounded bg-[#31586D]" />
          <span className="h-28 rounded bg-[#758E55]" />
          <span className="h-28 rounded bg-[#A86148]" />
        </div>
        <div className="mt-4 rounded-md border border-white/15 bg-white/5 p-4">
          <p className="text-[10px] font-black text-[#B9E4D0]">GENERATED GUIDE</p>
          <div className="mt-3 h-2 w-4/5 rounded bg-white/60" />
          <div className="mt-2 h-2 w-3/5 rounded bg-white/25" />
          <div className="mt-4 grid grid-cols-3 gap-2">
            <span className="h-12 rounded border border-[#F0A58D]/50 bg-[#F0A58D]/15" />
            <span className="h-12 rounded border border-[#C9BDF4]/50 bg-[#C9BDF4]/15" />
            <span className="h-12 rounded border border-[#B9E4D0]/50 bg-[#B9E4D0]/15" />
          </div>
        </div>
      </div>
    );
  }

  if (theme === "pote") {
    return (
      <div className="relative min-h-[22rem] overflow-hidden rounded-md bg-[#0D2822] p-5 text-white" aria-label={visualCopy.pote.aria[language]}>
        <div className="flex items-center justify-between border-b border-white/15 pb-4 text-[10px] font-black">
          <span>ART GALLERY · CONNECTOR</span>
          <span className="rounded bg-[#F0B36F] px-2 py-1 text-[#0D2822]">KR · EN</span>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2">
          <span className="h-24 rounded" style={{ background: "linear-gradient(135deg,#f6ca98,#985216)" }} />
          <span className="h-24 rounded bg-[#173F3B]" />
          <span className="h-24 rounded" style={{ background: "linear-gradient(135deg,#ec9951,#62320e)" }} />
        </div>
        <div className="mt-4 rounded-md border border-white/15 bg-white/5 p-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black text-[#F0B36F]">ARTIST-SET PRICE</span>
            <span className="text-[9px] text-white/40">{visualCopy.pote.inquiry[language]}</span>
          </div>
          <div className="mt-4 flex items-center justify-between rounded border border-white/10 bg-black/20 px-3 py-2">
            <span className="text-xs font-black">350,000원</span>
            <span className="rounded bg-white/10 px-2 py-1 text-[9px] font-bold text-white/60">INQUIRY FLOW</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[22rem] overflow-hidden rounded-md bg-[#24262C] p-5 text-white" aria-label={visualCopy.studyflow.aria[language]}>
      <div className="flex items-center justify-between border-b border-white/15 pb-4 text-[10px] font-black">
        <span>LEARNING LOG</span>
        <span className="rounded bg-[#C9BDF4] px-2 py-1 text-[#24262C]">READY 64%</span>
      </div>
      <div className="mt-5 rounded-md bg-[#F4F0E9] p-4 text-[#24262C]">
        <div className="h-2 w-3/4 rounded bg-[#8173A8]/35" />
        <div className="mt-2 h-2 w-5/6 rounded bg-[#8173A8]/20" />
        <div className="mt-2 h-2 w-2/3 rounded bg-[#8173A8]/20" />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {["KEYWORDS", "PROJECT", "QUESTION", "SENTENCE"].map((label, index) => (
          <div key={label} className="rounded-md border border-white/15 p-3">
            <span className={`block h-2 w-8 rounded ${index % 2 ? "bg-[#B9E4D0]" : "bg-[#F0A58D]"}`} />
            <p className="mt-5 text-[10px] font-black text-white/65">{label}</p>
            <div className="mt-2 h-1.5 w-4/5 rounded bg-white/20" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function AppBuildCaseStudy({
  theme,
  eyebrow,
  title,
  summary,
  demoHref,
  repositoryHref,
  problem,
  goal,
  steps,
  flow,
  implemented,
  next
}: AppBuildCaseStudyProps) {
  const { language } = useLanguage();
  const colors = themes[theme];

  const copy = {
    kr: {
      launchApp: "앱 실행",
      problemEyebrow: "PROBLEM",
      problemHeading: "어떤 불편에서 시작했나",
      goalEyebrow: "PRODUCT GOAL",
      goalHeading: "무엇을 해결하려 했나",
      decisionsEyebrow: "DECISION HISTORY",
      decisionsHeading: "왜 이런 질문을 했고, 무엇을 바꿨나",
      reasonLabel: "배경",
      decisionLabel: "결정",
      flowEyebrow: "BUILD FLOW",
      flowHeading: "제작 흐름",
      implementedEyebrow: "IMPLEMENTED",
      implementedHeading: "현재 직접 작동하는 기능",
      nextEyebrow: "NEXT SCOPE",
      nextHeading: "다음 확장 범위"
    },
    en: {
      launchApp: "Launch App",
      problemEyebrow: "PROBLEM",
      problemHeading: "What discomfort did this start from?",
      goalEyebrow: "PRODUCT GOAL",
      goalHeading: "What was I trying to solve?",
      decisionsEyebrow: "DECISION HISTORY",
      decisionsHeading: "What questions did I ask, and what did I change?",
      reasonLabel: "Context",
      decisionLabel: "Decision",
      flowEyebrow: "BUILD FLOW",
      flowHeading: "Build Flow",
      implementedEyebrow: "IMPLEMENTED",
      implementedHeading: "What actually works today",
      nextEyebrow: "NEXT SCOPE",
      nextHeading: "Next scope to expand"
    }
  }[language];

  return (
    <main className={`min-h-screen ${colors.page}`}>
      <SiteHeader />

      <section className={`border-b ${colors.hero}`}>
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className={`text-xs font-black ${colors.accent}`}>{eyebrow[language]}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-[1.12] [word-break:keep-all] sm:text-6xl">{title[language]}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-black/60 sm:text-lg">{summary[language]}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={demoHref} className={`inline-flex min-h-12 items-center gap-2 rounded-md px-5 text-sm font-black transition hover:-translate-y-0.5 ${colors.button}`}>
                <Play className="h-4 w-4" aria-hidden="true" /> {copy.launchApp}
              </Link>
              <a href={repositoryHref} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-md border border-black/25 px-5 text-sm font-black transition hover:-translate-y-0.5 hover:bg-white/40">
                <CodeXml className="h-4 w-4" aria-hidden="true" /> GitHub
              </a>
            </div>
          </div>
          <ProductVisual theme={theme} language={language} />
        </div>
      </section>

      <section className="border-b border-black/10 py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1240px] gap-6 px-5 sm:px-8 lg:grid-cols-2">
          <article className="border-t border-black/25 pt-5">
            <p className={`text-xs font-black ${colors.accent}`}>{copy.problemEyebrow}</p>
            <h2 className="mt-3 text-2xl font-black">{copy.problemHeading}</h2>
            <p className="mt-5 text-sm leading-7 text-black/60">{problem[language]}</p>
          </article>
          <article className={`rounded-md border p-6 ${colors.soft}`}>
            <p className={`text-xs font-black ${colors.accent}`}>{copy.goalEyebrow}</p>
            <h2 className="mt-3 text-2xl font-black">{copy.goalHeading}</h2>
            <p className="mt-5 text-sm leading-7 text-black/60">{goal[language]}</p>
          </article>
        </div>
      </section>

      <section id="decisions" className="scroll-mt-20 bg-[#202329] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="border-b border-white/15 pb-8">
            <p className="text-xs font-black text-[#C9BDF4]">{copy.decisionsEyebrow}</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">{copy.decisionsHeading}</h2>
          </div>
          <div>
            {steps.map((step, index) => (
              <article key={step.question.kr} className="grid gap-5 border-b border-white/15 py-7 lg:grid-cols-[4rem_17rem_1fr_1fr]">
                <span className="text-xs font-black text-white/40">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="text-lg font-black leading-7 [word-break:keep-all]">{step.question[language]}</h3>
                <div>
                  <p className="text-[10px] font-black text-[#F0A58D]">{copy.reasonLabel}</p>
                  <p className="mt-3 text-sm leading-7 text-white/60">{step.reason[language]}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-[#B9E4D0]">{copy.decisionLabel}</p>
                  <p className="mt-3 text-sm leading-7 text-white/80">{step.decision[language]}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className={`text-xs font-black ${colors.accent}`}>{copy.flowEyebrow}</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">{copy.flowHeading}</h2>
            </div>
            <ol className="border-t border-black/20">
              {flow.map((item, index) => (
                <li key={item.kr} className="grid grid-cols-[3rem_1fr] gap-3 border-b border-black/15 py-5">
                  <span className={`flex h-8 w-8 items-center justify-center rounded text-xs font-black ${colors.marker}`}>{index + 1}</span>
                  <p className="text-sm font-bold leading-7">{item[language]}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="scope" className="scroll-mt-20 border-t border-black/10 pb-20 pt-16">
        <div className="mx-auto grid max-w-[1240px] gap-5 px-5 sm:px-8 lg:grid-cols-2">
          <article className="rounded-md border border-black/15 bg-white/55 p-6">
            <p className={`text-xs font-black ${colors.accent}`}>{copy.implementedEyebrow}</p>
            <h2 className="mt-3 text-2xl font-black">{copy.implementedHeading}</h2>
            <ul className="mt-6 grid gap-3">
              {implemented.map((item) => (
                <li key={item.kr} className="flex gap-3 border-t border-black/10 pt-3 text-sm leading-7">
                  <Sparkles className={`mt-1 h-4 w-4 shrink-0 ${colors.accent}`} aria-hidden="true" /> {item[language]}
                </li>
              ))}
            </ul>
          </article>
          <article className={`rounded-md border p-6 ${colors.soft}`}>
            <p className={`text-xs font-black ${colors.accent}`}>{copy.nextEyebrow}</p>
            <h2 className="mt-3 text-2xl font-black">{copy.nextHeading}</h2>
            <ul className="mt-6 grid gap-3">
              {next.map((item) => (
                <li key={item.kr} className="border-t border-black/10 pt-3 text-sm leading-7 text-black/65">{item[language]}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
