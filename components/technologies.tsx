"use client";

import Image from "next/image";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

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
            { name: "Docker", icon: "/technologies/docker.svg" },
            { name: "Kubernetes", icon: "/technologies/kubernetes.svg" },
            { name: "AWS", icon: "/technologies/aws.svg" },
            { name: "Kafka", icon: "/technologies/kafka.svg" },
            { name: "Redis", icon: "/technologies/redis.svg" },
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut" as const,
        },
    },
};

const categoryVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut" as const,
        },
    },
};

export default function Technologies() {
    return (
        <motion.div
            className="flex flex-col gap-y-6 w-full mt-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
        >
            {techCategories.map((category, categoryIndex) => (
                <motion.div
                    key={category.title}
                    className="flex flex-col gap-y-2"
                    variants={categoryVariants}
                    custom={categoryIndex}
                >
                    <motion.h3
                        className="font-semibold text-sm text-muted-foreground"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 }}
                    >
                        {category.title}
                    </motion.h3>
                    <motion.div
                        className="flex flex-wrap gap-2"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {category.items.map((item, itemIndex) => (
                            <motion.div
                                key={item.name}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    y: -2,
                                    transition: { duration: 0.2 },
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Badge
                                    variant="secondary"
                                    className="h-10 transition-colors hover:bg-primary/10 hover:border-primary/30 border border-transparent cursor-default"
                                >
                                    <motion.div
                                        className="flex items-center gap-x-2"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: itemIndex * 0.05 }}
                                    >
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                        >
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
                                        </motion.div>
                                        <span className="text-sm font-medium">{item.name}</span>
                                    </motion.div>
                                </Badge>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            ))}
        </motion.div>
    );
}
