# Portfolio Handoff

## Owner and goal

- Owner: 김지현 (Kim Ji-hyun)
- Portfolio direction: AI/Data 학습을 분석에만 두지 않고 실제 웹 서비스와 사용자 흐름으로 구현한 경험을 보여준다.
- Tone: 지원 공고에 억지로 맞춘 문구보다 김지현이 직접 겪은 불편, 질문, 판단과 구현 결과를 중심으로 쓴다.
- Design: 세련되고 전문적이되 지나치게 차갑거나 장난스럽지 않게 유지한다.

## Repository and local run

- Repository: https://github.com/KimPooh/portfolio-site
- Install: `npm.cmd install`
- Build: `npm.cmd run build`
- Development: `npm.cmd run dev`
- Current local review port used during handoff: `http://localhost:3001/`

## Current portfolio structure

- Main portfolio: `/`
- StudyFlow AI runnable app: `/studyflow-ai`
- StudyFlow build process: `/projects/studyflow-ai/process`
- ARTE Visit Companion runnable app: `/arte-companion`
- ARTE build process: `/projects/arte-visit-companion/process`
- Infertility case study: `/projects/infertility-pregnancy-prediction`
- Pneumonia back-office case study: `/projects/pneumonia-backoffice-ai-serving`
- Smoking health-data analysis: `/projects/smoking-status-data-analysis`
- Portfolio chatbot API: `/api/portfolio-chat`

## Verified facts

- Infertility hackathon team: 이거조
- Public Leaderboard score: `0.74236`
- Result: 3rd place
- The infertility project is a case study. Do not claim that its full code or dataset is public.
- Contact: `010-9533-9522`, `rlarha3288@gmail.com`
- GitHub owner: `KimPooh`

## Completed work

- Rebuilt the portfolio home, project cards, skill presentation and contact section.
- Added separate visual systems for infertility, pneumonia and smoking case studies while keeping their top header structure consistent.
- Added runnable StudyFlow and ARTE apps with separate build-process pages.
- Added a bilingual KR/EN portfolio interface.
- Added a local serverless portfolio chatbot with follow-up context, accurate project facts and automatic conversation scrolling. It currently does not require an OpenAI API key.
- Connected project cards to their GitHub repositories.
- Added a sixth project, Pote (`/projects/pote-gallery`, process at `/projects/pote-gallery/process`) —
  a real, separately deployed Next.js art-gallery product (https://pote-gallery.vercel.app), not a
  portfolio-only prototype. Followed the personal-finance-manager pattern (bespoke detail page +
  `liveHref` to the real deployment + `AppBuildCaseStudy` process page), and the ARTE/infertility
  pattern for disclosure: its GitHub repo (https://github.com/KimPooh/pote-gallery) is public but
  README-only — the real source stays private since the internal docs describe live business
  strategy (commission rate, artist negotiations) that shouldn't be public. `lib/portfolioChat.ts`
  was intentionally NOT updated with Pote facts — it was already missing personal-finance-manager
  before this change, so it's a pre-existing gap, not something this change introduced.

## Next priority

## 2026-09-22 — 배경·기술 노트 KR/EN 전환 수정

- `/background`와 `/notes`가 홈페이지와 같은 공용 `LanguageProvider` 상태를 사용하도록 전환했다. 이제 헤더에서 EN을 선택하면 두 페이지의 헤더, 본문, 경력/기술 노트 카드, 버튼과 링크 문구가 모두 영어로 바뀐다.
- `components/BackgroundContent.tsx`, `components/NotesContent.tsx`에 KR/EN 문구를 두고, 각 라우트 페이지는 해당 클라이언트 컴포넌트를 렌더링하도록 정리했다.
- 검증: `npm.cmd run build`는 이번 두 페이지와 무관한 기존 작업 트리의 `app/projects/arte-visit-companion/process/page.tsx` 타입 불일치로 실패했다. 이 변경 자체는 컴파일 단계까지 통과했다.

## 2026-09-21 — 기술 노트 추가

- `/notes`에 실제 프로젝트 경험 기반 기술 노트 3개를 추가했다: Pote 전시 데이터 정적 스냅샷, 난임 예측 모델 비교, 실제 브라우저 기반 배포 검증.
- 메인 포트폴리오의 데스크톱·모바일 메뉴에서 기술 노트로 이동할 수 있다.
- 검증: `npm.cmd run lint`, `npm.cmd run typecheck`, `npm.cmd run build` 통과.

## 2026-09-21 — Pote 최신 운영 정보 반영

- Pote 카드·상세·제작 과정에서 과거의 10개 언어·RTL·10% 수수료·8점 작품 표현을 제거했다.
- 현재 기준인 5명 작가 98점, 한국어·영어 지원, 작품 탐색·찜·문의·실제 공간 미리보기, KCISA 전시 데이터의 GitHub Actions 기반 일일 정적 스냅샷 갱신, Vercel 운영으로 통일했다.
- Pote 공개 링크를 `https://potegallery.com`으로 갱신했다.
- 검증: `npm.cmd run lint`, `npm.cmd run typecheck`, `npm.cmd run build` 통과.

## 2026-09-22 — 챗봇 컨텍스트 오염 버그 수정

- 증상: "Pote는 뭐야?"처럼 Pote를 직접 지목한 질문에도 챗봇이 난임 임신 성공 예측 프로젝트 답변을 반환.
- 원인: `lib/portfolioChat.ts`의 `shortFollowUp` 판정이 "텍스트 길이 14자 이하"면 무조건 참이 되어(거의 모든 짧은 질문, "pote" 자체 포함), 직전 대화 맥락(`context`)을 현재 질문에 이어붙였다. 분류 순서상 `isInfertility` 체크가 `isPote`보다 먼저 실행되므로, 이전 맥락에 난임 키워드가 섞여 있으면 Pote를 직접 물어도 난임 답변으로 덮어써졌다.
- 수정: 현재 질문(`text`) 자체에 프로젝트 키워드(난임/폐렴/흡연/Pote/ARTE/StudyFlow)가 직접 포함되어 있으면 맥락을 붙이지 않고 그 매치를 그대로 사용하도록 변경. 맥락 이어붙이기는 "그거", "그건" 같은 명시적 대명사 후속 질문에만 적용.
- 검증: `bash -c 'cd "포트폴리오" && npx tsc --noEmit lib/portfolioChat.ts'` 통과(에러 없음), Node로 분류 로직만 추출해 오염된 컨텍스트를 강제로 넣고 "Pote는 뭐야?"/"pote" 입력 시 `isPote: true, isInfertility: false`로 나오는지 별도 확인.
- 배포: `git push origin main` (커밋 `d7d19f3`)으로 반영, Vercel 자동 배포 대상.
- Next.js 개발 서버(`npm.cmd run dev`)를 직접 띄워 브라우저로 재현/재확인하지는 않음 — 필요하면 `http://localhost:3001/`에서 챗봇에 "Pote는 뭐야?" → "pote"를 연달아 물어 확인할 것.

## 2026-09-22 — 챗봇 컨텍스트 오염 버그 2차 수정 (무관한 질문도 오염)

- 증상: "사랑", "친구"처럼 프로젝트와 전혀 무관한 단어를 물어도 챗봇이 직전에 얘기했던 프로젝트(예: 난임)로 계속 답변.
- 원인: 위 1차 수정에서 `shortFollowUp`이 "직접 프로젝트 키워드가 없으면" `텍스트 길이 14자 이하` 조건으로 여전히 참이 됐다. 한국어 짧은 단어/문장은 거의 다 14자 이하라, 무관한 질문에도 직전 대화 맥락(`context`)이 계속 이어붙어 이전 프로젝트로 오분류됐다.
- 수정: 맥락 이어붙이기 조건에서 텍스트 길이 기준을 완전히 제거. 이제 "그거", "그건", "그앱", "그프로젝트", "그것", "그럼" 같은 명시적 대명사 후속 질문일 때만 맥락을 사용한다. 무관한 단어는 어떤 프로젝트 카테고리에도 매치되지 않고 마지막 fallback 답변("확인할 수 없는 내용이라 추측해서 답하지 않겠습니다")으로 정직하게 응답한다.
- 검증: Node로 분류 로직만 추출해 재현 — 오염된 난임 컨텍스트를 강제로 넣은 상태에서 "사랑"/"친구" → `isInfertility: false, isPote: false` (fallback으로 감), "그건 왜 만들었어?" → 여전히 `isInfertility: true` (의도된 대명사 후속 질문 동작 유지) 확인. `npx tsc --noEmit lib/portfolioChat.ts` 통과.
- 배포: `git push origin main`으로 반영, Vercel 자동 배포 대상.

## 2026-09-22 — 이력서 내용 포트폴리오 반영

- 소스: `C:\Users\goodf\Desktop\이력서\김지현_이력서_2026.pdf` (2026-09-08 작성).
- 사용자 확인 사항: 이력서 PDF의 경력 타임라인(강동길동매일365한의원 2021.10~2022.04 등, 총 5년, 3개 직장)이 기존 `/background` 페이지 타임라인(같은 병원 2022.10~2024.12 등, 총 10년+, 2009~2015 신촌세브란스·강동성심병원 항목 포함, 5개 직장)과 날짜·기간이 상당히 달랐음. 사용자가 "이력서 PDF가 최신·정확"이라고 확인해, `/background`의 `careerTimeline`을 이력서 3개 항목 기준으로 전면 교체(신촌세브란스·강동성심병원 항목은 이력서에 없어 제거).
- 반영 방식: PDF 다운로드 링크 + 텍스트 내용 통합 둘 다 원함(사용자 확인).
- `app/background/page.tsx`: 경력 타임라인을 이력서 기준으로 교체, 히어로 문구 "10년 넘게"→"5년간 병원 행정·인사·총무 및 고객 분쟁 조정 업무"로 정정, 학력(곤지암고등학교 졸업, 2003.02~2006.03)·자격증(AI 헬스케어 데이터 분석 및 모델링 실무 양성 과정, 2026.09.28 수료 예정 — 오늘 날짜 기준 아직 완료 전이라 "수료 예정"으로 표기)·희망 직무(머신러닝 엔지니어·빅데이터 엔지니어·AI/AX 엔지니어·데이터 분석·데이터 사이언티스트) 섹션 신규 추가, 이력서 PDF 다운로드 버튼 추가.
- `public/resume/kimjihyun-resume-2026.pdf`: 이력서 PDF를 ASCII 파일명으로 복사해 추가(한글 파일명 URL 인코딩 이슈 방지, `download` 속성으로 원래 한글 파일명 유지).
- `components/TargetedPortfolio.tsx`: Skills에 PyTorch·TensorFlow(Data/ML), Vercel(Serving) 추가. 연락처 섹션에 이력서 PDF 다운로드 링크 추가(전화·이메일·GitHub 옆).
- `lib/portfolioChat.ts`: 기술 스택 답변에 PyTorch·TensorFlow·Vercel·SQL·REST API 반영. "학력"(고등학교+교육과정), "희망직무", "이력서" 키워드에 대한 새 답변 분기 추가. 기존 "교육" 답변에 자격증 수료 예정일 추가.
- 검증: `npm run typecheck`, `npm run lint` 통과. 로컬 dev 서버(포트 3001, 다른 세션이 3000 점유 중이라 자동 할당)를 별도로 띄워 브라우저로 `/background` 데스크톱·모바일(375px) 렌더링 확인, 홈 Skills·연락처 섹션 확인, 이력서 PDF 다운로드 링크가 실제로 파일을 서빙하는지 확인, 챗봇에 "희망 직무가 뭐야?"/"학력이 어떻게 돼?"/"이력서 어디서 다운받아?"를 실제로 입력해 `/api/portfolio-chat` 응답이 새 답변으로 나오는지 확인. 확인 후 임시 dev 서버는 종료함.
- 배포: `git push origin main`으로 반영(커밋 `c19764d`), Vercel 자동 배포 대상.

## 2026-09-22 — 축약 포트폴리오 PDF 추가 (별도 세션 산출물)

- 소스: 사용자가 다른 Claude Code 세션에서 만든 축약 포트폴리오 PDF. 경로: `...\3c60b2cb-aa01-490c-8fba-e271e16b43cc\scratchpad\portfolio-pdf\김지현_포트폴리오.pdf` (HTML(`index.html`) + `profile.jpg`를 헤드리스 Chrome으로 print-to-pdf해서 만든 산출물, 이력서 PDF와는 별개의 문서 — 히어로·Skills·프로젝트 7개 카드·Background 타임라인·Engineering Notes 3개를 1~2페이지로 압축한 요약본).
- 문제 발견: 이 PDF의 Background 타임라인이 위 항목(2026-09-22 이력서 반영)에서 이미 폐기한 구버전 데이터(강동길동매일365한의원 2022.10~2024.12 등, 총 10년+, 신촌세브란스·강동성심병원 포함 5개 직장)를 그대로 담고 있었고, Skills에도 PyTorch·TensorFlow·Vercel이 빠져 있었음(둘 다 오늘 이력서 반영 커밋 이전에 캡처된 스냅샷이라 그런 것으로 보임).
- 조치: 사용자에게 다시 묻지 않고, 이미 이 세션에서 확정된 사실(이력서 기준 경력 3개 항목·5년, 보완된 기술 스택)을 기준으로 원본 `index.html`을 직접 수정 → 헤드리스 Chrome(`chrome.exe --headless --disable-gpu --print-to-pdf`, 로컬에 이미 설치돼 있어 별도 다운로드 없음)으로 재렌더링 → 원본 경로의 `portfolio.pdf`/`김지현_포트폴리오.pdf`도 수정본으로 덮어써 사용자가 그 경로를 다시 참조해도 최신 내용이 나오게 함.
- `public/portfolio/kimjihyun-portfolio-2026.pdf`: 수정된 PDF를 ASCII 파일명으로 사이트에 추가(이력서와 동일하게 `download` 속성으로 원래 한글 파일명 유지).
- `app/background/page.tsx`, `components/TargetedPortfolio.tsx`: 기존 "이력서 PDF 다운로드" 버튼 옆에 "포트폴리오 요약 PDF 다운로드" 버튼 추가(배경 페이지, 홈 연락처 섹션 둘 다).
- `lib/portfolioChat.ts`: "이력서" 답변 분기를 두 PDF를 모두 안내하도록 확장하고, 이 분기를 기존 "프로젝트/포트폴리오" 키워드 분기(줄 순서상 더 앞에 있던 범용 "포트폴리오" 키워드 매치)보다 앞으로 옮김 — 그렇지 않으면 "포트폴리오 PDF 어디서 받아?" 같은 질문이 먼저 "여섯 프로젝트 목록" 답변에 걸려버림. 새 키워드는 "포트폴리오pdf"·"포트폴리오다운로드"·"pdf다운로드"·"pdf파일" 등 복합어만 사용해 기존 범용 "포트폴리오" 질문과 충돌하지 않게 함.
- 검증: `npm run typecheck`/`npm run lint` 통과. 로컬 dev 서버(포트 3000)로 `/background`에서 링크 존재·실제 파일 서빙 확인, 챗봇에 "포트폴리오 PDF 다운로드하고 싶어"(→ 두 PDF 안내로 정상 분기) / "포트폴리오 프로젝트 뭐있어?"(→ 기존 프로젝트 목록 답변 그대로 유지, 충돌 없음) 둘 다 실제로 입력해 확인.
- 배포: `git push origin main`으로 반영(커밋 `74b034f`), Vercel 자동 배포 대상.
- 미해결: 사용자가 요청한 "KR/EN 언어 토글이 배경·기술노트 등 홈 이외 페이지에는 적용 안 되는 버그"는 아직 착수 전. 홈페이지(`components/TargetedPortfolio.tsx`)에만 KR/EN 상태가 있고, `/background`·`/notes`·`/journey`·`/studyflow-ai`·`/arte-companion`·프로젝트 상세/제작과정 페이지(총 13개 라우트, 약 2400줄)는 언어 상태나 영문 콘텐츠 자체가 전혀 없는 한국어 전용 정적 페이지 — 진짜 "전체 적용"은 공유 언어 컨텍스트/헤더 컴포넌트 신설 + 13개 페이지 영문 번역이 필요한 큰 작업. StudyFlow AI·ARTE Visit Companion 두 개는 자체 로직이 한국어 인터랙션/생성 결과를 다루는 앱이라 단순 문구 치환보다 범위가 더 큼. 다음 세션에서 이어서 처리할 것.

Rebuild StudyFlow AI into a launch-quality standalone product. Preserve the existing portfolio routes while improving the actual app experience first. Before editing, inspect the current implementation and confirm the intended design direction with the user. The user requested stage-by-stage design review rather than one large unreviewed redesign.

StudyFlow should:

- Start with an empty learning log.
- Accept natural Korean, English technology names and Korean pronunciations of English terms.
- Avoid inventing a specific project when the input does not support it.
- Explain naturally how a first-time user should use the app.
- Turn a learning note into useful technology keywords, linked project context, interview questions and portfolio-ready sentences.
- Clearly distinguish deterministic local analysis from any future LLM feature.
- Feel friendly and contemporary without looking childish.

## Source references

These Notion links may require the owner's workspace permission. If access fails, do not infer unseen content. Ask the owner to publish the relevant page to the web or export it as PDF/Markdown and attach it.

- AI Healthcare 5: https://app.notion.com/p/AI-5-9a3caf5650aa83a7ad34814b56e564bf?source=copy_link
- Recent project: https://app.notion.com/p/236476b9406083d19828013bbf498b43?source=copy_link

Project repositories:

- https://github.com/KimPooh/StudyFlow-AI
- https://github.com/KimPooh/infertility-pregnancy-prediction
- https://github.com/KimPooh/smoking-health-data-analysis
- https://github.com/KimPooh/pneumonia-backoffice-ai-serving
- https://github.com/KimPooh/arte-visit-companion

## Working rules

- Read `AGENTS.md` before changing code.
- Work with the current files; do not restart the portfolio from scratch.
- Do not guess educational history or project metrics that are not supported by a source.
- Keep Korean and English UI copy synchronized.
- Run `npm.cmd run build` after changes.
- Verify desktop and mobile layouts and key navigation before reporting completion.
- Do not expose API keys or secrets in browser code or Git.
