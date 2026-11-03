import type { Project } from "@/lib/types";
import { TextLink } from "./TextLink";

interface ProjectListProps {
  projects: Project[];
  variant?: "full" | "compact";
}

export function ProjectList({ projects, variant = "full" }: ProjectListProps) {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {projects.map((project) => (
        <li key={project.slug} className={variant === "full" ? "py-6" : "py-4"}>
          <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-1.5 max-w-[36rem] text-ink-soft">{project.summary}</p>
          {variant === "full" ? (
            <p className="mt-2 text-sm text-ink-soft">{project.stack.join(", ")}</p>
          ) : null}
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">
            {project.caseStudy ? (
              <li>
                <TextLink href={`/projects/${project.slug}`}>Read the case study</TextLink>
              </li>
            ) : null}
            {project.repoUrl ? (
              <li>
                <TextLink href={project.repoUrl}>Source on GitHub</TextLink>
              </li>
            ) : null}
            {project.liveUrl ? (
              <li>
                <TextLink href={project.liveUrl}>Live demo</TextLink>
              </li>
            ) : null}
          </ul>
        </li>
      ))}
    </ul>
  );
}
