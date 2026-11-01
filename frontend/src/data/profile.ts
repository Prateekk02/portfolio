export const SITE_URL = "https://www.prateekkumar.dev";

export const profile = {
  name: "Prateek Kumar",
  headline:
    "I turn language models into software you can trust: right, fast and cheap, all at once.",
  intro: [
    "I work on LLM agents, retrieval and evaluation, and on the pipelines that take them from a notebook to production.",
  ],
  location: "Bengaluru",
  email: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
  resumeHref: "/Prateek_Kumar.pdf",
  links: {
    github: "https://github.com/Prateekk02",
    linkedin: "https://www.linkedin.com/in/prateekk02/",
    x: "https://x.com/codeWalker66",
    medium: "https://medium.com/@codeWalker66",
    kaggle: "https://www.kaggle.com/prateekk02",
    leetcode: "https://leetcode.com/u/codeWalker66/",
  },
} as const;
