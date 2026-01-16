import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function CTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-primary/5" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px]" />

            <div className="container px-6 relative z-10">
                <div className="glass rounded-3xl p-12 md:p-16 text-center border border-white/10 shadow-2xl overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold font-heading mb-6"
                    >
                        Ready to Start Your Journey?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted text-lg max-w-2xl mx-auto mb-10"
                    >
                        Join IEP today and empower yourself with the knowledge and skills needed for a successful future.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <MagneticButton>
                            <Link
                                href="/admissions"
                                className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
                            >
                                Enroll Now <ArrowRight size={20} />
                            </Link>
                        </MagneticButton>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
