export const SITE_URL = "https://www.prateekkumar.dev";

export const profile = {
  name: "Prateek Kumar",
  headline: "I build LLM agents and the pipelines that ship them.",
  intro: [
    "I work on test automation and generative AI tooling. I like problems where a model has to be right, cheap and fast at the same time.",
    "Before that I used deep learning to cut a CFD simulation from 40 minutes to 4 as an intern at BITS Pilani, Goa.",
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
