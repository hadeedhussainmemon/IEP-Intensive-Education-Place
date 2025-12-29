import Link from "next/link";
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-surface pt-20 pb-10 border-t border-white/5">
            <div className="container px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="text-2xl font-bold font-heading tracking-tight">
                            IEP
                        </Link>
                        <p className="text-muted leading-relaxed">
                            Empowering students with quality education, modern skills, and the confidence to succeed in a digital world.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { Icon: Instagram, href: "https://instagram.com/intensive_education_place", isLink: true },
                            ].map((item, i) => {
                                const commonClasses = "w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300";
                                if (item.isLink) {
                                    return (
                                        <Link
                                            key={i}
                                            href={item.href}
                                            className={`${commonClasses} border border-white/10 group`}
                                        >
                                            <item.Icon size={20} className="group-hover:scale-110 transition-transform" />
                                        </Link>
                                    );
                                } else {
                                    return (
                                        <a
                                            key={i}
                                            href={item.href}
                                            className={commonClasses}
                                        >
                                            <item.Icon size={18} />
                                        </a>
                                    );
                                }
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold mb-6">Quick Links</h4>
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
                                        className="text-muted hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Courses */}
                    <div>
                        <h4 className="font-bold mb-6">Popular Courses</h4>
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
                                        className="text-muted hover:text-primary transition-colors block"
                                    >
                                        {course.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 text-muted">
                                <MapPin className="top-1 relative text-primary shrink-0" size={20} />
                                <span>123 Education Street, Knowledge City, Country</span>
                            </li>
                            <li className="flex items-center gap-4 text-muted">
                                <Phone className="text-primary shrink-0" size={20} />
                                <span>+92 331 3369624</span>
                            </li>
                            <li className="flex items-center gap-4 text-muted">
                                <Mail className="text-primary shrink-0" size={20} />
                                <span>info@itshadeed.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
                    <p>© {new Date().getFullYear()} IEP – Intensive Education Place. All rights reserved.</p>
                    <p>
                        Made by{" "}
                        <a
                            href="https://hadeedhussainmemon.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-primary transition-colors font-medium"
                        >
                            Hadeed Hussain
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
