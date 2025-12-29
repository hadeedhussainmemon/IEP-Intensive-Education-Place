"use client";

import Navbar from "@/components/Navbar";
import SectionHeader from "@/components/SectionHeader";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
            <Navbar />

            <div className="pt-32 pb-20 container px-6">
                <SectionHeader
                    title="Get in Touch"
                    subtitle="We are here to answer your questions and help you start your journey."
                    centered={true}
                />

                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Contact Info Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="glass p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group text-center sm:text-left">
                            <MapPin className="text-primary mb-4 mx-auto sm:mx-0 group-hover:scale-110 transition-transform" size={30} />
                            <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                            <p className="text-muted text-sm">123 Education Street, Knowledge City, Country</p>
                        </div>
                        <div className="glass p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group text-center sm:text-left">
                            <Phone className="text-primary mb-4 mx-auto sm:mx-0 group-hover:scale-110 transition-transform" size={30} />
                            <h3 className="font-bold text-lg mb-2">Call Us</h3>
                            <p className="text-muted text-sm">+92 331 3369624</p>
                        </div>
                        <div className="glass p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group text-center sm:text-left">
                            <Mail className="text-primary mb-4 mx-auto sm:mx-0 group-hover:scale-110 transition-transform" size={30} />
                            <h3 className="font-bold text-lg mb-2">Email Us</h3>
                            <p className="text-muted text-sm">info@itshadeed.com</p>
                        </div>
                        <div className="glass p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group text-center sm:text-left">
                            <Clock className="text-primary mb-4 mx-auto sm:mx-0 group-hover:scale-110 transition-transform" size={30} />
                            <h3 className="font-bold text-lg mb-2">Office Hours</h3>
                            <p className="text-muted text-sm">Mon - Sat: 9:00 AM - 8:00 PM<br />Sunday: Closed</p>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    {/* Map / Building Image */}
                    <div className="w-full h-[400px] rounded-3xl overflow-hidden glass border border-white/5 relative bg-surface/50 group">
                        <Image
                            src="/images/contact1.jpg"
                            alt="IEP Campus Location"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 896px) 100vw, 896px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                            <div className="flex items-center gap-3 text-white">
                                <MapPin className="text-primary" size={24} />
                                <span className="font-medium">123 Education Street, Knowledge City</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
