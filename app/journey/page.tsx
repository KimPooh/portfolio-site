import Link from "next/link";
import { learningLogCategories, learningNotes } from "@/data/learning";

const stageSummary = [
  {
    title: "Python과 데이터 기초",
    body: "처음에는 문법보다 데이터를 불러오고 정리하는 흐름을 익히는 데 시간을 많이 썼습니다.",
    tone: "bg-[#EAF4FF] text-[#15283B]"
  },
  {
    title: "머신러닝 모델링",
    body: "기준 모델을 먼저 만들고, 점수 차이를 보면서 모델을 하나씩 바꿔보는 방식으로 익혔습니다.",
    tone: "bg-[#F3ECFF] text-[#211A32]"
  },
  {
    title: "AI 서빙과 웹 연결",
    body: "모델 결과가 API와 화면에서 어떻게 이어지는지 직접 맞춰보며 흐름을 이해했습니다.",
    tone: "bg-[#EAF7EF] text-[#13241D]"
  }
];

function getNoteTitle(topic: string, tags?: string[]) {
  if (tags?.length) return tags.slice(0, 2).join(" · ");
  return topic.replace(/\s-\s\d+일차/g, "").replace(" 학습 자료", "");
}

export const metadata = {
  title: "김지현 Journey | AI/Data Learning Log",
  description: "김지현의 AI/Data 학습 과정과 프로젝트 적용 기록입니다."
};

export default function JourneyPage() {
  return (
    <main className="min-h-screen bg-[#141821] text-[#F4F0E8]">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#141821]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="text-base font-black tracking-tight">
            JIHYUN
          </Link>
          <nav className="flex items-center gap-4 text-sm font-bold text-[#AAB2C0]">
            <Link href="/background" className="transition hover:text-[#D8C7FF]">
              배경
            </Link>
            <Link href="/#projects" className="transition hover:text-[#D8C7FF]">
              프로젝트
            </Link>
            <Link href="/#contact" className="transition hover:text-[#D8C7FF]">
              연락처
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-sm font-black text-[#B9FF7A]">Journey</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-7xl">
          배운 것을
          <br />
          프로젝트로 이어간 기록
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-[#B9C0CD]">
          처음부터 잘한 건 아니지만, 배운 내용을 그냥 넘기지 않고 프로젝트와 연결해보려고 했습니다.
          Python과 데이터 분석에서 시작해 머신러닝, 딥러닝 기초, 모델 서빙, 웹 구현까지 조금씩 넓혀가고 있습니다.
        </p>
      </section>

      <section className="border-y border-white/10 bg-[#1C2230] py-14">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 sm:px-8 lg:grid-cols-3">
          {stageSummary.map((stage) => (
            <article key={stage.title} className={`p-6 ${stage.tone}`}>
              <h2 className="text-2xl font-black">{stage.title}</h2>
              <p className="mt-4 text-sm font-semibold leading-7 opacity-80">{stage.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-black text-[#D8C7FF]">Study Notes</p>
            <h2 className="mt-2 text-4xl font-black tracking-tight">어떻게 쌓아왔는지</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[#B9C0CD]">
            날짜 순서보다, 지금 프로젝트를 설명하는 데 실제로 도움이 되는 흐름만 남겼습니다.
          </p>
        </div>

        <div className="mt-9 space-y-5">
          {learningLogCategories.map((category) => (
            <article key={category.category} className="grid gap-5 border border-white/10 bg-white/[0.055] p-5 md:grid-cols-[12rem_1fr]">
              <div>
                <h3 className="mt-3 text-2xl font-black">{category.category}</h3>
                <p className="mt-3 text-xs font-bold text-[#98A2B3]">{category.courseLabel}</p>
              </div>
              <div>
                <p className="text-sm leading-7 text-[#B9C0CD]">{category.description}</p>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {category.links.slice(0, 4).map((link) => (
                    <div key={`${category.category}-${link.topic}`} className="rounded-2xl bg-[#111722] p-4">
                      <p className="text-sm font-black text-[#F4F0E8]">{getNoteTitle(link.topic, link.tags)}</p>
                      <p className="mt-2 text-sm leading-6 text-[#AAB2C0]">{link.summary ?? link.topic}</p>
                      {link.tags?.length ? (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {link.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-bold text-[#DDE3EE]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0F131B] py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-sm font-black text-[#B9FF7A]">Notes</p>
          <h2 className="mt-2 text-4xl font-black tracking-tight">공부하면서 남긴 기준</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {learningNotes.map((note) => (
              <article key={note.title} className="rounded-3xl border border-white/10 bg-white/[0.055] p-6">
                <h3 className="text-xl font-black">{note.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#B9C0CD]">{note.summary}</p>
                <div className="mt-5 rounded-2xl bg-[#1C2230] p-4">
                  <p className="text-xs font-black text-[#D8C7FF]">내가 정리한 포인트</p>
                  <p className="mt-2 text-sm leading-7 text-[#DDE3EE]">{note.portfolioValue}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
