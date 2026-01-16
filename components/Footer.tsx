import Link from "next/link";
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (

        <footer className="bg-surface pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2" />

            <div className="container px-6 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <h2 className="text-3xl font-bold font-heading tracking-tight text-white">IEP</h2>
                        </Link>
                        <p className="text-muted leading-relaxed max-w-sm">
                            Empowering students with quality education, modern skills, and the confidence to succeed in a digital world. Since 2005.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {[
                                { Icon: Instagram, href: "https://instagram.com/intensive_education_place", isLink: true },
                            ].map((item, i) => {
                                const commonClasses = "w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25";
                                if (item.isLink) {
                                    return (
                                        <Link
                                            key={i}
                                            href={item.href}
                                            className={commonClasses}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <item.Icon size={18} />
                                        </Link>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg text-white mb-8 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { name: "About Us", href: "/about" },
                                { name: "Courses", href: "/courses" },
                                { name: "Admissions", href: "/admissions" },
                                { name: "Contact", href: "/contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-muted hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Courses */}
                    <div>
                        <h4 className="font-bold text-lg text-white mb-8 relative inline-block">
                            Popular Courses
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary rounded-full"></span>
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Graphic Designing", href: "/courses/graphic-designing" },
                                { name: "Digital Marketing", href: "/courses/digital-marketing" },
                                { name: "Web Development", href: "/courses/web-development" },
                                { name: "English Language", href: "/courses/english-language" },
                                { name: "Ethical Hacking", href: "/courses/ethical-hacking" },
                            ].map((course) => (
                                <li key={course.name}>
                                    <Link
                                        href={course.href}
                                        className="text-muted hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                                    >
                                        {course.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-lg text-white mb-8 relative inline-block">
                            Contact Us
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-cta rounded-full"></span>
                        </h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 text-muted group">
                                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                    <MapPin size={20} />
                                </div>
                                <span className="group-hover:text-white transition-colors">
                                    Shah Faisal, Near Cadio,Colony no 3
                                </span>
                            </li>
                            <li className="flex items-center gap-4 text-muted group">
                                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                    <Phone size={20} />
                                </div>
                                <span className="group-hover:text-white transition-colors">+92 331 3369624</span>
                            </li>
                            <li className="flex items-center gap-4 text-muted group">
                                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                    <Mail size={20} />
                                </div>
                                <a href="mailto:info@iep.edu.pk" className="group-hover:text-white transition-colors">info@iep.edu.pk</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} IEP – Intensive Education Place. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <span className="w-1 h-1 rounded-full bg-border" />
                        <p>
                            Made by{" "}
                            <a
                                href="https://hadeedhussainmemon.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-primary transition-colors font-medium border-b border-white/20 hover:border-primary"
                            >
                                Hadeed Hussain
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
