"use client";

import Link from "next/link";
import { Badge } from "./ui/badge";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

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

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut" as const,
        },
    },
};

export default function Projects() {
    return (
        <motion.div
            className="flex flex-col gap-y-8 w-full mt-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
        >
            {projects.map((project) => (
                <motion.div
                    key={project.title}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-y-3 p-4 -mx-4 rounded-xl border border-transparent hover:border-border/50 hover:bg-muted/30 transition-colors"
                >
                    <div className="flex flex-row items-center justify-between">
                        <motion.h3
                            className="font-bold text-lg"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                        >
                            {project.title}
                        </motion.h3>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href={`https://github.com/${project.repo}`}
                                target="_blank"
                                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-x-1 text-sm group"
                            >
                                <motion.span
                                    className="hidden sm:inline"
                                    initial={{ opacity: 0.7 }}
                                    whileHover={{ opacity: 1 }}
                                >
                                    {project.repo}
                                </motion.span>
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Github className="w-4 h-4" />
                                </motion.div>
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        className="flex flex-wrap gap-2"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.05,
                                },
                            },
                        }}
                    >
                        {project.tech.map((item) => (
                            <motion.div
                                key={item}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.8 },
                                    visible: { opacity: 1, scale: 1 },
                                }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Badge
                                    variant="secondary"
                                    className="px-2 py-0 text-[10px] font-medium uppercase tracking-wider"
                                >
                                    {item}
                                </Badge>
                            </motion.div>
                        ))}
                    </motion.div>

                    <ul className="list-disc list-outside ml-4 flex flex-col gap-y-2">
                        {project.description.map((point, pointIndex) => (
                            <motion.li
                                key={pointIndex}
                                className="text-sm leading-relaxed text-foreground/80"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: pointIndex * 0.1,
                                    duration: 0.4,
                                }}
                            >
                                {point}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </motion.div>
    );
}
