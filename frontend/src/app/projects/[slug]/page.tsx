import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/site/PageHeader";
import { TextLink } from "@/components/site/TextLink";
import { getProject, projects } from "@/data/projects";

export const dynamicParams = false;

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return projects.filter((p) => p.caseStudy).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function CaseStudyPage({ params }: { params: Params }) {
  const project = getProject((await params).slug);
  if (!project?.caseStudy) notFound();

  return (
    <article>
      <p className="mb-8 text-sm">
        <TextLink href="/projects">All projects</TextLink>
      </p>
      <PageHeader title={project.title} lede={project.summary} />
      <p className="mt-4 text-sm text-ink-soft">Built with {project.stack.join(", ")}</p>

      {project.caseStudy.map((section) => (
        <section key={section.heading} className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">{section.heading}</h2>
          {section.body ? <p className="mt-3 max-w-[36rem]">{section.body}</p> : null}
          {section.points ? (
            <ul className="mt-3 max-w-[36rem] list-disc space-y-3 pl-5 marker:text-ink-soft">
              {section.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </article>
  );
}
