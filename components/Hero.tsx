"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animation";
import type { HeroContent, Profile, Project } from "@/types/portfolio";

type HeroProps = {
  content: HeroContent;
  featuredProject: Project;
  profile: Profile;
};

export function Hero({ content, featuredProject, profile }: HeroProps) {
  const cards = featuredProject.summaryCards ?? [];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCard = cards[activeIndex];
  const consoleLines = [
    "> Loading dataset...",
    "> Checking leakage risk...",
    "> Training CatBoost...",
    "> Blending predictions...",
    "> Final result: 3rd place"
  ];

  return (
    <section className="section-shell grid min-h-[86svh] items-center gap-10 pb-16 pt-24 lg:grid-cols-[1.04fr_0.96fr] lg:pt-28">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-3xl"
      >
        <motion.div
          variants={fadeInUp}
          className="mb-6 flex flex-wrap items-center gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-border bg-surface shadow-lift sm:h-24 sm:w-24 lg:h-28 lg:w-28"
          >
            <Image
              src="/profile.jpg"
              alt="김지현 프로필 사진"
              fill
              priority
              sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 112px"
              className="object-cover object-[50%_38%]"
            />
          </motion.div>
          <p className="inline-flex border border-accent/25 bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
            {profile.availability}
          </p>
        </motion.div>
        <motion.h1
          variants={fadeInUp}
          className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-normal text-foreground sm:text-6xl lg:text-7xl"
        >
          {profile.name} AI/Data Portfolio
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="mt-5 max-w-2xl text-lg leading-8 text-muted sm:text-xl"
        >
          {profile.tagline}
        </motion.p>
        <motion.div variants={fadeInUp} className="mt-6 flex flex-wrap gap-2 text-sm text-muted">
          <span className="border border-border bg-surface px-3 py-1">{featuredProject.category}</span>
          <span className="border border-success/30 bg-success/10 px-3 py-1 text-success">
            {featuredProject.detail?.award}
          </span>
        </motion.div>
        <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-3">
          <Link
            href={featuredProject.detailHref ?? "#featured-project"}
            className="border border-accent bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent/90"
          >
            {content.primaryCtaLabel}
          </Link>
          <a
            href="#featured-project"
            className="border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
          >
            {content.secondaryCtaLabel}
          </a>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted"
        >
          <span>{profile.role}</span>
          <span className="h-1 w-1 bg-accent" />
          <span>{profile.location}</span>
        </motion.div>
      </motion.div>
      <motion.aside
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="glass-panel overflow-hidden rounded-lg p-4 sm:p-5"
      >
        <motion.div variants={fadeInUp}>
          <p className="text-xs font-semibold uppercase tracking-normal text-accent">
            Featured Case Study
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-foreground">
            {featuredProject.title}
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted">{featuredProject.description}</p>
        </motion.div>
        <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {cards.map((card, index) => (
            <button
              key={card.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`border px-3 py-2 text-left text-xs font-semibold transition ${
                activeIndex === index
                  ? "border-accent bg-accent text-white"
                  : "border-border bg-background text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {card.title}
            </button>
          ))}
        </div>
        <div className="relative mt-5 min-h-[220px] overflow-hidden rounded-lg border border-border bg-background p-5">
          <AnimatePresence mode="wait">
            {activeCard ? (
              <motion.div
                key={activeCard.title}
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -32 }}
                transition={{ duration: 0.28 }}
              >
                <h3 className="text-lg font-semibold text-foreground">{activeCard.title}</h3>
                <ul className="mt-4 space-y-3">
                  {activeCard.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
        <motion.div
          variants={fadeInUp}
          className="mt-4 rounded-lg border border-border bg-background/85 p-4"
        >
          <p className="text-[11px] font-semibold uppercase tracking-normal text-accent">
            Modeling Console
          </p>
          <div className="mt-3 space-y-2 font-mono text-xs leading-5 text-muted">
            {consoleLines.map((line, index) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.12 * index }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </motion.aside>
    </section>
  );
}
