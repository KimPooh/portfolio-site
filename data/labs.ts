import type { LabIdea } from "@/types/portfolio";

export const labIdeas: LabIdea[] = [
  {
    title: "머신러닝 모델 성능 개선 실험",
    status: "Exploring",
    description:
      "같은 데이터라도 전처리, 파생변수, 검증 방식, 앙상블 조합에 따라 성능이 어떻게 달라지는지 실험하고 기록할 예정입니다.",
    stack: ["Python", "LightGBM", "CatBoost", "Validation"]
  },
  {
    title: "데이터 분석 리포트 만들기",
    status: "Backlog",
    description:
      "분석 결과를 단순한 표나 그래프로 끝내지 않고, 문제 정의부터 결론까지 읽기 쉬운 리포트 형태로 정리하는 연습을 할 예정입니다.",
    stack: ["Pandas", "Matplotlib", "EDA", "Report"]
  },
  {
    title: "PoohFolio 콘텐츠 업데이트",
    status: "Prototype",
    description:
      "학습한 내용과 진행한 프로젝트를 꾸준히 추가하면서, 이 홈페이지를 저만의 성장 기록 공간으로 발전시킬 예정입니다.",
    stack: ["Next.js", "GitHub", "Vercel", "Portfolio"]
  }
];