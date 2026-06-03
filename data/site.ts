import type { Profile, SiteContent } from "@/types/portfolio";

export const profile: Profile = {
  name: "김지현",
  role: "Product-minded Frontend Engineer",
  location: "Seoul, Korea",
  email: "jihyun@example.com",
  tagline: "제품의 맥락을 읽고, 유지보수 가능한 인터페이스로 구현합니다.",
  summary:
    "Next.js 기반 서비스, 디자인 시스템, 인터랙션 프로토타입을 만드는 프론트엔드 엔지니어입니다. 작게 시작하되 오래 확장할 수 있는 구조를 선호합니다.",
  availability: "제품, 웹 앱, 디자인 시스템 프로젝트를 함께합니다.",
  highlights: [
    "복잡한 요구사항을 작은 컴포넌트와 명확한 데이터 구조로 정리합니다.",
    "디자인 의도를 유지하면서 성능과 접근성을 함께 챙깁니다.",
    "팀이 빠르게 수정하고 확장할 수 있는 코드베이스를 만듭니다."
  ],
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/"
    },
    {
      label: "Email",
      href: "mailto:jihyun@example.com"
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
    secondaryCtaLabel: "연락하기"
  },
  about: {
    eyebrow: "About",
    title: "구조와 경험을 함께 다룹니다."
  },
  skills: {
    eyebrow: "Skills",
    title: "확장하기 쉬운 방식으로 쌓은 기술 스택"
  },
  projects: {
    eyebrow: "Projects",
    title: "문제를 작게 나누고 결과로 검증한 작업",
    ctaLabel: "새 프로젝트 문의",
    ctaHref: "#contact"
  },
  labs: {
    eyebrow: "Labs",
    title: "다음 작업을 위한 작은 실험들"
  },
  contact: {
    eyebrow: "Contact",
    title: "함께 만들 제품이 있다면 이야기해 주세요.",
    description:
      "프로젝트 범위, 현재 고민, 원하는 출시 시점을 간단히 보내주시면 다음 단계에 맞는 구조로 답변하겠습니다."
  }
};
