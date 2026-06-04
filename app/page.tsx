import { CaseStudyWorkspace } from "@/components/CaseStudyWorkspace";
import { ThemeToggle } from "@/components/ThemeToggle";
import { featuredProject } from "@/data/projects";
import { profile } from "@/data/site";

export default function Home() {
  return (
    <main className="relative h-dvh overflow-hidden">
      <div className="relative z-10">
        <ThemeToggle />
        <CaseStudyWorkspace profile={profile} featuredProject={featuredProject} />
      </div>
    </main>
  );
}
