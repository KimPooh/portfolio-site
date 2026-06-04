"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { PanInfo } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Profile, Project } from "@/types/portfolio";

type CaseStudyWorkspaceProps = {
  profile: Profile;
  featuredProject: Project;
};

type StickerTarget = {
  label: string;
  href: string;
};

const detailPath = "/projects/infertility-pregnancy-prediction";

const stickerTargets: StickerTarget[] = [
  { label: "PROJECT", href: `${detailPath}#project` },
  { label: "MODELING", href: `${detailPath}#modeling` },
  { label: "VALIDATION", href: `${detailPath}#validation` },
  { label: "AWARD", href: `${detailPath}#award` },
  { label: "LESSONS", href: `${detailPath}#lessons` }
];

export function CaseStudyWorkspace({ profile, featuredProject }: CaseStudyWorkspaceProps) {
  const [isTouch, setIsTouch] = useState(false);
  const detail = featuredProject.detail;

  useEffect(() => {
    const query = window.matchMedia("(pointer: coarse)");
    const update = () => setIsTouch(query.matches);
    update();
    query.addEventListener("change", update);

    return () => query.removeEventListener("change", update);
  }, []);

  if (!detail) {
    return null;
  }

  return (
    <section className="home-workspace min-h-dvh overflow-x-hidden px-4 py-4 text-foreground sm:px-6 sm:py-6 lg:h-dvh lg:overflow-hidden lg:px-8 lg:py-8">
      <div className="mx-auto grid min-h-dvh max-w-7xl gap-4 pb-20 lg:h-full lg:min-h-0 lg:grid-cols-[0.42fr_0.58fr] lg:gap-6 lg:pb-0">
        <motion.aside
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="glass-panel flex min-h-0 flex-col items-center justify-center rounded-lg p-5 text-center sm:p-6 lg:p-8"
        >
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border border-border bg-surface text-transparent shadow-lift lg:h-28 lg:w-28">
            <Image
              src="/profile.jpg"
              alt="김지현 프로필 사진"
              fill
              priority
              sizes="(max-width: 640px) 96px, 112px"
              className="object-cover object-[50%_38%]"
            />
          </div>

          <p className="mt-5 text-xs font-semibold uppercase tracking-normal text-accent">
            {profile.availability}
          </p>
          <h1 className="mt-2 text-4xl font-semibold leading-tight text-foreground lg:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-base font-semibold text-muted">{profile.role}</p>

          <p className="mt-5 max-w-md text-sm leading-7 text-muted sm:text-base">
            {profile.tagline}
          </p>

          <div className="mt-5 flex max-w-md flex-wrap justify-center gap-2">
            {["Python", "Machine Learning", "Deep Learning", "Healthcare AI"].map((keyword) => (
              <span
                key={keyword}
                className="border border-border bg-background px-3 py-1 text-xs font-semibold text-muted"
              >
                {keyword}
              </span>
            ))}
          </div>

          <div className="mt-5 max-w-md border-l-2 border-accent bg-accent/5 px-4 py-3 text-left">
            <p className="text-sm leading-6 text-muted">
              AI/Data Modeling → Deep Learning 확장 중
            </p>
          </div>
        </motion.aside>

        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="glass-panel flex min-h-0 flex-col overflow-hidden rounded-lg p-4 sm:p-5 lg:p-6"
        >
          <div className="shrink-0">
            <p className="text-xs font-semibold uppercase tracking-normal text-accent">
              Featured Case Study
            </p>
            <h2 className="mt-1 text-2xl font-semibold text-foreground sm:text-3xl">
              {featuredProject.title}
            </h2>
            <nav
              aria-label="상세 페이지 섹션 이동"
              className="mt-4 -mx-4 flex gap-3 overflow-x-auto px-4 pb-2 sm:-mx-5 sm:px-5 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0"
            >
              {stickerTargets.map((target, index) => (
                <PeelSticker
                  key={target.href}
                  active={target.label === "PROJECT"}
                  href={target.href}
                  index={index}
                  isTouch={isTouch}
                  label={target.label}
                />
              ))}
            </nav>
          </div>

          <article className="mt-4 min-h-0 flex-1 overflow-hidden rounded-lg border border-border bg-background p-4 sm:p-5 lg:p-6">
            <div className="grid h-full content-center gap-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-normal text-accent">
                    Project Summary
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
                    난임 임신 성공 예측 모델
                  </h3>
                </div>
                <div className="pointer-events-none hidden rotate-[-5deg] rounded-full border border-warning/30 bg-warning/15 px-3 py-1.5 text-xs font-bold text-warning shadow-sm sm:block">
                  🏆 3rd Place
                </div>
              </div>

              <p className="text-sm leading-7 text-muted sm:text-base">
                난임 시술 데이터를 기반으로 임신 성공 가능성을 예측한 머신러닝 Case Study입니다.
                코드 공개보다 문제 정의, 전처리 방향, 검증 방식, 결과와 배운 점을 중심으로 정리했습니다.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                <SummaryCard
                  title="Problem"
                  body="시간적, 경제적 부담이 큰 난임 시술에서 사전 예측 가능성을 모델링했습니다."
                />
                <SummaryCard
                  title="Modeling"
                  body="EDA, 전처리, 파생변수, CatBoost/LightGBM, 앙상블 실험을 진행했습니다."
                />
                <SummaryCard
                  title="Validation"
                  body="데이터 누수를 피하고 OOF AUC와 제출 결과 차이를 비교했습니다."
                />
                <SummaryCard
                  title="Result"
                  body="해커톤 3등 수상과 상위권 성능을 달성했습니다."
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {featuredProject.tags.map((tag) => (
                  <span key={tag} className="border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="rounded-lg border border-border bg-surface px-4 py-3 text-xs leading-5 text-muted">
                보안 및 데이터 공개 제한으로 인해 전체 코드와 데이터셋은 공개하지 않았습니다.
              </p>
            </div>
          </article>
        </motion.section>
      </div>
    </section>
  );
}

function PeelSticker({
  active,
  href,
  index,
  isTouch,
  label
}: {
  active: boolean;
  href: string;
  index: number;
  isTouch: boolean;
  label: string;
}) {
  const router = useRouter();
  const baseRotate = index % 2 === 0 ? -1.3 : 1.1;

  const navigate = () => {
    router.push(href);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 2 || Math.abs(info.offset.y) > 2) {
      navigate();
    }
  };

  return (
    <motion.button
      type="button"
      drag={!isTouch}
      dragConstraints={{ left: -12, right: 12, top: -8, bottom: 8 }}
      dragElastic={0.22}
      onClick={navigate}
      onDragEnd={handleDragEnd}
      whileHover={isTouch ? undefined : { scale: 1.035, y: -3 }}
      whileTap={isTouch ? { scale: 0.97 } : { scale: 1.02 }}
      whileDrag={{ scale: 1.055, rotate: baseRotate + 4, boxShadow: "0 22px 44px rgb(15 23 42 / 0.2)" }}
      animate={{
        y: active ? -3 : 0,
        rotate: active ? 0 : baseRotate,
        boxShadow: active ? "0 18px 36px rgb(15 23 42 / 0.14)" : "0 10px 24px rgb(15 23 42 / 0.08)"
      }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      className={`peel-sticker min-w-[8.3rem] lg:min-w-0 ${active ? "peel-sticker-active" : ""}`}
      aria-label={`${label} 섹션으로 이동`}
      aria-pressed={active}
    >
      {label}
    </motion.button>
  );
}

function SummaryCard({ body, title }: { body: string; title: string }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-4">
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      <p className="mt-2 text-xs leading-5 text-muted">{body}</p>
    </div>
  );
}
