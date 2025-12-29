"use client";

import { useRef } from "react";
import { courses } from "@/lib/courses-data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { ArrowRight } from "lucide-react";

export default function CoursesGallery() {
    const containerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (containerRef.current) {
            const scrollAmount = 350; // Card width + gap
            containerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="py-24 bg-background relative border-t border-white/5">
            <div className="container px-6 mb-12 flex items-end justify-between">
                <SectionHeader
                    title="Our Courses"
                    subtitle="Swipe through our comprehensive range of professional and academic courses."
                    className="mb-0"
                />

                {/* Navigation Buttons */}
                <div className="hidden md:flex gap-4">
                    <button
                        onClick={() => scroll("left")}
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 active:scale-95 transition-all text-white"
                        aria-label="Scroll left"
                    >
                        <ArrowRight size={20} className="rotate-180" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/80 active:scale-95 transition-all shadow-lg hover:shadow-primary/25"
                        aria-label="Scroll right"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            {/* Scroll Container */}
            <div
                ref={containerRef}
                className="flex overflow-x-auto gap-6 px-6 pb-12 snap-x snap-mandatory scrollbar-none"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {courses.map((course, index) => (
                    <motion.div
                        key={course.id}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="snap-center shrink-0 first:pl-6 last:pr-6"
                    >
                        <Link
                            href={`/courses/${course.slug}`}
                            className="group relative block w-[300px] h-[450px] rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 transition-colors duration-300"
                        >
                            {/* Background Image or Fallback */}
                            {course.image ? (
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 300px, 400px"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-surface/50 flex items-center justify-center">
                                    <course.icon size={64} className="text-white/10 group-hover:text-primary/20 transition-colors duration-500" />
                                </div>
                            )}

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <div className="w-14 h-14 rounded-2xl bg-surface/30 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 text-white group-hover:bg-primary group-hover:border-primary transition-colors duration-300 shadow-lg">
                                    <course.icon size={28} />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 line-clamp-1 group-hover:text-primary transition-colors">{course.title}</h3>
                                <p className="text-sm text-gray-300 line-clamp-2 mb-6 leading-relaxed">{course.description}</p>

                                <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:translate-x-2 transition-transform duration-300 uppercase tracking-wider">
                                    View Details <ArrowRight size={16} />
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
