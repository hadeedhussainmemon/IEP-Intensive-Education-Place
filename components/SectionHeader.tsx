"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
    className?: string;
}

export default function SectionHeader({
    title,
    subtitle,
    centered = true,
    className,
}: SectionHeaderProps) {
    return (
        <div
            className={cn(
                "flex flex-col gap-4 mb-12",
                centered ? "items-center text-center" : "items-start",
                className
            )}
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold font-heading"
            >
                <span className="text-gradient hover:animate-pulse transition-all duration-500">
                    {title}
                </span>
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-muted max-w-2xl text-lg leading-relaxed"
                >
                    {subtitle}
                </motion.p>
            )}
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-gradient-to-r from-primary to-transparent rounded-full mt-2"
            />
        </div>
    );
}
