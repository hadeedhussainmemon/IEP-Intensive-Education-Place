import SectionHeader from "./SectionHeader";
import CourseCard from "./CourseCard";
import { Laptop, Palette, Code, Terminal, BarChart, Shield, BookA } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const courses = [
    {
        title: "English Language",
        description: "Master spoken and written English for professional and academic success.",
        icon: BookA,
    },
    {
        title: "CIT (Computer Basics)",
        description: "Essential computer skills including MS Office, Windows, and Internet usage.",
        icon: Laptop,
    },
    {
        title: "Graphic Designing",
        description: "Learn Photoshop, Illustrator, and visual design principles to create stunning graphics.",
        icon: Palette,
    },
    {
        title: "Digital Marketing",
        description: "Master social media marketing, SEO, and content strategy to grow businesses online.",
        icon: BarChart,
    },
    {
        title: "Basic Programming",
        description: "Introduction to coding logic with Python or C++ for beginners.",
        icon: Code,
    },
    {
        title: "Ethical Hacking (Basics)",
        description: "Learn the fundamentals of cybersecurity and how to protect digital assets.",
        icon: Shield,
    },
];

export default function CoursesPreview() {
    return (
        <section className="py-24 bg-surface/30 relative">
            <div className="container px-6">
                <SectionHeader
                    title="Professional Courses"
                    subtitle="Skill up with our industry-relevant short courses designed for immediate career impact."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {courses.map((course, index) => (
                        <CourseCard
                            key={course.title}
                            {...course}
                            delay={index * 0.1}
                        />
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/courses"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-primary/50 text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                    >
                        View All Courses <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
