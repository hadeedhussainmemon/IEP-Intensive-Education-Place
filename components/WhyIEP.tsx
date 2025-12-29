import SectionHeader from "./SectionHeader";
import { BookOpen, Users, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        title: "Concept-Based Learning",
        description: "We move beyond rote memorization to ensure deep understanding of core concepts.",
        icon: BookOpen,
    },
    {
        title: "Professional Skills",
        description: "Equipping students with modern digital skills like graphics, programming, and marketing.",
        icon: Zap,
    },
    {
        title: "Modern Approach",
        description: "Utilizing latest teaching methodologies and technology to enhance the learning experience.",
        icon: Target,
    },
    {
        title: "Career Focused",
        description: "Guidance and mentoring to help students choose and excel in their future career paths.",
        icon: Users,
    },
];

export default function WhyIEP() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container px-6">
                <SectionHeader
                    title="Why Choose IEP?"
                    subtitle="We bridge the gap between traditional academics and modern professional requirements."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-surface/50 border border-white/5 hover:bg-surface hover:border-primary/20 transition-all duration-300 group will-change-transform hover:shadow-xl hover:shadow-primary/10"
                        >
                            <feature.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                            <h3 className="text-lg font-bold font-heading mb-2">{feature.title}</h3>
                            <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
