"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animation";
import type { Profile, SectionContent } from "@/types/portfolio";

type AboutProps = {
  content: SectionContent;
  profile: Profile;
};

export function About({ content, profile }: AboutProps) {
  return (
    <section id="about" className="section-shell py-20 sm:py-28">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"
      >
        <motion.div variants={fadeInUp}>
          <p className="text-sm font-semibold uppercase tracking-normal text-ember">
            {content.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-paper sm:text-4xl">
            {content.title}
          </h2>
        </motion.div>
        <motion.div variants={fadeInUp} className="space-y-6">
          <p className="text-lg leading-8 text-paper/76">{profile.summary}</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {profile.highlights.map((highlight) => (
              <div key={highlight} className="glass-panel rounded-lg p-4">
                <p className="text-sm leading-6 text-paper/72">{highlight}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
