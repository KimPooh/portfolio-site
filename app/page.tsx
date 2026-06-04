import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Labs } from "@/components/Labs";
import { Projects } from "@/components/Projects";
import { SiteHeader } from "@/components/SiteHeader";
import { Skills } from "@/components/Skills";
import { labIdeas } from "@/data/labs";
import { featuredProject, projects } from "@/data/projects";
import { profile, siteContent } from "@/data/site";
import { skillGroups } from "@/data/skills";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="relative z-10">
        <SiteHeader navigation={siteContent.navigation} profileName={profile.name} />
        <Hero content={siteContent.hero} featuredProject={featuredProject} profile={profile} />
        <About content={siteContent.about} profile={profile} />
        <Skills content={siteContent.skills} skillGroups={skillGroups} />
        <Projects content={siteContent.projects} featuredProject={featuredProject} projects={projects} />
        <Labs content={siteContent.labs} labIdeas={labIdeas} />
        <Contact content={siteContent.contact} profile={profile} />
      </div>
    </main>
  );
}
