"use client";

import { ProjectCaseStudyHeader } from "@/components/ProjectCaseStudyHeader";
import { projects } from "@/data/projects";
import { useLanguage } from "@/lib/language";
import type { Bilingual } from "@/types/portfolio";

const bi = (kr: string, en: string): Bilingual => ({ kr, en });

const slug = "smoking-status-data-analysis";
const project = projects.find((item) => item.slug === slug);

if (!project?.detail) {
  throw new Error(`Project not found: ${slug}`);
}

const detail = project.detail;
const projectTitle = project.title;

const indicators = [
  { label: bi("중성지방", "Triglycerides"), group: bi("대사 지표", "Metabolic indicator"), color: "bg-[#D98268]" },
  { label: bi("헤모글로빈", "Hemoglobin"), group: bi("혈액 지표", "Blood indicator"), color: "bg-[#87965F]" },
  { label: bi("간 효소율", "Liver enzyme level"), group: bi("간 기능", "Liver function"), color: "bg-[#C6A35B]" },
  { label: bi("BMI · 연령대", "BMI · Age Group"), group: bi("그룹 변수", "Group variable"), color: "bg-[#728E8B]" }
];

const workflow = [
  ["01", bi("데이터 점검", "Data check"), bi("변수 구조, 결측치, 분포를 먼저 확인했습니다.", "Checked variable structure, missing values, and distributions first.")],
  ["02", bi("그룹 설계", "Group design"), bi("흡연 여부와 BMI·연령대 기준으로 비교 집단을 나눴습니다.", "Split comparison groups by smoking status and by BMI/age group.")],
  ["03", bi("분포 비교", "Distribution comparison"), bi("박스플롯과 히스토그램으로 건강 지표 차이를 탐색했습니다.", "Explored health-indicator differences with box plots and histograms.")],
  ["04", bi("통계 검정", "Statistical testing"), bi("t-검정과 ANOVA로 관찰한 차이의 유의성을 확인했습니다.", "Checked the significance of observed differences with t-tests and ANOVA.")],
  ["05", bi("해석 정리", "Interpretation"), bi("수치 차이를 건강 데이터 맥락과 한계까지 함께 기록했습니다.", "Recorded the numeric differences alongside their health-data context and limitations.")]
] as const;

const copyByLanguage = {
  kr: {
    eyebrow: "Health Data · Statistical Analysis",
    facts: [
      { label: "Focus", value: "흡연자·비흡연자 비교" },
      { label: "Method", value: "EDA · t-test · ANOVA" },
      { label: "Output", value: "시각화 · 통계 인사이트" }
    ],
    nav: [
      { href: "#overview", label: "OVERVIEW" },
      { href: "#analysis", label: "ANALYSIS" },
      { href: "#evidence", label: "EVIDENCE" },
      { href: "#lessons", label: "LESSONS" }
    ],
    overviewEyebrow: "01 · OVERVIEW",
    overviewTitle: "무엇을 확인했나",
    overviewBody: "흡연 여부가 주요 건강검진 지표와 어떤 관계를 보이는지 탐색하고, 눈에 보이는 차이가 통계적으로도 의미가 있는지 확인했습니다.",
    analysisEyebrow: "02 · ANALYSIS FLOW",
    analysisTitle: "분석 과정",
    analysisBody: "결론부터 정하지 않고 데이터 품질과 그룹 정의를 먼저 확인한 뒤, 시각화와 검정을 연결했습니다.",
    comparisonFrame: "COMPARISON FRAME",
    comparisonTitle: "지표별 비교 구조",
    comparisonCaption: "시각화 → 가설 검정 → 해석",
    comparisonFigcaption: "위 그래픽은 분석 항목과 비교 방식을 설명하기 위한 구성도이며, 실제 수치를 임의로 제시하지 않습니다.",
    statCheckLabel: "STATISTICAL CHECK",
    statCheckTitle: "보이는 차이를 그대로 믿지 않았습니다.",
    statCheckBody: "t-검정과 ANOVA를 사용해 그룹 간 차이를 확인하고, 연령대와 BMI 같은 조건이 해석에 미치는 영향도 함께 살폈습니다.",
    interpretationLabel: "INTERPRETATION",
    interpretationTitle: "분석 결과와 한계를 같이 기록",
    interpretationBody: "관계가 확인되더라도 인과관계로 단정하지 않고, 표본 구성과 추가 변수의 필요성을 결과에 포함했습니다.",
    lessonsEyebrow: "03 · LESSONS",
    lessonsTitle: "배운 점"
  },
  en: {
    eyebrow: "Health Data · Statistical Analysis",
    facts: [
      { label: "Focus", value: "Smokers vs. non-smokers" },
      { label: "Method", value: "EDA · t-test · ANOVA" },
      { label: "Output", value: "Visualization · Statistical Insight" }
    ],
    nav: [
      { href: "#overview", label: "OVERVIEW" },
      { href: "#analysis", label: "ANALYSIS" },
      { href: "#evidence", label: "EVIDENCE" },
      { href: "#lessons", label: "LESSONS" }
    ],
    overviewEyebrow: "01 · OVERVIEW",
    overviewTitle: "What I Set Out to Check",
    overviewBody: "Explored how smoking status relates to key health-checkup indicators, and checked whether the visible differences were also statistically meaningful.",
    analysisEyebrow: "02 · ANALYSIS FLOW",
    analysisTitle: "Analysis Process",
    analysisBody: "Checked data quality and group definitions first instead of deciding the conclusion up front, then connected that to visualization and testing.",
    comparisonFrame: "COMPARISON FRAME",
    comparisonTitle: "Comparison Structure by Indicator",
    comparisonCaption: "Visualize → Hypothesis test → Interpret",
    comparisonFigcaption: "The graphic above illustrates the analysis items and comparison method; it does not present real figures.",
    statCheckLabel: "STATISTICAL CHECK",
    statCheckTitle: "I didn't take the visible difference at face value.",
    statCheckBody: "Used t-tests and ANOVA to check the difference between groups, and also looked at how conditions like age group and BMI affected the interpretation.",
    interpretationLabel: "INTERPRETATION",
    interpretationTitle: "Recording Results Alongside Their Limits",
    interpretationBody: "Even where a relationship was confirmed, avoided declaring causation, and included the need for sample composition and additional variables in the results.",
    lessonsEyebrow: "03 · LESSONS",
    lessonsTitle: "Lessons Learned"
  }
};

export default function SmokingStatusContent() {
  const { language } = useLanguage();
  const copy = copyByLanguage[language];

  return (
    <main className="min-h-screen bg-[#FBFAF4] text-[#24251D]">
      <ProjectCaseStudyHeader
        theme="smoking"
        eyebrow={copy.eyebrow}
        title={projectTitle[language]}
        summary={detail.oneLine[language]}
        tags={["Python", "Pandas", "Seaborn", "SciPy", "Statsmodels"]}
        facts={copy.facts}
        navigation={copy.nav.map((item) => (
          <a key={item.href} href={item.href} className="shrink-0 rounded px-3 py-2 text-xs font-bold text-white/65 transition hover:bg-white/10 hover:text-white">
            {item.label}
          </a>
        ))}
      />

      <section id="overview" className="scroll-mt-24 border-b border-[#DEDAC8] py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-black text-[#65713E]">{copy.overviewEyebrow}</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">{copy.overviewTitle}</h2>
            <p className="mt-5 text-sm leading-7 text-[#676858]">{copy.overviewBody}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {indicators.map((indicator) => (
              <article key={indicator.label.kr} className="rounded-md border border-[#D8D3BE] bg-white p-5">
                <div className={`h-2 w-12 ${indicator.color}`} />
                <p className="mt-7 text-xs font-bold text-[#777863]">{indicator.group[language]}</p>
                <h3 className="mt-2 text-xl font-black">{indicator.label[language]}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="analysis" className="scroll-mt-24 bg-[#25291E] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="grid gap-5 border-b border-white/15 pb-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="text-xs font-black text-[#B8C58B]">{copy.analysisEyebrow}</p>
              <h2 className="mt-3 text-3xl font-black sm:text-5xl">{copy.analysisTitle}</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/60 md:justify-self-end">{copy.analysisBody}</p>
          </div>
          <ol className="mt-4">
            {workflow.map(([number, title, body]) => (
              <li key={number} className="grid gap-3 border-b border-white/15 py-6 sm:grid-cols-[4rem_13rem_1fr] sm:items-center">
                <span className="text-xs font-black text-[#B8C58B]">{number}</span>
                <strong className="text-lg">{title[language]}</strong>
                <p className="text-sm leading-7 text-white/60">{body[language]}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="evidence" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 sm:px-8 lg:grid-cols-[1.08fr_0.92fr]">
          <figure className="rounded-md border border-[#D8D3BE] bg-white p-5 sm:p-7">
            <div className="flex flex-col gap-3 border-b border-[#E5E1D2] pb-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-black text-[#65713E]">{copy.comparisonFrame}</p>
                <h2 className="mt-2 text-2xl font-black">{copy.comparisonTitle}</h2>
              </div>
              <p className="text-xs text-[#777863]">{copy.comparisonCaption}</p>
            </div>
            <div className="mt-8 grid gap-6">
              {[78, 62, 86, 55].map((value, index) => (
                <div key={value} className="grid grid-cols-[6rem_1fr] items-center gap-4">
                  <span className="text-xs font-bold text-[#676858]">{indicators[index].label[language]}</span>
                  <div className="grid gap-2">
                    <div className="h-3 bg-[#EEEBDD]"><span className="block h-full bg-[#D98268]" style={{ width: `${value}%` }} /></div>
                    <div className="h-3 bg-[#EEEBDD]"><span className="block h-full bg-[#87965F]" style={{ width: `${Math.max(30, value - 18)}%` }} /></div>
                  </div>
                </div>
              ))}
            </div>
            <figcaption className="mt-7 border-t border-[#E5E1D2] pt-4 text-xs leading-6 text-[#777863]">{copy.comparisonFigcaption}</figcaption>
          </figure>

          <div className="grid gap-4">
            <article className="rounded-md border border-[#D8D3BE] bg-[#F2EFE3] p-6">
              <p className="text-xs font-black text-[#65713E]">{copy.statCheckLabel}</p>
              <h3 className="mt-3 text-2xl font-black">{copy.statCheckTitle}</h3>
              <p className="mt-4 text-sm leading-7 text-[#676858]">{copy.statCheckBody}</p>
            </article>
            <article className="rounded-md border border-[#D8D3BE] bg-[#DCE6DE] p-6">
              <p className="text-xs font-black text-[#47635A]">{copy.interpretationLabel}</p>
              <h3 className="mt-3 text-xl font-black">{copy.interpretationTitle}</h3>
              <p className="mt-4 text-sm leading-7 text-[#506158]">{copy.interpretationBody}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="lessons" className="scroll-mt-24 border-t border-[#DEDAC8] bg-[#E7E2D0] py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-xs font-black text-[#65713E]">{copy.lessonsEyebrow}</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">{copy.lessonsTitle}</h2>
          </div>
          <div className="grid gap-3">
            {detail.lessons.map((lesson, index) => (
              <article key={lesson.kr} className="grid gap-3 rounded-md border border-[#CDC7AF] bg-[#FBFAF4] p-5 sm:grid-cols-[3rem_1fr]">
                <span className="text-xs font-black text-[#65713E]">0{index + 1}</span>
                <p className="text-sm leading-7 text-[#5F604F]">{lesson[language]}</p>
              </article>
            ))}
            <p className="mt-3 text-xs leading-6 text-[#777863]">{detail.disclosure[language]}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
