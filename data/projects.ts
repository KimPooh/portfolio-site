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
          "Matplotlib, Google Colab"
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
      dataUnderstanding:
        "시술 이력, 배아 관련 정보, 경과일, 환자 조건 등 다양한 범주형/수치형 변수가 혼재된 헬스케어 데이터를 분석했습니다. 모델이 실제 예측 시점에 사용할 수 있는 정보와 사용할 수 없는 정보를 구분하는 것을 우선순위로 두었습니다.",
      preprocessing:
        "결측치의 의미를 변수별로 구분하고, 범주형 변수는 모델 특성에 맞게 인코딩했습니다. train/test 통계가 섞이지 않도록 전처리 기준을 관리하며 데이터 누수 가능성을 점검했습니다.",
      featureEngineering:
        "시술 이력, 배아 수, 경과일과 관련된 정보를 기반으로 파생변수를 설계했습니다. 단순히 변수를 늘리는 것보다 검증 점수와 제출 점수의 안정성에 도움이 되는 변수를 선별하는 데 집중했습니다.",
      modelingStrategy:
        "Baseline 모델로 기준 성능을 확인한 뒤 CatBoost와 LightGBM을 중심으로 성능을 비교했습니다. 이후 스태킹과 블렌딩을 실험하며 단일 모델보다 안정적인 제출 결과를 만드는 방향으로 조정했습니다.",
      validation:
        "OOF AUC와 Public Leaderboard 점수 차이를 비교하며 검증 전략의 신뢰성을 점검했습니다. 점수가 높은 모델보다 데이터 누수 위험이 낮고 일반화 가능성이 높은 모델 조합을 우선했습니다.",
      lessons: [
        "헬스케어 데이터에서는 성능 개선만큼 데이터 누수 방지가 중요하다는 점을 경험했습니다.",
        "OOF 검증과 제출 결과가 다를 때 원인을 추적하며 검증 설계의 중요성을 배웠습니다.",
        "앙상블은 단순히 모델을 많이 섞는 과정이 아니라, 안정성과 해석 가능한 실험 기록을 함께 관리해야 한다는 점을 확인했습니다."
      ],
      disclosure:
        "보안 및 데이터 공개 제한으로 인해 전체 코드와 데이터셋은 공개하지 않았습니다. 프로젝트 페이지에는 문제 정의, 전처리 방향, 모델링 흐름, 검증 방식과 결과를 중심으로 정리했습니다.",
      leakageNote:
        "검증 과정에서는 train/test 통계가 섞이지 않도록 주의하고, OOF 기반 검증과 제출 결과의 차이를 비교하며 모델의 일반화 가능성을 확인했습니다.",
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
        "Google Colab"
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
      timeline: [
        {
          title: "문제 정의",
          description: "난임 시술 전 임신 성공 가능성을 예측해 치료 전략 수립에 도움을 줄 수 있는 문제로 정의했습니다."
        },
        {
          title: "EDA",
          description: "변수 분포, 타깃 비율, 범주형 변수의 구조를 확인하며 모델링 기준을 세웠습니다."
        },
        {
          title: "결측치 / 이상치 확인",
          description: "결측치가 단순 누락인지 의미 있는 값인지 구분하고 이상치가 모델에 미치는 영향을 점검했습니다."
        },
        {
          title: "파생변수 생성",
          description: "시술 이력, 배아 수, 경과일 기반 변수를 설계하고 검증 점수 변화를 비교했습니다."
        },
        {
          title: "CatBoost / LightGBM 실험",
          description: "범주형 처리와 트리 기반 모델 성능을 비교하며 주요 모델 후보를 좁혔습니다."
        },
        {
          title: "OOF 검증",
          description: "교차검증 기반 OOF AUC를 확인하고 Public LB와의 차이를 비교했습니다."
        },
        {
          title: "앙상블 / 스태킹",
          description: "CatBoost, LightGBM, 스태킹/블렌딩 조합으로 제출 안정성을 확인했습니다."
        },
        {
          title: "최종 제출",
          description: "성능과 안정성, 데이터 누수 위험을 함께 고려해 최종 제출 모델을 선택했습니다."
        },
        {
          title: "해커톤 3등",
          description: "Public Leaderboard 기준 상위권 성능을 달성하며 해커톤 3등을 수상했습니다."
        }
      ],
      performanceCards: [
        {
          title: "Baseline Model",
          description: "기본 모델로 기준 성능을 확인하고 이후 실험의 비교 기준을 만들었습니다."
        },
        {
          title: "Feature Engineering",
          description: "시술 이력, 배아 수, 경과일 기반 변수를 설계하며 검증 점수 변화를 확인했습니다."
        },
        {
          title: "Validation",
          description: "OOF AUC와 제출 결과 차이를 비교하며 모델 안정성과 일반화 가능성을 점검했습니다."
        },
        {
          title: "Ensemble",
          description: "CatBoost, LightGBM, Stacking/Blending 실험으로 단일 모델보다 안정적인 결과를 탐색했습니다."
        },
        {
          title: "Result",
          description: "해커톤 3등을 수상했고, 단순 학습이 아닌 실전형 검증 과정을 경험했습니다."
        }
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
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Analytics"]
  },
  {
    slug: "design-system-migration",
    title: "Design System Migration",
    year: "2025",
    category: "Product UI System",
    description:
      "반복되는 UI 패턴을 토큰, 컴포넌트, 문서 구조로 재정리한 프론트엔드 시스템화 작업입니다.",
    outcome: "컴포넌트 재사용성과 화면 제작 일관성을 높이는 구조를 정리했습니다.",
    tags: ["React", "Design Tokens", "Storybook", "Accessibility"]
  },
  {
    slug: "interactive-launch-microsite",
    title: "Interactive Launch Microsite",
    year: "2025",
    category: "Frontend Interaction",
    description:
      "제품 메시지와 인터랙션 흐름을 검증하기 위해 제작한 경량 웹 인터페이스입니다.",
    outcome: "사용자가 핵심 정보를 빠르게 파악할 수 있도록 시각 흐름과 모션을 정리했습니다.",
    tags: ["Framer Motion", "Canvas", "Content Strategy"]
  }
];

export const featuredProject = projects.find((project) => project.featured) ?? projects[0];
