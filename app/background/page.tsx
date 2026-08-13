import Link from "next/link";

const careerTimeline = [
  {
    period: "2022. 10 ~ 2024. 12",
    duration: "2년 2개월",
    org: "강동길동매일365한의원 · 원무",
    role: "원무 부장",
    body: "원무와 보험심사·청구를 담당하고, 주변 병원·시장·구청과 협력 관계를 만드는 대외 업무도 함께 맡았습니다."
  },
  {
    period: "2021. 07 ~ 2022. 07",
    duration: "1년",
    org: "최상산부인과 · 경영관리부",
    role: "경영관리부 부장",
    body: "경영기획, 문서작성, 자료조사, 통계·분석 업무를 맡아 병원 운영 데이터를 정리하고 해석하는 일을 했습니다."
  },
  {
    period: "2015. 11 ~ 2019. 10",
    duration: "4년",
    org: "지앤지병원 · 관리부",
    role: "관리부 과장",
    body: "교육기획, 급여관리, 복리후생, 조직문화, 평가·보상과 총무 업무를 함께 담당하며 병원 운영 전반을 다뤘습니다."
  },
  {
    period: "2012. 03 ~ 2015. 06",
    duration: "3년 3개월",
    org: "강동성심병원 · 진단검사의학과 & 병리과",
    role: "혈액검사보조 및 사무·경영지원",
    body: "진단검사의학과와 병리과에서 혈액검사 보조 업무와 함께 부서 사무·경영지원 업무를 담당했습니다."
  },
  {
    period: "2009. 10 ~ 2010. 10",
    duration: "1년 1개월",
    org: "신촌세브란스병원 · 원무과",
    role: "원무과",
    body: "환자 접수, 진료비 수납, 보험 청구 등 원무 업무를 담당하며 병원 행정 프로세스를 익혔습니다."
  }
];

export const metadata = {
  title: "김지현 Background | 의료 현장에서 데이터로",
  description: "김지현이 AI/Data를 배우기 전, 의료 현장에서 쌓은 경력 배경입니다."
};

export default function BackgroundPage() {
  return (
    <main className="min-h-screen bg-[#141821] text-[#F4F0E8]">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#141821]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="text-base font-black tracking-tight">
            JIHYUN
          </Link>
          <nav className="flex items-center gap-4 overflow-x-auto text-sm font-bold text-[#AAB2C0]">
            <Link href="/#about" className="shrink-0 transition hover:text-[#F0A58D]">
              소개
            </Link>
            <Link href="/#skills" className="shrink-0 transition hover:text-[#F0A58D]">
              기술
            </Link>
            <Link href="/#projects" className="shrink-0 transition hover:text-[#F0A58D]">
              프로젝트
            </Link>
            <Link href="/background" className="shrink-0 transition hover:text-[#F0A58D]">
              배경
            </Link>
            <Link href="/journey" className="shrink-0 transition hover:text-[#F0A58D]">
              여정
            </Link>
            <Link href="/#contact" className="shrink-0 transition hover:text-[#F0A58D]">
              연락
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-sm font-black text-[#F0A58D]">Background</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-7xl">
          의료 현장에서
          <br />
          데이터로
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-[#B9C0CD]">
          AI/Data를 배우기 전에는 10년 넘게 병원과 의료기관에서 원무, 경영지원, 환자 응대 업무를 맡았습니다.
          숫자와 문서로 현장을 정리하고 설명해야 했던 경험은, 지금 데이터로 문제를 정리하고 프로젝트로 만드는 과정과 자연스럽게 이어지고 있습니다.
        </p>
      </section>

      <section className="border-y border-white/10 bg-[#1C2230] py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-sm font-black text-[#D8C7FF]">Career</p>
          <h2 className="mt-2 text-4xl font-black tracking-tight">의료기관 실무 경력</h2>

          <div className="mt-9 space-y-5">
            {careerTimeline.map((item) => (
              <article key={item.org} className="grid gap-4 border border-white/10 bg-white/[0.055] p-6 md:grid-cols-[12rem_1fr]">
                <div>
                  <p className="text-sm font-black text-[#F0A58D]">{item.period}</p>
                  <p className="mt-2 text-xs font-bold text-[#98A2B3]">{item.duration}</p>
                </div>
                <div>
                  <h3 className="text-xl font-black">{item.org}</h3>
                  <p className="mt-1 text-sm font-bold text-[#D8C7FF]">{item.role}</p>
                  <p className="mt-3 text-sm leading-7 text-[#B9C0CD]">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <p className="text-sm font-black text-[#B9FF7A]">Now</p>
        <h2 className="mt-2 text-4xl font-black tracking-tight">AI/Data로 이어가는 중</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#B9C0CD]">
          의료 현장에서 쌓은 경험을 바탕으로, 지금은 Python, 머신러닝, 웹 서비스 구현을 배우며 실제 프로젝트로 연결하고 있습니다.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/journey"
            className="inline-flex min-h-12 items-center gap-2 rounded-md bg-[#F5F1E8] px-5 text-sm font-black text-[#15171B] transition hover:-translate-y-0.5"
          >
            학습 여정 보기
          </Link>
          <Link
            href="/#projects"
            className="inline-flex min-h-12 items-center gap-2 rounded-md border border-white/20 px-5 text-sm font-black text-[#F4F0E8] transition hover:-translate-y-0.5 hover:border-[#F0A58D] hover:text-[#F0A58D]"
          >
            프로젝트 보기
          </Link>
        </div>
      </section>
    </main>
  );
}
