import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { WritingList } from "@/components/site/WritingList";

describe("WritingList", () => {
  const items = [
    { title: "First post", href: "https://example.com/a", source: "Medium" },
    { title: "Second post", href: "/blog/b", source: "Blog" },
  ];

  it("lists every item with its link and source", () => {
    render(<WritingList items={items} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getByRole("link", { name: /First post/ })).toHaveAttribute(
      "href",
      "https://example.com/a",
    );
    expect(screen.getByText("Medium")).toBeInTheDocument();
  });

  it("renders an empty list without crashing", () => {
    render(<WritingList items={[]} />);
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });
});
