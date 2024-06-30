"use client";

import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0, x: -15 },
    enter: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 90,
            damping: 30,
        },
    },
};

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.main
            variants={variants}
            initial="hidden"
            animate="enter"
            className="overflow-hidden"
        >
            {children}
        </motion.main>
    );
}
