/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ProjectCaseStudyHeader } from "@/components/ProjectCaseStudyHeader";
import { useLanguage } from "@/lib/language";

const tabs = [
  { key: "project", label: "PROJECT" },
  { key: "modeling", label: "MODELING" },
  { key: "validation", label: "VALIDATION" },
  { key: "team", label: "TEAM" },
  { key: "award", label: "AWARD" },
  { key: "lessons", label: "LESSONS" }
] as const;

const tabKeys = tabs.map((t) => t.key) as string[];

const copyByLanguage = {
  kr: {
    role: "데이터 분석 · 모델링",
    resultLabel: "Result",
    eyebrow: "Healthcare ML · Award Case Study",
    project: { eyebrow: "Project Overview", title: "프로젝트 핵심 내용" },
    sections: {
      problem: "문제 정의",
      dataUnderstanding: "데이터 이해",
      preprocessing: "전처리 방향",
      featureEngineering: "Feature Engineering",
      modelingStrategy: "모델링 전략",
      validation: "검증 방식"
    },
    modeling: { eyebrow: "Modeling Process", title: "모델링 전략과 타임라인", strategy: "Modeling Strategy", console: "Modeling Console", timelineTitle: "모델링 타임라인", step: "Step" },
    validationTab: { eyebrow: "Validation", title: "검증 방식과 성능 안정화", method: "검증 방식", leakage: "Validation / Leakage Check", improvementEyebrow: "Performance Improvement", improvementTitle: "성능 개선 과정" },
    team: { eyebrow: "Additional Projects", title: "추가 프로젝트 보드", body: "새로 추가한 4조 팀 프로젝트는 협업형 헬스케어 AI 프로젝트로 정리했고, 기존 보조 프로젝트도 한 레일에서 비교할 수 있게 배치했습니다." },
    award: { eyebrow: "Award", teamNote: "이거조", teamNoteFull: "팀명 이거조로 참가해 Public Leaderboard 0.74236을 기록했습니다.", imageAlt: "이거조가 Public Leaderboard 0.74236으로 3위를 기록한 결과 화면", imageCaption: "팀명 이거조 · Public Leaderboard 0.74236 · 최종 3위" },
    lessons: { eyebrow: "Key Lessons", title: "배운 점", techStack: "Tech Stack", disclosure: "Project Disclosure Scope" }
  },
  en: {
    role: "Data Analysis · Modeling",
    resultLabel: "Result",
    eyebrow: "Healthcare ML · Award Case Study",
    project: { eyebrow: "Project Overview", title: "Project Highlights" },
    sections: {
      problem: "Problem Framing",
      dataUnderstanding: "Data Understanding",
      preprocessing: "Preprocessing Approach",
      featureEngineering: "Feature Engineering",
      modelingStrategy: "Modeling Strategy",
      validation: "Validation Method"
    },
    modeling: { eyebrow: "Modeling Process", title: "Modeling Strategy & Timeline", strategy: "Modeling Strategy", console: "Modeling Console", timelineTitle: "Modeling Timeline", step: "Step" },
    validationTab: { eyebrow: "Validation", title: "Validation Method & Stability", method: "Validation Method", leakage: "Validation / Leakage Check", improvementEyebrow: "Performance Improvement", improvementTitle: "Performance Improvement Process" },
    team: { eyebrow: "Additional Projects", title: "More Project Board", body: "The newly added Team 4 project is framed as a collaborative healthcare AI project, laid out alongside the other supporting projects on one rail for comparison." },
    award: { eyebrow: "Award", teamNote: "Igeojo", teamNoteFull: "Entered as team 'Igeojo', recording 0.74236 on the Public Leaderboard.", imageAlt: "Result screen showing team Igeojo placing 3rd with a Public Leaderboard score of 0.74236", imageCaption: "Team Igeojo · Public Leaderboard 0.74236 · Final rank 3rd" },
    lessons: { eyebrow: "Key Lessons", title: "Lessons Learned", techStack: "Tech Stack", disclosure: "Project Disclosure Scope" }
  }
};

export default function ClientDetail({ featuredProject, projects }: any) {
  const { language } = useLanguage();
  const copy = copyByLanguage[language];
  const safeFeatured = featuredProject ?? {};
  const detail = safeFeatured.detail;

  const supportingProjects = (projects || []).filter((project: any) => project.slug !== safeFeatured.slug);

  const [selectedTab, setSelectedTab] = useState<string>("project");

  const d = detail;

  const caseStudySections = [
    { key: "problem", title: copy.sections.problem, body: d.problem[language] },
    { key: "dataUnderstanding", title: copy.sections.dataUnderstanding, body: d.dataUnderstanding[language] },
    { key: "preprocessing", title: copy.sections.preprocessing, body: d.preprocessing[language] },
    { key: "featureEngineering", title: copy.sections.featureEngineering, body: d.featureEngineering[language] }
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
        eyebrow={copy.eyebrow}
        title={featuredProject.title[language]}
        summary={detail.oneLine[language]}
        tags={detail.techStack.slice(0, 6)}
        facts={[
          { label: "Role", value: copy.role },
          { label: "Public LB", value: "0.74236" },
          { label: copy.resultLabel, value: detail.award[language] }
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
              <p className="text-sm font-semibold uppercase tracking-normal text-accent">{copy.project.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">{copy.project.title}</h2>
            </div>
            <div className="grid gap-4">
              {caseStudySections.filter((section) => section.key !== "modelingStrategy" && section.key !== "validation").map((section) => (
                <article key={section.key} className="glass-panel rounded-lg p-5">
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
              <p className="text-sm font-semibold uppercase tracking-normal text-accent">{copy.modeling.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">{copy.modeling.title}</h2>
              <article className="mt-6 rounded-lg border border-border bg-surface p-4">
                <p className="text-[11px] font-semibold uppercase tracking-normal text-accent">{copy.modeling.strategy}</p>
                <p className="mt-3 text-sm leading-7 text-muted">{detail.modelingStrategy[language]}</p>
              </article>
              <article className="mt-6 rounded-lg border border-border bg-surface p-4">
                <p className="text-[11px] font-semibold uppercase tracking-normal text-accent">{copy.modeling.console}</p>
                <div className="mt-3 space-y-2 font-mono text-xs leading-5 text-muted">
                  {consoleLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </article>
            </div>
            <div className="space-y-5">
              <article className="glass-panel rounded-lg p-5">
                <h3 className="text-lg font-semibold text-foreground">{copy.modeling.timelineTitle}</h3>
                <ol className="mt-4 grid gap-4">
                  {detail.timeline.map((item: any, index: number) => (
                    <li key={item.title.kr} className="rounded-lg border border-border bg-background p-4">
                      <p className="text-xs font-semibold uppercase tracking-normal text-accent">{copy.modeling.step} {String(index + 1).padStart(2, "0")}</p>
                      <h4 className="mt-2 text-lg font-semibold text-foreground">{item.title[language]}</h4>
                      <p className="mt-2 text-sm leading-6 text-muted">{item.description[language]}</p>
                    </li>
                  ))}
                </ol>
              </article>

              <div className="grid gap-3 sm:grid-cols-2">
                {detail.modelingFlow.map((step: any, index: number) => (
                  <div key={step.kr} className="glass-panel rounded-lg p-4">
                    <span className="text-xs font-semibold text-accent">Flow {String(index + 1).padStart(2, "0")}</span>
                    <p className="mt-2 text-base font-semibold text-foreground">{step[language]}</p>
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
              <p className="text-sm font-semibold uppercase tracking-normal text-accent">{copy.validationTab.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">{copy.validationTab.title}</h2>
              <article className="mt-6 rounded-lg border border-border bg-surface p-5">
                <h3 className="text-lg font-semibold text-foreground">{copy.validationTab.method}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{detail.validation[language]}</p>
              </article>
            </div>
            <div className="grid gap-4">
              <div className="rounded-lg border border-warning/35 bg-warning/10 px-5 py-4">
                <p className="text-sm font-semibold text-warning">{copy.validationTab.leakage}</p>
                <p className="mt-2 text-sm leading-7 text-muted">{detail.leakageNote[language]}</p>
              </div>
              <div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-normal text-accent">{copy.validationTab.improvementEyebrow}</p>
                    <h2 className="mt-3 text-3xl font-semibold text-foreground">{copy.validationTab.improvementTitle}</h2>
                  </div>
                </div>
                <div className="mt-7 grid gap-3">
                  {detail.performanceCards.map((card: any) => (
                    <article key={card.title} className="glass-panel rounded-lg p-4 sm:p-5">
                      <div className="grid gap-2 sm:grid-cols-[12rem_1fr] sm:items-start">
                        <h3 className="text-base font-semibold leading-6 text-foreground">{card.title}</h3>
                        <p className="text-sm leading-7 text-muted">{card.description[language]}</p>
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
              <p className="text-sm font-semibold uppercase tracking-normal text-accent">{copy.team.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">{copy.team.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{copy.team.body}</p>
            </div>
            <div className="horizontal-rail flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3">
              {supportingProjects.map((project: any) => (
                <article key={project.slug} className="glass-panel min-w-[18rem] snap-start rounded-lg p-5 sm:min-w-[22rem]">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-xs font-semibold uppercase tracking-normal text-accent">{project.year}</p>
                    <span className="border border-border bg-background px-2.5 py-1 text-[11px] font-semibold text-muted">{project.category}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold leading-7 text-foreground">{project.title[language]}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{project.description[language]}</p>
                  <p className="mt-4 border-l-2 border-success bg-success/5 px-4 py-3 text-sm leading-6 text-muted">{project.outcome[language]}</p>
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
              <p className="text-sm font-semibold uppercase tracking-normal text-accent">{copy.award.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">{detail.award[language]}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{copy.award.teamNoteFull}</p>
            </div>
            <div className="space-y-4">
              <figure className="overflow-hidden rounded-lg border border-border bg-surface">
                <Image
                  src="/infertility-leaderboard.png"
                  alt={copy.award.imageAlt}
                  width={936}
                  height={520}
                  className="h-auto w-full"
                />
                <figcaption className="border-t border-border px-4 py-3 text-xs leading-6 text-muted">{copy.award.imageCaption}</figcaption>
              </figure>
              {detail.results.map((result: any) => (
                <div key={result.kr} className="border-l-2 border-success bg-success/5 px-4 py-3">
                  <p className="text-sm leading-6 text-muted">{result[language]}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lessons tab */}
        {selectedTab === "lessons" && (
          <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-normal text-accent">{copy.lessons.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">{copy.lessons.title}</h2>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-3">
                {detail.lessons.map((lesson: any) => (
                  <div key={lesson.kr} className="glass-panel rounded-lg px-4 py-3">
                    <p className="text-sm leading-6 text-muted">{lesson[language]}</p>
                  </div>
                ))}
              </div>
              <div className="glass-panel rounded-lg p-5">
                <p className="text-sm font-semibold uppercase tracking-normal text-accent">{copy.lessons.techStack}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {detail.techStack.map((tech: string) => (
                    <span key={tech} className="border border-border bg-surface px-3 py-2 text-sm text-muted">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="glass-panel rounded-lg p-5">
                <p className="text-sm font-semibold uppercase tracking-normal text-accent">{copy.lessons.disclosure}</p>
                <p className="mt-4 text-sm leading-7 text-muted">{detail.disclosure[language]}</p>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
