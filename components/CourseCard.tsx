import { motion } from "framer-motion";
import { ArrowRight, Divide } from "lucide-react";
import Link from "next/link";
import { type LucideIcon } from "lucide-react";

interface CourseCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    href?: string;
    delay?: number;
}

export default function CourseCard({
    title,
    description,
    icon: Icon,
    href = "/courses",
    delay = 0,
}: CourseCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            className="group glass p-8 rounded-2xl relative overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 h-full flex flex-col will-change-transform [perspective:1000px] hover:shadow-2xl hover:shadow-primary/20"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-surface border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300 shadow-lg shadow-black/20">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-bold font-heading mb-3 group-hover:text-primary transition-colors duration-300">
                    {title}
                </h3>

                <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">
                    {description}
                </p>

                <Link
                    href={href}
                    className="relative z-20 inline-flex items-center gap-2 text-sm font-medium text-white/50 group-hover:text-white transition-colors cursor-pointer"
                >
                    Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    );
}
