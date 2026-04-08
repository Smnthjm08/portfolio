"use client";

import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function GetInTouchButton({ className }: { className?: string }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
        >
            <Button
                className={cn(
                    "group p-1 bg-primary text-white font-medium flex gap-2 justify-between items-center max-w-4xl rounded-full ps-5 h-auto border-0 shadow-lg hover:shadow-xl transition-shadow",
                    className
                )}
                size={"sm"}
            >
                <Link
                    href="/contact"
                    className="flex items-center gap-3 text-primary-foreground text-sm font-medium"
                >
                    Get In Touch
                    <motion.div
                        className="p-2 bg-background rounded-full"
                        whileHover={{ rotate: 45 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Icon
                            className="text-foreground"
                            icon="lucide:arrow-up-right"
                            width={16}
                            height={16}
                        />
                    </motion.div>
                </Link>
            </Button>
        </motion.div>
    );
}
