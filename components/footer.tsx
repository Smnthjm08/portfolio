"use client";

import GetInTouchButton from "@/components/buttons/get-in-touch-button";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.footer
            className="w-full max-w-4xl mx-auto border-t mt-12 mb-8 px-2 sm:px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
        >
            <div className="mx-auto px-0 sm:px-4 py-4 md:py-6">
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-between gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link
                            href="/"
                            className="font-semibold tracking-tight text-sm mb-2 sm:mb-0 hover:text-primary transition-colors"
                        >
                            © 2026 Sumanth.{" "}
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <GetInTouchButton className="hidden sm:flex" />
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="sm:hidden"
                    >
                        <Link
                            href="/"
                            className="p-2 rounded-full border bg-primary border-border/40 backdrop-blur hover:bg-background transition"
                            aria-label="Collaborate"
                        >
                            <Icon icon="lucide:arrow-up-right" width={18} height={18} />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;
