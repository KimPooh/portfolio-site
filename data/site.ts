import type { Profile, SiteContent } from "@/types/portfolio";

export const profile: Profile = {
  name: "김지현",
  role: "AI/Data + Web Portfolio",
  location: "Seoul, Korea",
  email: "rlarha3288@gmail.com",
  tagline: "데이터를 이해하고, AI 모델을 서비스 흐름에 연결하며, 사용자가 이해하기 쉬운 웹 화면으로 풀어내는 개발자 포트폴리오입니다.",
  summary:
    "Python 기반 데이터 분석과 머신러닝 모델링을 학습하며, FastAPI 모델 서빙, Docker 기반 배포, Next.js 포트폴리오 구현까지 경험을 확장하고 있습니다.",
  availability: "Digital Experience Ready Portfolio",
  highlights: [
    "Next.js, TypeScript, Tailwind CSS로 포트폴리오를 직접 구현하고 Vercel에 배포했습니다.",
    "FastAPI와 Docker를 활용해 AI 모델을 웹 서비스 흐름에 연결하는 과제를 수행했습니다.",
    "헬스케어 데이터 분석과 머신러닝 모델링 과정을 Case Study 형태로 쉽게 설명했습니다."
  ],
  socials: [
    {
      label: "Email",
      href: "mailto:rlarha3288@gmail.com"
    },
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
    { label: "대표 프로젝트", href: "#featured-project" },
    { label: "추가 기록", href: "#labs" },
    { label: "링크", href: "#contact" }
  ],
  hero: {
    primaryCtaLabel: "대표 프로젝트 보기",
    secondaryCtaLabel: "모델링 흐름 보기"
  },
  about: {
    eyebrow: "About",
    title: "데이터와 웹 구현을 연결하는 포트폴리오"
  },
  skills: {
    eyebrow: "Skills",
    title: "AI 모델링, 웹 구현, 배포 흐름에 사용한 기술"
  },
  projects: {
    eyebrow: "Featured Project",
    title: "학습과 구현을 연결한 프로젝트 기록"
  },
  labs: {
    eyebrow: "Further Growth",
    title: "서비스 구현 역량으로 확장 중인 학습 기록"
  },
  contact: {
    eyebrow: "Links",
    title: "포트폴리오 연락 링크",
    description:
      "프로젝트 설명은 웹 구현, 모델 서빙, 데이터 분석 Case Study 중심으로 정리되어 있으며, 연락이 필요할 경우 이메일을 사용할 수 있습니다."
  }
};
