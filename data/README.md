# Data Editing Guide

이 폴더의 파일만 수정해도 포트폴리오의 주요 내용이 바뀌도록 구성했습니다.

- `site.ts`: 이름, 역할, 소개 문구, 섹션 제목, 연락 링크, 상단 메뉴
- `projects.ts`: 프로젝트 카드 목록
- `skills.ts`: 기술 스택 그룹
- `labs.ts`: 실험 아이디어 목록

프로젝트를 추가하려면 `projects.ts` 배열에 객체를 하나 더 넣으면 됩니다.

```ts
{
  title: "New Project",
  year: "2026",
  description: "프로젝트 설명",
  outcome: "만든 결과",
  tags: ["Next.js", "Tailwind CSS"]
}
```
