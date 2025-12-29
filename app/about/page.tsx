"use client";

import Navbar from "@/components/Navbar";
import SectionHeader from "@/components/SectionHeader";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    const philosophyPoints = [
        "Student-Centric Approach: We tailor our teaching to individual learning styles.",
        "Holistic Development: Focusing on both academic excellence and character building.",
        "Future-Ready Skills: API integrating professional skills with traditional education.",
        "Results-Oriented: Proven methodologies to ensure top grades and concept clarity.",
    ];

    return (
        <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
            <Navbar />

            <div className="pt-32 pb-20 container px-6">
                <SectionHeader
                    title="About IEP"
                    subtitle="A premier educational institute committed to academic excellence and professional skill development."
                />

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-12 mb-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] rounded-3xl overflow-hidden glass border border-white/10 group"
                    >
                        <Image
                            src="/images/about1.png"
                            alt="Our Mission"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                            <h3 className="text-3xl font-bold text-white font-heading">OUR MISSION</h3>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 font-heading">Empowering the Next Generation</h3>
                        <p className="text-muted text-lg leading-relaxed mb-6">
                            At IEP (Intensive Education Place), our mission is simple yet profound: to bridge the gap between traditional academic learning and the practical demands of the modern world. We believe that true education goes beyond textbooks—it's about building confidence, critical thinking, and real-world skills.
                        </p>
                        <p className="text-muted text-lg leading-relaxed">
                            Founded with a vision to revolutionize local education, IEP serves as a hub where students from classes 9-12 not only excel in their exams but also gain exposure to professional fields like Graphic Design, Digital Marketing, and Computer Programming.
                        </p>
                    </motion.div>
                </div>

                {/* Additional Vision Visual */}
                <div className="grid md:grid-cols-2 gap-12 mb-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 md:order-1"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 font-heading">A Future of Excellence</h3>
                        <p className="text-muted text-lg leading-relaxed mb-6">
                            We envision a future where every student is equipped with the tools to succeed. Our state-of-the-art facilities and dedicated faculty ensure that learning is immersive and effective.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[300px] rounded-3xl overflow-hidden glass border border-white/10 order-1 md:order-2 group"
                    >
                        <Image
                            src="/images/about2.png"
                            alt="Our Vision"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </motion.div>
                </div>

                {/* Teaching Philosophy */}
                <div className="mb-24">
                    <SectionHeader title="Our Philosophy" centered={true} />
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {philosophyPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-start gap-4 p-6 glass rounded-2xl border border-white/5 hover:border-primary/30 transition-colors"
                            >
                                <CheckCircle2 className="text-primary shrink-0 mt-1" size={24} />
                                <p className="text-lg text-gray-300 font-medium">{point}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Closing Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <p className="text-xl text-white font-medium italic">
                        "We don't just teach; we mentor, guide, and inspire."
                    </p>
                </motion.div>
            </div>

            <CTA />
            <Footer />
        </main>
    );
}
