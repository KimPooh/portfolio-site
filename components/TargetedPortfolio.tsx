"use client";

import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Bot, CodeXml, Mail, Phone, Send, Sparkles, X } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animation";
import { getPortfolioAnswer, portfolioContact, type PortfolioLanguage } from "@/lib/portfolioChat";
import type { Profile, Project } from "@/types/portfolio";

type TargetedPortfolioProps = {
  profile: Profile;
  projects: Project[];
};

const navItems = [
  { id: "about", label: { kr: "소개", en: "About" } },
  { id: "skills", label: { kr: "기술", en: "Skills" } },
  { id: "projects", label: { kr: "프로젝트", en: "Projects" } },
  { id: "background", label: { kr: "배경", en: "Background" }, href: "/background" },
  { id: "journey", label: { kr: "여정", en: "Journey" }, href: "/journey" },
  { id: "contact", label: { kr: "연락", en: "Contact" } }
];

const languageCopy = {
  kr: {
    heroKicker: "AI SOLUTION · DATA · WEB",
    heroTitle: "데이터와 AI를\n실제 서비스로.",
    heroBody: "분석과 모델링에서 멈추지 않고, 사용자가 확인하고 움직일 수 있는 화면과 흐름까지 직접 구현합니다.",
    heroBadge: "AI Solution Builder",
    projectsButton: "프로젝트 보기",
    contactButton: "연락하기",
    profileLine: "AI/Data를 배우고 직접 만들어보는 중입니다",
    skillsTitle: "다루는 것들",
    skillsBody: "프로젝트를 만들면서 직접 써봤거나, 지금 배우고 있는 기술만 정리했습니다.",
    archiveTitle: "바로 보기",
    projectsTitle: "만든 것들",
    detailButton: "자세히",
    appButton: "앱 실행",
    repositoryButton: "GitHub",
    processButton: "제작 과정",
    projectsBody: "문제를 정의하고, 데이터를 다루고, 화면과 API로 연결한 과정을 프로젝트별로 정리했습니다.",
    chatSubtitle: "포트폴리오 안의 정보로 답변합니다.",
    chatEmpty: "어떤 작업이 궁금한가요?",
    chatThinking: "관련 기록을 찾는 중...",
    chatPlaceholder: "질문을 입력하세요",
    chatSend: "보내기",
    chatBubble: "무엇이든 물어보세요!",
    footerNav: "소개 · 기술 · 프로젝트 · 연락",
    contactKicker: "연락처",
    contactTitle: "AI로 문제를 정리하고, 작은 솔루션으로 구현합니다.",
    contactBody: "데이터 분석과 AI 모델링을 배우며, 작은 불편함을 웹 기반 솔루션으로 풀어보는 일에 관심이 있습니다.",
    phoneLabel: "전화",
    emailLabel: "이메일",
    githubLabel: "GitHub"
  },
  en: {
    heroKicker: "AI SOLUTION · DATA · WEB",
    heroTitle: "Data and AI,\nbuilt into services.",
    heroBody: "I move beyond analysis and modeling to build the interfaces and flows people can actually use.",
    heroBadge: "AI Solution Builder",
    projectsButton: "View Projects",
    contactButton: "Contact Me",
    profileLine: "Learning AI/Data by building small products",
    skillsTitle: "What I Use",
    skillsBody: "These are the technologies I have used in projects or am currently learning.",
    archiveTitle: "Quick Links",
    projectsTitle: "Built Work",
    detailButton: "Details",
    appButton: "Open App",
    repositoryButton: "GitHub",
    processButton: "Build Process",
    projectsBody: "Each project shows how I framed a problem, worked with data, and connected the result to an interface or API.",
    chatSubtitle: "Answers using this portfolio's information.",
    chatEmpty: "What would you like to know?",
    chatThinking: "Looking through the portfolio...",
    chatPlaceholder: "Ask about this portfolio",
    chatSend: "Send",
    chatBubble: "Ask me anything!",
    footerNav: "About · Skills · Projects · Contact",
    contactKicker: "Contact",
    contactTitle: "Clarifying problems with AI, then building small solutions.",
    contactBody: "I study data analysis and AI modeling, with an interest in turning user friction into practical web-based solutions.",
    phoneLabel: "Phone",
    emailLabel: "Email",
    githubLabel: "GitHub"
  }
} satisfies Record<PortfolioLanguage, Record<string, string>>;

const introCards = [
  { label: { kr: "현재", en: "Now" }, value: { kr: "AI/Data 학습 중", en: "Learning AI/Data" } },
  { label: { kr: "관심", en: "Focus" }, value: { kr: "AI Solution", en: "AI Solution" } },
  { label: { kr: "결과", en: "Award" }, value: { kr: "해커톤 3등", en: "Hackathon 3rd" } },
  { label: { kr: "제품", en: "Product" }, value: { kr: "StudyFlow AI", en: "StudyFlow AI" } }
];

const skillGroups = [
  {
    title: "Language",
    skills: ["Python", "TypeScript", "SQL"]
  },
  {
    title: "Data / ML",
    skills: ["Pandas", "NumPy", "Scikit-learn", "CatBoost", "LightGBM", "ExtraTrees"]
  },
  {
    title: "Serving",
    skills: ["FastAPI", "Docker", "Redis", "AI Worker", "REST API"]
  },
  {
    title: "Frontend",
    skills: ["Next.js", "React", "Tailwind CSS", "Responsive UI"]
  }
];

const projectCards = [
  {
    slug: "studyflow-ai",
    label: "Product",
    title: "StudyFlow AI",
    role: { kr: "기획 · 구현 · 검증", en: "Planning · Build · Validation" },
    summary: {
      kr: "공부 기록이 흩어져 다시 꺼내기 어려웠던 문제에서 출발한 작은 AI Solution 웹앱입니다.",
      en: "A small AI solution app built from the problem of scattered study notes."
    },
    points: { kr: ["한글 입력 처리", "기술 키워드 추출", "프로젝트 연결", "면접 질문 생성"], en: ["Korean input", "Keyword extraction", "Project matching", "Interview prompts"] },
    href: "/studyflow-ai",
    repository: "https://github.com/KimPooh/StudyFlow-AI",
    processHref: "/projects/studyflow-ai/process",
    color: "bg-[#EAF4FF]",
    visual: "studyflow"
  },
  {
    slug: "pneumonia-backoffice-ai-serving",
    label: "Serving",
    title: "폐렴 환자 관리 백오피스",
    role: { kr: "FastAPI · Docker · Worker", en: "FastAPI · Docker · Worker" },
    summary: {
      kr: "X-Ray 예측 모델을 API와 운영 화면 흐름으로 연결한 모델 서빙 프로젝트입니다.",
      en: "A model-serving project that connects an X-ray prediction model to API and admin workflow."
    },
    points: { kr: ["FastAPI", "Docker", "Redis Queue", "AI Worker"], en: ["FastAPI", "Docker", "Redis Queue", "AI Worker"] },
    href: "/projects/pneumonia-backoffice-ai-serving",
    repository: "https://github.com/KimPooh/pneumonia-backoffice-ai-serving",
    processHref: null,
    color: "bg-[#EAF7EF]",
    visual: "pneumonia"
  },
  {
    slug: "infertility-pregnancy-prediction",
    label: "Award",
    title: "난임 임신 성공 예측 모델",
    role: { kr: "해커톤 3등", en: "Hackathon 3rd Place" },
    summary: {
      kr: "난임 시술 데이터를 기반으로 임신 성공 가능성을 예측하고 검증한 머신러닝 프로젝트입니다.",
      en: "A machine learning project that predicts and validates pregnancy success from infertility treatment data."
    },
    points: { kr: ["EDA", "OOF AUC", "CatBoost", "LightGBM"], en: ["EDA", "OOF AUC", "CatBoost", "LightGBM"] },
    href: "/projects/infertility-pregnancy-prediction",
    repository: "https://github.com/KimPooh/infertility-pregnancy-prediction",
    processHref: null,
    color: "bg-[#FFF4DE]",
    visual: "infertility"
  },
  {
    slug: "smoking-status-data-analysis",
    label: "Analysis",
    title: "흡연 여부 건강 데이터 분석",
    role: { kr: "EDA · 통계 검정 · 시각화", en: "EDA · Statistics · Visualization" },
    summary: {
      kr: "건강검진 데이터에서 흡연 여부에 따른 지표 차이를 탐색하고 통계적으로 확인한 분석 프로젝트입니다.",
      en: "A health-data analysis comparing clinical indicators by smoking status and validating the differences statistically."
    },
    points: { kr: ["Pandas", "Seaborn", "t-test", "ANOVA"], en: ["Pandas", "Seaborn", "t-test", "ANOVA"] },
    href: "/projects/smoking-status-data-analysis",
    repository: "https://github.com/KimPooh/smoking-health-data-analysis",
    processHref: null,
    color: "bg-[#F1E8F7]",
    visual: "smoking"
  },
  {
    slug: "arte-visit-companion",
    label: "Prototype",
    title: "ARTE Visit Companion",
    role: { kr: "기획 · 인터랙션 · 다국어 UX", en: "Planning · Interaction · Bilingual UX" },
    summary: {
      kr: "관람객 유형과 작품 선택에 따라 한국어와 영어 관람 가이드를 제공하는 인터랙티브 웹 프로토타입입니다.",
      en: "An interactive prototype that provides Korean and English viewing guides based on visitor type and artwork."
    },
    points: { kr: ["Next.js", "Interactive UI", "KR / EN", "Responsive"], en: ["Next.js", "Interactive UI", "KR / EN", "Responsive"] },
    href: "/arte-companion",
    repository: "https://github.com/KimPooh/arte-visit-companion",
    processHref: "/projects/arte-visit-companion/process",
    color: "bg-[#FBE7DF]",
    visual: "arte"
  }
];

const assistantPrompts = {
  kr: ["대표 프로젝트 알려줘", "앱은 왜 만들었어?", "난임 점수는?", "기술 스택 요약해줘"],
  en: ["Show me the main projects", "Why were the apps built?", "What was the hackathon score?", "Summarize the tech stack"]
} satisfies Record<PortfolioLanguage, string[]>;

type ChatMessage = {
  role: "user" | "assistant";
  text: string;
};

function ProjectVisual({ type, label }: { type: string; label: string }) {
  if (type === "studyflow") {
    return (
      <div className="relative h-44 overflow-hidden rounded-md bg-[#E7E9FF] p-5 text-[#141821]">
        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#B8E4D8]" />
        <div className="absolute bottom-5 left-5 right-5 rounded-md bg-white/85 p-3 shadow-[0_14px_35px_rgb(59_62_110/0.18)]">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#6D72E8]" />
            <span className="h-2 w-16 rounded-full bg-[#C9CCFF]" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <span className="h-10 rounded bg-[#FFF0D9]" />
            <span className="h-10 rounded bg-[#DDEBF8]" />
            <span className="h-10 rounded bg-[#EAF7EF]" />
          </div>
        </div>
        <p className="relative text-sm font-black">{label}</p>
      </div>
    );
  }

  if (type === "pneumonia") {
    return (
      <div className="relative h-44 overflow-hidden rounded-md bg-[#DDEBF8] p-5 text-[#141821]">
        <div className="absolute left-5 top-10 h-20 w-16 rounded-[2rem] border border-[#78A6C8]/60 bg-white/45" />
        <div className="absolute left-12 top-10 h-20 w-16 rounded-[2rem] border border-[#78A6C8]/60 bg-white/45" />
        <div className="absolute right-5 top-6 grid gap-2">
          <span className="h-2 w-20 rounded-full bg-[#5A86AA]" />
          <span className="h-2 w-14 rounded-full bg-[#91B9D7]" />
          <span className="h-2 w-24 rounded-full bg-[#C2DBED]" />
        </div>
        <div className="absolute bottom-5 right-5 flex gap-2">
          <span className="h-8 w-8 rounded bg-[#6D72E8]" />
          <span className="h-8 w-8 rounded bg-[#B8E4D8]" />
        </div>
        <p className="relative text-sm font-black">{label}</p>
      </div>
    );
  }

  if (type === "smoking") {
    return (
      <div className="relative h-44 overflow-hidden rounded-md bg-[#EEE4F6] p-5 text-[#24202B]">
        <p className="relative z-10 text-xs font-black uppercase">{label}</p>
        <div className="absolute bottom-5 left-5 right-5 flex h-24 items-end gap-3 border-b border-[#6A557C]/30">
          {[42, 68, 51, 82, 61].map((height, index) => (
            <span key={height} className={`flex-1 rounded-t-sm ${index === 3 ? "bg-[#F0A58D]" : "bg-[#8D79A0]"}`} style={{ height: `${height}%` }} />
          ))}
        </div>
      </div>
    );
  }

  if (type === "arte") {
    return (
      <div className="relative h-44 overflow-hidden rounded-md bg-[#17191E] p-5 text-white">
        <p className="relative z-10 text-xs font-black uppercase">{label}</p>
        <div className="absolute -bottom-16 -left-8 h-44 w-44 rounded-full border-[18px] border-[#F0A58D]" />
        <div className="absolute -bottom-20 left-20 h-48 w-48 rounded-full border-[18px] border-[#C9BDF4]" />
        <div className="absolute -bottom-16 right-0 h-40 w-40 rounded-full border-[18px] border-[#B9E4D0]" />
      </div>
    );
  }

  return (
    <div className="relative h-44 overflow-hidden rounded-md bg-[#FFF0D9] p-5 text-[#141821]">
      <div className="absolute bottom-5 left-5 right-5 flex items-end gap-2">
        <span className="h-10 flex-1 rounded-t-2xl bg-[#F0B36F]" />
        <span className="h-20 flex-1 rounded-t-2xl bg-[#D8C7FF]" />
        <span className="h-14 flex-1 rounded-t-2xl bg-[#B8E4D8]" />
        <span className="h-24 flex-1 rounded-t-2xl bg-[#6D72E8]" />
      </div>
      <div className="absolute right-5 top-8 h-16 w-16 rounded-full border-[10px] border-white/75 bg-[#F7D79E]" />
      <p className="relative text-sm font-black">{label}</p>
    </div>
  );
}

export function TargetedPortfolio({ profile, projects }: TargetedPortfolioProps) {
  const [language, setLanguage] = useState<PortfolioLanguage>("kr");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isAnswering, setIsAnswering] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);
  const visibleProjects = projectCards
    .map((item) => ({ ...item, project: projects.find((project) => project.slug === item.slug) }))
    .filter((item) => item.project);
  const copy = languageCopy[language];

  const answerQuestion = async (question: string) => {
    try {
      const response = await fetch("/api/portfolio-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, language, history: messages.slice(-6) })
      });
      const data = (await response.json()) as { answer?: string };
      const context = messages.map((message) => message.text).join(" ");
      return data.answer || getPortfolioAnswer(question, language, context);
    } catch {
      return getPortfolioAnswer(question, language, messages.map((message) => message.text).join(" "));
    }
  };

  const submitQuestion = async (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const trimmed = chatInput.trim();
    if (!trimmed || isAnswering) return;

    setChatInput("");
    setIsAnswering(true);
    setMessages((current) => [...current, { role: "user", text: trimmed }]);
    const answer = await answerQuestion(trimmed);
    setMessages((current) => [...current, { role: "assistant", text: answer }]);
    setIsAnswering(false);
  };

  const handleChatKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      submitQuestion();
    }
  };

  const askPrompt = async (prompt: string) => {
    if (isAnswering) return;
    setIsAnswering(true);
    setMessages((current) => [...current, { role: "user", text: prompt }]);
    const answer = await answerQuestion(prompt);
    setMessages((current) => [...current, { role: "assistant", text: answer }]);
    setIsAnswering(false);
  };

  useEffect(() => {
    chatScrollRef.current?.scrollTo({
      top: chatScrollRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, [messages, isChatOpen, isAnswering]);

  return (
    <main className="min-h-screen bg-[#15171B] text-[#F5F1E8]">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#15171B]/95 backdrop-blur-xl">
        <div className="relative mx-auto flex max-w-[1240px] items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="김지현 포트폴리오 홈">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#B9E4D0] text-xs font-black text-[#15171B]">KJH</span>
            <span className="hidden text-sm font-black sm:block">KIM JI-HYUN</span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-[#B8BDC7] md:flex">
            {navItems.map((item) => (
              <a key={item.id} href={item.href ?? `#${item.id}`} className="transition hover:text-[#B9E4D0]">
                {item.label[language]}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="flex overflow-hidden rounded-md border border-white/15 text-xs font-black">
              {(["kr", "en"] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setLanguage(item);
                    setMessages([]);
                    setChatInput("");
                  }}
                  className={`min-w-10 px-3 py-2 transition ${
                    language === item ? "bg-[#F5F1E8] text-[#15171B]" : "text-[#AEB4BF] hover:text-white"
                  }`}
                  aria-pressed={language === item}
                >
                  {item === "kr" ? "KR" : "EN"}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-[#F5F1E8] md:hidden"
              aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
              aria-expanded={isMenuOpen}
            >
              <span aria-hidden="true" className="text-xl leading-none">{isMenuOpen ? "×" : "≡"}</span>
            </button>
          </div>
          {isMenuOpen && (
            <nav className="absolute left-5 right-5 top-[calc(100%+0.5rem)] grid rounded-md border border-white/10 bg-[#202329] p-2 shadow-2xl md:hidden">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href ?? `#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded px-4 py-3 text-sm font-bold text-[#D8DCE3] transition hover:bg-white/[0.06] hover:text-[#B9E4D0]"
                >
                  {item.label[language]}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>

      <section id="about" className="border-b border-white/10">
        <div className="mx-auto grid min-h-[720px] max-w-[1240px] gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:py-16">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p variants={fadeInUp} className="text-xs font-black text-[#B9E4D0]">
              {copy.heroKicker}
            </motion.p>
            <motion.h1 variants={fadeInUp} className="mt-6 text-6xl font-black leading-none sm:text-8xl">
              {language === "kr" ? profile.name : "Jihyun Kim"}
              <span className="text-[#F0A58D]">.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-7 text-3xl font-black leading-tight text-[#F5F1E8] sm:text-5xl">
              {copy.heroTitle.split("\n")[0]}
              <br />
              <span className="text-[#C9BDF4]">{copy.heroTitle.split("\n")[1]}</span>
            </motion.p>
            <motion.p variants={fadeInUp} className="mt-7 max-w-2xl text-base leading-8 text-[#B8BDC7] sm:text-lg">
              {copy.heroBody}
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="group inline-flex min-h-14 items-center gap-4 rounded-md bg-[#F5F1E8] px-6 text-base font-black text-[#15171B] transition hover:-translate-y-1 hover:bg-white">
                {copy.projectsButton}
                <span aria-hidden="true" className="text-lg transition group-hover:translate-x-1">↗</span>
              </a>
              <a href="#contact" className="inline-flex min-h-14 items-center gap-3 rounded-md border border-white/20 px-6 text-base font-black text-[#F5F1E8] transition hover:-translate-y-1 hover:border-[#B9E4D0] hover:text-[#B9E4D0]">
                {copy.contactButton}
              </a>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-12 grid max-w-2xl grid-cols-2 border-y border-white/10 sm:grid-cols-4">
              {introCards.map((card, index) => (
                <div key={card.label.kr} className={`py-4 ${index % 2 ? "pl-4" : "pr-4"} sm:border-l sm:border-white/10 sm:px-4 sm:first:border-l-0 sm:first:pl-0`}>
                  <p className="text-[11px] font-bold text-[#858D99]">{String(index + 1).padStart(2, "0")} / {card.label[language]}</p>
                  <p className="mt-2 text-sm font-black text-[#E6E2DA]">{card.value[language]}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.aside variants={fadeInUp} initial="hidden" animate="visible" className="relative mx-auto w-full max-w-[440px] lg:mr-0">
            <div className="absolute -left-4 top-10 h-32 w-8 rounded-sm bg-[#C9BDF4] sm:-left-8 sm:w-12" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-white/10 bg-[#242830]">
              <Image
                src="/profile.jpg"
                alt="김지현 프로필 사진"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 440px"
                className="object-cover object-[50%_38%]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#F0A58D] px-5 py-4 text-[#15171B]">
                <p className="text-xs font-black">{copy.heroBadge}</p>
                <p className="mt-1 text-sm font-semibold">{copy.profileLine}</p>
              </div>
            </div>
            <div className="absolute -bottom-5 right-4 rounded-md bg-[#B9E4D0] px-4 py-3 text-xs font-black text-[#15171B] sm:-right-5">
              SEOUL · 2026
            </div>
          </motion.aside>
        </div>
      </section>

      <section id="skills" className="bg-[#DCD4F3] py-16 text-[#1A1B20]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-black text-[#5D4D8A]">Skills</p>
              <h2 className="mt-2 text-4xl font-black">{copy.skillsTitle}</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#575361]">
              {copy.skillsBody}
            </p>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <article key={group.title} className="rounded-md border border-[#B8ACDA] bg-[#F7F4FF] p-5">
                <h3 className="text-lg font-black">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded bg-white px-3 py-1 text-xs font-bold text-[#3E3850]">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-[#F1EEE7] py-20 text-[#1A1B20]">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="grid gap-5 border-b border-[#CAC4B8] pb-8 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <p className="text-xs font-black text-[#6C5A8F]">SELECTED PROJECTS</p>
              <h2 className="mt-3 text-4xl font-black sm:text-6xl">{copy.projectsTitle}</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#5E5B55] md:justify-self-end">{copy.projectsBody}</p>
          </div>
          <div>
            {visibleProjects.map((project, index) => (
              <article key={project.slug} className="grid gap-6 border-b border-[#CAC4B8] py-8 lg:grid-cols-[4rem_15rem_1fr] lg:items-start">
                <p className="text-sm font-black text-[#8A8378]">{String(index + 1).padStart(2, "0")}</p>
                <ProjectVisual type={project.visual} label={project.label} />
                <div className="flex h-full flex-col">
                  <p className="text-xs font-black uppercase text-[#6C5A8F]">{project.role[language]}</p>
                  <h3 className="mt-3 text-2xl font-black sm:text-3xl">{project.title}</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5E5B55]">{project.summary[language]}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.points[language].map((point) => (
                      <span key={point} className="rounded border border-[#CBC4B8] bg-white/65 px-3 py-1.5 text-xs font-bold text-[#373630]">
                        {point}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3 lg:mt-auto lg:pt-6">
                    <Link href={project.href} className="inline-flex min-h-11 items-center gap-3 rounded-md bg-[#1A1B20] px-4 text-sm font-black text-white transition hover:-translate-y-0.5">
                      {project.processHref ? copy.appButton : copy.detailButton}<span aria-hidden="true">↗</span>
                    </Link>
                    <a href={project.repository} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-3 rounded-md border border-[#9F988D] px-4 text-sm font-black transition hover:-translate-y-0.5 hover:border-[#6C5A8F] hover:text-[#6C5A8F]">
                      {copy.repositoryButton}<span aria-hidden="true">↗</span>
                    </a>
                    {project.processHref ? (
                      <Link href={project.processHref} className="inline-flex min-h-11 items-center gap-3 rounded-md border border-[#6C5A8F] bg-[#E5DCF3] px-4 text-sm font-black text-[#4F3F72] transition hover:-translate-y-0.5 hover:bg-[#D5C8EA]">
                        {copy.processButton}<span aria-hidden="true">→</span>
                      </Link>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-y border-[#AFA4D0] bg-[#C9BDF4] py-20 text-[#1B1C21]">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="text-xs font-black text-[#5E4E87]">{copy.contactKicker}</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[1.12] [word-break:keep-all] sm:text-6xl">{copy.contactTitle}</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#514B5F] sm:text-lg">{copy.contactBody}</p>
          </div>
          <div className="border-t border-[#8E82B5]">
            <a
              href={`tel:${portfolioContact.phone.replaceAll("-", "")}`}
              className="group grid min-h-24 grid-cols-[2.5rem_1fr_auto] items-center gap-3 border-b border-[#8E82B5] px-2 transition hover:bg-[#DCD4F3]"
            >
              <Phone className="h-5 w-5 text-[#5E4E87]" aria-hidden="true" />
              <span>
                <span className="block text-xs font-black text-[#5E4E87]">{copy.phoneLabel}</span>
                <strong className="mt-1 block text-base sm:text-xl">{portfolioContact.phone}</strong>
              </span>
              <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${portfolioContact.email}`}
              className="group grid min-h-24 grid-cols-[2.5rem_1fr_auto] items-center gap-3 border-b border-[#8E82B5] px-2 transition hover:bg-[#F0C9BA]"
            >
              <Mail className="h-5 w-5 text-[#5E4E87]" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block text-xs font-black text-[#5E4E87]">{copy.emailLabel}</span>
                <strong className="mt-1 block break-all text-sm sm:text-lg">{portfolioContact.email}</strong>
              </span>
              <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href={portfolioContact.github}
              target="_blank"
              rel="noreferrer"
              className="group grid min-h-24 grid-cols-[2.5rem_1fr_auto] items-center gap-3 border-b border-[#8E82B5] px-2 transition hover:bg-[#B9E4D0]"
            >
              <CodeXml className="h-5 w-5 text-[#5E4E87]" aria-hidden="true" />
              <strong className="text-base sm:text-xl">GitHub</strong>
              <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 text-sm text-[#98A2B3] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>{profile.name} · AI Solution Portfolio</p>
          <p>{copy.footerNav}</p>
        </div>
      </footer>

      <div className="fixed bottom-5 right-5 z-[70] sm:bottom-7 sm:right-7">
        {isChatOpen ? (
          <section className="w-[calc(100vw-2.5rem)] max-w-[25rem] overflow-hidden rounded-md border border-[#8E82B5] bg-[#FAF7F0] text-[#1D1F23] shadow-[0_24px_80px_rgb(0_0_0/0.34)]">
            <div className="flex items-center justify-between border-b border-[#AFA4D0] bg-[#C9BDF4] px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="relative flex h-10 w-10 items-center justify-center rounded-md bg-[#24262C] text-[#F5F1E8]">
                  <Bot className="h-6 w-6" aria-hidden="true" />
                  <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#24262C] bg-[#B9E4D0]" />
                </span>
                <div>
                  <p className="text-sm font-black">JIHYUN BOT</p>
                  <p className="mt-0.5 text-xs text-[#5F5575]">{copy.chatSubtitle}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsChatOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-[#8E82B5] bg-white/35 transition hover:bg-white/65"
                aria-label="AI 채팅 닫기"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div ref={chatScrollRef} className="h-[24rem] overflow-y-auto px-4 py-4">
              {messages.length === 0 ? (
                <div className="flex h-full flex-col justify-end">
                  <div className="mb-auto flex items-center gap-3 rounded-md border border-[#D8D1C5] bg-white/70 p-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#E8F2EC] text-[#347469]">
                      <Sparkles className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <p className="text-sm font-black">{copy.chatEmpty}</p>
                  </div>
                  <div className="mt-4 grid gap-2">
                    {assistantPrompts[language].map((prompt) => (
                      <button
                        key={prompt}
                        type="button"
                        onClick={() => askPrompt(prompt)}
                        className="flex min-h-10 items-center justify-between gap-3 rounded-md border border-[#D8D1C5] bg-white/65 px-3 py-2 text-left text-xs font-bold transition hover:border-[#8E82B5] hover:bg-[#F0ECFA]"
                      >
                        {prompt}<ArrowUpRight className="h-4 w-4 shrink-0 text-[#6C5A8F]" aria-hidden="true" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {messages.map((message, index) => (
                    <div key={`${message.role}-${index}-${message.text}`} className={`flex items-start gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                      {message.role === "assistant" ? (
                        <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#C9BDF4] text-[#3F345A]">
                          <Bot className="h-4 w-4" aria-hidden="true" />
                        </span>
                      ) : null}
                      <p
                        className={`max-w-[84%] rounded-md border px-4 py-3 text-sm leading-6 ${
                          message.role === "user"
                            ? "border-[#D99780] bg-[#F0B5A1] text-[#28201E]"
                            : "border-[#D8D1C5] bg-white text-[#44413B]"
                        }`}
                      >
                        {message.text}
                      </p>
                    </div>
                  ))}
                  {isAnswering ? (
                    <div className="flex items-start gap-2">
                      <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-md bg-[#C9BDF4] text-[#3F345A]">
                        <Bot className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <p className="rounded-md border border-[#D8D1C5] bg-white px-4 py-3 text-sm leading-6 text-[#5E5A53]">
                        {copy.chatThinking}
                      </p>
                    </div>
                  ) : null}
                </div>
              )}
            </div>

            <form onSubmit={submitQuestion} className="border-t border-[#D8D1C5] bg-[#F4F0E9] p-3">
              <div className="flex items-end gap-2">
                <textarea
                  value={chatInput}
                  onChange={(event) => setChatInput(event.target.value)}
                  onKeyDown={handleChatKeyDown}
                  rows={1}
                  className="min-h-11 flex-1 resize-none rounded-md border border-[#BFB7AA] bg-white px-4 py-3 text-sm leading-5 text-[#1D1F23] outline-none placeholder:text-[#89837A] focus:border-[#74629B]"
                  placeholder={copy.chatPlaceholder}
                />
                <button
                  type="submit"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#24262C] text-white transition hover:-translate-y-0.5 hover:bg-[#4A405D] disabled:cursor-not-allowed disabled:opacity-45"
                  disabled={!chatInput.trim() || isAnswering}
                  aria-label={copy.chatSend}
                >
                  <Send className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </form>
          </section>
        ) : (
          <div className="flex items-end gap-3">
            <div className="relative mb-2 hidden rounded-md border border-[#BFB7AA] bg-[#F4F0E8] px-4 py-2 text-sm font-black text-[#141821] shadow-[0_14px_38px_rgb(0_0_0/0.24)] sm:block">
              {copy.chatBubble}
              <span className="absolute -right-2 bottom-3 h-4 w-4 rotate-45 border-r border-t border-[#BFB7AA] bg-[#F4F0E8]" />
            </div>
            <button
              type="button"
              onClick={() => setIsChatOpen(true)}
              className="group relative flex h-14 w-14 items-center justify-center rounded-md border border-[#8E82B5] bg-[#C9BDF4] text-[#24262C] shadow-[0_18px_50px_rgb(0_0_0/0.28)] transition hover:-translate-y-1 sm:h-16 sm:w-16"
              aria-label="포트폴리오 AI 열기"
            >
              <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full border-2 border-[#24262C] bg-[#B9E4D0]" />
              <Bot className="h-8 w-8 transition group-hover:scale-110" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
