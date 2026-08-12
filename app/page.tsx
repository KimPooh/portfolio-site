import { TargetedPortfolio } from "@/components/TargetedPortfolio";
import { projects } from "@/data/projects";
import { profile } from "@/data/site";

export default function Home() {
  return (
    <div className="relative">
      <div className="relative z-10">
        <TargetedPortfolio profile={profile} projects={projects} />
      </div>
    </div>
  );
}
