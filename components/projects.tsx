import Link from "next/link";
import { Badge } from "./ui/badge";
import { Github } from "lucide-react";

const projects = [
    {
        title: "Zapier Clone",
        tech: ["Next.js", "Express.js", "PostgreSQL", "Kafka"],
        repo: "smnthjm08/zapier-clone",
        description: [
            "Designed an event-driven automation platform that allows users to define workflows triggered by external events via webhooks, with ordered execution using Kafka consumers.",
            "Integrated OAuth-based authentication using Better Auth with GitHub and Google providers, enabling secure onboarding, session management, and multi-provider login.",
            "Integrated Zoho Mail for automated email actions, applying an outbox pattern where Kafka consumers process queued events to ensure reliable and ordered execution."
        ]
    },
    {
        title: "ShipIt",
        tech: ["Next.js", "Node.js", "PostgreSQL", "S3", "Redis", "WS"],
        repo: "smnthjm08/ShipIt",
        description: [
            "Built the frontend for a static site deployment platform, enabling users to authenticate via GitHub OAuth, grant repository access, and deploy public and private repositories through an intuitive UI.",
            "Architected deployment workflows and CI/CD pipelines that allow users to select repositories, trigger builds, and track deployment states, with execution managed via a Redis-backed queue.",
            "Enabled real-time build log streaming using WebSockets, surfacing live worker logs and build stages to improve deployment visibility and debugging."
        ]
    },
    {
        title: "Urbanscape",
        tech: ["MERN Stack", "Prisma", "MongoDB", "JWT"],
        repo: "smnthjm08/urbanscape",
        description: [
            "Built a full-stack real estate platform with secure authentication and complete CRUD APIs for managing dynamic property listings using Express.js and Prisma with MongoDB.",
            "Developed a responsive React frontend using the Context API for global state management, enabling efficient handling of authentication, filters, and user interactions."
        ]
    },
    {
        title: "Vault3",
        tech: ["Next.js", "Solana Web3.js", "Ethers.js"],
        repo: "smnthjm08/vault3",
        description: [
            "Effortless Solana and Ethereum wallet creation with mnemonic phrases.",
            "Instantly generate Ethereum and Solana wallets with mnemonic phrases and manage them securely.",
            "Easily copy wallet addresses and manage multiple wallets through an intuitive interface."
        ]
    }
];


export default function Projects() {
    return (
        <div className="flex flex-col gap-y-10 w-full mt-4">
            {projects.map((project) => (
                <div key={project.title} className="flex flex-col gap-y-3">
                    <div className="flex flex-row items-center justify-between">
                        <h3 className="font-bold text-lg">{project.title}</h3>
                        <Link
                            href={`https://github.com/${project.repo}`}
                            target="_blank"
                            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-x-1 text-sm"
                        >
                            <Github className="w-3 h-3" />
                            <span className="hidden sm:inline">{project.repo}</span>
                        </Link>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((item) => (
                            <Badge key={item} variant="secondary" className="px-2 py-0 text-[10px] font-medium uppercase tracking-wider">
                                {item}
                            </Badge>
                        ))}
                    </div>

                    <ul className="list-disc list-outside ml-4 flex flex-col gap-y-2">
                        {project.description.map((point, index) => (
                            <li key={index} className="text-sm leading-relaxed">
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
