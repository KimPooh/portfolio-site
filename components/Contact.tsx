"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animation";
import type { Profile, SectionContent } from "@/types/portfolio";

type ContactProps = {
  content: SectionContent;
  profile: Profile;
};

export function Contact({ content, profile }: ContactProps) {
  return (
    <section id="contact" className="section-shell pb-16 pt-20 sm:pb-24 sm:pt-28">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="border-y border-border py-12"
      >
        <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-normal text-accent">
          {content.eyebrow}
        </motion.p>
        <motion.div variants={fadeInUp} className="mt-4 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <h2 className="text-3xl font-semibold text-foreground sm:text-5xl">
              {content.title}
            </h2>
            {content.description ? (
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
                {content.description}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="border border-border bg-surface px-4 py-3 text-center text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
              >
                {social.label}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
