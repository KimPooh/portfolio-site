export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <div className="max-w-xl rounded-3xl border border-border bg-surface/80 p-10 text-center shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Page not found</p>
        <h1 className="mt-6 text-3xl font-semibold text-foreground">존재하지 않는 페이지입니다.</h1>
        <p className="mt-4 text-sm leading-7 text-muted">메인 페이지로 돌아가거나 다른 섹션을 확인해 주세요.</p>
      </div>
    </main>
  );
}
