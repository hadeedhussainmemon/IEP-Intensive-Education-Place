"use client";

import Navbar from "@/components/Navbar";
import SectionHeader from "@/components/SectionHeader";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { motion } from "framer-motion";
import { FileText, UserCheck, CreditCard, PartyPopper } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AdmissionsPage() {
    const steps = [
        {
            title: "Registration",
            desc: "Visit our campus and fill out the admission form. Bring a copy of your B-Form/ID Card.",
            icon: FileText,
        },
        {
            title: "Assessment",
            desc: "For academic classes, a short concept assessment test may be conducted to evaluate current standing.",
            icon: UserCheck,
        },
        {
            title: "Fee Submission",
            desc: "Submit the admission fee and first month's tuition to confirm your seat.",
            icon: CreditCard,
        },
        {
            title: "Welcome to IEP",
            desc: "Receive your student ID card, schedule, and join the orientation session.",
            icon: PartyPopper,
        },
    ];

    return (
        <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
            <Navbar />

            <div className="pt-32 pb-20 container px-6">
                <SectionHeader
                    title="Admission Process"
                    subtitle="Join the community of learners. Our admission process is simple and transparent."
                    centered={true}
                />

                <div className="max-w-4xl mx-auto mb-20 relative">
                    {/* Connector Line */}
                    <div className="absolute left-[27px] top-0 bottom-0 w-1 bg-white/10 md:hidden" />
                    <div className="absolute top-[40px] left-0 right-0 h-1 bg-white/10 hidden md:block" />

                    <div className="grid md:grid-cols-4 gap-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="relative z-10 flex flex-col items-center md:text-center"
                            >
                                <div className="w-14 h-14 rounded-full bg-surface border-4 border-background flex items-center justify-center text-primary shadow-lg mb-6 z-20">
                                    <step.icon size={24} />
                                </div>
                                <div className="pl-12 md:pl-0">
                                    <h3 className="text-xl font-bold font-heading mb-2">{step.title}</h3>
                                    <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Requirements Section */}
                <div className="glass p-1 p-md-0 rounded-3xl max-w-5xl mx-auto border border-white/5 overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="p-10">
                            <h3 className="text-2xl font-bold font-heading mb-6">Requirements</h3>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="font-bold text-lg mb-3 text-secondary">For Academic Coaching</h4>
                                    <ul className="list-disc list-inside text-muted space-y-2">
                                        <li>Copy of Result Card (Previous Class)</li>
                                        <li>Copy of B-Form</li>
                                        <li>2 Passport size photographs</li>
                                        <li>Parent's CNIC Copy</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-3 text-secondary">For Short Courses</h4>
                                    <ul className="list-disc list-inside text-muted space-y-2">
                                        <li>Copy of ID Card / B-Form</li>
                                        <li>Basic computer literacy (for advanced courses)</li>
                                        <li>1 Passport size photograph</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-full min-h-[400px]">
                            <Image
                                src="/images/admission.png"
                                alt="Admission Requirements"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-surface/80 md:to-surface/10" />
                        </div>
                    </div>
                </div>

            </div>

            <div className="text-center pb-20">
                <h3 className="text-2xl font-bold mb-6">Have Questions?</h3>
                <Link
                    href="/contact"
                    className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors font-medium border border-white/5"
                >
                    Contact Admissions Office
                </Link>
            </div>

            <Footer />
        </main>
    );
}
