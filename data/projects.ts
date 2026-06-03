import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    title: "Ops Intelligence Dashboard",
    year: "2026",
    description:
      "운영팀이 지표, 알림, 후속 조치를 한 화면에서 확인할 수 있도록 만든 업무형 대시보드입니다.",
    outcome: "핵심 지표 탐색 시간을 줄이고 반복 확인 흐름을 단순화했습니다.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Analytics"]
  },
  {
    title: "Design System Migration",
    year: "2025",
    description:
      "여러 제품에 흩어진 UI 패턴을 토큰, 컴포넌트, 문서로 재정리한 디자인 시스템 전환 작업입니다.",
    outcome: "신규 화면 제작 속도를 높이고 컴포넌트 중복을 줄였습니다.",
    tags: ["React", "Design Tokens", "Storybook", "Accessibility"]
  },
  {
    title: "Interactive Launch Microsite",
    year: "2025",
    description:
      "제품 출시 메시지를 빠르게 검증하기 위해 제작한 가벼운 인터랙션 중심의 랜딩 경험입니다.",
    outcome: "초기 캠페인에서 주요 CTA 클릭률을 개선했습니다.",
    tags: ["Framer Motion", "Canvas", "Content Strategy", "Vercel"]
  }
];
