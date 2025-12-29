"use client";

import Navbar from "@/components/Navbar";
import SectionHeader from "@/components/SectionHeader";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Microscope, Calculator } from "lucide-react";

export default function AcademicsPage() {
    const classes = [
        {
            grade: "Class 9",
            subjects: ["Mathematics", "Physics", "Chemistry", "Computer Science / Biology", "English"],
            focus: "Building strong foundations and concept clarity.",
        },
        {
            grade: "Class 10",
            subjects: ["Mathematics", "Physics", "Chemistry", "Computer Science / Biology", "English"],
            focus: "Board exam preparation and high-scoring strategies.",
        },
        {
            grade: "Class 11 (F.Sc / ICS)",
            subjects: ["Math/Bio", "Physics", "Chemistry", "Computer Science", "English"],
            focus: "Advanced concepts and transition to college-level study.",
        },
        {
            grade: "Class 12 (F.Sc / ICS)",
            subjects: ["Math/Bio", "Physics", "Chemistry", "Computer Science", "English"],
            focus: "Final board prep and university entrance guidance.",
        },
    ];

    return (
        <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
            <Navbar />

            <div className="pt-32 pb-20 container px-6">
                <SectionHeader
                    title="Academic Coaching"
                    subtitle="Comprehensive coaching for Matric and Intermediate students with a focus on results."
                    centered={true}
                />

                <div className="grid lg:grid-cols-2 gap-12 mb-24">
                    {classes.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                    <GraduationCap size={24} />
                                </div>
                                <h3 className="text-2xl font-bold font-heading">{item.grade}</h3>
                            </div>

                            <p className="text-muted mb-6 italic border-l-2 border-primary pl-4">
                                "{item.focus}"
                            </p>

                            <h4 className="font-semibold text-lg mb-4 text-white">Subjects Covered:</h4>
                            <div className="flex flex-wrap gap-2">
                                {item.subjects.map((sub) => (
                                    <span key={sub} className="px-3 py-1 rounded-full bg-surface border border-white/10 text-sm text-gray-300">
                                        {sub}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Methodology Section */}
                <div className="glass rounded-3xl p-10 border border-white/5">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold font-heading mb-4">Our Teaching Methodology</h3>
                        <p className="text-muted">How we ensure every student succeeds.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Concept Clarity", desc: "No rote learning. We focus on deep understanding.", icon: Microscope },
                            { title: "Exam Strategy", desc: "Past paper practice and time management techniques.", icon: Calculator },
                            { title: "Regular Testing", desc: "Weekly and monthly tests to track progress.", icon: BookOpen },
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <div className="mx-auto w-16 h-16 rounded-2xl bg-surface mb-6 flex items-center justify-center text-secondary border border-white/10 shadow-lg">
                                    <item.icon size={32} />
                                </div>
                                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                                <p className="text-muted text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <CTA />
            <Footer />
        </main>
    );
}
