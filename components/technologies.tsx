"use client";

import Image from "next/image";
import { Badge } from "./ui/badge";

const techCategories = [
    {
        title: "Languages",
        items: [
            { name: "JavaScript", icon: "/technologies/javascript.svg" },
            { name: "TypeScript", icon: "/technologies/typescript.svg" },
            { name: "Python", icon: "/technologies/python.svg" },
            { name: "Go", icon: "/technologies/go.svg" },
        ]
    },
    {
        title: "Frontend",
        items: [
            { name: "HTML", icon: "/technologies/html.svg" },
            { name: "CSS", icon: "/technologies/css.svg" },
            // { name: "Bootstrap", icon: "/technologies/bootstrap.svg" },
            { name: "Tailwind CSS", icon: "/technologies/tailwindcss.svg" },
            { name: "React.js", icon: "/technologies/react.svg" },
            { name: "Next.js", icon: "/technologies/nextjs.svg" },
        ]
    },
    {
        title: "Backend",
        items: [
            { name: "Node.js", icon: "/technologies/nodejs.svg" },
            { name: "Express.js", icon: "/technologies/express.svg" },
            { name: "Django", icon: "/technologies/django.svg" },
            // { name: "Django REST Framework", icon: "/technologies/drf.svg" },
            { name: "WebSockets", icon: "/technologies/websockets.svg" },
        ]
    },
    {
        title: "Databases",
        items: [
            { name: "MySQL", icon: "/technologies/mysql.svg" },
            { name: "MongoDB", icon: "/technologies/mongodb.svg" },
            { name: "PostgreSQL", icon: "/technologies/postgres.svg" },
            { name: "Prisma ORM", icon: "/technologies/prisma.svg" },
        ]
    },
    {
        title: "DevOps / Tools",
        items: [
            { name: "Git", icon: "/technologies/git.svg" },
            { name: "GitHub Actions", icon: "/github.svg" },
            // { name: "GitHub Actions", icon: "/technologies/github-actions.svg" },
            { name: "Docker", icon: "/technologies/docker.svg" },
            { name: "Kubernetes", icon: "/technologies/kubernetes.svg" },
            { name: "AWS", icon: "/technologies/aws.svg" },
            { name: "Kafka", icon: "/technologies/kafka.svg" },
            { name: "Redis", icon: "/technologies/redis.svg" },
        ]
    }
];

export default function Technologies() {
    return (
        <div className="flex flex-col gap-y-6 w-full">
            {techCategories.map((category) => (
                <div key={category.title} className="flex flex-col gap-y-2">
                    <h3 className="font-semibold text-sm text-muted-foreground">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                        {category.items.map((item) => (
                            <Badge key={item.name} variant={"secondary"} className="h-10 transition-colors">
                                <div className="flex items-center gap-x-2">
                                    <Image
                                        src={item.icon}
                                        alt={item.name}
                                        className="w-4 h-4"
                                        width={16}
                                        height={16}
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                        }}
                                    />
                                    <span className="text-sm font-medium">{item.name}</span>
                                </div>
                            </Badge>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}