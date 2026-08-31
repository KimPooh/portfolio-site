import Link from "next/link";
import {
  ArrowLeft,
  Banknote,
  DatabaseBackup,
  ExternalLink,
  FileSpreadsheet,
  Landmark,
  LockKeyhole,
  Smartphone,
  WalletCards
} from "lucide-react";

const features = [
  [WalletCards, "자산 관리", "예금·적금·주식·가상자산·청약저축 등 보유 자산과 가치 변화를 기록합니다."],
  [Landmark, "대출 관리", "원금, 잔액, 금리, 상환방식과 만기일을 쉬운 설명과 함께 관리합니다."],
  [Banknote, "현금흐름", "월별 소득과 고정·변동지출, 대출 상환 후 남는 금액을 함께 확인합니다."],
  [FileSpreadsheet, "거래내역 가져오기", "은행·카드 CSV를 미리 확인하고 수정·제외한 뒤 중복 없이 저장합니다."]
] as const;

const decisions = [
  ["외부 연동보다 안전한 로컬 MVP부터", "은행 API는 개인 개발자가 즉시 연결하기 어렵고 실제 금융정보를 다루는 순간 인증·보안 범위가 크게 늘어납니다.", "계좌 스크래핑은 제외하고 로컬 저장과 CSV 가져오기로 먼저 사용 가치를 검증했습니다."],
  ["저장보다 복구 가능성을 먼저 검증", "개인 금융 앱은 기능 수보다 데이터를 잃지 않는 것이 더 중요합니다.", "백업, 전체 삭제, 복원과 트랜잭션 롤백을 격리된 테스트 DB에서 자동 검증했습니다."],
  ["금융 용어를 안다고 가정하지 않기", "취득일, 원금, 잔액, 변동금리 같은 필드는 초보자에게 입력 기준이 불명확합니다.", "각 입력 아래에 쉬운 설명을 제공하고 국내 금융회사를 목록에서 선택하도록 바꿨습니다."],
  ["갤럭시 실기기로 확인", "파일 선택, datalist, 쿠키, 하단 안전영역은 모바일 브라우저에서 다르게 동작했습니다.", "갤럭시에서 직접 사용하며 네이티브 선택창, 파일 버튼, 하단 탭과 로컬 세션을 개선했습니다."]
] as const;

function ProductPreview() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#111827] p-5 text-white shadow-[0_30px_80px_rgb(15_23_42/0.32)]">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div><p className="text-[10px] font-black tracking-[0.18em] text-[#A5B4FC]">PERSONAL FINANCE</p><p className="mt-1 text-sm font-black">개인 자산관리</p></div>
        <span className="rounded-full bg-[#6366F1]/20 px-3 py-1 text-[10px] font-black text-[#C7D2FE]">LIVE APP</span>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        {[["총자산", "₩42,800,000"], ["대출잔액", "₩18,500,000"], ["월 잉여자금", "₩1,240,000"], ["순자산", "₩24,300,000"]].map(([label, value], index) => (
          <div key={label} className={`rounded-xl border p-4 ${index === 3 ? "border-[#818CF8]/45 bg-[#6366F1]/15" : "border-white/10 bg-white/[0.04]"}`}>
            <p className="text-[10px] font-bold text-white/45">{label}</p><p className="mt-2 text-sm font-black sm:text-base">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-4">
        <div className="flex justify-between"><p className="text-xs font-black">자산 구성</p><p className="text-[10px] text-white/40">2026.08</p></div>
        <div className="mt-5 flex h-3 overflow-hidden rounded-full bg-white/10"><span className="w-[42%] bg-[#6366F1]" /><span className="w-[28%] bg-[#22C55E]" /><span className="w-[18%] bg-[#38BDF8]" /><span className="w-[12%] bg-[#F59E0B]" /></div>
        <div className="mt-4 grid grid-cols-2 gap-2 text-[10px] text-white/55"><span>예금·적금 42%</span><span>주식·ETF 28%</span><span>연금 18%</span><span>기타 12%</span></div>
      </div>
      <div className="mt-4 grid grid-cols-4 border-t border-white/10 pt-4 text-center text-[9px] font-bold text-white/45">{["대시보드", "자산", "대출", "현금흐름"].map((item, index) => <span key={item} className={index === 0 ? "text-[#A5B4FC]" : ""}>{item}</span>)}</div>
    </div>
  );
}

export default function PersonalFinanceManagerPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#202329]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#F4F1EA]/95 backdrop-blur">
        <div className="mx-auto flex min-h-16 max-w-[1240px] items-center justify-between px-5 sm:px-8">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-bold text-black/65 hover:text-black"><ArrowLeft className="h-4 w-4" aria-hidden="true" /> 프로젝트</Link>
          <span className="text-xs font-black text-[#4F46E5]">SECURITY-FIRST PRODUCT</span>
        </div>
      </header>

      <section className="border-b border-black/10 bg-[#E5E7FA]">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-black tracking-[0.16em] text-[#4F46E5]">PERSONAL FINANCE · MOBILE WEB APP</p>
            <h1 className="mt-5 text-4xl font-black leading-[1.12] [word-break:keep-all] sm:text-6xl">금융을 몰라도 시작할 수 있는<br />개인 자산관리</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-black/60 sm:text-lg">자산, 대출, 월 현금흐름을 한곳에서 이해하고 기록하도록 만든 개인용 금융 관리 제품입니다. 민감정보 보호와 데이터 복구 가능성을 기능 설계의 출발점으로 삼았습니다.</p>
            <div className="mt-8 flex flex-wrap gap-2">{["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Neon", "Vercel", "Mobile UX"].map((tag) => <span key={tag} className="rounded-full border border-[#4F46E5]/20 bg-white/45 px-3 py-1.5 text-xs font-bold text-[#4138B8]">{tag}</span>)}</div>
            <a href="https://personal-finance-manager-roan.vercel.app/demo" target="_blank" rel="noreferrer" className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-md bg-[#202329] px-5 text-sm font-black text-white transition hover:-translate-y-0.5">
              배포 앱 보기 <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <ProductPreview />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <p className="text-xs font-black text-[#4F46E5]">PRODUCT SCOPE</p><h2 className="mt-3 text-3xl font-black sm:text-5xl">현재 직접 작동하는 핵심 기능</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(([Icon, title, body]) => <article key={title} className="rounded-2xl border border-black/10 bg-white/55 p-5"><Icon className="h-6 w-6 text-[#4F46E5]" aria-hidden="true" /><h3 className="mt-5 text-lg font-black">{title}</h3><p className="mt-3 text-sm leading-7 text-black/55">{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#202329] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <p className="text-xs font-black text-[#A5B4FC]">DECISION HISTORY</p><h2 className="mt-3 text-3xl font-black sm:text-5xl">기능보다 먼저 정한 원칙</h2>
          <div className="mt-10">{decisions.map(([title, context, decision], index) => (
            <article key={title} className="grid gap-4 border-t border-white/15 py-7 lg:grid-cols-[4rem_18rem_1fr_1fr]">
              <span className="text-xs font-black text-white/35">{String(index + 1).padStart(2, "0")}</span><h3 className="text-lg font-black leading-7">{title}</h3>
              <div><p className="text-[10px] font-black text-[#F0A58D]">배경</p><p className="mt-3 text-sm leading-7 text-white/55">{context}</p></div>
              <div><p className="text-[10px] font-black text-[#86EFAC]">결정</p><p className="mt-3 text-sm leading-7 text-white/80">{decision}</p></div>
            </article>))}</div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1240px] gap-5 px-5 sm:px-8 lg:grid-cols-3">
          <article className="rounded-2xl border border-black/10 bg-white/60 p-6"><LockKeyhole className="h-7 w-7 text-[#4F46E5]" /><h2 className="mt-5 text-2xl font-black">Security</h2><ul className="mt-5 space-y-3 text-sm leading-7 text-black/60"><li>민감 텍스트 필드 암호화 저장</li><li>세션 로그인과 시도 횟수 제한</li><li>파서 예외·거래 원문 노출 차단</li></ul></article>
          <article className="rounded-2xl border border-black/10 bg-[#E8F2EC] p-6"><DatabaseBackup className="h-7 w-7 text-[#287567]" /><h2 className="mt-5 text-2xl font-black">Data Safety</h2><ul className="mt-5 space-y-3 text-sm leading-7 text-black/60"><li>전체 데이터 백업·삭제·복원</li><li>손상 백업과 다른 키 사전 거절</li><li>트랜잭션 실패 전체 롤백</li></ul></article>
          <article className="rounded-2xl border border-black/10 bg-[#F6DDD4] p-6"><Smartphone className="h-7 w-7 text-[#A4513A]" /><h2 className="mt-5 text-2xl font-black">Verification</h2><ul className="mt-5 space-y-3 text-sm leading-7 text-black/60"><li>자동 테스트 205개 통과</li><li>lint·TypeScript·빌드 검증</li><li>갤럭시 실기기 점검</li></ul></article>
        </div>
      </section>

      <section className="border-t border-black/10 bg-white/40 py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div><h2 className="text-3xl font-black">현재 상태와 다음 단계</h2><p className="mt-5 text-sm leading-7 text-black/55">Neon PostgreSQL과 Vercel 기반 운영 환경에 배포했습니다. 개인 금융정보 보호를 위해 관리자 로그인은 유지하며, 포트폴리오에서는 구현 과정과 배포 결과를 공개합니다.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">{["실제 금융사 파일 형식 확대", "초보자 첫 실행 가이드", "PWA 또는 안전한 배포 환경", "공식 금융 API 연동 검토"].map((item, index) => <div key={item} className="rounded-xl border border-black/10 bg-[#F4F1EA] p-5"><span className="text-xs font-black text-[#4F46E5]">NEXT {index + 1}</span><p className="mt-3 text-sm font-bold leading-7">{item}</p></div>)}</div>
        </div>
      </section>
    </main>
  );
}
