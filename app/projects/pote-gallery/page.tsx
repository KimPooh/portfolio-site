import Link from "next/link";
import {
  ArrowLeft,
  Compass,
  ExternalLink,
  Globe,
  Landmark,
  Tag
} from "lucide-react";

const features = [
  [Globe, "10개 언어 다국어 갤러리", "한국어·영어를 포함한 10개 언어와 아랍어 RTL 레이아웃까지 지원합니다."],
  [Compass, "취향 추천 퀴즈", "몇 장의 그림을 고르면 색감과 분위기를 기준으로 취향과 맞는 작품·전시를 추천합니다."],
  [Landmark, "실제 전시 데이터 연동", "문화공공데이터광장의 실제 전시 정보를 지역별로 볼 수 있는 카탈로그로 제공합니다."],
  [Tag, "작가가 직접 정하는 가격", "협의를 부담스러워하는 작가를 위해, 원하는 판매가를 직접 입력해 그대로 노출합니다."]
] as const;

const decisions = [
  ["직접 판매 대신 연결자로", "판매를 직접 대행하면 작가가 조금만 늘어도 운영이 감당하기 어려워질 위험이 있었습니다.", "가격 협의·결제·배송은 작가와 구매자가 직접 진행하고, 판매 성사 시 10%만 신고제로 받는 구조로 좁혔습니다."],
  ["실시간 API 대신 정적 데이터 스냅샷", "연동하려던 전시 데이터 API가 Vercel 서버 인프라에서는 도메인 자체가 응답하지 않는 것을 확인했습니다.", "사용자 PC의 예약 작업이 매일 데이터를 받아 정적 JSON으로 커밋하고, 바뀔 때만 재배포하도록 바꿨습니다."],
  ["색은 눈대중이 아니라 계산으로", "오렌지로 바꿨다고 생각했지만 실제 색상값은 여전히 빨강에 가까운 9~18도에 머물러 있었습니다.", "HSL 색상값을 직접 계산해 25~35도(실제 오렌지 톤) 범위로 팔레트 전체를 재조정했습니다."],
  ["'잘려 보인다'는 신고의 진짜 원인 추적", "실제로는 클리핑이 아니라 그라데이션의 어두운 색이 배경과 대비비 1.25에 불과해 흐려 보이는 문제였습니다.", "밝은 색 구간만 쓰는 불투명 그라데이션 규칙으로 통일하고, 브랜드 자산은 렌더링된 바운딩 박스를 수치로 검증한 뒤 내보내도록 바꿨습니다."]
] as const;

function ProductPreview() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0D2822] p-5 text-white shadow-[0_30px_80px_rgb(13_40_34/0.35)]">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="text-[10px] font-black tracking-[0.18em] text-[#F0B36F]">POTE</p>
          <p className="mt-1 text-sm font-black">신진 작가 온라인 갤러리</p>
        </div>
        <span className="rounded-full bg-[#F0B36F]/20 px-3 py-1 text-[10px] font-black text-[#F7D9B0]">LIVE APP</span>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3">
        <span className="h-16 rounded-lg" style={{ background: "linear-gradient(135deg,#f6ca98,#985216)" }} />
        <span className="h-16 rounded-lg bg-[#173F3B]" />
        <span className="h-16 rounded-lg" style={{ background: "linear-gradient(135deg,#ec9951,#62320e)" }} />
      </div>
      <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-4">
        <div className="flex justify-between">
          <p className="text-xs font-black">판매가</p>
          <p className="text-[10px] text-white/40">작가 직접 설정</p>
        </div>
        <p className="mt-2 text-base font-black text-[#F0B36F]">350,000원</p>
        <div className="mt-3 flex flex-wrap gap-1.5 text-[9px] font-bold text-white/55">
          {["KO", "EN", "JA", "ZH", "AR"].map((lang) => (
            <span key={lang} className="rounded bg-white/10 px-2 py-1">{lang}</span>
          ))}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-4 border-t border-white/10 pt-4 text-center text-[9px] font-bold text-white/45">
        {["갤러리", "취향찾기", "전시", "작가지원"].map((item, index) => (
          <span key={item} className={index === 0 ? "text-[#F0B36F]" : ""}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export default function PoteGalleryPage() {
  return (
    <main className="min-h-screen bg-[#F5EFE6] text-[#202329]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#F5EFE6]/95 backdrop-blur">
        <div className="mx-auto flex min-h-16 max-w-[1240px] items-center justify-between px-5 sm:px-8">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-bold text-black/65 hover:text-black"><ArrowLeft className="h-4 w-4" aria-hidden="true" /> 프로젝트</Link>
          <span className="text-xs font-black text-[#A85A1E]">ART GALLERY · CONNECTOR PLATFORM</span>
        </div>
      </header>

      <section className="border-b border-black/10 bg-[#F7E6D3]">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-black tracking-[0.16em] text-[#A85A1E]">ART GALLERY · MULTILINGUAL WEB APP</p>
            <h1 className="mt-5 text-4xl font-black leading-[1.12] [word-break:keep-all] sm:text-6xl">작가와 구매자를<br />연결만 하는 갤러리, Pote</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-black/60 sm:text-lg">신진·아마추어 작가의 작품을 소개하고, 마음이 가는 작품을 만나면 작가와 직접 연결해주는 온라인 갤러리입니다. 판매를 직접 대행하는 대신 연결에만 집중하는 비즈니스 모델을 세우고, 다국어 지원과 실제 전시 데이터 연동까지 갖춘 서비스로 배포했습니다.</p>
            <div className="mt-8 flex flex-wrap gap-2">{["Next.js", "TypeScript", "i18n · 10 Languages", "RTL", "Vercel", "Static Data Pipeline"].map((tag) => <span key={tag} className="rounded-full border border-[#A85A1E]/25 bg-white/45 px-3 py-1.5 text-xs font-bold text-[#8A4A18]">{tag}</span>)}</div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="https://pote-gallery.vercel.app" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-md bg-[#0D2822] px-5 text-sm font-black text-white transition hover:-translate-y-0.5">
                배포 앱 보기 <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link href="/projects/pote-gallery/process" className="inline-flex min-h-12 items-center gap-2 rounded-md border border-[#A85A1E]/35 bg-white/45 px-5 text-sm font-black text-[#8A4A18] transition hover:-translate-y-0.5 hover:bg-white/70">
                제작 과정 보기 <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <ProductPreview />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <p className="text-xs font-black text-[#A85A1E]">PRODUCT SCOPE</p><h2 className="mt-3 text-3xl font-black sm:text-5xl">현재 직접 작동하는 핵심 기능</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(([Icon, title, body]) => <article key={title} className="rounded-2xl border border-black/10 bg-white/55 p-5"><Icon className="h-6 w-6 text-[#A85A1E]" aria-hidden="true" /><h3 className="mt-5 text-lg font-black [word-break:keep-all]">{title}</h3><p className="mt-3 text-sm leading-7 text-black/55">{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#0D2822] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <p className="text-xs font-black text-[#F0B36F]">DECISION HISTORY</p><h2 className="mt-3 text-3xl font-black sm:text-5xl">기능보다 먼저 정한 원칙</h2>
          <div className="mt-10">{decisions.map(([title, context, decision], index) => (
            <article key={title} className="grid gap-4 border-t border-white/15 py-7 lg:grid-cols-[4rem_18rem_1fr_1fr]">
              <span className="text-xs font-black text-white/35">{String(index + 1).padStart(2, "0")}</span><h3 className="text-lg font-black leading-7 [word-break:keep-all]">{title}</h3>
              <div><p className="text-[10px] font-black text-[#F0A58D]">배경</p><p className="mt-3 text-sm leading-7 text-white/55">{context}</p></div>
              <div><p className="text-[10px] font-black text-[#86EFAC]">결정</p><p className="mt-3 text-sm leading-7 text-white/80">{decision}</p></div>
            </article>))}</div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-white/40 py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div><h2 className="text-3xl font-black">현재 상태와 다음 단계</h2><p className="mt-5 text-sm leading-7 text-black/55">실제 작가 8작품과 함께 Vercel 프로덕션에 배포했고, 인스타그램 계정(@poteart.gallery)도 함께 운영합니다. 작가 신청과 승인은 아직 이메일과 수동 반영으로 이루어지며, 이 지점이 다음 확장의 시작점입니다.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">{["작가 셀프 업로드와 관리자 승인 화면", "판매 정산 자동화 검토", "신규 작가 온보딩 확대", "결제·배송 연동 필요성 재검토"].map((item, index) => <div key={item} className="rounded-xl border border-black/10 bg-[#F5EFE6] p-5"><span className="text-xs font-black text-[#A85A1E]">NEXT {index + 1}</span><p className="mt-3 text-sm font-bold leading-7 [word-break:keep-all]">{item}</p></div>)}</div>
        </div>
      </section>
    </main>
  );
}
