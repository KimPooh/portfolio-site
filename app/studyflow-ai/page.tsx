"use client";

import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  FileText,
  FolderKanban,
  MessageCircleQuestion,
  NotebookPen,
  Save,
  Sparkles
} from "lucide-react";
import { useMemo, useState } from "react";

type Focus = "portfolio" | "interview" | "project";
type View = "coach" | "match" | "questions" | "library";
type Intent = "learning" | "interview" | "project" | "unclear" | "offtopic";

const samples = [
  "FastAPI로 모델 예측 API를 만들고 요청/응답 구조를 학습했다. Docker로 실행 환경을 맞추는 과정이 어려웠다.",
  "난임 임신 성공 예측 프로젝트에서 CatBoost, LightGBM, ExtraTrees를 비교했고, OOF AUC와 제출 점수 차이를 확인했다.",
  "흡연 여부 건강검진 데이터를 분석하면서 결측치 처리, BMI 파생변수, t-test와 ANOVA를 사용했다.",
  "Redis Queue와 AI Worker를 분리해서 X-Ray 폐렴 예측 작업을 비동기로 처리하는 구조를 설계했다."
];

const focusOptions: Record<Focus, { label: string; helper: string }> = {
  portfolio: { label: "포트폴리오로 정리", helper: "배운 내용을 보여줄 문장으로 바꿔요" },
  interview: { label: "면접 대비", helper: "질문 받을 포인트를 먼저 뽑아요" },
  project: { label: "프로젝트 연결", helper: "학습과 결과물을 이어 붙여요" }
};

const keywordMap = [
  {
    skill: "API 기초",
    area: "API 이해",
    project: "",
    hint: "FastAPI 모델 서빙 과제와 연결할 수 있지만, 지금 기록만으로는 특정 프로젝트로 단정하지 않아요.",
    terms: ["api", "에이피아이", "요청", "응답", "http", "서버", "클라이언트"]
  },
  {
    skill: "FastAPI",
    area: "모델 서빙",
    project: "폐렴 환자 관리 백오피스",
    hint: "FastAPI, 엔드포인트, 모델 서빙처럼 구체적인 단서가 있을 때 프로젝트 연결 후보로 봅니다.",
    terms: ["fastapi", "fast api", "패스트api", "패스트 api", "서빙", "모델서빙", "백엔드", "엔드포인트", "라우터", "uvicorn"]
  },
  {
    skill: "Python",
    area: "Python 기초",
    project: "AI 헬스케어 학습 기록",
    hint: "Python 학습 기록은 학습 과정과 데이터 분석 프로젝트의 기초 근거로 연결할 수 있어요.",
    terms: ["python", "파이썬", "파이선", "파이썬기초", "파이썬 기초", "판다스", "pandas", "넘파이", "numpy", "주피터", "jupyter", "코랩", "colab"]
  },
  {
    skill: "Docker",
    area: "배포 환경",
    project: "폐렴 환자 관리 백오피스",
    hint: "Docker나 실행 환경 단서가 있으면 백오피스 배포 흐름과 연결 후보로 볼 수 있어요.",
    terms: ["docker", "도커", "독커", "컨테이너", "콘테이너", "도커 이미지", "컨테이너 이미지", "dockerfile", "도커파일", "docker compose", "docker-compose", "컴포즈", "실행환경", "실행 환경", "healthcheck", "헬스체크", "volume", "볼륨"]
  },
  {
    skill: "Redis / Queue",
    area: "비동기 작업 처리",
    project: "폐렴 환자 관리 백오피스",
    hint: "Redis Queue, Streams, Pub/Sub 단서는 AI 추론을 API 서버와 분리한 비동기 아키텍처 경험으로 연결됩니다.",
    terms: ["redis", "레디스", "queue", "큐", "redis queue", "redis streams", "stream", "streams", "pub/sub", "pubsub", "consumer group", "consumer", "작업 대기열", "대기열", "메시지", "publish", "subscribe"]
  },
  {
    skill: "AI Worker",
    area: "모델 추론 아키텍처",
    project: "폐렴 환자 관리 백오피스",
    hint: "AI Worker 단서는 무거운 모델 추론을 FastAPI 요청 흐름에서 분리한 설계 경험으로 볼 수 있어요.",
    terms: ["ai worker", "worker", "워커", "추론 워커", "모델 추론", "비동기", "event-driven", "event driven", "이벤트 드리븐", "dead letter", "dead letter queue", "dlq", "재시도", "멱등성", "idempotency", "중복 예측", "원자적", "atomic"]
  },
  {
    skill: "PyTorch Inference",
    area: "의료 이미지 추론",
    project: "폐렴 환자 관리 백오피스",
    hint: "PyTorch 모델 로드와 이미지 전처리 단서는 X-Ray 폐렴 예측 모델을 서비스에 연결한 경험과 직접 연결됩니다.",
    terms: ["pytorch", "파이토치", "torch", "model.pth", "state_dict", "model.eval", "eval()", "torch.no_grad", "no_grad", "sigmoid", "softmax", "정규화", "confidence", "신뢰도", "model_version", "모델 버전"]
  },
  {
    skill: "Auth / API Contract",
    area: "인증과 API 명세",
    project: "폐렴 환자 관리 백오피스",
    hint: "JWT, 권한, 응답 코드, Swagger 단서는 실제 서비스 API 계약을 설계한 경험으로 연결됩니다.",
    terms: ["jwt", "access token", "access_token", "bearer", "authorization", "인증", "권한", "의료인 권한", "admin", "관리자", "swagger", "docs", "api 명세", "명세", "endpoint", "엔드포인트", "path parameter", "path parameters", "파라미터", "401", "403", "404", "422", "500", "202 accepted", "201 created", "status code", "응답 코드"]
  },
  {
    skill: "Frontend API Integration",
    area: "프론트·백엔드 연결",
    project: "폐렴 환자 관리 백오피스",
    hint: "프론트엔드 API 연동 단서는 화면, 요청 필드, 엔드포인트를 맞춰 실제 기능을 연결한 경험으로 볼 수 있어요.",
    terms: ["프론트", "프론트엔드", "frontend", "api 연결", "연동", "fetch", "axios", "회원가입", "로그인", "로그아웃", "마이페이지", "회원정보", "환자 등록", "환자 목록", "환자 상세", "진료기록", "x-ray 업로드", "이미지 업로드", "22개 테스트", "테스트 통과"]
  },
  {
    skill: "CatBoost",
    area: "머신러닝",
    project: "난임 임신 성공 예측 모델",
    hint: "모델링 알고리즘 단서는 난임 예측 모델 프로젝트와 직접 연결됩니다.",
    terms: ["catboost", "cat boost", "캣부스트", "캣 부스트"]
  },
  {
    skill: "LightGBM",
    area: "머신러닝",
    project: "난임 임신 성공 예측 모델",
    hint: "모델링 알고리즘 단서는 난임 예측 모델 프로젝트와 직접 연결됩니다.",
    terms: ["lightgbm", "light gbm", "lgbm", "라이트gbm", "라이트 gbm"]
  },
  {
    skill: "머신러닝 개념",
    area: "머신러닝",
    project: "",
    hint: "구체적인 알고리즘이나 라이브러리명이 없는 학습 기록이라, 아직 특정 모델이나 프로젝트로 단정하지 않아요.",
    terms: ["머신러닝", "머신 러닝", "기계학습", "모델링", "분류모델", "분류 모델", "예측모델", "예측 모델"]
  },
  {
    skill: "ExtraTrees",
    area: "앙상블 모델링",
    project: "난임 임신 성공 예측 모델",
    hint: "ExtraTrees나 RandomForest 같은 트리 기반 앙상블 단서는 모델 비교 실험 경험으로 연결됩니다.",
    terms: ["extratrees", "extra trees", "extra tree", "엑스트라트리", "엑스트라 트리", "랜덤포레스트", "랜덤 포레스트", "randomforest", "random forest", "트리모델", "트리 모델", "앙상블"]
  },
  {
    skill: "OOF / AUC",
    area: "검증 전략",
    project: "난임 임신 성공 예측 모델",
    hint: "검증 지표와 제출 점수 단서는 모델 성능 검증 경험으로 연결됩니다.",
    terms: ["oof", "오오에프", "auc", "에이유씨", "검증", "교차검증", "교차 검증", "cross validation", "leaderboard", "리더보드", "점수", "성능", "제출"]
  },
  {
    skill: "Data Preprocessing",
    area: "전처리",
    project: "흡연 여부 건강 데이터 분석",
    hint: "전처리 단서는 건강 데이터 분석 프로젝트와 연결하기 좋습니다.",
    terms: ["결측치", "결측값", "전처리", "전 처리", "이상치", "스케일링", "인코딩", "데이터정리", "데이터 정리", "누락값", "누락 값", "건강검진", "국민건강보험", "혈압", "콜레스테롤", "중성지방", "hdl", "ldl", "혈청지질", "헤모글로빈"]
  },
  {
    skill: "Feature Engineering",
    area: "파생변수",
    project: "흡연 여부 건강 데이터 분석",
    hint: "파생변수 단서는 건강 데이터 분석 프로젝트의 개선 과정으로 연결할 수 있어요.",
    terms: ["bmi", "비엠아이", "파생변수", "파생 변수", "특성", "피처", "feature", "나이대", "4050", "40대", "50대", "흡연자", "비흡연자", "smoking", "흡연 여부", "흡연"]
  },
  {
    skill: "Statistical Test",
    area: "통계 검정",
    project: "흡연 여부 건강 데이터 분석",
    hint: "통계 검정 단서는 데이터 분석 결과를 해석한 경험으로 연결됩니다.",
    terms: ["t-test", "ttest", "티테스트", "t검정", "anova", "아노바", "통계", "통계검정", "통계 검정", "p-value", "p값", "피값", "상관관계", "상관 관계", "heatmap", "히트맵", "matplotlib", "seaborn", "유의미", "상관계수"]
  },
  {
    skill: "Deep Learning",
    area: "딥러닝",
    project: "말라리아 세포분류",
    hint: "이미지 분류나 CNN 단서는 딥러닝 프로젝트와 연결됩니다.",
    terms: ["딥러닝", "딥 러닝", "cnn", "씨엔엔", "전이학습", "전이 학습", "이미지 분류", "이미지분류", "말라리아", "컴퓨터비전", "컴퓨터 비전"]
  },
  {
    skill: "Git Collaboration",
    area: "협업",
    project: "AI 헬스케어 팀 프로젝트",
    hint: "협업 단서는 팀 프로젝트 운영 방식과 연결할 수 있어요.",
    terms: ["git", "github", "깃", "깃허브", "협업", "브랜치", "커밋", "merge", "머지", "pull request", "피알", "협업 프로젝트", "팀 프로젝트"]
  }
];

const tutorialSteps = [
  {
    title: "1. 편하게 적기",
    body: "영어 기술명 몰라도 괜찮아요. 파이썬, 도커, 에이피아이처럼 한글이나 발음으로 적어도 읽습니다."
  },
  {
    title: "2. 목표 고르기",
    body: "포트폴리오, 면접, 프로젝트 연결 중 오늘 필요한 목적을 하나 고릅니다."
  },
  {
    title: "3. 정리 시작",
    body: "버튼을 누르면 기술, 연결 프로젝트, 질문, 저장할 문장을 나눠서 보여줍니다."
  }
];

const includesAny = (text: string, terms: string[]) => terms.some((term) => text.includes(term));
const withParticle = (text: string, consonantParticle: string, vowelParticle: string) => {
  const lastChar = text.trim().at(-1);
  if (!lastChar) return text;
  const code = lastChar.charCodeAt(0);
  if (code < 0xac00 || code > 0xd7a3) return `${text}${vowelParticle}`;
  return `${text}${(code - 0xac00) % 28 === 0 ? vowelParticle : consonantParticle}`;
};

function analyze(log: string, focus: Focus) {
  const rawLog = log.trim();
  const normalizedLog = log.toLowerCase().replace(/\s+/g, " ");
  const compactLog = normalizedLog.replace(/\s+/g, "");
  const isConfused = ["어렵", "헷갈", "이해가 안", "이해 안", "이해 못", "이해를 못", "모르", "불안", "막막", "ㅠ", "ㅜ"].some((term) => normalizedLog.includes(term));
  const isQuestion = includesAny(normalizedLog, ["?", "어떻게", "왜", "뭐", "무엇", "알려줘", "궁금"]);
  const careerSignal = includesAny(normalizedLog, ["면접", "이력서", "자소서", "지원", "채용", "포트폴리오", "질문"]);
  const projectSignal = includesAny(normalizedLog, ["프로젝트", "해커톤", "구현", "만들", "기능", "서비스", "앱", "웹", "설계", "명세", "연동", "배포", "시연"]);
  const studySignal = includesAny(normalizedLog, ["공부", "학습", "수업", "배웠", "실습", "에러", "오류", "데이터", "모델", "분석", "요구사항", "회고", "검증", "테스트", "추론", "전처리"]);
  const offTopicSignal = includesAny(normalizedLog, ["점심", "저녁", "맛집", "로또", "주식", "코인", "연애", "영화", "노래", "게임 추천", "날씨", "심심", "꿈해몽"]);
  const found = keywordMap.filter((item) =>
    item.terms.some((term) => {
      const normalizedTerm = term.toLowerCase();
      return normalizedLog.includes(normalizedTerm) || compactLog.includes(normalizedTerm.replace(/\s+/g, ""));
    })
  );
  const hasKnownSkill = found.length > 0;
  const hasProductContext = hasKnownSkill || careerSignal || projectSignal || studySignal;
  const intent: Intent = offTopicSignal && !hasProductContext
    ? "offtopic"
    : rawLog.length < 8
      ? "unclear"
      : focus === "interview" || careerSignal
        ? "interview"
        : focus === "project" || projectSignal
          ? "project"
          : "learning";

  if (intent === "offtopic") {
    return {
      intent,
      intentLabel: "범위 밖 질문",
      skills: ["입력 분류"],
      areas: ["포트폴리오 범위 조정"],
      projects: [],
      hints: ["학습, 프로젝트, 면접 준비와 직접 관련 없는 질문은 결과물로 포장하지 않습니다."],
      guide: [
        "이 앱은 일반 챗봇이 아니라 학습 기록을 포트폴리오와 면접 준비로 바꾸는 도구예요.",
        "무관한 질문은 억지로 기술 경험으로 바꾸지 않고, 목적에 맞는 입력으로 다시 안내합니다.",
        "예를 들어 '오늘 API가 헷갈렸다', '해커톤에서 전처리를 맡았다'처럼 배운 내용이나 만든 기능을 적어주세요."
      ],
      readiness: 18,
      summary: "지금 입력은 학습 기록이나 프로젝트 회고와 거리가 있어요. 포트폴리오 앱에서는 억지 해석보다 범위를 정확히 나누는 것이 더 신뢰감 있습니다.",
      sentence: "학습 기록과 직접 관련 없는 입력은 포트폴리오 문장으로 변환하지 않고, 기록 목적에 맞게 다시 정리하도록 안내했습니다.",
      questions: [
        "오늘 실제로 배운 기술이나 개념은 무엇인가요?",
        "막힌 부분, 해결한 부분, 다음에 확인할 부분 중 하나를 적는다면 무엇인가요?",
        "이 기록을 면접, 포트폴리오, 프로젝트 연결 중 어디에 쓰고 싶나요?"
      ],
      next: [
        "무관한 질문 대신 오늘 배운 기술명을 하나 적기",
        "어려웠던 부분을 한 문장으로 바꾸기",
        "결과물과 연결되는 기능이나 프로젝트명을 추가하기"
      ]
    };
  }

  if (intent === "unclear") {
    return {
      intent,
      intentLabel: "정보 부족",
      skills: ["기록 보완"],
      areas: ["학습 로그 작성"],
      projects: [],
      hints: ["너무 짧은 입력은 기술, 문제, 결과를 안정적으로 판단하기 어렵습니다."],
      guide: [
        "한 단어만 적으면 앱이 추측을 많이 하게 됩니다.",
        "무엇을 배웠는지, 어디가 어려웠는지, 무엇을 만들었는지를 한 문장으로 적어주세요.",
        "예: 'FastAPI로 예측 API를 만들었는데 요청과 응답 구조가 헷갈렸다.'"
      ],
      readiness: 22,
      summary: "입력이 짧아서 아직 정리할 근거가 부족해요. 이 상태에서는 프로젝트나 기술 경험으로 단정하지 않는 게 맞습니다.",
      sentence: "짧은 메모를 바로 포트폴리오 문장으로 바꾸지 않고, 기술과 상황을 더 적도록 보완했습니다.",
      questions: [
        "오늘 배운 기술명은 무엇인가요?",
        "직접 만든 기능이나 확인한 결과가 있었나요?",
        "어떤 부분이 가장 헷갈렸나요?"
      ],
      next: [
        "기술명 하나 추가하기",
        "어려웠던 이유를 한 문장으로 적기",
        "프로젝트나 수업 맥락을 덧붙이기"
      ]
    };
  }

  const fallback = found.length
    ? []
    : [
        {
          skill: careerSignal ? "Interview Framing" : "Learning Reflection",
          area: "학습 정리",
          project: "",
          hint: "명확한 기술 키워드가 없어 특정 프로젝트로 단정하지 않고, 기록의 목적부터 정리합니다.",
          terms: []
        }
      ];
  const signals = found.length ? found : fallback;
  const skills = signals.map((item) => item.skill);
  const areas = Array.from(new Set(signals.map((item) => item.area)));
  const matchedProjects = Array.from(new Set(signals.map((item) => item.project).filter(Boolean)));
  const projects = isConfused ? [] : matchedProjects;
  const hints = Array.from(new Set(signals.map((item) => item.hint)));
  const readiness = Math.round(Math.min(96, 34 + Math.min(log.length, 180) / 6 + skills.length * 7 + projects.length * 8 + (careerSignal ? 6 : 0) + (projectSignal ? 6 : 0)));
  const intentLabel = intent === "interview" ? "면접 대비" : intent === "project" ? "프로젝트 연결" : isQuestion ? "질문형 학습 기록" : "학습 기록";
  const guide =
    skills.includes("API 기초")
      ? [
          "API는 어렵게 말하면 프로그램끼리 약속한 대화 방식이고, 쉽게 말하면 주문서에 가까워요.",
          "내가 서버에 '이 데이터 알려줘'라고 요청하면, 서버는 약속된 형태로 결과를 응답합니다.",
          "처음에는 코드보다 요청, 처리, 응답 세 단어만 잡고 예시를 하나 만들어보면 이해가 빨라져요."
        ]
      : skills.includes("Python")
        ? [
            "Python은 결과를 한 번에 외우기보다 작은 입력을 넣고 바로 출력해보면서 익히는 게 좋아요.",
            "오늘 막힌 부분을 한 문장으로 적고, 그 아래에 내가 시도한 코드와 에러를 같이 남기면 포트폴리오 근거가 됩니다.",
            "데이터 분석에서는 불러오기, 확인하기, 고치기, 요약하기 순서로 흐름을 잡으면 덜 헷갈려요."
          ]
        : [
            "지금 기록은 아직 넓은 학습 메모에 가까워요.",
            "무엇을 배웠는지, 어디서 막혔는지, 다음에 무엇을 확인할지를 나누면 바로 쓸 수 있는 기록이 됩니다.",
            "프로젝트와 연결하려면 직접 만든 화면, 기능, 분석 결과 중 하나를 같이 적어주세요."
          ];

  const summary =
    isConfused && skills.includes("API 기초")
      ? "API가 아직 헷갈린다는 기록으로 보여요. 지금은 프로젝트 경험으로 포장하기보다, 요청과 응답을 쉬운 예시로 설명할 수 있게 만드는 단계가 더 맞습니다."
      : isConfused
        ? "어렵거나 헷갈렸다는 기록도 좋은 학습 로그예요. 막힌 지점, 다시 이해한 방식, 다음에 확인할 내용을 나누면 면접에서 솔직하고 탄탄한 성장 과정으로 말할 수 있습니다."
        : intent === "interview"
          ? "면접 답변으로 바꿀 수 있는 기록이에요. 기술 설명보다 '무엇이 어려웠고, 어떻게 이해했으며, 다음에 어떻게 적용할지'를 말하는 쪽이 더 자연스럽습니다."
        : intent === "project"
          ? projects.length
            ? "프로젝트와 연결할 수 있는 단서를 찾았어요. 다만 실제 구현 내용이 충분히 적힌 경우에만 경험으로 확정하는 편이 안전합니다."
            : "프로젝트 연결 목표로 보이지만 아직 특정 결과물 단서가 부족해요. 만든 기능, 맡은 역할, 사용한 기술을 추가하면 더 정확히 연결할 수 있습니다."
        : focus === "interview"
      ? "오늘 기록은 면접에서 설명할 수 있는 경험으로 다듬을 수 있어요. 다만 프로젝트 연결은 단어 하나로 확정하지 않고, 실제로 무엇을 만들었는지까지 확인해요."
      : focus === "project"
        ? projects.length
          ? "학습 기록 안에서 프로젝트와 연결할 수 있는 후보를 찾았어요. 아직 확정 문장이 아니라, 연결 근거를 더 확인하는 단계예요."
          : "지금 기록은 특정 프로젝트보다 개념 학습에 가까워요. 먼저 쉽게 설명할 수 있는 문장으로 바꾼 뒤, 관련 프로젝트가 있으면 나중에 연결하면 됩니다."
        : "오늘 배운 내용을 포트폴리오 문장으로 바꿀 준비가 됐어요. 기술과 설명 포인트를 먼저 정리하고, 프로젝트는 근거가 있을 때만 연결할게요.";

  const sentence = isConfused
      ? `${areas.join(", ")}를 학습하면서 이해가 막힌 지점을 기록했고, 개념을 쉬운 예시로 다시 풀어보며 다음 학습 방향을 정리했습니다.`
      : projects.length
        ? `${projects.map((project) => withParticle(project, "과", "와")).join(", ")} 연결해 볼 수 있는 ${areas.join(", ")} 학습 기록입니다. 단순히 기술명을 나열하지 않고, 왜 배웠는지와 어떤 문제에 적용할 수 있는지를 중심으로 정리했습니다.`
      : `${areas.join(", ")} 중심의 학습 기록입니다. 아직 특정 프로젝트로 단정하지 않고, 개념을 쉬운 예시로 이해한 뒤 관련 과제와 연결할 근거를 더 정리했습니다.`;

  const questions = [
    intent === "interview" ? "면접에서 이 경험을 30초로 말한다면 문제, 행동, 배운 점을 어떻게 나눌 수 있나요?" : skills.includes("API 기초") ? "API를 식당 주문처럼 비유한다면 요청과 응답을 어떻게 설명할 수 있나요?" : skills.includes("Python") ? "파이썬으로 데이터를 다룰 때 어떤 라이브러리와 흐름을 사용했나요?" : skills.includes("FastAPI") ? "FastAPI로 모델 결과를 서비스에서 쓰려면 요청/응답을 어떻게 설계해야 하나요?" : "오늘 배운 내용을 어떤 프로젝트 문제와 연결할 수 있나요?",
    skills.includes("OOF / AUC") ? "검증 점수와 실제 제출 결과가 다를 때 어떤 원인을 확인했나요?" : "이 기술을 선택하거나 학습한 이유를 어떻게 설명할 수 있나요?",
    skills.includes("Data Preprocessing") || skills.includes("Feature Engineering") ? "전처리와 파생변수가 분석 결과에 어떤 영향을 줄 수 있나요?" : "다음에 이 학습을 결과물로 확장한다면 무엇을 먼저 만들고 싶나요?"
  ];

  const next = [
    skills.includes("API 기초") ? "API를 쇼핑몰 검색이나 음식 주문 예시로 바꿔서 요청과 응답을 적어보기" : projects.length ? "연결 후보 프로젝트에 오늘 배운 기술을 한 줄 추가할지 검토하기" : "오늘 막힌 부분을 한 문장으로 더 구체화하기",
    skills.length ? "추출된 기술 중 하나를 골라 Before/After 예시 만들기" : "학습 기록에 사용한 라이브러리나 지표명을 추가하기",
    "면접 질문 하나를 선택해 60초 답변으로 연습하기"
  ];

  return { intent, intentLabel, skills, areas, projects, hints, guide, readiness, summary, sentence, questions, next };
}

export default function StudyFlowPage() {
  const [log, setLog] = useState("");
  const [focus, setFocus] = useState<Focus>("portfolio");
  const [view, setView] = useState<View>("coach");
  const [analyzed, setAnalyzed] = useState(false);
  const [saved, setSaved] = useState<string[]>([]);
  const [notice, setNotice] = useState("");

  const result = useMemo(() => analyze(log, focus), [log, focus]);

  const run = () => {
    if (!log.trim()) return;
    setAnalyzed(true);
    setView("coach");
    setNotice("");
  };

  const save = () => {
    setSaved((items) => [result.sentence, ...items.filter((item) => item !== result.sentence)].slice(0, 5));
    setNotice("정리한 문장을 저장했어요.");
  };

  return (
    <main className="min-h-screen bg-[#F4F4F7] text-[#27262D]">
      <header className="sticky top-0 z-40 border-b border-[#DDDCE3] bg-[#F8F8FA]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-3 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#D8CAFF] text-[#393044]">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-black">StudyFlow AI</p>
              <p className="text-xs text-[#777481]">배운 것을 다시 꺼내 쓰는 학습 노트</p>
            </div>
          </div>
          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg border border-[#D4D2DA] bg-white px-3 py-2 text-xs font-bold text-[#5E5A68] transition hover:border-[#9585C7] hover:text-[#27262D]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            포트폴리오
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-[1440px] gap-0 px-0 py-0 lg:min-h-[calc(100vh-65px)] lg:grid-cols-[minmax(360px,0.43fr)_minmax(0,0.57fr)] lg:px-8 lg:py-8">
        <aside className="border-b border-[#DDDCE3] bg-[#FBFBFC] px-5 py-7 sm:px-8 lg:rounded-l-lg lg:border-b-0 lg:border-r lg:px-9 lg:py-9">
          <div className="mx-auto max-w-xl lg:mx-0">
            <p className="text-xs font-black uppercase text-[#765EBA]">Today&apos;s learning</p>
            <h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">오늘 무엇을 배웠나요?</h1>
            <p className="mt-3 text-sm leading-6 text-[#716E79]">
              완벽하게 정리하지 않아도 괜찮아요. 기억나는 말부터 편하게 적어보세요.
            </p>

            <div className="mt-7">
              <div className="mb-2 flex items-center justify-between gap-3">
                <label htmlFor="study-log" className="flex items-center gap-2 text-sm font-black">
                  <NotebookPen className="h-4 w-4 text-[#765EBA]" aria-hidden="true" />
                  학습 기록
                </label>
                <span className="text-xs font-bold text-[#8B8793]">{log.length}자</span>
              </div>
              <textarea
                id="study-log"
                value={log}
                placeholder="예: FastAPI로 예측 API를 만들었는데 요청과 응답 구조가 아직 헷갈렸다."
                onChange={(event) => {
                  setLog(event.target.value);
                  setAnalyzed(false);
                  setNotice("");
                }}
                spellCheck={false}
                className="min-h-56 w-full resize-none rounded-lg border border-[#CECBD6] bg-white p-4 text-sm leading-7 outline-none transition placeholder:text-[#AAA6B1] focus:border-[#846EC3] focus:ring-4 focus:ring-[#D8CAFF]/45"
              />
            </div>

            {!log && (
              <div className="mt-3 flex flex-wrap gap-2" aria-label="학습 기록 예시">
                {samples.slice(0, 3).map((sample, index) => (
                  <button
                    key={sample}
                    type="button"
                    onClick={() => {
                      setLog(sample);
                      setAnalyzed(false);
                    }}
                    className="rounded-lg border border-[#D9D6E0] bg-white px-3 py-2 text-xs font-bold text-[#676370] transition hover:border-[#9585C7] hover:bg-[#F5F1FF]"
                  >
                    예시 {index + 1}
                  </button>
                ))}
              </div>
            )}

            <div className="mt-7">
              <p className="text-sm font-black">어디에 활용할까요?</p>
              <div className="mt-3 grid grid-cols-3 gap-2" role="group" aria-label="정리 목적">
                {(Object.keys(focusOptions) as Focus[]).map((key) => {
                  const Icon = key === "portfolio" ? FileText : key === "interview" ? BriefcaseBusiness : FolderKanban;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => {
                        setFocus(key);
                        setAnalyzed(false);
                        setView("coach");
                      }}
                      className={`flex min-h-24 flex-col items-start justify-between rounded-lg border p-3 text-left transition ${
                        focus === key
                          ? "border-[#846EC3] bg-[#EEE8FF] text-[#3D3355]"
                          : "border-[#D9D6E0] bg-white text-[#716E79] hover:border-[#A99BD0]"
                      }`}
                      aria-pressed={focus === key}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                      <span className="text-xs font-black leading-5">{focusOptions[key].label.replace("로 정리", "")}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              type="button"
              onClick={run}
              disabled={!log.trim()}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#312D3B] px-5 py-4 text-sm font-black text-white transition hover:bg-[#494255] disabled:cursor-not-allowed disabled:bg-[#C9C6CE]"
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              내 기록 정리하기
            </button>

            <p className="mt-4 flex items-center gap-2 text-xs leading-5 text-[#85818D]">
              <BookOpen className="h-4 w-4 shrink-0 text-[#5B927A]" aria-hidden="true" />
              한글 발음으로 적어도 기술 단어를 찾아요. 입력 내용은 현재 브라우저 안에서만 처리합니다.
            </p>
          </div>
        </aside>

        <section className="bg-white px-5 py-7 sm:px-8 lg:rounded-r-lg lg:px-9 lg:py-9">
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#E1DFE5] pb-5">
              <div>
                <p className="text-xs font-black uppercase text-[#5B927A]">Your flow</p>
                <h2 className="mt-2 text-2xl font-black">정리 결과</h2>
              </div>
              {analyzed && (
                <div className="flex items-center gap-2 text-xs font-bold text-[#5F5B67]">
                  <span className="rounded-md bg-[#DDF1E7] px-2.5 py-1.5 text-[#37654F]">{result.intentLabel}</span>
                  <span>기술 {result.skills.length}개</span>
                </div>
              )}
            </div>

            <nav className="flex gap-1 overflow-x-auto border-b border-[#E1DFE5] py-3" aria-label="정리 결과 메뉴">
              {[
                ["coach", "한눈에 보기"],
                ["match", "프로젝트 연결"],
                ["questions", "면접 질문"],
                ["library", `저장함 ${saved.length}`]
              ].map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setView(key as View)}
                  className={`shrink-0 rounded-md px-3 py-2 text-xs font-black transition ${
                    view === key ? "bg-[#312D3B] text-white" : "text-[#716E79] hover:bg-[#F1F0F4]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>

            <div className="py-6">
            {!analyzed ? (
              <div className="py-10 text-center sm:py-16">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-[#EEE8FF] text-[#6F59AF]">
                  <NotebookPen className="h-8 w-8" aria-hidden="true" />
                </span>
                <p className="mt-5 text-xl font-black">기록 한 줄이면 충분해요.</p>
                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#777481]">
                  왼쪽에 오늘 배운 내용이나 막혔던 부분을 적으면 필요한 형태로 나눠드릴게요.
                </p>
                <div className="mx-auto mt-8 grid max-w-xl gap-3 text-left sm:grid-cols-3">
                  {tutorialSteps.map((step, index) => (
                    <div key={step.title} className="border-t-2 border-[#D8CAFF] pt-3">
                      <p className="text-xs font-black text-[#765EBA]">0{index + 1}</p>
                      <p className="mt-1 text-sm font-black">{step.title.replace(/^\d\.\s/, "")}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : view === "coach" ? (
              <div className="space-y-6">
                <section className="rounded-lg bg-[#F3F0FF] p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="flex items-center gap-2 text-sm font-black text-[#4B3D70]">
                      <Sparkles className="h-4 w-4" aria-hidden="true" />
                      먼저 이렇게 이해했어요
                    </p>
                  </div>
                  <p className="mt-3 text-base leading-8 text-[#595264]">{result.summary}</p>
                </section>
                <section>
                  <h3 className="text-base font-black">쉽게 다시 보기</h3>
                  <div className="mt-3 divide-y divide-[#E5E3E8] border-y border-[#E5E3E8]">
                    {result.guide.map((item, index) => (
                      <div key={item} className="flex gap-3 py-4 text-sm leading-6 text-[#676370]">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#DDF1E7] text-xs font-black text-[#37654F]">{index + 1}</span>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </section>
                <div className="grid gap-4 md:grid-cols-[0.75fr_1.25fr]">
                  <section className="rounded-lg bg-[#EAF5F0] p-5">
                    <h3 className="text-sm font-black">찾은 기술</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {result.skills.length ? result.skills.map((skill) => (
                        <span key={skill} className="rounded-md bg-white px-2.5 py-1.5 text-xs font-black text-[#37654F]">{skill}</span>
                      )) : <p className="text-sm text-[#676370]">기술 단어를 조금 더 구체적으로 적어보세요.</p>}
                    </div>
                  </section>
                  <section className="rounded-lg bg-[#FFF0E8] p-5">
                    <h3 className="text-sm font-black">활용 문장</h3>
                    <p className="mt-3 text-sm leading-7 text-[#625A57]">{result.sentence}</p>
                    <button type="button" onClick={save} className="mt-4 flex items-center gap-2 rounded-md bg-[#E98361] px-3 py-2 text-xs font-black text-white transition hover:bg-[#D9704F]">
                      <Save className="h-4 w-4" aria-hidden="true" />
                      저장하기
                    </button>
                    {notice && <p className="mt-3 flex items-center gap-1.5 text-xs font-bold text-[#6B5B52]"><CheckCircle2 className="h-4 w-4" />{notice}</p>}
                  </section>
                </div>
              </div>
            ) : view === "match" ? (
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <FolderKanban className="h-5 w-5 text-[#765EBA]" aria-hidden="true" />
                  <div><h3 className="font-black">연결할 수 있는 프로젝트</h3><p className="mt-1 text-xs text-[#777481]">입력한 기술과 경험이 실제로 겹칠 때만 후보로 보여줍니다.</p></div>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                {result.projects.length ? result.projects.map((project) => (
                  <article key={project} className="rounded-lg border border-[#DED7F2] bg-[#F8F5FF] p-5">
                    <p className="text-xs font-black text-[#765EBA]">연결 후보</p>
                    <h3 className="mt-2 text-lg font-black">{project}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#676370]">직접 만든 기능이나 맡은 역할을 더 적으면 연결 근거가 선명해져요.</p>
                  </article>
                )) : (
                  <div className="rounded-lg border border-dashed border-[#D4D1D9] bg-[#FAFAFB] p-6 md:col-span-2">
                    <p className="text-sm leading-6 text-[#676370]">아직 특정 프로젝트로 연결할 근거가 부족해요. 만든 기능, 사용한 기술, 확인한 결과 중 하나를 기록에 추가해보세요.</p>
                  </div>
                )}
                </div>
              </div>
            ) : view === "questions" ? (
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <MessageCircleQuestion className="h-5 w-5 text-[#C76C4D]" aria-hidden="true" />
                  <div><h3 className="font-black">이 기록에서 나올 질문</h3><p className="mt-1 text-xs text-[#777481]">기술 설명보다 선택과 해결 과정을 말해보세요.</p></div>
                </div>
                <div className="divide-y divide-[#E5E3E8] border-y border-[#E5E3E8]">
                {result.questions.map((question, index) => (
                  <article key={question} className="flex gap-4 py-5">
                    <span className="text-xs font-black text-[#C76C4D]">Q{index + 1}</span>
                    <p className="text-base font-black leading-7">{question}</p>
                  </article>
                ))}
                </div>
              </div>
            ) : (
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <section className="rounded-lg bg-[#EAF5F0] p-5">
                  <h3 className="text-base font-black">다음 학습</h3>
                  <ol className="mt-4 space-y-3">
                    {result.next.map((item, index) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-[#5C665F]">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#4D846B] text-xs font-black text-white">{index + 1}</span>
                        {item}
                      </li>
                    ))}
                  </ol>
                </section>
                <section>
                  <h3 className="flex items-center gap-2 text-base font-black"><Save className="h-4 w-4 text-[#765EBA]" />저장한 문장</h3>
                  {saved.length ? (
                    <ul className="mt-4 divide-y divide-[#E5E3E8] border-y border-[#E5E3E8]">
                      {saved.map((item) => (
                        <li key={item} className="py-4 text-sm leading-6 text-[#676370]">{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-4 rounded-lg border border-dashed border-[#D4D1D9] p-5 text-sm text-[#777481]">저장한 문장이 아직 없어요.</p>
                  )}
                </section>
              </div>
            )}
          </div>
            {analyzed && (
              <div className="mt-4 flex items-center justify-end border-t border-[#E1DFE5] pt-4">
                <button type="button" onClick={() => setView(view === "library" ? "coach" : "library")} className="flex items-center gap-1 text-xs font-black text-[#62518F]">
                  {view === "library" ? "결과로 돌아가기" : "다음 학습과 저장함 보기"}
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        </section>
      </section>
    </main>
  );
}
