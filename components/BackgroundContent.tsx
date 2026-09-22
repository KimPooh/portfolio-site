"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { useLanguage } from "@/lib/language";

const careerTimeline = [
  {
    period: { kr: "2021. 10 ~ 2022. 04", en: "Oct 2021 – Apr 2022" },
    duration: { kr: "7개월 · 서울", en: "7 months · Seoul" },
    org: { kr: "강동길동매일365한의원 · 원무과", en: "Gangdong Gildong Maeil365 Korean Medicine Clinic · Front Desk" },
    role: { kr: "원무과 부장·팀장", en: "Front Desk Manager / Team Lead" },
    body: {
      kr: "인사·총무·원무 행정 업무 전반을 관리했습니다. 급여, 4대보험, 근태, 채용 등 정기 업무의 일정과 진행 상황을 관리하며 행정 오류를 사전에 점검했고, 채용 공고부터 지원자 검토·면접·입퇴사 행정을 담당했습니다. 의료 분쟁 발생 시에는 의료중재원 참관과 커뮤니케이션으로 원만한 합의를 이끌었습니다.",
      en: "Managed HR, general affairs, and front-desk administration end to end. Tracked recurring work — payroll, four major insurances, attendance, hiring — catching administrative errors ahead of time, and ran hiring from job postings through candidate screening, interviews, and onboarding/offboarding. When medical disputes came up, attended mediation sessions and communicated to reach an amicable settlement."
    }
  },
  {
    period: { kr: "2021. 07 ~ 2021. 09", en: "Jul 2021 – Sep 2021" },
    duration: { kr: "3개월 · 서울", en: "3 months · Seoul" },
    org: { kr: "최상산부인과 · 경영지원부", en: "Choesang OB-GYN · Management Support" },
    role: { kr: "경영지원부 부장·팀장", en: "Management Support Manager / Team Lead" },
    body: {
      kr: "병원 운영에 필요한 인사·총무·채용·경영지원 업무 전반을 관리했습니다. 행정·인력 관련 현안을 파악해 경영진·직원과 조율했고, 채용 지원자 검토·면접·입퇴사 업무를 수행했습니다.",
      en: "Managed the HR, general affairs, hiring, and management-support work the clinic needed to run. Identified administrative and staffing issues and coordinated with management and staff, and handled candidate screening, interviews, and onboarding/offboarding."
    }
  },
  {
    period: { kr: "2015. 08 ~ 2019. 10", en: "Aug 2015 – Oct 2019" },
    duration: { kr: "4년 2개월", en: "4 years 2 months" },
    org: { kr: "지앤지병원", en: "G&G Hospital" },
    role: { kr: "과장·총무", en: "Manager, General Affairs" },
    body: {
      kr: "고객 컴플레인·분쟁 대응을 전담해 1년간 약 1억 2천만 원 규모의 민원·분쟁을 당사자 간 합의로 해결했습니다. 사안별 발생 원인과 고객 요구사항을 파악해 내부 책임자·관련 부서와 조율하며 장기 분쟁을 예방했고, 진료 접수·수납·보험 청구 등 원무 행정 전반과 인사·급여·4대보험·총무·시설관리 등 조직 운영 행정을 총괄했습니다.",
      en: "Owned customer complaint and dispute resolution, settling about ₩120 million worth of complaints and disputes through direct agreement in one year. Identified the root cause and the customer's ask for each case and coordinated with internal owners and departments to prevent disputes from dragging on, while overseeing front-desk administration (registration, billing, insurance claims) and organizational operations (HR, payroll, four major insurances, general affairs, facilities)."
    }
  }
];

const education = [
  {
    period: { kr: "2003. 02 ~ 2006. 03", en: "Feb 2003 – Mar 2006" },
    org: { kr: "곤지암고등학교", en: "Gonjiam High School" },
    detail: { kr: "졸업 (실업계열)", en: "Graduated (vocational track)" }
  }
];

const certifications = [
  {
    period: { kr: "수료 예정 · 2026. 09. 28", en: "Expected completion · Sep 28, 2026" },
    title: { kr: "AI 헬스케어 데이터 분석 및 모델링 실무 양성 과정", en: "AI Healthcare Data Analysis & Modeling Practical Training Course" }
  }
];

const targetRoles = [
  { kr: "머신러닝 엔지니어", en: "Machine Learning Engineer" },
  { kr: "빅데이터 엔지니어", en: "Big Data Engineer" },
  { kr: "AI/AX 엔지니어", en: "AI/AX Engineer" },
  { kr: "데이터 분석", en: "Data Analyst" },
  { kr: "데이터 사이언티스트", en: "Data Scientist" }
];

const copyByLanguage = {
  kr: {
    kicker: "Background",
    title1: "의료 현장에서",
    title2: "데이터로",
    heroBody:
      "AI/Data를 배우기 전에는 5년간 병원 행정·인사·총무 및 고객 분쟁 조정 업무를 담당했습니다. 숫자와 문서로 현장을 정리하고 설명해야 했던 경험은, 지금 데이터로 문제를 정리하고 프로젝트로 만드는 과정과 자연스럽게 이어지고 있습니다.",
    resumeButton: "이력서 PDF 다운로드",
    portfolioButton: "포트폴리오 요약 PDF 다운로드",
    careerKicker: "Career · 총 5년",
    careerTitle: "의료기관 실무 경력",
    educationKicker: "Education",
    educationTitle: "학력 · 교육",
    targetRoleKicker: "Target Role",
    targetRoleTitle: "희망 직무",
    nowKicker: "Now",
    nowTitle: "AI/Data로 이어가는 중",
    nowBody: "의료 현장에서 쌓은 경험을 바탕으로, 지금은 Python, 머신러닝, 웹 서비스 구현을 배우며 실제 프로젝트로 연결하고 있습니다.",
    journeyButton: "학습 여정 보기",
    projectsButton: "프로젝트 보기"
  },
  en: {
    kicker: "Background",
    title1: "From healthcare",
    title2: "to data.",
    heroBody:
      "Before learning AI/Data, I spent 5 years in hospital administration, HR, general affairs, and customer dispute resolution. The experience of organizing and explaining what happens on the ground with numbers and documents now carries naturally into organizing problems with data and turning them into projects.",
    resumeButton: "Download Resume PDF",
    portfolioButton: "Download Portfolio Summary PDF",
    careerKicker: "Career · 5 years total",
    careerTitle: "Healthcare Administration Experience",
    educationKicker: "Education",
    educationTitle: "Education & Training",
    targetRoleKicker: "Target Role",
    targetRoleTitle: "Target Roles",
    nowKicker: "Now",
    nowTitle: "Carrying It Into AI/Data",
    nowBody: "Building on the experience from healthcare, I'm now learning Python, machine learning, and web implementation and connecting them to real projects.",
    journeyButton: "See the Learning Journey",
    projectsButton: "See Projects"
  }
};

export default function BackgroundContent() {
  const { language } = useLanguage();
  const copy = copyByLanguage[language];

  return (
    <main className="min-h-screen bg-[#141821] text-[#F4F0E8]">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-sm font-black text-[#F0A58D]">{copy.kicker}</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-7xl">
          {copy.title1}
          <br />
          {copy.title2}
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-[#B9C0CD]">{copy.heroBody}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="/resume/kimjihyun-resume-2026.pdf"
            download="김지현_이력서_2026.pdf"
            className="inline-flex min-h-12 items-center gap-2 rounded-md border border-white/20 px-5 text-sm font-black text-[#F4F0E8] transition hover:-translate-y-0.5 hover:border-[#F0A58D] hover:text-[#F0A58D]"
          >
            {copy.resumeButton}
          </a>
          <a
            href="/portfolio/kimjihyun-portfolio-2026.pdf"
            download="김지현_포트폴리오.pdf"
            className="inline-flex min-h-12 items-center gap-2 rounded-md border border-white/20 px-5 text-sm font-black text-[#F4F0E8] transition hover:-translate-y-0.5 hover:border-[#F0A58D] hover:text-[#F0A58D]"
          >
            {copy.portfolioButton}
          </a>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#1C2230] py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-sm font-black text-[#D8C7FF]">{copy.careerKicker}</p>
          <h2 className="mt-2 text-4xl font-black tracking-tight">{copy.careerTitle}</h2>

          <div className="mt-9 space-y-5">
            {careerTimeline.map((item) => (
              <article key={item.org.kr} className="grid gap-4 border border-white/10 bg-white/[0.055] p-6 md:grid-cols-[12rem_1fr]">
                <div>
                  <p className="text-sm font-black text-[#F0A58D]">{item.period[language]}</p>
                  <p className="mt-2 text-xs font-bold text-[#98A2B3]">{item.duration[language]}</p>
                </div>
                <div>
                  <h3 className="text-xl font-black">{item.org[language]}</h3>
                  <p className="mt-1 text-sm font-bold text-[#D8C7FF]">{item.role[language]}</p>
                  <p className="mt-3 text-sm leading-7 text-[#B9C0CD]">{item.body[language]}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 md:grid-cols-2">
          <div>
            <p className="text-sm font-black text-[#B9E4D0]">{copy.educationKicker}</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">{copy.educationTitle}</h2>
            <div className="mt-6 space-y-4">
              {education.map((item) => (
                <div key={item.org.kr} className="border border-white/10 bg-white/[0.055] p-5">
                  <p className="text-xs font-black text-[#98A2B3]">{item.period[language]}</p>
                  <p className="mt-1 text-base font-black">{item.org[language]}</p>
                  <p className="mt-1 text-sm text-[#B9C0CD]">{item.detail[language]}</p>
                </div>
              ))}
              {certifications.map((item) => (
                <div key={item.title.kr} className="border border-white/10 bg-white/[0.055] p-5">
                  <p className="text-xs font-black text-[#98A2B3]">{item.period[language]}</p>
                  <p className="mt-1 text-base font-black">{item.title[language]}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-black text-[#D8C7FF]">{copy.targetRoleKicker}</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">{copy.targetRoleTitle}</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {targetRoles.map((role) => (
                <span key={role.kr} className="rounded-md border border-white/15 bg-white/[0.055] px-4 py-2 text-sm font-bold text-[#F4F0E8]">
                  {role[language]}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <p className="text-sm font-black text-[#B9FF7A]">{copy.nowKicker}</p>
        <h2 className="mt-2 text-4xl font-black tracking-tight">{copy.nowTitle}</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#B9C0CD]">{copy.nowBody}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/journey"
            className="inline-flex min-h-12 items-center gap-2 rounded-md bg-[#F5F1E8] px-5 text-sm font-black text-[#15171B] transition hover:-translate-y-0.5"
          >
            {copy.journeyButton}
          </Link>
          <Link
            href="/#projects"
            className="inline-flex min-h-12 items-center gap-2 rounded-md border border-white/20 px-5 text-sm font-black text-[#F4F0E8] transition hover:-translate-y-0.5 hover:border-[#F0A58D] hover:text-[#F0A58D]"
          >
            {copy.projectsButton}
          </Link>
        </div>
      </section>
    </main>
  );
}
