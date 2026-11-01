import Image from "next/image";
import { ProjectList } from "@/components/site/ProjectList";
import { AnimatedRecommendations } from "@/components/site/AnimatedRecommendations";
import { Section } from "@/components/site/Section";
import { TextLink } from "@/components/site/TextLink";
import { WritingList } from "@/components/site/WritingList";
import { profile, SITE_URL } from "@/data/profile";
import { recommendations } from "@/data/recommendations";
import { featuredProjects } from "@/data/projects";
import { writing } from "@/data/writing";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: SITE_URL,
  jobTitle: "Systems Engineer",
  sameAs: [
    profile.links.github,
    profile.links.linkedin,
    profile.links.x,
    profile.links.medium,
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="flex items-center gap-4">
        <Image
          src="/prateek.jpeg"
          alt={profile.name}
          width={56}
          height={56}
          priority
          className="h-14 w-14 rounded-full object-cover"
        />
        <p className="text-ink-soft">Systems engineer in {profile.location}</p>
      </div>

      <h1 className="mt-8 text-[clamp(2.1rem,6.5vw,3.25rem)] font-semibold leading-[1.06] tracking-[-0.025em] text-balance">
        {profile.headline}
      </h1>

      <div className="mt-6 max-w-[36rem] space-y-4">
        {profile.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
        <li>
          <TextLink href={profile.links.github}>GitHub</TextLink>
        </li>
        <li>
          <TextLink href={profile.links.linkedin}>LinkedIn</TextLink>
        </li>
        {profile.email ? (
          <li>
            <TextLink href={`mailto:${profile.email}`}>Email</TextLink>
          </li>
        ) : null}
        <li>
          <TextLink href={profile.resumeHref}>Resume</TextLink>
        </li>
      </ul>

      <Section id="work" title="Selected work">
        <ProjectList projects={featuredProjects} />
        <p className="mt-5">
          <TextLink href="/projects">All projects</TextLink>
        </p>
      </Section>

      <Section id="writing" title="Writing">
        <WritingList items={writing.slice(0, 3)} />
        <p className="mt-5">
          <TextLink href="/blog">All writing</TextLink>
        </p>
      </Section>

      <Section id="recommendations" title="Recommendations">
        <AnimatedRecommendations items={recommendations} />
      </Section>
    </>
  );
}
