import type { Metadata } from "next";
import { AppBuildCaseStudy } from "@/components/AppBuildCaseStudy";

export const metadata: Metadata = {
  title: "Pote 제작 과정 | 김지현 Portfolio",
  description: "신진 작가와 구매자를 연결하는 온라인 갤러리 Pote의 문제 정의, 비즈니스 모델 판단과 구현 과정을 정리했습니다."
};

export default function PoteProcessPage() {
  return (
    <AppBuildCaseStudy
      theme="pote"
      eyebrow={{ kr: "POTE · ART GALLERY PRODUCT BUILD", en: "POTE · ART GALLERY PRODUCT BUILD" }}
      title={{ kr: "Pote 제작 과정", en: "Building Pote" }}
      summary={{
        kr: "신진·아마추어 작가가 작품을 알릴 곳이 마땅치 않고, 구매자는 작품을 어디서 어떻게 검토해야 할지 애매한 문제에서 출발했습니다. 작품·작가 정보, 취향 기반 탐색, 실제 공간 미리보기와 전시 정보를 한 흐름으로 묶어 실제 배포 서비스로 만들었습니다.",
        en: "This project began with a real problem: emerging and amateur artists had no good place to showcase their work, and buyers weren't sure where or how to evaluate a piece before reaching out. I brought artwork and artist information, taste-based exploration, a real-space preview, and exhibition data together into a single deployed service."
      }}
      demoHref="https://potegallery.com"
      repositoryHref="https://github.com/KimPooh/pote-gallery"
      problem={{
        kr: "신진 작가는 인스타그램 팔로워나 아트페어 인맥이 없으면 작품을 보여줄 곳이 마땅치 않고, 구매자는 무명 작가의 작품을 어디서 어떻게 믿고 사야 할지 판단하기 어렵습니다. 동시에 운영자가 직접 판매를 중개하면(가격 협의, 결제, 배송까지 전부 대행) 작가가 한두 명만 늘어도 감당하기 어려워질 위험이 있었습니다.",
        en: "Without Instagram followers or art-fair connections, emerging artists have no good venue to show their work, and buyers find it hard to judge where and how to trust a purchase from an unknown artist. At the same time, if the operator directly brokers every sale — negotiating price, handling payment, and arranging shipping — the workload becomes unmanageable after just one or two more artists join."
      }}
      goal={{
        kr: "작품을 처음 구매하는 방문자도 작품과 작가를 충분히 검토한 뒤 문의할 수 있도록, 다중 작가 작품 카탈로그·취향 탐색·실제 공간 미리보기·전시 정보 자동 갱신을 하나의 배포된 웹서비스로 구현하는 것이 목표였습니다.",
        en: "The goal was to let even a first-time art buyer thoroughly review a piece and its artist before reaching out, by implementing a multi-artist artwork catalog, taste-based exploration, a real-space preview, and automatically updated exhibition information as a single deployed web service."
      }}
      steps={[
        {
          question: { kr: "왜 구매 흐름에서 탐색 경험을 먼저 설계했나?", en: "Why did I design the exploration experience before the purchase flow?" },
          reason: {
            kr: "작품 구매를 고민하는 방문자에게는 결제 절차보다 작품·작가 정보와 실제 공간에서의 모습, 취향에 맞는 선택지를 확인하는 과정이 먼저 필요했습니다.",
            en: "For a visitor considering a purchase, checking the artwork and artist information, how the piece looks in a real space, and options that match their taste matters more upfront than the checkout process itself."
          },
          decision: {
            kr: "작품·작가 탐색, 검색·필터, 찜, 문의와 실제 공간 미리보기를 연결해 방문자가 작품을 검토하고 다음 행동을 결정할 수 있는 흐름으로 구성했습니다.",
            en: "I connected artwork/artist browsing, search and filters, favoriting, inquiries, and a real-space preview into a single flow so visitors can review a piece and decide their next action."
          }
        },
        {
          question: { kr: "왜 실시간 전시 API 대신 정적 데이터 스냅샷을 택했나?", en: "Why did I choose a static data snapshot instead of a live exhibition API?" },
          reason: {
            kr: "실시간으로 연동하려던 한국 문화공공데이터광장 전시 API가 Vercel 서버 인프라에서는 안정적으로 응답하지 않는다는 사실을 확인했습니다.",
            en: "I confirmed that the Korea Public Data Portal's exhibition API, which I originally wanted to call live, didn't respond reliably from Vercel's server infrastructure."
          },
          decision: {
            kr: "GitHub Actions가 매일 전시 데이터를 수집·정제해 정적 JSON 스냅샷을 갱신하도록 바꿨습니다. 서비스는 외부 API 호출 없이 빠르게 카탈로그를 제공하면서도 최신 전시 정보를 반영합니다.",
            en: "I switched to a GitHub Actions workflow that collects and cleans exhibition data daily and updates a static JSON snapshot. The service now serves the catalog quickly with no external API call at request time, while still reflecting up-to-date exhibition information."
          }
        },
        {
          question: { kr: "왜 '오렌지로 바꿨다'는 색이 계속 버건디처럼 보인다는 피드백이 반복됐나?", en: "Why did feedback keep saying the color I 'changed to orange' still looked burgundy?" },
          reason: {
            kr: "처음에는 색을 눈으로만 보고 골라서, 실제로는 색상(Hue) 값이 여전히 9~18도(빨강에 가까운 톤)에 머물러 있었습니다.",
            en: "I had originally picked the color by eye alone, so the actual hue value was still sitting at 9–18° — a tone close to red — even though it looked like a change to me."
          },
          decision: {
            kr: "실제 HSL 색상 값을 계산해서 25~35도(진짜 오렌지 톤) 범위로 전체 팔레트를 다시 잡았습니다. 이후로는 '눈대중'이 아니라 색상·대비 수치를 먼저 계산해 검증하는 방식으로 작업 순서를 바꿨습니다.",
            en: "I calculated the actual HSL values and rebuilt the entire palette to sit in the 25–35° range, a genuine orange tone. From then on I changed my process to calculate and verify hue and contrast numbers first, instead of judging color by eye."
          }
        },
        {
          question: { kr: "브랜드 마크가 '잘려 보인다'는 신고가 반복된 진짜 원인은?", en: "What was the real cause behind repeated reports that the brand mark 'looked clipped'?" },
          reason: {
            kr: "직접 계산해보니 실제로는 클리핑이 아니라, 그라데이션의 어두운 쪽 색이 어두운 배경과 대비비 1.25(기준 3.0)에 불과해 흐려져 보이는 문제였습니다.",
            en: "When I actually calculated it, the issue wasn't clipping at all — the dark end of the gradient had a contrast ratio of only 1.25 against the dark background (the standard is 3.0), which made it look faded rather than cut off."
          },
          decision: {
            kr: "브랜드 마크류는 밝은 색 구간만 쓰는 완전 불투명 그라데이션 규칙으로 통일했습니다. 이후 프로필 이미지·파비콘 같은 브랜드 자산은 실제 브라우저에서 렌더링해 글자의 바운딩 박스를 수치로 검증한 뒤 내보내는 방식으로 만들었습니다.",
            en: "I standardized every brand mark on a fully opaque gradient rule that only uses the lighter portion of the range. From then on, brand assets like the profile image and favicon were rendered in an actual browser and their text bounding boxes verified numerically before being exported."
          }
        },
        {
          question: { kr: "왜 작가가 직접 판매 가격을 적게 했나?", en: "Why did I let artists enter their own sale price?" },
          reason: {
            kr: "구매자와 작가가 매번 직접 가격을 협의해야 한다면 번거로워서 문의 자체를 포기할 수 있다고 판단했습니다.",
            en: "I judged that if buyers and artists had to negotiate a price directly every single time, the friction could make buyers give up on inquiring at all."
          },
          decision: {
            kr: "작가가 작품을 등록할 때 원하는 판매가를 선택 입력하도록 필드를 추가했습니다. 가격이 설정된 작품은 상태 문구 대신 가격을 그대로 노출하고, 설정되지 않은 작품은 임의로 추정하지 않습니다.",
            en: "I added an optional field so artists can enter their desired sale price when registering a piece. Artworks with a price set show that price directly instead of a status message, and artworks without one are never assigned an arbitrary estimate."
          }
        }
      ]}
      flow={[
        { kr: "신진 작가 노출 부족과 구매자 탐색 어려움 정의", en: "Defined the problem: limited visibility for emerging artists and difficult discovery for buyers" },
        { kr: "작품·작가·전시 정보를 잇는 탐색 흐름 설계", en: "Designed an exploration flow linking artwork, artist, and exhibition information" },
        { kr: "5명 작가 98점의 한국어·영어 작품 카탈로그 구현", en: "Built a bilingual (Korean/English) catalog of 98 works from 5 artists" },
        { kr: "Vercel 인프라 제약을 확인하고 정적 데이터 스냅샷 파이프라인으로 전환", en: "Identified Vercel infrastructure constraints and switched to a static data snapshot pipeline" },
        { kr: "취향 탐색과 실제 공간 미리보기로 구매 전 검토 경험 확장", en: "Expanded the pre-purchase review experience with taste-based exploration and a real-space preview" },
        { kr: "작가 제출·관리자 검토와 구매 문의 흐름 연결", en: "Connected the artist submission/admin review flow with the purchase inquiry flow" },
        { kr: "Vercel 프로덕션 배포와 운영", en: "Deployed to production on Vercel and operated the service" }
      ]}
      implemented={[
        { kr: "5명 작가 98점의 한국어·영어 작품 갤러리", en: "A bilingual (Korean/English) gallery of 98 works from 5 artists" },
        { kr: "작품·작가 탐색, 검색·필터와 찜", en: "Artwork/artist browsing, search and filters, and favoriting" },
        { kr: "실제 문화공공데이터광장 전시 데이터 자동 갱신(정적 스냅샷 방식)", en: "Automatic updates from the real Public Data Portal exhibition data (via a static snapshot pipeline)" },
        { kr: "취향 추천 퀴즈로 작품·전시 탐색", en: "A taste-recommendation quiz for exploring artworks and exhibitions" },
        { kr: "실제 공간 미리보기", en: "A real-space preview" },
        { kr: "작가 제출·관리자 검토와 구매 문의 흐름", en: "An artist submission/admin review flow and purchase inquiry flow" },
        { kr: "Vercel 프로덕션 배포", en: "Production deployment on Vercel" }
      ]}
      next={[
        { kr: "신규 작가 온보딩 확대", en: "Expanding onboarding for new artists" },
        { kr: "구매 문의 이후의 고객 관리 흐름 고도화", en: "Improving the customer-management flow after a purchase inquiry" },
        { kr: "전시·작품 추천 경험 개선", en: "Improving the exhibition and artwork recommendation experience" }
      ]}
    />
  );
}
