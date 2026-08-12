import type { Metadata } from "next";
import { ProjectCaseStudyHeader } from "@/components/ProjectCaseStudyHeader";
import { projects } from "@/data/projects";

const slug = "smoking-status-data-analysis";
const project = projects.find((item) => item.slug === slug);

if (!project?.detail) {
  throw new Error(`Project not found: ${slug}`);
}

const detail = project.detail;
const projectTitle = project.title;

export const metadata: Metadata = {
  title: `${project.title} | 김지현 AI/Data Portfolio`,
  description: detail.oneLine
};

const navigation = [
  { href: "#overview", label: "OVERVIEW" },
  { href: "#analysis", label: "ANALYSIS" },
  { href: "#evidence", label: "EVIDENCE" },
  { href: "#lessons", label: "LESSONS" }
];

const indicators = [
  { label: "중성지방", group: "대사 지표", color: "bg-[#D98268]" },
  { label: "헤모글로빈", group: "혈액 지표", color: "bg-[#87965F]" },
  { label: "간 효소율", group: "간 기능", color: "bg-[#C6A35B]" },
  { label: "BMI · 연령대", group: "그룹 변수", color: "bg-[#728E8B]" }
];

const workflow = [
  ["01", "데이터 점검", "변수 구조, 결측치, 분포를 먼저 확인했습니다."],
  ["02", "그룹 설계", "흡연 여부와 BMI·연령대 기준으로 비교 집단을 나눴습니다."],
  ["03", "분포 비교", "박스플롯과 히스토그램으로 건강 지표 차이를 탐색했습니다."],
  ["04", "통계 검정", "t-검정과 ANOVA로 관찰한 차이의 유의성을 확인했습니다."],
  ["05", "해석 정리", "수치 차이를 건강 데이터 맥락과 한계까지 함께 기록했습니다."]
];

export default function SmokingStatusDataAnalysisPage() {
  return (
    <main className="min-h-screen bg-[#FBFAF4] text-[#24251D]">
      <ProjectCaseStudyHeader
        theme="smoking"
        eyebrow="Health Data · Statistical Analysis"
        title={projectTitle}
        summary={detail.oneLine}
        tags={["Python", "Pandas", "Seaborn", "SciPy", "Statsmodels"]}
        facts={[
          { label: "Focus", value: "흡연자·비흡연자 비교" },
          { label: "Method", value: "EDA · t-test · ANOVA" },
          { label: "Output", value: "시각화 · 통계 인사이트" }
        ]}
        navigation={navigation.map((item) => (
          <a key={item.href} href={item.href} className="shrink-0 rounded px-3 py-2 text-xs font-bold text-white/65 transition hover:bg-white/10 hover:text-white">
            {item.label}
          </a>
        ))}
      />

      <section id="overview" className="scroll-mt-24 border-b border-[#DEDAC8] py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-black text-[#65713E]">01 · OVERVIEW</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">무엇을 확인했나</h2>
            <p className="mt-5 text-sm leading-7 text-[#676858]">흡연 여부가 주요 건강검진 지표와 어떤 관계를 보이는지 탐색하고, 눈에 보이는 차이가 통계적으로도 의미가 있는지 확인했습니다.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {indicators.map((indicator) => (
              <article key={indicator.label} className="rounded-md border border-[#D8D3BE] bg-white p-5">
                <div className={`h-2 w-12 ${indicator.color}`} />
                <p className="mt-7 text-xs font-bold text-[#777863]">{indicator.group}</p>
                <h3 className="mt-2 text-xl font-black">{indicator.label}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="analysis" className="scroll-mt-24 bg-[#25291E] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="grid gap-5 border-b border-white/15 pb-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="text-xs font-black text-[#B8C58B]">02 · ANALYSIS FLOW</p>
              <h2 className="mt-3 text-3xl font-black sm:text-5xl">분석 과정</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/60 md:justify-self-end">결론부터 정하지 않고 데이터 품질과 그룹 정의를 먼저 확인한 뒤, 시각화와 검정을 연결했습니다.</p>
          </div>
          <ol className="mt-4">
            {workflow.map(([number, title, body]) => (
              <li key={number} className="grid gap-3 border-b border-white/15 py-6 sm:grid-cols-[4rem_13rem_1fr] sm:items-center">
                <span className="text-xs font-black text-[#B8C58B]">{number}</span>
                <strong className="text-lg">{title}</strong>
                <p className="text-sm leading-7 text-white/60">{body}</p>
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
                <p className="text-xs font-black text-[#65713E]">COMPARISON FRAME</p>
                <h2 className="mt-2 text-2xl font-black">지표별 비교 구조</h2>
              </div>
              <p className="text-xs text-[#777863]">시각화 → 가설 검정 → 해석</p>
            </div>
            <div className="mt-8 grid gap-6">
              {[78, 62, 86, 55].map((value, index) => (
                <div key={value} className="grid grid-cols-[6rem_1fr] items-center gap-4">
                  <span className="text-xs font-bold text-[#676858]">{indicators[index].label}</span>
                  <div className="grid gap-2">
                    <div className="h-3 bg-[#EEEBDD]"><span className="block h-full bg-[#D98268]" style={{ width: `${value}%` }} /></div>
                    <div className="h-3 bg-[#EEEBDD]"><span className="block h-full bg-[#87965F]" style={{ width: `${Math.max(30, value - 18)}%` }} /></div>
                  </div>
                </div>
              ))}
            </div>
            <figcaption className="mt-7 border-t border-[#E5E1D2] pt-4 text-xs leading-6 text-[#777863]">위 그래픽은 분석 항목과 비교 방식을 설명하기 위한 구성도이며, 실제 수치를 임의로 제시하지 않습니다.</figcaption>
          </figure>

          <div className="grid gap-4">
            <article className="rounded-md border border-[#D8D3BE] bg-[#F2EFE3] p-6">
              <p className="text-xs font-black text-[#65713E]">STATISTICAL CHECK</p>
              <h3 className="mt-3 text-2xl font-black">보이는 차이를 그대로 믿지 않았습니다.</h3>
              <p className="mt-4 text-sm leading-7 text-[#676858]">t-검정과 ANOVA를 사용해 그룹 간 차이를 확인하고, 연령대와 BMI 같은 조건이 해석에 미치는 영향도 함께 살폈습니다.</p>
            </article>
            <article className="rounded-md border border-[#D8D3BE] bg-[#DCE6DE] p-6">
              <p className="text-xs font-black text-[#47635A]">INTERPRETATION</p>
              <h3 className="mt-3 text-xl font-black">분석 결과와 한계를 같이 기록</h3>
              <p className="mt-4 text-sm leading-7 text-[#506158]">관계가 확인되더라도 인과관계로 단정하지 않고, 표본 구성과 추가 변수의 필요성을 결과에 포함했습니다.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="lessons" className="scroll-mt-24 border-t border-[#DEDAC8] bg-[#E7E2D0] py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-xs font-black text-[#65713E]">03 · LESSONS</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">배운 점</h2>
          </div>
          <div className="grid gap-3">
            {detail.lessons.map((lesson, index) => (
              <article key={lesson} className="grid gap-3 rounded-md border border-[#CDC7AF] bg-[#FBFAF4] p-5 sm:grid-cols-[3rem_1fr]">
                <span className="text-xs font-black text-[#65713E]">0{index + 1}</span>
                <p className="text-sm leading-7 text-[#5F604F]">{lesson}</p>
              </article>
            ))}
            <p className="mt-3 text-xs leading-6 text-[#777863]">{detail.disclosure}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
