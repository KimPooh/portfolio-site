import type { Metadata } from "next";
import { AppBuildCaseStudy } from "@/components/AppBuildCaseStudy";

export const metadata: Metadata = {
  title: "개인 자산관리 제작 과정 | 김지현 Portfolio",
  description: "금융 초보자를 위한 입력 UX부터 데이터 보호, 모바일 실기기 검증과 배포까지 개인 자산관리 앱의 제작 과정을 정리했습니다."
};

export default function PersonalFinanceManagerProcessPage() {
  return (
    <AppBuildCaseStudy
      theme="finance"
      eyebrow={{ kr: "PERSONAL FINANCE · PRODUCT BUILD", en: "PERSONAL FINANCE · PRODUCT BUILD" }}
      title={{ kr: "개인 자산관리 제작 과정", en: "Building the Personal Finance Manager" }}
      summary={{
        kr: "기능을 많이 넣는 것보다, 금융을 잘 모르는 사람도 안심하고 기록할 수 있는 흐름을 만드는 데 집중했습니다. 입력 기준을 풀어 쓰는 일부터 모바일 실기기 문제, 데이터 복구와 운영 배포까지 차례로 다듬었습니다.",
        en: "Rather than packing in features, I focused on building a flow that even people unfamiliar with finance could use to record their data with confidence. I worked through it step by step — spelling out input criteria in plain language, fixing real-device mobile issues, verifying data recovery, and handling production deployment."
      }}
      demoHref="https://personal-finance-manager-roan.vercel.app/demo"
      repositoryHref="https://github.com/KimPooh/Personal-Finance-Manager"
      problem={{
        kr: "자산과 대출은 여러 금융회사에 흩어져 있고, 한곳에 모으려 해도 취득일·잔액·변동금리 같은 용어부터 막히기 쉽습니다. 게다가 개인 금융정보를 다루는 만큼 편리함만 앞세우기보다, 잘못 입력하거나 데이터를 잃었을 때 되돌릴 수 있는 구조가 필요했습니다.",
        en: "Assets and loans are scattered across multiple financial institutions, and even when you try to consolidate them, terms like acquisition date, balance, or variable rate can trip people up right away. On top of that, since the app handles personal financial information, it needed a structure that could recover from a bad entry or lost data, rather than prioritizing convenience alone."
      }}
      goal={{
        kr: "자산·대출·현금흐름을 한눈에 파악하고 상환 계획과 확인할 만한 정부정책까지 이어서 볼 수 있는 개인용 앱을 만드는 것이 목표였습니다. 동시에 실제 데이터는 관리자 로그인 뒤에 보호하고, 포트폴리오 방문자는 가상 데이터 데모만 안전하게 볼 수 있도록 경계를 나눴습니다.",
        en: "The goal was to build a personal app that shows assets, loans, and cash flow at a glance, and links through to a repayment plan and relevant government policies worth checking. At the same time, I drew a clear boundary: real data stays protected behind an admin login, while portfolio visitors can only safely view a demo with virtual data."
      }}
      steps={[
        {
          question: { kr: "왜 은행 자동연동부터 시작하지 않았나?", en: "Why didn't I start with automatic bank integration?" },
          reason: {
            kr: "실제 금융 API는 계약과 인증, 보안 요건이 따라오고 개인 프로젝트에서 계좌 스크래핑을 우회적으로 구현하는 것은 위험했습니다.",
            en: "Real financial APIs come with contracts, authentication, and security requirements, and implementing account scraping as a workaround in a personal project was too risky."
          },
          decision: {
            kr: "수동 등록과 은행·카드 CSV 미리보기부터 완성했습니다. 파일을 바로 저장하지 않고 행별 수정·제외와 중복 확인을 거치게 했습니다.",
            en: "I first completed manual entry and a bank/card CSV preview. Instead of saving a file immediately, it goes through row-level edits, exclusions, and duplicate checks."
          }
        },
        {
          question: { kr: "왜 입력칸 아래 설명을 붙였나?", en: "Why did I add explanations below each input field?" },
          reason: {
            kr: "취득일, 원금, 잔액, 상환방식처럼 익숙한 사람에게는 당연한 항목도 처음 쓰는 사람에게는 기준이 모호했습니다.",
            en: "Fields that feel obvious to someone familiar with finance — acquisition date, principal, balance, repayment method — were unclear to first-time users."
          },
          decision: {
            kr: "각 항목이 무엇을 뜻하고 어디서 확인하는지 짧게 풀어 썼습니다. 금융회사도 직접 타이핑하는 대신 국내 기관 목록에서 고를 수 있게 바꿨습니다.",
            en: "I wrote a short explanation of what each field means and where to find the value. I also changed the financial institution field from free typing to a selectable list of domestic institutions."
          }
        },
        {
          question: { kr: "왜 갤럭시에서 직접 다시 확인했나?", en: "Why did I go back and test directly on a Galaxy device?" },
          reason: {
            kr: "데스크톱에서는 정상인 파일 선택과 은행 목록이 안드로이드 브라우저에서 눌리지 않거나 다시 선택하기 어려웠고, 표와 버튼도 화면 밖으로 잘렸습니다.",
            en: "File selection and the bank list, which worked fine on desktop, were unresponsive or hard to reselect on an Android browser, and tables and buttons were getting cut off the edge of the screen."
          },
          decision: {
            kr: "파일 선택을 명시적인 버튼으로 바꾸고 기관 선택은 네이티브 선택창으로 교체했습니다. 표는 카드형 목록으로 재구성하고 하단 탭과 안전영역을 실기기 기준으로 조정했습니다.",
            en: "I changed file selection to an explicit button and replaced institution selection with the native picker. I restructured the table into a card-style list and adjusted the bottom tab bar and safe area based on the real device."
          }
        },
        {
          question: { kr: "왜 복사와 가져오기에 중복 기준이 필요한가?", en: "Why do copying and importing need duplicate-detection rules?" },
          reason: {
            kr: "지난달 항목이나 같은 거래 파일을 여러 번 가져오면 잉여자금과 통계가 조용히 틀어질 수 있습니다.",
            en: "Importing last month's entries or the same transaction file more than once could silently throw off the surplus funds figure and statistics."
          },
          decision: {
            kr: "지난달 복사는 개수까지 비교하는 방식으로, CSV는 파일·행 지문과 발생 순서를 조합하는 방식으로 중복을 막았습니다. 사용자가 수정한 표시값과 원본 거래의 식별값도 분리했습니다.",
            en: "For copying last month's data, I compared entry counts as well; for CSV imports, I combined a file/row fingerprint with occurrence order to block duplicates. I also separated the user-edited display value from the original transaction's identifier."
          }
        },
        {
          question: { kr: "왜 백업보다 복원 테스트를 먼저 챙겼나?", en: "Why did I prioritize restore testing over backup itself?" },
          reason: {
            kr: "파일을 내려받았다는 사실만으로는 실제 복구가 된다고 말할 수 없고, 다른 암호화 키나 손상 파일은 화면 전체를 깨뜨릴 수 있었습니다.",
            en: "Simply being able to download a file doesn't prove the data can actually be restored, and a mismatched encryption key or a corrupted file could break the entire screen."
          },
          decision: {
            kr: "백업 → 전체 삭제 → 복원을 실제 DB에서 왕복 검증하고, 손상 형식과 다른 키는 데이터를 지우기 전에 거절했습니다. 중간 실패는 전체 롤백되도록 테스트했습니다.",
            en: "I verified the full backup → wipe → restore round trip against the real database, and rejected corrupted formats or mismatched keys before any data was deleted. I tested that any mid-process failure rolls back completely."
          }
        },
        {
          question: { kr: "왜 실제 앱과 공개 데모를 나눴나?", en: "Why did I separate the real app from the public demo?" },
          reason: {
            kr: "로그인을 없애면 방문자의 입력이 한 DB에 섞이고 개인 데이터의 수정·삭제·백업까지 노출될 수 있습니다.",
            en: "Removing the login would mix visitor input into a single database and could expose editing, deletion, and backup of personal data."
          },
          decision: {
            kr: "실제 앱은 관리자 로그인과 암호화를 유지하고, 포트폴리오에는 DB·세션·관리 API를 전혀 호출하지 않는 가상 데이터 전용 데모를 별도 경로로 배포했습니다.",
            en: "The real app keeps its admin login and encryption, while I deployed a separate demo at its own route for the portfolio — one that runs entirely on virtual data and never calls the database, session, or admin APIs."
          }
        },
        {
          question: { kr: "왜 SQLite에서 PostgreSQL로 옮겼나?", en: "Why did I migrate from SQLite to PostgreSQL?" },
          reason: {
            kr: "로컬 파일 DB는 개인 PC에서는 간단하지만 서버리스 배포 환경에서는 파일 쓰기가 지속되지 않고 로그인 제한도 인스턴스마다 나뉩니다.",
            en: "A local file database is simple on a personal PC, but in a serverless deployment environment file writes don't persist, and login-attempt limits end up split across separate instances."
          },
          decision: {
            kr: "Neon PostgreSQL로 데이터 계층을 옮기고 로그인 제한도 DB 기반으로 바꿨습니다. 운영·개발·테스트 DB를 분리한 뒤 Vercel에 배포했습니다.",
            en: "I moved the data layer to Neon PostgreSQL and switched login-attempt limiting to be database-backed as well. After separating production, development, and test databases, I deployed to Vercel."
          }
        }
      ]}
      flow={[
        { kr: "자산·대출·현금흐름을 한곳에서 보고 싶은 문제 정의", en: "Defined the problem: wanting to see assets, loans, and cash flow in one place" },
        { kr: "금융 초보자 기준으로 카테고리와 입력 설명 정리", en: "Organized categories and input explanations for financial beginners" },
        { kr: "자산·대출·현금흐름·상환계획 핵심 흐름 구현", en: "Implemented the core asset/loan/cash-flow/repayment-plan flow" },
        { kr: "CSV 미리보기와 서버 재검증·중복 방지 설계", en: "Designed the CSV preview with server-side revalidation and duplicate prevention" },
        { kr: "갤럭시 실기기에서 파일 선택·기관 선택·모바일 레이아웃 수정", en: "Fixed file selection, institution selection, and mobile layout on a real Galaxy device" },
        { kr: "백업·전체 삭제·복원과 트랜잭션 롤백 검증", en: "Verified backup, full wipe, restore, and transaction rollback" },
        { kr: "SQLite에서 Neon PostgreSQL로 이전하고 운영 보안 강화", en: "Migrated from SQLite to Neon PostgreSQL and strengthened production security" },
        { kr: "Vercel 배포 후 실제 앱과 공개 읽기 전용 데모 분리", en: "Deployed to Vercel and separated the real app from a public, read-only demo" }
      ]}
      implemented={[
        { kr: "자산·대출·현금흐름 통합 관리", en: "Unified management of assets, loans, and cash flow" },
        { kr: "대출 상환 일정과 월 잉여자금 계산", en: "Loan repayment schedule and monthly surplus funds calculation" },
        { kr: "금융 초보자를 위한 입력 도움말과 국내 금융회사 선택", en: "Input guidance for financial beginners and a domestic-institution picker" },
        { kr: "은행·카드 CSV 미리보기·수정·제외·중복 방지", en: "Bank/card CSV preview with editing, exclusion, and duplicate prevention" },
        { kr: "암호화 저장과 백업·삭제·복원", en: "Encrypted storage with backup, deletion, and restore" },
        { kr: "DB 기반 이중 로그인 시도 제한", en: "Database-backed dual login-attempt limiting" },
        { kr: "모바일 카드 목록과 하단 고정 탭", en: "Mobile card-style lists and a fixed bottom tab bar" },
        { kr: "Neon PostgreSQL·Vercel 운영 배포", en: "Production deployment on Neon PostgreSQL and Vercel" },
        { kr: "실제 데이터와 분리된 공개 읽기 전용 데모", en: "A public, read-only demo fully separated from real data" }
      ]}
      next={[
        { kr: "홈 화면 설치를 위한 PWA 구성", en: "PWA setup for home-screen installation" },
        { kr: "실제 금융사별 CSV 형식 추가 대응", en: "Supporting additional real-world, institution-specific CSV formats" },
        { kr: "정부정책 데이터 갱신 주기와 출처 표시 강화", en: "Strengthening the government-policy data refresh cycle and source attribution" },
        { kr: "공식 금융 API 이용 요건이 갖춰질 경우 안전한 자동연동 검토", en: "Reviewing safe automatic integration if official financial API access requirements are met" }
      ]}
    />
  );
}
