import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    title: "난임 임신 성공 예측 모델",
    year: "2026",
    description:
      "난임 시술 데이터를 기반으로 임신 성공 가능성을 예측하는 머신러닝 모델을 만들었습니다. 데이터 전처리, 파생변수 설계, 모델 앙상블, 제출 결과 비교를 반복하며 성능을 개선했습니다.",
    outcome:
  "CatBoost와 LightGBM 기반 실험을 진행했고, 리더보드 점수를 기준으로 모델 개선 방향을 검증했습니다. 최종적으로 난임 임신 성공 예측 해커톤에서 3등을 달성했습니다.",
    tags: ["Python", "Pandas", "LightGBM", "CatBoost", "Machine Learning"]
  },
  {
    title: "PoohFolio 개인 홈페이지",
    year: "2026",
    description:
      "GitHub와 Vercel을 활용해 직접 배포한 개인 포트폴리오 홈페이지입니다. 제가 배우는 기술, 진행한 프로젝트, 성장 과정을 정리하는 공간으로 만들었습니다.",
    outcome:
      "Next.js 프로젝트를 GitHub에 올리고 Vercel을 통해 실제 인터넷 주소로 배포했습니다.",
    tags: ["Next.js", "TypeScript", "GitHub", "Vercel", "Portfolio"]
  },
  {
    title: "데이터 분석 학습 기록",
    year: "2026",
    description:
      "Python 기초부터 Pandas, NumPy, 머신러닝 모델링까지 단계적으로 학습하며 실습 내용을 정리하고 있습니다. 단순히 코드를 따라 치는 것보다, 오류를 해결하고 결과를 해석하는 과정에 집중하고 있습니다.",
    outcome:
      "데이터 전처리, 시각화, 모델 학습, 성능 평가 흐름을 직접 실습하며 프로젝트에 적용할 수 있는 기초를 쌓았습니다.",
    tags: ["Python", "NumPy", "Pandas", "Scikit-learn", "Data Analysis"]
  }
];