"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// Fade in from bottom animation
export function FadeInUp({
    children,
    delay = 0,
    duration = 0.5,
    className = "",
}: {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Fade in animation
export function FadeIn({
    children,
    delay = 0,
    duration = 0.5,
    className = "",
}: {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Scale on hover wrapper
export function ScaleOnHover({
    children,
    scale = 1.05,
    className = "",
}: {
    children: ReactNode;
    scale?: number;
    className?: string;
}) {
    return (
        <motion.div
            whileHover={{ scale }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Stagger container for children animations
export function StaggerContainer({
    children,
    staggerDelay = 0.1,
    className = "",
}: {
    children: ReactNode;
    staggerDelay?: number;
    className?: string;
}) {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Child item for stagger animations
export function StaggerItem({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5,
                        ease: [0.25, 0.1, 0.25, 1],
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Slide in from left
export function SlideInLeft({
    children,
    delay = 0,
    className = "",
}: {
    children: ReactNode;
    delay?: number;
    className?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Slide in from right
export function SlideInRight({
    children,
    delay = 0,
    className = "",
}: {
    children: ReactNode;
    delay?: number;
    className?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Hover lift effect for cards
export function HoverLift({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            whileHover={{
                y: -4,
                transition: { duration: 0.2 },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Animated underline on hover
export function AnimatedUnderline({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <motion.div className={`relative inline-block ${className}`}>
            {children}
            <motion.span
                className="absolute bottom-0 left-0 h-[2px] bg-primary w-0"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    );
}

// Pulse animation for badges/icons
export function Pulse({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            animate={{
                scale: [1, 1.05, 1],
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
