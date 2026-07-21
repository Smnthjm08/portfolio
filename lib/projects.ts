export type Project = {
  slug: string;
  name: string;
  description: string;
  content: string;
  tags: string[];
  demoHref?: string;
  githubHref?: string;
  completed?: boolean;
};

export const projects: Project[] = [
  {
    slug: "sentinel",
    name: "Sentinel",
    description: "Programmable on-chain compliance enforcement for Token-2022 tokens on Solana.",
    content:
      "Sentinel is a Token-2022 Transfer Hook program that enforces customizable compliance rules atomically on every token transfer — no off-chain monitoring, no backend approval queue, no centralized gatekeeper. When a wallet calls transfer_checked on a Sentinel-protected mint, Token-2022 CPIs into Sentinel before the transfer settles, evaluating the sender's on-chain compliance record against an upgradeable ruleset and allowing or reverting the transaction atomically.",
    tags: ["Solana", "Anchor", "Token-2022", "TypeScript"],
    githubHref: "https://github.com/Smnthjm08/sentinel",
    demoHref: "https://sentinel.smnthjm08.dev/",
  },
  {
    slug: "quota",
    name: "Quota",
    description: "On-chain enterprise spending vault with per-seat quotas for AI agents and teams on Solana.",
    content:
      "Quota is a Solana-powered usage and quota management platform for B2B/SaaS APIs. Companies deposit USDC into an on-chain Vault and allocate funds into individual Seats — each representing an API key, user, or team — with its own usage limit. Usage is enforced on-chain via Anchor smart contracts, with a Node.js backend triggering consume instructions and validating limits at both the on-chain and off-chain layer to prevent over-allocation.",
    tags: ["Solana", "Anchor", "TypeScript", "USDC"],
    githubHref: "https://github.com/Smnthjm08/quota",
    demoHref: "https://quota-sol.smnthjm08.dev/",
  },
  {
    slug: "goalana",
    name: "Goalana",
    description: "Trustless World Cup prediction markets on Solana, settled on-chain from a verifiable sports oracle.",
    content:
      "Built for the TxODDS × Superteam Prediction Markets & Settlement track, Goalana settles World Cup prediction markets without an admin deciding the outcome. Each market resolves via a TxLINE Merkle proof verified on-chain, inside the settlement transaction itself — a wrong proof simply reverts, so money can only move on a proof the oracle program accepts. Every settlement is inspectable end-to-end, down to the on-chain CPI on Solana Explorer.",
    tags: ["Solana", "Anchor", "TypeScript", "Oracles"],
    githubHref: "https://github.com/Smnthjm08/goalana",
    demoHref: "https://goalana.smnthjm08.dev/",
    completed: true,
  },
  {
    slug: "shipit",
    name: "ShipIt",
    description: "Self-hosted deployment platform inspired by Vercel — GitHub repo in, live URL out.",
    content:
      "ShipIt connects a GitHub repo, triggers an async build through a Redis-backed job queue, runs the build in an isolated Docker container per deployment, and uploads the resulting artifacts to S3. Completed deployments are served through an Nginx reverse proxy on their own subdomain, with status tracked through the full pending → building → success/failed pipeline. Built to explore the infra fundamentals — job queues, worker-based builds, containerized execution — behind platforms like Vercel.",
    tags: ["TypeScript", "Docker", "Redis", "AWS S3"],
    githubHref: "https://github.com/Smnthjm08/ShipIt",
  },
  {
    slug: "mini-sealevel",
    name: "Mini Sealevel Runtime",
    description: "A from-scratch Rust implementation of Solana's Sealevel parallel transaction execution model.",
    content:
      "Solana's Sealevel runtime lets independent transactions execute concurrently by having each transaction declare the accounts it reads and writes upfront. This project reimplements the core scheduling ideas — read/write account locking that lets disjoint transactions run in parallel while conflicting ones are safely serialized — without the complexity of the production runtime.",
    tags: ["Rust", "Solana", "Concurrency"],
    githubHref: "https://github.com/Smnthjm08/mini-sealevel",
  },
  {
    slug: "constellation-erasure",
    name: "Constellation Erasure",
    description: "A Rust implementation of Constellation-inspired Reed-Solomon erasure coding for Solana's broadcast stage.",
    content:
      "Explores the Reed-Solomon forward error correction pipeline that Solana's broadcast stage relies on, extending it toward the Constellation paper's PSlice/PShred architecture. Includes randomized fuzzing and boundary recovery proofs alongside a parameterized encoder foundation.",
    tags: ["Rust", "Reed-Solomon", "Solana"],
    githubHref: "https://github.com/Smnthjm08/constellation-erasure",
  },
  {
    slug: "chess",
    name: "Chess",
    description: "Real-time 1v1 chess, played over WebSockets.",
    content:
      "A Turborepo monorepo with a dedicated WebSocket backend for live move synchronization, a separate HTTP backend, a Next.js web client, and a shared Prisma-backed db package. Built to explore real-time state synchronization and game-server architecture outside of the request/response model.",
    tags: ["TypeScript", "WebSockets", "Turborepo"],
    githubHref: "https://github.com/Smnthjm08/chess",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
