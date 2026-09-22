"use client";

import { SiteHeader } from "@/components/SiteHeader";
import { useLanguage } from "@/lib/language";
import type { Bilingual, LearningLogLink, LearningNote } from "@/types/portfolio";

type JourneyCategory = {
  course?: string;
  courseLabel?: Bilingual;
  courseDescription?: Bilingual;
  courseSubjects?: Bilingual[];
  category: Bilingual;
  description?: Bilingual;
  links: LearningLogLink[];
};

type JourneyContentProps = {
  categories: JourneyCategory[];
  notes: LearningNote[];
};

const stageSummary = [
  {
    title: { kr: "Python과 데이터 기초", en: "Python & Data Basics" },
    body: {
      kr: "처음에는 문법보다 데이터를 불러오고 정리하는 흐름을 익히는 데 시간을 많이 썼습니다.",
      en: "Early on, most of the time went into learning how to load and organize data rather than syntax itself."
    },
    tone: "bg-[#EAF4FF] text-[#15283B]"
  },
  {
    title: { kr: "머신러닝 모델링", en: "Machine Learning Modeling" },
    body: {
      kr: "기준 모델을 먼저 만들고, 점수 차이를 보면서 모델을 하나씩 바꿔보는 방식으로 익혔습니다.",
      en: "Learned by building a baseline model first, then swapping models one at a time while watching the score change."
    },
    tone: "bg-[#F3ECFF] text-[#211A32]"
  },
  {
    title: { kr: "AI 서빙과 웹 연결", en: "AI Serving & Web Integration" },
    body: {
      kr: "모델 결과가 API와 화면에서 어떻게 이어지는지 직접 맞춰보며 흐름을 이해했습니다.",
      en: "Understood the flow by wiring up how a model's output connects through an API to the screen."
    },
    tone: "bg-[#EAF7EF] text-[#13241D]"
  }
];

function getNoteTitle(topic: Bilingual, language: "kr" | "en", tags?: string[]) {
  if (tags?.length) return tags.slice(0, 2).join(" · ");
  const raw = topic[language];
  return language === "kr"
    ? raw.replace(/\s-\s\d+일차/g, "").replace(" 학습 자료", "")
    : raw.replace(/\s-\sDay\s\d+/g, "").replace(" Study Notes", "");
}

function formatDay(day: string, language: "kr" | "en") {
  if (!day) return "";
  if (language === "kr") return day;
  const num = day.match(/\d+/)?.[0];
  return num ? `Day ${num}` : day;
}

export function JourneyContent({ categories, notes }: JourneyContentProps) {
  const { language } = useLanguage();
  const copy = {
    kr: {
      kicker: "Journey",
      title1: "배운 것을",
      title2: "프로젝트로 이어간 기록",
      heroBody:
        "처음부터 잘한 건 아니지만, 배운 내용을 그냥 넘기지 않고 프로젝트와 연결해보려고 했습니다. Python과 데이터 분석에서 시작해 머신러닝, 딥러닝 기초, 모델 서빙, 웹 구현까지 조금씩 넓혀가고 있습니다.",
      studyNotesKicker: "Study Notes",
      studyNotesTitle: "어떻게 쌓아왔는지",
      studyNotesBody: "날짜 순서보다, 지금 프로젝트를 설명하는 데 실제로 도움이 되는 흐름만 남겼습니다.",
      notesKicker: "Notes",
      notesTitle: "공부하면서 남긴 기준",
      pointLabel: "내가 정리한 포인트"
    },
    en: {
      kicker: "Journey",
      title1: "A record of turning",
      title2: "what I learned into projects",
      heroBody:
        "It wasn't good from the start, but I tried not to let what I learned go to waste, connecting it to projects instead. Starting from Python and data analysis, I've gradually expanded into machine learning, deep-learning basics, model serving, and web implementation.",
      studyNotesKicker: "Study Notes",
      studyNotesTitle: "How it built up",
      studyNotesBody: "Rather than chronological order, this keeps only the flow that actually helps explain today's projects.",
      notesKicker: "Notes",
      notesTitle: "Standards I kept while studying",
      pointLabel: "What I took away"
    }
  }[language];

  return (
    <main className="min-h-screen bg-[#141821] text-[#F4F0E8]">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-sm font-black text-[#B9FF7A]">{copy.kicker}</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-7xl">
          {copy.title1}
          <br />
          {copy.title2}
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-[#B9C0CD]">{copy.heroBody}</p>
      </section>

      <section className="border-y border-white/10 bg-[#1C2230] py-14">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 sm:px-8 lg:grid-cols-3">
          {stageSummary.map((stage) => (
            <article key={stage.title.kr} className={`p-6 ${stage.tone}`}>
              <h2 className="text-2xl font-black">{stage.title[language]}</h2>
              <p className="mt-4 text-sm font-semibold leading-7 opacity-80">{stage.body[language]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-black text-[#D8C7FF]">{copy.studyNotesKicker}</p>
            <h2 className="mt-2 text-4xl font-black tracking-tight">{copy.studyNotesTitle}</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[#B9C0CD]">{copy.studyNotesBody}</p>
        </div>

        <div className="mt-9 space-y-5">
          {categories.map((category) => (
            <article key={category.category.kr} className="grid gap-5 border border-white/10 bg-white/[0.055] p-5 md:grid-cols-[12rem_1fr]">
              <div>
                <h3 className="mt-3 text-2xl font-black">{category.category[language]}</h3>
                <p className="mt-3 text-xs font-bold text-[#98A2B3]">{category.courseLabel?.[language]}</p>
              </div>
              <div>
                <p className="text-sm leading-7 text-[#B9C0CD]">{category.description?.[language]}</p>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {category.links.slice(0, 4).map((link) => (
                    <div key={`${category.category.kr}-${link.topic.kr}`} className="rounded-2xl bg-[#111722] p-4">
                      <p className="text-sm font-black text-[#F4F0E8]">{getNoteTitle(link.topic, language, link.tags)}</p>
                      <p className="mt-2 text-sm leading-6 text-[#AAB2C0]">{link.summary?.[language] ?? link.topic[language]}</p>
                      {link.day ? (
                        <p className="mt-1 text-xs font-bold text-[#6E7686]">{formatDay(link.day, language)}</p>
                      ) : null}
                      {link.tags?.length ? (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {link.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-bold text-[#DDE3EE]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0F131B] py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-sm font-black text-[#B9FF7A]">{copy.notesKicker}</p>
          <h2 className="mt-2 text-4xl font-black tracking-tight">{copy.notesTitle}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {notes.map((note) => (
              <article key={note.title.kr} className="rounded-3xl border border-white/10 bg-white/[0.055] p-6">
                <h3 className="text-xl font-black">{note.title[language]}</h3>
                <p className="mt-4 text-sm leading-7 text-[#B9C0CD]">{note.summary[language]}</p>
                <div className="mt-5 rounded-2xl bg-[#1C2230] p-4">
                  <p className="text-xs font-black text-[#D8C7FF]">{copy.pointLabel}</p>
                  <p className="mt-2 text-sm leading-7 text-[#DDE3EE]">{note.portfolioValue[language]}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
