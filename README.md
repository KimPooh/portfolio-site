# Kim Ji-hyun AI/Data Portfolio

김지현 AI/Data 포트폴리오 사이트입니다. Next.js, TypeScript, Tailwind CSS, Framer Motion 기반이며, 대표 프로젝트인 `난임 임신 성공 예측 모델`을 중심으로 구성했습니다.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Edit content

- `data/site.ts`: 이름, 소개 문구, 섹션 제목, 연락 링크, 상단 메뉴
- `data/projects.ts`: 프로젝트 카드
- `data/skills.ts`: 기술 스택 그룹
- `data/labs.ts`: 랩 아이디어
- `app/projects/infertility-pregnancy-prediction/page.tsx`: 대표 프로젝트 상세 페이지

## Main components

- `components/Hero.tsx`
- `components/About.tsx`
- `components/Skills.tsx`
- `components/Projects.tsx`
- `components/Labs.tsx`
- `components/Contact.tsx`
- `components/ParticleBackground.tsx`
- `components/SiteHeader.tsx`
- `components/ThemeToggle.tsx`

## Deploy

Vercel에서 바로 배포할 수 있는 Next.js 구조입니다. 저장소를 Vercel에 연결하고 기본 빌드 명령을 사용하면 됩니다.

```bash
npm run build
```

로컬에서 전체 확인을 할 때는 아래 명령을 사용할 수 있습니다.

```bash
npm run check
```
