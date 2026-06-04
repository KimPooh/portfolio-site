import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "infertility-pregnancy-prediction",
    title: "난임 임신 성공 예측 모델",
    year: "2026",
    category: "Healthcare ML / Classification / Hackathon",
    description:
      "난임 시술 데이터를 기반으로 임신 성공 가능성을 예측한 머신러닝 분류 모델 프로젝트입니다.",
    outcome: "해커톤 3등 수상, Public Leaderboard 기준 상위권 성능 달성",
    tags: ["Python", "Pandas", "Scikit-learn", "CatBoost", "LightGBM"],
    githubUrl: "https://github.com/your-username/infertility-pregnancy-prediction",
    detailHref: "/projects/infertility-pregnancy-prediction",
    featured: true,
    summaryCards: [
      {
        title: "Project Overview",
        items: [
          "난임 시술 데이터 기반 임신 성공 가능성 예측",
          "헬스케어 데이터 분석과 머신러닝 분류 모델링",
          "해커톤 3등 수상 프로젝트"
        ]
      },
      {
        title: "Modeling Process",
        items: [
          "EDA와 결측치/범주형 변수 처리",
          "파생변수 생성과 교차검증",
          "CatBoost, LightGBM 앙상블 및 블렌딩"
        ]
      },
      {
        title: "Award",
        items: [
          "해커톤 3등 수상",
          "Public Leaderboard 기준 상위권 성능",
          "점수 안정성과 데이터 누수 방지를 함께 고려"
        ]
      },
      {
        title: "Tech Stack",
        items: [
          "Python, Pandas, NumPy",
          "Scikit-learn, CatBoost, LightGBM",
          "Matplotlib, Google Colab, GitHub"
        ]
      },
      {
        title: "Key Lessons",
        items: [
          "OOF AUC와 Public LB 차이를 비교하며 검증 전략 개선",
          "스태킹/블렌딩 실험으로 제출 점수 안정성 확인",
          "단순 학습보다 실전형 모델링 절차의 중요성 체감"
        ]
      }
    ],
    detail: {
      oneLine:
        "난임 시술 데이터를 기반으로 임신 성공 가능성을 예측한 머신러닝 프로젝트",
      nature: ["헬스케어 데이터 분석", "머신러닝 분류 모델", "해커톤 프로젝트"],
      award: "해커톤 3등 수상",
      problem:
        "난임 시술은 시간적, 경제적 부담이 크기 때문에 사전에 임신 성공 가능성을 예측할 수 있다면 더 나은 치료 전략 수립에 도움을 줄 수 있다는 관점에서 시작한 프로젝트입니다.",
      considerations: [
        "데이터 누수 방지",
        "범주형 변수 처리",
        "결측치 처리",
        "파생변수 설계",
        "OOF AUC와 Public LB 점수 차이",
        "CatBoost, LightGBM 앙상블",
        "스태킹/블렌딩 실험",
        "제출 점수 안정성"
      ],
      techStack: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "CatBoost",
        "LightGBM",
        "Matplotlib",
        "Google Colab",
        "GitHub"
      ],
      modelingFlow: [
        "EDA",
        "전처리",
        "파생변수 생성",
        "모델 학습",
        "교차검증",
        "앙상블",
        "제출 결과 분석"
      ],
      results: [
        "해커톤 3등 수상",
        "Public Leaderboard 기준 상위권 성능 달성",
        "단순 모델 학습이 아니라, 점수 안정성과 데이터 누수 방지를 고려한 실전형 모델링 경험을 쌓음"
      ]
    }
  },
  {
    slug: "ops-intelligence-dashboard",
    title: "Ops Intelligence Dashboard",
    year: "2026",
    category: "Analytics Dashboard",
    description:
      "운영 지표와 알림 데이터를 한 화면에서 분석할 수 있도록 구성한 데이터 대시보드 프로토타입입니다.",
    outcome: "지표 탐색 흐름과 데이터 기반 의사결정 구조를 화면 단위로 설계했습니다.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Analytics"],
    githubUrl: "https://github.com/your-username/ops-intelligence-dashboard"
  },
  {
    slug: "design-system-migration",
    title: "Design System Migration",
    year: "2025",
    category: "Product UI System",
    description:
      "반복되는 UI 패턴을 토큰, 컴포넌트, 문서 구조로 재정리한 프론트엔드 시스템화 작업입니다.",
    outcome: "컴포넌트 재사용성과 화면 제작 일관성을 높이는 구조를 정리했습니다.",
    tags: ["React", "Design Tokens", "Storybook", "Accessibility"],
    githubUrl: "https://github.com/your-username/design-system-migration"
  },
  {
    slug: "interactive-launch-microsite",
    title: "Interactive Launch Microsite",
    year: "2025",
    category: "Frontend Interaction",
    description:
      "제품 메시지와 인터랙션 흐름을 검증하기 위해 제작한 경량 웹 인터페이스입니다.",
    outcome: "사용자가 핵심 정보를 빠르게 파악할 수 있도록 시각 흐름과 모션을 정리했습니다.",
    tags: ["Framer Motion", "Canvas", "Content Strategy"],
    githubUrl: "https://github.com/your-username/interactive-launch-microsite"
  }
];

export const featuredProject = projects.find((project) => project.featured) ?? projects[0];
