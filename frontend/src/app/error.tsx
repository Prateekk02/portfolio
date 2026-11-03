"use client";

import { PageHeader } from "@/components/site/PageHeader";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <>
      <PageHeader
        title="Something went wrong"
        lede="The page failed to load. Try again. If it keeps happening, send me an email."
      />
      <button type="button" onClick={reset} className="link mt-8">
        Try again
      </button>
    </>
  );
}
