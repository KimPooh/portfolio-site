import type { Metadata } from "next";
import SmokingStatusContent from "@/components/SmokingStatusContent";
import { projects } from "@/data/projects";

const slug = "smoking-status-data-analysis";
const project = projects.find((item) => item.slug === slug);

if (!project?.detail) {
  throw new Error(`Project not found: ${slug}`);
}

export const metadata: Metadata = {
  title: `${project.title.kr} | 김지현 AI/Data Portfolio`,
  description: project.detail.oneLine.kr
};

export default function SmokingStatusDataAnalysisPage() {
  return <SmokingStatusContent />;
}
