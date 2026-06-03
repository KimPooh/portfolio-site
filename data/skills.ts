import type { SkillGroup } from "@/types/portfolio";

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Architecture",
    description: "서비스가 커져도 읽히는 화면 구조와 상태 흐름을 설계합니다.",
    skills: ["Next.js", "React", "TypeScript", "App Router", "Component APIs"]
  },
  {
    title: "Product UI",
    description: "작업 흐름이 많은 제품 화면을 촘촘하고 안정적으로 만듭니다.",
    skills: ["Tailwind CSS", "Design Systems", "Accessibility", "Responsive UI"]
  },
  {
    title: "Interaction",
    description: "사용자를 방해하지 않는 수준의 모션과 피드백을 구현합니다.",
    skills: ["Framer Motion", "Canvas", "Micro-interactions", "Prototyping"]
  },
  {
    title: "Delivery",
    description: "배포, 측정, 유지보수까지 고려한 개발 사이클을 운영합니다.",
    skills: ["Vercel", "Performance", "Code Review", "Documentation"]
  }
];
