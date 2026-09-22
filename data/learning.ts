import type { Bilingual, LearningLogLink, LearningNote } from "@/types/portfolio";

type LearningCategoryId =
  | "data-python"
  | "data-basic-math-statistics"
  | "data-healthcare-analysis-visualization"
  | "data-healthcare-database"
  | "ai-machine-learning"
  | "ai-medical-terms-disease"
  | "ai-deep-learning"
  | "web-docker-deploy"
  | "web-ai-model-serving"
  | "web-redis-worker"
  | "web-frontend-api";

type LearningCourseId = "data-analysis-course" | "ai-course" | "web-development-course";

type LearningLogSeed = Omit<LearningLogLink, "category" | "topic" | "summary" | "result" | "details"> & {
  category: LearningCategoryId;
  topic: Bilingual;
  summary?: Bilingual;
  result?: Bilingual;
  details?: Bilingual[];
};

const bi = (kr: string, en: string): Bilingual => ({ kr, en });

const learningCourseMeta: Record<LearningCourseId, { label: Bilingual; description: Bilingual }> = {
  "data-analysis-course": {
    label: bi("데이터 분석 코스", "Data Analysis Course"),
    description: bi(
      "Python, 기초수학과 통계, 헬스케어 데이터 분석·시각화, Database 분석 흐름을 정리했습니다.",
      "Covers Python, basic math and statistics, healthcare data analysis and visualization, and database-driven analysis."
    )
  },
  "ai-course": {
    label: bi("인공지능 코스", "AI Course"),
    description: bi(
      "머신러닝 기초·심화, 의학 용어와 질병 이해, 딥러닝 기초로 이어지는 학습 흐름입니다.",
      "A track running from machine learning basics and advanced topics through medical terminology and disease concepts to deep learning fundamentals."
    )
  },
  "web-development-course": {
    label: bi("웹 개발·AI 서빙 코스", "Web Development & AI Serving Course"),
    description: bi(
      "FastAPI, Docker, Redis, AI Worker, 프론트엔드 API 연결까지 모델을 제품 흐름으로 연결한 최근 학습입니다.",
      "Recent study connecting a model to a real product flow through FastAPI, Docker, Redis, an AI worker, and frontend API integration."
    )
  }
};

const learningCategoryMeta: Record<
  LearningCategoryId,
  { course: LearningCourseId; label: Bilingual; description: Bilingual }
> = {
  "data-python": {
    course: "data-analysis-course",
    label: bi("Python", "Python"),
    description: bi(
      "데이터 분석 코스의 시작점으로 Python 문법과 기본 코드 작성 흐름을 학습했습니다.",
      "The starting point of the data analysis course, covering Python syntax and the basics of writing code."
    )
  },
  "data-basic-math-statistics": {
    course: "data-analysis-course",
    label: bi("기초수학과 통계", "Basic Math & Statistics"),
    description: bi(
      "데이터 해석과 모델 평가에 필요한 기본 수학, 통계 개념을 정리했습니다.",
      "The basic math and statistics concepts needed to interpret data and evaluate models."
    )
  },
  "data-healthcare-analysis-visualization": {
    course: "data-analysis-course",
    label: bi(
      "Python을 활용한 헬스케어 데이터 분석 및 시각화",
      "Healthcare Data Analysis & Visualization with Python"
    ),
    description: bi(
      "Python으로 헬스케어 데이터를 다루고 분석 결과를 시각화하는 흐름을 학습했습니다.",
      "Learned how to work with healthcare data in Python and visualize analysis results."
    )
  },
  "data-healthcare-database": {
    course: "data-analysis-course",
    label: bi("Database를 활용한 헬스케어 데이터 분석", "Healthcare Data Analysis with Databases"),
    description: bi(
      "Database 기반으로 헬스케어 데이터를 조회, 집계, 분석하는 과정을 정리했습니다.",
      "Covers querying, aggregating, and analyzing healthcare data with a database."
    )
  },
  "ai-machine-learning": {
    course: "ai-course",
    label: bi("머신러닝 기초&심화", "Machine Learning: Basics & Advanced"),
    description: bi(
      "머신러닝 기초 학습 자료와 머신러닝 심화 학습 자료를 함께 묶었습니다.",
      "Combines the basic and advanced machine learning study materials."
    )
  },
  "ai-medical-terms-disease": {
    course: "ai-course",
    label: bi("의학 용어 기초와 질병의 이해", "Medical Terminology & Understanding Disease"),
    description: bi(
      "헬스케어 AI 프로젝트를 이해하기 위한 의학 용어와 질병 개념을 정리하는 영역입니다.",
      "Medical terms and disease concepts needed to understand healthcare AI projects."
    )
  },
  "ai-deep-learning": {
    course: "ai-course",
    label: bi("딥러닝 기초", "Deep Learning Basics"),
    description: bi(
      "신경망, 학습 과정, 손실 함수 등 딥러닝 기본 개념을 정리하는 영역입니다.",
      "Core deep learning concepts: neural networks, the training process, and loss functions."
    )
  },
  "web-docker-deploy": {
    course: "web-development-course",
    label: bi("Docker 기반 웹 서비스 배포", "Deploying Web Services with Docker"),
    description: bi(
      "FastAPI와 MySQL을 컨테이너로 분리하고, 환경변수·이미지 경량화·health check를 포함한 실행 환경을 학습했습니다.",
      "Split FastAPI and MySQL into separate containers and learned a runtime setup covering environment variables, lighter images, and health checks."
    )
  },
  "web-ai-model-serving": {
    course: "web-development-course",
    label: bi("FastAPI AI 모델 서빙", "Serving AI Models with FastAPI"),
    description: bi(
      "X-Ray 이미지를 입력받아 폐렴 예측 결과를 반환하는 API 명세, 인증, 권한, 오류 응답, 모델 추론 흐름을 정리했습니다.",
      "Covers the API spec, auth, permissions, error responses, and inference flow for an API that takes an X-ray image and returns a pneumonia prediction."
    )
  },
  "web-redis-worker": {
    course: "web-development-course",
    label: bi("Redis 기반 AI Worker 분리", "Separating an AI Worker with Redis"),
    description: bi(
      "FastAPI가 요청을 받고 Redis Queue와 Pub/Sub을 통해 AI Worker가 추론을 처리하는 비동기 구조를 학습했습니다.",
      "Learned an async structure where FastAPI accepts requests and an AI worker handles inference via a Redis queue and pub/sub."
    )
  },
  "web-frontend-api": {
    course: "web-development-course",
    label: bi("프론트엔드 API 연결", "Connecting the Frontend to the API"),
    description: bi(
      "로그인, 관리자, 환자 관리, 진료기록, X-Ray 업로드와 AI 예측 결과를 프론트 화면과 연결했습니다.",
      "Connected login, admin, patient management, medical records, X-ray upload, and AI prediction results to the frontend screens."
    )
  }
};

const learningCategoryOrder: LearningCategoryId[] = [
  "data-python",
  "data-basic-math-statistics",
  "data-healthcare-analysis-visualization",
  "data-healthcare-database",
  "ai-machine-learning",
  "ai-medical-terms-disease",
  "ai-deep-learning",
  "web-docker-deploy",
  "web-ai-model-serving",
  "web-redis-worker",
  "web-frontend-api"
];

// 기본 학습 링크 모음
const _learningLogLinks: LearningLogSeed[] = [
  {
    day: "1일차",
    topic: bi("Python 학습 자료 - 1일차", "Python Study Notes - Day 1"),
    href: "https://app.notion.com/p/1-336caf5650aa8133be17c0f8b097f21e?source=copy_link",
    category: "data-python"
  },
  {
    day: "2일차",
    topic: bi("Python 학습 자료 - 2일차", "Python Study Notes - Day 2"),
    href: "https://app.notion.com/p/2-336caf5650aa817aa8c7e14fc01e97eb?source=copy_link",
    category: "data-python"
  },
  {
    day: "3일차",
    topic: bi("Python 학습 자료 - 3일차", "Python Study Notes - Day 3"),
    href: "https://app.notion.com/p/3-336caf5650aa812486e4edeeb4f50101?source=copy_link",
    category: "data-python"
  },
  {
    day: "4일차",
    topic: bi("Python 학습 자료 - 4일차", "Python Study Notes - Day 4"),
    href: "https://app.notion.com/p/4-336caf5650aa81c4aaebfede494d3ebd?source=copy_link",
    category: "data-python"
  },
  {
    day: "5일차",
    topic: bi("Python 학습 자료 - 5일차", "Python Study Notes - Day 5"),
    href: "https://app.notion.com/p/5-336caf5650aa8109b935ce22279e2e33?source=copy_link",
    category: "data-python"
  },
  {
    day: "6일차",
    topic: bi("Python 학습 자료 - 6일차", "Python Study Notes - Day 6"),
    href: "https://app.notion.com/p/6-336caf5650aa81ff8c39ed1a23e275b0?source=copy_link",
    category: "data-python"
  },
  {
    day: "7일차",
    topic: bi("Python 학습 자료 - 7일차", "Python Study Notes - Day 7"),
    href: "https://app.notion.com/p/7-336caf5650aa8150afe1f116727429f8?source=copy_link",
    category: "data-python"
  },
  // Database를 활용한 헬스케어 데이터 분석
  {
    day: "8일차",
    topic: bi("데이터베이스 학습 자료 - 1일차", "Database Study Notes - Day 1"),
    href: "https://app.notion.com/p/1-348caf5650aa81288be2fc63ea825f0d?source=copy_link",
    category: "data-healthcare-database"
  },
  {
    day: "9일차",
    topic: bi("데이터베이스 학습 자료 - 2일차", "Database Study Notes - Day 2"),
    href: "https://app.notion.com/p/2-348caf5650aa81ccb99fddc6c281c999?source=copy_link",
    category: "data-healthcare-database"
  },
  {
    day: "10일차",
    topic: bi("데이터베이스 학습 자료 - 3일차", "Database Study Notes - Day 3"),
    href: "https://app.notion.com/p/3-348caf5650aa81a2bb18e3633e60350e?source=copy_link",
    category: "data-healthcare-database"
  },
  {
    day: "11일차",
    topic: bi("데이터베이스 학습 자료 - 4일차", "Database Study Notes - Day 4"),
    href: "https://app.notion.com/p/4-348caf5650aa81859476f0c93c253b8e?source=copy_link",
    category: "data-healthcare-database"
  },
  {
    day: "12일차",
    topic: bi("데이터베이스 학습 자료 - 5일차", "Database Study Notes - Day 5"),
    href: "https://app.notion.com/p/5-348caf5650aa81969196d2173bd2e5a3?source=copy_link",
    category: "data-healthcare-database"
  },
  // 머신러닝 기초 학습 자료
  {
    day: "13일차",
    topic: bi("머신러닝 기초 학습 자료 - 1일차", "Machine Learning Basics Study Notes - Day 1"),
    href: "https://app.notion.com/p/1-352caf5650aa81c7b903df4c9fdf80f0?source=copy_link",
    category: "ai-machine-learning"
  },
  {
    day: "14일차",
    topic: bi("머신러닝 기초 학습 자료 - 2일차", "Machine Learning Basics Study Notes - Day 2"),
    href: "https://app.notion.com/p/2-352caf5650aa8143b040f3220b93ec95?source=copy_link",
    category: "ai-machine-learning"
  },
  {
    day: "15일차",
    topic: bi("머신러닝 기초 학습 자료 - 3일차", "Machine Learning Basics Study Notes - Day 3"),
    href: "https://app.notion.com/p/3-352caf5650aa81bb8e46d4670f89c9a8?source=copy_link",
    category: "ai-machine-learning"
  },
  {
    day: "16일차",
    topic: bi("머신러닝 기초 학습 자료 - 4일차", "Machine Learning Basics Study Notes - Day 4"),
    href: "https://app.notion.com/p/4-352caf5650aa817ba35afbfc41579023?source=copy_link",
    category: "ai-machine-learning"
  },
  {
    day: "17일차",
    topic: bi("머신러닝 기초 학습 자료 - 5일차", "Machine Learning Basics Study Notes - Day 5"),
    href: "https://app.notion.com/p/5-352caf5650aa81bf9e17f467855e52a9?source=copy_link",
    category: "ai-machine-learning"
  },
  // 머신러닝 심화 학습 자료
  {
    day: "18일차",
    topic: bi("머신러닝 심화 학습 자료 - 1일차", "Advanced Machine Learning Study Notes - Day 1"),
    href: "https://app.notion.com/p/1-35dcaf5650aa81ca9a82cd00553f59f4?source=copy_link",
    category: "ai-machine-learning"
  },
  {
    day: "19일차",
    topic: bi("머신러닝 심화 학습 자료 - 2일차", "Advanced Machine Learning Study Notes - Day 2"),
    href: "https://app.notion.com/p/2-35dcaf5650aa81158cfdc2ec0b49311b?source=copy_link",
    category: "ai-machine-learning"
  },
  {
    day: "20일차",
    topic: bi("머신러닝 심화 학습 자료 - 3일차", "Advanced Machine Learning Study Notes - Day 3"),
    href: "https://app.notion.com/p/3-35dcaf5650aa81898d7cea2adf6d9a19?source=copy_link",
    category: "ai-machine-learning"
  },
  {
    day: "21일차",
    topic: bi("머신러닝 심화 학습 자료 - 4일차", "Advanced Machine Learning Study Notes - Day 4"),
    href: "https://app.notion.com/p/4-35dcaf5650aa819dab6ce0d765c3209e?source=copy_link",
    category: "ai-machine-learning"
  },
  {
    day: "22일차",
    topic: bi("머신러닝 심화 학습 자료 - 5일차", "Advanced Machine Learning Study Notes - Day 5"),
    href: "https://app.notion.com/p/5-35dcaf5650aa81dcb91cc31ce6c87da3?source=copy_link",
    category: "ai-machine-learning"
  },
  {
    day: "23일차",
    topic: bi("머신러닝 심화 학습 자료 - 6일차", "Advanced Machine Learning Study Notes - Day 6"),
    href: "https://app.notion.com/p/6-35dcaf5650aa8128b357f8210257a9b0?source=copy_link",
    category: "ai-machine-learning"
  },
  {
    day: "24일차",
    topic: bi("머신러닝 심화 학습 자료 - 7일차", "Advanced Machine Learning Study Notes - Day 7"),
    href: "https://app.notion.com/p/7-35dcaf5650aa81169011e43936023264?source=copy_link",
    category: "ai-machine-learning"
  },
  {
    day: "25일차",
    topic: bi("머신러닝 심화 학습 자료 - 8일차", "Advanced Machine Learning Study Notes - Day 8"),
    href: "https://app.notion.com/p/8-35dcaf5650aa813ebc1ff28bcf3ef3f0?source=copy_link",
    category: "ai-machine-learning"
  },
  // 의학 용어 기초와 질병의 이해
  {
    day: "26일차",
    topic: bi("의학 용어 기초와 질병의 이해 학습 자료 - 1일차", "Medical Terminology & Disease Study Notes - Day 1"),
    href: "https://app.notion.com/p/1-367caf5650aa80ca822efe496577995f?source=copy_link",
    category: "ai-medical-terms-disease"
  },
  {
    day: "27일차",
    topic: bi("의학 용어 기초와 질병의 이해 학습 자료 - 2일차", "Medical Terminology & Disease Study Notes - Day 2"),
    href: "https://app.notion.com/p/2-367caf5650aa80c7ae31f64fd8d3d458?source=copy_link",
    category: "ai-medical-terms-disease"
  },
  // 딥러닝 기초 학습 자료
  {
    day: "28일차",
    topic: bi("딥러닝 기초 학습 자료 - 1일차", "Deep Learning Basics Study Notes - Day 1"),
    href: "https://app.notion.com/p/1-373caf5650aa80c3b786d6c517157d44?source=copy_link",
    category: "ai-deep-learning"
  },
  {
    day: "29일차",
    topic: bi("딥러닝 기초 학습 자료 - 2일차", "Deep Learning Basics Study Notes - Day 2"),
    href: "https://app.notion.com/p/2-373caf5650aa804d8b89fe7b5e43dc79?source=copy_link",
    category: "ai-deep-learning"
  },
  {
    day: "30일차",
    topic: bi("딥러닝 기초 학습 자료 - 3일차", "Deep Learning Basics Study Notes - Day 3"),
    href: "https://app.notion.com/p/3-373caf5650aa80339321e124ec776a6e?source=copy_link",
    category: "ai-deep-learning"
  },
  {
    day: "31일차",
    topic: bi("딥러닝 기초 학습 자료 - 4일차", "Deep Learning Basics Study Notes - Day 4"),
    href: "https://app.notion.com/p/4-373caf5650aa80378248c379795fa7e4?source=copy_link",
    category: "ai-deep-learning"
  },
  {
    day: "32일차",
    topic: bi("딥러닝 기초 학습 자료 - 5일차", "Deep Learning Basics Study Notes - Day 5"),
    href: "https://app.notion.com/p/5-373caf5650aa80be9729c30a8b36b1d6?source=copy_link",
    category: "ai-deep-learning"
  },
  {
    day: "33일차",
    topic: bi("Docker로 FastAPI·MySQL 실행 환경 구성", "Setting Up FastAPI & MySQL with Docker"),
    href: "https://app.notion.com/p/369476b94060823e8c8d01d1369c3c60?source=copy_link",
    category: "web-docker-deploy",
    hideDay: true,
    summary: bi(
      "FastAPI와 MySQL을 각각 컨테이너로 분리하고 Dockerfile, docker-compose, health check, 환경변수 관리 흐름을 정리했습니다.",
      "Separated FastAPI and MySQL into their own containers and worked through a Dockerfile, docker-compose, health checks, and environment-variable management."
    ),
    result: bi(
      "로컬에서만 실행되는 코드가 아니라 팀원이 같은 방식으로 띄울 수 있는 실행 환경을 설계하는 관점을 배웠습니다.",
      "Learned to design a runtime environment teammates can spin up the same way, not just code that only runs on one machine."
    ),
    tags: ["Dockerfile", "Docker Compose", "MySQL", "Health Check"]
  },
  {
    day: "34일차",
    topic: bi("폐렴 예측 결과 조회 API 명세와 모델 처리 흐름", "API Spec and Model Flow for Pneumonia Prediction Results"),
    href: "https://app.notion.com/p/777476b940608231b8570133e1fa7457?source=copy_link",
    category: "web-ai-model-serving",
    hideDay: true,
    summary: bi(
      "진료기록 ID, JWT 인증, 의료인 권한, X-Ray 이미지 확인, 모델 추론, 예측 결과 저장, 오류 응답까지 API 흐름을 나눠 정리했습니다.",
      "Broke the API flow into stages: medical record ID, JWT auth, clinician permissions, X-ray image check, model inference, saving the prediction, and error responses."
    ),
    result: bi(
      "AI 모델을 단순 코드가 아니라 서비스에서 호출 가능한 API 계약으로 설명할 수 있게 됐습니다.",
      "Became able to describe the AI model as a callable API contract for the service, not just standalone code."
    ),
    tags: ["FastAPI", "JWT", "X-Ray", "Model Serving"]
  },
  {
    day: "35일차",
    topic: bi("Redis Queue·Pub/Sub 기반 AI Worker 분리", "Separating an AI Worker with Redis Queue & Pub/Sub"),
    href: "https://app.notion.com/p/31f476b9406083a2944f01776f7708ca?source=copy_link",
    category: "web-redis-worker",
    hideDay: true,
    summary: bi(
      "FastAPI가 요청을 받고 Redis Task Queue에 작업을 등록한 뒤, AI Worker가 추론하고 Pub/Sub으로 결과를 돌려주는 비동기 구조를 학습했습니다.",
      "Learned an async structure where FastAPI accepts a request, queues it on Redis, an AI worker runs inference, and the result comes back over pub/sub."
    ),
    result: bi(
      "무거운 AI 추론을 API 서버에서 분리해 응답성, 확장성, 중복 예측 방지를 고려하는 구조를 이해했습니다.",
      "Understood how separating heavy AI inference from the API server supports responsiveness, scalability, and duplicate-prediction prevention."
    ),
    tags: ["Redis Queue", "Pub/Sub", "AI Worker", "Async"]
  },
  {
    day: "36일차",
    topic: bi("프론트엔드 API 연결과 X-Ray 폐렴 예측 시연", "Connecting the Frontend API and Demoing X-Ray Pneumonia Prediction"),
    href: "https://app.notion.com/p/b15476b9406082a8a1dc01bf5010ef52?source=copy_link",
    category: "web-frontend-api",
    hideDay: true,
    summary: bi(
      "로그인, 관리자, 환자 관리, 진료기록, X-Ray 업로드, 폐렴 예측 결과를 프론트엔드 화면과 연결하고 필드명 차이를 맞췄습니다.",
      "Connected login, admin, patient management, medical records, X-ray upload, and pneumonia prediction results to the frontend screens, and reconciled field-name mismatches."
    ),
    result: bi(
      "백엔드 API 응답 구조와 사용자 화면을 함께 맞추는 통합 개발 흐름을 경험했습니다.",
      "Experienced an integrated development flow that aligns the backend API response shape with the user-facing screens."
    ),
    tags: ["Frontend API", "Integration", "X-Ray Upload", "22 Tests"]
  }
];

// href 기준으로 중복 제거(후입력 중복을 방지), 원래 순서 유지
export const learningLogLinks: LearningLogLink[] = Array.from(
  new Map(_learningLogLinks.map((l) => [l.href, l])).values()
);

const pythonDetails = [
  {
    summary: bi(
      "Python 실행 환경과 기본 문법을 익히며 데이터를 다루기 위한 코드 작성의 출발점을 만들었습니다.",
      "Learned the Python runtime and basic syntax as a starting point for writing code to work with data."
    ),
    details: [bi("변수와 자료형", "Variables & Types"), bi("print/input 흐름", "print/input Flow"), bi("문자열과 숫자 처리", "String & Number Handling"), bi("기본 연산자", "Basic Operators")],
    tags: ["Python", "Syntax", "Variables"]
  },
  {
    summary: bi(
      "조건에 따라 다른 코드를 실행하는 흐름을 학습하며 데이터 분기 처리의 기초를 익혔습니다.",
      "Learned to branch execution based on conditions, the basis for handling data branches."
    ),
    details: [bi("if/elif/else", "if/elif/else"), bi("비교 연산", "Comparison Operators"), bi("논리 연산", "Logical Operators"), bi("조건별 출력", "Conditional Output")],
    tags: ["Condition", "Logic", "Control Flow"]
  },
  {
    summary: bi(
      "반복문을 통해 여러 데이터를 순서대로 처리하는 방법을 학습했습니다.",
      "Learned to process multiple data items in order using loops."
    ),
    details: [bi("for 반복문", "for Loop"), bi("while 반복문", "while Loop"), bi("range", "range"), bi("break/continue", "break/continue")],
    tags: ["Loop", "Iteration", "Automation"]
  },
  {
    summary: bi(
      "리스트와 딕셔너리처럼 여러 값을 담는 자료구조를 학습했습니다.",
      "Learned data structures that hold multiple values, such as lists and dictionaries."
    ),
    details: [bi("list", "list"), bi("dict", "dict"), bi("indexing", "Indexing"), bi("데이터 추가/삭제/조회", "Adding/Removing/Reading Data")],
    tags: ["List", "Dict", "Data Structure"]
  },
  {
    summary: bi(
      "반복되는 코드를 함수로 나누고 재사용하는 방법을 익혔습니다.",
      "Learned to split repeated code into functions and reuse it."
    ),
    details: [bi("함수 정의", "Defining Functions"), bi("매개변수", "Parameters"), bi("return", "return"), bi("코드 재사용", "Code Reuse")],
    tags: ["Function", "Reusable Code", "Return"]
  },
  {
    summary: bi(
      "파일과 예외 처리를 다루며 실제 데이터 파일을 읽고 오류 상황을 처리하는 기초를 학습했습니다.",
      "Worked with files and exception handling: the basics of reading a real data file and handling error cases."
    ),
    details: [bi("파일 읽기/쓰기", "Reading/Writing Files"), bi("try/except", "try/except"), bi("오류 메시지 확인", "Checking Error Messages"), bi("실행 흐름 점검", "Reviewing Execution Flow")],
    tags: ["File IO", "Exception", "Debugging"]
  },
  {
    summary: bi(
      "Python 기초 문법을 데이터 분석에 연결하기 위해 간단한 문제 풀이와 코드 정리를 반복했습니다.",
      "Repeated small problem-solving exercises and code clean-up to connect basic Python syntax to data analysis."
    ),
    details: [bi("문법 종합 연습", "Syntax Review"), bi("작은 문제 해결", "Small Problem Solving"), bi("코드 구조 정리", "Organizing Code Structure"), bi("데이터 분석 준비", "Preparing for Data Analysis")],
    tags: ["Practice", "Problem Solving", "Python Basics"]
  }
];

const databaseDetails = [
  {
    summary: bi(
      "데이터베이스의 역할과 테이블 구조를 이해하고 SQL 조회의 기초를 학습했습니다.",
      "Understood the role of a database and table structure, and learned the basics of SQL queries."
    ),
    details: [bi("DB와 테이블", "DB & Tables"), bi("SELECT", "SELECT"), bi("WHERE", "WHERE"), bi("기본 조회", "Basic Queries")],
    tags: ["Database", "SQL", "SELECT"]
  },
  {
    summary: bi(
      "조건, 정렬, 집계를 이용해 필요한 데이터를 뽑아내는 방법을 익혔습니다.",
      "Learned to pull out the data you need using conditions, sorting, and aggregation."
    ),
    details: [bi("ORDER BY", "ORDER BY"), bi("GROUP BY", "GROUP BY"), bi("집계 함수", "Aggregate Functions"), bi("조건 필터링", "Conditional Filtering")],
    tags: ["Aggregation", "Filtering", "Group By"]
  },
  {
    summary: bi(
      "여러 테이블을 연결해 분석에 필요한 정보를 구성하는 방법을 학습했습니다.",
      "Learned to join multiple tables to assemble the information needed for analysis."
    ),
    details: [bi("JOIN", "JOIN"), bi("관계형 데이터", "Relational Data"), bi("키 컬럼", "Key Columns"), bi("테이블 연결", "Joining Tables")],
    tags: ["Join", "Relational DB", "Keys"]
  },
  {
    summary: bi(
      "서브쿼리와 집계 결과를 활용해 복잡한 분석 질문을 SQL로 풀어보았습니다.",
      "Used subqueries and aggregate results to answer more complex analysis questions in SQL."
    ),
    details: [bi("Subquery", "Subquery"), bi("집계 결과 활용", "Using Aggregate Results"), bi("조건별 분석", "Conditional Analysis"), bi("쿼리 구조화", "Structuring Queries")],
    tags: ["Subquery", "Analysis Query", "SQL"]
  },
  {
    summary: bi(
      "헬스케어 데이터 관점에서 SQL 조회 결과를 분석 흐름과 연결했습니다.",
      "Connected SQL query results to an analysis flow from a healthcare-data perspective."
    ),
    details: [bi("헬스케어 데이터 조회", "Querying Healthcare Data"), bi("분석 기준 설정", "Setting Analysis Criteria"), bi("결과 해석", "Interpreting Results"), bi("데이터 품질 확인", "Checking Data Quality")],
    tags: ["Healthcare DB", "Data Quality", "Insight"]
  }
];

const machineLearningDetails = [
  {
    summary: bi(
      "머신러닝이 규칙을 직접 쓰는 방식이 아니라 데이터에서 패턴을 학습하는 방식임을 이해했습니다.",
      "Understood that machine learning learns patterns from data rather than following hand-written rules."
    ),
    details: [bi("지도학습/비지도학습", "Supervised/Unsupervised Learning"), bi("특징과 타깃", "Features & Target"), bi("학습 데이터", "Training Data"), bi("예측 흐름", "Prediction Flow")],
    tags: ["ML Basics", "Feature", "Target"]
  },
  {
    summary: bi(
      "학습 데이터와 평가 데이터를 나누고 모델 성능을 확인하는 기본 흐름을 익혔습니다.",
      "Learned the basic flow of splitting training and evaluation data and checking model performance."
    ),
    details: [bi("train/test split", "train/test Split"), bi("평가 데이터", "Evaluation Data"), bi("과적합", "Overfitting"), bi("일반화", "Generalization")],
    tags: ["Train Test", "Evaluation", "Generalization"]
  },
  {
    summary: bi(
      "분류 모델의 성능을 정확도만이 아니라 여러 지표로 판단하는 방법을 학습했습니다.",
      "Learned to judge a classifier's performance with several metrics, not accuracy alone."
    ),
    details: [bi("Accuracy", "Accuracy"), bi("Precision", "Precision"), bi("Recall", "Recall"), bi("F1-score", "F1 Score")],
    tags: ["Classification", "Metrics", "F1"]
  },
  {
    summary: bi(
      "전처리와 피처 스케일링이 모델 입력에 어떤 영향을 주는지 확인했습니다.",
      "Checked how preprocessing and feature scaling affect what a model receives as input."
    ),
    details: [bi("결측치 처리", "Handling Missing Values"), bi("인코딩", "Encoding"), bi("스케일링", "Scaling"), bi("파이프라인", "Pipeline")],
    tags: ["Preprocessing", "Encoding", "Scaling"]
  },
  {
    summary: bi(
      "기준 모델을 만들고 다른 모델과 비교하는 실험 흐름을 학습했습니다.",
      "Learned an experiment flow: build a baseline model, then compare other models against it."
    ),
    details: [bi("Baseline", "Baseline"), bi("모델 비교", "Model Comparison"), bi("검증 점수", "Validation Score"), bi("실험 기록", "Experiment Log")],
    tags: ["Baseline", "Experiment", "Model Compare"]
  },
  {
    summary: bi(
      "트리 기반 모델과 앙상블 모델을 활용해 표 형태 데이터에 맞는 모델링 전략을 익혔습니다.",
      "Learned a modeling strategy suited to tabular data using tree-based and ensemble models."
    ),
    details: [bi("Decision Tree", "Decision Tree"), bi("Random Forest", "Random Forest"), bi("Gradient Boosting", "Gradient Boosting"), bi("앙상블", "Ensemble")],
    tags: ["Tree Model", "Ensemble", "Boosting"]
  },
  {
    summary: bi(
      "CatBoost, LightGBM 등 실전 모델을 비교하며 성능과 안정성을 함께 확인했습니다.",
      "Compared practical models like CatBoost and LightGBM, checking both performance and stability."
    ),
    details: [bi("CatBoost", "CatBoost"), bi("LightGBM", "LightGBM"), bi("하이퍼파라미터", "Hyperparameters"), bi("검증 점수 비교", "Comparing Validation Scores")],
    tags: ["CatBoost", "LightGBM", "Tuning"]
  },
  {
    summary: bi(
      "OOF 검증과 리더보드 점수 차이를 보며 데이터 누수와 일반화 가능성을 점검했습니다.",
      "Checked for data leakage and generalization by comparing OOF validation to leaderboard scores."
    ),
    details: [bi("OOF", "OOF"), bi("Cross Validation", "Cross Validation"), bi("Leaderboard", "Leaderboard"), bi("Leakage Check", "Leakage Check")],
    tags: ["OOF", "CV", "Leakage"]
  },
  {
    summary: bi(
      "여러 모델의 예측을 섞는 스태킹과 블렌딩을 실험하며 최종 제출 전략을 정리했습니다.",
      "Experimented with stacking and blending multiple models' predictions to settle on a final submission strategy."
    ),
    details: [bi("Stacking", "Stacking"), bi("Blending", "Blending"), bi("제출 전략", "Submission Strategy"), bi("성능 안정화", "Stabilizing Performance")],
    tags: ["Stacking", "Blending", "Submission"]
  },
  {
    summary: bi(
      "실험 결과를 해석하고 다음 실험으로 이어가는 모델링 기록 방식을 학습했습니다.",
      "Learned how to record modeling work: interpreting results and carrying them into the next experiment."
    ),
    details: [bi("실험 로그", "Experiment Log"), bi("오류 분석", "Error Analysis"), bi("모델 선택", "Model Selection"), bi("회고 정리", "Retrospective")],
    tags: ["Experiment Log", "Model Selection", "Review"]
  },
  {
    summary: bi(
      "해커톤형 문제에서 시간 안에 기준 모델, 개선 실험, 최종 제출을 관리하는 흐름을 익혔습니다.",
      "Learned to manage a baseline, improvement experiments, and a final submission within a hackathon's time limit."
    ),
    details: [bi("해커톤 전략", "Hackathon Strategy"), bi("우선순위", "Prioritization"), bi("검증 안정성", "Validation Stability"), bi("최종 결과 정리", "Wrapping Up Results")],
    tags: ["Hackathon", "Priority", "Result"]
  },
  {
    summary: bi(
      "머신러닝 심화 내용을 실제 난임 예측 프로젝트의 모델 비교와 검증 전략으로 연결했습니다.",
      "Connected advanced machine learning topics to the model comparison and validation strategy of the actual infertility-prediction project."
    ),
    details: [bi("프로젝트 적용", "Applying to a Project"), bi("모델 비교", "Model Comparison"), bi("검증 설계", "Validation Design"), bi("포트폴리오 정리", "Portfolio Write-up")],
    tags: ["Project Apply", "Validation", "Portfolio"]
  },
  {
    summary: bi(
      "모델링 과정에서 단순 점수보다 문제 정의, 데이터 이해, 검증 근거가 중요하다는 점을 정리했습니다.",
      "Concluded that problem framing, understanding the data, and validation evidence matter more than the raw score alone."
    ),
    details: [bi("문제 정의", "Problem Framing"), bi("데이터 이해", "Data Understanding"), bi("모델 근거", "Model Rationale"), bi("면접 설명 포인트", "Interview Talking Points")],
    tags: ["Problem Framing", "Evidence", "Interview"]
  }
];

const medicalDetails = [
  {
    summary: bi(
      "헬스케어 AI 프로젝트를 이해하기 위해 기본 의학 용어와 질병 표현을 학습했습니다.",
      "Learned basic medical terms and disease vocabulary needed to understand healthcare AI projects."
    ),
    details: [bi("기초 의학 용어", "Basic Medical Terms"), bi("증상과 진단", "Symptoms & Diagnosis"), bi("질병명 이해", "Understanding Disease Names"), bi("의료 데이터 문맥", "Medical Data Context")],
    tags: ["Medical Terms", "Disease", "Healthcare"]
  },
  {
    summary: bi(
      "폐렴, X-Ray 등 의료 이미지 기반 AI 프로젝트에서 필요한 질병 이해와 설명 방식을 정리했습니다.",
      "Covered the disease understanding and explanation style needed for medical-imaging AI projects like pneumonia and X-rays."
    ),
    details: [bi("폐렴 개념", "Pneumonia Basics"), bi("X-Ray 문맥", "X-Ray Context"), bi("의료 예측 결과", "Medical Prediction Results"), bi("주의 문구", "Disclaimer Language")],
    tags: ["Pneumonia", "X-Ray", "Medical AI"]
  }
];

const deepLearningDetails = [
  {
    summary: bi(
      "신경망이 입력, 가중치, 활성화 함수를 통해 예측값을 만드는 기본 구조를 학습했습니다.",
      "Learned the basic structure of a neural network turning input, weights, and an activation function into a prediction."
    ),
    details: [bi("Neuron", "Neuron"), bi("Weight", "Weight"), bi("Activation", "Activation"), bi("Forward", "Forward Pass")],
    tags: ["Neural Network", "Activation", "Forward"]
  },
  {
    summary: bi(
      "손실 함수와 역전파를 통해 모델이 오차를 줄여가는 과정을 이해했습니다.",
      "Understood how a model reduces error through a loss function and backpropagation."
    ),
    details: [bi("Loss Function", "Loss Function"), bi("Backpropagation", "Backpropagation"), bi("Gradient", "Gradient"), bi("Optimizer", "Optimizer")],
    tags: ["Loss", "Backprop", "Optimizer"]
  },
  {
    summary: bi(
      "이미지 데이터를 다루는 CNN의 기본 구조와 합성곱, 풀링 개념을 학습했습니다.",
      "Learned the basic structure of a CNN for image data, along with convolution and pooling."
    ),
    details: [bi("CNN", "CNN"), bi("Convolution", "Convolution"), bi("Pooling", "Pooling"), bi("Image Feature", "Image Feature")],
    tags: ["CNN", "Computer Vision", "Pooling"]
  },
  {
    summary: bi(
      "학습률, 배치 크기, 에폭처럼 딥러닝 학습 과정에 영향을 주는 요소를 정리했습니다.",
      "Covered factors that shape deep-learning training, such as learning rate, batch size, and epochs."
    ),
    details: [bi("Learning Rate", "Learning Rate"), bi("Batch Size", "Batch Size"), bi("Epoch", "Epoch"), bi("Overfitting", "Overfitting")],
    tags: ["Training", "Hyperparameter", "Overfitting"]
  },
  {
    summary: bi(
      "PyTorch 기반 추론 흐름과 모델 저장 방식이 실제 AI 서빙과 어떻게 연결되는지 학습했습니다.",
      "Learned how a PyTorch inference flow and model-saving approach connect to real AI serving."
    ),
    details: [bi("PyTorch", "PyTorch"), bi("model.eval()", "model.eval()"), bi("torch.no_grad()", "torch.no_grad()"), bi("model.pth", "model.pth")],
    tags: ["PyTorch", "Inference", "Model File"]
  }
];

const healthcareVisualizationDetails = [
  {
    summary: bi(
      "Python으로 헬스케어 데이터를 불러오고 기본 통계를 확인하는 분석 흐름을 학습했습니다.",
      "Learned an analysis flow for loading healthcare data in Python and checking basic statistics."
    ),
    details: [bi("Pandas", "Pandas"), bi("기초 통계", "Basic Statistics"), bi("결측치 확인", "Checking Missing Values"), bi("분포 확인", "Checking Distributions")],
    tags: ["Pandas", "EDA", "Healthcare"]
  }
];

const mathStatisticsDetails = [
  {
    summary: bi(
      "데이터를 해석하기 위한 평균, 분산, 표준편차, 확률, 가설 검정의 기본 개념을 학습했습니다.",
      "Learned the basics of mean, variance, standard deviation, probability, and hypothesis testing for interpreting data."
    ),
    details: [bi("평균/분산", "Mean/Variance"), bi("확률", "Probability"), bi("상관관계", "Correlation"), bi("가설 검정", "Hypothesis Testing")],
    tags: ["Statistics", "Probability", "Hypothesis"]
  }
];

function getGeneratedLearningDetail(entry: LearningLogLink, index: number) {
  if (entry.summary || entry.details?.length) return entry;

  const category = entry.category as LearningCategoryId;
  const detailMap: Partial<Record<LearningCategoryId, typeof pythonDetails>> = {
    "data-python": pythonDetails,
    "data-healthcare-database": databaseDetails,
    "ai-machine-learning": machineLearningDetails,
    "ai-medical-terms-disease": medicalDetails,
    "ai-deep-learning": deepLearningDetails,
    "data-healthcare-analysis-visualization": healthcareVisualizationDetails,
    "data-basic-math-statistics": mathStatisticsDetails
  };
  const detail = detailMap[category]?.[index];

  if (!detail) return entry;
  return {
    ...entry,
    ...detail
  };
}

// 학습 로그를 카테고리별로 분류
const categoryMap = new Map<LearningCategoryId, LearningLogLink[]>();
learningLogLinks.forEach((entry) => {
  const category = entry.category as LearningCategoryId;
  if (!categoryMap.has(category)) categoryMap.set(category, []);
  categoryMap.get(category)!.push({
    ...entry,
    originalDay: entry.day
  });
});

// 카테고리별로 day를 1일차,2일차 순으로 재번호매김 (카테고리 내 순서 유지)
export const learningLogCategories = learningCategoryOrder
  .map((category) => {
    const meta = learningCategoryMeta[category];
    const links = categoryMap.get(category) ?? [];

    return {
      course: meta.course,
      courseLabel: learningCourseMeta[meta.course].label,
      courseDescription: learningCourseMeta[meta.course].description,
      courseSubjects: learningCategoryOrder
        .filter((id) => learningCategoryMeta[id].course === meta.course)
        .map((id) => learningCategoryMeta[id].label),
      category: meta.label,
      description: meta.description,
      links: links.map((l, idx) => getGeneratedLearningDetail({ ...l, day: l.hideDay ? "" : `${idx + 1}일차` }, idx))
    };
  })
  .filter((category) => category.links.length > 0);

export const learningNotes: LearningNote[] = [
  {
    title: bi("데이터를 먼저 이해하는 법", "Understanding the Data First"),
    source: bi("AI 헬스케어 5기 학습 기록", "AI Healthcare Cohort 5 Study Log"),
    summary: bi(
      "모델을 바로 만들기보다 데이터가 어떤 상황에서 만들어졌는지, 어떤 값이 비어 있는지, 예측 시점에 쓸 수 있는 정보인지부터 확인했습니다.",
      "Rather than jumping straight to modeling, first checked how the data was generated, what values were missing, and what information would actually be available at prediction time."
    ),
    portfolioValue: bi(
      "헬스케어 데이터처럼 변수 의미가 중요한 프로젝트에서는 문제 정의와 EDA를 먼저 잡아야 한다는 기준이 생겼습니다.",
      "Came away with a rule of thumb: on a project like healthcare data, where what each variable means really matters, lock down the problem definition and EDA first."
    ),
    tags: ["EDA", "Data Understanding", "Healthcare Data"]
  },
  {
    title: bi("전처리는 모델 성능보다 먼저 지켜야 할 기준", "Preprocessing Is a Baseline, Not Just a Performance Lever"),
    source: bi("AI 헬스케어 5기 학습 기록", "AI Healthcare Cohort 5 Study Log"),
    summary: bi(
      "결측치, 범주형 변수, 수치형 변수를 각각 같은 방식으로 밀어붙이지 않고 변수의 의미와 모델 입력 조건에 맞게 정리했습니다.",
      "Handled missing values, categorical variables, and numeric variables differently instead of applying one blanket method, matching each to what the variable means and what the model needs as input."
    ),
    portfolioValue: bi(
      "데이터를 깨끗하게 만드는 일을 단순 작업이 아니라 모델 신뢰도를 만드는 과정으로 설명할 수 있습니다.",
      "Can describe cleaning the data not as a chore, but as a step that builds a model's trustworthiness."
    ),
    tags: ["Preprocessing", "Missing Values", "Categorical Features"]
  },
  {
    title: bi("검증은 점수를 믿어도 되는지 확인하는 과정", "Validation Is About Whether You Can Trust the Score"),
    source: bi("AI 헬스케어 5기 학습 기록", "AI Healthcare Cohort 5 Study Log"),
    summary: bi(
      "학습 데이터 안에서만 좋은 점수가 나오는지, 실제 제출이나 새로운 데이터에서도 안정적인지 확인하기 위해 교차검증과 OOF 결과를 함께 봤습니다.",
      "Looked at cross-validation and OOF results together to check whether a good score held only within the training data, or stayed stable on submission and new data too."
    ),
    portfolioValue: bi(
      "점수만 보는 게 아니라 일반화 가능성과 데이터 누수 위험도 같이 확인해야 한다는 걸 배웠습니다.",
      "Learned to check generalization and leakage risk alongside the score, not the score alone."
    ),
    tags: ["Cross Validation", "OOF", "Leakage Check"]
  },
  {
    title: bi("트리 기반 모델을 비교하며 기준 모델 만들기", "Building a Baseline by Comparing Tree-Based Models"),
    source: bi("AI 헬스케어 5기 학습 기록", "AI Healthcare Cohort 5 Study Log"),
    summary: bi(
      "CatBoost와 LightGBM처럼 표 형태 데이터에 강한 모델을 비교하면서, 어떤 모델이 데이터 구조에 더 잘 맞는지 실험했습니다.",
      "Compared models that are strong on tabular data, such as CatBoost and LightGBM, to see which fit the data's structure better."
    ),
    portfolioValue: bi(
      "모델 이름을 나열하는 대신 기준 성능을 세우고 비교 실험을 진행한 흐름을 설명합니다.",
      "Can explain the process of setting a baseline and running comparison experiments, rather than just listing model names."
    ),
    tags: ["CatBoost", "LightGBM", "Tabular ML"]
  },
  {
    title: bi("앙상블은 여러 모델을 섞는 일이 아니라 안정성을 고르는 일", "Ensembling Is About Choosing Stability, Not Just Mixing Models"),
    source: bi("AI 헬스케어 5기 학습 기록", "AI Healthcare Cohort 5 Study Log"),
    summary: bi(
      "성능이 다른 모델들을 단순히 많이 합치기보다, 검증 결과와 제출 결과의 차이를 보며 더 안정적인 조합을 선택했습니다.",
      "Rather than just combining as many models as possible, chose the more stable combination by watching the gap between validation and submission results."
    ),
    portfolioValue: bi(
      "리더보드 점수만 따라가기보다 실험 기록을 보고 최종 선택을 조정해야 한다는 걸 배웠습니다.",
      "Learned to adjust the final choice based on experiment records, rather than chasing the leaderboard score alone."
    ),
    tags: ["Ensemble", "Blending", "Model Selection"]
  },
  {
    title: bi("딥러닝은 다음 확장 영역으로 정리", "Marking Deep Learning as the Next Area to Grow Into"),
    source: bi("AI 헬스케어 5기 학습 기록", "AI Healthcare Cohort 5 Study Log"),
    summary: bi(
      "머신러닝 기반 분류 모델 경험을 바탕으로 신경망, 학습 과정, 손실 함수와 평가 지표를 이해하는 방향으로 확장하고 있습니다.",
      "Building on classification-model experience with machine learning, now extending into neural networks, the training process, loss functions, and evaluation metrics."
    ),
    portfolioValue: bi(
      "현재 강점은 표 데이터 모델링에 두고, 다음 성장 방향을 딥러닝 학습으로 자연스럽게 연결합니다.",
      "Places current strength in tabular modeling while naturally pointing the next growth area toward deep learning."
    ),
    tags: ["Deep Learning", "Neural Networks", "Model Training"]
  },
  {
    title: bi("모델을 API로 연결하는 흐름", "Connecting a Model to an API"),
    source: bi("AI 헬스케어 5기 웹 개발 트랙", "AI Healthcare Cohort 5 Web Development Track"),
    summary: bi(
      "폐렴 예측 모델을 단순 코드 실행으로 끝내지 않고, 진료기록 ID, 인증 토큰, 의료인 권한, X-Ray 이미지 확인, 예측 결과 저장까지 API 흐름으로 나눠 정리했습니다.",
      "Instead of leaving the pneumonia model as a script, broke it into an API flow covering the medical record ID, auth token, clinician permissions, X-ray image check, and saving the prediction."
    ),
    portfolioValue: bi(
      "AI 모델 결과가 실제 서비스 화면과 데이터베이스에 어떻게 연결되는지 설명할 수 있습니다.",
      "Can explain how an AI model's output connects to the actual service screens and database."
    ),
    tags: ["FastAPI", "Model Serving", "API Contract"]
  },
  {
    title: bi("Docker로 실행 환경을 분리", "Separating the Runtime Environment with Docker"),
    source: bi("AI 헬스케어 5기 웹 개발 트랙", "AI Healthcare Cohort 5 Web Development Track"),
    summary: bi(
      "FastAPI와 MySQL을 각각 컨테이너로 실행하고, Dockerfile, docker-compose, health check, 환경변수 관리까지 배포 전 실행 조건을 맞췄습니다.",
      "Ran FastAPI and MySQL in separate containers and lined up the pre-deployment runtime conditions: Dockerfile, docker-compose, health checks, and environment-variable management."
    ),
    portfolioValue: bi(
      "내 컴퓨터에서만 되는 코드가 아니라, 팀원이 같은 방식으로 실행할 수 있는 환경을 고민한 경험입니다.",
      "An experience of designing an environment a teammate can run the same way, not code that only works on one machine."
    ),
    tags: ["Docker", "Docker Compose", "Environment"]
  },
  {
    title: bi("AI 추론을 Worker로 분리", "Splitting AI Inference into a Worker"),
    source: bi("AI 헬스케어 5기 웹 개발 트랙", "AI Healthcare Cohort 5 Web Development Track"),
    summary: bi(
      "FastAPI가 무거운 AI 추론을 직접 처리하지 않도록 Redis Queue에 작업을 넣고, AI Worker가 예측 후 Pub/Sub으로 결과를 돌려주는 구조를 학습했습니다.",
      "Learned a structure where FastAPI queues the job on Redis instead of running heavy AI inference itself, and an AI worker predicts and returns the result over pub/sub."
    ),
    portfolioValue: bi(
      "느린 AI 작업을 API 서버와 분리해 응답성, 확장성, 중복 예측 방지를 고려한 구조로 설명할 수 있습니다.",
      "Can describe a structure that separates slow AI work from the API server with responsiveness, scalability, and duplicate-prediction prevention in mind."
    ),
    tags: ["Redis", "AI Worker", "Async Processing"]
  },
  {
    title: bi("프론트엔드와 API를 맞추는 과정", "Aligning the Frontend with the API"),
    source: bi("AI 헬스케어 5기 웹 개발 트랙", "AI Healthcare Cohort 5 Web Development Track"),
    summary: bi(
      "회원, 관리자, 환자, 진료기록, X-Ray 업로드, 폐렴 예측 기능을 프론트엔드와 연결하며 필드명과 엔드포인트를 맞추는 중요성을 확인했습니다.",
      "Connected member, admin, patient, medical-record, X-ray upload, and pneumonia-prediction features to the frontend, confirming how much it matters to align field names and endpoints."
    ),
    portfolioValue: bi(
      "화면만 따로 보는 게 아니라 백엔드 응답 구조와 사용자 흐름을 같이 맞춰야 한다는 걸 알게 됐습니다.",
      "Realized the screen can't be built in isolation — the backend response shape and the user flow have to be matched together."
    ),
    tags: ["Frontend API", "Integration", "Test Check"]
  },
  {
    title: bi("프로젝트를 설명 가능한 기록으로 남기기", "Keeping a Project as an Explainable Record"),
    source: bi("AI 헬스케어 5기 학습 기록", "AI Healthcare Cohort 5 Study Log"),
    summary: bi(
      "무엇을 시도했는지보다 왜 그렇게 판단했는지, 어떤 결과를 보고 다음 실험을 정했는지 정리하는 방식을 연습했습니다.",
      "Practiced recording not just what was tried, but why that judgment call was made and what result led to the next experiment."
    ),
    portfolioValue: bi(
      "코드를 전부 공개하지 않아도 문제 정의, 실험 흐름, 검증 방식, 배운 점은 충분히 정리할 수 있다고 느꼈습니다.",
      "Found that the problem definition, experiment flow, validation approach, and lessons learned can be documented well even without publishing all the code."
    ),
    tags: ["Documentation", "Experiment Notes", "Case Study"]
  }
];
