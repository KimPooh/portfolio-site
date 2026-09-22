import Link from "next/link";

const careerTimeline = [
  {
    period: "2021. 10 ~ 2022. 04",
    duration: "7개월 · 서울",
    org: "강동길동매일365한의원 · 원무과",
    role: "원무과 부장·팀장",
    body: "인사·총무·원무 행정 업무 전반을 관리했습니다. 급여, 4대보험, 근태, 채용 등 정기 업무의 일정과 진행 상황을 관리하며 행정 오류를 사전에 점검했고, 채용 공고부터 지원자 검토·면접·입퇴사 행정을 담당했습니다. 의료 분쟁 발생 시에는 의료중재원 참관과 커뮤니케이션으로 원만한 합의를 이끌었습니다."
  },
  {
    period: "2021. 07 ~ 2021. 09",
    duration: "3개월 · 서울",
    org: "최상산부인과 · 경영지원부",
    role: "경영지원부 부장·팀장",
    body: "병원 운영에 필요한 인사·총무·채용·경영지원 업무 전반을 관리했습니다. 행정·인력 관련 현안을 파악해 경영진·직원과 조율했고, 채용 지원자 검토·면접·입퇴사 업무를 수행했습니다."
  },
  {
    period: "2015. 08 ~ 2019. 10",
    duration: "4년 2개월",
    org: "지앤지병원",
    role: "과장·총무",
    body: "고객 컴플레인·분쟁 대응을 전담해 1년간 약 1억 2천만 원 규모의 민원·분쟁을 당사자 간 합의로 해결했습니다. 사안별 발생 원인과 고객 요구사항을 파악해 내부 책임자·관련 부서와 조율하며 장기 분쟁을 예방했고, 진료 접수·수납·보험 청구 등 원무 행정 전반과 인사·급여·4대보험·총무·시설관리 등 조직 운영 행정을 총괄했습니다."
  }
];

const education = [
  {
    period: "2003. 02 ~ 2006. 03",
    org: "곤지암고등학교",
    detail: "졸업 (실업계열)"
  }
];

const certifications = [
  {
    period: "수료 예정 · 2026. 09. 28",
    title: "AI 헬스케어 데이터 분석 및 모델링 실무 양성 과정"
  }
];

const targetRoles = ["머신러닝 엔지니어", "빅데이터 엔지니어", "AI/AX 엔지니어", "데이터 분석", "데이터 사이언티스트"];

export const metadata = {
  title: "김지현 Background | 의료 현장에서 데이터로",
  description: "김지현이 AI/Data를 배우기 전, 병원 행정·인사·총무 현장에서 5년간 쌓은 경력 배경입니다."
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
          AI/Data를 배우기 전에는 5년간 병원 행정·인사·총무 및 고객 분쟁 조정 업무를 담당했습니다.
          숫자와 문서로 현장을 정리하고 설명해야 했던 경험은, 지금 데이터로 문제를 정리하고 프로젝트로 만드는 과정과 자연스럽게 이어지고 있습니다.
        </p>
        <a
          href="/resume/kimjihyun-resume-2026.pdf"
          download="김지현_이력서_2026.pdf"
          className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-md border border-white/20 px-5 text-sm font-black text-[#F4F0E8] transition hover:-translate-y-0.5 hover:border-[#F0A58D] hover:text-[#F0A58D]"
        >
          이력서 PDF 다운로드
        </a>
      </section>

      <section className="border-y border-white/10 bg-[#1C2230] py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-sm font-black text-[#D8C7FF]">Career · 총 5년</p>
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

      <section className="border-b border-white/10 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 md:grid-cols-2">
          <div>
            <p className="text-sm font-black text-[#B9E4D0]">Education</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">학력 · 교육</h2>
            <div className="mt-6 space-y-4">
              {education.map((item) => (
                <div key={item.org} className="border border-white/10 bg-white/[0.055] p-5">
                  <p className="text-xs font-black text-[#98A2B3]">{item.period}</p>
                  <p className="mt-1 text-base font-black">{item.org}</p>
                  <p className="mt-1 text-sm text-[#B9C0CD]">{item.detail}</p>
                </div>
              ))}
              {certifications.map((item) => (
                <div key={item.title} className="border border-white/10 bg-white/[0.055] p-5">
                  <p className="text-xs font-black text-[#98A2B3]">{item.period}</p>
                  <p className="mt-1 text-base font-black">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-black text-[#D8C7FF]">Target Role</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">희망 직무</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {targetRoles.map((role) => (
                <span key={role} className="rounded-md border border-white/15 bg-white/[0.055] px-4 py-2 text-sm font-bold text-[#F4F0E8]">
                  {role}
                </span>
              ))}
            </div>
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
