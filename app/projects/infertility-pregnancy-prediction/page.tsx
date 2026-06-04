import Link from "next/link";
import type { Metadata } from "next";
import { ThemeToggle } from "@/components/ThemeToggle";
import { featuredProject } from "@/data/projects";

export const metadata: Metadata = {
  title: `${featuredProject.title} | 김지현 AI/Data Portfolio`,
  description: featuredProject.detail?.oneLine ?? featuredProject.description
};

export default function InfertilityPredictionProjectPage() {
  const detail = featuredProject.detail;

  if (!detail) {
    return null;
  }

  const sectionLinks = [
    { label: "Project Overview", href: "#project-overview" },
    { label: "Modeling Process", href: "#modeling-process" },
    { label: "Award", href: "#award" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Key Lessons", href: "#key-lessons" }
  ];

  const caseStudySections = [
    { title: "문제 정의", body: detail.problem },
    { title: "데이터 이해", body: detail.dataUnderstanding },
    { title: "전처리 방향", body: detail.preprocessing },
    { title: "Feature Engineering", body: detail.featureEngineering },
    { title: "모델링 전략", body: detail.modelingStrategy },
    { title: "검증 방식", body: detail.validation }
  ];

  const consoleLines = [
    "> Loading dataset...",
    "> Checking leakage risk...",
    "> Training CatBoost...",
    "> Blending predictions...",
    "> Final result: 3rd place"
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="section-shell pb-10 pt-10 sm:pb-14 sm:pt-14">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex border border-border bg-surface px-4 py-2 text-sm font-semibold text-muted transition hover:border-accent hover:text-accent"
          >
            홈으로 돌아가기
          </Link>
          <ThemeToggle />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-accent">
              Case Study
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-foreground sm:text-6xl">
              {featuredProject.title}
            </h1>
            <p className="mt-5 text-xl leading-8 text-muted">{detail.oneLine}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {detail.nature.map((item) => (
                <span
                  key={item}
                  className="border border-border bg-surface px-3 py-1 text-sm text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside className="glass-panel rounded-lg p-5">
            <p className="text-sm font-semibold uppercase tracking-normal text-accent">
              Case Study Focus
            </p>
            <p className="mt-3 text-sm leading-6 text-muted">
              코드 공개형 포트폴리오가 아니라 문제 정의, 전처리 방향, 모델링 흐름,
              검증 방식, 결과와 배운 점을 중심으로 정리한 실전 프로젝트 기록입니다.
            </p>
            <div className="mt-5 border-l-2 border-success bg-success/5 px-4 py-3">
              <p className="text-sm font-semibold text-success">Award</p>
              <p className="mt-2 text-2xl font-semibold text-foreground">{detail.award}</p>
            </div>
          </aside>
        </div>
      </section>

      <div className="section-shell pb-8">
        <nav
          aria-label="프로젝트 상세 섹션"
          className="overflow-x-auto border-y border-border bg-background/90 py-3 backdrop-blur"
        >
          <div className="flex min-w-max gap-2">
            {sectionLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border border-border bg-surface px-3 py-2 text-sm font-semibold text-muted transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>

      <section id="project-overview" className="section-shell scroll-mt-24 py-12">
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-accent">
              Project Overview
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">
              문제부터 검증까지의 기록
            </h2>
          </div>
          <div className="grid gap-4">
            {caseStudySections.map((section) => (
              <article key={section.title} className="glass-panel rounded-lg p-5">
                <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="modeling-process" className="section-shell scroll-mt-24 py-12">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-accent">
              Modeling Process
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">
              모델링 타임라인
            </h2>
            <div className="mt-6 rounded-lg border border-border bg-surface p-4">
              <p className="text-[11px] font-semibold uppercase tracking-normal text-accent">
                Modeling Console
              </p>
              <div className="mt-3 space-y-2 font-mono text-xs leading-5 text-muted">
                {consoleLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <ol className="grid gap-4">
              {detail.timeline.map((item, index) => (
                <li
                  key={item.title}
                  className="glass-panel rounded-lg p-5 sm:grid sm:grid-cols-[8rem_1fr] sm:gap-5"
                >
                  <span className="text-xs font-semibold uppercase tracking-normal text-accent">
                    Step {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="grid gap-3 sm:grid-cols-2">
              {detail.modelingFlow.map((step, index) => (
                <div key={step} className="glass-panel rounded-lg p-4">
                  <span className="text-xs font-semibold text-accent">
                    Flow {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 text-base font-semibold text-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="validation-leakage" className="section-shell scroll-mt-24 py-8">
        <div className="rounded-lg border border-warning/35 bg-warning/10 px-5 py-4">
          <p className="text-sm font-semibold text-warning">Validation / Leakage Check</p>
          <p className="mt-2 text-sm leading-7 text-muted">{detail.leakageNote}</p>
        </div>
      </section>

      <section id="performance-improvement" className="section-shell scroll-mt-24 py-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-accent">
              Performance Improvement
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">
              성능 개선 과정
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-muted">
            점수 자체를 과하게 나열하기보다, 어떤 기준으로 실험하고 안정성을 확인했는지를 중심으로 정리했습니다.
          </p>
        </div>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {detail.performanceCards.map((card) => (
            <article key={card.title} className="glass-panel rounded-lg p-5">
              <h3 className="text-base font-semibold text-foreground">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="award" className="section-shell scroll-mt-24 py-12">
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-accent">
              Award
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">{detail.award}</h2>
          </div>
          <div className="space-y-3">
            {detail.results.map((result) => (
              <div key={result} className="border-l-2 border-success bg-success/5 px-4 py-3">
                <p className="text-sm leading-6 text-muted">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tech-stack" className="section-shell scroll-mt-24 py-12">
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-accent">
              Tech Stack
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">사용 기술</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {detail.techStack.map((tech) => (
              <span key={tech} className="border border-border bg-surface px-3 py-2 text-sm text-muted">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="key-lessons" className="section-shell scroll-mt-24 py-12">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-accent">
              Key Lessons
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">배운 점</h2>
          </div>
          <div className="grid gap-3">
            {detail.lessons.map((lesson) => (
              <div key={lesson} className="glass-panel rounded-lg px-4 py-3">
                <p className="text-sm leading-6 text-muted">{lesson}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="project-disclosure" className="section-shell scroll-mt-24 pb-20 pt-12 sm:pb-28">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-accent">
              Project Disclosure Scope
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">프로젝트 공개 범위</h2>
          </div>
          <div className="glass-panel rounded-lg p-5">
            <p className="text-sm leading-7 text-muted">{detail.disclosure}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
