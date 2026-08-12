import type { Metadata } from "next";
import ClientDetail from "./ClientDetail";
import { projects } from "@/data/projects";

const slug = "infertility-pregnancy-prediction";
const project = projects.find((item) => item.slug === slug);

if (!project) {
  throw new Error(`Project not found: ${slug}`);
}

export const metadata: Metadata = {
  title: `${project.title} | 김지현 AI/Data Portfolio`,
  description: project.detail?.oneLine ?? project.description
};

export default function InfertilityPredictionProjectPage() {
  // Server component: render interactive client detail component
  return <ClientDetail featuredProject={project} projects={projects} />;
}
