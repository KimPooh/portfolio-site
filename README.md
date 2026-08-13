# Kim Ji-hyun AI/Data Portfolio

김지현 AI/Data 포트폴리오 사이트입니다. Next.js, TypeScript, Tailwind CSS, Framer Motion 기반이며, 대표 프로젝트인 `난임 임신 성공 예측 모델`을 중심으로 구성했습니다.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Edit content

- `data/site.ts`: 프로필, 소셜 링크, 섹션 카피
- `data/projects.ts`: 케이스 스터디 상세 데이터
- `data/learning.ts`: StudyFlow 학습 로그와 여정 페이지 데이터
- `app/projects/infertility-pregnancy-prediction/`: 대표 프로젝트 상세 페이지

## Main components

- `components/TargetedPortfolio.tsx`: 메인 포트폴리오 페이지 전체
- `components/ProjectCaseStudyHeader.tsx`: 케이스 스터디 페이지 공용 헤더
- `components/AppBuildCaseStudy.tsx`: 앱 제작 과정 페이지 템플릿

## Deploy

Vercel에서 바로 배포할 수 있는 Next.js 구조입니다. 저장소를 Vercel에 연결하고 기본 빌드 명령을 사용하면 됩니다.

```bash
npm run build
```

로컬에서 전체 확인을 할 때는 아래 명령을 사용할 수 있습니다.

```bash
npm run check
```
