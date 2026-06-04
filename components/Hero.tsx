"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animation";
import type { Profile } from "@/types/portfolio";

type HeroProps = {
  profile: Profile;
};

export function Hero({ profile }: HeroProps) {
  return (
    <section className="section-shell flex min-h-[76svh] items-center pb-16 pt-28 sm:min-h-[82svh] sm:pt-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <motion.div
          variants={fadeInUp}
          className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-border bg-surface text-transparent shadow-lift sm:h-24 sm:w-24 lg:h-28 lg:w-28"
        >
          <Image
            src="/profile.jpg"
            alt="김지현 프로필 사진"
            fill
            priority
            sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 112px"
            className="object-cover object-[50%_38%] transition duration-300 hover:scale-[1.03]"
          />
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="mt-6 inline-flex border border-accent/25 bg-accent/10 px-3 py-1 text-sm font-semibold text-accent"
        >
          {profile.availability}
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-normal text-foreground sm:text-6xl lg:text-7xl"
        >
          {profile.name} AI/Data Portfolio
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-6 inline-flex border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-muted shadow-sm"
        >
          AI/Data Modeling → Deep Learning 확장 중
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted"
        >
          <span>{profile.role}</span>
          <span className="h-1 w-1 bg-accent" />
          <span>{profile.location}</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
