import type { Project } from "@/lib/types";

// NOTE for review: the first entry describes work done in a professional setting.
// It is written generically on purpose (no employer, tools or numbers).
// Confirm it is cleared for public use before merging.
export const projects: Project[] = [
  {
    slug: "agentic-failure-triage",
    title: "Agentic test failure triage",
    summary:
      "An agent that reads the logs of a failed test run, decides whether the product code or the test automation is at fault, and links the failure to existing tickets and test cases.",
    stack: ["Python", "LangGraph", "Deep Agents", "Drain3", "OpenAI"],
    featured: true,
    caseStudy: [
      {
        heading: "Problem",
        body: "Nightly test runs produce a lot of logs. When something fails, an engineer reads them to decide whether the product code or the test automation is to blame, then checks whether the failure is already tracked. Most of that reading is repeat noise.",
      },
      {
        heading: "Approach",
        points: [
          "Index whole log files instead of chunking them, so the agent can search a complete run and follow a failure across files.",
          "Turn each log line into a template and compare only the variable parts against past runs. Only values that look new trigger a full analysis, so known noise costs no model calls.",
          "An agent plans the investigation, calls search tools over the indexed logs and reports a root cause together with the lines it relied on.",
          "It then looks up related test cases and tickets, so the report points at existing work instead of duplicating it.",
        ],
      },
      {
        heading: "What I would change",
        body: "The next step is suggesting a fix once the root cause is located, and measuring the agent's verdicts against engineers' final calls so that changes to prompts or models ship behind an evaluation gate.",
      },
    ],
  },
  {
    slug: "youtube-rag-chatbot",
    title: "YouTube RAG chatbot",
    summary:
      "Paste a YouTube link and ask questions about the video. Answers are retrieved from the transcript.",
    stack: ["Python", "LangChain", "Pinecone", "FAISS", "OpenAI", "Streamlit"],
    repoUrl: "https://github.com/Prateekk02/youtube-chatbot",
    featured: true,
  },
  {
    slug: "content-catalyst",
    title: "Content Catalyst",
    summary:
      "Upload a video and get AI-generated summaries, highlights and edits without any editing skills.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudinary", "Clerk", "Docker"],
    repoUrl: "https://github.com/Prateekk02/ai-saas",
    liveUrl: "https://content-catalyst-pi.vercel.app/",
    featured: true,
  },
  {
    slug: "diamond-price-predictor",
    title: "Diamond price predictor",
    summary: "Predicts a diamond's price from its quality attributes.",
    stack: ["Python", "scikit-learn", "Streamlit"],
    repoUrl: "https://github.com/Prateekk02/DiamondPricePredictor",
    liveUrl:
      "https://diamondpricepredictorgit-6ixkzifz3zewf67b8qp637.streamlit.app/",
    featured: false,
  },
  {
    slug: "customer-churn-ann",
    title: "Customer churn classifier",
    summary: "An artificial neural network that predicts whether a customer will churn.",
    stack: ["Python", "TensorFlow", "Streamlit"],
    repoUrl: "https://github.com/Prateekk02/ann_churn_prediction",
    liveUrl: "https://ann-churn-prediction-codewalker66.streamlit.app/",
    featured: false,
  },
  {
    slug: "portfolio-site",
    title: "This site",
    summary: "My portfolio and blog.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/Prateekk02/portfolio",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const earlierProjects = projects.filter((p) => !p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
