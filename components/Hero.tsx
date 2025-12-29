import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.png"
                    alt="IEP Campus"
                    fill
                    className="object-cover opacity-50"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-50 relative z-0" />

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-[float_8s_ease-in-out_infinite] will-change-transform"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-[float_10s_ease-in-out_infinite_reverse] will-change-transform"
                />
            </div>

            <div className="container px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="will-change-transform"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-primary/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-sm font-medium text-gray-300">
                            Admissions Open for 2025
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-6">
                        Empowering Students with <br />
                        <span className="text-gradient">Knowledge & Skills</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
                        Unlock your potential with premium education in academic subjects and professional skills. Join IEP to learn, grow, and succeed in the digital age.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/courses"
                            className="px-8 py-3 rounded-full bg-cta text-white font-semibold flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25 bg-gradient-to-r from-primary to-purple-600"
                        >
                            Explore Courses <BookOpen size={20} />
                        </Link>
                        <Link
                            href="/admissions"
                            className="px-8 py-3 rounded-full glass border border-white/10 font-semibold hover:bg-white/5 flex items-center gap-2 hover:scale-105 transition-all duration-300"
                        >
                            Enroll Now <ArrowRight size={20} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
