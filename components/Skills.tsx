"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animation";
import type { SectionContent, SkillGroup } from "@/types/portfolio";

type SkillsProps = {
  content: SectionContent;
  skillGroups: SkillGroup[];
};

export function Skills({ content, skillGroups }: SkillsProps) {
  return (
    <section id="skills" className="section-shell py-20 sm:py-28">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div variants={fadeInUp} className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-normal text-accent">
            {content.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
            {content.title}
          </h2>
        </motion.div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <motion.article
              key={group.title}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="glass-panel rounded-lg p-5"
            >
              <h3 className="text-xl font-semibold text-foreground">{group.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{group.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-border bg-background px-3 py-1 text-sm text-muted"
                  >
                    {skill}
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
