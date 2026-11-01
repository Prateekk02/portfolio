import type { ResourceGroup } from "@/lib/types";

export const resourceGroups: ResourceGroup[] = [
  {
    title: "Papers",
    items: [
      { title: "Attention Is All You Need", href: "https://arxiv.org/abs/1706.03762" },
      { title: "Google whitepaper: Foundational large language models and text generation" },
      { title: "Google whitepaper: Embeddings and vector stores" },
      { title: "Google whitepaper: Agents" },
      { title: "Google whitepaper: Agents companion" },
    ],
  },
  {
    title: "Tools",
    items: [
      { title: "NotebookLM", note: "A personal AI research assistant.", href: "https://notebooklm.google/" },
      { title: "uv", note: "An extremely fast Python package and project manager, written in Rust.", href: "https://docs.astral.sh/uv/" },
      { title: "Hugging Face docs", note: "Where the ML community shares models, datasets and apps.", href: "https://huggingface.co/docs" },
      { title: "spaCy docs", note: "Industrial-strength NLP in Python.", href: "https://spacy.io/api/doc" },
      { title: "Postman", note: "API testing.", href: "https://www.postman.com/" },
      { title: "Overleaf", note: "Writing papers and resumes in LaTeX.", href: "https://www.overleaf.com/" },
      { title: "Mermaid Live", note: "Flowcharts and graphs from code.", href: "https://mermaid.live/" },
      { title: "Excalidraw", note: "Sketching a thought process as a diagram.", href: "https://excalidraw.com/" },
      { title: "draw.io", note: "UML and use-case diagrams.", href: "https://app.diagrams.net/" },
    ],
  },
  {
    title: "Interface libraries",
    items: [
      { title: "Lucide", note: "Icons.", href: "https://lucide.dev/guide/packages/lucide-react" },
      { title: "React Icons", note: "Icons from many packs.", href: "https://react-icons.github.io/react-icons/" },
      { title: "Aceternity UI", note: "Pre-styled components with built-in animation.", href: "https://ui.aceternity.com/" },
      { title: "daisyUI", note: "Component class names for Tailwind CSS.", href: "https://daisyui.com/" },
      { title: "Magic UI", note: "Components for design engineers.", href: "https://magicui.design/" },
      { title: "Motion", note: "Animation library for React and JavaScript.", href: "https://motion.dev/" },
    ],
  },
  {
    title: "YouTube channels",
    items: [
      { title: "3Blue1Brown", note: "Mathematics, visualised. Great for the maths behind AI.", href: "https://www.youtube.com/@3blue1brown" },
      { title: "StatQuest with Josh Starmer", note: "ML and statistics explained without dumbing them down.", href: "https://www.youtube.com/@statquest" },
      { title: "CampusX", note: "ML, deep learning, NLP and GenAI at depth.", href: "https://www.youtube.com/@campusx-official" },
      { title: "Krish Naik", note: "Production-level coding for AI systems.", href: "https://www.youtube.com/@krishnaik06" },
      { title: "Arpit Bhayani", note: "System design and technical whitepapers.", href: "https://www.youtube.com/@AsliEngineering" },
      { title: "Corey Schafer", note: "Python programming, web development and testing.", href: "https://www.youtube.com/@coreyms" },
      { title: "Chai aur Code", note: "Project-based programming tutorials.", href: "https://www.youtube.com/@chaiaurcode" },
      { title: "Manu Arora", note: "Next.js components, built live.", href: "https://www.youtube.com/@manuarora" },
      { title: "JavaScript Mastery", note: "Walkthroughs of large JavaScript and Next.js projects.", href: "https://www.youtube.com/c/JavaScriptMastery" },
      { title: "Harkirat Singh", note: "Levelling up as a developer.", href: "https://www.youtube.com/@harkirat1" },
      { title: "Akshay Saini", note: "JavaScript from the ground up.", href: "https://www.youtube.com/@akshaymarch7" },
    ],
  },
  {
    title: "Podcasts and long-form",
    items: [
      { title: "Lex Fridman", note: "Science, technology and philosophy in long conversations.", href: "https://www.youtube.com/@lexfridman" },
      { title: "Nikhil Kamath", note: "Casual talks with experts on tech and psychology.", href: "https://www.youtube.com/@nikhil.kamath" },
      { title: "Think School", note: "Business and geopolitics through case studies.", href: "https://www.youtube.com/@ThinkSchool" },
      { title: "Kurzgesagt", note: "Space, cosmology and what-if scenarios.", href: "https://www.youtube.com/@kurzgesagt" },
      { title: "Jigyasium", note: "Tales from history.", href: "https://www.youtube.com/@Jigyasium" },
    ],
  },
  {
    title: "Practice sets",
    items: [
      { title: "Striver's SDE sheet", note: "Frequently asked interview problems.", href: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/" },
      { title: "CSES problem set", note: "Classic algorithmic problems.", href: "https://cses.fi/problemset/" },
      { title: "A2OJ ladders", note: "Structured Codeforces practice.", href: "https://earthshakira.github.io/a2oj-clientside/server/Ladders.html" },
      { title: "CP-31 sheet", note: "Problems aimed at eliminating TLEs.", href: "https://www.tle-eliminators.com/cp-sheet" },
    ],
  },
];
