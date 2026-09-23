import type { Metadata } from "next";
import { AppBuildCaseStudy } from "@/components/AppBuildCaseStudy";

export const metadata: Metadata = {
  title: "ARTE Visit Companion 제작 과정 | 김지현 Portfolio",
  description: "작품과 관람객 유형에 맞춘 이중 언어 관람 가이드 제품의 문제 정의, 판단과 구현 과정을 정리했습니다."
};

const bi = (kr: string, en: string) => ({ kr, en });

export default function ArteProcessPage() {
  return (
    <AppBuildCaseStudy
      theme="arte"
      eyebrow={bi("ARTE VISIT COMPANION · PRODUCT BUILD", "ARTE VISIT COMPANION · PRODUCT BUILD")}
      title={bi("ARTE Visit Companion 제작 과정", "Building ARTE Visit Companion")}
      summary={bi(
        "작품 설명을 읽는 데서 끝나지 않고, 관람객의 상황에 맞는 질문과 동선을 제공하는 전시 관람 보조 제품을 만든 과정입니다.",
        "The process of building an exhibition companion that goes beyond reading an artwork description, offering questions and a route suited to each visitor's situation."
      )}
      demoHref="/arte-companion"
      repositoryHref="https://github.com/KimPooh/arte-visit-companion"
      problem={bi(
        "같은 작품을 보더라도 아이와 함께 온 관람객, 처음 방문한 사람, 외국인, 조용히 감상하고 싶은 사람에게 필요한 안내는 다릅니다. 고정된 설명만으로는 각자의 관람 방식에 맞추기 어렵다고 생각했습니다.",
        "Even looking at the same artwork, a visitor with kids, a first-timer, an international visitor, and someone who wants to view quietly all need different guidance. A single fixed description can't fit every viewing style."
      )}
      goal={bi(
        "작품과 관람객 유형을 고르면 한국어·영어 설명, 감상 질문, 추천 동선을 제공하고, 저장된 반응을 운영자 관점에서도 확인할 수 있는 작동형 프로토타입을 만드는 것이 목표였습니다.",
        "The goal was a working prototype: pick an artwork and a visitor type to get a Korean/English explanation, reflection questions, and a recommended route, with saved reactions also viewable from an operator's perspective."
      )}
      steps={[
        {
          question: bi("왜 작품보다 관람객 유형을 먼저 고려했나?", "Why consider visitor type before the artwork itself?"),
          reason: bi(
            "좋은 설명도 관람객의 상황과 목적에 맞지 않으면 읽히지 않을 수 있습니다.",
            "Even a good explanation can go unread if it doesn't fit the visitor's situation and purpose."
          ),
          decision: bi(
            "가족·첫 방문·외국인·조용한 감상 네 유형으로 안내 길이와 질문 방식을 다르게 설계했습니다.",
            "Designed guide length and question style differently across four types: family, first-time visitor, international visitor, and quiet viewing."
          )
        },
        {
          question: bi("왜 작품 선택을 이미지 카드로 바꿨나?", "Why switch artwork selection to image cards?"),
          reason: bi(
            "작품 제목만 나열하면 전시장에서 현재 보고 있는 작품을 빠르게 찾기 어렵습니다.",
            "Listing only titles makes it hard to quickly find the artwork you're standing in front of in the gallery."
          ),
          decision: bi(
            "작품의 색감, 전시 구역, 예상 체류 시간을 함께 보여주는 시각 중심 선택 방식으로 바꿨습니다.",
            "Switched to a visual-first picker that shows the artwork's color palette, exhibition zone, and expected viewing time together."
          )
        },
        {
          question: bi("왜 한국어와 영어를 같이 보여주나?", "Why show Korean and English together?"),
          reason: bi(
            "언어를 전환할 때 원문 맥락을 비교하기 어렵고 동행자끼리 다른 언어를 쓰는 상황도 고려해야 했습니다.",
            "Switching languages back and forth makes it hard to compare against the original context, and companions in the same group often use different languages."
          ),
          decision: bi(
            "생성 결과에서 한국어와 영어를 한 화면에 계층적으로 배치해 함께 읽을 수 있게 했습니다.",
            "Laid out Korean and English together on one screen in a clear hierarchy so both can be read side by side."
          )
        },
        {
          question: bi("왜 추천 동선과 운영자 화면까지 넣었나?", "Why add a recommended route and an operator view?"),
          reason: bi(
            "설명만 제공하면 다음 행동으로 이어지지 않고, 실제 운영 개선에 사용할 관람 반응도 남지 않습니다.",
            "An explanation alone doesn't lead to a next action, and leaves nothing behind that operators could use to improve the exhibition."
          ),
          decision: bi(
            "다음 작품 추천과 질문 저장 로그, 예상 관심도를 하나의 흐름으로 연결했습니다.",
            "Connected the next-artwork recommendation, a saved-question log, and an estimated interest score into a single flow."
          )
        },
        {
          question: bi("왜 실제 AI처럼 과장하지 않았나?", "Why not oversell this as a real AI?"),
          reason: bi(
            "현재 버전은 외부 LLM이 아니라 미리 설계한 관람객·작품 조합 규칙으로 결과를 만듭니다.",
            "The current version generates results from pre-designed visitor/artwork combination rules, not an external LLM."
          ),
          decision: bi(
            "작동 범위를 프로토타입으로 명시하고, 실시간 생성형 AI와 데이터 저장은 다음 확장 범위로 분리했습니다.",
            "Labeled the current scope explicitly as a prototype, and split real-time generative AI and persistent data storage out as future scope."
          )
        }
      ]}
      flow={[
        bi("관람객별로 필요한 설명이 다르다는 문제 정의", "Framed the problem: different visitors need different explanations"),
        bi("작품·관람객·가이드·동선의 핵심 흐름 설정", "Set the core flow of artwork, visitor, guide, and route"),
        bi("이미지 중심 작품 카드와 관람객 유형 선택 구현", "Built the image-first artwork cards and visitor-type picker"),
        bi("한국어와 영어 안내 및 질문 조합 설계", "Designed the Korean/English guide and question combinations"),
        bi("추천 동선과 질문 저장 로그 연결", "Connected the recommended route and the saved-question log"),
        bi("모바일과 데스크톱에서 전체 사용 흐름 검증", "Verified the full flow on both mobile and desktop")
      ]}
      implemented={[
        bi("세 작품의 시각 중심 선택 화면", "A visual-first picker for three artworks"),
        bi("네 가지 관람객 유형 선택", "Four selectable visitor types"),
        bi("한국어·영어 관람 가이드 동시 제공", "Korean and English visit guides shown together"),
        bi("상황별 감상 질문 선택과 저장", "Situational reflection questions, selectable and saved"),
        bi("관람객 유형별 추천 동선", "A recommended route per visitor type"),
        bi("저장 로그와 예상 관심도 운영자 화면", "An operator view with the saved log and estimated interest")
      ]}
      next={[
        bi("실제 작품 이미지와 전시 콘텐츠 데이터 연동", "Connecting real artwork images and exhibition content data"),
        bi("LLM 기반 실시간 설명과 질문 생성", "LLM-based real-time explanation and question generation"),
        bi("다국어 범위 확대와 접근성 음성 안내", "Expanding language coverage and adding accessible voice guidance"),
        bi("관람 로그 데이터베이스와 운영 대시보드", "A visit-log database and operations dashboard"),
        bi("전시장 QR·위치 정보 기반 작품 자동 선택", "Automatic artwork selection based on in-gallery QR/location data")
      ]}
    />
  );
}
