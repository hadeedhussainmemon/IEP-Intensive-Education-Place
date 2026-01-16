"use client";

import Navbar from "@/components/Navbar";
import SectionHeader from "@/components/SectionHeader";
import CourseCard from "@/components/CourseCard";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { courses } from "@/lib/courses-data";

export default function CoursesPage() {
    return (
        <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
            <Navbar />

            <div className="pt-32 pb-20 container px-6">
                <SectionHeader
                    title="Professional Courses"
                    subtitle="Explore our wide range of skill-based courses designed to make you industry-ready."
                    centered={true}
                />

                {/* Course Jump Dropdown */}
                <div className="max-w-md mx-auto mb-12 relative z-20">
                    <div className="relative">
                        <select
                            onChange={(e) => {
                                if (e.target.value) {
                                    window.location.href = `/courses/${e.target.value}`;
                                }
                            }}
                            className="w-full px-6 py-4 bg-surface/50 border border-white/10 rounded-xl appearance-none text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all cursor-pointer backdrop-blur-sm shadow-xl"
                            defaultValue=""
                        >
                            <option value="" disabled>Jump to a course...</option>
                            {courses.map((course) => (
                                <option key={course.id} value={course.slug} className="bg-surface text-white py-2">
                                    {course.title}
                                </option>
                            ))}
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {courses.map((course, index) => (
                        <CourseCard
                            key={course.id}
                            title={course.title}
                            description={course.description}
                            icon={course.icon}
                            href={`/courses/${course.slug}`}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>

            <CTA />
            <Footer />
        </main>
    );
}
