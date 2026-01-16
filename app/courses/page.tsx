"use client";

import Navbar from "@/components/Navbar";
import SectionHeader from "@/components/SectionHeader";
import CourseCard from "@/components/CourseCard";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { courses } from "@/lib/courses-data";
import CourseDropdown from "@/components/CourseDropdown";

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

                <CourseDropdown />

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
