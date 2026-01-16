import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import Breadcrumbs from "@/components/Breadcrumbs";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IEP – Intensive Education Place",
  description: "Empowering Students with Knowledge & Skills",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-sans bg-background text-foreground selection:bg-primary selection:text-white`}
      >
        <ScrollProgress />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "IEP – Intensive Education Place",
              "url": "https://iep.edu.pk",
              "logo": "https://iep.edu.pk/logo.png",
              "founder": {
                "@type": "Person",
                "name": "Sir Zafar"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shah Faisal, Near Cadio, Colony no 3",
                "addressLocality": "Karachi",
                "addressCountry": "PK"
              },
              "sameAs": [
                "https://instagram.com/intensive_education_place",
                "https://facebook.com/intensiveeducationplace"
              ]
            })
          }}
        />
        <div className="fixed top-24 left-0 right-0 z-40">
          <Breadcrumbs />
        </div>
        {children}
      </body>
    </html>
  );
}
