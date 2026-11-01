import { PageHeader } from "@/components/site/PageHeader";
import { TextLink } from "@/components/site/TextLink";

export default function NotFound() {
  return (
    <>
      <PageHeader title="Page not found" lede="This page does not exist or has moved." />
      <p className="mt-8">
        <TextLink href="/">Go to the home page</TextLink>
      </p>
    </>
  );
}
