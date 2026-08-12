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

## Next priority

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
