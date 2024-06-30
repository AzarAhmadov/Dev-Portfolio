"use client";

import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0, x: -30 },
    enter: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 50,
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
