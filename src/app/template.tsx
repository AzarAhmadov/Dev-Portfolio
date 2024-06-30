"use client";

import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0, scale: 0.95 },
    enter: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
        },
    },
};

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.main
            variants={variants}
            initial="hidden"
            animate="enter"
        >
            {children}
        </motion.main>
    );
}
