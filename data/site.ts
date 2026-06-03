import type { Profile, SiteContent } from "@/types/portfolio";

export const profile: Profile = {
  name: "PoohFolio",
  role: "AI와 데이터로 성장하는 예비 개발자",
  location: "Seoul, Korea",
  email: "",
  tagline: "나만의 성장 기록을 담은 푸폴리오입니다.",
  summary:
    "Python, 데이터 분석, 머신러닝 프로젝트를 중심으로 배우고 만든 것들을 정리하는 개인 홈페이지입니다. 아직 완성형 개발자라기보다, 문제를 직접 풀어보고 기록하며 실력을 쌓아가는 과정에 있습니다.",
  availability: "새로운 프로젝트와 학습 기회를 환영합니다.",
  highlights: [
    "Python과 데이터 분석을 기반으로 문제를 해결합니다.",
    "머신러닝 모델링과 성능 개선 과정을 기록합니다.",
    "복잡한 내용을 이해하기 쉽게 정리하는 것을 중요하게 생각합니다."
  ],
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/KimPooh"
    }
  ]
};

export const siteContent: SiteContent = {
  navigation: [
    { label: "소개", href: "#about" },
    { label: "기술", href: "#skills" },
    { label: "프로젝트", href: "#projects" },
    { label: "랩", href: "#labs" },
    { label: "연락", href: "#contact" }
  ],
  hero: {
    primaryCtaLabel: "프로젝트 보기",
    secondaryCtaLabel: "소개 보기"
  },
  about: {
    eyebrow: "About PoohFolio",
    title: "배우고, 만들고, 기록하며 성장합니다.",
    description:
      "PoohFolio는 제가 배우는 기술과 직접 만든 프로젝트를 정리하는 공간입니다. Python, 데이터 분석, 머신러닝을 중심으로 공부하고 있으며, 단순히 결과만 남기기보다 어떤 문제를 어떻게 해결했는지 기록하는 것을 중요하게 생각합니다."
  },
  skills: {
    eyebrow: "Skills",
    title: "현재 집중하고 있는 기술 스택"
  },
  projects: {
    eyebrow: "Projects",
    title: "문제를 작게 나누고 결과로 검증한 작업들",
    ctaLabel: "새 프로젝트 문의",
    ctaHref: "#contact"
  },
  labs: {
    eyebrow: "Labs",
    title: "다음 성장을 위한 작은 실험들"
  },
  contact: {
    eyebrow: "Contact",
    title: "함께 만들 프로젝트가 있다면 이야기해 주세요.",
    description:
      "프로젝트 제안, 협업, 피드백, 학습 관련 이야기를 환영합니다. GitHub를 통해 제가 작업한 내용을 확인할 수 있습니다."
  }
};