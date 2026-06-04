"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animation";
import type { LabIdea, SectionContent } from "@/types/portfolio";

type LabsProps = {
  content: SectionContent;
  labIdeas: LabIdea[];
};

const statusStyles: Record<LabIdea["status"], string> = {
  Exploring: "border-accent/35 bg-accent/10 text-accent",
  Prototype: "border-success/35 bg-success/10 text-success",
  Backlog: "border-warning/35 bg-warning/10 text-warning"
};

export function Labs({ content, labIdeas }: LabsProps) {
  return (
    <section id="labs" className="section-shell py-20 sm:py-28">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]"
      >
        <motion.div variants={fadeInUp}>
          <p className="text-sm font-semibold uppercase tracking-normal text-accent">
            {content.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
            {content.title}
          </h2>
        </motion.div>
        <div className="space-y-4">
          {labIdeas.map((idea) => (
            <motion.article
              key={idea.title}
              variants={fadeInUp}
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="glass-panel rounded-lg p-5"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-xl font-semibold text-foreground">{idea.title}</h3>
                <span className={`w-fit border px-2.5 py-1 text-xs font-semibold ${statusStyles[idea.status]}`}>
                  {idea.status}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted">{idea.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {idea.stack.map((item) => (
                  <span key={item} className="text-xs text-muted">
                    #{item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
