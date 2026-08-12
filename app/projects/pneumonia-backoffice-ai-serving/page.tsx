import { ProjectCaseStudyHeader } from "@/components/ProjectCaseStudyHeader";

const flow = [
  "운영자 로그인",
  "환자 목록 확인",
  "X-Ray 이미지 업로드",
  "FastAPI 예측 요청",
  "Redis 작업 대기열",
  "AI Worker 추론",
  "결과 저장",
  "대시보드 확인"
];

const specs = [
  {
    title: "기획 의도",
    body: "폐렴 예측 모델을 단순 노트북 결과로 끝내지 않고, 병원 운영자가 환자 관리 화면에서 결과를 확인하는 제품 흐름으로 연결하는 것을 목표로 했습니다."
  },
  {
    title: "사용자 흐름",
    body: "운영자는 환자를 선택하고 X-Ray 이미지를 등록한 뒤 예측 결과와 상태를 확인합니다. 예측이 오래 걸릴 수 있어 작업 큐와 결과 조회 흐름을 분리해 이해했습니다."
  },
  {
    title: "기술 구현 범위",
    body: "FastAPI 요청/응답 구조, Docker 실행 환경, Redis 기반 비동기 작업 흐름, AI Worker 분리, 결과 저장과 화면 조회 구조를 학습하고 정리했습니다."
  },
  {
    title: "검증 관점",
    body: "정상 이미지 업로드뿐 아니라 로그인 전 접근, 예측 대기 상태, 실패 응답, 결과 없음 상태처럼 운영 화면에서 필요한 예외 케이스를 함께 고려했습니다."
  }
];

const programResults = [
  {
    title: "Backoffice Screen",
    items: ["환자 목록", "검사 상태", "예측 결과", "운영자 확인 흐름"]
  },
  {
    title: "API Contract",
    items: ["인증 요청", "이미지 업로드", "예측 작업 생성", "결과 조회"]
  },
  {
    title: "AI Serving",
    items: ["모델 로딩", "이미지 전처리", "추론 결과 반환", "실패 응답 처리"]
  },
  {
    title: "Run Environment",
    items: ["Dockerfile", "Container", "Port 설정", "서비스 분리"]
  }
];

const decisions = [
  {
    question: "왜 모델을 화면에 바로 붙이지 않았나?",
    answer: "실제 서비스에서는 예측 요청, 대기, 실패, 결과 저장이 분리되기 때문에 API와 Worker 흐름으로 이해하는 편이 더 현실적이라고 판단했습니다."
  },
  {
    question: "왜 백오피스 형태로 정리했나?",
    answer: "AI 모델의 성능만 보여주는 것보다 운영자가 결과를 확인하고 관리하는 화면까지 있어야 제품 경험으로 설명하기 쉽기 때문입니다."
  },
  {
    question: "어떤 부분을 더 보완해야 하나?",
    answer: "실제 배포 단계에서는 사용자 권한, 파일 저장 정책, 모델 버전 관리, 로그 모니터링, 의료 데이터 보안 정책을 더 엄격하게 다뤄야 합니다."
  }
];

export default function PneumoniaCaseStudyPage() {
  return (
    <main className="min-h-screen bg-[#F6F8F7] text-[#182421]">
      <ProjectCaseStudyHeader
        theme="pneumonia"
        eyebrow="AI Serving · Backoffice Case Study"
        title="폐렴 환자 관리 백오피스"
        summary="X-Ray 폐렴 예측 모델을 운영자가 사용할 수 있는 환자 관리 화면과 API 흐름으로 연결한 프로젝트입니다."
        tags={["FastAPI", "Docker", "Redis", "AI Worker", "SQLAlchemy"]}
        facts={[
          { label: "User", value: "의료 운영자" },
          { label: "Flow", value: "업로드 · 예측 · 조회" },
          { label: "Focus", value: "API · 비동기 처리" }
        ]}
        navigation={[
          ["#plan", "PLAN"],
          ["#flow", "FLOW"],
          ["#result", "RESULT"],
          ["#history", "DECISIONS"]
        ].map(([href, label]) => (
          <a key={href} href={href} className="shrink-0 rounded px-3 py-2 text-xs font-bold text-white/65 transition hover:bg-white/10 hover:text-white">
            {label}
          </a>
        ))}
      />

      <section id="plan" className="border-y border-[#E2D8C9] bg-white py-16 dark:border-border dark:bg-surface/55">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-sm font-bold uppercase text-[#167267]">Product Plan</p>
          <h2 className="mt-2 text-3xl font-black sm:text-4xl">기획서처럼 읽히는 핵심 정리</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {specs.map((spec) => (
              <article key={spec.title} className="rounded-lg border border-[#D9CCBA] bg-[#FBF8F1] p-5 dark:border-border dark:bg-background">
                <h3 className="text-xl font-black">{spec.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5F574C] dark:text-muted">{spec.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="flow" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm font-bold uppercase text-[#167267]">System Flow</p>
        <h2 className="mt-2 text-3xl font-black sm:text-4xl">프로그램 동작 흐름</h2>
        <div className="mt-8 grid gap-3">
          {flow.map((step, index) => (
            <div key={step} className="grid grid-cols-[2.5rem_1fr] items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#167267] text-sm font-black text-white">
                {index + 1}
              </span>
              <div className="rounded-md border border-[#D9CCBA] bg-white px-4 py-4 text-base font-black shadow-sm dark:border-border dark:bg-surface">
                {step}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="result" className="border-y border-[#E2D8C9] bg-[#173B35] py-16 text-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-sm font-bold uppercase text-[#F0B86E]">Program Result</p>
          <h2 className="mt-2 text-3xl font-black sm:text-4xl">결과물에서 확인할 수 있는 기능</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {programResults.map((result) => (
              <article key={result.title} className="rounded-lg border border-white/15 bg-white/8 p-5">
                <h3 className="text-lg font-black">{result.title}</h3>
                <ul className="mt-4 space-y-2">
                  {result.items.map((item) => (
                    <li key={item} className="text-sm leading-6 text-white/75">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="history" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm font-bold uppercase text-[#167267]">Agentic Coding History</p>
        <h2 className="mt-2 text-3xl font-black sm:text-4xl">왜 이런 질문을 던졌는가</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {decisions.map((decision) => (
            <article key={decision.question} className="rounded-lg border border-[#D9CCBA] bg-white p-5 shadow-sm dark:border-border dark:bg-surface">
              <h3 className="text-lg font-black leading-7">{decision.question}</h3>
              <p className="mt-3 text-sm leading-7 text-[#5F574C] dark:text-muted">{decision.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
