"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animation";
import type { HeroContent, Profile } from "@/types/portfolio";

type HeroProps = {
  content: HeroContent;
  profile: Profile;
};

export function Hero({ content, profile }: HeroProps) {
  return (
    <section className="section-shell flex min-h-[82svh] items-center pb-16 pt-24 sm:pt-28">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-4xl"
      >
        <motion.p
          variants={fadeInUp}
          className="mb-5 inline-flex border border-mint/30 bg-mint/10 px-3 py-1 text-sm font-medium text-mint"
        >
          {profile.availability}
        </motion.p>
        <motion.h1
          variants={fadeInUp}
          className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-paper sm:text-7xl lg:text-8xl"
        >
          {profile.name}
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="mt-5 max-w-2xl text-xl leading-8 text-paper/78 sm:text-2xl"
        >
          {profile.tagline}
        </motion.p>
        <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="border border-paper bg-paper px-5 py-3 text-sm font-semibold text-ink transition hover:bg-signal hover:text-ink"
          >
            {content.primaryCtaLabel}
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-paper transition hover:border-electric/60 hover:text-electric"
          >
            {content.secondaryCtaLabel}
          </a>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-paper/60"
        >
          <span>{profile.role}</span>
          <span className="h-1 w-1 bg-ember" />
          <span>{profile.location}</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
