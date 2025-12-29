"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyIEP from "@/components/WhyIEP";
import CoursesGallery from "@/components/CoursesGallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  // Smooth scroll fix for Next.js if needed or general init
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <WhyIEP />
      <CoursesGallery />
      <CTA />
      <Footer />
    </main>
  );
}
