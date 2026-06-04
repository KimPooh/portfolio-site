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

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="section-shell pb-16 pt-10 sm:pb-24 sm:pt-14">
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

            <div className="mt-8 border-l-2 border-success bg-success/5 px-5 py-4">
              <p className="text-sm font-semibold text-success">성과</p>
              <p className="mt-2 text-2xl font-semibold text-foreground">{detail.award}</p>
            </div>
          </div>

          <aside className="glass-panel rounded-lg p-5">
            <p className="text-sm font-semibold uppercase tracking-normal text-accent">
              프로젝트 공개 범위
            </p>
            <p className="mt-3 text-sm leading-6 text-muted">
              보안 및 데이터 공개 제한으로 인해 전체 코드와 데이터셋은 공개하지 않았습니다.
              프로젝트 페이지에는 문제 정의, 전처리 방향, 모델링 흐름, 검증 방식과 결과를 중심으로
              정리했습니다.
            </p>
          </aside>
        </div>
      </section>

      <section className="section-shell py-12">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-2xl font-semibold text-foreground">문제 정의</h2>
          <p className="text-base leading-8 text-muted">{detail.problem}</p>
        </div>
      </section>

      <section className="section-shell py-12">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-2xl font-semibold text-foreground">실제로 고민했던 부분</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {detail.considerations.map((item) => (
              <div key={item} className="glass-panel rounded-lg px-4 py-3">
                <p className="text-sm font-medium text-muted">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-12">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-2xl font-semibold text-foreground">사용 기술</h2>
          <div className="flex flex-wrap gap-2">
            {detail.techStack.map((tech) => (
              <span key={tech} className="border border-border bg-surface px-3 py-2 text-sm text-muted">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-12">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-2xl font-semibold text-foreground">모델링 흐름</h2>
          <ol className="grid gap-3 sm:grid-cols-2">
            {detail.modelingFlow.map((step, index) => (
              <li key={step} className="glass-panel rounded-lg p-4">
                <span className="text-xs font-semibold text-accent">
                  Step {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-base font-semibold text-foreground">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-shell pb-20 pt-12 sm:pb-28">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-2xl font-semibold text-foreground">결과</h2>
          <div className="space-y-3">
            {detail.results.map((result) => (
              <div key={result} className="border-l-2 border-accent bg-accent/5 px-4 py-3">
                <p className="text-sm leading-6 text-muted">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
