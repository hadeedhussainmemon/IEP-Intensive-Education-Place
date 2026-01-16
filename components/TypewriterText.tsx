"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

export default function TypewriterText({ words }: { words: string[] }) {
    const [index, setIndex] = useState(0);
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) => words[index].slice(0, latest));

    useEffect(() => {
        const controls = animate(count, words[index].length, {
            type: "tween",
            duration: 1.5,
            ease: "easeInOut",
            onComplete: () => {
                setTimeout(() => {
                    setIndex((prev) => (prev + 1) % words.length);
                    count.set(0);
                }, 2000); // Wait 2s before changing word
            },
        });
        return controls.stop;
    }, [index, words, count]);

    return (
        <span className="text-gradient inline-flex">
            <motion.span>{displayText}</motion.span>
            <span className="w-1 h-10 bg-primary ml-1 animate-pulse" />
        </span>
    );
}
