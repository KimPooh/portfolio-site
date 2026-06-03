import type { NavigationLink } from "@/types/portfolio";

type SiteHeaderProps = {
  navigation: NavigationLink[];
  profileName: string;
};

export function SiteHeader({ navigation, profileName }: SiteHeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-ink/72 backdrop-blur">
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <a href="#" className="text-sm font-semibold text-paper">
          {profileName}
        </a>
        <nav aria-label="주요 섹션" className="hidden items-center gap-1 sm:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-paper/62 transition hover:text-mint"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
