export const profile = {
  name: "Ravi Pratap Singh",
  role: "Founder & CEO at Onto",
  tagline: "Founder · Builder · Open-source maintainer",
  location: "Bangalore, India",
  origin: "Bulandshahr",
  email: "founder@buildonto.dev",
  status:
    "Open to investor conversations, design partners, and collaborations on agent infrastructure.",
  twitter: "https://twitter.com/ravixalgorithm",
  linkedin: "https://linkedin.com/in/ravixalgorithm",
  github: "https://github.com/ravixalgorithm",
  onto: "https://buildonto.dev",
};

export const aboutHeadline =
  "I'm Ravi — building the context layer AI agents are missing.";

export const aboutParagraphs = [
  "I'm the founder of Onto — infrastructure that lets AI agents read, watch, and govern the open web in real-time. Today, agents are blind to what's happening outside their training data. Onto fixes that.",
  "Layer 1 (Read) is live in Anthropic's official MCP Registry with paying customers. Layer 2 (Watch) is shipping to first design partners. Layer 3 (Govern) is on the roadmap for enterprise.",
  "Before Onto, I founded Open Dev Society — an open-source community that crossed 13,300+ GitHub stars, with our flagship project OpenStock reaching 10,500+ active users and trending globally on GitHub.",
  "I'm a computer science undergraduate at HBTU Kanpur, originally from Bulandshahr, now building from Bangalore. Top 2% in the Harvard-affiliated Aspire Leaders Program. Top 10% in YC's S26 batch. Selected for Google for Startups Immersion (powered by Antler).",
];

export const aboutClosing = "Solo founder. 4 months in. Just getting started.";

// Signature phrases highlighted inline in the About copy. Keep these verbatim
// to the text above — they're matched exactly. One per paragraph keeps it clean.
export const aboutHighlights = [
  "context layer",
  "read, watch, and govern",
  "Anthropic's official MCP Registry",
  "13,300+ GitHub stars",
  "Top 10% in YC's S26 batch",
];

export const heroStats = [
  { value: "Top 10%", label: "YC S26" },
  { value: "Live in", label: "Anthropic MCP Registry" },
  { value: "13.3K+", label: "GitHub stars" },
  { value: "10.5K+", label: "OpenStock users" },
];

export const journey = [
  {
    company: "Onto",
    role: "Founder & CEO",
    dates: "Feb 2026 — Present",
    location: "Bangalore, India",
    href: "https://buildonto.dev",
    mark: "O",
    markColor: "#3b82f6",
    logo: "/onto.jpeg",
    description:
      "Building Onto — the live external context infrastructure for AI agents.",
    points: [
      "Shipped Layer 1 (Read API) to production in 4 months — fetch, clean, structure any URL for agent consumption.",
      "Listed in Anthropic's official MCP Registry as io.github.ravixalgorithm/onto.",
      "Multiple paying customers; YC S25 head of engineering on the waitlist.",
      "Shipping Layer 2 (Watch) — continuous monitoring and change detection for the agent web.",
      "Selected for Google for Startups Immersion (powered by Antler), Bangalore cohort.",
      "Top 10% in Y Combinator S26 application cycle.",
    ],
  },
  {
    company: "Open Dev Society",
    role: "Founder",
    dates: "2024 — Present",
    href: "https://opendevsociety.vercel.app",
    mark: "D",
    markColor: "#18181b",
    logo: "/ods.jpeg",
    description:
      "Founded an open-source community now past 13,300+ GitHub stars across projects.",
    points: [
      "Built OpenStock, an open-source stock data library that reached 10,500+ active users and trended globally on GitHub.",
      "Distribution and community-led growth across multiple repositories.",
      "Mentored open-source contributors across India and abroad.",
    ],
  },
  {
    company: "Lander Studio",
    role: "Software Developer (Part-time)",
    dates: "May 2026 — Present",
    location: "Bangalore, India",
    href: null,
    mark: "L",
    markColor: "#6366f1",
    logo: "/landerstudio.png",
    description:
      "Building production Next.js applications. Funding the startup runway.",
    points: [],
  },
];

export const featured = [
  {
    title: "Y Combinator S26 Rejection",
    context:
      "Top 10% in the Summer 2026 application cycle. Personalized rejection encouraging re-application for W27.",
  },
  {
    title: "Anthropic MCP Registry",
    context:
      "Onto's MCP server is listed in Anthropic's official Model Context Protocol Registry as io.github.ravixalgorithm/onto.",
    href: "https://buildonto.dev",
    cta: "View on Registry",
  },
  {
    title: "Google for Startups Immersion (powered by Antler)",
    context:
      "Selected for the Bangalore cohort. Phase 2 at Google for Startups, Bangalore.",
  },
  {
    title: "YC Startup School India",
    context: "Selected — Top 2,000 of 25,000 founders globally.",
  },
  {
    title: "GitHub Trending — Global",
    context:
      "OpenStock trended globally on GitHub, reaching 10,500+ active users at peak.",
    href: "https://github.com/Open-Dev-Society/OpenStock",
    cta: "View repo",
  },
  {
    title: "Aspire Leaders Program (Harvard-affiliated)",
    context:
      "Selected in the top 2% of global applicants for the Harvard-affiliated Aspire Leaders Program.",
    href: "https://www.aspireleaders.org/program/aspire-leaders-program/",
    cta: "View program",
  },
];

export const buildingNow = {
  intro: "Onto · External context infrastructure for AI agents.",
  href: "https://buildonto.dev",
  layers: [
    {
      name: "Read",
      description:
        "Clean, structured content from any URL, instantly. The fetch + clean primitive for AI agents.",
      status: "Live",
    },
    {
      name: "Watch",
      description:
        "Continuous monitoring of URLs and domains. Detect changes, emit events, wire to webhooks.",
      status: "Shipping",
    },
    {
      name: "Govern",
      description:
        "Policy, access control, audit trails. The compliance layer for AI agents in the enterprise.",
      status: "Next",
    },
  ],
};

export const education = {
  degree: "Bachelor of Technology, Computer Science",
  school: "Harcourt Butler Technical University (HBTU), Kanpur",
  dates: "2023 — Present",
  note: "Building production software and shipping open source in parallel with coursework.",
  highlights: [
    "JEE Main 97.2 percentile",
    "CGPA maintained while building startups",
  ],
};

export const techStack = [
  { group: "Languages", items: ["TypeScript", "Python"] },
  { group: "Frameworks", items: ["Next.js", "React", "Node.js", "Tailwind"] },
  {
    group: "Infrastructure",
    items: ["Supabase", "Postgres", "Vercel Edge", "Cloudflare"],
  },
  {
    group: "AI / Agents",
    items: ["Model Context Protocol (MCP)", "Anthropic API", "OpenAI API"],
  },
];

// Core stack — rendered with stronger emphasis in the marquee.
export const featuredTech = [
  "TypeScript",
  "Next.js",
  "React",
  "Python",
  "Vercel Edge",
  "Supabase",
  "Postgres",
  "Model Context Protocol (MCP)",
  "Anthropic API",
];

export const recentWriting = [
  {
    title: "Why we don't need to rebuild software for AI agents",
    date: "May 2026",
    href: "/writing",
  },
  {
    title:
      "The cost gravity argument: why bigger models don't fix the format problem",
    date: "May 2026",
    href: "/writing",
  },
  {
    title: "Same question, four AI agents, one terrifying result",
    date: "May 2026",
    href: "/writing",
  },
];

export type EssayBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "ul"; items: string[] };

export type Essay = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  year: string;
  readTime: string;
  body: EssayBlock[];
};

export const essays: Essay[] = [
  {
    slug: "why-we-dont-need-to-rebuild-software-for-ai-agents",
    title: "Why we don't need to rebuild software for AI agents",
    subtitle:
      "On the compatibility layer thesis and the inevitable lag between new users arriving and infrastructure acknowledging them.",
    date: "May 20",
    year: "2026",
    readTime: "5 min read",
    body: [
      {
        type: "p",
        text: "Every few years a new kind of user shows up on the internet, and the industry's first instinct is to rebuild everything for them. Mobile users arrived and we got a decade of mobile-first rewrites. Now AI agents are arriving, and the same reflex is kicking in: agent-native APIs, agent protocols, a parallel web built for machines.",
      },
      {
        type: "p",
        text: "I think that's mostly wasted motion. Not because the instinct is wrong about the importance of agents, but because it's wrong about how infrastructure actually catches up to new users.",
      },
      { type: "h2", text: "The new user nobody provisioned for" },
      {
        type: "p",
        text: "An AI agent is just a user with unusual constraints. It can read, but it reads tokens, not pixels. It can navigate, but it has no patience for a cookie banner or a 2 MB JavaScript bundle. It arrived faster than any user class in history — from zero to millions of daily sessions in under two years — and almost nothing on the web was built with it in mind.",
      },
      {
        type: "p",
        text: "The gap between a new user arriving and the infrastructure acknowledging them is always there. It was there for mobile, for screen readers, for the first search crawlers. What's different this time is the speed. Agents showed up before anyone had time to rebuild for them.",
      },
      { type: "h2", text: "The rebuild reflex" },
      {
        type: "p",
        text: "When the gap appears, two camps form. One says: rebuild the web. Ship agent-native endpoints, structured feeds, a new protocol that every site adopts. The other says: meet agents where the web already is. Translate what exists into what they can use.",
      },
      {
        type: "p",
        text: "The rebuild camp loses almost every time, and the reason is boring. Rebuilding requires millions of site owners to do work that benefits someone else's robot. That coordination never happens on the timeline that matters. The web didn't get rebuilt for mobile; it got responsive CSS and a viewport tag. A compatibility layer beat a rewrite.",
      },
      { type: "h2", text: "Why compatibility layers win" },
      {
        type: "p",
        text: "Compatibility layers win because they move the work to one place instead of a million. Instead of asking every publisher to expose a clean feed, you put a layer in front of the existing web that does the cleaning, structuring, and serving on demand. One team solves it once; everyone benefits immediately.",
      },
      {
        type: "p",
        text: "They also win on incumbency. The content agents actually need already lives on the human web — documentation, pricing pages, changelogs, forums. You don't get to ignore that and start fresh. You get to translate it.",
      },
      { type: "h2", text: "What this means for the context layer" },
      {
        type: "p",
        text: "This is the bet behind Onto. Agents don't need a new internet; they need a layer that reads the current one for them — fetch any URL, strip the noise, return clean structured context an agent can actually use. No publisher coordination required, no protocol everyone has to adopt first.",
      },
      {
        type: "quote",
        text: "The web will not be rebuilt for agents. It will be translated for them.",
      },
      {
        type: "p",
        text: "The companies that matter in this shift are the ones building the translation, not the ones waiting for the rewrite.",
      },
    ],
  },
  {
    slug: "the-cost-gravity-argument",
    title:
      "The cost gravity argument: why bigger models don't fix the format problem",
    subtitle:
      "Token economics will always favor compatibility layers, regardless of how smart models become.",
    date: "May 18",
    year: "2026",
    readTime: "4 min read",
    body: [
      {
        type: "p",
        text: "The most common objection I hear to building a cleaning-and-structuring layer for AI agents is some version of: won't the models just get smart enough to read raw HTML themselves? It sounds reasonable. It's also wrong, and the reason has nothing to do with intelligence.",
      },
      { type: "h2", text: "The models-will-just-handle-it fallacy" },
      {
        type: "p",
        text: "The assumption is that capability is the bottleneck. Make the model smart enough and it parses any messy page, ignores the nav, finds the price, moves on. Models are already that smart. You can hand a frontier model a 2 MB HTML blob and it will usually find what you asked for.",
      },
      {
        type: "p",
        text: "But can it and should it are different questions, and the second one is decided by economics, not capability.",
      },
      { type: "h2", text: "Tokens are the unit of gravity" },
      {
        type: "p",
        text: "Every token an agent reads costs money and latency. A raw web page is mostly tokens you don't want — scripts, inline styles, tracking, navigation, boilerplate. Feeding that to a model means paying to process noise, on every request, forever.",
      },
      {
        type: "p",
        text: "Clean, structured input can be a tenth of the size of the raw page. Same answer, a fraction of the cost, a fraction of the latency. Run that at scale — thousands of fetches an hour inside an agent loop — and the difference stops being a rounding error and becomes the whole bill.",
      },
      { type: "h2", text: "Intelligence doesn't repeal economics" },
      {
        type: "p",
        text: "Here's the part people miss: making the model smarter makes this worse, not better. A more capable model is more expensive per token. The smarter the frontier gets, the more it costs to waste its attention on a cookie banner. Cost gravity pulls in the opposite direction of the it-will-just-handle-it argument.",
      },
      {
        type: "quote",
        text: "Capability is not the constraint. Token economics is — and economics always favors the cheaper format.",
      },
      { type: "h2", text: "The compatibility layer is the cheap path" },
      {
        type: "p",
        text: "This is why a structuring layer isn't a temporary crutch that smarter models will retire. It's the economically correct place to do the work. Clean once, serve cheap, and let the expensive model spend its tokens on reasoning instead of parsing.",
      },
      {
        type: "p",
        text: "Bigger models don't fix the format problem. They make solving it more valuable.",
      },
    ],
  },
  {
    slug: "what-claude-does-when-it-fetches-a-url",
    title: "What Claude actually does when it fetches a URL",
    subtitle:
      "A breakdown of the differences between Claude, ChatGPT, Gemini, and Perplexity when reading the web.",
    date: "May 16",
    year: "2026",
    readTime: "5 min read",
    body: [
      {
        type: "p",
        text: "When you ask an AI agent to read this page, it feels like the model is browsing the way you do. It isn't. What actually happens between the URL and the answer is messier and more consequential than most builders realize, and it differs a lot depending on which system you're using.",
      },
      { type: "h2", text: "The fetch is not what you think" },
      {
        type: "p",
        text: "At a high level, fetching a URL is three steps: get the bytes, turn them into something the model can read, and decide how much of it to actually pass in. Every agent does all three. They just make wildly different choices at each step, and those choices decide what the model sees.",
      },
      { type: "h2", text: "Where they diverge" },
      {
        type: "p",
        text: "Claude, through tools and the Model Context Protocol, tends to receive whatever the tool hands it — which means quality depends entirely on the fetch layer wired up behind it. Anthropic gives you the plumbing and lets the tool decide what good input looks like.",
      },
      {
        type: "p",
        text: "ChatGPT's browsing leans on OpenAI's own retrieval and rendering stack, tuned for answer synthesis rather than faithful reproduction. Gemini sits close to Google's crawling infrastructure, the most mature at handling JavaScript-heavy pages. Perplexity is built around search-then-read, so it's biased toward many shallow fetches rather than one deep one.",
      },
      {
        type: "p",
        text: "Same URL, four different payloads reaching the model. That's why you can ask the same question of four agents and get four genuinely different answers — not because the models disagree, but because they never read the same thing.",
      },
      { type: "h2", text: "Where it breaks" },
      {
        type: "p",
        text: "All of them struggle in the same places. JavaScript-rendered content that only appears after execution. Paywalls and consent walls that return a gate instead of the article. Pages so bloated that the useful text is a thin layer over megabytes of markup. When a fetch fails quietly, the model doesn't tell you it got nothing — it just answers worse.",
      },
      { type: "h2", text: "Why this matters for builders" },
      {
        type: "p",
        text: "If you're building on agents, the fetch layer is not a detail you can ignore. It's the input distribution your whole system sits on. Controlling what the model actually receives — clean text, real content, structured fields — is often a bigger lever on quality than swapping the model.",
      },
      {
        type: "p",
        text: "This is the unglamorous layer Onto exists to own: making read this URL return the same reliable, clean result no matter which agent is asking.",
      },
    ],
  },
  {
    slug: "lighthouse-for-ai-readability-aio-score",
    title: "Lighthouse for AI readability: the case for AIO Score as a standard",
    subtitle:
      "On positioning AIO Score as the natural evolution of Web Vitals for the agent era.",
    date: "May 14",
    year: "2026",
    readTime: "4 min read",
    body: [
      {
        type: "p",
        text: "A decade ago, web performance was a vibe. Some sites felt fast, some felt slow, and nobody could agree on why. Then Google shipped Lighthouse and Web Vitals, turned fast into numbers, and the entire industry started optimizing for a score it could finally see. The agent era needs the same thing — for readability instead of speed.",
      },
      { type: "h2", text: "What Web Vitals did" },
      {
        type: "p",
        text: "Web Vitals worked because it made an invisible quality measurable. Largest Contentful Paint, Cumulative Layout Shift — these gave teams a target and a shared language. You can't optimize what you can't measure, and once you could measure perceived speed, you got a decade of improvement.",
      },
      { type: "h2", text: "The agent blind spot" },
      {
        type: "p",
        text: "Today, almost no one can tell you how readable their site is to an AI agent. Does a fetch return clean content or a wall of markup? Is the important information in the HTML or injected by JavaScript the agent never runs? Is the page one clear document or ten nested layouts? These questions decide whether an agent represents your site correctly, and right now they're completely invisible.",
      },
      { type: "h2", text: "What an AIO Score measures" },
      {
        type: "p",
        text: "An AI Optimization score — AIO Score — would put a number on agent readability:",
      },
      {
        type: "ul",
        items: [
          "How much of the page is signal versus noise.",
          "Whether core content survives a no-JavaScript fetch.",
          "How cleanly the structure maps to fields an agent can use.",
          "Whether the page is even reachable without tripping a consent gate.",
        ],
      },
      {
        type: "quote",
        text: "Web Vitals measured the page as a human perceives it. AIO Score measures the page as an agent reads it.",
      },
      { type: "h2", text: "Why a standard, not a tool" },
      {
        type: "p",
        text: "Any one company can ship a checker. That's not the point. Web Vitals mattered because it became a shared standard that publishers optimized toward and platforms rewarded. Agent readability needs the same: a metric stable enough that improving your score actually improves how every agent sees you.",
      },
      {
        type: "p",
        text: "We're going to spend the next few years arguing about how agents should read the web. We'll get there faster if we can agree on how to measure it first.",
      },
    ],
  },
  {
    slug: "why-i-built-onto-solo-in-10-weeks",
    title: "Why I built Onto solo in 10 weeks from a tier-3 college in India",
    subtitle:
      "The founder story behind the company. What worked. What didn't. What's next.",
    date: "May 10",
    year: "2026",
    readTime: "5 min read",
    body: [
      {
        type: "p",
        text: "I built the first working version of Onto by myself, in about ten weeks, from a tier-3 engineering college in India while finishing my degree. People assume that's a story about hustle. It's mostly a story about constraints, and why I'd take them again.",
      },
      { type: "h2", text: "The constraint" },
      {
        type: "p",
        text: "I didn't have a co-founder, a network of warm intros, or a runway measured in years. What I had was a clear thesis — that AI agents are blind to the live web and someone needs to build the layer that fixes it — and the time to ship something instead of talk about it.",
      },
      {
        type: "p",
        text: "Constraints sound like disadvantages until you notice what they remove. No team meant no coordination overhead. No runway meant no permission to build the wrong thing for six months. I had to find out if the idea was real, fast and cheaply.",
      },
      { type: "h2", text: "Why solo, why fast" },
      {
        type: "p",
        text: "Solo, because the slowest part of early building is alignment, and there was no one to align with. I could decide and ship in the same hour. Fast, because the only way to know if external context infrastructure was worth building was to put a real Read API in front of real agents and watch what happened.",
      },
      {
        type: "p",
        text: "Ten weeks in, Layer 1 was live and listed in Anthropic's official MCP Registry, with paying customers. That's not a vanity milestone. It's the cheapest possible proof that the thesis had a market.",
      },
      { type: "h2", text: "What worked" },
      {
        type: "p",
        text: "Shipping narrow. I didn't try to build the whole platform. I built the one primitive agents needed most — clean, structured content from any URL — and made it genuinely good. Distribution through the places agents already live, like the MCP Registry, did more than any amount of marketing would have.",
      },
      { type: "h2", text: "What didn't" },
      {
        type: "p",
        text: "Plenty. I underestimated how much of the work is reliability, not features. I spent time on things no customer asked for. Doing it solo means every mistake is yours alone, and some of them cost weeks I didn't have.",
      },
      { type: "h2", text: "What's next" },
      {
        type: "p",
        text: "Layer 1 (Read) is live. Layer 2 (Watch) — continuous monitoring of the agent web — is shipping to first design partners. Layer 3 (Govern) is the enterprise bet. The constraints are loosening, but the lesson holds: build the next narrow thing, ship it to real users, and let the work compound.",
      },
      {
        type: "p",
        text: "Solo founder, a few months in. Still just getting started.",
      },
    ],
  },
];
