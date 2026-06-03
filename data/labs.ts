import type { LabIdea } from "@/types/portfolio";

export const labIdeas: LabIdea[] = [
  {
    title: "Prompt-to-Prototype Workflow",
    status: "Prototype",
    description:
      "제품 아이디어를 빠르게 화면 구조와 인터랙션 초안으로 바꾸는 내부 실험입니다.",
    stack: ["Next.js", "LLM", "Design Systems"]
  },
  {
    title: "Canvas Signal Map",
    status: "Exploring",
    description:
      "복잡한 서비스 이벤트를 가벼운 2D 캔버스 맵으로 시각화하는 실험입니다.",
    stack: ["Canvas", "TypeScript", "Motion"]
  },
  {
    title: "Portfolio CMS Lite",
    status: "Backlog",
    description:
      "마크다운이나 JSON만으로 프로젝트 사례를 업데이트할 수 있는 작은 콘텐츠 레이어입니다.",
    stack: ["MDX", "Contentlayer", "Vercel"]
  }
];
