import type { SkillGroup } from "@/types/portfolio";

export const skillGroups: SkillGroup[] = [
  {
    title: "Python & Data",
    description: "데이터를 불러오고, 정리하고, 분석하는 기본 흐름을 학습하고 있습니다.",
    skills: ["Python", "Pandas", "NumPy", "Data Cleaning", "EDA"]
  },
  {
    title: "Machine Learning",
    description: "예측 모델을 만들고 성능을 비교하며 개선하는 과정을 실습하고 있습니다.",
    skills: ["Scikit-learn", "LightGBM", "CatBoost", "Model Evaluation", "AUC"]
  },
  {
    title: "Project Workflow",
    description: "실험 결과를 기록하고, 제출 파일을 비교하며 더 나은 방향을 찾는 연습을 하고 있습니다.",
    skills: ["Feature Engineering", "Ensemble", "Validation", "Experiment Tracking"]
  },
  {
    title: "Web & Deployment",
    description: "개인 홈페이지를 직접 만들고 GitHub와 Vercel을 통해 배포했습니다.",
    skills: ["Next.js", "TypeScript", "Git", "GitHub", "Vercel"]
  }
];