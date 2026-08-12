import type { Metadata } from "next";
import { AppBuildCaseStudy } from "@/components/AppBuildCaseStudy";

export const metadata: Metadata = {
  title: "ARTE Visit Companion 제작 과정 | 김지현 Portfolio",
  description: "작품과 관람객 유형에 맞춘 이중 언어 관람 가이드 제품의 문제 정의, 판단과 구현 과정을 정리했습니다."
};

export default function ArteProcessPage() {
  return (
    <AppBuildCaseStudy
      theme="arte"
      eyebrow="ARTE VISIT COMPANION · PRODUCT BUILD"
      title="ARTE Visit Companion 제작 과정"
      summary="작품 설명을 읽는 데서 끝나지 않고, 관람객의 상황에 맞는 질문과 동선을 제공하는 전시 관람 보조 제품을 만든 과정입니다."
      demoHref="/arte-companion"
      repositoryHref="https://github.com/KimPooh/arte-visit-companion"
      problem="같은 작품을 보더라도 아이와 함께 온 관람객, 처음 방문한 사람, 외국인, 조용히 감상하고 싶은 사람에게 필요한 안내는 다릅니다. 고정된 설명만으로는 각자의 관람 방식에 맞추기 어렵다고 생각했습니다."
      goal="작품과 관람객 유형을 고르면 한국어·영어 설명, 감상 질문, 추천 동선을 제공하고, 저장된 반응을 운영자 관점에서도 확인할 수 있는 작동형 프로토타입을 만드는 것이 목표였습니다."
      steps={[
        { question: "왜 작품보다 관람객 유형을 먼저 고려했나?", reason: "좋은 설명도 관람객의 상황과 목적에 맞지 않으면 읽히지 않을 수 있습니다.", decision: "가족·첫 방문·외국인·조용한 감상 네 유형으로 안내 길이와 질문 방식을 다르게 설계했습니다." },
        { question: "왜 작품 선택을 이미지 카드로 바꿨나?", reason: "작품 제목만 나열하면 전시장에서 현재 보고 있는 작품을 빠르게 찾기 어렵습니다.", decision: "작품의 색감, 전시 구역, 예상 체류 시간을 함께 보여주는 시각 중심 선택 방식으로 바꿨습니다." },
        { question: "왜 한국어와 영어를 같이 보여주나?", reason: "언어를 전환할 때 원문 맥락을 비교하기 어렵고 동행자끼리 다른 언어를 쓰는 상황도 고려해야 했습니다.", decision: "생성 결과에서 한국어와 영어를 한 화면에 계층적으로 배치해 함께 읽을 수 있게 했습니다." },
        { question: "왜 추천 동선과 운영자 화면까지 넣었나?", reason: "설명만 제공하면 다음 행동으로 이어지지 않고, 실제 운영 개선에 사용할 관람 반응도 남지 않습니다.", decision: "다음 작품 추천과 질문 저장 로그, 예상 관심도를 하나의 흐름으로 연결했습니다." },
        { question: "왜 실제 AI처럼 과장하지 않았나?", reason: "현재 버전은 외부 LLM이 아니라 미리 설계한 관람객·작품 조합 규칙으로 결과를 만듭니다.", decision: "작동 범위를 프로토타입으로 명시하고, 실시간 생성형 AI와 데이터 저장은 다음 확장 범위로 분리했습니다." }
      ]}
      flow={["관람객별로 필요한 설명이 다르다는 문제 정의", "작품·관람객·가이드·동선의 핵심 흐름 설정", "이미지 중심 작품 카드와 관람객 유형 선택 구현", "한국어와 영어 안내 및 질문 조합 설계", "추천 동선과 질문 저장 로그 연결", "모바일과 데스크톱에서 전체 사용 흐름 검증"]}
      implemented={["세 작품의 시각 중심 선택 화면", "네 가지 관람객 유형 선택", "한국어·영어 관람 가이드 동시 제공", "상황별 감상 질문 선택과 저장", "관람객 유형별 추천 동선", "저장 로그와 예상 관심도 운영자 화면"]}
      next={["실제 작품 이미지와 전시 콘텐츠 데이터 연동", "LLM 기반 실시간 설명과 질문 생성", "다국어 범위 확대와 접근성 음성 안내", "관람 로그 데이터베이스와 운영 대시보드", "전시장 QR·위치 정보 기반 작품 자동 선택"]}
    />
  );
}
