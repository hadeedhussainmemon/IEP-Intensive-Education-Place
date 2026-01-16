"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import { courses } from "@/lib/courses-data";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CourseDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative w-full max-w-md mx-auto mb-12 z-50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-full px-6 py-4 rounded-xl flex items-center justify-between text-left transition-all duration-300 group",
                    isOpen
                        ? "bg-surface border border-primary/50 ring-2 ring-primary/20"
                        : "glass border border-white/10 hover:border-white/20 hover:bg-white/5"
                )}
            >
                <div className="flex items-center gap-3 text-white/90">
                    <Search className={cn("w-5 h-5 transition-colors", isOpen ? "text-primary" : "text-muted")} />
                    <span className="font-medium">Jump to a course...</span>
                </div>
                <ChevronDown
                    className={cn(
                        "w-5 h-5 text-muted transition-transform duration-300",
                        isOpen && "rotate-180 text-primary"
                    )}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 right-0 mt-2 p-2 bg-surface/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden max-h-[300px] overflow-y-auto scrollbar-thin"
                    >
                        {courses.map((course) => (
                            <Link
                                key={course.id}
                                href={`/courses/${course.slug}`}
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                                onClick={() => setIsOpen(false)}
                            >
                                <div className="w-8 h-8 rounded-lg bg-surface border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:scale-110 transition-all">
                                    <course.icon className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                                    {course.title}
                                </span>
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Backdrop to close on click outside */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-[-1]"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
}
