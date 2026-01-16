import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-50 pointer-events-none" />
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="text-center relative z-10 px-6">
                <h1 className="text-9xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                    404
                </h1>
                <h2 className="text-3xl font-bold text-white mb-6">Page Not Found</h2>
                <p className="text-muted text-lg max-w-md mx-auto mb-10 leading-relaxed">
                    Oops! The page you are looking for seems to have gone on a sabbatical. Let's get you back on track.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="px-8 py-3 rounded-full bg-cta text-white font-semibold flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25 bg-gradient-to-r from-primary to-purple-600 active:scale-95"
                    >
                        <Home size={20} /> Go Home
                    </Link>
                    <Link
                        href="/courses"
                        className="px-8 py-3 rounded-full glass border border-white/10 font-semibold hover:bg-white/5 flex items-center gap-2 hover:scale-105 transition-all duration-300 active:scale-95 text-white"
                    >
                        <ArrowLeft size={20} /> Browse Courses
                    </Link>
                </div>
            </div>
        </div>
    );
}
