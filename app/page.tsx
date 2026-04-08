"use client";

import { motion } from "framer-motion";
import SocialButtons from "@/components/buttons/social-buttons";
import Footer from "@/components/footer";
import Technologies from "@/components/technologies";
import Projects from "@/components/projects";
import Experience from "@/components/experience";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1] as const,
        },
    },
};

export default function Page() {
    return (
        <motion.main
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl mx-auto border-x-2 border-dashed flex flex-col gap-y-6 sm:rounded-xl sm:mt-4 bg-background/80 backdrop-blur-sm shadow-sm min-h-screen"
        >
            {/* header */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-6"
            >
                <motion.div variants={itemVariants}>
                    <motion.h1
                        className="font-bold text-2xl sm:text-3xl bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent leading-tight"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Sumanth JM
                    </motion.h1>
                    <motion.p
                        className="text-sm sm:text-base text-muted-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Software Developer
                    </motion.p>
                </motion.div>
                <motion.div
                    variants={itemVariants}
                    className="w-full sm:w-auto flex justify-end"
                >
                    <SocialButtons />
                </motion.div>
            </motion.div>

            {/* about me */}
            <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="px-4"
            >
                <motion.p
                    className="text-sm sm:text-base mt-0 leading-relaxed text-foreground/90"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Hey there, I&apos;m{" "}
                    <span className="font-medium text-primary">Sumanth JM</span>, a
                    software developer based from{" "}
                    <span className="font-medium">Bangalore, India</span>. Currently
                    learning{" "}
                    <motion.span
                        className="inline-flex items-center gap-1 font-medium text-orange-600 dark:text-orange-400"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        Rust
                    </motion.span>{" "}
                    and{" "}
                    <motion.span
                        className="inline-flex items-center gap-1 font-medium text-purple-600 dark:text-purple-400"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        Web3
                    </motion.span>
                    .
                </motion.p>
            </motion.div>

            {/* experience */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-col gap-y-2 px-4"
            >
                <motion.h2
                    variants={itemVariants}
                    className="font-bold text-md border-b border-dashed pb-1 flex items-center gap-2"
                >
                    <motion.span
                        initial={{ rotate: 0 }}
                        whileInView={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        💼
                    </motion.span>
                    Experience
                </motion.h2>
                <Experience />
            </motion.div>

            {/* technologies */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-col gap-y-2 px-4"
            >
                <motion.h2
                    variants={itemVariants}
                    className="font-bold text-md border-b border-dashed pb-1 flex items-center gap-2"
                >
                    <motion.span
                        initial={{ rotate: 0 }}
                        whileInView={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        🛠️
                    </motion.span>
                    Technologies
                </motion.h2>
                <Technologies />
            </motion.div>

            {/* projects */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-col gap-y-2 px-4 mb-8"
            >
                <motion.h2
                    variants={itemVariants}
                    className="font-bold text-md border-b border-dashed pb-1 flex items-center gap-2"
                >
                    <motion.span
                        initial={{ rotate: 0 }}
                        whileInView={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        🚀
                    </motion.span>
                    Projects
                </motion.h2>
                <Projects />
            </motion.div>

            {/* footer */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <Footer />
            </motion.div>
        </motion.main>
    );
}
