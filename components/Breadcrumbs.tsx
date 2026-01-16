"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs() {
    const pathname = usePathname();

    // Don't show on home page
    if (pathname === "/") return null;

    const paths = pathname.split("/").filter(Boolean);

    return (
        <div className="bg-surface/30 border-b border-white/5 backdrop-blur-sm">
            <div className="container px-6 py-3">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Link
                        href="/"
                        className="flex items-center gap-1 hover:text-white transition-colors"
                    >
                        <Home size={14} />
                        Home
                    </Link>

                    {paths.map((path, index) => {
                        const href = `/${paths.slice(0, index + 1).join("/")}`;
                        const isLast = index === paths.length - 1;

                        // Format the path name (replace dashes with spaces and capitalize)
                        const label = path
                            .replace(/-/g, " ")
                            .replace(/\b\w/g, (c) => c.toUpperCase());

                        return (
                            <div key={path} className="flex items-center gap-2">
                                <ChevronRight size={14} className="text-white/20" />
                                {isLast ? (
                                    <span className="text-primary font-medium">{label}</span>
                                ) : (
                                    <Link
                                        href={href}
                                        className="hover:text-white transition-colors"
                                    >
                                        {label}
                                    </Link>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
