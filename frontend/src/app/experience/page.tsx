import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { education, schooling } from "@/data/education";
import { experience } from "@/data/experience";
import { AnimatedRecommendations } from "@/components/site/AnimatedRecommendations";
import { recommendations } from "@/data/recommendations";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work, education and recommendations for Prateek Kumar.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader title="Experience" lede="Where I have worked and studied." />

      <Section id="work" title="Work">
        <div className="divide-y divide-line border-y border-line">
          {experience.map((job) => (
            <article key={job.organization} className="py-7">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="text-lg font-semibold tracking-tight">
                  {job.role}, {job.organization}
                </h3>
                <p className="shrink-0 text-sm text-ink-soft">{job.period}</p>
              </div>
              <p className="text-sm text-ink-soft">{job.location}</p>
              <ul className="mt-4 max-w-[36rem] list-disc space-y-2 pl-5 marker:text-ink-soft">
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-ink-soft">
                {job.stack.join(", ")}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education">
        {education.map((school) => (
          <article key={school.institution}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="text-lg font-semibold tracking-tight">
                {school.degree}, {school.institution}
              </h3>
              <p className="shrink-0 text-sm text-ink-soft">{school.period}</p>
            </div>
            <p className="text-sm text-ink-soft">
              {school.location}. {school.grade}
            </p>
            <ul className="mt-4 max-w-[36rem] list-disc space-y-2 pl-5 marker:text-ink-soft">
              {school.honors.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 max-w-[36rem] text-sm text-ink-soft">
              Coursework: {school.coursework.join(", ")}.
            </p>
          </article>
        ))}
        <ul className="mt-6 space-y-1 text-sm text-ink-soft">
          {schooling.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </Section>

      <Section id="recommendations" title="Recommendations">
        <AnimatedRecommendations items={recommendations} />
      </Section>
    </>
  );
}
