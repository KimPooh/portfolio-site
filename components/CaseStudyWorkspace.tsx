"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState, type PointerEvent } from "react";
import { useRouter } from "next/navigation";
import type { LearningNote, Profile, Project } from "@/types/portfolio";

type CaseStudyWorkspaceProps = {
  profile: Profile;
  featuredProject: Project;
  learningNotes: LearningNote[];
  projects: Project[];
};

type StickerTarget = {
  label: string;
  href: string;
};

type PreviewCard = {
  title: string;
  body: string;
};

type StickerPreview = StickerTarget & {
  eyebrow: string;
  title: string;
  summary: string;
  cards: PreviewCard[];
  tags: string[];
};

const detailPath = "/projects/infertility-pregnancy-prediction";

const stickerTargets: StickerTarget[] = [
  { label: "PROJECT", href: `${detailPath}#project` },
  { label: "MODELING", href: `${detailPath}#modeling` },
  { label: "VALIDATION", href: `${detailPath}#validation` },
  { label: "LEARNING", href: `${detailPath}#learning` },
  { label: "TEAM", href: `${detailPath}#team-project` },
  { label: "AWARD", href: `${detailPath}#award` },
  { label: "LESSONS", href: `${detailPath}#lessons` }
];

export function CaseStudyWorkspace({
  featuredProject,
  learningNotes,
  profile,
  projects
}: CaseStudyWorkspaceProps) {
  const detail = featuredProject.detail;
  const supportingProjects = projects
    .filter((project) => project.slug !== featuredProject.slug)
    .slice(0, 3);
  const [selectedLabel, setSelectedLabel] = useState(stickerTargets[0].label);

  if (!detail) {
    return null;
  }

  const teamProject = supportingProjects[0];
  const previewItems: StickerPreview[] = stickerTargets.map((target) => {
    switch (target.label) {
      case "MODELING":
        return {
          ...target,
          eyebrow: "Modeling Preview",
          title: "모델링 흐름 요약",
          summary:
            "기준 모델을 먼저 만들고, CatBoost와 LightGBM을 비교한 뒤 앙상블과 블렌딩으로 안정적인 제출 결과를 찾았습니다.",
          cards: [
            { title: "Baseline", body: "처음 모델로 기준 성능을 만들고 이후 실험의 비교 기준으로 삼았습니다." },
            { title: "Feature", body: "시술 이력, 배아 수, 경과일 기반 파생변수를 검증 점수와 함께 확인했습니다." },
            { title: "Ensemble", body: "단일 모델보다 안정적인 조합을 찾기 위해 스태킹과 블렌딩을 실험했습니다." }
          ],
          tags: ["CatBoost", "LightGBM", "Blending"]
        };
      case "VALIDATION":
        return {
          ...target,
          eyebrow: "Validation Preview",
          title: "검증 방식 요약",
          summary:
            "높은 점수만 보지 않고 OOF AUC와 제출 결과 차이를 비교하며 데이터 누수 가능성과 일반화 안정성을 함께 확인했습니다.",
          cards: [
            { title: "OOF", body: "교차검증 기반 OOF 결과로 학습 데이터 안에서의 성능을 점검했습니다." },
            { title: "Leakage", body: "예측 시점에 알 수 없는 정보가 섞이지 않도록 전처리 기준을 분리했습니다." },
            { title: "Stability", body: "검증 점수와 제출 점수의 차이를 보며 최종 조합을 보수적으로 골랐습니다." }
          ],
          tags: ["OOF AUC", "Leakage Check", "Generalization"]
        };
      case "LEARNING":
        return {
          ...target,
          eyebrow: "Learning Preview",
          title: "학습 기록 요약",
          summary:
            "AI 헬스케어 5기에서 배운 내용을 기술명 나열이 아니라, 데이터를 이해하고 검증 가능한 모델링으로 바꾸는 과정으로 정리했습니다.",
          cards: learningNotes.slice(0, 3).map((note) => ({
            title: note.title,
            body: note.summary
          })),
          tags: ["EDA", "Preprocessing", "Cross Validation"]
        };
      case "TEAM":
        return {
          ...target,
          eyebrow: "Service Project Preview",
          title: "웹 서비스 구현 경험",
          summary:
            "디스트릭트코리아 지원 방향에 맞춰 포트폴리오 웹사이트와 폐렴 백오피스 과제를 웹 구현, 모델 서빙, 배포 경험 중심으로 전면에 배치했습니다.",
          cards: [
            { title: "Portfolio Website", body: "Next.js와 TypeScript로 직접 구현하고 Vercel에 배포한 인터랙티브 포트폴리오입니다." },
            { title: "AI Serving", body: "FastAPI로 모델 요청/응답 구조를 이해하고 AI 모델을 서비스 흐름에 연결하는 과제를 수행했습니다." },
            { title: "Docker", body: "Docker 기반 실행 환경과 웹 서비스 배포 구조를 학습했습니다." },
            { title: "Collaboration", body: teamProject?.outcome ?? "팀 단위 Git 협업과 단계별 과제 진행 흐름을 경험했습니다." }
          ],
          tags: ["Next.js", "FastAPI", "Docker", "Dashboard"]
        };
      case "AWARD":
        return {
          ...target,
          eyebrow: "Award Preview",
          title: detail.award,
          summary:
            "난임 임신 성공 예측 모델 프로젝트를 통해 해커톤 3등을 수상했고, 점수뿐 아니라 검증 안정성을 함께 관리한 경험을 얻었습니다.",
          cards: detail.results.map((result, index) => ({
            title: `Result ${String(index + 1).padStart(2, "0")}`,
            body: result
          })),
          tags: ["3rd Place", "Public LB", "Healthcare ML"]
        };
      case "LESSONS":
        return {
          ...target,
          eyebrow: "Lessons Preview",
          title: "배운 점 요약",
          summary:
            "성능 개선보다 먼저 데이터 누수를 막고, 실험 결과를 비교하며, 앙상블도 설명 가능한 기준으로 선택해야 한다는 점을 배웠습니다.",
          cards: detail.lessons.map((lesson, index) => ({
            title: `Lesson ${String(index + 1).padStart(2, "0")}`,
            body: lesson
          })),
          tags: ["Leakage", "Experiment Notes", "Model Selection"]
        };
      default:
        return {
          ...target,
          eyebrow: "Project Preview",
          title: featuredProject.title,
          summary:
            "대표 Case Study는 난임 임신 성공 예측 모델입니다. 첫 화면에서는 웹 구현과 모델 서빙 경험도 함께 보여주어 풀스택 개발자 지원 맥락에 맞게 구성했습니다.",
          cards: [
            { title: "Problem", body: "시간적, 경제적 부담이 큰 난임 시술에서 사전 예측 가능성을 모델링했습니다." },
            { title: "Modeling", body: "EDA, 전처리, 파생변수, CatBoost/LightGBM, 앙상블 실험을 진행했습니다." },
            { title: "Validation", body: "데이터 누수를 피하고 OOF AUC와 제출 결과 차이를 비교했습니다." },
            { title: "Service Fit", body: "포트폴리오 웹 구현, FastAPI 모델 서빙, Docker 배포 학습을 함께 전면 배치했습니다." }
          ],
          tags: featuredProject.tags
        };
    }
  });
  const selectedPreview =
    previewItems.find((item) => item.label === selectedLabel) ?? previewItems[0];

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
            {["Next.js", "FastAPI", "Docker", "AI/Data"].map((keyword) => (
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
              AI 모델링 → 웹 구현 → 배포 흐름으로 확장 중
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
              Targeted Portfolio
            </p>
            <h2 className="mt-1 text-2xl font-semibold text-foreground sm:text-3xl">
              디지털 경험 개발자 지원 포트폴리오
            </h2>
            <nav
              aria-label="상세 페이지 섹션 이동"
              className="mt-4 -mx-4 flex gap-3 overflow-x-auto px-4 pb-3 pt-2 sm:-mx-5 sm:px-5 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0"
            >
              {stickerTargets.map((target, index) => (
                <PeelSticker
                  key={target.href}
                  active={target.label === selectedLabel}
                  href={target.href}
                  index={index}
                  label={target.label}
                  onPreview={() => setSelectedLabel(target.label)}
                />
              ))}
            </nav>
          </div>

          <PreviewPanel preview={selectedPreview} />
        </motion.section>
      </div>
    </section>
  );
}

function PeelSticker({
  active,
  href,
  index,
  label,
  onPreview
}: {
  active: boolean;
  href: string;
  index: number;
  label: string;
  onPreview: () => void;
}) {
  const router = useRouter();
  const [isLeaving, setIsLeaving] = useState(false);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const didPeel = useRef(false);

  const peelAndNavigate = () => {
    if (didPeel.current) {
      return;
    }
    didPeel.current = true;
    setIsLeaving(true);

    window.setTimeout(() => {
      router.push(href);
    }, 180);
  };

  const handlePointerDown = (event: PointerEvent<HTMLButtonElement>) => {
    pointerStart.current = { x: event.clientX, y: event.clientY };
  };

  const handlePointerUp = (event: PointerEvent<HTMLButtonElement>) => {
    const start = pointerStart.current;
    pointerStart.current = null;

    if (!start) {
      onPreview();
      return;
    }

    const distance = Math.hypot(event.clientX - start.x, event.clientY - start.y);
    if (distance >= 36) {
      peelAndNavigate();
      return;
    }

    onPreview();
  };

  return (
    <motion.button
      type="button"
      onMouseEnter={onPreview}
      onFocus={onPreview}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onClick={(event) => {
        event.preventDefault();
        onPreview();
      }}
      drag
      dragMomentum={false}
      dragElastic={0.22}
      onDragEnd={(_, info) => {
        const distance = Math.hypot(info.offset.x, info.offset.y);
        if (distance >= 36) {
          peelAndNavigate();
        }
      }}
      whileHover={{
        y: -8,
        rotate: index % 2 === 0 ? -3 : 3,
        scale: 1.05
      }}
      whileTap={{
        y: -14,
        rotate: index % 2 === 0 ? -6 : 6,
        scale: 1.08
      }}
      animate={{
        opacity: isLeaving ? 0.45 : 1,
        y: isLeaving ? -22 : 0,
        rotate: isLeaving ? (index % 2 === 0 ? -8 : 8) : index % 2 === 0 ? -1.5 : 1.5,
        scale: isLeaving ? 1.12 : 1
      }}
      transition={{ type: "spring", stiffness: 360, damping: 22 }}
      className={`peel-sticker min-w-[8.3rem] lg:min-w-0 ${
        active ? "peel-sticker-active" : ""
      }`}
      aria-label={`${label} 요약 보기. 자세히 보려면 스티커를 드래그하세요`}
      aria-pressed={active}
    >
      <span className="peel-sticker-face">
        <span className="peel-sticker-main-label">{label}</span>
      </span>
    </motion.button>
  );
}

function PreviewPanel({ preview }: { preview: StickerPreview }) {
  return (
    <motion.article
      key={preview.label}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
      className="mt-4 min-h-0 flex-1 overflow-y-auto rounded-lg border border-border bg-background p-4 sm:p-5 lg:p-6"
    >
      <div className="grid min-h-full content-center gap-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-normal text-accent">
              {preview.eyebrow}
            </p>
            <h3 className="mt-2 text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
              {preview.title}
            </h3>
          </div>
          <span className="pointer-events-none hidden rotate-[-5deg] border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-bold text-accent shadow-sm sm:block">
            {preview.label}
          </span>
        </div>

        <p className="text-sm leading-7 text-muted sm:text-base">{preview.summary}</p>

        <div className="grid gap-3 sm:grid-cols-2">
          {preview.cards.slice(0, 4).map((card) => (
            <div key={card.title} className="rounded-lg border border-border bg-surface p-4">
              <h4 className="text-sm font-semibold text-foreground">{card.title}</h4>
              <p className="mt-2 text-xs leading-5 text-muted">{card.body}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {preview.tags.map((tag) => (
            <span
              key={tag}
              className="border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
