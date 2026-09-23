import type { Bilingual, Project } from "@/types/portfolio";

const bi = (kr: string, en: string): Bilingual => ({ kr, en });

export const projects: Project[] = [
  {
    slug: "personal-finance-manager",
    title: bi("개인 자산관리", "Personal Finance Manager"),
    year: "2026",
    category: "Personal Finance / Security-first Web App / Mobile UX",
    description: bi(
      "금융을 잘 모르는 사용자도 자산·대출·현금흐름을 이해하고 기록할 수 있도록 만든 모바일 중심 개인 금융 관리 앱입니다.",
      "A mobile-first personal finance app built so that even users unfamiliar with financial terms can understand and track their assets, loans, and cash flow."
    ),
    outcome: bi(
      "암호화 저장, 백업·복원, 중복 방지 CSV 가져오기와 모바일 검증을 거쳐 Neon PostgreSQL·Vercel 운영 환경에 배포했습니다.",
      "Deployed to a Neon PostgreSQL and Vercel production environment after building encrypted storage, backup and restore, duplicate-safe CSV import, and mobile-device verification."
    ),
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Neon", "Vercel", "Security", "Mobile UX"],
    detailHref: "/projects/personal-finance-manager",
    featured: true,
    summaryCards: [
      {
        title: "Problem",
        items: [
          bi("자산·대출 정보가 여러 금융사에 흩어져 전체 상태를 보기 어려움", "Assets and loans are scattered across institutions, making it hard to see the full picture"),
          bi("금융 용어를 모르면 무엇을 입력해야 하는지 판단하기 어려움", "Without financial vocabulary, it's hard to know what to even enter"),
          bi("민감한 개인 금융 데이터를 외부 서비스에 맡기기 부담스러움", "Handing sensitive personal financial data to an outside service feels risky")
        ]
      },
      {
        title: "Product",
        items: [
          bi("자산·대출·현금흐름과 상환계획을 한곳에서 관리", "Manages assets, loans, cash flow, and repayment plans in one place"),
          bi("입력 항목마다 쉬운 설명과 국내 금융회사 선택 제공", "Plain-language explanations and a Korean-institution picker for every input field"),
          bi("은행·카드 CSV 미리보기, 수정, 중복 방지 후 저장", "Previews and lets you edit bank/card CSV imports, then saves them with duplicate prevention")
        ]
      },
      {
        title: "Reliability",
        items: [
          bi("민감 필드 암호화와 로그인 시도 제한 적용", "Encrypts sensitive fields and rate-limits login attempts"),
          bi("백업 → 전체 삭제 → 복원 시나리오 자동 검증", "Automated verification of the backup → full-delete → restore scenario"),
          bi("205개 자동 테스트와 갤럭시 실기기 점검", "205 automated tests plus checks on a real Galaxy device")
        ]
      }
    ]
  },
  {
    slug: "studyflow-ai",
    title: bi("StudyFlow AI", "StudyFlow AI"),
    year: "2026",
    category: "Agentic Coding Product / Learning OS / Interview Prep",
    description: bi(
      "AI 헬스케어 과정에서 흩어진 학습 기록을 프로젝트, 면접 질문, 포트폴리오 문장으로 바꿔주는 개인 학습 관리 제품입니다.",
      "A personal learning-management product that turns scattered study notes from the AI Healthcare course into projects, interview questions, and portfolio sentences."
    ),
    outcome: bi(
      "학습 로그 입력, 기술 키워드 추출, 프로젝트 매칭, 면접 질문 생성, 포트폴리오 문장 저장까지 동작하는 MVP로 구현했습니다.",
      "Built as a working MVP covering study-log entry, technical keyword extraction, project matching, interview-question generation, and saving portfolio sentences."
    ),
    tags: ["Next.js", "TypeScript", "Agentic Coding", "Learning Dashboard", "Portfolio Automation"],
    detailHref: "/studyflow-ai",
    featured: true,
    summaryCards: [
      {
        title: "Problem",
        items: [
          bi("노션과 과제에 학습 기록이 흩어져 있어 포트폴리오로 정리하기 어려움", "Study notes are scattered across Notion and assignments, making them hard to turn into a portfolio"),
          bi("배운 기술이 어떤 프로젝트와 연결되는지 바로 보이지 않음", "It isn't obvious which project a given skill connects to"),
          bi("면접에서 설명할 질문과 답변 포인트를 따로 정리해야 함", "Interview questions and talking points have to be organized separately")
        ]
      },
      {
        title: "Product",
        items: [
          bi("학습 로그 입력 후 기술 키워드 자동 추출", "Automatically extracts technical keywords after a study-log entry"),
          bi("난임 예측, 폐렴 백오피스, 흡연 분석 프로젝트와 자동 매칭", "Auto-matches entries to the infertility-prediction, pneumonia back-office, and smoking-analysis projects"),
          bi("면접 질문과 포트폴리오 문장 생성 및 저장", "Generates and saves interview questions and portfolio sentences")
        ]
      },
      {
        title: "Agentic Coding",
        items: [
          bi("실제 학습 관리 문제에서 출발", "Started from a real study-management problem"),
          bi("기능 범위를 학습 기록, 프로젝트 연결, 면접 준비로 좁힘", "Narrowed scope to study logging, project linking, and interview prep"),
          bi("빌드와 브라우저 동작 검증으로 MVP 완성", "Finished the MVP with a build pass and in-browser verification")
        ]
      }
    ]
  },
  {
    slug: "arte-visit-companion",
    title: bi("ARTE Visit Companion", "ARTE Visit Companion"),
    year: "2026",
    category: "AI Experience Product / Visitor App / Operator Insight",
    description: bi(
      "몰입형 전시 관람객에게 작품별 맞춤 설명과 질문, 추천 동선을 제공하고 운영자에게 관람 패턴을 요약하는 미니 제품입니다.",
      "A small product that gives immersive-exhibition visitors artwork-specific explanations, prompts, and a recommended route, while summarizing visit patterns for operators."
    ),
    outcome: bi(
      "디스트릭트의 ARTE MUSEUM/AR 전시 경험 맥락에 맞춰 관람객용 웹앱과 운영자 인사이트를 하나의 MVP로 구현했습니다.",
      "Built as one MVP combining a visitor-facing web app and operator insights, framed around d'strict's ARTE MUSEUM/AR exhibition experience."
    ),
    tags: ["Next.js", "TypeScript", "Interactive Web", "AI UX", "Dashboard"],
    detailHref: "/arte-companion",
    summaryCards: [
      {
        title: "Product",
        items: [
          bi("관람객 유형과 작품을 선택하면 맞춤 설명 생성", "Generates a tailored explanation once you pick a visitor type and artwork"),
          bi("아이, 첫 방문, 외국인, 조용한 감상 등 상황별 질문 추천", "Recommends situational questions for kids, first-time visitors, international visitors, quiet viewing, and more"),
          bi("관람 후 감상 기록 저장", "Saves a reflection record after the visit")
        ]
      },
      {
        title: "Business Fit",
        items: [
          bi("몰입형 전시 경험을 만드는 디스트릭트 사업과 직접 연결", "Connects directly to d'strict's business of building immersive exhibition experiences"),
          bi("앱/웹/관리자 페이지 요구사항과 연결 가능한 구조", "A structure that can extend to app/web/admin-page requirements"),
          bi("추후 LLM API, 관람 로그 DB, 운영 대시보드로 확장 가능", "Extensible later toward an LLM API, a visit-log database, and an operations dashboard")
        ]
      },
      {
        title: "Agentic Coding",
        items: [
          bi("실제 사용 흐름을 기준으로 제품 방향 재정의", "Redefined the product direction around the real usage flow"),
          bi("전시 관람객과 운영자 문제를 분리해 MVP 범위 설정", "Set MVP scope by separating the visitor problem from the operator problem"),
          bi("빌드와 로컬 브라우저 검증까지 완료", "Completed through a build pass and local browser verification")
        ]
      }
    ]
  },
  {
    slug: "pote-gallery",
    title: bi("Pote", "Pote"),
    year: "2026",
    category: "Art Gallery Platform / Product Build / Data Automation",
    description: bi(
      "5명 작가의 작품 98점을 탐색하고, 실제 전시 정보와 함께 취향에 맞는 작품을 발견할 수 있도록 만든 온라인 아트 갤러리입니다.",
      "An online art gallery built around 98 works from five artists, helping visitors discover pieces that match their taste alongside real exhibition information."
    ),
    outcome: bi(
      "작품·작가 탐색부터 실제 공간 미리보기와 전시 카탈로그까지 하나의 탐색 경험으로 구현하고, Vercel에 배포·운영했습니다.",
      "Built artwork and artist discovery, a real-room preview, and the exhibition catalogue into a single browsing experience, deployed and operated on Vercel."
    ),
    tags: ["Next.js", "React", "TypeScript", "KR / EN", "Vercel", "Static Data Pipeline"],
    detailHref: "/projects/pote-gallery",
    summaryCards: [
      {
        title: "Problem",
        items: [
          bi("신진 작가는 작품을 지속적으로 소개할 채널이 필요함", "Emerging artists need a channel to keep introducing their work"),
          bi("구매자는 작품·작가·전시 정보를 한 곳에서 비교하기 어려움", "Buyers struggle to compare artwork, artist, and exhibition information in one place"),
          bi("작품 구매 전에는 가격보다 취향과 공간에서의 모습 확인이 먼저 필요함", "Before buying, seeing how a piece fits your taste and your space matters more than price")
        ]
      },
      {
        title: "Product",
        items: [
          bi("작품·작가 탐색, 검색·필터, 찜과 문의 흐름 구현", "Built artwork/artist browsing, search and filters, favorites, and an inquiry flow"),
          bi("취향 추천 퀴즈와 실제 공간 미리보기 제공", "A taste-matching quiz and a real-room preview"),
          bi("작가 제출·관리자 검토와 전시 카탈로그 운영", "Artist submissions with admin review, plus an operating exhibition catalogue")
        ]
      },
      {
        title: "Engineering",
        items: [
          bi("한국어·영어 전환과 작품별 언어 데이터 구조 적용", "Korean/English switching with a per-artwork bilingual data structure"),
          bi("Vercel 인프라 제약을 확인하고 GitHub Actions 기반 정적 데이터 스냅샷 파이프라인으로 전환", "Identified Vercel infrastructure limits and switched to a GitHub Actions static-snapshot data pipeline"),
          bi("데스크톱·모바일 실브라우저 검증으로 배포 품질 관리", "Maintained deploy quality with real desktop and mobile browser verification")
        ]
      }
    ]
  },
  {
    slug: "pneumonia-backoffice-ai-serving",
    title: bi("폐렴 환자 관리 백오피스", "Pneumonia Patient Back Office"),
    year: "2026",
    category: "FastAPI / Docker / AI Model Serving / Dashboard",
    description: bi(
      "흉부 X-Ray 이미지 기반 폐렴 판독 모델을 활용해 환자 관리 백오피스 흐름을 구축하는 웹 개발 트랙 과제 프로젝트입니다.",
      "A web-development-track course project that builds a patient-management back-office flow around a chest X-ray pneumonia-reading model."
    ),
    outcome: bi(
      "AI 모델을 API로 서빙하고, Docker 기반 실행 환경과 데이터 시각화 대시보드 흐름을 학습했습니다.",
      "Served the AI model as an API and learned a Docker-based runtime setup along with a data-visualization dashboard flow."
    ),
    tags: ["FastAPI", "Docker", "AI Model Serving", "Dashboard", "Git Collaboration"],
    detailHref: "/projects/pneumonia-backoffice-ai-serving",
    summaryCards: [
      {
        title: "Project Goal",
        items: [
          bi("폐렴 판독 모델을 실제 서비스에서 호출 가능한 API 흐름으로 연결", "Connected the pneumonia-reading model into an API flow a real service could call"),
          bi("환자 관리 업무를 위한 백오피스 화면과 데이터 확인 구조 학습", "Learned a back-office screen and data-review structure for patient management"),
          bi("최종 프로젝트 전 실무형 개발 프로세스를 경험", "Experienced a practical development process ahead of the capstone project")
        ]
      },
      {
        title: "Backend",
        items: [
          bi("FastAPI 기반 요청/응답 구조 이해", "Understood a FastAPI-based request/response structure"),
          bi("모델 로딩과 예측 결과 반환 흐름 학습", "Learned the flow of loading a model and returning prediction results"),
          bi("외부 화면에서 AI 모델 결과를 사용할 수 있는 API 설계 경험", "Gained experience designing an API that lets external screens use an AI model's output")
        ]
      },
      {
        title: "Deployment",
        items: [
          bi("Dockerfile, 이미지, 컨테이너, 포트 설정 개념 학습", "Learned Dockerfile, image, container, and port-configuration concepts"),
          bi("개발 환경과 배포 환경 차이를 고려한 실행 구조 이해", "Understood a runtime structure that accounts for the gap between dev and deployment environments"),
          bi("팀 단위 Git 협업과 단계별 과제 진행", "Worked through staged assignments with team-based Git collaboration")
        ]
      }
    ]
  },
  {
    slug: "infertility-pregnancy-prediction",
    title: bi("난임 임신 성공 예측 모델", "Infertility Pregnancy-Success Prediction Model"),
    year: "2026",
    category: "Healthcare ML / Classification / Hackathon",
    description: bi(
      "난임 시술 데이터를 기반으로 임신 성공 가능성을 예측한 머신러닝 분류 모델 프로젝트입니다.",
      "A machine learning classification project that predicts the likelihood of pregnancy success from infertility treatment data."
    ),
    outcome: bi(
      "팀명 이거조로 Public Leaderboard 0.74236을 기록하며 해커톤 3등 수상",
      "Placed 3rd at the hackathon as team 'Igeojo', recording 0.74236 on the Public Leaderboard."
    ),
    tags: ["Python", "Pandas", "Scikit-learn", "CatBoost", "LightGBM"],
    detailHref: "/projects/infertility-pregnancy-prediction",
    featured: true,
    summaryCards: [
      {
        title: "Project Overview",
        items: [
          bi("난임 시술 데이터 기반 임신 성공 가능성 예측", "Predicting pregnancy-success likelihood from infertility treatment data"),
          bi("헬스케어 데이터 분석과 머신러닝 분류 모델링", "Healthcare data analysis and machine learning classification modeling"),
          bi("해커톤 3등 수상 프로젝트", "A hackathon project that placed 3rd")
        ]
      },
      {
        title: "Modeling Process",
        items: [
          bi("EDA와 결측치/범주형 변수 처리", "EDA and handling missing values / categorical variables"),
          bi("파생변수 생성과 교차검증", "Feature engineering and cross-validation"),
          bi("CatBoost, LightGBM 앙상블 및 블렌딩", "CatBoost/LightGBM ensembling and blending")
        ]
      },
      {
        title: "Award",
        items: [
          bi("해커톤 3등 수상", "Placed 3rd at the hackathon"),
          bi("Public Leaderboard 0.74236 기록", "Recorded 0.74236 on the Public Leaderboard"),
          bi("점수 안정성과 데이터 누수 방지를 함께 고려", "Weighed score stability alongside leakage prevention")
        ]
      },
      {
        title: "Tech Stack",
        items: [
          bi("Python, Pandas, NumPy", "Python, Pandas, NumPy"),
          bi("Scikit-learn, CatBoost, LightGBM", "Scikit-learn, CatBoost, LightGBM"),
          bi("Matplotlib, Google Colab", "Matplotlib, Google Colab")
        ]
      },
      {
        title: "Key Lessons",
        items: [
          bi("OOF AUC와 Public LB 차이를 비교하며 검증 전략 개선", "Improved the validation strategy by comparing OOF AUC against the Public LB"),
          bi("스태킹/블렌딩 실험으로 제출 점수 안정성 확인", "Confirmed submission-score stability through stacking/blending experiments"),
          bi("단순 학습보다 실전형 모델링 절차의 중요성 체감", "Felt firsthand how much a real-world modeling process matters beyond just training a model")
        ]
      }
    ],
    detail: {
      oneLine: bi(
        "난임 시술 데이터를 기반으로 임신 성공 가능성을 예측한 머신러닝 프로젝트",
        "A machine learning project predicting pregnancy-success likelihood from infertility treatment data"
      ),
      nature: [bi("헬스케어 데이터 분석", "Healthcare data analysis"), bi("머신러닝 분류 모델", "Machine learning classification model"), bi("해커톤 프로젝트", "Hackathon project")],
      award: bi("해커톤 3등 수상", "Placed 3rd at the hackathon"),
      problem: bi(
        "난임 시술은 시간적, 경제적 부담이 크기 때문에 사전에 임신 성공 가능성을 예측할 수 있다면 더 나은 치료 전략 수립에 도움을 줄 수 있다는 관점에서 시작한 프로젝트입니다.",
        "Infertility treatment carries a heavy time and financial burden, so this project started from the idea that predicting pregnancy-success likelihood in advance could support a better treatment strategy."
      ),
      dataUnderstanding: bi(
        "시술 이력, 배아 관련 정보, 경과일, 환자 조건 등 다양한 범주형/수치형 변수가 혼재된 헬스케어 데이터를 분석했습니다. 모델이 실제 예측 시점에 사용할 수 있는 정보와 사용할 수 없는 정보를 구분하는 것을 우선순위로 두었습니다.",
        "Analyzed healthcare data mixing categorical and numeric variables — treatment history, embryo-related information, elapsed days, patient conditions. Prioritized distinguishing information the model could actually access at prediction time from information it couldn't."
      ),
      preprocessing: bi(
        "결측치의 의미를 변수별로 구분하고, 범주형 변수는 모델 특성에 맞게 인코딩했습니다. train/test 통계가 섞이지 않도록 전처리 기준을 관리하며 데이터 누수 가능성을 점검했습니다.",
        "Distinguished what a missing value meant on a per-variable basis and encoded categorical variables to fit each model's characteristics. Managed preprocessing rules so train/test statistics never mixed, checking for possible data leakage throughout."
      ),
      featureEngineering: bi(
        "시술 이력, 배아 수, 경과일과 관련된 정보를 기반으로 파생변수를 설계했습니다. 단순히 변수를 늘리는 것보다 검증 점수와 제출 점수의 안정성에 도움이 되는 변수를 선별하는 데 집중했습니다.",
        "Designed derived features from treatment history, embryo count, and elapsed days. Focused less on adding more variables and more on selecting ones that helped both validation-score and submission-score stability."
      ),
      modelingStrategy: bi(
        "Baseline 모델로 기준 성능을 확인한 뒤 CatBoost와 LightGBM을 중심으로 성능을 비교했습니다. 이후 스태킹과 블렌딩을 실험하며 단일 모델보다 안정적인 제출 결과를 만드는 방향으로 조정했습니다.",
        "Established a baseline performance level, then compared CatBoost and LightGBM as the main candidates. From there, experimented with stacking and blending to produce a more stable submission than any single model."
      ),
      validation: bi(
        "OOF AUC와 Public Leaderboard 점수 차이를 비교하며 검증 전략의 신뢰성을 점검했습니다. 점수가 높은 모델보다 데이터 누수 위험이 낮고 일반화 가능성이 높은 모델 조합을 우선했습니다.",
        "Checked the reliability of the validation strategy by comparing OOF AUC against the Public Leaderboard score. Prioritized a model combination with lower leakage risk and better generalization over one with the highest raw score."
      ),
      lessons: [
        bi(
          "헬스케어 데이터에서는 성능 개선만큼 데이터 누수 방지가 중요하다는 점을 경험했습니다.",
          "Learned firsthand that on healthcare data, preventing leakage matters as much as improving performance."
        ),
        bi(
          "OOF 검증과 제출 결과가 다를 때 원인을 추적하며 검증 설계의 중요성을 배웠습니다.",
          "Learned how important validation design is by tracing why OOF validation and submission results sometimes diverged."
        ),
        bi(
          "앙상블은 단순히 모델을 많이 섞는 과정이 아니라, 안정성과 해석 가능한 실험 기록을 함께 관리해야 한다는 점을 확인했습니다.",
          "Confirmed that ensembling isn't just mixing in more models — it requires managing stability and an interpretable experiment record together."
        )
      ],
      disclosure: bi(
        "보안 및 데이터 공개 제한으로 인해 전체 코드와 데이터셋은 공개하지 않았습니다. 프로젝트 페이지에는 문제 정의, 전처리 방향, 모델링 흐름, 검증 방식과 결과를 중심으로 정리했습니다.",
        "The full code and dataset are not published due to security and data-disclosure restrictions. This page instead focuses on the problem definition, preprocessing approach, modeling flow, validation method, and results."
      ),
      leakageNote: bi(
        "검증 과정에서는 train/test 통계가 섞이지 않도록 주의하고, OOF 기반 검증과 제출 결과의 차이를 비교하며 모델의 일반화 가능성을 확인했습니다.",
        "During validation, took care to keep train/test statistics separate and checked the model's generalization by comparing OOF-based validation against submission results."
      ),
      considerations: [
        bi("데이터 누수 방지", "Leakage prevention"),
        bi("범주형 변수 처리", "Categorical variable handling"),
        bi("결측치 처리", "Missing-value handling"),
        bi("파생변수 설계", "Feature engineering"),
        bi("OOF AUC와 Public LB 점수 차이", "OOF AUC vs. Public LB score gap"),
        bi("CatBoost, LightGBM 앙상블", "CatBoost/LightGBM ensembling"),
        bi("스태킹/블렌딩 실험", "Stacking/blending experiments"),
        bi("제출 점수 안정성", "Submission-score stability")
      ],
      techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "CatBoost", "LightGBM", "Matplotlib", "Google Colab"],
      modelingFlow: [
        bi("EDA", "EDA"),
        bi("전처리", "Preprocessing"),
        bi("파생변수 생성", "Feature engineering"),
        bi("모델 학습", "Model training"),
        bi("교차검증", "Cross-validation"),
        bi("앙상블", "Ensembling"),
        bi("제출 결과 분석", "Submission analysis")
      ],
      timeline: [
        {
          title: bi("문제 정의", "Problem framing"),
          description: bi(
            "난임 시술 전 임신 성공 가능성을 예측해 치료 전략 수립에 도움을 줄 수 있는 문제로 정의했습니다.",
            "Framed the problem as predicting pregnancy-success likelihood before treatment, to help inform treatment strategy."
          )
        },
        {
          title: bi("EDA", "EDA"),
          description: bi(
            "변수 분포, 타깃 비율, 범주형 변수의 구조를 확인하며 모델링 기준을 세웠습니다.",
            "Set the modeling baseline by checking variable distributions, the target ratio, and the structure of categorical variables."
          )
        },
        {
          title: bi("결측치 / 이상치 확인", "Missing values / outliers"),
          description: bi(
            "결측치가 단순 누락인지 의미 있는 값인지 구분하고 이상치가 모델에 미치는 영향을 점검했습니다.",
            "Distinguished whether a missing value was simply absent or a meaningful signal, and checked how outliers affected the model."
          )
        },
        {
          title: bi("파생변수 생성", "Feature engineering"),
          description: bi(
            "시술 이력, 배아 수, 경과일 기반 변수를 설계하고 검증 점수 변화를 비교했습니다.",
            "Designed features based on treatment history, embryo count, and elapsed days, comparing the resulting validation-score changes."
          )
        },
        {
          title: bi("CatBoost / LightGBM 실험", "CatBoost / LightGBM experiments"),
          description: bi(
            "범주형 처리와 트리 기반 모델 성능을 비교하며 주요 모델 후보를 좁혔습니다.",
            "Narrowed down the main model candidates by comparing categorical handling and tree-based model performance."
          )
        },
        {
          title: bi("OOF 검증", "OOF validation"),
          description: bi(
            "교차검증 기반 OOF AUC를 확인하고 Public LB와의 차이를 비교했습니다.",
            "Checked cross-validation-based OOF AUC and compared it against the Public LB."
          )
        },
        {
          title: bi("앙상블 / 스태킹", "Ensemble / stacking"),
          description: bi(
            "CatBoost, LightGBM, 스태킹/블렌딩 조합으로 제출 안정성을 확인했습니다.",
            "Confirmed submission stability with a CatBoost, LightGBM, and stacking/blending combination."
          )
        },
        {
          title: bi("최종 제출", "Final submission"),
          description: bi(
            "성능과 안정성, 데이터 누수 위험을 함께 고려해 최종 제출 모델을 선택했습니다.",
            "Chose the final submitted model by weighing performance, stability, and leakage risk together."
          )
        },
        {
          title: bi("해커톤 3등", "3rd place"),
          description: bi(
            "팀명 이거조로 Public Leaderboard 0.74236을 기록하며 해커톤 3등을 수상했습니다.",
            "Placed 3rd at the hackathon as team 'Igeojo', recording 0.74236 on the Public Leaderboard."
          )
        }
      ],
      performanceCards: [
        {
          title: "Baseline Model",
          description: bi(
            "기본 모델로 기준 성능을 확인하고 이후 실험의 비교 기준을 만들었습니다.",
            "Established a reference performance level with a basic model to compare later experiments against."
          )
        },
        {
          title: "Feature Engineering",
          description: bi(
            "시술 이력, 배아 수, 경과일 기반 변수를 설계하며 검증 점수 변화를 확인했습니다.",
            "Checked validation-score changes while designing features from treatment history, embryo count, and elapsed days."
          )
        },
        {
          title: "Validation",
          description: bi(
            "OOF AUC와 제출 결과 차이를 비교하며 모델 안정성과 일반화 가능성을 점검했습니다.",
            "Checked model stability and generalization by comparing OOF AUC against submission results."
          )
        },
        {
          title: "Ensemble",
          description: bi(
            "CatBoost, LightGBM, Stacking/Blending 실험으로 단일 모델보다 안정적인 결과를 탐색했습니다.",
            "Explored a result more stable than any single model through CatBoost, LightGBM, and stacking/blending experiments."
          )
        },
        {
          title: "Result",
          description: bi(
            "해커톤 3등을 수상했고, 단순 학습이 아닌 실전형 검증 과정을 경험했습니다.",
            "Placed 3rd at the hackathon and experienced a real-world validation process beyond simple model training."
          )
        }
      ],
      results: [
        bi("해커톤 3등 수상", "Placed 3rd at the hackathon"),
        bi("Public Leaderboard 0.74236 기록", "Recorded 0.74236 on the Public Leaderboard"),
        bi(
          "단순 모델 학습이 아니라, 점수 안정성과 데이터 누수 방지를 고려한 실전형 모델링 경험을 쌓음",
          "Built real-world modeling experience that weighed score stability and leakage prevention, not just training a model"
        )
      ]
    }
  },
  {
    slug: "smoking-status-data-analysis",
    title: bi("흡연 여부 건강 데이터 분석", "Smoking Status Health Data Analysis"),
    year: "2026",
    category: "Health Data Analysis / EDA / Statistical Insight",
    description: bi(
      "건강검진 데이터를 활용해 흡연자와 비흡연자의 건강 지표 차이를 분석하고, 통계적 검증을 통해 인사이트를 도출한 미니 프로젝트입니다.",
      "A mini project using health-checkup data to analyze differences between smokers and non-smokers and draw out insights through statistical validation."
    ),
    outcome: bi(
      "흡연 여부에 따른 주요 지표 차이와 연령대·BMI별 건강 영향 패턴을 시각화하고 통계적 유의성을 검증했습니다.",
      "Visualized key indicator differences by smoking status and health-impact patterns by age group and BMI, and validated their statistical significance."
    ),
    tags: ["Python", "Pandas", "EDA", "Visualization", "Statistical Analysis"],
    detailHref: "/projects/smoking-status-data-analysis",
    summaryCards: [
      {
        title: "Project Overview",
        items: [
          bi("흡연 여부에 따른 건강검진 지표 차이 분석", "Analyzed health-checkup indicator differences by smoking status"),
          bi("통계적 가설 검정과 시각화를 통한 인사이트 도출", "Drew out insights through statistical hypothesis testing and visualization"),
          bi("실습형 미니 프로젝트 형태로 정리", "Organized as a hands-on mini project")
        ]
      },
      {
        title: "Data Processing",
        items: [
          bi("BMI 구간과 나이대 파생변수 생성", "Created BMI-bracket and age-group derived features"),
          bi("결측치 유형별 적합한 처리 적용", "Applied handling appropriate to each type of missing value"),
          bi("기초 통계 확인 및 이상치 탐색", "Checked basic statistics and explored outliers")
        ]
      },
      {
        title: "Analysis Focus",
        items: [
          bi("흡연 유무에 따른 중성지방/헤모글로빈/간 효소율 비교", "Compared triglycerides, hemoglobin, and liver-enzyme levels by smoking status"),
          bi("연령대별·BMI별 흡연 영향 차이 검증", "Validated how smoking's effect differed by age group and BMI"),
          bi("상관관계 및 가설 검정 기반 인사이트 도출", "Drew insights from correlation analysis and hypothesis testing")
        ]
      },
      {
        title: "Key Takeaways",
        items: [
          bi("흡연은 대사 및 간 기능 지표에 유의미한 차이를 보였습니다.", "Smoking showed a statistically significant difference in metabolic and liver-function indicators."),
          bi("성별 데이터가 보강되면 추가 모델링으로 확장 가능성을 갖추었습니다.", "With richer gender data, this could extend into further modeling."),
          bi("데이터 탐색부터 통계 검정까지 분석 과정 전반을 학습했습니다.", "Learned the full analysis process, from data exploration through statistical testing.")
        ]
      }
    ],
    detail: {
      oneLine: bi(
        "건강검진 데이터를 기반으로 흡연 여부에 따른 주요 건강 지표 차이를 분석한 통계 기반 미니 프로젝트입니다.",
        "A statistics-driven mini project analyzing key health-indicator differences by smoking status from health-checkup data."
      ),
      nature: [bi("데이터 분석", "Data analysis"), bi("통계 검정", "Statistical testing"), bi("건강 인사이트 도출", "Health insight generation")],
      award: bi("미니 프로젝트 완성", "Completed mini project"),
      problem: bi(
        "흡연 여부가 건강검진 지표에 미치는 영향을 데이터 기반으로 확인하고, 흡연자와 비흡연자 간의 주요 차이를 시각화하여 실무 감각을 익히는 것이 목표였습니다.",
        "The goal was to confirm, with data, how smoking status affects health-checkup indicators, and to build practical analysis skill by visualizing the key differences between smokers and non-smokers."
      ),
      dataUnderstanding: bi(
        "건강검진 결과와 흡연 여부(label)가 포함된 데이터셋을 불러와 기본 정보, 변수 분포, 결측치 여부를 확인했습니다. BMI, 나이대 등의 파생변수를 추가해 그룹별 분석을 준비했습니다.",
        "Loaded a dataset of health-checkup results with a smoking-status label and checked its basic info, variable distributions, and missing values. Added derived features like BMI and age group to prepare for group-based analysis."
      ),
      preprocessing: bi(
        "BMI 구간과 나이대 변수를 생성하고, 결측값을 변수별 특성에 맞춰 중앙값, 최빈값, 그룹 평균으로 보간했습니다. 범주형 레이블을 확인하고 분석에 적합하도록 정리했습니다.",
        "Created BMI-bracket and age-group variables, and imputed missing values with the median, mode, or group mean depending on each variable's nature. Checked categorical labels and cleaned them up for analysis."
      ),
      featureEngineering: bi(
        "BMI 구간, 나이대 등의 파생변수를 추가해 건강 지표별 경향을 세부적으로 비교할 수 있도록 했습니다. 또한 연령대별 분석을 위해 주요 변수들의 분포를 그룹별로 시각화했습니다.",
        "Added derived features like BMI bracket and age group to compare trends across health indicators in finer detail, and visualized key variables' distributions by group for the age-based analysis."
      ),
      modelingStrategy: bi(
        "분류 모델 대신 통계적 분석과 시각화를 중심으로 흡연 여부 차이를 검증했습니다. 중성지방, 헤모글로빈, 고밀도지단백, 간 효소율 등 주요 지표를 박스플롯과 히스토그램으로 비교했습니다.",
        "Rather than a classification model, validated smoking-status differences mainly through statistical analysis and visualization, comparing key indicators — triglycerides, hemoglobin, HDL, liver enzymes — with box plots and histograms."
      ),
      validation: bi(
        "t-검정과 ANOVA를 활용해 흡연 여부, BMI 구간, 나이대 간의 차이를 검증했습니다. 특히 흡연 여부가 특정 지표에 유의한 영향을 미치는지를 p-value로 확인했습니다.",
        "Used t-tests and ANOVA to validate differences across smoking status, BMI bracket, and age group, checking via p-values whether smoking status significantly affected specific indicators."
      ),
      lessons: [
        bi(
          "탐색적 데이터 분석과 통계적 검증을 함께 수행해야 의미 있는 인사이트를 얻을 수 있습니다.",
          "Meaningful insight requires exploratory data analysis and statistical validation together, not either alone."
        ),
        bi(
          "연령대와 BMI를 함께 고려하면 흡연 영향의 세부 패턴을 더 정확히 파악할 수 있습니다.",
          "Considering age group and BMI together reveals finer patterns in smoking's effect."
        ),
        bi(
          "데이터 검토 단계에서 결측치와 변수 간 상관관계를 먼저 살펴보는 것이 분석 안정성에 중요합니다.",
          "Checking missing values and inter-variable correlation early, during data review, matters for analysis stability."
        )
      ],
      disclosure: bi(
        "데이터 분석 실습 중심으로 정리했으며, 데이터 보안 및 공개 제한으로 인해 전체 코드와 원본 데이터는 공개하지 않았습니다.",
        "Written up as a data-analysis exercise; the full code and raw data are not published due to data-security and disclosure restrictions."
      ),
      leakageNote: bi(
        "분석 단계에서는 통계적 검증과 시각화 기반 접근을 유지하며, 데이터 누수가 발생하지 않도록 그룹 변수 생성 시 원본 레코드를 혼동하지 않도록 주의했습니다.",
        "Kept the analysis grounded in statistical validation and visualization, and took care not to conflate original records when creating group variables, to avoid leakage."
      ),
      considerations: [
        bi("결측치 처리 전략", "Missing-value strategy"),
        bi("파생변수 생성", "Feature engineering"),
        bi("통계적 가설 검정", "Statistical hypothesis testing"),
        bi("그룹별 분포 비교", "Group distribution comparison"),
        bi("상관관계 분석", "Correlation analysis"),
        bi("시각화 기반 인사이트 도출", "Visualization-driven insight")
      ],
      techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "SciPy", "Statsmodels"],
      modelingFlow: [
        bi("데이터 로드", "Load data"),
        bi("기초 탐색", "Initial exploration"),
        bi("파생변수 생성", "Feature engineering"),
        bi("결측치 처리", "Handle missing values"),
        bi("EDA 시각화", "EDA visualization"),
        bi("통계 검정", "Statistical testing"),
        bi("상관관계 분석", "Correlation analysis"),
        bi("인사이트 정리", "Summarize insights")
      ],
      timeline: [
        {
          title: bi("데이터 로드 및 기본 확인", "Load data & initial check"),
          description: bi(
            "건강검진 데이터셋을 불러와 기본 정보와 변수 구조를 확인했습니다.",
            "Loaded the health-checkup dataset and checked its basic info and variable structure."
          )
        },
        {
          title: bi("파생변수 생성", "Feature engineering"),
          description: bi(
            "BMI 구간과 나이대를 추가하여 그룹별 분석 준비를 완료했습니다.",
            "Added BMI bracket and age group, completing preparation for group-based analysis."
          )
        },
        {
          title: bi("결측치 처리", "Handling missing values"),
          description: bi(
            "혈압, 시력, 중성 지방, 공복 혈당 등 변수별로 적합한 대체 전략을 적용했습니다.",
            "Applied an appropriate imputation strategy per variable — blood pressure, vision, triglycerides, fasting glucose, and more."
          )
        },
        {
          title: bi("EDA 및 시각화", "EDA & visualization"),
          description: bi(
            "흡연 여부에 따른 주요 지표의 분포를 박스플롯과 히스토그램으로 비교했습니다.",
            "Compared key indicators' distributions by smoking status using box plots and histograms."
          )
        },
        {
          title: bi("통계 검정", "Statistical testing"),
          description: bi(
            "t-검정과 ANOVA를 활용하여 흡연 여부와 그룹 변수 간의 유의미한 차이를 검증했습니다.",
            "Used t-tests and ANOVA to validate significant differences between smoking status and group variables."
          )
        },
        {
          title: bi("상관관계 분석", "Correlation analysis"),
          description: bi(
            "흡연 여부와 다른 건강 지표 간 상관관계를 확인해 주요 연관 변수를 도출했습니다.",
            "Checked correlations between smoking status and other health indicators to surface the key related variables."
          )
        },
        {
          title: bi("결과 정리", "Summarizing results"),
          description: bi(
            "분석 결과를 토대로 흡연과 건강 지표 간 관계를 정리하고 개선 가능성을 도출했습니다.",
            "Summarized the relationship between smoking and health indicators based on the analysis, and drew out possible improvements."
          )
        }
      ],
      performanceCards: [
        {
          title: "EDA",
          description: bi(
            "흡연 여부에 따른 변수 분포를 시각화하고 차이를 직관적으로 파악했습니다.",
            "Visualized variable distributions by smoking status to grasp the differences intuitively."
          )
        },
        {
          title: "Statistical Validation",
          description: bi(
            "t-검정과 ANOVA를 이용해 흡연 여부 영향의 통계적 유의성을 검증했습니다.",
            "Validated the statistical significance of smoking's effect using t-tests and ANOVA."
          )
        },
        {
          title: "Feature Engineering",
          description: bi(
            "BMI 구간과 나이대를 도입해 세부 그룹별 패턴을 분석했습니다.",
            "Introduced BMI bracket and age group to analyze patterns within finer subgroups."
          )
        },
        {
          title: "Insights",
          description: bi(
            "흡연이 중성지방, 헤모글로빈, 간 효소율에 미치는 영향을 중심으로 인사이트를 정리했습니다.",
            "Summarized insights centered on smoking's effect on triglycerides, hemoglobin, and liver enzymes."
          )
        }
      ],
      results: [
        bi("흡연자와 비흡연자의 주요 건강 지표 차이를 시각화하고 통계적으로 검증했습니다.", "Visualized and statistically validated key health-indicator differences between smokers and non-smokers."),
        bi("BMI 구간과 나이대별로 흡연 영향의 세부 패턴을 분석했습니다.", "Analyzed finer patterns in smoking's effect by BMI bracket and age group."),
        bi("데이터 탐색과 검증 과정을 통해 건강 차이 인사이트를 도출했습니다.", "Drew out health-difference insights through the data-exploration and validation process.")
      ]
    }
  },
  {
    slug: "ai-healthcare-team-project",
    title: bi("AI 헬스케어 팀 프로젝트", "AI Healthcare Team Project"),
    year: "2026",
    category: "Healthcare AI / Team Collaboration",
    description: bi(
      "AI 헬스케어 5기 과정에서 팀 단위로 문제를 정의하고 데이터 기반 해결 방향을 정리한 협업 프로젝트입니다.",
      "A team collaboration project from the AI Healthcare Cohort 5 course, framing a problem as a team and working out a data-driven approach to it."
    ),
    outcome: bi(
      "문제 정의, 분석 방향, 역할 분담, 발표 자료 구성까지 팀 프로젝트 흐름을 경험했습니다.",
      "Experienced the full team-project flow: problem framing, analysis direction, role division, and putting together the presentation."
    ),
    tags: ["Healthcare AI", "Team Project", "Problem Framing", "Presentation"]
  }
];

export const featuredProject = projects.find((project) => project.featured) ?? projects[0];
