"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animation";
import type { Project, SectionContent } from "@/types/portfolio";

type ProjectsProps = {
  content: SectionContent;
  featuredProject: Project;
  projects: Project[];
};

export function Projects({ content, featuredProject, projects }: ProjectsProps) {
  const secondaryProjects = projects.filter((project) => project.slug !== featuredProject.slug);

  return (
    <section id="featured-project" className="section-shell py-20 sm:py-28">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
      >
        <motion.div variants={fadeInUp} className="max-w-3xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-normal text-accent">
              {content.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              {content.title}
            </h2>
          </div>
        </motion.div>
        <motion.article
          variants={fadeInUp}
          className="glass-panel mt-10 grid gap-6 rounded-lg p-5 md:grid-cols-[1fr_0.75fr] md:p-7"
        >
          <div>
            <p className="text-sm font-semibold text-accent">{featuredProject.category}</p>
            <h3 className="mt-3 text-3xl font-semibold text-foreground">
              {featuredProject.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-muted">{featuredProject.description}</p>
            <p className="mt-4 border-l-2 border-success pl-4 text-sm leading-6 text-muted">
              {featuredProject.outcome}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {featuredProject.tags.map((tag) => (
                <span key={tag} className="border border-border bg-background px-3 py-1 text-xs text-muted">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-5 rounded-lg border border-border bg-background p-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-normal text-muted">Result</p>
              <p className="mt-2 text-2xl font-semibold text-foreground">
                {featuredProject.detail?.award}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">
                데이터 누수 방지, 검증 점수와 제출 점수 차이, 앙상블 안정성을 함께 고려한 실전형 모델링 기록입니다.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row md:flex-col">
              <Link
                href={featuredProject.detailHref ?? "#"}
                className="border border-accent bg-accent px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-accent/90"
              >
                상세 페이지 보기
              </Link>
              <p className="text-sm leading-6 text-muted">
                보안 및 데이터 공개 제한으로 인해 전체 코드와 데이터셋은 공개하지 않았습니다. 프로젝트 페이지에는 문제 정의, 전처리 방향, 모델링 흐름, 검증 방식과 결과를 중심으로 정리했습니다.
              </p>
            </div>
          </div>
        </motion.article>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {secondaryProjects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 240, damping: 21 }}
              className="glass-panel flex min-h-[280px] flex-col rounded-lg p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold leading-tight text-foreground">{project.title}</h3>
                <span className="border border-border bg-background px-2 py-1 text-xs font-semibold text-muted">
                  {project.year}
                </span>
              </div>
              <p className="mt-2 text-xs font-semibold text-accent">{project.category}</p>
              <p className="mt-4 text-sm leading-6 text-muted">{project.description}</p>
              <p className="mt-4 border-l-2 border-accent pl-3 text-sm leading-6 text-muted">
                {project.outcome}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-background px-2.5 py-1 text-xs text-muted">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm font-medium text-muted">
                프로젝트 요약 중심으로 정리했습니다.
              </p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
