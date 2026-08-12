export const portfolioContact = {
  name: "김지현",
  phone: "010-9533-9522",
  email: "rlarha3288@gmail.com",
  github: "https://github.com/KimPooh"
};

export type PortfolioLanguage = "kr" | "en";

const normalize = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^0-9a-z가-힣]+/g, "");

const hasAny = (text: string, keywords: string[]) => keywords.some((keyword) => text.includes(normalize(keyword)));

const joinAnswers = (answers: string[], isEnglish: boolean) =>
  answers.join(isEnglish ? " " : " ");

export function getPortfolioAnswer(question: string, language: PortfolioLanguage = "kr", context = "") {
  const original = question.trim();
  const text = normalize(original);
  const contextText = normalize(context);
  const isEnglish = language === "en";
  const shortFollowUp = text.length <= 14 || hasAny(text, ["그거", "그건", "그앱", "그프로젝트", "그것", "그럼"]);
  const subjectText = `${text}${shortFollowUp ? contextText : ""}`;
  const asksWhy = hasAny(text, ["왜", "이유", "계기", "만든과정", "제작과정", "history", "process"]);
  const asksScore = hasAny(text, ["점수", "스코어", "auc", "leaderboard", "리더보드", "몇점", "score"]);

  if (!original) {
    return isEnglish
      ? "Ask about Jihyun, the five projects, app build decisions, skills, award, or contact details."
      : "김지현 소개, 다섯 프로젝트, 앱 제작 과정, 기술 스택, 수상 기록과 연락처를 물어보세요.";
  }

  if (hasAny(text, ["안녕", "반가워", "hello", "hi", "hey"])) {
    return isEnglish
      ? "Hello. I am Jihyun's portfolio assistant. I can explain what he built, why he made each app, and what he learned."
      : "안녕하세요. 김지현의 포트폴리오 안내 AI입니다. 무엇을 만들었는지, 앱을 왜 만들었는지, 어떤 기술을 사용했는지 설명할 수 있어요.";
  }

  if (hasAny(text, ["뭘물어", "무엇을물어", "뭐할수", "도와줄", "사용법", "help", "whatcanyoudo"])) {
    return isEnglish
      ? "I can cover profile details, skills, education, five projects, the 0.74236 hackathon result, StudyFlow and ARTE build decisions, and contact links."
      : "소개, 기술과 교육, 다섯 프로젝트, 난임 해커톤 점수 0.74236, StudyFlow·ARTE 제작 판단, 연락처를 답할 수 있습니다.";
  }

  const personalAnswers: string[] = [];
  if (hasAny(text, ["이름", "누구", "성함", "name", "whois"])) {
    personalAnswers.push(isEnglish ? "His name is Jihyun Kim." : `이름은 ${portfolioContact.name}입니다.`);
  }
  if (hasAny(text, ["나이", "몇살", "몇년생", "생년", "age", "old", "birth"])) {
    personalAnswers.push(isEnglish ? "Age is not published in this portfolio." : "나이는 포트폴리오에 공개하지 않았습니다.");
  }
  if (hasAny(text, ["전화", "연락처", "번호", "핸드폰", "휴대폰", "phone", "contact"])) {
    personalAnswers.push(isEnglish ? `Phone: ${portfolioContact.phone}.` : `전화번호는 ${portfolioContact.phone}입니다.`);
  }
  if (hasAny(text, ["메일", "이메일", "email", "gmail"])) {
    personalAnswers.push(isEnglish ? `Email: ${portfolioContact.email}.` : `이메일은 ${portfolioContact.email}입니다.`);
  }
  if (hasAny(text, ["깃허브", "github"])) {
    personalAnswers.push(isEnglish ? `GitHub: ${portfolioContact.github}.` : `GitHub 주소는 ${portfolioContact.github}입니다.`);
  }
  if (personalAnswers.length) return joinAnswers(personalAnswers, isEnglish);

  const isInfertility = hasAny(subjectText, ["난임", "임신성공", "catboost", "lightgbm", "oofauc", "이거조"]);
  const isPneumonia = hasAny(subjectText, ["폐렴", "xray", "x-ray", "redisqueue", "aiworker", "백오피스"]);
  const isSmoking = hasAny(subjectText, ["흡연", "비흡연", "건강검진", "ttest", "anova", "중성지방"]);
  const isArte = hasAny(subjectText, ["arte", "아르떼", "전시", "관람", "도슨트", "visitcompanion"]);
  const isStudyFlow = hasAny(subjectText, ["studyflow", "스터디플로우", "학습로그", "학습기록", "면접질문생성"]);

  if (isInfertility) {
    if (asksScore || hasAny(text, ["순위", "수상", "몇등", "award", "rank"])) {
      return isEnglish
        ? "Team 'Igeojo' placed 3rd with a Public Leaderboard score of 0.74236. The case study also explains OOF AUC validation and model blending."
        : "이거조 팀은 Public Leaderboard 0.74236을 기록해 해커톤 3위를 수상했습니다. 상세 페이지에는 OOF AUC 검증과 모델 블렌딩 과정도 함께 정리되어 있습니다.";
    }
    if (asksWhy) {
      return isEnglish
        ? "The project began from the high time and financial cost of infertility treatment. The goal was to explore whether treatment data could support an earlier estimate of pregnancy success."
        : "난임 시술의 시간적·경제적 부담이 큰 상황에서, 시술 데이터로 임신 성공 가능성을 미리 살펴볼 수 있는지 확인하려고 시작했습니다.";
    }
    return isEnglish
      ? "The infertility project predicts pregnancy success from treatment data. It covers EDA, leakage-aware preprocessing, CatBoost and LightGBM comparison, OOF AUC validation, blending, and a 3rd-place result at 0.74236."
      : "난임 임신 성공 예측은 시술 데이터의 EDA와 누수 방지 전처리, CatBoost·LightGBM 비교, OOF AUC 검증과 블렌딩을 진행한 프로젝트입니다. Public LB 0.74236으로 3위를 기록했습니다.";
  }

  if (isPneumonia) {
    if (asksWhy) {
      return isEnglish
        ? "The key question was how to move an X-ray model beyond a notebook. The project connected upload, API request, queued inference, result storage, and operator review as one back-office flow."
        : "노트북 안의 X-Ray 모델을 실제 운영 흐름에서 어떻게 사용할지 확인하려고 만들었습니다. 업로드, API 요청, 대기열, AI Worker 추론, 결과 확인을 백오피스 흐름으로 연결했습니다.";
    }
    return isEnglish
      ? "The pneumonia back-office project connects an X-ray workflow with FastAPI, authentication, SQLAlchemy, Docker concepts, Redis Queue, and an AI worker design. The published page separates implemented backend work from extension design."
      : "폐렴 환자 관리 백오피스는 X-Ray 흐름을 FastAPI, 인증, SQLAlchemy와 연결한 프로젝트입니다. Docker·Redis Queue·AI Worker는 실제 구현 범위와 확장 설계를 구분해 설명합니다.";
  }

  if (isSmoking) {
    return isEnglish
      ? "The smoking analysis compares health indicators between smoker and non-smoker groups. It uses preprocessing, BMI and age-group features, visualization, t-tests, and ANOVA while avoiding causal over-claims."
      : "흡연 여부 건강 데이터 분석은 흡연자와 비흡연자의 건강 지표 차이를 비교한 프로젝트입니다. 결측치 처리, BMI·연령대 파생변수, 시각화, t-검정과 ANOVA를 사용했고 인과관계로 단정하지 않았습니다.";
  }

  if (isArte) {
    if (asksWhy) {
      return isEnglish
        ? "ARTE was built because the same fixed explanation does not fit families, first-time visitors, international visitors, and quiet viewers. The app changes the guide, questions, and route by artwork and visitor type."
        : "같은 작품 설명이 가족, 첫 방문객, 외국인, 조용히 감상하려는 사람 모두에게 맞지는 않는다고 생각해 만들었습니다. 작품과 관람객 유형에 따라 설명, 질문, 동선을 다르게 제공합니다.";
    }
    return isEnglish
      ? "ARTE Visit Companion is an interactive exhibition prototype. It provides Korean and English guides, reflection questions, recommended routes, and an operator log based on artwork and visitor type. It currently uses local rules rather than a live LLM."
      : "ARTE Visit Companion은 작품과 관람객 유형을 고르면 한국어·영어 가이드, 감상 질문, 추천 동선, 운영자 로그를 제공하는 전시 관람 프로토타입입니다. 현재는 실시간 LLM이 아니라 로컬 조합 규칙으로 작동합니다.";
  }

  if (isStudyFlow) {
    if (asksWhy) {
      return isEnglish
        ? "StudyFlow AI came from Jihyun's own problem: notes were scattered across assignments, project descriptions, and personal memos. He built a reusable flow for keywords, project links, interview prompts, and portfolio sentences."
        : "StudyFlow AI는 과제, 프로젝트 설명, 개인 메모에 흩어진 학습 기록을 다시 활용하기 어려웠던 개인적인 불편에서 시작했습니다. 기록을 기술 키워드, 프로젝트 연결, 면접 질문, 포트폴리오 문장으로 바꾸도록 만들었습니다.";
    }
    return isEnglish
      ? "StudyFlow AI is a standalone learning-log web app. It recognizes Korean and English technology terms, classifies intent, suggests related projects, and creates interview questions and portfolio sentences with a local algorithm."
      : "StudyFlow AI는 학습 기록을 정리하는 독립 웹앱입니다. 한글·영문 기술 표현을 인식하고 입력 목적을 분류해 관련 프로젝트, 면접 질문, 포트폴리오 문장을 로컬 알고리즘으로 제안합니다.";
  }

  if (asksWhy && hasAny(text, ["앱", "제품", "서비스", "app", "product", "service"])) {
    return isEnglish
      ? "The two runnable apps began with different personal questions. StudyFlow AI asks how scattered study notes can become reusable project and interview material. ARTE asks how one exhibition can guide visitors differently by language and viewing style. Each build-process page records how those questions shaped the implemented flow."
      : "두 앱은 서로 다른 개인적인 질문에서 시작했습니다. StudyFlow AI는 흩어진 학습 기록을 프로젝트와 면접에 다시 쓰려면 어떻게 해야 하는지, ARTE는 같은 전시를 언어와 관람 방식에 따라 다르게 안내하려면 어떻게 해야 하는지를 풀어본 결과물입니다. 각 제작 과정 페이지에서 이 질문이 실제 기능과 흐름으로 바뀐 과정을 볼 수 있습니다.";
  }

  if (hasAny(text, ["수상", "해커톤", "award", "3등", "상받", "점수"])) {
    return isEnglish
      ? "The award is 3rd place for the infertility pregnancy prediction project. Team 'Igeojo' recorded 0.74236 on the Public Leaderboard."
      : "수상 기록은 난임 임신 성공 예측 프로젝트 해커톤 3위입니다. 이거조 팀으로 Public Leaderboard 0.74236을 기록했습니다.";
  }

  if (hasAny(text, ["프로젝트", "만든것", "결과물", "포트폴리오", "대표", "작품목록", "project"])) {
    return isEnglish
      ? "Five works are presented: StudyFlow AI, the pneumonia back office, the infertility prediction model, the smoking health-data analysis, and ARTE Visit Companion. StudyFlow and ARTE are runnable apps with separate build-process pages."
      : "현재 다섯 결과물이 있습니다. StudyFlow AI, 폐렴 환자 관리 백오피스, 난임 임신 성공 예측, 흡연 여부 건강 데이터 분석, ARTE Visit Companion입니다. StudyFlow와 ARTE는 직접 실행하고 제작 과정도 따로 볼 수 있습니다.";
  }

  if (hasAny(text, ["기술", "스킬", "stack", "skill", "python", "파이썬", "fastapi", "react", "next", "docker"])) {
    return isEnglish
      ? "The stack spans Python, Pandas, NumPy, Scikit-learn, CatBoost, LightGBM, ExtraTrees, FastAPI, Docker, Redis, Next.js, React, TypeScript, and Tailwind CSS. The emphasis is on connecting analysis, APIs, and usable interfaces."
      : "주요 기술은 Python, Pandas, NumPy, Scikit-learn, CatBoost, LightGBM, ExtraTrees, FastAPI, Docker, Redis, Next.js, React, TypeScript, Tailwind CSS입니다. 분석, API, 사용 가능한 화면을 연결하는 데 초점을 두고 있습니다.";
  }

  if (hasAny(text, ["교육", "학원", "ai헬스케어", "공부기록", "education", "course", "oz코딩", "오즈코딩"])) {
    return isEnglish
      ? "Through OZ Coding School's AI Healthcare 5th cohort, Jihyun is studying Python, data analysis, machine learning, deep-learning basics, web development, APIs, and AI model serving."
      : "OZ코딩스쿨 AI 헬스케어 5기에서 Python, 데이터 분석, 머신러닝, 딥러닝 기초, 웹 개발, API와 AI 모델 서빙을 학습하고 있습니다.";
  }

  if (hasAny(text, ["여정", "journey", "학습흐름", "학습과정", "learningpath"])) {
    return isEnglish
      ? "The Journey page records the progression from Python and data analysis to machine learning, deep-learning basics, model serving, and web implementation."
      : "여정 페이지에는 Python과 데이터 분석에서 시작해 머신러닝, 딥러닝 기초, 모델 서빙, 웹 구현으로 확장한 학습 흐름을 정리했습니다.";
  }

  if (hasAny(text, ["강점", "잘하", "장점", "어필", "strength"])) {
    return isEnglish
      ? "His clearest strength is turning learning into something people can inspect and use. He connects data work, model logic, APIs, and interfaces while documenting what is implemented and what remains."
      : "가장 분명한 강점은 배운 내용을 설명으로 끝내지 않고 직접 확인하고 사용할 수 있는 형태로 연결하는 점입니다. 데이터, 모델 로직, API, 화면을 연결하면서 구현한 범위와 남은 범위도 구분해 기록합니다.";
  }

  if (hasAny(text, ["날씨", "맛집", "주식", "코인", "로또", "연애", "영화추천", "게임추천"])) {
    return isEnglish
      ? "That is outside this portfolio. I can help with Jihyun's projects, build decisions, skills, education, award, and contact details."
      : "그 질문은 포트폴리오 범위 밖입니다. 대신 김지현의 프로젝트, 앱 제작 판단, 기술, 교육, 수상 기록과 연락처는 답할 수 있습니다.";
  }

  return isEnglish
    ? "I could not verify that from the portfolio, so I will not guess. Try asking about a project name, build decision, skill, award, education, or contact detail."
    : "포트폴리오에서 확인할 수 없는 내용이라 추측해서 답하지 않겠습니다. 프로젝트 이름, 제작 판단, 기술, 수상, 교육 또는 연락처를 구체적으로 물어보세요.";
}
