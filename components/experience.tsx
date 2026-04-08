"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        role: "Software Developer",
        company: "Cron Labs",
        location: "Bangalore, India",
        duration: "July 2024 – Present",
        description: [
            "Delivered 12+ end-to-end features for the SmartGrow project using MySQL, React, Django, and Django Rest Framework; key contributions include a Custom Routine Creation feature and dependent routine linkage, enabling cascading data flow between tasks and reducing task management time by 30%.",
            "Integrated the Metrc API for plants, plant batches, and strains, based on client feedback that manual updates to 'OK Metrc' took 30–40 minutes; reduced syncing time to 5–10 minutes, improving operational efficiency by 50% and minimizing manual errors.",
            "Developed a scalable Invoice Extraction Platform leveraging LLMs to transform unstructured invoices into structured data, implementing RBAC and secure authentication, and building RESTful APIs with optimized queries, debounced searches, and API pagination, reducing API calls and improving data load times by 30%."
        ]
    },
    {
        role: "Full Stack Developer Intern",
        company: "Varcons Technologies",
        location: "Bangalore, India",
        duration: "Aug 2023 – Sep 2023",
        description: [
            "Implemented 3 client-requested features, including property search filters and interactive maps, using MERN stack, delivering a user-friendly interface with a 95% passing rate during testing.",
            "Followed a Test-Driven Development (TDD) approach using Jest to ensure reliability and quality, leading to a 15% reduction in bugs during the deployment phase."
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
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

export default function Experience() {
    return (
        <motion.div
            className="flex flex-col gap-y-8 w-full mt-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
        >
            {experiences.map((experience, index) => (
                <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-y-3 p-4 -mx-4 rounded-xl border border-transparent hover:border-border/50 hover:bg-muted/30 transition-colors"
                >
                    <div className="flex flex-row items-center justify-between">
                        <div>
                            <motion.h3
                                className="font-semibold text-lg"
                                whileHover={{ x: 4 }}
                                transition={{ duration: 0.2 }}
                            >
                                {experience.role}
                            </motion.h3>
                            <motion.p
                                className="text-sm font-medium text-muted-foreground"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                {experience.company}
                            </motion.p>
                        </div>
                        <div className="text-right">
                            <motion.p
                                className="text-sm font-medium"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                {experience.duration}
                            </motion.p>
                            <p className="text-xs text-muted-foreground">{experience.location}</p>
                        </div>
                    </div>

                    <ul className="list-disc list-outside ml-4 flex flex-col gap-y-2">
                        {experience.description.map((point, pointIndex) => (
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
