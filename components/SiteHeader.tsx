import { ThemeToggle } from "@/components/ThemeToggle";

type SiteHeaderProps = {
  profileName: string;
};

export function SiteHeader({ profileName }: SiteHeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-border/80 bg-background/82 backdrop-blur">
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <a href="#" className="text-sm font-semibold text-foreground">
          {profileName} AI/Data
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}
