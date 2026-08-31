import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "personal-finance-manager",
    title: "개인 자산관리",
    year: "2026",
    category: "Personal Finance / Security-first Web App / Mobile UX",
    description:
      "금융을 잘 모르는 사용자도 자산·대출·현금흐름을 이해하고 기록할 수 있도록 만든 모바일 중심 개인 금융 관리 앱입니다.",
    outcome:
      "암호화 저장, 백업·복원, 중복 방지 CSV 가져오기와 모바일 검증을 거쳐 Neon PostgreSQL·Vercel 운영 환경에 배포했습니다.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Neon", "Vercel", "Security", "Mobile UX"],
    detailHref: "/projects/personal-finance-manager",
    featured: true,
    summaryCards: [
      {
        title: "Problem",
        items: [
          "자산·대출 정보가 여러 금융사에 흩어져 전체 상태를 보기 어려움",
          "금융 용어를 모르면 무엇을 입력해야 하는지 판단하기 어려움",
          "민감한 개인 금융 데이터를 외부 서비스에 맡기기 부담스러움"
        ]
      },
      {
        title: "Product",
        items: [
          "자산·대출·현금흐름과 상환계획을 한곳에서 관리",
          "입력 항목마다 쉬운 설명과 국내 금융회사 선택 제공",
          "은행·카드 CSV 미리보기, 수정, 중복 방지 후 저장"
        ]
      },
      {
        title: "Reliability",
        items: [
          "민감 필드 암호화와 로그인 시도 제한 적용",
          "백업 → 전체 삭제 → 복원 시나리오 자동 검증",
          "205개 자동 테스트와 갤럭시 실기기 점검"
        ]
      }
    ]
  },
  {
    slug: "studyflow-ai",
    title: "StudyFlow AI",
    year: "2026",
    category: "Agentic Coding Product / Learning OS / Interview Prep",
    description:
      "AI 헬스케어 과정에서 흩어진 학습 기록을 프로젝트, 면접 질문, 포트폴리오 문장으로 바꿔주는 개인 학습 관리 제품입니다.",
    outcome:
      "학습 로그 입력, 기술 키워드 추출, 프로젝트 매칭, 면접 질문 생성, 포트폴리오 문장 저장까지 동작하는 MVP로 구현했습니다.",
    tags: ["Next.js", "TypeScript", "Agentic Coding", "Learning Dashboard", "Portfolio Automation"],
    detailHref: "/studyflow-ai",
    featured: true,
    summaryCards: [
      {
        title: "Problem",
        items: [
          "노션과 과제에 학습 기록이 흩어져 있어 포트폴리오로 정리하기 어려움",
          "배운 기술이 어떤 프로젝트와 연결되는지 바로 보이지 않음",
          "면접에서 설명할 질문과 답변 포인트를 따로 정리해야 함"
        ]
      },
      {
        title: "Product",
        items: [
          "학습 로그 입력 후 기술 키워드 자동 추출",
          "난임 예측, 폐렴 백오피스, 흡연 분석 프로젝트와 자동 매칭",
          "면접 질문과 포트폴리오 문장 생성 및 저장"
        ]
      },
      {
        title: "Agentic Coding",
        items: [
          "실제 학습 관리 문제에서 출발",
          "기능 범위를 학습 기록, 프로젝트 연결, 면접 준비로 좁힘",
          "빌드와 브라우저 동작 검증으로 MVP 완성"
        ]
      }
    ]
  },
  {
    slug: "arte-visit-companion",
    title: "ARTE Visit Companion",
    year: "2026",
    category: "AI Experience Product / Visitor App / Operator Insight",
    description:
      "몰입형 전시 관람객에게 작품별 맞춤 설명과 질문, 추천 동선을 제공하고 운영자에게 관람 패턴을 요약하는 미니 제품입니다.",
    outcome:
      "디스트릭트의 ARTE MUSEUM/AR 전시 경험 맥락에 맞춰 관람객용 웹앱과 운영자 인사이트를 하나의 MVP로 구현했습니다.",
    tags: ["Next.js", "TypeScript", "Interactive Web", "AI UX", "Dashboard"],
    detailHref: "/arte-companion",
    summaryCards: [
      {
        title: "Product",
        items: [
          "관람객 유형과 작품을 선택하면 맞춤 설명 생성",
          "아이, 첫 방문, 외국인, 조용한 감상 등 상황별 질문 추천",
          "관람 후 감상 기록 저장"
        ]
      },
      {
        title: "Business Fit",
        items: [
          "몰입형 전시 경험을 만드는 디스트릭트 사업과 직접 연결",
          "앱/웹/관리자 페이지 요구사항과 연결 가능한 구조",
          "추후 LLM API, 관람 로그 DB, 운영 대시보드로 확장 가능"
        ]
      },
      {
        title: "Agentic Coding",
        items: [
          "실제 사용 흐름을 기준으로 제품 방향 재정의",
          "전시 관람객과 운영자 문제를 분리해 MVP 범위 설정",
          "빌드와 로컬 브라우저 검증까지 완료"
        ]
      }
    ]
  },
  {
    slug: "pneumonia-backoffice-ai-serving",
    title: "폐렴 환자 관리 백오피스",
    year: "2026",
    category: "FastAPI / Docker / AI Model Serving / Dashboard",
    description:
      "흉부 X-Ray 이미지 기반 폐렴 판독 모델을 활용해 환자 관리 백오피스 흐름을 구축하는 웹 개발 트랙 과제 프로젝트입니다.",
    outcome:
      "AI 모델을 API로 서빙하고, Docker 기반 실행 환경과 데이터 시각화 대시보드 흐름을 학습했습니다.",
    tags: ["FastAPI", "Docker", "AI Model Serving", "Dashboard", "Git Collaboration"],
    detailHref: "/projects/pneumonia-backoffice-ai-serving",
    summaryCards: [
      {
        title: "Project Goal",
        items: [
          "폐렴 판독 모델을 실제 서비스에서 호출 가능한 API 흐름으로 연결",
          "환자 관리 업무를 위한 백오피스 화면과 데이터 확인 구조 학습",
          "최종 프로젝트 전 실무형 개발 프로세스를 경험"
        ]
      },
      {
        title: "Backend",
        items: [
          "FastAPI 기반 요청/응답 구조 이해",
          "모델 로딩과 예측 결과 반환 흐름 학습",
          "외부 화면에서 AI 모델 결과를 사용할 수 있는 API 설계 경험"
        ]
      },
      {
        title: "Deployment",
        items: [
          "Dockerfile, 이미지, 컨테이너, 포트 설정 개념 학습",
          "개발 환경과 배포 환경 차이를 고려한 실행 구조 이해",
          "팀 단위 Git 협업과 단계별 과제 진행"
        ]
      }
    ]
  },
  {
    slug: "infertility-pregnancy-prediction",
    title: "난임 임신 성공 예측 모델",
    year: "2026",
    category: "Healthcare ML / Classification / Hackathon",
    description:
      "난임 시술 데이터를 기반으로 임신 성공 가능성을 예측한 머신러닝 분류 모델 프로젝트입니다.",
    outcome: "팀명 이거조로 Public Leaderboard 0.74236을 기록하며 해커톤 3등 수상",
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
          "Public Leaderboard 0.74236 기록",
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
          description: "팀명 이거조로 Public Leaderboard 0.74236을 기록하며 해커톤 3등을 수상했습니다."
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
        "Public Leaderboard 0.74236 기록",
        "단순 모델 학습이 아니라, 점수 안정성과 데이터 누수 방지를 고려한 실전형 모델링 경험을 쌓음"
      ]
    }
  },
  {
    slug: "smoking-status-data-analysis",
    title: "흡연 여부 건강 데이터 분석",
    year: "2026",
    category: "Health Data Analysis / EDA / Statistical Insight",
    description:
      "건강검진 데이터를 활용해 흡연자와 비흡연자의 건강 지표 차이를 분석하고, 통계적 검증을 통해 인사이트를 도출한 미니 프로젝트입니다.",
    outcome:
      "흡연 여부에 따른 주요 지표 차이와 연령대·BMI별 건강 영향 패턴을 시각화하고 통계적 유의성을 검증했습니다.",
    tags: ["Python", "Pandas", "EDA", "Visualization", "Statistical Analysis"],
    detailHref: "/projects/smoking-status-data-analysis",
    summaryCards: [
      {
        title: "Project Overview",
        items: [
          "흡연 여부에 따른 건강검진 지표 차이 분석",
          "통계적 가설 검정과 시각화를 통한 인사이트 도출",
          "실습형 미니 프로젝트 형태로 정리"
        ]
      },
      {
        title: "Data Processing",
        items: [
          "BMI 구간과 나이대 파생변수 생성",
          "결측치 유형별 적합한 처리 적용",
          "기초 통계 확인 및 이상치 탐색"
        ]
      },
      {
        title: "Analysis Focus",
        items: [
          "흡연 유무에 따른 중성지방/헤모글로빈/간 효소율 비교",
          "연령대별·BMI별 흡연 영향 차이 검증",
          "상관관계 및 가설 검정 기반 인사이트 도출"
        ]
      },
      {
        title: "Key Takeaways",
        items: [
          "흡연은 대사 및 간 기능 지표에 유의미한 차이를 보였습니다.",
          "성별 데이터가 보강되면 추가 모델링으로 확장 가능성을 갖추었습니다.",
          "데이터 탐색부터 통계 검정까지 분석 과정 전반을 학습했습니다."
        ]
      }
    ],
    detail: {
      oneLine:
        "건강검진 데이터를 기반으로 흡연 여부에 따른 주요 건강 지표 차이를 분석한 통계 기반 미니 프로젝트입니다.",
      nature: ["데이터 분석", "통계 검정", "건강 인사이트 도출"],
      award: "미니 프로젝트 완성",
      problem:
        "흡연 여부가 건강검진 지표에 미치는 영향을 데이터 기반으로 확인하고, 흡연자와 비흡연자 간의 주요 차이를 시각화하여 실무 감각을 익히는 것이 목표였습니다.",
      dataUnderstanding:
        "건강검진 결과와 흡연 여부(label)가 포함된 데이터셋을 불러와 기본 정보, 변수 분포, 결측치 여부를 확인했습니다. BMI, 나이대 등의 파생변수를 추가해 그룹별 분석을 준비했습니다.",
      preprocessing:
        "BMI 구간과 나이대 변수를 생성하고, 결측값을 변수별 특성에 맞춰 중앙값, 최빈값, 그룹 평균으로 보간했습니다. 범주형 레이블을 확인하고 분석에 적합하도록 정리했습니다.",
      featureEngineering:
        "BMI 구간, 나이대 등의 파생변수를 추가해 건강 지표별 경향을 세부적으로 비교할 수 있도록 했습니다. 또한 연령대별 분석을 위해 주요 변수들의 분포를 그룹별로 시각화했습니다.",
      modelingStrategy:
        "분류 모델 대신 통계적 분석과 시각화를 중심으로 흡연 여부 차이를 검증했습니다. 중성지방, 헤모글로빈, 고밀도지단백, 간 효소율 등 주요 지표를 박스플롯과 히스토그램으로 비교했습니다.",
      validation:
        "t-검정과 ANOVA를 활용해 흡연 여부, BMI 구간, 나이대 간의 차이를 검증했습니다. 특히 흡연 여부가 특정 지표에 유의한 영향을 미치는지를 p-value로 확인했습니다.",
      lessons: [
        "탐색적 데이터 분석과 통계적 검증을 함께 수행해야 의미 있는 인사이트를 얻을 수 있습니다.",
        "연령대와 BMI를 함께 고려하면 흡연 영향의 세부 패턴을 더 정확히 파악할 수 있습니다.",
        "데이터 검토 단계에서 결측치와 변수 간 상관관계를 먼저 살펴보는 것이 분석 안정성에 중요합니다."
      ],
      disclosure:
        "데이터 분석 실습 중심으로 정리했으며, 데이터 보안 및 공개 제한으로 인해 전체 코드와 원본 데이터는 공개하지 않았습니다.",
      leakageNote:
        "분석 단계에서는 통계적 검증과 시각화 기반 접근을 유지하며, 데이터 누수가 발생하지 않도록 그룹 변수 생성 시 원본 레코드를 혼동하지 않도록 주의했습니다.",
      considerations: [
        "결측치 처리 전략",
        "파생변수 생성",
        "통계적 가설 검정",
        "그룹별 분포 비교",
        "상관관계 분석",
        "시각화 기반 인사이트 도출"
      ],
      techStack: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "SciPy",
        "Statsmodels"
      ],
      modelingFlow: [
        "데이터 로드",
        "기초 탐색",
        "파생변수 생성",
        "결측치 처리",
        "EDA 시각화",
        "통계 검정",
        "상관관계 분석",
        "인사이트 정리"
      ],
      timeline: [
        {
          title: "데이터 로드 및 기본 확인",
          description: "건강검진 데이터셋을 불러와 기본 정보와 변수 구조를 확인했습니다."
        },
        {
          title: "파생변수 생성",
          description: "BMI 구간과 나이대를 추가하여 그룹별 분석 준비를 완료했습니다."
        },
        {
          title: "결측치 처리",
          description: "혈압, 시력, 중성 지방, 공복 혈당 등 변수별로 적합한 대체 전략을 적용했습니다."
        },
        {
          title: "EDA 및 시각화",
          description: "흡연 여부에 따른 주요 지표의 분포를 박스플롯과 히스토그램으로 비교했습니다."
        },
        {
          title: "통계 검정",
          description: "t-검정과 ANOVA를 활용하여 흡연 여부와 그룹 변수 간의 유의미한 차이를 검증했습니다."
        },
        {
          title: "상관관계 분석",
          description: "흡연 여부와 다른 건강 지표 간 상관관계를 확인해 주요 연관 변수를 도출했습니다."
        },
        {
          title: "결과 정리",
          description: "분석 결과를 토대로 흡연과 건강 지표 간 관계를 정리하고 개선 가능성을 도출했습니다."
        }
      ],
      performanceCards: [
        {
          title: "EDA",
          description: "흡연 여부에 따른 변수 분포를 시각화하고 차이를 직관적으로 파악했습니다."
        },
        {
          title: "Statistical Validation",
          description: "t-검정과 ANOVA를 이용해 흡연 여부 영향의 통계적 유의성을 검증했습니다."
        },
        {
          title: "Feature Engineering",
          description: "BMI 구간과 나이대를 도입해 세부 그룹별 패턴을 분석했습니다."
        },
        {
          title: "Insights",
          description: "흡연이 중성지방, 헤모글로빈, 간 효소율에 미치는 영향을 중심으로 인사이트를 정리했습니다."
        }
      ],
      results: [
        "흡연자와 비흡연자의 주요 건강 지표 차이를 시각화하고 통계적으로 검증했습니다.",
        "BMI 구간과 나이대별로 흡연 영향의 세부 패턴을 분석했습니다.",
        "데이터 탐색과 검증 과정을 통해 건강 차이 인사이트를 도출했습니다."
      ]
    }
  },
  {
    slug: "ai-healthcare-team-project",
    title: "AI 헬스케어 팀 프로젝트",
    year: "2026",
    category: "Healthcare AI / Team Collaboration",
    description:
      "AI 헬스케어 5기 과정에서 팀 단위로 문제를 정의하고 데이터 기반 해결 방향을 정리한 협업 프로젝트입니다.",
    outcome: "문제 정의, 분석 방향, 역할 분담, 발표 자료 구성까지 팀 프로젝트 흐름을 경험했습니다.",
    tags: ["Healthcare AI", "Team Project", "Problem Framing", "Presentation"]
  }
];

export const featuredProject = projects.find((project) => project.featured) ?? projects[0];
