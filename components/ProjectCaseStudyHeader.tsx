import type { ReactNode } from "react";
import Link from "next/link";

type ProjectTheme = "infertility" | "pneumonia" | "smoking";

type ProjectCaseStudyHeaderProps = {
  theme: ProjectTheme;
  eyebrow: string;
  title: string;
  summary: string;
  tags: string[];
  facts: Array<{ label: string; value: string }>;
  navigation: ReactNode;
};

const themes = {
  infertility: {
    shell: "bg-[#F4ECE9] text-[#241E1C]",
    accent: "text-[#A7473A]",
    border: "border-[#D9C6C0]",
    tag: "border-[#D9C6C0] bg-white/65 text-[#5D4C47]"
  },
  pneumonia: {
    shell: "bg-[#EAF2F0] text-[#162523]",
    accent: "text-[#1E7067]",
    border: "border-[#BFD4CF]",
    tag: "border-[#BFD4CF] bg-white/65 text-[#355B56]"
  },
  smoking: {
    shell: "bg-[#F2EFE3] text-[#24251D]",
    accent: "text-[#65713E]",
    border: "border-[#D4D0B9]",
    tag: "border-[#D4D0B9] bg-white/65 text-[#565940]"
  }
} satisfies Record<ProjectTheme, Record<string, string>>;

function ProjectHeroVisual({ theme }: { theme: ProjectTheme }) {
  if (theme === "pneumonia") {
    return (
      <figure className="relative min-h-[21rem] overflow-hidden rounded-md border border-[#AFC9C4] bg-[#173F3B] p-5 text-white" aria-label="폐렴 백오피스와 AI 모델 서빙 흐름을 표현한 화면">
        <div className="flex items-center justify-between border-b border-white/20 pb-4">
          <p className="text-xs font-black">PATIENT REVIEW</p>
          <span className="rounded bg-[#BCE7DD] px-2 py-1 text-[10px] font-black text-[#173F3B]">READY</span>
        </div>
        <div className="mt-5 grid grid-cols-[0.82fr_1.18fr] gap-4">
          <div className="relative h-44 rounded-md border border-white/20 bg-[#102C2A] p-3">
            <div className="mx-auto mt-3 grid h-28 w-24 grid-cols-2 gap-1">
              <span className="rounded-l-full border border-[#A8C9C3]/45 bg-[#D8E8E5]/15" />
              <span className="rounded-r-full border border-[#A8C9C3]/45 bg-[#D8E8E5]/15" />
            </div>
            <span className="absolute bottom-3 left-3 text-[10px] text-white/55">X-RAY PREVIEW</span>
          </div>
          <div className="grid gap-3">
            {["Upload", "FastAPI", "AI Worker", "Result"].map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-md border border-white/15 bg-white/5 px-3 py-2">
                <span className="flex h-7 w-7 items-center justify-center rounded bg-[#BCE7DD] text-[10px] font-black text-[#173F3B]">{index + 1}</span>
                <span className="text-xs font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px] font-bold text-white/70">
          <span className="rounded bg-white/8 px-2 py-2">REQUEST</span>
          <span className="rounded bg-white/8 px-2 py-2">QUEUE</span>
          <span className="rounded bg-white/8 px-2 py-2">RESPONSE</span>
        </div>
      </figure>
    );
  }

  if (theme === "smoking") {
    const values = [34, 61, 43, 78, 56, 88];
    return (
      <figure className="min-h-[21rem] overflow-hidden rounded-md border border-[#CBC6AA] bg-[#24281D] p-5 text-white" aria-label="흡연 여부에 따른 건강 지표 비교 차트">
        <div className="flex items-start justify-between gap-4 border-b border-white/15 pb-4">
          <div>
            <p className="text-xs font-black">HEALTH INDICATOR</p>
            <p className="mt-1 text-[10px] text-white/55">SMOKER / NON-SMOKER</p>
          </div>
          <div className="flex gap-3 text-[10px] text-white/65">
            <span><i className="mr-1 inline-block h-2 w-2 rounded-sm bg-[#D98268]" />흡연</span>
            <span><i className="mr-1 inline-block h-2 w-2 rounded-sm bg-[#A7B879]" />비흡연</span>
          </div>
        </div>
        <div className="mt-7 flex h-44 items-end gap-3 border-b border-l border-white/20 px-4 pt-4">
          {values.map((value, index) => (
            <div key={`${value}-${index}`} className="flex h-full flex-1 items-end gap-1">
              <span className="w-1/2 bg-[#D98268]" style={{ height: `${value}%` }} />
              <span className="w-1/2 bg-[#A7B879]" style={{ height: `${Math.max(24, value - 17)}%` }} />
            </div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-[10px] font-bold text-white/65">
          <span>BMI GROUP</span>
          <span>AGE GROUP</span>
          <span>LAB VALUE</span>
        </div>
      </figure>
    );
  }

  return (
    <figure className="min-h-[21rem] overflow-hidden rounded-md border border-[#D1B8B1] bg-[#351F22] p-5 text-white" aria-label="난임 임신 성공 예측 모델의 검증 과정을 표현한 화면">
      <div className="flex items-center justify-between border-b border-white/15 pb-4">
        <p className="text-xs font-black">MODEL VALIDATION</p>
        <span className="rounded bg-[#F2B6A7] px-2 py-1 text-[10px] font-black text-[#351F22]">3RD PLACE</span>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        {["CATBOOST", "LIGHTGBM", "OOF AUC", "BLENDING"].map((item, index) => (
          <div key={item} className="rounded-md border border-white/15 bg-white/5 p-3">
            <p className="text-[10px] text-white/50">0{index + 1}</p>
            <p className="mt-3 text-xs font-black">{item}</p>
            <div className="mt-3 h-1.5 bg-white/10">
              <span className="block h-full bg-[#F2B6A7]" style={{ width: `${56 + index * 10}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-md border border-white/15 bg-[#F7E5DF] p-4 text-[#351F22]">
        <div className="flex items-end gap-2">
          {[42, 55, 68, 62, 79, 88].map((height, index) => (
            <span key={`${height}-${index}`} className="flex-1 bg-[#A7473A]" style={{ height: `${height * 0.7}px` }} />
          ))}
        </div>
        <p className="mt-3 text-[10px] font-black">BASELINE → ENSEMBLE → FINAL</p>
      </div>
    </figure>
  );
}

export function ProjectCaseStudyHeader({ theme, eyebrow, title, summary, tags, facts, navigation }: ProjectCaseStudyHeaderProps) {
  const colors = themes[theme];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1D1F22]/95 text-white backdrop-blur">
        <div className="mx-auto flex min-h-16 max-w-[1240px] items-center gap-4 px-5 sm:px-8">
          <Link href="/" className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-[#B9E4D0] text-xs font-black text-[#1D1F22]" aria-label="포트폴리오 홈">
            KJH
          </Link>
          <nav className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="프로젝트 상세 메뉴">
            {navigation}
          </nav>
        </div>
      </header>

      <section className={`${colors.shell} border-b ${colors.border}`}>
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <div className="min-w-0">
            <p className={`text-xs font-black uppercase ${colors.accent}`}>{eyebrow}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-[1.18] [word-break:keep-all] sm:text-6xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 opacity-70 sm:text-lg">{summary}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className={`rounded border px-3 py-1.5 text-xs font-bold ${colors.tag}`}>{tag}</span>
              ))}
            </div>
            <dl className={`mt-9 grid gap-px overflow-hidden rounded-md border ${colors.border} sm:grid-cols-3`}>
              {facts.map((fact) => (
                <div key={fact.label} className="bg-white/55 p-4">
                  <dt className={`text-[10px] font-black uppercase ${colors.accent}`}>{fact.label}</dt>
                  <dd className="mt-2 text-sm font-black">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <ProjectHeroVisual theme={theme} />
        </div>
      </section>
    </>
  );
}
