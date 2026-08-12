/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ProjectCaseStudyHeader } from "@/components/ProjectCaseStudyHeader";

const tabs = [
  { key: "project", label: "PROJECT" },
  { key: "modeling", label: "MODELING" },
  { key: "validation", label: "VALIDATION" },
  { key: "team", label: "TEAM" },
  { key: "award", label: "AWARD" },
  { key: "lessons", label: "LESSONS" }
] as const;

const tabKeys = tabs.map((t) => t.key) as string[];

export default function ClientDetail({ featuredProject, projects }: any) {
  const safeFeatured = featuredProject ?? {};
  const detail = safeFeatured.detail ?? {
    problem: "",
    dataUnderstanding: "",
    preprocessing: "",
    featureEngineering: "",
    modelingStrategy: "",
    validation: "",
    oneLine: "",
    nature: [],
    timeline: [],
    modelingFlow: [],
    performanceCards: [],
    results: [],
    lessons: [],
    techStack: [],
    disclosure: "",
    award: "",
    leakageNote: ""
  } as any;

  const supportingProjects = (projects || []).filter((project: any) => project.slug !== safeFeatured.slug);

  const [selectedTab, setSelectedTab] = useState<string>("project");

  const d = detail;

  const caseStudySections = [
    { title: "문제 정의", body: d.problem },
    { title: "데이터 이해", body: d.dataUnderstanding },
    { title: "전처리 방향", body: d.preprocessing },
    { title: "Feature Engineering", body: d.featureEngineering },
    { title: "모델링 전략", body: d.modelingStrategy },
    { title: "검증 방식", body: d.validation }
  ];

  const consoleLines = [
    "> Loading dataset...",
    "> Checking leakage risk...",
    "> Training CatBoost...",
    "> Blending predictions...",
    "> Final result: 3rd place"
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;

    const syncTabFromHash = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      setSelectedTab((currentTab) => (tabKeys.includes(hash) && hash !== currentTab ? hash : currentTab));
    };

    syncTabFromHash();
    window.addEventListener("hashchange", syncTabFromHash);

    return () => window.removeEventListener("hashchange", syncTabFromHash);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const currentHash = window.location.hash.replace("#", "");
    if (currentHash !== selectedTab) {
      window.history.replaceState(null, "", `#${selectedTab}`);
    }
  }, [selectedTab]);

  return (
    <main className="portfolio-detail min-h-screen bg-background text-foreground">
      <ProjectCaseStudyHeader
        theme="infertility"
        eyebrow="Healthcare ML · Award Case Study"
        title={featuredProject.title}
        summary={detail.oneLine}
        tags={detail.techStack.slice(0, 6)}
        facts={[
          { label: "Role", value: "데이터 분석 · 모델링" },
          { label: "Public LB", value: "0.74236" },
          { label: "Result", value: detail.award }
        ]}
        navigation={tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setSelectedTab(tab.key)}
            aria-pressed={selectedTab === tab.key}
            className={`shrink-0 rounded px-3 py-2 text-xs font-bold transition ${selectedTab === tab.key ? "bg-white text-[#1D1F22]" : "text-white/65 hover:bg-white/10 hover:text-white"}`}
          >
            {tab.label}
          </button>
        ))}
      />

      <section className="section-shell scroll-mt-24 py-12">
        {/* Project tab */}
        {selectedTab === "project" && (
          <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-normal text-accent">Project Overview</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">프로젝트 핵심 내용</h2>
            </div>
            <div className="grid gap-4">
              {caseStudySections.filter((section) => section.title !== "모델링 전략" && section.title !== "검증 방식").map((section) => (
                <article key={section.title} className="glass-panel rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{section.body}</p>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Modeling tab */}
        {selectedTab === "modeling" && (
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-normal text-accent">Modeling Process</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">모델링 전략과 타임라인</h2>
              <article className="mt-6 rounded-lg border border-border bg-surface p-4">
                <p className="text-[11px] font-semibold uppercase tracking-normal text-accent">Modeling Strategy</p>
                <p className="mt-3 text-sm leading-7 text-muted">{detail.modelingStrategy}</p>
              </article>
              <article className="mt-6 rounded-lg border border-border bg-surface p-4">
                <p className="text-[11px] font-semibold uppercase tracking-normal text-accent">Modeling Console</p>
                <div className="mt-3 space-y-2 font-mono text-xs leading-5 text-muted">
                  {consoleLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </article>
            </div>
            <div className="space-y-5">
              <article className="glass-panel rounded-lg p-5">
                <h3 className="text-lg font-semibold text-foreground">모델링 타임라인</h3>
                <ol className="mt-4 grid gap-4">
                  {detail.timeline.map((item: any, index: number) => (
                    <li key={item.title} className="rounded-lg border border-border bg-background p-4">
                      <p className="text-xs font-semibold uppercase tracking-normal text-accent">Step {String(index + 1).padStart(2, "0")}</p>
                      <h4 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                    </li>
                  ))}
                </ol>
              </article>

              <div className="grid gap-3 sm:grid-cols-2">
                {detail.modelingFlow.map((step: string, index: number) => (
                  <div key={step} className="glass-panel rounded-lg p-4">
                    <span className="text-xs font-semibold text-accent">Flow {String(index + 1).padStart(2, "0")}</span>
                    <p className="mt-2 text-base font-semibold text-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Validation tab */}
        {selectedTab === "validation" && (
          <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-normal text-accent">Validation</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">검증 방식과 성능 안정화</h2>
              <article className="mt-6 rounded-lg border border-border bg-surface p-5">
                <h3 className="text-lg font-semibold text-foreground">검증 방식</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{detail.validation}</p>
              </article>
            </div>
            <div className="grid gap-4">
              <div className="rounded-lg border border-warning/35 bg-warning/10 px-5 py-4">
                <p className="text-sm font-semibold text-warning">Validation / Leakage Check</p>
                <p className="mt-2 text-sm leading-7 text-muted">{detail.leakageNote}</p>
              </div>
              <div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-normal text-accent">Performance Improvement</p>
                    <h2 className="mt-3 text-3xl font-semibold text-foreground">성능 개선 과정</h2>
                  </div>
                </div>
                <div className="mt-7 grid gap-3">
                  {detail.performanceCards.map((card: any) => (
                    <article key={card.title} className="glass-panel rounded-lg p-4 sm:p-5">
                      <div className="grid gap-2 sm:grid-cols-[12rem_1fr] sm:items-start">
                        <h3 className="text-base font-semibold leading-6 text-foreground">{card.title}</h3>
                        <p className="text-sm leading-7 text-muted">{card.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Team tab */}
        {selectedTab === "team" && (
          <div className="grid gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-normal text-accent">Additional Projects</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">추가 프로젝트 보드</h2>
              <p className="mt-4 text-sm leading-7 text-muted">새로 추가한 4조 팀 프로젝트는 협업형 헬스케어 AI 프로젝트로 정리했고, 기존 보조 프로젝트도 한 레일에서 비교할 수 있게 배치했습니다.</p>
            </div>
            <div className="horizontal-rail flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3">
              {supportingProjects.map((project: any) => (
                <article key={project.slug} className="glass-panel min-w-[18rem] snap-start rounded-lg p-5 sm:min-w-[22rem]">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-xs font-semibold uppercase tracking-normal text-accent">{project.year}</p>
                    <span className="border border-border bg-background px-2.5 py-1 text-[11px] font-semibold text-muted">{project.category}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold leading-7 text-foreground">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
                  <p className="mt-4 border-l-2 border-success bg-success/5 px-4 py-3 text-sm leading-6 text-muted">{project.outcome}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag: string) => (
                      <span key={tag} className="border border-border bg-background px-2.5 py-1 text-xs font-semibold text-muted">{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Award tab */}
        {selectedTab === "award" && (
          <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-normal text-accent">Award</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">{detail.award}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">팀명 <strong className="text-foreground">이거조</strong>로 참가해 Public Leaderboard 0.74236을 기록했습니다.</p>
            </div>
            <div className="space-y-4">
              <figure className="overflow-hidden rounded-lg border border-border bg-surface">
                <Image
                  src="/infertility-leaderboard.png"
                  alt="이거조가 Public Leaderboard 0.74236으로 3위를 기록한 결과 화면"
                  width={936}
                  height={520}
                  className="h-auto w-full"
                />
                <figcaption className="border-t border-border px-4 py-3 text-xs leading-6 text-muted">팀명 이거조 · Public Leaderboard 0.74236 · 최종 3위</figcaption>
              </figure>
              {detail.results.map((result: string) => (
                <div key={result} className="border-l-2 border-success bg-success/5 px-4 py-3">
                  <p className="text-sm leading-6 text-muted">{result}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lessons tab */}
        {selectedTab === "lessons" && (
          <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-normal text-accent">Key Lessons</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">배운 점</h2>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-3">
                {detail.lessons.map((lesson: string) => (
                  <div key={lesson} className="glass-panel rounded-lg px-4 py-3">
                    <p className="text-sm leading-6 text-muted">{lesson}</p>
                  </div>
                ))}
              </div>
              <div className="glass-panel rounded-lg p-5">
                <p className="text-sm font-semibold uppercase tracking-normal text-accent">Tech Stack</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {detail.techStack.map((tech: string) => (
                    <span key={tech} className="border border-border bg-surface px-3 py-2 text-sm text-muted">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="glass-panel rounded-lg p-5">
                <p className="text-sm font-semibold uppercase tracking-normal text-accent">Project Disclosure Scope</p>
                <p className="mt-4 text-sm leading-7 text-muted">{detail.disclosure}</p>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
