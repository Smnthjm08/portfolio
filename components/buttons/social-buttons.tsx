"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 300,
            damping: 20,
        },
    },
};

const SocialButtons = () => {
    return (
        <motion.div
            className="flex items-center justify-center gap-3 flex-wrap w-full sm:w-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={itemVariants}>
                <motion.div
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                >
                    <Button
                        variant="outline"
                        type="button"
                        className="rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                        <Image
                            src="https://images.shadcnspace.com/assets/svgs/icon-github.svg"
                            alt="github icon"
                            width={16}
                            height={16}
                            className="dark:hidden"
                        />
                        <Image
                            src="https://images.shadcnspace.com/assets/svgs/icon-github-white.svg"
                            alt="github icon"
                            height={16}
                            width={16}
                            className="hidden dark:block"
                        />
                    </Button>
                </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
                <motion.div
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                >
                    <Button
                        variant="outline"
                        type="button"
                        className="rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                        <Image
                            src="./linkedin.svg"
                            alt="linkedin icon"
                            width={16}
                            height={16}
                        />
                    </Button>
                </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
                <motion.div
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                >
                    <Button
                        variant="outline"
                        type="button"
                        className="rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                        <Image
                            src="./discord.svg"
                            alt="discord icon"
                            width={16}
                            height={16}
                        />
                    </Button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default SocialButtons;
