"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type VisitorType = "family" | "first" | "global" | "quiet";
type Tab = "guide" | "route" | "ops";

type Artwork = {
  id: string;
  title: string;
  zone: string;
  image: string;
  mood: string;
  dwell: number;
  description: string;
  tags: string[];
};

const visitorTypes: Record<VisitorType, { label: string; caption: string }> = {
  family: { label: "아이와 함께", caption: "짧고 상상하기 쉬운 설명" },
  first: { label: "첫 방문", caption: "작품 맥락과 동선 중심" },
  global: { label: "외국인", caption: "한국어와 영어를 함께 보는 안내" },
  quiet: { label: "조용히 감상", caption: "방해하지 않는 힌트" }
};

const artworks: Artwork[] = [
  {
    id: "wave",
    title: "Endless Wave",
    zone: "Ocean Hall",
    image: "linear-gradient(135deg, #123047, #1f7a8c 48%, #bfdbf7)",
    mood: "압도감",
    dwell: 7,
    description: "거대한 파도와 사운드가 이어지는 몰입형 공간입니다.",
    tags: ["Media Art", "Sound", "Immersive"]
  },
  {
    id: "garden",
    title: "Light Garden",
    zone: "Bloom Room",
    image: "linear-gradient(135deg, #1f3d2b, #7aa95c 52%, #f5e6b8)",
    mood: "회복감",
    dwell: 5,
    description: "빛과 꽃의 움직임이 느리게 반복되는 감상형 공간입니다.",
    tags: ["Light", "Nature", "Healing"]
  },
  {
    id: "sketch",
    title: "Live Sketchbook",
    zone: "Interactive Lab",
    image: "linear-gradient(135deg, #2b235a, #f97316 50%, #fde68a)",
    mood: "참여감",
    dwell: 10,
    description: "관람객의 그림이 화면 속 세계로 들어가는 참여형 작품입니다.",
    tags: ["Interactive", "AR", "Family"]
  }
];

const routeMap: Record<VisitorType, string[]> = {
  family: ["Live Sketchbook", "Light Garden", "Endless Wave"],
  first: ["Endless Wave", "Light Garden", "Live Sketchbook"],
  global: ["Light Garden", "Endless Wave", "Live Sketchbook"],
  quiet: ["Light Garden", "Endless Wave", "Live Sketchbook"]
};

function createGuide(artwork: Artwork, visitor: VisitorType) {
  const introKo =
    visitor === "family"
      ? `${artwork.title}은 ${artwork.mood}을 느끼는 공간입니다. 아이에게는 설명보다 "무엇이 움직이는지"를 함께 찾게 해보세요.`
      : visitor === "quiet"
        ? `${artwork.title}에서는 오래 읽기보다 한 걸음 물러서서 빛과 소리의 간격을 보는 것이 좋습니다.`
        : visitor === "global"
          ? `${artwork.title}은 빛, 움직임, 소리로 ${artwork.mood}을 느끼게 하는 몰입형 작품입니다. 약 ${artwork.dwell}분 정도 머물며 변화를 천천히 관찰해보세요.`
          : `${artwork.title}은 ${artwork.zone}에서 약 ${artwork.dwell}분 머물기 좋은 작품입니다. ${artwork.description}`;

  const introEn =
    visitor === "family"
      ? `${artwork.title} is a space for feeling ${artwork.mood}. Instead of explaining too much, invite children to find what is moving first.`
      : visitor === "quiet"
        ? `For ${artwork.title}, step back for a moment and notice the rhythm between light, sound, and motion.`
        : visitor === "global"
          ? `${artwork.title} is an immersive artwork shaped by light, motion, and sound. Stay for about ${artwork.dwell} minutes and watch how the space slowly changes.`
          : `${artwork.title} is located in ${artwork.zone}. Stay for about ${artwork.dwell} minutes and focus on the main mood of the space.`;

  const questionsKo =
    visitor === "family"
      ? ["이 안에 들어가면 어떤 소리가 날까요?", "가장 먼저 움직이는 색은 무엇인가요?", "집에서 다시 그린다면 무엇을 넣고 싶나요?"]
      : visitor === "quiet"
        ? ["가장 오래 시선이 머무는 곳은 어디인가요?", "한 걸음 뒤로 가면 속도가 다르게 느껴지나요?", "설명 없이 남는 감정은 무엇인가요?"]
        : visitor === "global"
          ? ["빛, 소리, 움직임 중 무엇이 가장 먼저 느껴지나요?", "친구에게 설명한다면 어떤 장면을 말하고 싶나요?", "1분 동안 머문 뒤 감정이 어떻게 바뀌었나요?"]
          : ["이 작품은 나를 어디에 서 있게 하나요?", "빛과 소리 중 무엇이 먼저 느껴지나요?", "다음 작품 전에 기억할 장면은 무엇인가요?"];

  const questionsEn =
    visitor === "family"
      ? ["What sound would this space make?", "Which color moves first?", "What would you draw again at home?"]
      : visitor === "quiet"
        ? ["Where do your eyes stay the longest?", "Does the pace feel different when you step back?", "What feeling remains without any explanation?"]
        : visitor === "global"
          ? ["What do you notice first: light, sound, or motion?", "Which scene would you explain to a friend?", "How does your mood change after one minute?"]
          : ["Where does this artwork place you as a viewer?", "What do you feel first: light or sound?", "Which scene do you want to remember before moving on?"];

  return {
    intro: {
      ko: introKo,
      en: introEn
    },
    questions: questionsKo.map((ko, index) => ({
      ko,
      en: questionsEn[index]
    })),
    route: routeMap[visitor],
    ops: `${visitorTypes[visitor].label} 관람객은 ${artwork.zone}에서 평균 ${artwork.dwell}분 체류할 가능성이 높습니다. 질문 저장 수와 다음 이동 선택을 함께 보면 작품별 반응을 빠르게 파악할 수 있습니다.`
  };
}

export default function ArteCompanionPage() {
  const [artworkId, setArtworkId] = useState("wave");
  const [visitor, setVisitor] = useState<VisitorType>("first");
  const [activeTab, setActiveTab] = useState<Tab>("guide");
  const [generated, setGenerated] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [logs, setLogs] = useState<string[]>([]);

  const artwork = artworks.find((item) => item.id === artworkId) ?? artworks[0];
  const guide = useMemo(() => createGuide(artwork, visitor), [artwork, visitor]);

  const generate = () => {
    setGenerated(true);
    setActiveTab("guide");
    setSelectedQuestion(guide.questions[0].ko);
  };

  const save = () => {
    const question = selectedQuestion || guide.questions[0].ko;
    setLogs((items) => [`${visitorTypes[visitor].label} · ${artwork.title} · ${question}`, ...items].slice(0, 5));
    setActiveTab("ops");
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="text-sm font-bold">김지현 Portfolio</Link>
          <span className="rounded-sm border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-bold text-accent">ARTE Visit Companion</span>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-6 sm:px-8 lg:grid-cols-[0.32fr_0.68fr]">
        <aside className="space-y-4">
          <div className="rounded-lg border border-border bg-surface p-4 shadow-sm">
            <p className="text-xs font-bold uppercase text-accent">Step 1</p>
            <h2 className="mt-1 text-lg font-bold">작품 선택</h2>
            <div className="mt-4 grid gap-3">
              {artworks.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setArtworkId(item.id);
                    setGenerated(false);
                  }}
                  className={`group overflow-hidden rounded-lg border text-left transition ${artworkId === item.id ? "border-accent bg-accent/10 shadow-lift" : "border-border bg-background hover:border-accent hover:shadow-sm"}`}
                >
                  <span className="relative block aspect-[16/9] overflow-hidden" style={{ background: item.image }}>
                    <span className="absolute inset-0 bg-black/15" />
                    <span className="absolute bottom-3 left-3 right-3">
                      <span className="block text-xs font-bold uppercase text-white/75">{item.zone}</span>
                      <span className="mt-1 block text-lg font-bold leading-tight text-white">{item.title}</span>
                    </span>
                    <span className="absolute right-3 top-3 rounded-sm bg-white/20 px-2 py-1 text-xs font-bold text-white backdrop-blur">
                      {item.dwell}min
                    </span>
                  </span>
                  <span className="block p-3">
                    <span className="block text-sm font-bold text-foreground">{item.mood}</span>
                    <span className="mt-1 block text-xs leading-5 text-muted">{item.description}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface p-4 shadow-sm">
            <p className="text-xs font-bold uppercase text-accent">Step 2</p>
            <h2 className="mt-1 text-lg font-bold">관람객 선택</h2>
            <div className="mt-4 grid gap-2">
              {(Object.keys(visitorTypes) as VisitorType[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setVisitor(key);
                    setGenerated(false);
                  }}
                  className={`rounded-md border p-3 text-left transition ${visitor === key ? "border-accent bg-accent/10" : "border-border bg-background hover:border-accent"}`}
                >
                  <span className="block text-sm font-bold">{visitorTypes[key].label}</span>
                  <span className="mt-1 block text-xs text-muted">{visitorTypes[key].caption}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={generate}
            className="w-full rounded-md bg-accent px-4 py-4 text-sm font-bold text-white shadow-lift transition hover:translate-y-[-1px] hover:opacity-95"
          >
            AI 관람 가이드 생성
          </button>
        </aside>

        <section className="overflow-hidden rounded-lg border border-border bg-surface shadow-lift">
          <div className="grid min-h-[21rem] lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative overflow-hidden p-5 text-white" style={{ background: artwork.image }}>
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute left-6 top-8 h-24 w-40 rotate-[-12deg] border border-white/25" />
              <div className="absolute bottom-10 right-8 h-32 w-32 rotate-12 border border-white/25" />
              <div className="absolute inset-x-8 bottom-24 h-px bg-white/30" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <p className="text-xs font-bold uppercase opacity-80">{artwork.zone}</p>
                  <h1 className="mt-2 text-4xl font-bold leading-tight">{artwork.title}</h1>
                  <p className="mt-3 max-w-md text-sm leading-6 text-white/85">{artwork.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-8">
                  {artwork.tags.map((tag) => (
                    <span key={tag} className="rounded-sm bg-white/18 px-2.5 py-1 text-xs font-bold backdrop-blur">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <p className="text-xs font-bold uppercase text-accent">Product MVP</p>
              <h2 className="mt-2 text-3xl font-bold leading-tight">전시장에서 바로 쓰는 AI 도슨트</h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                작품과 관람객 유형을 고르면 맞춤 설명, 질문, 동선, 운영자 인사이트가 생성됩니다.
                버튼을 눌러 결과를 만들고 질문을 저장해보세요.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                {[["체류", `${artwork.dwell}분`], ["질문", "3개"], ["로그", `${logs.length}건`]].map(([label, value]) => (
                  <div key={label} className="rounded-md border border-border bg-background px-3 py-3">
                    <p className="text-xs font-bold text-muted">{label}</p>
                    <p className="mt-1 text-xl font-bold">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-border bg-background/70 px-4 py-3">
            <div className="flex flex-wrap gap-2">
              {[
                ["guide", "관람 가이드"],
                ["route", "추천 동선"],
                ["ops", "운영자 화면"]
              ].map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveTab(key as Tab)}
                  className={`rounded-md border px-3 py-2 text-sm font-bold transition ${activeTab === key ? "border-accent bg-accent text-white" : "border-border bg-surface text-muted hover:border-accent"}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-5 sm:p-6">
            {!generated ? (
              <div className="rounded-lg border border-dashed border-border bg-background p-8 text-center">
                <p className="text-lg font-bold">아직 가이드가 생성되지 않았습니다.</p>
                <p className="mt-2 text-sm text-muted">왼쪽에서 작품과 관람객 유형을 고른 뒤 생성 버튼을 눌러보세요.</p>
              </div>
            ) : activeTab === "guide" ? (
              <div className="space-y-5">
                <div className="rounded-lg border border-border bg-background p-5">
                  <p className="text-xs font-bold uppercase text-accent">Generated Guide</p>
                  <div className="mt-3 space-y-3">
                    <p className="text-base leading-8 text-muted">{guide.intro.ko}</p>
                    <p className="border-l-2 border-accent/40 pl-3 text-sm leading-7 text-muted">
                      {guide.intro.en}
                    </p>
                  </div>
                </div>
                <div className="grid gap-3 md:grid-cols-3">
                  {guide.questions.map((question) => (
                    <button
                      key={question.ko}
                      type="button"
                      onClick={() => setSelectedQuestion(question.ko)}
                      className={`rounded-lg border p-4 text-left transition ${selectedQuestion === question.ko ? "border-accent bg-accent/10" : "border-border bg-background hover:border-accent"}`}
                    >
                      <p className="text-xs font-bold uppercase text-accent">Question</p>
                      <p className="mt-2 text-sm leading-6 text-muted">{question.ko}</p>
                      <p className="mt-3 border-t border-border pt-3 text-xs leading-5 text-muted">{question.en}</p>
                    </button>
                  ))}
                </div>
                <button type="button" onClick={save} className="rounded-md bg-accent px-4 py-3 text-sm font-bold text-white">
                  선택 질문 저장하고 운영자 화면 보기
                </button>
              </div>
            ) : activeTab === "route" ? (
              <div className="grid gap-3 md:grid-cols-3">
                {guide.route.map((route, index) => (
                  <div key={route} className="rounded-lg border border-border bg-background p-5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">{index + 1}</span>
                    <h3 className="mt-4 text-lg font-bold">{route}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">현재 관람객 유형에 맞춘 다음 추천 지점입니다.</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-lg border border-border bg-background p-5">
                  <p className="text-xs font-bold uppercase text-accent">Operator Insight</p>
                  <p className="mt-3 text-sm leading-7 text-muted">{guide.ops}</p>
                  <div className="mt-5 h-3 overflow-hidden rounded-full bg-border">
                    <div className="h-full rounded-full bg-accent" style={{ width: `${Math.min(95, artwork.dwell * 9)}%` }} />
                  </div>
                  <p className="mt-2 text-xs font-bold text-muted">예상 관심도 {Math.min(95, artwork.dwell * 9)}%</p>
                </div>
                <div className="rounded-lg border border-border bg-background p-5">
                  <h3 className="text-lg font-bold">실시간 저장 로그</h3>
                  {logs.length ? (
                    <ul className="mt-4 space-y-2">
                      {logs.map((log) => (
                        <li key={log} className="rounded-md border border-border bg-surface px-3 py-2 text-sm text-muted">{log}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-4 text-sm text-muted">관람객 질문 저장 후 로그가 표시됩니다.</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
      </section>
    </main>
  );
}
