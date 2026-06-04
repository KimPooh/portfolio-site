import type { SkillGroup } from "@/types/portfolio";

export const skillGroups: SkillGroup[] = [
  {
    title: "Data Analysis",
    description: "데이터 구조를 파악하고 모델링에 필요한 전처리 기준을 세웁니다.",
    skills: ["Python", "Pandas", "NumPy", "EDA", "Matplotlib"]
  },
  {
    title: "Machine Learning",
    description: "분류 모델 학습, 검증, 제출 결과 분석까지 모델링 흐름을 다룹니다.",
    skills: ["Scikit-learn", "CatBoost", "LightGBM", "Cross Validation", "AUC"]
  },
  {
    title: "Model Strategy",
    description: "데이터 누수 방지와 점수 안정성을 고려하며 실험을 설계합니다.",
    skills: ["OOF", "Feature Engineering", "Ensemble", "Stacking", "Blending"]
  },
  {
    title: "Portfolio Engineering",
    description: "분석 결과와 프로젝트 과정을 웹 포트폴리오로 명확하게 전달합니다.",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive UI", "Documentation"]
  }
];
