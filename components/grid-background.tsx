"use client";

import { motion } from "framer-motion";

export default function GridBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Diagonal Striped Grid Spotlight Background */}
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{
                    backgroundImage: `
                        linear-gradient(90deg, rgba(100,100,100,0.08) 1px, transparent 0),
                        linear-gradient(180deg, rgba(100,100,100,0.08) 1px, transparent 0),
                        repeating-linear-gradient(45deg, rgba(100,100,100,0.05) 0 1px, transparent 1px 8px)
                    `,
                    backgroundSize: "40px 40px, 40px 40px, 40px 40px",
                }}
            />

            {/* Animated Spotlight */}
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                style={{
                    backgroundImage: `
                        linear-gradient(90deg, rgba(100,100,100,0.15) 1px, transparent 0),
                        linear-gradient(180deg, rgba(100,100,100,0.15) 1px, transparent 0),
                        repeating-linear-gradient(45deg, rgba(100,100,100,0.1) 0 2px, transparent 2px 10px)
                    `,
                    backgroundSize: "40px 40px, 40px 40px, 40px 40px",
                    WebkitMask: "radial-gradient(circle at var(--x, 50%) var(--y, 50%), black 0%, transparent 25%)",
                    mask: "radial-gradient(circle at var(--x, 50%) var(--y, 50%), black 0%, transparent 25%)",
                    animation: "spotlight 12s ease-in-out infinite",
                }}
            />

            {/* Secondary subtle glow following spotlight */}
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                style={{
                    background: "radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(100,100,100,0.03) 0%, transparent 40%)",
                    animation: "spotlight 12s ease-in-out infinite",
                }}
            />

            {/* Dark mode adjustments */}
            <style jsx>{`
                @media (prefers-color-scheme: dark) {
                    .grid-spotlight {
                        --grid-color: rgba(150, 150, 150, 0.1);
                        --spotlight-color: rgba(150, 150, 150, 0.2);
                    }
                }
            `}</style>
        </div>
    );
}
