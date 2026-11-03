import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { WritingList } from "@/components/site/WritingList";
import { writing } from "@/data/writing";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing on LLMs, machine learning and web engineering by Prateek Kumar.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blog"
        lede="Notes on building with LLMs and the systems around them. Older posts live on Medium and LinkedIn."
      />
      <div className="mt-10">
        <WritingList items={writing} />
      </div>
    </>
  );
}
