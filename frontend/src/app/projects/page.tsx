import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { ProjectList } from "@/components/site/ProjectList";
import { Section } from "@/components/site/Section";
import { earlierProjects, featuredProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "LLM agents, retrieval and applied machine learning projects by Prateek Kumar.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projects"
        lede="Agents, retrieval and applied machine learning. The first one has a write-up."
      />
      <div className="mt-10">
        <ProjectList projects={featuredProjects} />
      </div>
      <Section id="earlier" title="Earlier work">
        <ProjectList projects={earlierProjects} variant="compact" />
      </Section>
    </>
  );
}
