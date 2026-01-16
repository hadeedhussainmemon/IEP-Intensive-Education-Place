"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Courses", href: "/courses" },
        { name: "Academics", href: "/academics" },
        { name: "Admissions", href: "/admissions" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-white/5 h-24 flex items-center transition-all duration-300 supports-[backdrop-filter]:bg-background/20">
            <div className="container mx-auto px-6 flex items-center justify-between h-full">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group relative z-50">
                    <div className="relative w-32 h-24 md:w-40 md:h-40 group-hover:scale-105 transition-transform duration-300 mt-4">
                        <Image
                            src="/logo.png"
                            alt="IEP Logo"
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                            sizes="(max-width: 768px) 128px, 160px"
                        />
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 bg-surface/30 px-8 py-3 rounded-full border border-white/5 backdrop-blur-md shadow-xl">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors duration-300 relative group py-1 ${isActive ? "text-white" : "text-gray-300 hover:text-white"
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                    }`} />
                            </Link>
                        );
                    })}
                </div>

                <div className="hidden md:flex items-center">
                    <Link
                        href="/admissions"
                        className="px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 ring-1 ring-white/20"
                    >
                        Enroll Now
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white hover:text-primary transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, y: -20 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden glass border-b border-white/5 overflow-hidden absolute top-24 left-0 right-0 shadow-2xl"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-muted hover:text-white text-lg font-medium transition-colors px-4 py-2 hover:bg-white/5 rounded-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/admissions"
                                className="mt-2 w-full text-center py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold shadow-lg active:scale-95 transition-transform"
                                onClick={() => setIsOpen(false)}
                            >
                                Enroll Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
