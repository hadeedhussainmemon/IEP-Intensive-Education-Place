import { courses } from "@/lib/courses-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { ArrowLeft, Clock, BarChart, CheckCircle } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export const dynamicParams = true;

export function generateStaticParams() {
    return courses.map((course) => ({
        slug: course.slug,
    }));
}

export default async function CourseDetailPage({ params }: PageProps) {
    const { slug } = await params;
    console.log("Rendering CourseDetailPage for slug:", slug);
    const course = courses.find((c) => c.slug === slug);
    console.log("Course found:", course?.title);

    if (!course) {
        notFound();
    }

    const Icon = course.icon;

    return (
        <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <div className="pt-32 pb-12 container px-6 relative overflow-hidden min-h-[400px] flex flex-col justify-center">
                {course.image ? (
                    <>
                        <div className="absolute inset-0 z-0">
                            <Image
                                src={course.image}
                                alt={course.title}
                                fill
                                className="object-cover opacity-30"
                                priority
                                sizes="100vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                        </div>
                    </>
                ) : (
                    <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
                )}

                <div className="relative z-10">
                    <Link
                        href="/courses"
                        className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors mb-8 group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Courses
                    </Link>

                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                        <div className="w-20 h-20 rounded-2xl bg-surface border border-white/10 flex items-center justify-center text-primary shadow-lg shadow-primary/10">
                            <Icon size={40} />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-gradient">{course.title}</h1>
                            <div className="flex flex-wrap gap-4 text-sm font-medium text-muted">
                                <span className="flex items-center gap-1.5 bg-surface/50 px-3 py-1 rounded-full border border-white/5">
                                    <Clock size={16} className="text-primary" /> {course.duration}
                                </span>
                                <span className="flex items-center gap-1.5 bg-surface/50 px-3 py-1 rounded-full border border-white/5">
                                    <BarChart size={16} className="text-secondary" /> {course.level}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="bg-surface/30 border-y border-white/5">
                <div className="container px-6 py-20">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            <section>
                                <h2 className="text-2xl font-bold font-heading mb-4">Course Overview</h2>
                                <p className="text-muted leading-relaxed text-lg">
                                    {course.fullDescription}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold font-heading mb-6">What You Will Learn</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {course.modules.map((module, index) => (
                                        <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-white/5 hover:border-primary/30 transition-colors">
                                            <CheckCircle className="text-green-400 mt-1 shrink-0" size={18} />
                                            <span className="text-white/80">{module}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-28 glass p-8 rounded-2xl border border-white/5 space-y-6">
                                <h3 className="text-xl font-bold">Ready to Start?</h3>
                                <p className="text-sm text-muted">Enrolling in this course is the first step towards mastering {course.title}. Secure your spot today!</p>

                                <div className="space-y-4">
                                    <div className="flex justify-between py-3 border-b border-white/5">
                                        <span className="text-muted">Duration</span>
                                        <span className="font-medium">{course.duration}</span>
                                    </div>
                                    <div className="flex justify-between py-3 border-b border-white/5">
                                        <span className="text-muted">Level</span>
                                        <span className="font-medium">{course.level}</span>
                                    </div>
                                    <div className="flex justify-between py-3 border-b border-white/5">
                                        <span className="text-muted">Cert.</span>
                                        <span className="font-medium">IEP Certified</span>
                                    </div>
                                </div>

                                <Link
                                    href="/admissions"
                                    className="block w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-center shadow-lg hover:shadow-primary/25 hover:scale-[1.02] transition-all duration-300"
                                >
                                    Enroll Now
                                </Link>
                                <p className="text-xs text-center text-muted">Limited seats available for the upcoming batch.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-20 container px-6">
                <SectionHeader
                    title="Related Courses"
                    subtitle="Explore other courses that might interest you."
                />
                <div className="mt-10 grid md:grid-cols-3 gap-6">
                    {courses.filter(c => c.slug !== course.slug).slice(0, 3).map(related => (
                        <Link
                            key={related.id}
                            href={`/courses/${related.slug}`}
                            className="glass p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-all group block"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-surface rounded-lg text-primary group-hover:text-white transition-colors">
                                    <related.icon size={24} />
                                </div>
                                <ArrowLeft size={20} className="rotate-180 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-muted" />
                            </div>
                            <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">{related.title}</h4>
                            <p className="text-sm text-muted line-clamp-2">{related.description}</p>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
