import Link from "next/link";
import { ArrowLeft, CodeXml, Play, Sparkles } from "lucide-react";

type ThemeName = "studyflow" | "arte" | "finance";

type BuildStep = {
  question: string;
  reason: string;
  decision: string;
};

type AppBuildCaseStudyProps = {
  theme: ThemeName;
  eyebrow: string;
  title: string;
  summary: string;
  demoHref: string;
  repositoryHref: string;
  problem: string;
  goal: string;
  steps: BuildStep[];
  flow: string[];
  implemented: string[];
  next: string[];
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
  }
} satisfies Record<ThemeName, Record<string, string>>;

function ProductVisual({ theme }: { theme: ThemeName }) {
  if (theme === "finance") {
    return (
      <div className="relative min-h-[22rem] overflow-hidden rounded-md bg-[#111827] p-5 text-white" aria-label="개인 자산관리의 자산, 대출, 현금흐름 대시보드를 표현한 그래픽">
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
          <div className="mt-4 grid grid-cols-4 gap-2 text-center text-[9px] font-bold text-white/50"><span>예금</span><span>적금</span><span>ETF</span><span>청약</span></div>
        </div>
      </div>
    );
  }

  if (theme === "arte") {
    return (
      <div className="relative min-h-[22rem] overflow-hidden rounded-md bg-[#17191E] p-5 text-white" aria-label="ARTE Visit Companion의 작품 선택과 이중 언어 관람 가이드 화면을 표현한 그래픽">
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

  return (
    <div className="relative min-h-[22rem] overflow-hidden rounded-md bg-[#24262C] p-5 text-white" aria-label="StudyFlow AI의 학습 기록 분석과 프로젝트 연결 화면을 표현한 그래픽">
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
  const colors = themes[theme];

  return (
    <main className={`min-h-screen ${colors.page}`}>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1D1F23]/95 text-white backdrop-blur">
        <div className="mx-auto flex min-h-16 max-w-[1240px] items-center justify-between gap-4 px-5 sm:px-8">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-bold text-white/75 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> 프로젝트
          </Link>
          <nav className="flex items-center gap-2 text-xs font-bold">
            <a href="#decisions" className="rounded px-3 py-2 text-white/65 transition hover:bg-white/10 hover:text-white">판단 기록</a>
            <a href="#scope" className="rounded px-3 py-2 text-white/65 transition hover:bg-white/10 hover:text-white">구현 범위</a>
          </nav>
        </div>
      </header>

      <section className={`border-b ${colors.hero}`}>
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className={`text-xs font-black ${colors.accent}`}>{eyebrow}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-[1.12] [word-break:keep-all] sm:text-6xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-black/60 sm:text-lg">{summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={demoHref} className={`inline-flex min-h-12 items-center gap-2 rounded-md px-5 text-sm font-black transition hover:-translate-y-0.5 ${colors.button}`}>
                <Play className="h-4 w-4" aria-hidden="true" /> 앱 실행
              </Link>
              <a href={repositoryHref} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-md border border-black/25 px-5 text-sm font-black transition hover:-translate-y-0.5 hover:bg-white/40">
                <CodeXml className="h-4 w-4" aria-hidden="true" /> GitHub
              </a>
            </div>
          </div>
          <ProductVisual theme={theme} />
        </div>
      </section>

      <section className="border-b border-black/10 py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1240px] gap-6 px-5 sm:px-8 lg:grid-cols-2">
          <article className="border-t border-black/25 pt-5">
            <p className={`text-xs font-black ${colors.accent}`}>PROBLEM</p>
            <h2 className="mt-3 text-2xl font-black">어떤 불편에서 시작했나</h2>
            <p className="mt-5 text-sm leading-7 text-black/60">{problem}</p>
          </article>
          <article className={`rounded-md border p-6 ${colors.soft}`}>
            <p className={`text-xs font-black ${colors.accent}`}>PRODUCT GOAL</p>
            <h2 className="mt-3 text-2xl font-black">무엇을 해결하려 했나</h2>
            <p className="mt-5 text-sm leading-7 text-black/60">{goal}</p>
          </article>
        </div>
      </section>

      <section id="decisions" className="scroll-mt-20 bg-[#202329] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="border-b border-white/15 pb-8">
            <p className="text-xs font-black text-[#C9BDF4]">DECISION HISTORY</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">왜 이런 질문을 했고, 무엇을 바꿨나</h2>
          </div>
          <div>
            {steps.map((step, index) => (
              <article key={step.question} className="grid gap-5 border-b border-white/15 py-7 lg:grid-cols-[4rem_17rem_1fr_1fr]">
                <span className="text-xs font-black text-white/40">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="text-lg font-black leading-7 [word-break:keep-all]">{step.question}</h3>
                <div>
                  <p className="text-[10px] font-black text-[#F0A58D]">배경</p>
                  <p className="mt-3 text-sm leading-7 text-white/60">{step.reason}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-[#B9E4D0]">결정</p>
                  <p className="mt-3 text-sm leading-7 text-white/80">{step.decision}</p>
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
              <p className={`text-xs font-black ${colors.accent}`}>BUILD FLOW</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">제작 흐름</h2>
            </div>
            <ol className="border-t border-black/20">
              {flow.map((item, index) => (
                <li key={item} className="grid grid-cols-[3rem_1fr] gap-3 border-b border-black/15 py-5">
                  <span className={`flex h-8 w-8 items-center justify-center rounded text-xs font-black ${colors.marker}`}>{index + 1}</span>
                  <p className="text-sm font-bold leading-7">{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="scope" className="scroll-mt-20 border-t border-black/10 pb-20 pt-16">
        <div className="mx-auto grid max-w-[1240px] gap-5 px-5 sm:px-8 lg:grid-cols-2">
          <article className="rounded-md border border-black/15 bg-white/55 p-6">
            <p className={`text-xs font-black ${colors.accent}`}>IMPLEMENTED</p>
            <h2 className="mt-3 text-2xl font-black">현재 직접 작동하는 기능</h2>
            <ul className="mt-6 grid gap-3">
              {implemented.map((item) => (
                <li key={item} className="flex gap-3 border-t border-black/10 pt-3 text-sm leading-7">
                  <Sparkles className={`mt-1 h-4 w-4 shrink-0 ${colors.accent}`} aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
          </article>
          <article className={`rounded-md border p-6 ${colors.soft}`}>
            <p className={`text-xs font-black ${colors.accent}`}>NEXT SCOPE</p>
            <h2 className="mt-3 text-2xl font-black">다음 확장 범위</h2>
            <ul className="mt-6 grid gap-3">
              {next.map((item) => (
                <li key={item} className="border-t border-black/10 pt-3 text-sm leading-7 text-black/65">{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
