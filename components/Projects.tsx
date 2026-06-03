"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animation";
import type { Project, SectionContent } from "@/types/portfolio";

type ProjectsProps = {
  content: SectionContent;
  projects: Project[];
};

export function Projects({ content, projects }: ProjectsProps) {
  return (
    <section id="projects" className="section-shell py-20 sm:py-28">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
      >
        <motion.div variants={fadeInUp} className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-normal text-electric">
              {content.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-paper sm:text-4xl">
              {content.title}
            </h2>
          </div>
          {content.ctaHref && content.ctaLabel ? (
            <a
              href={content.ctaHref}
              className="w-fit border border-white/15 px-4 py-2 text-sm font-semibold text-paper/80 transition hover:border-signal hover:text-signal"
            >
              {content.ctaLabel}
            </a>
          ) : null}
        </motion.div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 240, damping: 21 }}
              className="glass-panel flex min-h-[320px] flex-col rounded-lg p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-semibold leading-tight text-paper">{project.title}</h3>
                <span className="border border-ember/35 bg-ember/10 px-2 py-1 text-xs font-semibold text-ember">
                  {project.year}
                </span>
              </div>
              <p className="mt-5 text-sm leading-6 text-paper/68">{project.description}</p>
              <p className="mt-4 border-l-2 border-mint pl-3 text-sm leading-6 text-paper/78">
                {project.outcome}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-white/[0.06] px-2.5 py-1 text-xs text-paper/64">
                    {tag}
                  </span>
                ))}
              </div>
              {project.href ? (
                <a
                  href={project.href}
                  className="mt-5 text-sm font-semibold text-electric underline-offset-4 hover:underline"
                >
                  사례 보기
                </a>
              ) : null}
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
