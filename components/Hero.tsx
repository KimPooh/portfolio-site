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
    <section className="section-shell grid min-h-[82svh] items-center gap-12 pb-16 pt-24 sm:pt-28 lg:grid-cols-[minmax(0,1fr)_420px]">
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
          className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-paper sm:text-7xl"
        >
          <span className="inline-flex flex-col items-center">
            <span className="block text-5xl font-semibold leading-[0.95] tracking-normal text-paper sm:text-7xl">
              김지현
            </span>

            <span className="mt-3 block font-mono text-xl font-medium tracking-normal text-paper/60 sm:text-3xl">
              [Kim Ji-hyun]
            </span>

            <span className="mt-4 block text-lg font-medium tracking-[0.25em] text-mint/80 sm:text-xl">
              {profile.name}
            </span>
          </span>
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
            className="border border-paper bg-paper px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
          >
            {content.primaryCtaLabel}
          </a>

          <a
            href="#about"
            className="border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-paper transition hover:-translate-y-0.5 hover:border-mint/50"
          >
            {content.secondaryCtaLabel}
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="relative hidden lg:block"
      >
        <div className="absolute -inset-6 bg-mint/10 blur-3xl" />

        <div className="relative overflow-hidden border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur">
          <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-mint/80">
                Pooh Console
              </p>
              <p className="mt-1 text-sm text-paper/50">
                personal dev card
              </p>
            </div>

            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-mint/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-paper/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            </div>
          </div>

          <div className="space-y-4 font-mono text-sm leading-7 text-paper/75">
            <div>
              <p className="text-mint">&gt; Whoami</p>
              <p>AI & Data Learner</p>
            </div>

            <div>
              <p className="text-mint">&gt; NOW</p>
              <p>Python · ML · Portfolio</p>
            </div>

            <div>
              <p className="text-mint">&gt; Latest_project</p>
              <p>난임 임신 성공 예측 모델</p>
            </div>

            <div>
            <p className="text-mint">&gt; Award</p>
            <p>난임 임신 성공 예측 해커톤 3등</p>
            </div>

            <div>
              <p className="text-mint">&gt; Deploy_status</p>
              <p>GitHub connected · Vercel ready</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
            {["Python", "Pandas", "ML", "GitHub", "Vercel", "PoohFolio"].map(
              (item) => (
                <span
                  key={item}
                  className="border border-white/10 bg-black/20 px-3 py-2 text-center text-paper/70"
                >
                  {item}
                </span>
              )
            )}
          </div>

          <div className="mt-6 border-t border-white/10 pt-4">
            <p className="text-sm text-paper/50">
              learning in progress<span className="text-mint">...</span>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}