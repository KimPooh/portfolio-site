import type { NavigationLink } from "@/types/portfolio";
import { ThemeToggle } from "@/components/ThemeToggle";

type SiteHeaderProps = {
  navigation: NavigationLink[];
  profileName: string;
};

export function SiteHeader({ navigation, profileName }: SiteHeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-border/80 bg-background/82 backdrop-blur">
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <a href="#" className="text-sm font-semibold text-foreground">
          {profileName} AI/Data
        </a>
        <div className="flex items-center gap-2">
          <nav aria-label="주요 섹션" className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-muted transition hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
