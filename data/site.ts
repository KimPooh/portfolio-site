import type { Profile, SiteContent } from "@/types/portfolio";

export const profile: Profile = {
  name: "김지현",
  role: "AI/Data Portfolio",
  location: "Seoul, Korea",
  email: "jihyun@example.com",
  tagline: "헬스케어 데이터 분석과 머신러닝 모델링 경험을 정리한 실전형 포트폴리오입니다.",
  summary:
    "Python 기반 데이터 분석, 머신러닝 분류 모델링, 교차검증, 앙상블 실험을 중심으로 실제 문제를 모델링한 경험을 정리했습니다. 특히 난임 임신 성공 예측 모델 프로젝트를 통해 데이터 누수 방지와 제출 점수 안정성을 함께 고려한 실전형 모델링 과정을 경험했습니다.",
  availability: "Kim Ji-hyun AI/Data Portfolio",
  highlights: [
    "헬스케어 데이터를 기반으로 임신 성공 가능성을 예측하는 분류 모델을 설계했습니다.",
    "OOF AUC와 Public LB 차이를 비교하며 검증 전략과 제출 안정성을 점검했습니다.",
    "CatBoost, LightGBM, 스태킹/블렌딩 실험을 통해 모델 성능 개선을 시도했습니다."
  ],
  socials: [
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
    title: "데이터 분석부터 모델 제출 안정성까지 고민한 AI/Data 포트폴리오"
  },
  skills: {
    eyebrow: "Skills",
    title: "머신러닝 프로젝트 수행에 사용한 기술"
  },
  projects: {
    eyebrow: "Featured Project",
    title: "난임 임신 성공 예측 모델을 중심으로 정리한 실전 기록"
  },
  labs: {
    eyebrow: "Further Growth",
    title: "머신러닝 경험을 기반으로 확장 중인 영역"
  },
  contact: {
    eyebrow: "Links",
    title: "포트폴리오 연락 링크",
    description:
      "프로젝트 설명과 모델링 과정은 포트폴리오 페이지에 정리되어 있으며, 연락이 필요할 경우 이메일을 사용할 수 있습니다."
  }
};
