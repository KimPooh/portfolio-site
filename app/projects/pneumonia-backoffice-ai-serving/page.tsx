"use client";

import { ProjectCaseStudyHeader } from "@/components/ProjectCaseStudyHeader";
import { useLanguage } from "@/lib/language";
import type { Bilingual } from "@/types/portfolio";

const bi = (kr: string, en: string): Bilingual => ({ kr, en });

const flow: Bilingual[] = [
  bi("운영자 로그인", "Operator login"),
  bi("환자 목록 확인", "Check patient list"),
  bi("X-Ray 이미지 업로드", "Upload X-ray image"),
  bi("FastAPI 예측 요청", "FastAPI prediction request"),
  bi("Redis 작업 대기열", "Redis job queue"),
  bi("AI Worker 추론", "AI worker inference"),
  bi("결과 저장", "Save result"),
  bi("대시보드 확인", "Check dashboard")
];

const specs = [
  {
    title: bi("기획 의도", "Product Intent"),
    body: bi(
      "폐렴 예측 모델을 단순 노트북 결과로 끝내지 않고, 병원 운영자가 환자 관리 화면에서 결과를 확인하는 제품 흐름으로 연결하는 것을 목표로 했습니다.",
      "The goal was to carry the pneumonia-prediction model past a notebook result and into a real product flow, where a hospital operator checks the result from a patient-management screen."
    )
  },
  {
    title: bi("사용자 흐름", "User Flow"),
    body: bi(
      "운영자는 환자를 선택하고 X-Ray 이미지를 등록한 뒤 예측 결과와 상태를 확인합니다. 예측이 오래 걸릴 수 있어 작업 큐와 결과 조회 흐름을 분리해 이해했습니다.",
      "The operator selects a patient, registers an X-ray image, then checks the prediction result and status. Since prediction can take a while, the job queue and result lookup were understood as separate flows."
    )
  },
  {
    title: bi("기술 구현 범위", "Technical Scope"),
    body: bi(
      "FastAPI 요청/응답 구조, Docker 실행 환경, Redis 기반 비동기 작업 흐름, AI Worker 분리, 결과 저장과 화면 조회 구조를 학습하고 정리했습니다.",
      "Learned and documented the FastAPI request/response structure, the Docker runtime, a Redis-based async job flow, splitting out an AI worker, and how results are saved and looked up on screen."
    )
  },
  {
    title: bi("검증 관점", "Verification Angle"),
    body: bi(
      "정상 이미지 업로드뿐 아니라 로그인 전 접근, 예측 대기 상태, 실패 응답, 결과 없음 상태처럼 운영 화면에서 필요한 예외 케이스를 함께 고려했습니다.",
      "Beyond a normal image upload, also considered the exception cases an operations screen needs: pre-login access, a pending prediction, a failure response, and a no-result state."
    )
  }
];

const programResults = [
  {
    title: "Backoffice Screen",
    items: [bi("환자 목록", "Patient list"), bi("검사 상태", "Test status"), bi("예측 결과", "Prediction result"), bi("운영자 확인 흐름", "Operator review flow")]
  },
  {
    title: "API Contract",
    items: [bi("인증 요청", "Auth request"), bi("이미지 업로드", "Image upload"), bi("예측 작업 생성", "Create prediction job"), bi("결과 조회", "Result lookup")]
  },
  {
    title: "AI Serving",
    items: [bi("모델 로딩", "Model loading"), bi("이미지 전처리", "Image preprocessing"), bi("추론 결과 반환", "Return inference result"), bi("실패 응답 처리", "Handle failure responses")]
  },
  {
    title: "Run Environment",
    items: [bi("Dockerfile", "Dockerfile"), bi("Container", "Container"), bi("Port 설정", "Port configuration"), bi("서비스 분리", "Service separation")]
  }
];

const decisions = [
  {
    question: bi("왜 모델을 화면에 바로 붙이지 않았나?", "Why not wire the model directly to the screen?"),
    answer: bi(
      "실제 서비스에서는 예측 요청, 대기, 실패, 결과 저장이 분리되기 때문에 API와 Worker 흐름으로 이해하는 편이 더 현실적이라고 판단했습니다.",
      "In a real service, the request, the wait, failures, and saving the result are all separate stages, so understanding it as an API-plus-worker flow felt more realistic."
    )
  },
  {
    question: bi("왜 백오피스 형태로 정리했나?", "Why frame it as a back office?"),
    answer: bi(
      "AI 모델의 성능만 보여주는 것보다 운영자가 결과를 확인하고 관리하는 화면까지 있어야 제품 경험으로 설명하기 쉽기 때문입니다.",
      "Showing model performance alone isn't enough — having a screen where an operator reviews and manages the result makes it easier to describe as an actual product experience."
    )
  },
  {
    question: bi("어떤 부분을 더 보완해야 하나?", "What still needs work?"),
    answer: bi(
      "실제 배포 단계에서는 사용자 권한, 파일 저장 정책, 모델 버전 관리, 로그 모니터링, 의료 데이터 보안 정책을 더 엄격하게 다뤄야 합니다.",
      "A real deployment would need much stricter handling of user permissions, file-storage policy, model version management, log monitoring, and medical-data security policy."
    )
  }
];

const copyByLanguage = {
  kr: {
    eyebrow: "AI Serving · Backoffice Case Study",
    title: "폐렴 환자 관리 백오피스",
    summary: "X-Ray 폐렴 예측 모델을 운영자가 사용할 수 있는 환자 관리 화면과 API 흐름으로 연결한 프로젝트입니다.",
    facts: [
      { label: "User", value: "의료 운영자" },
      { label: "Flow", value: "업로드 · 예측 · 조회" },
      { label: "Focus", value: "API · 비동기 처리" }
    ],
    nav: [
      { href: "#plan", label: "PLAN" },
      { href: "#flow", label: "FLOW" },
      { href: "#result", label: "RESULT" },
      { href: "#history", label: "DECISIONS" }
    ],
    planEyebrow: "Product Plan",
    planTitle: "기획서처럼 읽히는 핵심 정리",
    flowEyebrow: "System Flow",
    flowTitle: "프로그램 동작 흐름",
    resultEyebrow: "Program Result",
    resultTitle: "결과물에서 확인할 수 있는 기능",
    historyEyebrow: "Agentic Coding History",
    historyTitle: "왜 이런 질문을 던졌는가"
  },
  en: {
    eyebrow: "AI Serving · Backoffice Case Study",
    title: "Pneumonia Patient Back Office",
    summary: "A project connecting an X-ray pneumonia-prediction model to a patient-management screen and API flow an operator can actually use.",
    facts: [
      { label: "User", value: "Clinical operator" },
      { label: "Flow", value: "Upload · Predict · Review" },
      { label: "Focus", value: "API · Async Processing" }
    ],
    nav: [
      { href: "#plan", label: "PLAN" },
      { href: "#flow", label: "FLOW" },
      { href: "#result", label: "RESULT" },
      { href: "#history", label: "DECISIONS" }
    ],
    planEyebrow: "Product Plan",
    planTitle: "Key Points, Written Like a Spec",
    flowEyebrow: "System Flow",
    flowTitle: "How the Program Runs",
    resultEyebrow: "Program Result",
    resultTitle: "What the Result Actually Does",
    historyEyebrow: "Agentic Coding History",
    historyTitle: "Why I Asked These Questions"
  }
};

export default function PneumoniaCaseStudyPage() {
  const { language } = useLanguage();
  const copy = copyByLanguage[language];

  return (
    <main className="min-h-screen bg-[#F6F8F7] text-[#182421]">
      <ProjectCaseStudyHeader
        theme="pneumonia"
        eyebrow={copy.eyebrow}
        title={copy.title}
        summary={copy.summary}
        tags={["FastAPI", "Docker", "Redis", "AI Worker", "SQLAlchemy"]}
        facts={copy.facts}
        navigation={copy.nav.map((item) => (
          <a key={item.href} href={item.href} className="shrink-0 rounded px-3 py-2 text-xs font-bold text-white/65 transition hover:bg-white/10 hover:text-white">
            {item.label}
          </a>
        ))}
      />

      <section id="plan" className="border-y border-[#E2D8C9] bg-white py-16 dark:border-border dark:bg-surface/55">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-sm font-bold uppercase text-[#167267]">{copy.planEyebrow}</p>
          <h2 className="mt-2 text-3xl font-black sm:text-4xl">{copy.planTitle}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {specs.map((spec) => (
              <article key={spec.title.kr} className="rounded-lg border border-[#D9CCBA] bg-[#FBF8F1] p-5 dark:border-border dark:bg-background">
                <h3 className="text-xl font-black">{spec.title[language]}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5F574C] dark:text-muted">{spec.body[language]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="flow" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm font-bold uppercase text-[#167267]">{copy.flowEyebrow}</p>
        <h2 className="mt-2 text-3xl font-black sm:text-4xl">{copy.flowTitle}</h2>
        <div className="mt-8 grid gap-3">
          {flow.map((step, index) => (
            <div key={step.kr} className="grid grid-cols-[2.5rem_1fr] items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#167267] text-sm font-black text-white">
                {index + 1}
              </span>
              <div className="rounded-md border border-[#D9CCBA] bg-white px-4 py-4 text-base font-black shadow-sm dark:border-border dark:bg-surface">
                {step[language]}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="result" className="border-y border-[#E2D8C9] bg-[#173B35] py-16 text-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-sm font-bold uppercase text-[#F0B86E]">{copy.resultEyebrow}</p>
          <h2 className="mt-2 text-3xl font-black sm:text-4xl">{copy.resultTitle}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {programResults.map((result) => (
              <article key={result.title} className="rounded-lg border border-white/15 bg-white/8 p-5">
                <h3 className="text-lg font-black">{result.title}</h3>
                <ul className="mt-4 space-y-2">
                  {result.items.map((item) => (
                    <li key={item.kr} className="text-sm leading-6 text-white/75">
                      {item[language]}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="history" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm font-bold uppercase text-[#167267]">{copy.historyEyebrow}</p>
        <h2 className="mt-2 text-3xl font-black sm:text-4xl">{copy.historyTitle}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {decisions.map((decision) => (
            <article key={decision.question.kr} className="rounded-lg border border-[#D9CCBA] bg-white p-5 shadow-sm dark:border-border dark:bg-surface">
              <h3 className="text-lg font-black leading-7">{decision.question[language]}</h3>
              <p className="mt-3 text-sm leading-7 text-[#5F574C] dark:text-muted">{decision.answer[language]}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
